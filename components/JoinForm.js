"use client";
import { useState } from "react";

// 1. Go to https://formspree.io and create a free form (it emails you every submission).
// 2. Paste your form link here, e.g. "https://formspree.io/f/abcdwxyz"
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const interests = [
  "Career support",
  "Themed get-together parties",
  "Weekly check-in",
  "Weekly sports hour (yoga, pilates)",
];

export default function JoinForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <h2>Welcome, sister!</h2>
        <p>
          Thank you for joining SheEvolves Co. We have received your details and
          will be in touch soon.
        </p>
        <a href="/" className="btn btn-solid">Back to home</a>
      </div>
    );
  }

  return (
    <form className="join-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="city">Where are you based?</label>
        <input id="city" name="city" type="text" placeholder="e.g. Lusaka" />
      </div>

      <fieldset className="field">
        <legend>What would you like from the community?</legend>
        <div className="check-grid">
          {interests.map((item) => (
            <label key={item} className="check-option">
              <input type="checkbox" name="interests" value={item} />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="about">Tell us a little about yourself (optional)</label>
        <textarea id="about" name="about" rows={4} />
      </div>

      <button className="btn btn-solid btn-block" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Join SheEvolves Co."}
      </button>

      {status === "error" && (
        <p className="form-error" role="alert">
          Something went wrong and your form was not sent. Please check your
          connection and try again.
        </p>
      )}
    </form>
  );
}