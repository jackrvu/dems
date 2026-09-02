import Link from "next/link";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";

export default function NotFound() {
  return (
    <Layout title="Page not found">
      <Panel title="404">
        <p>
          That page isn&rsquo;t here. The link may be old, or the page may have
          moved.
        </p>
        <p className="mt-2">
          <Link
            href="/"
            className="prose-link"
          >
            Home
          </Link>
          {" · "}
          <Link
            href="/events"
            className="prose-link"
          >
            Upcoming events
          </Link>
        </p>
      </Panel>
    </Layout>
  );
}
