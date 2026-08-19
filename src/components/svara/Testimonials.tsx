import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/lib/svara-data";
import { SectionLabel } from "./ui";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i]!;

  const go = (d: number) =>
    setI((p) => (p + d + testimonials.length) % testimonials.length);

  return (
    <section className="shell py-20 md:py-32">
      <div className="rounded-4xl border border-border bg-cream/60 px-6 py-14 md:px-16 md:py-20">
        <SectionLabel>In their words</SectionLabel>
        <blockquote className="mt-8 max-w-4xl font-display text-[1.75rem] leading-[1.12] tracking-[-0.035em] text-foreground sm:text-4xl md:text-5xl">
          “{t.quote}”
        </blockquote>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-display text-xl">{t.name}</p>
            <p className="eyebrow mt-1">{t.label}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="mr-3 flex items-center gap-1.5" aria-hidden="true">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === i ? "w-7 bg-primary" : "w-3 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-background/60"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-background/60"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
