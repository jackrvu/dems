import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stories, getStory } from "@/content/stories";
import { formatDate } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Story not found" };
  return { title: story.title, description: story.excerpt };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  return (
    <article className="section">
      <div className="container narrow">
        <p className="small muted" style={{ marginBottom: "1.5rem" }}>
          <Link href="/stories">&larr; Stories</Link>
        </p>

        <p className="eyebrow">{story.kind ?? "Story"}</p>
        <h1>{story.title}</h1>
        <p className="story-meta" style={{ marginBottom: "2rem" }}>
          By {story.author}
          {story.role ? `, ${story.role}` : ""} &middot;{" "}
          {formatDate(story.date)}
        </p>

        {story.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="story-hero" src={story.image} alt="" />
        ) : null}

        <div className="prose">
          {story.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
