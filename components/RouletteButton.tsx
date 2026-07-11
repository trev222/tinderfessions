"use client";

import { confessions } from "@/lib/content";

export function RouletteButton({
  className = "button button-ghost",
  currentSlug,
  label = "Confession roulette",
}: {
  className?: string;
  currentSlug?: string;
  label?: string;
}) {
  function spin() {
    const choices = currentSlug
      ? confessions.filter((item) => item.slug !== currentSlug)
      : confessions;
    const selection = choices[Math.floor(Math.random() * choices.length)];
    window.location.assign(`/confessions/${selection.slug}/`);
  }

  return <button className={className} onClick={spin} type="button">{label}</button>;
}
