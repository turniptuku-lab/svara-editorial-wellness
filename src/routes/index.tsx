import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/svara/Reveal";
import { Testimonials } from "@/components/svara/Testimonials";
import { CourseCard } from "@/components/svara/CourseCard";
import { ActionLink, ArrowLink, Pill, SectionLabel } from "@/components/svara/ui";
import { articles, courses, img, intentions } from "@/lib/svara-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SVARA — Come back to yourself" },
      {
        name: "description",
        content:
          "Yoga for real life. Guided practices, courses and rituals to help you move slower and feel deeper.",
      },
      { property: "og:title", content: "SVARA — Come back to yourself" },
      {
        property: "og:description",
        content: "Yoga for real life. Move slower. Feel deeper.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <FindYourPractice />
      <MoreThanPractice />
      <CoursesSection />
      <FeaturedCourse />
      <HowItWorks />
      <JournalSection />
      <Community />
      <Testimonials />
      <FinalCta />
    </>
  );
}

function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(Math.min(window.scrollY, 500));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="shell pb-8 pt-6 md:pb-16 md:pt-10">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <Reveal className="order-1 lg:order-none">
          <Pill tone="cream">Yoga • Mindfulness • Movement</Pill>
          <h1 className="mt-7 font-display text-[3.3rem] leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[6rem]">
            Come back
            <br />
            to <span className="text-sage">yourself.</span>
          </h1>
          <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
            Yoga for real life — for the mornings you feel stuck, the nights you need to
            slow down, and everything in between.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ActionLink to="/practice" size="lg">
              Start your practice
            </ActionLink>
            <ActionLink to="/about" tone="outline" size="lg">
              Explore SVARA
            </ActionLink>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            No experience needed. Just show up.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative order-2 lg:order-none">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-cream">
            <img
              src={img.hero}
              alt="A woman in linen practising a standing balance pose in a sunlit room"
              width={1024}
              height={1280}
              className="h-[26rem] w-full object-cover object-center sm:h-[34rem] lg:h-[40rem]"
              style={{ transform: `translate3d(0, ${y * -0.045}px, 0) scale(1.06)` }}
            />
          </div>

          <div className="pointer-events-none absolute left-4 top-5 flex flex-col items-start gap-2.5 sm:left-6 sm:top-7">
            <Pill tone="glass">12 min practice</Pill>
            <Pill tone="glass" className="ml-6">
              Beginner friendly
            </Pill>
          </div>

          <div className="pointer-events-none absolute bottom-5 right-4 flex items-center gap-2.5 sm:bottom-7 sm:right-6">
            <Pill tone="glass">Mind + Body</Pill>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift">
              <Play className="h-4 w-4 fill-current" />
            </span>
          </div>

          <div className="absolute -bottom-6 left-4 hidden rounded-2xl border border-border bg-background/85 px-5 py-4 shadow-soft backdrop-blur-md sm:block">
            <p className="font-display text-3xl leading-none">240k+</p>
            <p className="mt-1.5 text-[0.7rem] text-muted-foreground">
              minutes practised this month
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="shell py-24 md:py-36">
      <Reveal>
        <SectionLabel>The SVARA philosophy</SectionLabel>
      </Reveal>
      <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
        <Reveal>
          <h2 className="max-w-3xl font-display text-[2.1rem] leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3.9rem]">
            Yoga isn't about becoming someone else. It's about meeting yourself where you
            are.
          </h2>
        </Reveal>
        <Reveal delay={120} className="flex flex-col justify-end gap-8">
          <p className="text-[0.98rem] leading-relaxed text-muted-foreground">
            SVARA is built around consistency instead of intensity. Short practices you'll
            actually return to, designed for real days — the rushed ones, the heavy ones,
            the quiet ones. Presence over performance, always.
          </p>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={img.journal2}
              alt="Morning light across a wooden table with a ceramic cup and folded linen"
              loading="lazy"
              width={1200}
              height={900}
              className="h-48 w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FindYourPractice() {
  return (
    <section className="shell py-8 md:py-12">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionLabel>Find your practice</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-display text-4xl tracking-[-0.045em] sm:text-6xl">
            What does your body need today?
          </h2>
        </div>
        <p className="max-w-xs text-sm text-muted-foreground">
          Not every day needs the same version of you.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {intentions.map((it, i) => (
          <Reveal key={it.no} delay={i * 90}>
            <Link
              to="/practice"
              className="group block h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="relative m-2 overflow-hidden rounded-[1.35rem]">
                <img
                  src={it.image}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-64 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                />
                <span className="absolute left-3 top-3 font-display text-sm text-background/90 mix-blend-difference">
                  {it.no}
                </span>
              </div>
              <div className="p-5 pt-3">
                <h3 className="font-display text-[1.6rem]">{it.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {it.copy}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                  {it.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function MoreThanPractice() {
  return (
    <section className="shell py-24 md:py-36">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="overflow-hidden rounded-[2.5rem]">
          <img
            src={img.story}
            alt="Two people rolling out yoga mats on a wooden deck in tall grass"
            loading="lazy"
            width={1280}
            height={1024}
            className="h-[22rem] w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04] md:h-[32rem]"
          />
        </Reveal>
        <Reveal delay={120}>
          <SectionLabel>More than a practice</SectionLabel>
          <h2 className="mt-6 font-display text-[2.4rem] leading-[1.02] tracking-[-0.045em] sm:text-6xl">
            Your mat is only the beginning.
          </h2>
          <p className="mt-7 max-w-lg text-[0.98rem] leading-relaxed text-muted-foreground">
            SVARA was created for the space between who you are and who you're becoming.
            We believe movement can change the way you experience your body, your work,
            your relationships, and the quiet moments in between.
          </p>
          <div className="mt-9">
            <ArrowLink to="/about">Our story</ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CoursesSection() {
  return (
    <section className="shell py-8 md:py-12">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-4xl tracking-[-0.045em] sm:text-6xl">
          Learn the practice.
          <br />
          Live the practice.
        </h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Guided programs designed to help you build a practice that actually stays with
          you.
        </p>
      </Reveal>

      <div className="mt-14 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 no-scrollbar md:mx-0 md:grid md:grid-cols-3 md:items-start md:overflow-visible md:px-0 md:pb-0">
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

      <Reveal className="mt-10">
        <ArrowLink to="/courses">See all courses</ArrowLink>
      </Reveal>
    </section>
  );
}

function FeaturedCourse() {
  return (
    <section className="shell py-24 md:py-36">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-ink text-background">
        <img
          src={img.featured}
          alt="A person mid yoga flow in a large dark green studio with tall sunlit windows"
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
        <div className="relative grid gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-end md:px-14 md:py-24">
          <div>
            <p className="eyebrow text-background/70">SVARA signature</p>
            <h2 className="mt-6 font-display text-[2.6rem] leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              The 30-Day
              <br />
              Yoga Journey
            </h2>
            <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-background/75">
              30 days. One practice. A different way of meeting yourself.
            </p>
          </div>

          <div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-background/20 pt-7">
              {[
                ["30", "days"],
                ["25+", "practices"],
                ["Beg → Int", "level"],
                ["Lifetime", "access"],
              ].map(([big, small]) => (
                <div key={small}>
                  <dt className="font-display text-2xl">{big}</dt>
                  <dd className="mt-1 text-xs text-background/60">{small}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ActionLink to="/courses/the-30-day-yoga-journey" tone="light" size="lg">
                Start the journey
              </ActionLink>
              <Link
                to="/courses/the-30-day-yoga-journey"
                className="inline-flex h-13 items-center rounded-full border border-background/35 px-7 text-sm font-medium transition-colors hover:bg-background/10"
              >
                View curriculum
              </Link>
              <span className="font-display text-2xl">₹2,999</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["01", "Choose your intention", "Tell us what you need today."],
    ["02", "Press play", "Follow a practice designed for your body and your moment."],
    ["03", "Come back tomorrow", "Small practices become meaningful rituals."],
  ];
  return (
    <section className="shell py-8 md:py-12">
      <Reveal>
        <SectionLabel>How SVARA works</SectionLabel>
        <h2 className="mt-6 font-display text-4xl tracking-[-0.045em] sm:text-6xl">
          No pressure. Just practice.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
        {steps.map(([no, title, copy], i) => (
          <Reveal key={no} delay={i * 100} className="bg-background p-8 md:p-10">
            <p className="font-display text-6xl text-sage-soft md:text-7xl">{no}</p>
            <h3 className="mt-8 font-display text-2xl">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function JournalSection() {
  return (
    <section className="shell py-24 md:py-36">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-4xl tracking-[-0.045em] sm:text-6xl">
          From the SVARA Journal
        </h2>
        <ArrowLink to="/journal">Read the journal</ArrowLink>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {articles.map((a, i) => (
          <Reveal key={a.title} delay={i * 90}>
            <Link to="/journal/article" className="group block">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-60 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                <span>{a.category}</span>
                <span className="h-3 w-px bg-border" aria-hidden="true" />
                <span>{a.read}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl leading-tight transition-colors group-hover:text-primary">
                {a.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {a.excerpt}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="shell py-8 md:py-12">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <Reveal>
          <SectionLabel>The community</SectionLabel>
          <h2 className="mt-6 font-display text-[2.2rem] leading-[1.03] tracking-[-0.045em] sm:text-5xl">
            Practice doesn't have to be perfect. It just has to be yours.
          </h2>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {[
              ["12K+", "Practitioners"],
              ["38", "Countries"],
              ["240K+", "Minutes practised"],
            ].map(([big, small]) => (
              <div key={small}>
                <dt className="font-display text-3xl md:text-4xl">{big}</dt>
                <dd className="mt-1.5 text-xs text-muted-foreground">{small}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-9">
            <ActionLink to="/practice">Join the community</ActionLink>
          </div>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-4">
          <img
            src={img.community1}
            alt="Two friends laughing beside yoga mats in a sunlit apartment"
            loading="lazy"
            width={900}
            height={1100}
            className="h-56 w-full rounded-3xl object-cover md:h-72"
          />
          <img
            src={img.community2}
            alt="A person in a gentle backbend on a rooftop at dusk"
            loading="lazy"
            width={900}
            height={700}
            className="mt-8 h-56 w-full rounded-3xl object-cover md:h-72"
          />
          <img
            src={img.journal3}
            alt="Bare feet resting on a natural fibre yoga mat"
            loading="lazy"
            width={1200}
            height={900}
            className="h-40 w-full rounded-3xl object-cover md:h-52"
          />
          <img
            src={img.slowDown}
            alt="Hands resting softly during seated meditation"
            loading="lazy"
            width={1024}
            height={1280}
            className="mt-8 h-40 w-full rounded-3xl object-cover md:h-52"
          />
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="shell pb-24 pt-24 md:pb-32 md:pt-36">
      <Reveal className="relative overflow-hidden rounded-[2.5rem]">
        <img
          src={img.cta}
          alt="A person practising yoga on a hilltop at golden hour"
          loading="lazy"
          width={1600}
          height={900}
          className="h-[30rem] w-full object-cover md:h-[36rem]"
        />
        <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-background">
          <h2 className="max-w-3xl font-display text-[2.6rem] leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Your next chapter starts on the mat.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-background/80">
            Start where you are. Move at your pace. Come back whenever you need.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ActionLink to="/practice" tone="light" size="lg">
              Start practicing
            </ActionLink>
            <Link
              to="/courses"
              className="inline-flex h-13 items-center rounded-full border border-background/40 px-7 text-sm font-medium transition-colors hover:bg-background/10"
            >
              Explore courses
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
