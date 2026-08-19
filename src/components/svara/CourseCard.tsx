import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Course } from "@/lib/svara-data";
import { Pill } from "./ui";

export function CourseCard({ course }: { course: Course }) {
  const to = course.slug === "the-14-day-reset" || course.slug === "yoga-foundations" || course.slug === "deepen-your-practice"
    ? "/courses/the-30-day-yoga-journey"
    : "/courses";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift ${
        course.featured
          ? "border-primary/25 bg-cream shadow-soft md:-mt-6 md:mb-6"
          : "border-border bg-card"
      }`}
    >
      <div className="relative m-2 overflow-hidden rounded-[1.35rem]">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          width={1200}
          height={900}
          className="h-52 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 md:h-56"
        />
        <div className="absolute left-3 top-3">
          <Pill tone={course.featured ? "green" : "glass"}>{course.tag}</Pill>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 pt-3 md:p-6 md:pt-3">
        <h3 className="font-display text-2xl md:text-[1.75rem]">{course.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.copy}</p>

        <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
          <span>{course.duration}</span>
          <span className="h-3 w-px bg-border" aria-hidden="true" />
          <span>{course.lessons}</span>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
          <p className="font-display text-2xl">{course.price}</p>
          <Link
            to={to}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
          >
            Explore course
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
