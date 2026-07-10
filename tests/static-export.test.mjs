import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const outDir = new URL("../out/", import.meta.url);

async function collectHtml(directory, found = []) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) await collectHtml(target, found);
    else if (entry.name.endsWith(".html")) found.push(target);
  }
  return found;
}

function localTarget(href) {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || !clean.startsWith("/") || clean.startsWith("//")) return null;
  if (clean === "/") return new URL("index.html", outDir);
  if (/\.[a-z0-9]+$/i.test(clean)) return new URL(`.${clean}`, outDir);
  return new URL(`.${clean}${clean.endsWith("/") ? "" : "/"}index.html`, outDir);
}

test("static export contains brand, metadata, and share image", async () => {
  const html = await readFile(new URL("index.html", outDir), "utf8");
  assert.match(html, /The stories your/);
  assert.match(html, /https:\/\/www\.tinderfessions\.com\/og\.png/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
  await access(new URL("og.png", outDir));
  await access(new URL("CNAME", outDir));
  await access(new URL(".nojekyll", outDir));
});

test("all root-relative page links resolve inside the static export", async () => {
  const files = await collectHtml(outDir.pathname);
  const missing = [];

  for (const file of files) {
    const html = await readFile(file, "utf8");
    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const target = localTarget(match[1]);
      if (!target) continue;
      try {
        await access(target);
      } catch {
        missing.push(`${path.relative(outDir.pathname, file)} -> ${match[1]}`);
      }
    }
  }

  assert.deepEqual(missing, []);
});

test("public contact flows use the temporary editorial inbox", async () => {
  const pages = await Promise.all([
    readFile(new URL("submit/index.html", outDir), "utf8"),
    readFile(new URL("privacy/index.html", outDir), "utf8"),
    readFile(new URL("takedown/index.html", outDir), "utf8"),
  ]);
  const html = pages.join("\n");

  assert.match(html, /mail@dreolo\.com/);
  assert.doesNotMatch(html, /(?:submissions|takedown)@tinderfessions\.com/);
});
