import { certifications, education } from "../data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="section-kicker">05 / Education</p>
          <h2 className="mt-3 font-display text-3xl font-bold">School</h2>
          <div className="mt-8 space-y-5">
            {education.map((ed) => (
              <article key={ed.school} className="rounded-2xl border border-ink-800/10 p-5 dark:border-white/10">
                <h3 className="font-semibold">{ed.degree}</h3>
                <p className="mt-1 text-sm text-accent">{ed.school}</p>
                <p className="mt-1 font-mono text-xs text-ink-500">
                  {ed.period}
                  {ed.meta ? ` · ${ed.meta}` : ""}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <p className="section-kicker">06 / Certifications</p>
          <h2 className="mt-3 font-display text-3xl font-bold">Proof of work</h2>
          <ul className="mt-8 space-y-4">
            {certifications.map((c) => (
              <li
                key={c}
                className="rounded-2xl border border-ink-800/10 p-5 text-[15px] leading-7 dark:border-white/10"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
