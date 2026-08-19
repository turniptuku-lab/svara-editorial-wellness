import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/svara/Reveal";
import { ActionLink, ArrowLink, Pill } from "@/components/svara/ui";
import { img } from "@/lib/svara-data";

export const Route = createFileRoute("/journal/article")({
  head: () => ({
    meta: [
      { title: "Why you're tired even after doing nothing — SVARA Journal" },
      {
        name: "description",
        content:
          "Rest isn't the same as recovery. On the kind of tired that sleep doesn't fix, and what to do with it.",
      },
      {
        property: "og:title",
        content: "Why you're tired even after doing nothing — SVARA Journal",
      },
      {
        property: "og:description",
        content: "On the kind of tired that sleep doesn't fix.",
      },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <article className="pb-24 md:pb-32">
      <header className="shell pt-10 md:pt-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <Pill tone="cream">Mind</Pill>
            <span className="text-xs text-muted-foreground">6 min read</span>
          </div>
          <h1 className="mt-7 max-w-4xl font-display text-[2.6rem] leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Why you're tired even after doing nothing
          </h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
            Rest isn't the same as recovery. A look at the kind of tired that sleep
            doesn't fix — and the small, unglamorous things that do.
          </p>
        </Reveal>
      </header>

      <Reveal delay={100} className="shell mt-12">
        <img
          src={img.journal1}
          alt="A person resting on a couch by a window holding a cup of tea"
          loading="lazy"
          width={1200}
          height={900}
          className="h-[22rem] w-full rounded-[2.5rem] object-cover md:h-[34rem]"
        />
      </Reveal>

      <div className="shell mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.6fr]">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">Written by</p>
          <p className="mt-3 font-display text-2xl">Aanya Rao</p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            SVARA teacher, breathwork &amp; restorative
          </p>
          <div className="hairline my-7" />
          <p className="eyebrow">Filed under</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill tone="outline">Rest</Pill>
            <Pill tone="outline">Nervous system</Pill>
            <Pill tone="outline">Mind</Pill>
          </div>
        </Reveal>

        <Reveal delay={80} className="max-w-2xl space-y-6 text-[1.02rem] leading-[1.75] text-foreground/85">
          <p>
            There's a tiredness that has nothing to do with how much you slept. You wake
            up, you scroll, you sit through a day that mostly happened on a screen, and by
            evening your body feels like it ran somewhere it never went.
          </p>
          <p>
            Most of us treat that as a sleep problem. Usually it isn't. It's a nervous
            system that never got the signal that the day was over — no closing gesture,
            no downshift, nothing between the last email and the pillow.
          </p>
          <h2 className="pt-4 font-display text-3xl tracking-[-0.03em]">
            Doing nothing is not the same as resting
          </h2>
          <p>
            Lying on the couch with your phone is a paused body and a sprinting mind. Real
            rest asks for the opposite: a little movement, a longer exhale, and a few
            minutes where nothing is being asked of your attention.
          </p>
          <blockquote className="rounded-3xl border-l-2 border-sage bg-cream/70 py-6 pl-6 pr-5 font-display text-2xl leading-snug tracking-[-0.02em]">
            Your body doesn't need more discipline. It needs a signal that it's safe to
            stop.
          </blockquote>
          <h2 className="pt-4 font-display text-3xl tracking-[-0.03em]">
            A smaller ask
          </h2>
          <p>
            Try ten minutes. Legs up a wall, a slow forward fold, an exhale that's twice
            as long as your inhale. That's it. Not because it fixes everything, but
            because it's the one thing you'll actually repeat tomorrow.
          </p>
          <p>
            Consistency has a strange effect on tiredness. Ten minutes, most days, changes
            more than an hour once a fortnight ever will. The practice isn't the point —
            coming back is.
          </p>

          <div className="pt-8">
            <ArrowLink to="/journal">Back to the journal</ArrowLink>
          </div>
        </Reveal>
      </div>

      <section className="shell mt-24">
        <Reveal className="rounded-[2.5rem] border border-border bg-cream/60 px-6 py-14 text-center md:px-16">
          <h2 className="mx-auto max-w-2xl font-display text-[2rem] leading-tight tracking-[-0.04em] sm:text-5xl">
            Try the ten-minute version tonight.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ActionLink to="/practice" size="lg">
              Start practicing
            </ActionLink>
            <ActionLink to="/courses" tone="outline" size="lg">
              Explore courses
            </ActionLink>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
