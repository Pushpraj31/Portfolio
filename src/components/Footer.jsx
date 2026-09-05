import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="bg-ink-900 py-6 text-center text-xs text-ink-400 dark:bg-black">
      © {new Date().getFullYear()} {profile.name}. Built for the web, deployed on Netlify.
    </footer>
  );
}
