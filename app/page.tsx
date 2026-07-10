import type { Metadata } from "next";
import Link from "next/link";
import { ConfessionCard } from "@/components/ConfessionCard";
import { confessions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Anonymous dating stories, plot twists & first-date chaos",
  description:
    "Read anonymous dating confessions, first-date disasters, ghosting stories, plot twists, and unexpectedly wholesome endings.",
  alternates: { canonical: "/" },
};

const plotCards = [
  { number: "01", name: "First-Date Chaos", note: "When the plan goes spectacularly off-script.", accent: "coral" },
  { number: "02", name: "Ghosted", note: "Silence, sightings, and the closure nobody ordered.", accent: "lavender" },
  { number: "03", name: "Plot Twist", note: "The ending your group chat did not predict.", accent: "sky" },
  { number: "04", name: "Actually Wholesome", note: "Proof the apps occasionally choose peace.", accent: "lime" },
];

export default function Home() {
  const featured = confessions[0];
  const latest = confessions.slice(1, 7);

  return (
    <main>
      <section className="hero section-pad">
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span>18+</span> Anonymous-ish. Always moderated.</div>
            <h1>The stories your <em>group chat</em> couldn’t hold.</h1>
            <p className="hero-lede">
              First-date disasters, vanishing acts, suspicious playlists, and the rare
              ending that makes you believe in the apps again.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/confessions/">Read the receipts</Link>
              <Link className="button button-ghost" href="/submit/">Tell us everything</Link>
            </div>
            <p className="ownership-note">
              <strong>Fresh start, same irresistible premise.</strong> New independent ownership;
              no connection to the historical social accounts.
            </p>
          </div>

          <Link className="hero-confession" href={`/confessions/${featured.slug}/`}>
            <span className="tape-label">CONFESSION #{featured.number}</span>
            <span className="scribble" aria-hidden="true">true story energy</span>
            <blockquote>“{featured.quote}”</blockquote>
            <span className="hero-confession-title">{featured.title}</span>
            <span className="hero-confession-meta">{featured.category} · {featured.readTime} read</span>
            <span className="circle-arrow" aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <div className="ticker" aria-label="Site values">
        <div>
          <span>NO REAL NAMES</span><i>✦</i><span>NO JUDGMENT</span><i>✦</i>
          <span>NO MINORS</span><i>✦</i><span>READER DISCRETION</span><i>✦</i>
          <span>GOOD STORIES ONLY</span>
        </div>
      </div>

      <section className="section-pad plot-section">
        <div className="site-shell">
          <div className="section-heading split-heading">
            <div>
              <span className="kicker">Choose your chaos</span>
              <h2>Pick a plot.</h2>
            </div>
            <p>Whatever happened out there, somebody else has probably screenshotted it too.</p>
          </div>
          <div className="plot-grid">
            {plotCards.map((plot) => (
              <Link className={`plot-card accent-${plot.accent}`} href="/confessions/" key={plot.name}>
                <span>{plot.number}</span>
                <h3>{plot.name}</h3>
                <p>{plot.note}</p>
                <b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad latest-section">
        <div className="site-shell">
          <div className="section-heading split-heading">
            <div>
              <span className="kicker">Fresh from the group chat</span>
              <h2>Latest confessions.</h2>
            </div>
            <Link className="text-link large" href="/confessions/">Open the full archive ↗</Link>
          </div>
          <div className="story-grid">
            {latest.map((confession) => (
              <ConfessionCard confession={confession} key={confession.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad archive-callout">
        <div className="site-shell archive-panel">
          <div className="archive-stamp" aria-hidden="true">
            <span>EST.</span><strong>2014</strong><span>INTERNET LORE</span>
          </div>
          <div>
            <span className="kicker">From the public archive</span>
            <h2>Before every date became a podcast, there was a tweet.</h2>
            <p>
              The original Tinderfessions social account helped turn anonymous dating
              mishaps into internet folklore. We preserve that history with attribution—
              without pretending it belongs to us.
            </p>
            <div className="inline-links">
              <a href="https://x.com/tinderfessions" rel="noopener noreferrer" target="_blank">
                Visit the historical account ↗
              </a>
              <Link href="/about/">Read our ownership note →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad resource-preview">
        <div className="site-shell resource-preview-grid">
          <div>
            <span className="kicker">Keep the plot, lose the risk</span>
            <h2>A good story should still be a safe one.</h2>
          </div>
          <div className="resource-mini-grid">
            <Link href="/safety/"><span>01</span><strong>Before you meet</strong><b>↗</b></Link>
            <Link href="/resources/"><span>02</span><strong>Spot a romance scam</strong><b>↗</b></Link>
            <Link href="/resources/"><span>03</span><strong>Report & get support</strong><b>↗</b></Link>
          </div>
        </div>
      </section>

      <section className="section-pad submit-cta">
        <div className="site-shell submit-cta-inner">
          <span className="cta-sticker">YOUR TURN</span>
          <p>Names changed.<br />Details blurred.<br />Story intact.</p>
          <div>
            <h2>Got a confession?</h2>
            <p>Give your group chat a day off. We’ll publish it anonymously after review.</p>
            <Link className="button button-dark" href="/submit/">Start typing</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
