import { experience } from "../data";
import { IconExternal } from "../icons";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
      <p className="section-kicker">03 / Experience</p>
      <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Work</h2>
      <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
        {experience.map((job) => (
          <article
            key={`${job.role}-${job.period}`}
            className="relative rounded-2xl border border-ink-800/10 p-4 pl-6 dark:border-white/10 sm:p-6 sm:pl-8"
          >
            <span className="absolute left-0 top-5 h-[calc(100%-2.5rem)] w-[3px] rounded-full bg-accent sm:top-6 sm:h-[calc(100%-3rem)]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-2">
              <h3 className="font-display text-lg font-bold leading-snug sm:text-xl">
                {job.role} · <span className="text-accent">{job.company}</span>
              </h3>
              <p className="font-mono text-xs text-ink-500">{job.period}</p>
            </div>
            <p className="mt-1 text-sm text-ink-500">{job.type}</p>
            {job.website && (
              <a
                href={job.website}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <IconExternal className="h-3.5 w-3.5" />
                wemakeover.co.in
              </a>
            )}
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-ink-700 marker:text-accent dark:text-ink-100 sm:text-[15px] sm:leading-7">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
