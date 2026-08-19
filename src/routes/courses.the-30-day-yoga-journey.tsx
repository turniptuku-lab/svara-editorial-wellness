import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronDown, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/svara/Reveal";
import { Testimonials } from "@/components/svara/Testimonials";
import { ActionLink, Pill, SectionLabel } from "@/components/svara/ui";
import { curriculum, faqs, img } from "@/lib/svara-data";

export const Route = createFileRoute("/courses/the-30-day-yoga-journey")({
  head: () => ({
    meta: [
      { title: "The 30-Day Yoga Journey — SVARA" },
      {
        name: "description",
        content:
          "Thirty days to build a practice that feels like yours. 25+ sessions, lifetime access, beginner friendly. Enroll for ₹2,999.",
      },
      { property: "og:title", content: "The 30-Day Yoga Journey — SVARA" },
      {
        property: "og:description",
        content: "Thirty days to build a practice that feels like yours.",
      },
    ],
  }),
  component: CourseDetail,
});

function CourseDetail() {
  return (
    <>
      <section className="shell pt-10 md:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <Reveal>
            <Pill tone="cream">SVARA signature</Pill>
            <h1 className="mt-7 font-display text-[2.9rem] leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              The 30-Day
              <br />
              Yoga Journey
            </h1>
            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-muted-foreground">
              Thirty days to build a practice that feels like yours.
            </p>

            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-7 sm:grid-cols-4">
              {[
                ["30", "days"],
                ["25+", "sessions"],
                ["Lifetime", "access"],
                ["Beginner", "friendly"],
              ].map(([big, small]) => (
                <div key={small}>
                  <dt className="font-display text-2xl">{big}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{small}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ActionLink to="/practice" size="lg">
                Enroll for ₹2,999
              </ActionLink>
              <span className="text-xs text-muted-foreground">
                One payment. Yours forever.
              </span>
            </div>
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-[2.5rem]">
            <img
              src={img.featured}
              alt="A person mid yoga flow in a large dark green studio with tall sunlit windows"
              width={1600}
              height={1000}
              className="h-[24rem] w-full object-cover md:h-[34rem]"
            />
          </Reveal>
        </div>
      </section>

      <section className="shell py-24 md:py-32">
        <Reveal>
          <SectionLabel>What you'll learn</SectionLabel>
        </Reveal>
        <div className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {[
            "A daily practice that fits into an ordinary, busy life",
            "Breathwork you can use away from the mat",
            "Alignment fundamentals, taught without jargon",
            "How to build strength slowly and without strain",
            "Ways to practise on low-energy days instead of skipping",
            "A sequence of your own by day thirty",
          ].map((item, i) => (
            <Reveal key={item} delay={i * 60} className="flex items-start gap-4 border-b border-border pb-5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
              <p className="text-[0.98rem] leading-relaxed">{item}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell pb-24 md:pb-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Curriculum</SectionLabel>
            <h2 className="mt-6 font-display text-4xl tracking-[-0.045em] sm:text-5xl">
              Four weeks, thirty days.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Each day is 10–35 minutes with a slower option built in.
          </p>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border">
          {curriculum.map((mod, i) => (
            <Module key={mod.week} week={mod.week} days={mod.days} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      <section className="shell pb-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionLabel>Who it's for</SectionLabel>
            <ul className="mt-8 space-y-4 text-[0.98rem] leading-relaxed text-muted-foreground">
              <li>Anyone who has started yoga before and quietly stopped.</li>
              <li>Complete beginners who want a structure instead of a guess.</li>
              <li>People with tight mornings and tighter shoulders.</li>
              <li>
                Practitioners who want depth without a five-day-a-week studio commitment.
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100} className="rounded-[2.5rem] border border-border bg-cream/60 p-3">
            <img
              src={img.instructor}
              alt="Portrait of Aanya Rao, SVARA teacher"
              loading="lazy"
              width={900}
              height={1100}
              className="h-72 w-full rounded-[2rem] object-cover"
            />
            <div className="px-5 py-7">
              <p className="eyebrow">Your teacher</p>
              <p className="mt-3 font-display text-3xl">Aanya Rao</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Twelve years teaching slow, functional yoga and breathwork. Known for
                cueing that assumes nothing and rushes nowhere.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      <section className="shell pb-24 md:pb-32">
        <Reveal>
          <SectionLabel>Questions</SectionLabel>
          <h2 className="mt-6 font-display text-4xl tracking-[-0.045em] sm:text-5xl">
            Before you begin.
          </h2>
        </Reveal>
        <div className="mt-10 overflow-hidden rounded-3xl border border-border">
          {faqs.map((f) => (
            <Faq key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      <section className="shell pb-24 md:pb-32">
        <Reveal className="rounded-[2.5rem] bg-ink px-6 py-16 text-center text-background md:px-16 md:py-24">
          <h2 className="mx-auto max-w-2xl font-display text-[2.2rem] leading-tight tracking-[-0.045em] sm:text-6xl">
            Thirty days from now, you'll have a practice.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-background/75">
            Start where you are. Move at your pace. Come back whenever you need.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ActionLink to="/practice" tone="light" size="lg">
              Enroll for ₹2,999
            </ActionLink>
            <ActionLink to="/courses" tone="ghost" size="lg" className="text-background hover:bg-background/10">
              Explore other courses
            </ActionLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Module({
  week,
  days,
  defaultOpen,
}: {
  week: string;
  days: string[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 bg-background px-5 py-6 text-left transition-colors hover:bg-cream/60 md:px-8"
      >
        <span className="font-display text-xl md:text-2xl">{week}</span>
        <span className="flex items-center gap-4">
          <span className="hidden text-xs text-muted-foreground sm:inline">
            {days.length} days
          </span>
          {open ? (
            <Minus className="h-4 w-4 shrink-0" />
          ) : (
            <Plus className="h-4 w-4 shrink-0" />
          )}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="min-h-0 bg-cream/40">
          {days.map((d) => (
            <li
              key={d}
              className="flex items-center gap-3 border-t border-border/60 px-5 py-3.5 text-sm text-muted-foreground md:px-8"
            >
              <span className="h-1 w-1 rounded-full bg-sage" aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left transition-colors hover:bg-cream/60 md:px-8"
      >
        <span className="text-[1.02rem] font-medium">{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <p className="min-h-0 px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-8">
          {a}
        </p>
      </div>
    </div>
  );
}
