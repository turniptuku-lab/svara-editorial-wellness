import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/svara/Reveal";
import { SectionLabel } from "@/components/svara/ui";
import { articles } from "@/lib/svara-data";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "The SVARA Journal" },
      {
        name: "description",
        content:
          "Essays and rituals on rest, movement and slowing down — writing from the SVARA Journal.",
      },
      { property: "og:title", content: "The SVARA Journal" },
      {
        property: "og:description",
        content: "Writing on rest, movement and slowing down.",
      },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  const [lead, ...rest] = articles;

  return (
    <>
      <section className="shell pb-14 pt-10 md:pt-16">
        <Reveal>
          <SectionLabel>The journal</SectionLabel>
          <h1 className="mt-6 max-w-3xl font-display text-[3rem] leading-[0.94] tracking-[-0.05em] sm:text-7xl">
            Notes on slowing
            <br />
            down.
          </h1>
        </Reveal>
      </section>

      {lead && (
        <section className="shell pb-16">
          <Reveal>
            <Link
              to="/journal/article"
              className="group grid gap-8 overflow-hidden rounded-[2.5rem] border border-border bg-card p-2 md:grid-cols-2 md:items-center"
            >
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={lead.image}
                  alt={lead.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-64 w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105 md:h-[26rem]"
                />
              </div>
              <div className="px-5 pb-8 md:px-8">
                <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{lead.category}</span>
                  <span className="h-3 w-px bg-border" aria-hidden="true" />
                  <span>{lead.read}</span>
                </div>
                <h2 className="mt-4 font-display text-[2rem] leading-tight sm:text-5xl">
                  {lead.title}
                </h2>
                <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
                  {lead.excerpt}
                </p>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      <section className="shell pb-24 md:pb-32">
        <div className="grid gap-8 md:grid-cols-2">
          {rest.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <Link to="/journal/article" className="group block">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-64 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105 md:h-80"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{a.category}</span>
                  <span className="h-3 w-px bg-border" aria-hidden="true" />
                  <span>{a.read}</span>
                </div>
                <h2 className="mt-3 font-display text-[1.75rem] leading-tight transition-colors group-hover:text-primary">
                  {a.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
