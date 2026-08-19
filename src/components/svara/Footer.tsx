import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ActionButton } from "./ui";

export function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <footer className="border-t border-border bg-background">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
          <div>
            <p className="font-display text-4xl tracking-[-0.06em] md:text-5xl">SVARA</p>
            <p className="mt-3 text-sm text-muted-foreground">Move slower. Feel deeper.</p>

            <form
              className="mt-8 max-w-sm"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setJoined(true);
              }}
            >
              <label htmlFor="newsletter" className="text-sm text-foreground">
                A little more calm, in your inbox.
              </label>
              <div className="mt-3 flex items-center gap-2 rounded-full border border-border bg-card p-1.5">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent px-3.5 py-2 text-sm outline-none placeholder:text-muted-foreground"
                />
                <ActionButton type="submit" size="sm" className="shrink-0">
                  {joined ? "Joined" : "Join"}
                </ActionButton>
              </div>
              {joined && (
                <p className="mt-2.5 text-xs text-muted-foreground">
                  You're in. Look out for something quiet.
                </p>
              )}
            </form>
          </div>

          <FooterCol
            title="Explore"
            items={[
              { label: "Practice", to: "/practice" },
              { label: "Courses", to: "/courses" },
              { label: "Journal", to: "/journal" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/about" },
            ]}
          />

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-1">
            <FooterCol
              title="Social"
              items={[
                { label: "Instagram", to: "/journal" },
                { label: "YouTube", to: "/practice" },
                { label: "Pinterest", to: "/journal" },
              ]}
            />
            <FooterCol
              title="Legal"
              items={[
                { label: "Privacy", to: "/about" },
                { label: "Terms", to: "/about" },
                { label: "Refund Policy", to: "/about" },
              ]}
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SVARA. Practice gently.</p>
          <p>Made for the space between who you are and who you're becoming.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              to={i.to as never}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
