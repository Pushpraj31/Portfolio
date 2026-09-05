import { experience } from "../data";
import { IconExternal } from "../icons";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20">
      <p className="section-kicker">03 / Experience</p>
      <h2 className="mt-3 font-display text-3xl font-bold">Work</h2>
      <div className="mt-10 space-y-8">
        {experience.map((job) => (
          <article
            key={`${job.role}-${job.period}`}
            className="relative rounded-2xl border border-ink-800/10 p-6 pl-8 dark:border-white/10"
          >
            <span className="absolute left-0 top-6 h-[calc(100%-3rem)] w-[3px] rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-bold">
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
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <IconExternal className="h-3.5 w-3.5" />
                wemakeover.co.in
              </a>
            )}
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-ink-700 marker:text-accent dark:text-ink-100">
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
