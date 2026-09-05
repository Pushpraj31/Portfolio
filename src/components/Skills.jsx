import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-ink-800/10 bg-white/40 py-14 dark:border-white/10 dark:bg-white/[0.02] sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <p className="section-kicker">02 / Skills</p>
        <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">What I work with</h2>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {skills.map((group) => (
            <article
              key={group.label}
              className="rounded-2xl border border-ink-800/10 bg-ink-50 p-4 dark:border-white/10 dark:bg-ink-900 sm:p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">{group.label}</h3>
              <div className="mt-4 grid grid-cols-3 gap-x-2 gap-y-5 sm:mt-5 sm:gap-x-3 sm:gap-y-6">
                {group.items.map((item) => (
                  <figure key={item.name} className="flex flex-col items-center gap-1.5 text-center sm:gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-800/10 bg-white p-2 dark:border-white/10 dark:bg-white/10 sm:h-16 sm:w-16 sm:rounded-2xl sm:p-2.5">
                      <img
                        src={item.icon}
                        alt=""
                        className={`h-8 w-8 object-contain sm:h-10 sm:w-10 ${item.invert ? "dark:invert" : ""}`}
                      />
                    </div>
                    <figcaption className="max-w-[4.6rem] text-[10px] font-semibold leading-tight text-ink-700 dark:text-ink-100 sm:text-[11px]">
                      {item.name}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
