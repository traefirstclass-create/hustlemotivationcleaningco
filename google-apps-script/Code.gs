/**
 * Receives service-request submissions from the website's Contact form
 * and appends them as a new row in this spreadsheet, in their own tab
 * (separate from the legacy Google Form's "Form Responses" tab).
 *
 * Setup: paste this into the Apps Script editor for the spreadsheet
 * (Extensions > Apps Script), then Deploy > New deployment > Web app,
 * "Execute as: Me", "Who has access: Anyone". Copy the resulting /exec
 * URL into the site's NEXT_PUBLIC_FORM_ENDPOINT env var.
 */

const SHEET_NAME = "Website Requests";
// Set to "" to turn off the email notification.
const NOTIFY_EMAIL = "hustlemotivationcleaning@gmail.com";

const HEADERS = [
  "Timestamp",
  "Full Name",
  "Phone",
  "Email",
  "Street Address",
  "City",
  "ZIP",
  "Service Requested",
  "Bedrooms",
  "Bathrooms",
  "Preferred Date",
  "Preferred Time",
  "Pets In Home",
  "Someone Home",
  "Priority Areas / Special Requests",
  "How Did You Hear About Us",
  "Additional Information",
  "Agreement Confirmed",
];

function doPost(e) {
  try {
    const data = e.parameter;
    const sheet = getOrCreateSheet_();

    const row = [
      new Date(),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.address || "",
      data.city || "",
      data.zip || "",
      data.service || "",
      data.bedrooms || "",
      data.bathrooms || "",
      data.preferredDate || "",
      data.preferredTime || "",
      data.petsInHome || "",
      data.someoneHome || "",
      data.priorityAreas || "",
      data.hearAboutUs || "",
      data.additionalInfo || "",
      data.agreement ? "Yes" : "No",
    ];

    sheet.appendRow(row);

    // The row is already saved at this point — a submission should never
    // be reported as failed just because the notification email had an
    // issue, so email errors are caught separately and only logged.
    if (NOTIFY_EMAIL) {
      try {
        MailApp.sendEmail({
          to: NOTIFY_EMAIL,
          name: "Hustle & Motivation Website",
          subject: "New Cleaning Service Request — " + (data.name || "Unknown"),
          body: HEADERS.map((h, i) => h + ": " + row[i]).join("\n"),
        });
      } catch (emailErr) {
        Logger.log("Email notification failed: " + emailErr);
      }
    }

    return jsonResponse_({ result: "success" });
  } catch (err) {
    return jsonResponse_({ result: "error", message: String(err) });
  }
}

/**
 * Run this manually from the Apps Script editor (select "testDoPost" in
 * the function dropdown, then click Run) to verify the sheet row and
 * email notification both work — this also triggers the one-time
 * authorization prompt for spreadsheet + Gmail access, before you wire
 * up the live website. Check View > Logs afterward for the result, and
 * check the "Website Requests" tab and your inbox (including spam).
 */
function testDoPost() {
  const fakeEvent = {
    parameter: {
      name: "Test User",
      phone: "555-555-5555",
      email: "test@example.com",
      address: "123 Main St",
      city: "Wesley Chapel",
      zip: "33544",
      service: "Deep Cleaning",
      bedrooms: "3",
      bathrooms: "2",
      preferredDate: "2026-08-01",
      preferredTime: "Morning",
      petsInHome: "No",
      someoneHome: "Yes",
      priorityAreas: "Kitchen and bathrooms",
      hearAboutUs: "Social Media",
      additionalInfo: "This is a test submission from testDoPost().",
      agreement: "on",
    },
  };
  const result = doPost(fakeEvent);
  Logger.log(result.getContent());
}

function getOrCreateSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
