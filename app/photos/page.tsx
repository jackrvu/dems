import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "Photos",
  description: "Canvasses, meetings, banquets, and everything in between.",
};

export default function PhotosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Photos"
        title="The chapter, in pictures"
        lede="Canvasses, meetings, banquets, and the occasional 6 a.m. call time."
      />

      <section className="section">
        <div className="container">
          {photos.length > 0 ? (
            <div className="gallery">
              {photos.map((p) => (
                <figure key={p.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} loading="lazy" />
                  {p.caption || p.credit ? (
                    <figcaption>
                      {p.caption}
                      {p.credit ? (
                        <span className="credit"> {p.credit}</span>
                      ) : null}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          ) : (
            <div className="note">
              <h4>No photos yet</h4>
              <p className="small">
                Add image files to <code>public/images/gallery/</code>, then list
                them in <code>content/photos.ts</code> with a caption, a credit,
                and alt text. Resize to roughly 1600&nbsp;px wide before
                committing so the page stays fast — and get permission before
                posting identifiable photos of people.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
