import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import { stories } from "@/content/stories";
import { formatCompactYear } from "@/lib/format";

export const metadata: Metadata = {
  title: "Stories",
  description: "Recaps, explainers, and arguments from members of Rice Young Democrats.",
};

export default function StoriesPage() {
  return (
    <Layout
      title="Stories"
      intro="Recaps, explainers, and arguments from members of the chapter."
    >
      <Panel title="stories" aside={`${stories.length} published`}>
        {stories.length > 0 ? (
          <div className="row-divide">
            {stories.map((s) => (
              <article key={s.slug}>
                <div className="flex flex-row items-baseline gap-3">
                  <span className="font-mono text-xs text-ink/55 uppercase tracking-wide shrink-0 tabular-nums">
                    {formatCompactYear(s.date)}
                  </span>
                  <Link
                    href={`/stories/${s.slug}`}
                    className="font-semibold prose-link"
                  >
                    {s.title}
                  </Link>
                  {s.kind ? (
                    <span className="eyebrow rounded border border-line bg-surface px-1.5 py-0.5 shrink-0">
                      {s.kind}
                    </span>
                  ) : null}
                </div>
                <p className="text-ink/70 mt-1 max-w-prose">{s.excerpt}</p>
                <p className="text-sm text-ink/60 mt-1">
                  By {s.author}
                  {s.role ? `, ${s.role}` : ""}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-ink/55 italic">
            Nothing published yet. Add a story to content/stories.ts.
          </p>
        )}
      </Panel>

      <Panel title="want to write?">
        <p className="text-ink/70">
          Event recaps, explainers on how local elections actually work, and
          arguments members want to make under their own name. Talk to the
          communications director.
        </p>
      </Panel>
    </Layout>
  );
}
