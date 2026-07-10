import type { Metadata } from "next";
import { editorialEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Content removal & takedown requests",
  description: "Request review or removal of material published on Tinderfessions.",
  alternates: { canonical: "/takedown/" },
};

export default function TakedownPage() {
  return (
    <main className="page-main section-pad legal-page">
      <div className="site-shell narrow-shell">
        <header className="page-hero"><span className="kicker">Removal requests</span><h1>Something here should come down?</h1><p>Send enough information for us to find it. Do not send more private information than necessary.</p></header>
        <section className="takedown-card">
          <span>EMAIL</span>
          <a href={`mailto:${editorialEmail}?subject=Tinderfessions%20takedown%20request`}>{editorialEmail}</a>
          <h2>Include:</h2>
          <ul>
            <li>The exact Tinderfessions page URL</li>
            <li>What material concerns you and why</li>
            <li>Whether you are the submitter, a person described, or a rights holder</li>
            <li>A safe way to reply</li>
          </ul>
          <p>Requests involving exposed personal information, safety risks, impersonation, or non-consensual material receive priority review.</p>
        </section>
      </div>
    </main>
  );
}
