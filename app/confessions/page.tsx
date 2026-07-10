import type { Metadata } from "next";
import { ArchiveGrid } from "@/components/ArchiveGrid";

export const metadata: Metadata = {
  title: "Confession archive",
  description: "Browse anonymous dating stories by plot: first-date chaos, ghosting, red flags, plot twists, and wholesome endings.",
  alternates: { canonical: "/confessions/" },
};

export default function ConfessionsPage() {
  return (
    <main className="page-main section-pad">
      <div className="site-shell">
        <header className="page-hero archive-hero">
          <span className="kicker">The full archive</span>
          <h1>Every match leaves a story.</h1>
          <p>Browse the chaos, filter by plot, and remember: the names are never the point.</p>
          <div className="editorial-key">
            <strong>About launch content</strong>
            <p>
              Stories currently marked as editorial composites are original fictionalized
              pieces—not old social posts or reader submissions. New reader stories will be
              labeled separately after permission and moderation.
            </p>
          </div>
        </header>
        <ArchiveGrid />
      </div>
    </main>
  );
}
