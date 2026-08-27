"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="py-6 mb-6 border-b border-black">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold lowercase tracking-very-tight">
            {site.name}
          </h1>
          <p className="text-xs lg:text-sm text-gray-700 lowercase">
            {site.tagline}
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-2xs lg:text-sm lowercase">
            <li>
              <Link
                href="/"
                className={`transition-colors duration-200 hover:text-indigo-500 ${
                  isActive("/") ? "font-semibold text-dem-blue" : ""
                }`}
              >
                home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors duration-200 hover:text-indigo-500 ${
                    isActive(item.href) ? "font-semibold text-dem-blue" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/donate"
                className={`transition-colors duration-200 hover:text-dem-red ${
                  isActive("/donate")
                    ? "font-semibold text-dem-red"
                    : "text-dem-red/80"
                }`}
              >
                donate
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
