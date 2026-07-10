import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the independent Tinderfessions revival",
  description: "Who operates Tinderfessions today, how the site handles historical context, and how stories are labeled and moderated.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <main className="page-main section-pad about-page">
      <div className="site-shell narrow-shell">
        <header className="page-hero">
          <span className="kicker">About this revival</span>
          <h1>A famous premise. A genuinely fresh start.</h1>
          <p>Tinderfessions is a new independent editorial site for anonymous dating stories.</p>
        </header>

        <section className="prose-section ownership-box">
          <span className="label-tag">THE IMPORTANT BIT</span>
          <h2>New ownership means new boundaries.</h2>
          <p>
            The current operator owns the tinderfessions.com domain only. We do not own,
            operate, represent, or speak for the historical @tinderfessions account or its
            former operators. We also do not claim ownership of submissions previously sent
            to that account or the old website.
          </p>
          <p>
            When we discuss or link to the public archive, we identify it as historical and
            retain clear attribution. We do not repackage old posts as new submissions.
          </p>
        </section>

        <section className="prose-section">
          <span className="kicker">Our labels</span>
          <h2>What you’re reading</h2>
          <div className="label-explainer">
            <div><strong>Editorial composite</strong><p>An original fictionalized piece blending familiar scenarios. It is never presented as a real submission.</p></div>
            <div><strong>Reader submission</strong><p>A story sent to the current site with publication permission, anonymized and edited for clarity.</p></div>
            <div><strong>Public archive</strong><p>A clearly attributed link or official embed from a historical public source, accompanied by new context.</p></div>
          </div>
        </section>

        <section className="prose-section">
          <span className="kicker">Editorial policy</span>
          <h2>Funny without being cruel.</h2>
          <p>
            We publish the experience, not the identity. We remove identifying details,
            reject content involving minors, and do not publish doxxing, revenge material,
            non-consensual intimate imagery, unsupported criminal accusations, or stories
            whose primary purpose is humiliation.
          </p>
          <p>
            Stories involving abuse, coercion, scams, or safety concerns may be declined,
            reframed, or paired with support resources. Entertainment never outranks someone’s safety.
          </p>
        </section>

        <section className="prose-section trademark-box">
          <h2>Trademark and affiliation</h2>
          <p>
            Tinderfessions is not affiliated with, endorsed by, or sponsored by Tinder LLC
            or Match Group. TINDER and related marks belong to their respective owners. The
            site does not use Tinder’s flame logo or present itself as an official service.
          </p>
        </section>

        <div className="about-cta">
          <p>Have a story that fits the new chapter?</p>
          <Link className="button" href="/submit/">Submit a confession</Link>
        </div>
      </div>
    </main>
  );
}
