import type { Metadata } from "next";
import { SavedStories } from "@/components/SavedStories";

export const metadata: Metadata = {
  title: "Your saved confessions",
  description: "A private, device-local stack of Tinderfessions stories you bookmarked.",
  alternates: { canonical: "/saved/" },
};

export default function SavedPage() {
  return (
    <main className="page-main section-pad saved-page">
      <div className="site-shell">
        <header className="page-hero">
          <span className="kicker">Private stack</span>
          <h1>The stories you kept.</h1>
          <p>
            Bookmarks live only in this browser. There is no account, tracking profile,
            or cloud sync—just your own pile of memorable decisions.
          </p>
        </header>
        <SavedStories />
      </div>
    </main>
  );
}
