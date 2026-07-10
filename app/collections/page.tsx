import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dating story collections",
  description: "Curated collections of first-date chaos, ghosting stories, plot twists, and surprisingly wholesome dating moments.",
  alternates: { canonical: "/collections/" },
};

const collections = [
  {
    number: "01",
    title: "Dates that should have been an email",
    description: "Presentations, interviews, agendas, and other ways to turn chemistry into administration.",
    stories: ["He brought a PowerPoint", "My date brought a roommate", "The eleven-minute date"],
    accent: "coral",
  },
  {
    number: "02",
    title: "The ghosting files",
    description: "Disappearances, accidental reunions, and the awkward places closure eventually turns up.",
    stories: ["Ghosted at a wedding", "The accidental double-date", "Read receipts at dawn"],
    accent: "lavender",
  },
  {
    number: "03",
    title: "Plot twists with good lighting",
    description: "The suspicious profile, the surprising explanation, and endings nobody predicted.",
    stories: ["The catfish who wasn’t", "The emergency contact", "The dog chose first"],
    accent: "sky",
  },
  {
    number: "04",
    title: "Actually, this one is sweet",
    description: "For when the group chat needs evidence that a date can end without a committee meeting.",
    stories: ["The dog chose first", "Soup on the second date", "The wrong emergency contact"],
    accent: "lime",
  },
];

export default function CollectionsPage() {
  return (
    <main className="page-main section-pad collections-page">
      <div className="site-shell">
        <header className="page-hero">
          <span className="kicker">Editor’s cuts</span>
          <h1>Come for one story. Lose an hour.</h1>
          <p>Themed collections for every flavor of bad decision and improbable ending.</p>
        </header>
        <div className="collection-grid">
          {collections.map((collection) => (
            <article className={`collection-card accent-${collection.accent}`} key={collection.number}>
              <span className="collection-number">COLLECTION {collection.number}</span>
              <h2>{collection.title}</h2>
              <p>{collection.description}</p>
              <ol>{collection.stories.map((story) => <li key={story}>{story}</li>)}</ol>
              <Link href="/confessions/">Open the collection ↗</Link>
            </article>
          ))}
        </div>
        <div className="coming-note">
          <span>Next up</span>
          <p>Reader-submitted collections will begin once the moderation queue opens.</p>
          <Link className="button button-small" href="/submit/">Submit yours</Link>
        </div>
      </div>
    </main>
  );
}
