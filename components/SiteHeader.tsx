import Link from "next/link";

const navigation = [
  { href: "/confessions/", label: "Confessions" },
  { href: "/collections/", label: "Collections" },
  { href: "/resources/", label: "Resources" },
  { href: "/about/", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link className="wordmark" href="/" aria-label="Tinderfessions home">
          <span className="wordmark-mark" aria-hidden="true">TF</span>
          <span>tinderfessions</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
          <Link className="button button-small" href="/submit/">Tell us everything</Link>
        </nav>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
            <Link href="/submit/">Submit a story</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
