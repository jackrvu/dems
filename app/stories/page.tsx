import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { stories } from "@/content/stories";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Stories",
  description: "Recaps, explainers, and arguments from members of Rice Young Democrats.",
};

export default function StoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stories"
        title="Written by members"
        lede="Event recaps, explainers on how local elections actually work, and arguments members want to make under their own name."
      />

      <section className="section">
        <div className="container narrow">
          {stories.length > 0 ? (
            <div className="story-list">
              {stories.map((s) => (
                <article key={s.slug} className="story-row">
                  <p className="story-meta">
                    {formatDate(s.date)}
                    {s.kind ? <span className="tag"> {s.kind}</span> : null}
                  </p>
                  <h2>
                    <Link href={`/stories/${s.slug}`}>{s.title}</Link>
                  </h2>
                  <p className="muted">{s.excerpt}</p>
                  <p className="small muted byline">
                    By {s.author}
                    {s.role ? `, ${s.role}` : ""}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <p className="muted">
              Nothing published yet. Add a story to{" "}
              <code>content/stories.ts</code>.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
