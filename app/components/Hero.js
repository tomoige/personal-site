import { profile } from "@/lib/site-data";
import LinkList from "./LinkList";

export default function Hero() {
  return (
    <header className="text-center">
      <h1 className="font-display text-3xl font-bold tracking-tight text-ink">
        {profile.name}
      </h1>
      <p className="mt-3 text-sm text-muted">{profile.bio}</p>
      <LinkList />
    </header>
  );
}
