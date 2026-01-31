import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import blogposts from "@/lib/blogposts";
import "../styles.css";

export default function BlogPost({ params }) {
  const post = blogposts.find((p) => p.id == params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-readable mx-auto px-5 py-12">
          <p className="text-muted">Post not found.</p>
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-fg mt-4 inline-block"
          >
            ← Back to blog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-readable mx-auto px-5 py-12 sm:py-16 w-full">
        <article>
          <header className="mb-8">
            <h1 className="text-xl font-semibold text-fg mb-2">{post.title}</h1>
            <p className="text-sm text-muted">
              {post.date} · {post.readTime} min read
            </p>
          </header>
          <div className="text-fg">{post.content}</div>
        </article>
        <div className="mt-10">
          <Link href="/blog" className="text-sm text-muted hover:text-fg">
            ← Back to blog
          </Link>
        </div>
      </main>
      <footer className="border-t border-border py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Thomas Cormican
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  return blogposts.map((post) => ({ id: post.id }));
}
