import Link from "next/link";
import { nav, site } from "@/content/site";

const socials = [
  { key: "instagram", label: "Instagram" },
  { key: "x", label: "X" },
  { key: "facebook", label: "Facebook" },
  { key: "groupme", label: "GroupMe" },
  { key: "newsletter", label: "Newsletter" },
] as const;

export default function Footer() {
  const links = site.links as Record<string, string>;
  const active = socials.filter((s) => links[s.key]);

  return (
    <footer className="mt-16 bg-surface border-t border-line">
      <div className="container-site py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-mono font-semibold text-sm tracking-very-tight">
              {site.name}
            </p>
            <p className="mt-2 text-sm text-ink/70 max-w-prose">
              {site.description}
            </p>
          </div>

          <div>
            <p className="eyebrow">Pages</p>
            <ul className="mt-2 space-y-1 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink/75 hover:text-dem-blue capitalize"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/donate" className="text-dem-red hover:underline">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink/75 hover:text-dem-blue"
                >
                  {site.email}
                </a>
              </li>
              {active.map((s) => (
                <li key={s.key}>
                  <a
                    href={links[s.key]}
                    className="text-ink/75 hover:text-dem-blue"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-line text-xs text-ink/55">
          <p className="max-w-prose">
            A registered student organization. Not an official publication of
            Rice University, and not affiliated with any candidate&rsquo;s
            campaign committee.
          </p>
          <p className="mt-2 font-mono">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
