import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="bg-ink-900 px-4 py-6 text-center text-xs leading-5 text-ink-400 dark:bg-black sm:px-5" style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}>
      © {new Date().getFullYear()} {profile.name}. Built for the web, deployed on Netlify.
    </footer>
  );
}
