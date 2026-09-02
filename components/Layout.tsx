import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

/* Page shell. `hero` replaces the standard title band (the home page
   uses it); otherwise `title` and `intro` render a conventional page
   header. Passing `sidebar` splits the body into two columns. */

export default function Layout({
  children,
  sidebar,
  title,
  intro,
  hero,
}: {
  children: ReactNode;
  sidebar?: ReactNode;
  title?: string;
  intro?: ReactNode;
  hero?: ReactNode;
}) {
  return (
    <>
      <Header />

      {hero ??
        (title ? (
          <div className="border-b border-line bg-surface dotted">
            <div className="container-site py-10">
              <h1 className="font-mono font-semibold text-2xl sm:text-3xl tracking-very-tight">
                {title}
              </h1>
              {intro ? (
                <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink/75">
                  {intro}
                </p>
              ) : null}
            </div>
          </div>
        ) : null)}

      <div className="container-site flex-grow py-10 text-[15px] leading-relaxed">
        {sidebar ? (
          <div className="flex flex-col lg:flex-row gap-x-10">
            <main className="w-full lg:w-2/3 order-2 lg:order-1">
              {children}
            </main>
            <aside className="w-full lg:w-1/3 order-1 lg:order-2">
              {sidebar}
            </aside>
          </div>
        ) : (
          <main className="w-full">{children}</main>
        )}
      </div>

      <Footer />
    </>
  );
}
