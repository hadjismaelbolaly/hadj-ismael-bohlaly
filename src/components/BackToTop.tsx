"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut"
      className="fixed bottom-6 left-6 z-40 w-10 h-10 flex items-center justify-center rounded-full border border-border bg-background/90 backdrop-blur text-foreground hover:border-navy hover:text-navy transition-colors focus-visible:outline-2 focus-visible:outline-navy focus-visible:outline-offset-2"
    >
      <ArrowUp size={16} />
    </button>
  );
}
