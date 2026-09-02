import { ReactNode } from "react";

/* A card with a mono label strip. The site's one repeating unit. */

export default function Panel({
  title,
  aside,
  children,
  bodyClassName = "",
}: {
  title: string;
  aside?: ReactNode;   // small right-aligned note in the label strip
  children: ReactNode;
  bodyClassName?: string;
}) {
  return (
    <section className="card">
      <div className="card-head">
        <h2 className="font-mono font-semibold text-sm tracking-very-tight">
          {title}
        </h2>
        {aside ? <span className="eyebrow shrink-0">{aside}</span> : null}
      </div>
      <div className={`card-body ${bodyClassName}`}>{children}</div>
    </section>
  );
}
