import { projects } from "../data";
import { IconExternal, IconFigma, IconGithub } from "../icons";

function Links({ project }) {
  return (
    <div className="project-actions mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
          <IconGithub />
          GitHub
        </a>
      )}
      {project.figma && (
        <a href={project.figma} target="_blank" rel="noreferrer" className="btn btn-primary">
          <IconFigma />
          View in Figma
        </a>
      )}
      {project.live && (
        <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
          <IconExternal />
          Live website
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="border-y border-ink-800/10 bg-white/40 py-14 dark:border-white/10 dark:bg-white/[0.02] sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <p className="section-kicker">04 / Projects</p>
        <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Selected work</h2>

        <article className="mt-8 rounded-2xl border border-ink-800/10 bg-ink-50 p-5 dark:border-white/10 dark:bg-ink-900 sm:mt-10 sm:rounded-3xl sm:p-7 md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Featured · Built from scratch</p>
          <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{featured.name}</h3>
          <p className="mt-3 max-w-2xl text-ink-700 dark:text-ink-100">{featured.blurb}</p>
          <ul className="mt-5 space-y-2 text-sm leading-6 text-ink-700 dark:text-ink-100 sm:text-[15px] sm:leading-7">
            {featured.points.map((p) => (
              <li key={p}>— {p}</li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {featured.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
          <Links project={featured} />
        </article>

        <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 md:grid-cols-2">
          {rest.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-ink-800/10 bg-ink-50 p-5 dark:border-white/10 dark:bg-ink-900 sm:rounded-3xl sm:p-6"
            >
              <h3 className="font-display text-xl font-bold sm:text-2xl">{project.name}</h3>
              {project.tag && (
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{project.tag}</p>
              )}
              <p className="mt-2 text-sm leading-7 text-ink-700 dark:text-ink-100">{project.blurb}</p>
              <ul className="mt-4 space-y-1.5 text-sm leading-6 text-ink-700 dark:text-ink-100">
                {project.points.map((p) => (
                  <li key={p}>— {p}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
              <Links project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
