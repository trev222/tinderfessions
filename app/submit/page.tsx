import type { Metadata } from "next";
import { SubmissionForm } from "@/components/SubmissionForm";
import { editorialEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Submit an anonymous dating story",
  description: "Send Tinderfessions your dating confession for anonymous editorial review and publication.",
  alternates: { canonical: "/submit/" },
};

export default function SubmitPage() {
  return (
    <main className="page-main section-pad submit-page">
      <div className="site-shell submit-layout">
        <div className="submit-intro">
          <span className="kicker">Your turn</span>
          <h1>Tell us everything. Keep them anonymous.</h1>
          <p>
            The best confession has a scene, a turn, and an ending. Change identifying
            details, keep it truthful, and let the weird part breathe.
          </p>
          <div className="submission-rules">
            <h2>Before you hit send</h2>
            <ol>
              <li><span>01</span><p><strong>Everybody is 18+.</strong> No stories involving minors, ever.</p></li>
              <li><span>02</span><p><strong>Blur the identities.</strong> No surnames, handles, workplaces, addresses, or recognizable photos.</p></li>
              <li><span>03</span><p><strong>It’s your story.</strong> Don’t submit private messages or someone else’s experience without permission.</p></li>
              <li><span>04</span><p><strong>We moderate everything.</strong> Submission does not guarantee publication, and editors may trim or clarify.</p></li>
            </ol>
          </div>
        </div>
        <div>
          <div className="static-form-note">
            <strong>How this works on a static site</strong>
            <p>
              The page does not store your draft. The final button opens your email app with
              the story pre-filled for <b>{editorialEmail}</b>. Your email address
              will be visible to the editor but never published.
            </p>
          </div>
          <SubmissionForm />
        </div>
      </div>
    </main>
  );
}
