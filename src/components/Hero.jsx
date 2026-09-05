import { profile } from "../data";
import { IconDownload, IconGithub, IconLinkedin, IconMail } from "../icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 text-ink-800/[0.045] dark:text-white/[0.035]">
        <div className="grid-bg h-full w-full" />
      </div>
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute right-0 top-40 h-48 w-48 rounded-full bg-accent/10 blur-3xl sm:h-64 sm:w-64" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:gap-12 sm:px-5 sm:py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
        <div className="order-2 md:order-1">
          <p className="section-kicker">Kolkata · {profile.company}</p>
          <h1 className="mt-3 font-display text-[2.35rem] font-extrabold leading-[0.95] tracking-tight sm:mt-4 sm:text-6xl lg:text-7xl">
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-ink-500 dark:text-ink-400">{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-700 dark:text-ink-100 sm:mt-5 sm:text-lg">
            {profile.role} building secure, fast, production-ready web products — auth, payments, dashboards, and cloud.
          </p>
          <div className="hero-actions mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href={profile.resume} className="btn btn-ghost" download>
              <IconDownload />
              Download resume
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-5 text-ink-500 dark:text-ink-400 sm:mt-8 sm:justify-start">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent">
              <IconGithub className="h-6 w-6" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent">
              <IconLinkedin className="h-6 w-6" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent">
              <IconMail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-[min(100%,18rem)] sm:w-full sm:max-w-sm md:order-2">
          <div className="absolute -inset-2 rounded-[1.6rem] border border-accent/40 sm:-inset-3 sm:rounded-[2rem]" />
          <div className="overflow-hidden rounded-[1.25rem] bg-white shadow-glow dark:bg-ink-800 sm:rounded-[1.6rem]">
            <img
              src={profile.photo}
              alt={`${profile.name}, ${profile.role}`}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 w-max max-w-[calc(100%-1rem)] -translate-x-1/2 rounded-full border border-ink-800/10 bg-white/90 px-3 py-1.5 text-[11px] font-semibold shadow-lg backdrop-blur dark:border-white/10 dark:bg-ink-800/90 sm:-bottom-4 sm:left-6 sm:translate-x-0 sm:px-4 sm:py-2 sm:text-xs">
            Full Stack · MERN · AWS
          </div>
        </div>
      </div>
    </section>
  );
}
