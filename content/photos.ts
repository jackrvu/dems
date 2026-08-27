/* ------------------------------------------------------------------
   Photo gallery.

   1. Drop image files into public/images/gallery/
   2. Add an entry below with the path, a caption, and a credit.

   Keep files under ~500 KB where you can — resize before committing.
   Get permission before posting identifiable photos of people.
   ------------------------------------------------------------------ */

export type Photo = {
  src: string;       // "/images/gallery/canvass-oct.jpg"
  alt: string;       // describe the image for screen readers
  caption?: string;
  credit?: string;
  year?: string;
};

/* ---- EMPTY BY DEFAULT. The page shows setup instructions until you
   add entries here. Example of the shape:

   { src: "/images/gallery/canvass-oct.jpg",
     alt: "Four students with clipboards on a residential sidewalk",
     caption: "Canvassing in Third Ward, October 2025",
     credit: "Photo by [Name]",
     year: "2025" },
   ---- */

export const photos: Photo[] = [];
