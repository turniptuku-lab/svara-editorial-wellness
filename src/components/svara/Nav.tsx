import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ActionLink } from "./ui";

const links = [
  { to: "/", label: "Home" },
  { to: "/practice", label: "Practice" },
  { to: "/courses", label: "Courses" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-3 md:pt-5">
      <div className="shell">
        <nav
          aria-label="Main"
          className="pointer-events-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full border border-border/70 bg-background/70 px-4 py-2.5 shadow-soft backdrop-blur-xl md:grid-cols-[1fr_auto_1fr] md:px-5"
        >
          <Link
            to="/"
            className="min-w-0 truncate font-display text-lg font-semibold tracking-[-0.06em] text-foreground"
          >
            SVARA
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to as never}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "bg-primary text-primary-foreground" }}
                  inactiveProps={{ className: "text-muted-foreground hover:bg-cream" }}
                  className="inline-flex h-9 items-center rounded-full px-4 text-sm font-medium transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center justify-end gap-2 md:flex">
            <Link
              to="/practice"
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </Link>
            <ActionLink to="/practice" size="sm">
              Start Practicing
            </ActionLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:bg-cream md:hidden"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </nav>

        <div
          className={`pointer-events-auto origin-top overflow-hidden transition-all duration-400 md:hidden ${
            open ? "mt-2 max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-3xl border border-border/70 bg-background/90 p-3 shadow-soft backdrop-blur-xl">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to as never}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{ className: "text-foreground" }}
                    inactiveProps={{ className: "text-muted-foreground" }}
                    className="block border-b border-border/60 px-3 py-3.5 font-display text-2xl tracking-tight last:border-0"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <ActionLink to="/practice" tone="outline" size="sm">
                Log in
              </ActionLink>
              <ActionLink to="/practice" size="sm">
                Start Practicing
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
