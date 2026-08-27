import Link from "next/link";
import { site } from "@/content/site";

const socials = [
  { key: "instagram", label: "instagram" },
  { key: "x", label: "x" },
  { key: "facebook", label: "facebook" },
  { key: "groupme", label: "groupme" },
  { key: "newsletter", label: "newsletter" },
] as const;

export default function Footer() {
  const links = site.links as Record<string, string>;
  const active = socials.filter((s) => links[s.key]);

  return (
    <footer className="mt-8 pt-4 border-t border-black text-3xs text-gray-600">
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <p className="lowercase">
          <a
            href={`mailto:${site.email}`}
            className="hover:text-indigo-500 transition-colors duration-200"
          >
            {site.email}
          </a>
          {active.length > 0 ? (
            <>
              {" · "}
              {active.map((s, i) => (
                <span key={s.key}>
                  {i > 0 ? " · " : ""}
                  <a
                    href={links[s.key]}
                    className="hover:text-indigo-500 transition-colors duration-200"
                  >
                    {s.label}
                  </a>
                </span>
              ))}
            </>
          ) : null}
        </p>
        <p className="lowercase">
          <Link href="/donate" className="hover:text-dem-red transition-colors duration-200">
            donate
          </Link>
          {" · "}&copy; {new Date().getFullYear()} {site.name.toLowerCase()}
        </p>
      </div>
      <p className="mt-2 max-w-3xl">
        A registered student organization. Not an official publication of Rice
        University, and not affiliated with any candidate&rsquo;s campaign
        committee.
      </p>
    </footer>
  );
}
