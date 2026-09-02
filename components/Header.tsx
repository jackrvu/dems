"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `py-1 border-b-2 transition-colors ${
      isActive(href)
        ? "border-dem-blue text-dem-blue font-semibold"
        : "border-transparent text-ink/75 hover:text-dem-blue"
    }`;

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-line">
      <div className="container-site flex flex-wrap items-center gap-y-3 justify-between py-3">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-9 h-9 shrink-0 rounded bg-dem-blue text-white font-mono font-semibold text-sm flex items-center justify-center">
            {site.shortName.toLowerCase()}
          </span>
          <span className="leading-tight">
            <span className="block font-mono font-semibold text-[15px] tracking-very-tight group-hover:text-dem-blue transition-colors">
              {site.name}
            </span>
            <span className="block text-xs text-ink/60">{site.tagline}</span>
          </span>
        </Link>

        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
            <li>
              <Link href="/" className={linkClass("/")}>
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/donate" className="btn btn-primary py-1.5 px-3">
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
