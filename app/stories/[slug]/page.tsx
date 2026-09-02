import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import { stories, getStory } from "@/content/stories";
import { formatCompactYear } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "story not found" };
  return { title: story.title, description: story.excerpt };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const others = stories.filter((s) => s.slug !== story.slug).slice(0, 5);

  const sidebar = (
    <>
      <Panel title="byline">
        <p className="font-semibold">{story.author}</p>
        {story.role ? (
          <p className="text-sm text-ink/60">{story.role}</p>
        ) : null}
        <p className="font-mono text-xs uppercase tracking-wide text-ink/55 mt-3">
          {formatCompactYear(story.date)}
          {story.kind ? ` · ${story.kind}` : ""}
        </p>
      </Panel>

      {others.length > 0 ? (
        <Panel title="more stories">
          <ul className="space-y-1">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/stories/${s.slug}`}
                  className="flex flex-row items-baseline gap-3 group"
                >
                  <span className="font-mono text-xs uppercase tracking-wide text-ink/55 shrink-0 tabular-nums pt-0.5">
                    {formatCompactYear(s.date)}
                  </span>
                  <span className="group-hover:text-dem-blue transition-colors">
                    {s.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      ) : null}

      <Panel title="index">
        <Link href="/stories" className="prose-link">
          All stories
        </Link>
      </Panel>
    </>
  );

  return (
    <Layout sidebar={sidebar} title={story.title} intro={story.excerpt}>
      <article>
        <Panel title={story.kind ? story.kind : "story"}>
          {story.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={story.image}
              alt=""
              className="w-full border border-line rounded mb-3"
            />
          ) : null}

          <div className="space-y-4 max-w-prose leading-[1.75]">
            {story.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Panel>
      </article>
    </Layout>
  );
}
