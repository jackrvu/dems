"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/content/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`site-header${open ? " nav-open" : ""}`}>
      <div className="container">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          <span className="mark" aria-hidden="true">
            {site.shortName}
          </span>
          <span className="name">
            Rice Young Democrats
            <span>Rice University</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav className="site-nav" id="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/donate" className="btn" onClick={() => setOpen(false)}>
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
