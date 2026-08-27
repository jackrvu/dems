import type { Metadata } from "next";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "photos",
  description: "canvasses, meetings, banquets, and everything in between.",
};

export default function PhotosPage() {
  return (
    <Layout>
      <Panel title="photos" aside={photos.length ? `${photos.length}` : undefined}>
        {photos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((p) => (
              <figure key={p.src} className="m-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full aspect-[3/2] object-cover border border-black"
                />
                {p.caption || p.credit ? (
                  <figcaption className="text-gray-600 mt-1">
                    {p.caption}
                    {p.credit ? (
                      <span className="block text-3xs text-gray-500">
                        {p.credit}
                      </span>
                    ) : null}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">
            no photos yet.
          </p>
        )}
      </Panel>

      <Panel title="adding photos">
        <p className="text-gray-600">
          drop files in <code>public/images/gallery/</code>, then list them in{" "}
          <code>content/photos.ts</code> with alt text, a caption, and a credit.
          resize to roughly 1600&nbsp;px wide before committing so the page
          stays fast — and get permission before posting identifiable photos of
          people.
        </p>
      </Panel>
    </Layout>
  );
}
