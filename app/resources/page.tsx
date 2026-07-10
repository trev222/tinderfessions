import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dating safety & support resources",
  description: "A curated directory of official dating safety, scam prevention, reporting, and support resources.",
  alternates: { canonical: "/resources/" },
};

const resources = [
  {
    tag: "Before meeting",
    title: "Tinder’s IRL safety guide",
    description: "Practical reminders about public meeting places, transportation, personal information, and keeping trusted people informed.",
    source: "Tinder Safety Center",
    href: "https://policies.tinder.com/web/safety-center/guide/irl/us/en/",
  },
  {
    tag: "Reporting",
    title: "How to report a Tinder account",
    description: "Official instructions for reporting profiles, messages, offline conduct, and people who have already unmatched.",
    source: "Tinder Safety Center",
    href: "https://policies.tinder.com/web/safety-center/tools/how-to-report/intl/en/",
  },
  {
    tag: "Scam prevention",
    title: "What to know about romance scams",
    description: "Common scam stories, warning signs, payment red flags, and official reporting guidance.",
    source: "U.S. Federal Trade Commission",
    href: "https://consumer.ftc.gov/articles/what-know-about-romance-scams",
  },
  {
    tag: "Sexual assault support",
    title: "RAINN National Sexual Assault Hotline",
    description: "Free, confidential, 24/7 support by phone, text, and online chat in the United States.",
    source: "RAINN",
    href: "https://rainn.org/help-and-healing/hotline/",
  },
  {
    tag: "Relationship abuse support",
    title: "National Domestic Violence Hotline",
    description: "Confidential support, safety planning, and local resources for people affected by relationship abuse in the United States.",
    source: "The Hotline",
    href: "https://www.thehotline.org/get-help/",
  },
];

export default function ResourcesPage() {
  return (
    <main className="page-main section-pad resources-page">
      <div className="site-shell">
        <header className="page-hero">
          <span className="kicker">Useful, not preachy</span>
          <h1>Keep the story. Skip the danger.</h1>
          <p>
            Official resources for meeting safely, spotting scams, reporting harmful behavior,
            and finding confidential support.
          </p>
        </header>
        <div className="resource-list">
          {resources.map((resource, index) => (
            <a href={resource.href} key={resource.href} rel="noopener noreferrer" target="_blank">
              <span className="resource-count">0{index + 1}</span>
              <div>
                <span className="pill">{resource.tag}</span>
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
                <small>{resource.source} · External resource</small>
              </div>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
        <aside className="resource-disclaimer">
          <strong>If you are in immediate danger</strong>
          <p>Contact your local emergency services. Tinderfessions is an editorial website, not a crisis or reporting service.</p>
        </aside>
      </div>
    </main>
  );
}
