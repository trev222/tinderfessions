import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & submission agreement",
  description: "Tinderfessions website terms, submission permissions, moderation rules, and independent-status notice.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <main className="page-main section-pad legal-page">
      <div className="site-shell narrow-shell">
        <header className="page-hero"><span className="kicker">Last updated July 10, 2026</span><h1>Terms & submission agreement</h1></header>
        <section className="legal-copy">
          <h2>Entertainment and editorial context</h2>
          <p>Tinderfessions publishes entertainment and general informational material. It does not provide legal, medical, mental-health, or personal-safety advice.</p>
          <h2>Submission requirements</h2>
          <p>By submitting a story, you confirm that you are at least 18, have the right to share it, and have removed identifying details belonging to other people. You must not submit content involving minors, doxxing, non-consensual intimate material, impersonation, threats, or content that violates another person’s rights.</p>
          <h2>Permission to publish</h2>
          <p>You keep ownership of your original writing. You grant Tinderfessions a non-exclusive, worldwide, royalty-free permission to review, edit, format, publish, promote, archive, and remove the submitted story in connection with the website and its current social channels.</p>
          <h2>Editing and moderation</h2>
          <p>Editors may correct grammar, shorten a submission, change nonessential details for anonymity, add content notes, decline publication, or remove published material. Submission does not guarantee publication.</p>
          <h2>Historical content</h2>
          <p>The current operator owns the tinderfessions.com domain only and does not claim ownership of submissions sent to previous operators or historical social accounts.</p>
          <h2>Independent status</h2>
          <p>Tinderfessions is not affiliated with Tinder LLC, Match Group, or the historical @tinderfessions social accounts. Third-party marks and linked resources belong to their respective owners.</p>
        </section>
      </div>
    </main>
  );
}
