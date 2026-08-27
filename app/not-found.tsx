import Link from "next/link";
import Layout from "@/components/Layout";
import Panel from "@/components/Panel";

export default function NotFound() {
  return (
    <Layout>
      <Panel title="404">
        <p>that page isn&rsquo;t here. the link may be old, or it may have moved.</p>
        <p className="mt-2">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            home
          </Link>
          {" · "}
          <Link
            href="/events"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            upcoming events
          </Link>
        </p>
      </Panel>
    </Layout>
  );
}
