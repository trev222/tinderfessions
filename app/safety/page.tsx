import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "First-date safety checklist",
  description: "A practical first-date safety checklist plus official reporting, scam prevention, and support resources.",
  alternates: { canonical: "/safety/" },
};

const checklist = [
  ["Meet in public", "Choose a populated place you know, and avoid changing locations under pressure."],
  ["Own your transport", "Plan how you will arrive and leave without relying on the person you are meeting."],
  ["Tell someone", "Share the person’s profile, your destination, and a check-in time with someone you trust."],
  ["Protect your details", "Keep your home address, routine, financial information, and private accounts private."],
  ["Watch your drink", "Keep food and drinks in sight, and know how alcohol or other substances affect you."],
  ["Leave when you want", "Discomfort is enough of a reason. You do not owe anyone politeness, an explanation, or a second location."],
];

export default function SafetyPage() {
  return (
    <main className="page-main section-pad safety-page">
      <div className="site-shell">
        <header className="page-hero">
          <span className="kicker">Before the plot begins</span>
          <h1>Six things worth doing before a first date.</h1>
          <p>A short checklist cannot guarantee safety, but it can keep important decisions in your hands.</p>
        </header>
        <div className="safety-grid">
          {checklist.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="safety-bottom">
          <div>
            <span className="kicker">Not your fault</span>
            <h2>If someone harms you, responsibility belongs to them.</h2>
            <p>
              Safety precautions do not transfer blame to a victim. If you need confidential
              support or reporting information, our resource directory links directly to specialist organizations.
            </p>
          </div>
          <Link className="button button-dark" href="/resources/">Open support resources</Link>
        </div>
      </div>
    </main>
  );
}
