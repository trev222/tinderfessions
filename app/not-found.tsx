import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found section-pad">
      <div className="site-shell">
        <span className="error-code">404</span>
        <h1>This page ghosted you.</h1>
        <p>No explanation. No closure. At least the archive still texts back.</p>
        <Link className="button" href="/confessions/">Return to the stories</Link>
      </div>
    </main>
  );
}
