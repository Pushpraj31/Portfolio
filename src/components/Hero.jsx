import { profile } from "../data";
import { IconDownload, IconGithub, IconLinkedin, IconMail } from "../icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 text-ink-800/[0.045] dark:text-white/[0.035]">
        <div className="grid-bg h-full w-full" />
      </div>
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
        <div>
          <p className="section-kicker">Kolkata · {profile.company}</p>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-ink-500 dark:text-ink-400">{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-700 dark:text-ink-100">
            {profile.role} building secure, fast, production-ready web products — auth, payments, dashboards, and cloud.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href={profile.resume} className="btn btn-ghost" download>
              <IconDownload />
              Download resume
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-ink-500 dark:text-ink-400">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent">
              <IconGithub className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent">
              <IconLinkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent">
              <IconMail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] border border-accent/40" />
          <div className="overflow-hidden rounded-[1.6rem] bg-white shadow-glow dark:bg-ink-800">
            <img
              src={profile.photo}
              alt={`${profile.name}, ${profile.role}`}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 left-6 rounded-full border border-ink-800/10 bg-white/90 px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur dark:border-white/10 dark:bg-ink-800/90">
            Full Stack · MERN · AWS
          </div>
        </div>
      </div>
    </section>
  );
}
