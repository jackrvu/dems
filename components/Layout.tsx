import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

/* Two-column when `sidebar` is passed, single-column when it isn't. */

export default function Layout({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar?: ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-full px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <Header />

      {sidebar ? (
        <div className="flex flex-col md:flex-row flex-grow text-3xs lg:text-2xs gap-4">
          <aside className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
            {sidebar}
          </aside>
          <main className="w-full md:w-2/3">{children}</main>
        </div>
      ) : (
        <main className="w-full flex-grow text-3xs lg:text-2xs">{children}</main>
      )}

      <Footer />
    </div>
  );
}
