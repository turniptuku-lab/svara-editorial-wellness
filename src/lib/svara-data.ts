import heroImg from "@/assets/hero.jpg";
import slowDown from "@/assets/slow-down.jpg";
import wakeUp from "@/assets/wake-up.jpg";
import getStrong from "@/assets/get-strong.jpg";
import goDeeper from "@/assets/go-deeper.jpg";
import story from "@/assets/story.jpg";
import featured from "@/assets/featured.jpg";
import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";
import community1 from "@/assets/community-1.jpg";
import community2 from "@/assets/community-2.jpg";
import instructor from "@/assets/instructor.jpg";
import cta from "@/assets/cta.jpg";

export const img = {
  hero: heroImg,
  slowDown,
  wakeUp,
  getStrong,
  goDeeper,
  story,
  featured,
  course1,
  course2,
  course3,
  journal1,
  journal2,
  journal3,
  community1,
  community2,
  instructor,
  cta,
};

export const intentions = [
  {
    no: "01",
    title: "Slow Down",
    copy: "For stress, anxiety, busy days and nervous-system reset.",
    cta: "Unwind",
    image: slowDown,
  },
  {
    no: "02",
    title: "Wake Up",
    copy: "Morning movement, energy and mobility.",
    cta: "Energize",
    image: wakeUp,
  },
  {
    no: "03",
    title: "Get Strong",
    copy: "Strength-focused yoga and functional movement.",
    cta: "Build strength",
    image: getStrong,
  },
  {
    no: "04",
    title: "Go Deeper",
    copy: "Meditation, breathwork and deeper practices.",
    cta: "Explore",
    image: goDeeper,
  },
];

export type Course = {
  slug: string;
  title: string;
  tag: string;
  copy: string;
  duration: string;
  lessons: string;
  price: string;
  image: string;
  featured?: boolean;
};

export const courses: Course[] = [
  {
    slug: "the-14-day-reset",
    title: "The 14-Day Reset",
    tag: "Beginner",
    copy: "Two weeks of gentle movement, breathwork and mindful routines to reset your body and mind.",
    duration: "14 days",
    lessons: "18 lessons",
    price: "₹1,499",
    image: course1,
  },
  {
    slug: "yoga-foundations",
    title: "Yoga Foundations",
    tag: "Most popular",
    copy: "Build a strong foundation in movement, alignment, breath and awareness.",
    duration: "4 weeks",
    lessons: "32 lessons",
    price: "₹2,499",
    image: course2,
    featured: true,
  },
  {
    slug: "deepen-your-practice",
    title: "Deepen Your Practice",
    tag: "Intermediate",
    copy: "For practitioners ready to move beyond the basics and explore a deeper relationship with yoga.",
    duration: "6 weeks",
    lessons: "42 lessons",
    price: "₹3,499",
    image: course3,
  },
];

export const practiceFilters = [
  "All",
  "Morning",
  "Stress",
  "Strength",
  "Flexibility",
  "Sleep",
  "Meditation",
  "Beginner",
] as const;

export type Practice = {
  name: string;
  instructor: string;
  duration: string;
  level: string;
  category: (typeof practiceFilters)[number];
  image: string;
};

export const practices: Practice[] = [
  { name: "Morning Grounding", instructor: "Aanya Rao", duration: "12 min", level: "Beginner", category: "Morning", image: wakeUp },
  { name: "Release & Restore", instructor: "Nikhil Sen", duration: "20 min", level: "All levels", category: "Stress", image: slowDown },
  { name: "Strong Flow", instructor: "Maya Iyer", duration: "35 min", level: "Intermediate", category: "Strength", image: getStrong },
  { name: "Sleep Wind Down", instructor: "Aanya Rao", duration: "15 min", level: "Beginner", category: "Sleep", image: journal1 },
  { name: "Breath & Stillness", instructor: "Devi Menon", duration: "10 min", level: "All levels", category: "Meditation", image: goDeeper },
  { name: "Open Hips, Open Day", instructor: "Nikhil Sen", duration: "25 min", level: "All levels", category: "Flexibility", image: course3 },
  { name: "First Mat Day", instructor: "Maya Iyer", duration: "18 min", level: "Beginner", category: "Beginner", image: course2 },
  { name: "Slow Sunrise Flow", instructor: "Devi Menon", duration: "22 min", level: "Beginner", category: "Morning", image: hero0(),
  },
  { name: "Unclench Your Jaw", instructor: "Aanya Rao", duration: "8 min", level: "All levels", category: "Stress", image: journal3 },
  { name: "Steady Core", instructor: "Maya Iyer", duration: "28 min", level: "Intermediate", category: "Strength", image: featured },
  { name: "Long Exhale", instructor: "Devi Menon", duration: "12 min", level: "All levels", category: "Meditation", image: story },
  { name: "Late Night Unwind", instructor: "Nikhil Sen", duration: "16 min", level: "Beginner", category: "Sleep", image: community2 },
];

function hero0() {
  return heroImg;
}

export type Article = {
  slug: string;
  title: string;
  category: string;
  read: string;
  image: string;
  excerpt: string;
};

export const articles: Article[] = [
  {
    slug: "article",
    title: "Why you're tired even after doing nothing",
    category: "Mind",
    read: "6 min read",
    image: journal1,
    excerpt: "Rest isn't the same as recovery. A look at the kind of tired that sleep doesn't fix.",
  },
  {
    slug: "article",
    title: "A 10-minute morning ritual that actually feels doable",
    category: "Rituals",
    read: "4 min read",
    image: journal2,
    excerpt: "No cold plunges. No 5am. Just a small, repeatable way to start softer.",
  },
  {
    slug: "article",
    title: "What yoga teaches us about slowing down",
    category: "Practice",
    read: "7 min read",
    image: journal3,
    excerpt: "Slowness isn't laziness — it's attention. What the mat keeps trying to tell us.",
  },
];

export const testimonials = [
  {
    quote:
      "SVARA made yoga feel less like something I had to be good at and more like somewhere I could actually go.",
    name: "Maya R.",
    label: "SVARA member",
  },
  {
    quote:
      "I've started and quit yoga four times. This is the first time it stayed. Ten minutes counts here.",
    name: "Ishaan K.",
    label: "SVARA member",
  },
  {
    quote:
      "It doesn't ask me to be a calmer person. It just gives me somewhere to put the day down.",
    name: "Leah T.",
    label: "SVARA member",
  },
];

export const curriculum = [
  {
    week: "Week 01 — Arrive",
    days: [
      "Day 01 — Begin where you are",
      "Day 02 — Breath & awareness",
      "Day 03 — Grounding flow",
      "Day 04 — Mobility",
      "Day 05 — Slow strength",
      "Day 06 — Restore",
      "Day 07 — Stillness",
    ],
  },
  {
    week: "Week 02 — Soften",
    days: [
      "Day 08 — Releasing the shoulders",
      "Day 09 — Hips and holding",
      "Day 10 — Long exhale practice",
      "Day 11 — Balance without effort",
      "Day 12 — Gentle backbends",
      "Day 13 — Floor flow",
      "Day 14 — Rest as practice",
    ],
  },
  {
    week: "Week 03 — Build",
    days: [
      "Day 15 — Standing strength",
      "Day 16 — Core, quietly",
      "Day 17 — Sun salutations, slowly",
      "Day 18 — Steady legs",
      "Day 19 — Breath under load",
      "Day 20 — Flow without rushing",
      "Day 21 — Integration",
    ],
  },
  {
    week: "Week 04 — Stay",
    days: [
      "Day 22 — Your morning practice",
      "Day 23 — Your evening practice",
      "Day 24 — Ten minutes on hard days",
      "Day 25 — Deeper breathwork",
      "Day 26 — Meditation, unforced",
      "Day 27 — Build your own sequence",
      "Day 28 — Practice, alone",
      "Day 29 — Practice, together",
      "Day 30 — Begin again",
    ],
  },
];

export const faqs = [
  {
    q: "I've never done yoga. Is this for me?",
    a: "Yes. Every session has a slower variation, and the first week assumes you've never stepped on a mat.",
  },
  {
    q: "How long is each practice?",
    a: "Between 10 and 35 minutes. Most days sit around 20.",
  },
  {
    q: "Do I need equipment?",
    a: "A mat helps. A cushion and a folded blanket cover everything else.",
  },
  {
    q: "What if I miss a day?",
    a: "You pick it back up. The journey doesn't expire — you have lifetime access.",
  },
];
