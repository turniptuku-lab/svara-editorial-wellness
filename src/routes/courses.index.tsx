import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/svara/Reveal";
import { CourseCard } from "@/components/svara/CourseCard";
import { Testimonials } from "@/components/svara/Testimonials";
import { ActionLink, SectionLabel } from "@/components/svara/ui";
import { courses, img } from "@/lib/svara-data";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Courses — SVARA" },
      {
        name: "description",
        content:
          "Guided yoga programs from SVARA: the 14-Day Reset, Yoga Foundations, Deepen Your Practice and the 30-Day Yoga Journey.",
      },
      { property: "og:title", content: "Courses — SVARA" },
      {
        property: "og:description",
        content: "Programs designed to build a practice that stays with you.",
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <>
      <section className="shell pb-14 pt-10 md:pt-16">
        <Reveal>
          <SectionLabel>Courses</SectionLabel>
          <h1 className="mt-6 max-w-3xl font-display text-[3rem] leading-[0.94] tracking-[-0.05em] sm:text-7xl">
            Learn the practice.
            <br />
            Live the practice.
          </h1>
          <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
            Guided programs designed to help you build a practice that actually stays with
            you.
          </p>
        </Reveal>
      </section>

      <section className="shell pb-20">
        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 no-scrollbar md:mx-0 md:grid md:grid-cols-3 md:items-start md:overflow-visible md:px-0 md:pb-0">
          {courses.map((c, i) => (
            <Reveal
              key={c.slug}
              delay={i * 90}
              className="w-[80vw] shrink-0 snap-start sm:w-[62vw] md:w-auto"
            >
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell pb-8">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-ink text-background">
          <img
            src={img.featured}
            alt="A person mid yoga flow in a large dark green studio"
            loading="lazy"
            width={1600}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
          <div className="relative px-6 py-16 md:px-14 md:py-20">
            <p className="eyebrow text-background/70">SVARA signature</p>
            <h2 className="mt-6 font-display text-[2.4rem] leading-[0.98] tracking-[-0.05em] sm:text-6xl">
              The 30-Day Yoga Journey
            </h2>
            <p className="mt-5 max-w-md text-[0.98rem] text-background/75">
              30 days. One practice. A different way of meeting yourself. ₹2,999 with
              lifetime access.
            </p>
            <div className="mt-8">
              <ActionLink to="/courses/the-30-day-yoga-journey" tone="light" size="lg">
                View the journey
              </ActionLink>
            </div>
          </div>
        </Reveal>
      </section>

      <Testimonials />
    </>
  );
}
