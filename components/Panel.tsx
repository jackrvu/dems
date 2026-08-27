import { ReactNode } from "react";

/* The layout primitive: a bordered label strip with a border-t-0 body
   box beneath it. Everything on the site is built out of these. */

export default function Panel({
  title,
  aside,
  children,
  bodyClassName = "",
}: {
  title: string;
  aside?: ReactNode;   // small right-aligned text in the label strip
  children: ReactNode;
  bodyClassName?: string;
}) {
  return (
    <>
      <div className="panel-head flex items-baseline justify-between gap-2">
        <h2 className="font-semibold lowercase">{title}</h2>
        {aside ? <span className="text-3xs text-gray-600">{aside}</span> : null}
      </div>
      <div className={`panel-body ${bodyClassName}`}>{children}</div>
    </>
  );
}
