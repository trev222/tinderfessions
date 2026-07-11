import Link from "next/link";
import type { Confession } from "@/lib/content";

export function ConfessionCard({ confession }: { confession: Confession }) {
  return (
    <article className={`story-card accent-${confession.accent}`}>
      <div className="story-card-top">
        <span className="story-number">#{confession.number}</span>
        <span className="story-card-pills">
          {confession.followUp && <span className="pill update-pill">Update</span>}
          <span className="pill">{confession.category}</span>
        </span>
      </div>
      <h3><Link href={`/confessions/${confession.slug}/`}>{confession.title}</Link></h3>
      <p>{confession.deck}</p>
      <div className="story-card-bottom">
        <span>{confession.mood} · {confession.readTime}</span>
        <Link className="text-link" href={`/confessions/${confession.slug}/`}>
          Read it <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
