import { profile } from "../data";
import { IconGithub, IconLinkedin, IconMail, IconPhone } from "../icons";

const items = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: IconMail },
  { label: "Phone", value: profile.phoneDisplay, href: profile.phoneHref, icon: IconPhone },
  { label: "LinkedIn", value: "pushpraj-ranjan", href: profile.linkedin, icon: IconLinkedin },
  { label: "GitHub", value: "Pushpraj31", href: profile.github, icon: IconGithub },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink-800/10 bg-ink-900 py-20 text-ink-50 dark:bg-black">
      <div className="mx-auto max-w-6xl px-5">
        <p className="section-kicker">07 / Contact</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-bold leading-tight">
          Let’s build something that ships.
        </h2>
        <p className="mt-4 max-w-xl text-ink-400">
          Best reached by email or LinkedIn. I’m based in Kolkata and work remotely.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-accent/50 hover:bg-white/10"
            >
              <item.icon className="h-5 w-5 text-accent" />
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-widest text-ink-400">{item.label}</span>
                <span className="text-sm font-semibold">{item.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
