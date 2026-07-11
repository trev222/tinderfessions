import type { Metadata } from "next";
import { editorialEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Tinderfessions handles visitor data, drafts, submissions, and removal requests.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <main className="page-main section-pad legal-page">
      <div className="site-shell narrow-shell">
        <header className="page-hero"><span className="kicker">Last updated July 10, 2026</span><h1>Privacy policy</h1></header>
        <section className="legal-copy">
          <h2>The short version</h2>
          <p>This is a static website. It does not create user accounts, run its own database, or store submission drafts in the page.</p>
          <h2>Hosting information</h2>
          <p>The site is hosted through GitHub Pages. GitHub may log visitor IP addresses and technical request information for security and service operation under its own privacy statement.</p>
          <h2>Submission drafts</h2>
          <p>The submission form prepares text inside your browser. Choosing “Open in email” passes the draft to your configured email application. Choosing “Copy draft” copies it to your device clipboard. The website does not receive either action by itself.</p>
          <h2>Bookmarks and verdicts</h2>
          <p>Saved stories and Jury verdicts are stored in your browser’s local storage. They stay on that device, are not sent to Tinderfessions, and can be removed by unsaving a story, changing a verdict, or clearing the browser’s site data.</p>
          <h2>Email submissions</h2>
          <p>If you send a submission by email, the message and sender address are received in the Tinderfessions editorial inbox. The sender address is used only for moderation, clarification, permission records, and removal requests. It is not published with the story.</p>
          <h2>Data minimization</h2>
          <p>Please do not send surnames, social handles, workplaces, addresses, private images, or other details that could identify another person. Editors may delete identifying information from accepted stories.</p>
          <h2>Removal and contact</h2>
          <p>To request removal or ask a privacy question, email <a href={`mailto:${editorialEmail}?subject=Tinderfessions%20privacy%20or%20removal%20request`}>{editorialEmail}</a> with the relevant page URL.</p>
        </section>
      </div>
    </main>
  );
}
