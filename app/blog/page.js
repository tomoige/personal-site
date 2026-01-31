import Link from "next/link";
import Navbar from "../components/Navbar";
import blogposts from "@/lib/blogposts";

blogposts.sort((a, b) => new Date(b.date) - new Date(a.date));

const BlogPost = ({ title, date, readTime, id }) => (
  <div className="py-6 border-b border-border last:border-b-0">
    <h2 className="text-base font-medium text-fg mb-1">
      <Link href={`/blog/${id}`} className="hover:text-muted">
        {title}
      </Link>
    </h2>
    <p className="text-sm text-muted">
      {date} · {readTime} min read
    </p>
  </div>
);

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-readable mx-auto px-5 py-12 sm:py-16 w-full">
        <h1 className="text-xl font-semibold text-fg mb-8">Blog</h1>
        <section>
          {blogposts.map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              date={post.date}
              readTime={post.readTime}
              id={post.id}
            />
          ))}
        </section>
      </main>
      <footer className="border-t border-border py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Thomas Cormican
      </footer>
    </div>
  );
}
