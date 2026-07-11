# Tinderfessions

An independent editorial home for anonymous dating stories, built as a fully
static site for GitHub Pages.

The current project is not affiliated with Tinder LLC, Match Group, or the
historical `@tinderfessions` social accounts. Launch stories are visibly marked
as original editorial composites rather than reader submissions.

## Interactive features

- The Jury saves one private verdict per story on the reader's device.
- Bookmarks create a device-local saved-story stack with no account required.
- Confession Roulette opens a random story.
- Daily Drop rotates a featured confession each day.
- Story pages can generate a 1200×630 share card in the browser.
- Selected stories contain clearly labeled follow-up chapters.

Verdicts and bookmarks intentionally use browser storage. They are not global
community totals and do not sync between devices. A backend can replace this
storage layer later without changing the editorial story model.

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

The local preview opens at `http://localhost:3000`.

## Validate

```bash
npm test
npm run test:pages
```

`npm test` verifies the rendered application. `npm run test:pages` produces the
static `out/` export and checks its metadata, custom-domain files, social image,
and internal links.

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and deploys the `out/`
directory whenever `main` is pushed.

1. Push the repository to GitHub.
2. In **Settings → Pages**, select **GitHub Actions** as the publishing source.
3. Verify `tinderfessions.com` in the GitHub account’s Pages settings.
4. Point `www.tinderfessions.com` to the account’s `github.io` host with a CNAME
   record, and configure the apex domain to redirect to `www` through the DNS
   provider or GitHub’s supported apex records.
5. Enable **Enforce HTTPS** once the certificate becomes available.

The repository already includes `public/CNAME` with `www.tinderfessions.com`.

## Before accepting submissions

The current editorial destination is `mail@dreolo.com` for both submissions and
takedown requests. It is defined once in `lib/site.ts` so it can be replaced
with domain aliases later without hunting through the site.

GitHub Pages cannot process a server-side form. The submission page therefore
prepares the story locally and opens the visitor’s email application. Drafts
are not stored by the website.

## Editing content

- Story data lives in `lib/content.ts`.
- Pages and layouts live in `app/`.
- Shared components live in `components/`.
- The visual system lives in `app/globals.css`.
- SEO, feed, and domain files live in `public/`.

When adding a story, also add its final URL to `public/sitemap.xml` and its most
recent entry to `public/feed.xml`.
