"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { hearAboutOptions, serviceOptions, site } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-sm text-navy-950 placeholder:text-navy-800/40 shadow-sm outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-400/40";

const labelClass = "mb-1.5 block text-sm font-semibold text-navy-900";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
        {required && <span className="ml-0.5 text-gold-600">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function ServiceRequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!site.formspreeEndpoint) {
      const params = new URLSearchParams();
      formData.forEach((value, key) => params.append(key, String(value)));
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "New Cleaning Service Request"
      )}&body=${encodeURIComponent(params.toString().replace(/&/g, "\n"))}`;
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        setError(data?.errors?.[0]?.message ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again or call/email us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-gold-500/20 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="h-14 w-14 text-gold-500" />
        <h3 className="mt-5 text-xl font-bold text-navy-950">Request received!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-800/70">
          Thanks for reaching out to Hustle &amp; Motivation Cleaning Co. We&apos;ll get back
          to you shortly to confirm your free estimate.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-navy-900/15 px-5 py-2 text-sm font-semibold text-navy-900 hover:bg-navy-900/5"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm sm:p-8">
      <div className="space-y-8">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Contact Info
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" htmlFor="name" required>
              <input id="name" name="name" type="text" required className={inputClass} />
            </Field>
            <Field label="Phone Number" htmlFor="phone" required>
              <input id="phone" name="phone" type="tel" required className={inputClass} />
            </Field>
            <Field label="Email" htmlFor="email" required>
              <input id="email" name="email" type="email" required className={inputClass} />
            </Field>
            <Field label="ZIP Code" htmlFor="zip" required>
              <input id="zip" name="zip" type="text" required className={inputClass} />
            </Field>
            <Field label="Street Address" htmlFor="address" required>
              <input id="address" name="address" type="text" required className={inputClass} />
            </Field>
            <Field label="City" htmlFor="city" required>
              <input id="city" name="city" type="text" required className={inputClass} />
            </Field>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Service Details
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Service Requested" htmlFor="service" required>
              <select id="service" name="service" required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Preferred Time" htmlFor="preferredTime">
              <select id="preferredTime" name="preferredTime" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select a time
                </option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </Field>
            <Field label="Bedrooms" htmlFor="bedrooms">
              <input id="bedrooms" name="bedrooms" type="number" min={0} className={inputClass} />
            </Field>
            <Field label="Bathrooms" htmlFor="bathrooms">
              <input id="bathrooms" name="bathrooms" type="number" min={0} className={inputClass} />
            </Field>
            <Field label="Preferred Date" htmlFor="preferredDate">
              <input id="preferredDate" name="preferredDate" type="date" className={inputClass} />
            </Field>
            <Field label="How Did You Hear About Us?" htmlFor="hearAboutUs">
              <select id="hearAboutUs" name="hearAboutUs" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select an option
                </option>
                {hearAboutOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            A Few More Details
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <fieldset>
              <legend className={labelClass}>Pets in the home?</legend>
              <div className="flex gap-4 pt-1">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-sm text-navy-800">
                    <input type="radio" name="petsInHome" value={option} className="h-4 w-4 accent-gold-500" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className={labelClass}>Will someone be home?</legend>
              <div className="flex gap-4 pt-1">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-sm text-navy-800">
                    <input type="radio" name="someoneHome" value={option} className="h-4 w-4 accent-gold-500" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="mt-4 grid gap-4">
            <Field label="Priority Areas / Special Requests" htmlFor="priorityAreas">
              <textarea id="priorityAreas" name="priorityAreas" rows={3} className={inputClass} />
            </Field>
            <Field label="Additional Information" htmlFor="additionalInfo">
              <textarea id="additionalInfo" name="additionalInfo" rows={3} className={inputClass} />
            </Field>
          </div>
        </div>

        <label className="flex items-start gap-3 text-sm text-navy-800/80">
          <input
            type="checkbox"
            name="agreement"
            required
            className="mt-0.5 h-4 w-4 shrink-0 accent-gold-500"
          />
          I confirm the details above are accurate and agree to be contacted about
          this cleaning request.
        </label>

        {status === "error" && (
          <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/25 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending request...
            </>
          ) : (
            <>
              Submit Request
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
