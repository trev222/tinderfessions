import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Anonymous dating stories, plot twists &amp; first-date chaos \| Tinderfessions<\/title>/i);
  assert.match(html, /The stories your/);
  assert.match(html, /group chat/);
  assert.match(html, /Fresh start, same irresistible premise/);
  assert.match(html, /Ready for a better dating story[\s\S]*Meet[\s\S]*Swiperino/);
  assert.match(html, /https:\/\/swiperino\.com/);
  assert.match(html, /Introducing the Jury/);
  assert.match(html, /Today’s drop/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("server-renders archive, story, and saved pages", async () => {
  const [archive, story, saved] = await Promise.all([
    render("/confessions/"),
    render("/confessions/he-brought-a-powerpoint/"),
    render("/saved/"),
  ]);
  assert.equal(archive.status, 200);
  assert.equal(story.status, 200);
  assert.equal(saved.status, 200);
  assert.match(await archive.text(), /Every match leaves a story/);
  const storyHtml = await story.text();
  assert.match(storyHtml, /He brought a PowerPoint/);
  assert.match(storyHtml, /Editorial composite/);
  assert.match(storyHtml, /Was the PowerPoint an instant dealbreaker/);
  assert.match(storyHtml, /The post-date survey arrived/);
  assert.match(await saved.text(), /The stories you kept/);
});

test("contains GitHub Pages publishing essentials", async () => {
  const [cname, robots, sitemap, workflow, packageJson] = await Promise.all([
    readFile(new URL("public/CNAME", root), "utf8"),
    readFile(new URL("public/robots.txt", root), "utf8"),
    readFile(new URL("public/sitemap.xml", root), "utf8"),
    readFile(new URL(".github/workflows/pages.yml", root), "utf8"),
    readFile(new URL("package.json", root), "utf8"),
  ]);
  assert.equal(cname.trim(), "www.tinderfessions.com");
  assert.match(robots, /Sitemap: https:\/\/www\.tinderfessions\.com\/sitemap\.xml/);
  assert.match(sitemap, /he-brought-a-powerpoint/);
  assert.match(sitemap, /https:\/\/www\.tinderfessions\.com\/saved\//);
  assert.match(workflow, /deploy-pages@v4/);
  assert.match(packageJson, /"build:pages": "next build"/);
  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", root)));
});
