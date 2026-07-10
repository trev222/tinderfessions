import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConfessionCard } from "@/components/ConfessionCard";
import { confessions, getConfession, getRelatedConfessions } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return confessions.map((confession) => ({ slug: confession.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const confession = getConfession(slug);
  if (!confession) return {};
  return {
    title: confession.title,
    description: confession.deck,
    alternates: { canonical: `/confessions/${confession.slug}/` },
    openGraph: {
      type: "article",
      title: confession.title,
      description: confession.deck,
      url: `/confessions/${confession.slug}/`,
    },
  };
}

export default async function ConfessionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const confession = getConfession(slug);
  if (!confession) notFound();
  const related = getRelatedConfessions(confession);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: confession.title,
    description: confession.deck,
    datePublished: "2026-07-10",
    dateModified: "2026-07-10",
    author: { "@type": "Organization", name: "Tinderfessions editorial" },
    publisher: { "@type": "Organization", name: "Tinderfessions" },
    mainEntityOfPage: `https://www.tinderfessions.com/confessions/${confession.slug}/`,
    isAccessibleForFree: true,
  };

  return (
    <main className="story-page section-pad">
      <article className="site-shell story-layout">
        <aside className="story-rail">
          <Link className="back-link" href="/confessions/">← All confessions</Link>
          <div className={`story-index accent-${confession.accent}`}>
            <span>CONFESSION</span>
            <strong>#{confession.number}</strong>
          </div>
          <dl>
            <div><dt>Plot</dt><dd>{confession.category}</dd></div>
            <div><dt>Mood</dt><dd>{confession.mood}</dd></div>
            <div><dt>Read</dt><dd>{confession.readTime}</dd></div>
          </dl>
        </aside>

        <div className="story-body">
          <header>
            <span className="pill">Editorial composite</span>
            <h1>{confession.title}</h1>
            <p className="story-deck">{confession.deck}</p>
          </header>
          <blockquote>{confession.quote}</blockquote>
          <div className="story-prose">
            {confession.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="composite-note">
            <strong>Why “editorial composite”?</strong>
            <p>
              This is an original fictionalized story blending familiar dating scenarios.
              It demonstrates the site’s editorial format and is not presented as a real
              reader submission or a post from the historical social account.
            </p>
          </div>
          <div className="story-share">
            <span>Know someone who needs this plot twist?</span>
            <a href={`mailto:?subject=${encodeURIComponent(confession.title)}&body=${encodeURIComponent(`Read this on Tinderfessions: https://www.tinderfessions.com/confessions/${confession.slug}/`)}`}>
              Send it to the group chat ↗
            </a>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} type="application/ld+json" />
      </article>

      <section className="site-shell related-stories">
        <div className="section-heading split-heading">
          <div><span className="kicker">Keep reading</span><h2>Three more decisions.</h2></div>
          <Link className="text-link large" href="/confessions/">Full archive ↗</Link>
        </div>
        <div className="story-grid">
          {related.map((item) => <ConfessionCard confession={item} key={item.slug} />)}
        </div>
      </section>
    </main>
  );
}
