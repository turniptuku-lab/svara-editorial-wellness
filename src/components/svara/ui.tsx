import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

export function Pill({
  children,
  tone = "cream",
  className = "",
}: {
  children: ReactNode;
  tone?: "cream" | "green" | "glass" | "outline";
  className?: string;
}) {
  const tones = {
    cream: "bg-cream text-foreground",
    green: "bg-primary text-primary-foreground",
    glass: "bg-background/75 text-foreground backdrop-blur-md",
    outline: "border border-border text-muted-foreground",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.18em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50";

const buttonTones = {
  solid: "bg-primary text-primary-foreground hover:opacity-90 hover:-translate-y-0.5 shadow-soft",
  outline: "border border-border bg-background/60 text-foreground hover:bg-cream hover:-translate-y-0.5",
  ghost: "text-foreground hover:bg-cream",
  light: "bg-background text-foreground hover:opacity-90 hover:-translate-y-0.5",
} as const;

const buttonSizes = {
  sm: "h-9 px-4",
  md: "h-11 px-6",
  lg: "h-13 px-7 text-[0.95rem]",
} as const;

type BtnProps = {
  tone?: keyof typeof buttonTones;
  size?: keyof typeof buttonSizes;
  className?: string;
  children: ReactNode;
};

export function ActionLink({
  to,
  tone = "solid",
  size = "md",
  className = "",
  children,
  ...rest
}: BtnProps & { to: string } & Omit<ComponentProps<typeof Link>, "to" | "children" | "className">) {
  return (
    <Link
      to={to}
      className={`${buttonBase} ${buttonTones[tone]} ${buttonSizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ActionButton({
  tone = "solid",
  size = "md",
  className = "",
  children,
  ...rest
}: BtnProps & ComponentProps<"button">) {
  return (
    <button
      className={`${buttonBase} ${buttonTones[tone]} ${buttonSizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ArrowLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary ${className}`}
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="inline-block h-px w-8 bg-sage" aria-hidden="true" />
      {children}
    </p>
  );
}
