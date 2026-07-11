"use client";

import Link from "next/link";
import { useState } from "react";
import { ConfessionCard } from "@/components/ConfessionCard";
import { RouletteButton } from "@/components/RouletteButton";
import { categories, confessions } from "@/lib/content";

export function ArchiveGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const visible = activeCategory === "All"
    ? confessions
    : confessions.filter((item) => item.category === activeCategory);

  return (
    <div>
      <div className="archive-tools">
        <RouletteButton className="button button-small" />
        <Link className="button button-small button-ghost" href="/saved/">Open saved stories</Link>
      </div>
      <div className="filter-row" aria-label="Filter confessions by category">
        {categories.map((category) => (
          <button
            className={activeCategory === category ? "filter active" : "filter"}
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="results-count" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "story" : "stories"}
      </p>
      <div className="story-grid">
        {visible.map((confession) => (
          <ConfessionCard confession={confession} key={confession.slug} />
        ))}
      </div>
    </div>
  );
}
