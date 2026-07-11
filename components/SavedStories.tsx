"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ConfessionCard } from "@/components/ConfessionCard";
import { confessions } from "@/lib/content";
import { readBookmarks, TINDERFESSIONS_STORAGE_EVENT } from "@/lib/client-storage";

export function SavedStories() {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const refresh = () => setSavedSlugs(readBookmarks());
    refresh();
    setLoaded(true);
    window.addEventListener("storage", refresh);
    window.addEventListener(TINDERFESSIONS_STORAGE_EVENT, refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener(TINDERFESSIONS_STORAGE_EVENT, refresh);
    };
  }, []);

  const saved = savedSlugs
    .map((slug) => confessions.find((item) => item.slug === slug))
    .filter((item): item is (typeof confessions)[number] => Boolean(item));

  if (!loaded) return <p className="saved-loading">Opening your private stack…</p>;

  if (saved.length === 0) {
    return (
      <div className="saved-empty">
        <span aria-hidden="true">♡</span>
        <h2>Your stack is empty.</h2>
        <p>Save a confession from any story page and it will appear here on this device.</p>
        <Link className="button" href="/confessions/">Find a story</Link>
      </div>
    );
  }

  return (
    <div>
      <p className="results-count">{saved.length} saved {saved.length === 1 ? "story" : "stories"} on this device</p>
      <div className="story-grid">
        {saved.map((confession) => <ConfessionCard confession={confession} key={confession.slug} />)}
      </div>
    </div>
  );
}
