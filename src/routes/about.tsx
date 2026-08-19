import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/svara/Reveal";
import { Testimonials } from "@/components/svara/Testimonials";
import { ActionLink, SectionLabel } from "@/components/svara/ui";
import { img } from "@/lib/svara-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SVARA — Move slower. Feel deeper." },
      {
        name: "description",
        content:
          "SVARA is a modern yoga and mindful-living platform built around consistency, presence and realistic everyday practice.",
      },
      { property: "og:title", content: "About SVARA — Move slower. Feel deeper." },
      {
        property: "og:description",
        content: "Why we built a yoga platform around consistency instead of intensity.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="shell pb-16 pt-10 md:pt-16">
        <Reveal>
          <SectionLabel>Our story</SectionLabel>
          <h1 className="mt-6 max-w-4xl font-display text-[2.9rem] leading-[0.95] tracking-[-0.05em] sm:text-7xl">
            We built SVARA for the days practice feels impossible.
          </h1>
          <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
            Not for the perfect mornings. For the ones where you're late, tight, tired and
            still willing to give ten minutes to yourself.
          </p>
        </Reveal>
      </section>

      <section className="shell pb-24">
        <Reveal className="overflow-hidden rounded-[2.5rem]">
          <img
            src={img.story}
            alt="Two people rolling out yoga mats on a wooden deck in tall grass"
            loading="lazy"
            width={1280}
            height={1024}
            className="h-[22rem] w-full object-cover md:h-[32rem]"
          />
        </Reveal>
      </section>

      <section className="shell pb-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="max-w-2xl font-display text-[2rem] leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Presence over performance. Consistency over intensity.
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground">
            <p>
              SVARA began with a simple frustration: most yoga platforms are built for the
              version of you that already practises daily. We wanted the opposite — a
              place designed around the beginning, the pause, and the return.
            </p>
            <p>
              Every practice starts from where your body actually is. Every course assumes
              you'll miss days. Nothing here asks you to be a calmer, better-organised
              person before you're allowed to begin.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell pb-24">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {[
            ["Human first", "Real teachers, real bodies, no choreography for the camera."],
            ["Small and repeatable", "Ten minutes counts. It always counted."],
            ["Quietly ambitious", "Depth comes from returning, not from pushing harder."],
          ].map(([title, copy], i) => (
            <Reveal key={title} delay={i * 90} className="bg-background p-8 md:p-10">
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="overflow-hidden rounded-[2.5rem]">
            <img
              src={img.instructor}
              alt="Portrait of a SVARA yoga teacher against a plaster wall"
              loading="lazy"
              width={900}
              height={1100}
              className="h-[24rem] w-full object-cover md:h-[30rem]"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-6 font-display text-[2rem] leading-tight tracking-[-0.04em] sm:text-5xl">
              Say hello.
            </h2>
            <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
              Questions about a course, teaching with us, or just want to tell us how the
              practice is going? We read everything.
            </p>
            <p className="mt-6 font-display text-2xl">hello@svara.studio</p>
            <div className="mt-8">
              <ActionLink to="/practice" size="lg">
                Start practicing
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
