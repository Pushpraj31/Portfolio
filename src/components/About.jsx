import { about } from "../data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
      <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-10">
        <div>
          <p className="section-kicker">01 / About</p>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">The short version</h2>
        </div>
        <div className="space-y-4 text-base leading-7 text-ink-700 dark:text-ink-100 sm:space-y-5 sm:text-[17px] sm:leading-8">
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
