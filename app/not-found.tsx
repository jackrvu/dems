import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ padding: "6rem 0" }}>
      <div className="container narrow">
        <p className="eyebrow">404</p>
        <h1>That page isn&rsquo;t here</h1>
        <p className="lede">
          The link may be old, or the page may have moved.
        </p>
        <div className="btn-row">
          <Link className="btn" href="/">
            Back to the homepage
          </Link>
          <Link className="btn btn-outline" href="/events">
            See what&rsquo;s coming up
          </Link>
        </div>
      </div>
    </section>
  );
}
