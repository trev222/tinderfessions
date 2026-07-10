import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const siteUrl = "https://www.tinderfessions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tinderfessions — Anonymous dating stories",
    template: "%s | Tinderfessions",
  },
  description:
    "Anonymous dating confessions, first-date chaos, ghosting stories, plot twists, and surprisingly wholesome endings.",
  applicationName: "Tinderfessions",
  category: "entertainment",
  creator: "Tinderfessions editorial",
  publisher: "Tinderfessions",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Tinderfessions",
    title: "Tinderfessions — The stories your group chat couldn’t hold",
    description:
      "Anonymous dating stories, spectacular plot twists, and the occasional happy ending.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1536,
        height: 1024,
        alt: "Tinderfessions — the stories your group chat couldn’t hold",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinderfessions — The stories your group chat couldn’t hold",
    description: "Anonymous dating stories, spectacular plot twists, and the occasional happy ending.",
    images: [`${siteUrl}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f6f0e7",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tinderfessions",
    url: siteUrl,
    description: "An independent editorial home for anonymous dating stories.",
    inLanguage: "en",
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
