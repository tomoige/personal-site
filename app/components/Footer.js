import { profile } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-12 text-center text-sm text-muted">
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <p className="mt-6 text-xs text-muted/60">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
