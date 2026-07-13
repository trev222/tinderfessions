import Link from "next/link";
import { parentBrandName, parentBrandUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <Link className="footer-wordmark" href="/">tinderfessions<span>.</span></Link>
          <p className="footer-tagline">The stories your group chat couldn’t hold.</p>
          <p className="footer-parent">
            Part of <a href={parentBrandUrl} rel="noopener noreferrer" target="_blank">{parentBrandName}</a>,
            a dating app project for better matches and better stories.
          </p>
          <p className="fine-print">
            Independently operated. Not affiliated with, endorsed by, or sponsored by
            Tinder LLC, Match Group, or the historical @tinderfessions social accounts.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Read</strong>
            <Link href="/confessions/">Confessions</Link>
            <Link href="/collections/">Collections</Link>
            <Link href="/saved/">Saved stories</Link>
            <Link href="/resources/">Resources</Link>
          </div>
          <div>
            <strong>Participate</strong>
            <Link href="/submit/">Submit</Link>
            <Link href="/safety/">Safety</Link>
            <Link href="/takedown/">Takedown</Link>
          </div>
          <div>
            <strong>Next</strong>
            <a href={parentBrandUrl} rel="noopener noreferrer" target="_blank">
              Visit {parentBrandName}
            </a>
          </div>
          <div>
            <strong>Small print</strong>
            <Link href="/about/">About</Link>
            <Link href="/privacy/">Privacy</Link>
            <Link href="/terms/">Terms</Link>
          </div>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>© {new Date().getFullYear()} Tinderfessions</span>
        <span>18+ stories · Reader discretion advised</span>
      </div>
    </footer>
  );
}
