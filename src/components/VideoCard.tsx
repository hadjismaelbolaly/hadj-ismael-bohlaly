"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function VideoCard({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="rounded-3xl overflow-hidden border border-border bg-surface">
      <div className="relative aspect-[9/16] bg-black">
        {playing ? (
          <video
            src={src}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 h-full w-full object-contain"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full group"
            aria-label={`Lire la vidéo : ${label}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster}
              alt={label}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
              <span className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center">
                <Play size={22} className="text-navy ml-1" fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>
      <p className="text-center text-sm text-muted py-3 px-3">{label}</p>
    </div>
  );
}
