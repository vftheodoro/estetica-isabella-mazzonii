"use client";

import { useEffect, useState } from "react";
import { Star } from "@/components/icons";
import type { Testimonial } from "@/types/site";

type Props = {
  items: Testimonial[];
};

function Card({ item }: { item: Testimonial }) {
  return (
    <article className="testimonial">
      <div className="stars" aria-label="5 de 5 estrelas">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} />
        ))}
      </div>
      <p>“{item.quote}”</p>
      <span>{item.label}</span>
    </article>
  );
}

export function TestimonialsCarousel({ items }: Props) {
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const loop = [...items, ...items];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (reduceMotion) {
    return (
      <div className="testimonial-track static">
        {items.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`testimonial-carousel${paused ? " is-paused" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      <div className="testimonial-viewport" aria-label="Depoimentos em carrossel">
        <div className="testimonial-marquee">
          <div className="testimonial-track rotating">
            {loop.map((item, i) => (
              <Card key={`${i}-${item.quote.slice(0, 12)}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-btn"
          aria-label={paused ? "Retomar carrossel" : "Pausar carrossel"}
          onClick={() => setPaused((p) => !p)}
        >
          {paused ? "Retomar" : "Pausar"}
        </button>
      </div>
    </div>
  );
}
