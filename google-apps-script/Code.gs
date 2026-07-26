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

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: "New Cleaning Service Request — " + (data.name || "Unknown"),
        body: HEADERS.map((h, i) => h + ": " + row[i]).join("\n"),
      });
    }

    return jsonResponse_({ result: "success" });
  } catch (err) {
    return jsonResponse_({ result: "error", message: String(err) });
  }
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
