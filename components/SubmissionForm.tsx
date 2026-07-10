"use client";

import { FormEvent, useState } from "react";
import { editorialEmail } from "@/lib/site";

function formatSubmission(form: HTMLFormElement) {
  const data = new FormData(form);
  return [
    "TINDERFESSIONS SUBMISSION",
    "",
    `Display name: ${data.get("alias") || "Anonymous"}`,
    `Category: ${data.get("category") || "Uncategorized"}`,
    `Content notes: ${data.get("warnings") || "None provided"}`,
    "",
    "STORY",
    String(data.get("story") || ""),
    "",
    "I confirm that I am 18+, that this is my story to share, and that I have removed identifying details.",
  ].join("\n");
}

export function SubmissionForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const body = formatSubmission(form);
    const subject = encodeURIComponent("New anonymous Tinderfession");
    window.location.href = `mailto:${editorialEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the story ready to send.");
  }

  async function copyDraft() {
    const form = document.querySelector<HTMLFormElement>("#submission-form");
    if (!form) return;
    try {
      await navigator.clipboard.writeText(formatSubmission(form));
      setStatus("Draft copied to your clipboard.");
    } catch {
      setStatus("Copy was blocked by your browser. Select the story text and copy it manually.");
    }
  }

  return (
    <form className="submission-form" id="submission-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Display name <span>optional</span>
          <input name="alias" placeholder="Anonymous is perfectly fine" type="text" />
        </label>
        <label>
          Pick a plot
          <select name="category" defaultValue="First-Date Chaos">
            <option>First-Date Chaos</option>
            <option>Ghosted</option>
            <option>Plot Twist</option>
            <option>Actually Wholesome</option>
            <option>Red Flags</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label>
        Your confession
        <textarea
          name="story"
          minLength={80}
          required
          rows={12}
          placeholder="Set the scene, tell us what happened, and give us the ending your group chat got..."
        />
      </label>

      <label>
        Content notes <span>optional</span>
        <input name="warnings" placeholder="For example: harassment, alcohol, scam" type="text" />
      </label>

      <div className="consent-box">
        <label className="check-label">
          <input name="adult" required type="checkbox" />
          <span>I am at least 18 years old.</span>
        </label>
        <label className="check-label">
          <input name="rights" required type="checkbox" />
          <span>I own this story and give Tinderfessions permission to edit and publish it anonymously.</span>
        </label>
        <label className="check-label">
          <input name="privacy" required type="checkbox" />
          <span>I removed surnames, handles, workplaces, addresses, and other identifying details.</span>
        </label>
      </div>

      <div className="form-actions">
        <button className="button" type="submit">Open in email</button>
        <button className="button button-ghost" onClick={copyDraft} type="button">Copy draft</button>
      </div>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
