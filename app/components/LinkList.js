import { links } from "@/lib/site-data";

export default function LinkList() {
  return (
    <nav className="mt-8 flex flex-col gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.download ? { download: true } : {})}
          {...(!link.download
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="block rounded-lg border border-rule bg-white px-4 py-3 text-center text-sm font-medium text-ink no-underline transition hover:border-ink/20 hover:bg-paper"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
