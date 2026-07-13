"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="w-full flex items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-navy focus-visible:outline-offset-4"
            >
              <span className="font-display text-lg sm:text-xl">{item.question}</span>
              <Plus
                size={18}
                className={`shrink-0 text-navy transition-transform duration-300 ${
                  open ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-muted leading-relaxed max-w-2xl">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
