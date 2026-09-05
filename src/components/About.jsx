import { about } from "../data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-10 md:grid-cols-[220px_1fr]">
        <div>
          <p className="section-kicker">01 / About</p>
          <h2 className="mt-3 font-display text-3xl font-bold">The short version</h2>
        </div>
        <div className="space-y-5 text-[17px] leading-8 text-ink-700 dark:text-ink-100">
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
