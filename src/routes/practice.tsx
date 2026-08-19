import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/svara/Reveal";
import { Pill, SectionLabel } from "@/components/svara/ui";
import { practiceFilters, practices } from "@/lib/svara-data";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Practice Library — SVARA" },
      {
        name: "description",
        content:
          "Browse SVARA's yoga and meditation library: morning flows, stress relief, strength, sleep and breathwork from 8 to 35 minutes.",
      },
      { property: "og:title", content: "Practice Library — SVARA" },
      {
        property: "og:description",
        content: "Guided yoga and meditation practices for whatever today looks like.",
      },
    ],
  }),
  component: PracticePage,
});

function PracticePage() {
  const [filter, setFilter] = useState<string>("All");

  const list = useMemo(
    () => (filter === "All" ? practices : practices.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <section className="shell pb-10 pt-10 md:pt-16">
        <Reveal>
          <SectionLabel>Practice library</SectionLabel>
          <h1 className="mt-6 max-w-3xl font-display text-[3rem] leading-[0.94] tracking-[-0.05em] sm:text-7xl">
            Press play on
            <br />
            whatever today is.
          </h1>
          <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
            Short practices, real teachers, no performance. Filter by what you need rather
            than what you should be doing.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 -mx-5 flex gap-2 overflow-x-auto px-5 no-scrollbar md:mx-0 md:flex-wrap md:px-0">
          {practiceFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:bg-cream"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>
      </section>

      <section className="shell pb-24 md:pb-32">
        <p className="eyebrow mb-6">{list.length} practices</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 80}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative m-2 overflow-hidden rounded-[1.35rem]">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-56 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                  />
                  <div className="absolute left-3 top-3">
                    <Pill tone="glass">{p.category}</Pill>
                  </div>
                  <button
                    type="button"
                    aria-label={`Play ${p.name}`}
                    className="absolute bottom-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/85 text-foreground backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
                  >
                    <Play className="h-4 w-4 fill-current" />
                  </button>
                </div>
                <div className="p-5 pt-3">
                  <h2 className="font-display text-[1.5rem]">{p.name}</h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.instructor}</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                    <span>{p.duration}</span>
                    <span className="h-3 w-px bg-border" aria-hidden="true" />
                    <span>{p.level}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
