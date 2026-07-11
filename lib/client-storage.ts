const BOOKMARKS_KEY = "tinderfessions:bookmarks:v1";
const VERDICTS_KEY = "tinderfessions:verdicts:v1";

export const TINDERFESSIONS_STORAGE_EVENT = "tinderfessions-storage-change";

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event(TINDERFESSIONS_STORAGE_EVENT));
  } catch {
    // Private browsing and storage policies can block localStorage.
  }
}

export function readBookmarks() {
  return readJson<string[]>(BOOKMARKS_KEY, []);
}

export function isBookmarked(slug: string) {
  return readBookmarks().includes(slug);
}

export function toggleBookmark(slug: string) {
  const current = readBookmarks();
  const next = current.includes(slug)
    ? current.filter((item) => item !== slug)
    : [...current, slug];
  writeJson(BOOKMARKS_KEY, next);
  return next.includes(slug);
}

export function readVerdict(slug: string) {
  const verdicts = readJson<Record<string, number>>(VERDICTS_KEY, {});
  return typeof verdicts[slug] === "number" ? verdicts[slug] : null;
}

export function saveVerdict(slug: string, optionIndex: number) {
  const verdicts = readJson<Record<string, number>>(VERDICTS_KEY, {});
  writeJson(VERDICTS_KEY, { ...verdicts, [slug]: optionIndex });
}
