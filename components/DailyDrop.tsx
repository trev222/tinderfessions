"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { confessions } from "@/lib/content";

export function DailyDrop() {
  const [confession, setConfession] = useState(confessions[0]);

  useEffect(() => {
    const dayNumber = Math.floor(Date.now() / 86_400_000);
    setConfession(confessions[dayNumber % confessions.length]);
  }, []);

  return (
    <Link className={`daily-drop accent-${confession.accent}`} href={`/confessions/${confession.slug}/`}>
      <span className="daily-drop-label">Today’s drop · #{confession.number}</span>
      <strong>{confession.title}</strong>
      <p>{confession.deck}</p>
      <b>Read today’s pick ↗</b>
    </Link>
  );
}
