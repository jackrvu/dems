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
  return { title: story.title.toLowerCase(), description: story.excerpt };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const others = stories.filter((s) => s.slug !== story.slug).slice(0, 5);

  const sidebar = (
    <>
      <Panel title="byline">
        <p className="font-semibold lowercase">{story.author}</p>
        {story.role ? (
          <p className="text-gray-600 lowercase">{story.role}</p>
        ) : null}
        <p className="text-gray-600 mt-2">{formatCompactYear(story.date)}</p>
        {story.kind ? (
          <p className="text-dem-red lowercase">{story.kind}</p>
        ) : null}
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
                  <span className="text-gray-600 shrink-0 tabular-nums">
                    {formatCompactYear(s.date)}
                  </span>
                  <span className="group-hover:text-green-500 transition-colors duration-200">
                    {s.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      ) : null}

      <Panel title="index">
        <Link
          href="/stories"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          all stories
        </Link>
      </Panel>
    </>
  );

  return (
    <Layout sidebar={sidebar}>
      <article>
        <Panel title={story.title}>
          {story.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={story.image}
              alt=""
              className="w-full border border-black mb-3"
            />
          ) : null}

          <div className="space-y-3 max-w-prose leading-relaxed">
            {story.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Panel>
      </article>
    </Layout>
  );
}
