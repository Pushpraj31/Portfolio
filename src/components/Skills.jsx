import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-ink-800/10 bg-white/40 py-20 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-5">
        <p className="section-kicker">02 / Skills</p>
        <h2 className="mt-3 font-display text-3xl font-bold">What I work with</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <article
              key={group.label}
              className="rounded-2xl border border-ink-800/10 bg-ink-50 p-5 dark:border-white/10 dark:bg-ink-900"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">{group.label}</h3>
              <div className="mt-5 grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-3">
                {group.items.map((item) => (
                  <figure key={item.name} className="flex flex-col items-center gap-2 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-ink-800/10 bg-white p-2.5 dark:border-white/10 dark:bg-white/10">
                      <img
                        src={item.icon}
                        alt=""
                        className={`h-10 w-10 object-contain ${item.invert ? "dark:invert" : ""}`}
                      />
                    </div>
                    <figcaption className="max-w-[4.8rem] text-[11px] font-semibold leading-tight text-ink-700 dark:text-ink-100">
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
