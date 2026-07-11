"use client";

import { useEffect, useState } from "react";
import type { Confession } from "@/lib/content";
import { editorialEmail } from "@/lib/site";
import { isBookmarked, readVerdict, saveVerdict, toggleBookmark } from "@/lib/client-storage";
import { RouletteButton } from "@/components/RouletteButton";

function drawWrappedText(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number,
) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (context.measureText(candidate).width > maxWidth && line) {
      lines.push(line);
      line = word;
      if (lines.length === maxLines - 1) break;
    } else {
      line = candidate;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  lines.forEach((value, index) => context.fillText(value, x, y + index * lineHeight));
}

function createStoryCard(confession: Confession) {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 630;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas is unavailable");

  const accent = {
    coral: "#ef6548",
    lime: "#d8ef74",
    lavender: "#cfc2ff",
    sky: "#a9dded",
  }[confession.accent];

  context.fillStyle = "#f6f0e7";
  context.fillRect(0, 0, 1200, 630);
  context.fillStyle = accent;
  context.fillRect(0, 0, 1200, 112);
  context.strokeStyle = "#1b1818";
  context.lineWidth = 6;
  context.strokeRect(30, 30, 1140, 570);
  context.fillStyle = "#1b1818";
  context.font = "700 34px Georgia, serif";
  context.fillText("tinderfessions", 70, 73);
  context.font = "700 18px monospace";
  context.fillText(`CONFESSION #${confession.number}  ·  ${confession.category.toUpperCase()}`, 70, 154);

  context.font = "700 66px Georgia, serif";
  drawWrappedText(context, confession.title, 70, 238, 1030, 70, 3);

  context.fillStyle = accent;
  context.fillRect(70, 462, 890, 76);
  context.fillStyle = "#1b1818";
  context.font = "700 22px monospace";
  drawWrappedText(context, confession.verdict.question.toUpperCase(), 96, 510, 830, 28, 2);
  context.font = "700 17px monospace";
  context.fillText("WWW.TINDERFESSIONS.COM", 70, 570);
  context.fillText("READ · VOTE · SHARE", 888, 570);

  return canvas;
}

export function StoryActions({ confession }: { confession: Confession }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [verdict, setVerdict] = useState<number | null>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setBookmarked(isBookmarked(confession.slug));
    setVerdict(readVerdict(confession.slug));
  }, [confession.slug]);

  function chooseVerdict(optionIndex: number) {
    saveVerdict(confession.slug, optionIndex);
    setVerdict(optionIndex);
    setStatus("Verdict saved privately on this device.");
  }

  function handleBookmark() {
    const next = toggleBookmark(confession.slug);
    setBookmarked(next);
    setStatus(next ? "Saved to your private stack." : "Removed from your private stack.");
  }

  async function shareCard() {
    try {
      const canvas = createStoryCard(confession);
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((value) => value ? resolve(value) : reject(new Error("Card generation failed")), "image/png");
      });
      const file = new File([blob], `${confession.slug}-tinderfessions.png`, { type: "image/png" });
      const shareData = {
        title: confession.title,
        text: confession.deck,
        url: `https://www.tinderfessions.com/confessions/${confession.slug}/`,
        files: [file],
      };

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share(shareData);
        setStatus("Story card shared.");
        return;
      }

      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = file.name;
      link.click();
      URL.revokeObjectURL(downloadUrl);
      setStatus("Story card downloaded and ready to share.");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setStatus("The card could not be created in this browser. Try sharing the page link instead.");
    }
  }

  const followUpSubject = encodeURIComponent(`Follow-up to confession #${confession.number}: ${confession.title}`);
  const followUpBody = encodeURIComponent(`I have an update to confession #${confession.number}.\n\nWhat happened next:\n`);

  return (
    <div className="interactive-story-tools">
      <section className="jury-panel" aria-labelledby={`jury-${confession.slug}`}>
        <div className="jury-heading">
          <span className="jury-stamp">THE JURY</span>
          <div>
            <span className="kicker">You read the evidence</span>
            <h2 id={`jury-${confession.slug}`}>{confession.verdict.question}</h2>
          </div>
        </div>
        <div className="verdict-options">
          {confession.verdict.options.map((option, index) => (
            <button
              aria-pressed={verdict === index}
              className={verdict === index ? "verdict-option selected" : "verdict-option"}
              key={option}
              onClick={() => chooseVerdict(index)}
              type="button"
            >
              <span>0{index + 1}</span>
              <strong>{option}</strong>
              <i aria-hidden="true">{verdict === index ? "✓" : "→"}</i>
            </button>
          ))}
        </div>
        <p className="jury-privacy">
          {verdict === null
            ? "Cast a verdict to save your ruling on this device. No account required."
            : `Your verdict: ${confession.verdict.options[verdict]}. You can change it anytime.`}
        </p>
      </section>

      <section className="story-action-bar" aria-label="Story tools">
        <button className={bookmarked ? "tool-button active" : "tool-button"} onClick={handleBookmark} type="button">
          <span aria-hidden="true">{bookmarked ? "♥" : "♡"}</span>
          {bookmarked ? "Saved" : "Save story"}
        </button>
        <button className="tool-button" onClick={shareCard} type="button">
          <span aria-hidden="true">▣</span>
          Share story card
        </button>
        <RouletteButton className="tool-button" currentSlug={confession.slug} label="Another confession" />
        <a className="tool-button" href={`mailto:${editorialEmail}?subject=${followUpSubject}&body=${followUpBody}`}>
          <span aria-hidden="true">↳</span>
          Send a follow-up
        </a>
      </section>
      <p className="tool-status" aria-live="polite">{status}</p>
    </div>
  );
}
