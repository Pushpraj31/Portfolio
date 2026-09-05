import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { profile } from "../data";
import { IconClose, IconMenu, IconMoon, IconSun } from "../icons";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

function sectionFromScroll() {
  const marker = 110;
  const atBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

  if (atBottom) return "#contact";

  const about = document.getElementById("about");
  if (about && about.getBoundingClientRect().top > marker) return "";

  let current = "";
  for (const [, href] of links) {
    const el = document.getElementById(href.slice(1));
    if (!el) continue;
    if (el.getBoundingClientRect().top <= marker) current = href;
  }
  return current;
}

export default function Navbar({ dark, onToggle }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const lockRef = useRef(false);
  const lockTimer = useRef(0);
  const activeRef = useRef(active);
  activeRef.current = active;

  const moveIndicator = (href) => {
    const nav = navRef.current;
    const el = linkRefs.current[href];
    if (!nav) return;

    if (!href || !el) {
      nav.style.setProperty("--nav-x", "0px");
      nav.style.setProperty("--nav-w", "0px");
      nav.style.setProperty("--nav-o", "0");
      return;
    }

    nav.style.setProperty("--nav-x", `${el.offsetLeft}px`);
    nav.style.setProperty("--nav-w", `${el.offsetWidth}px`);
    nav.style.setProperty("--nav-o", "1");
  };

  useLayoutEffect(() => {
    moveIndicator(active);
  }, [active]);

  useEffect(() => {
    const onScroll = () => {
      if (lockRef.current) return;
      const next = sectionFromScroll();
      setActive((prev) => (prev === next ? prev : next));
    };

    const onResize = () => moveIndicator(activeRef.current);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(lockTimer.current);
    };
  }, []);

  const goTo = (href) => {
    setActive(href);
    setOpen(false);
    lockRef.current = true;
    window.clearTimeout(lockTimer.current);

    const unlock = () => {
      lockRef.current = false;
      window.removeEventListener("scrollend", unlock);
    };

    window.addEventListener("scrollend", unlock, { once: true });
    lockTimer.current = window.setTimeout(unlock, 1000);
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <a href="#top" className="logo-mark shrink-0" onClick={() => goTo("")}>
          PR<span className="text-accent">.</span>
        </a>

        <nav className="nav-pill hidden lg:flex" ref={navRef} aria-label="Primary">
          <span className="nav-indicator" aria-hidden="true" />
          {links.map(([label, href], index) => (
            <a
              key={href}
              href={href}
              ref={(node) => {
                linkRefs.current[href] = node;
              }}
              onClick={() => goTo(href)}
              className={`nav-link ${active === href ? "is-active" : ""}`}
            >
              <span className="nav-index hidden xl:inline">{String(index + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onToggle}
            className="header-icon-btn"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <IconSun /> : <IconMoon />}
          </button>
          <a href={profile.resume} className="header-resume" download>
            Resume
          </a>
          <button
            type="button"
            className="header-icon-btn lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-ink-800/10 px-4 py-3 lg:hidden dark:border-white/10" aria-label="Mobile">
          <div className="flex flex-col gap-1.5">
            {links.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                onClick={() => goTo(href)}
                className={`mobile-nav-link ${active === href ? "is-active" : ""}`}
              >
                {label}
                <span className="nav-index">{String(index + 1).padStart(2, "0")}</span>
              </a>
            ))}
            <a href={profile.resume} className="btn btn-primary mt-2 sm:hidden" download>
              Download resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
