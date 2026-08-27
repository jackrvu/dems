import Link from "next/link";
import { nav, site } from "@/content/site";

const socials = [
  { key: "instagram", label: "Instagram" },
  { key: "x", label: "X" },
  { key: "facebook", label: "Facebook" },
  { key: "groupme", label: "GroupMe" },
  { key: "newsletter", label: "Newsletter" },
] as const;

export default function SiteFooter() {
  const active = socials.filter(
    (s) => (site.links as Record<string, string>)[s.key]
  );

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div>
            <h4>{site.name}</h4>
            <p style={{ maxWidth: "34ch" }}>{site.tagline}</p>
            <p className="small">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              {site.mailingAddress}
            </p>
          </div>

          <div>
            <h4>Pages</h4>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/donate">Donate</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Follow</h4>
            {active.length > 0 ? (
              <ul>
                {active.map((s) => (
                  <li key={s.key}>
                    <a href={(site.links as Record<string, string>)[s.key]}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="small">
                Add social links in <code>content/site.ts</code>.
              </p>
            )}
          </div>
        </div>

        <div className="colophon">
          <span>
            &copy; {new Date().getFullYear()} {site.name}
          </span>
          <span>
            A registered student organization. Not an official publication of
            Rice University, and not affiliated with any candidate&rsquo;s
            campaign committee.
          </span>
        </div>
      </div>
    </footer>
  );
}
