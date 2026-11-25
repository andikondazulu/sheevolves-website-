"use client";
import { useState } from "react";

export default function Newsletter() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="newsletter"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to your email service (Mailchimp, Resend, etc.)
        setSent(true);
      }}
    >
      <label htmlFor="email">Newsletter</label>
      <p>Join our community. Stay connected.</p>
      <div className="newsletter-row">
        <input id="email" type="email" placeholder="Your email" required />
        <button className="btn btn-solid" type="submit">
          {sent ? "Thank you" : "Send"}
        </button>
      </div>
    </form>
  );
}