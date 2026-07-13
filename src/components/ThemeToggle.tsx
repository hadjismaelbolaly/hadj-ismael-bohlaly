"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = window.localStorage.getItem("theme");
    const light = stored === "light";
    setIsLight(light);
    document.documentElement.classList.toggle("light", light);
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    window.localStorage.setItem("theme", next ? "light" : "dark");
  }

  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? "Activer le mode sombre" : "Activer le mode clair"}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-foreground hover:border-navy hover:text-navy transition-colors focus-visible:outline-2 focus-visible:outline-navy focus-visible:outline-offset-2"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
