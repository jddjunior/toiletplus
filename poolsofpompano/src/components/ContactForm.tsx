"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cities } from "@/lib/data/cities";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong. Please call us instead.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-brand-100 bg-brand-50/60 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-500" />
        <h3 className="mt-4 text-xl font-bold text-brand-950">Got it — thanks!</h3>
        <p className="mt-2 max-w-sm text-sm text-brand-800/80">
          We&apos;ll call or text you back within one business day to schedule your
          free pool assessment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-brand-200 px-4 py-3 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-900">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-xl border border-brand-200 px-4 py-3 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            placeholder="(954) 555-0100"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-xl border border-brand-200 px-4 py-3 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-semibold text-brand-900">
            City
          </label>
          <select
            id="city"
            name="city"
            className="w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            defaultValue=""
          >
            <option value="" disabled>
              Select your city
            </option>
            {cities.map((city) => (
              <option key={city.slug} value={city.name}>
                {city.name}
              </option>
            ))}
            <option value="other">Other / not listed</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-900">
          What&apos;s going on with your pool?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-brand-200 px-4 py-3 text-sm text-brand-950 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          placeholder="Weekly cleaning, green pool, equipment issue, storm cleanup..."
        />
      </div>

      {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-sun-500 px-6 py-3.5 text-sm font-bold text-brand-950 shadow-lg shadow-sun-500/20 transition-colors hover:bg-sun-400 disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Get My Free Pool Quote"
        )}
      </button>
      <p className="text-center text-xs text-brand-800/60">
        No spam, ever. We only use this to schedule your free assessment.
      </p>
    </form>
  );
}
