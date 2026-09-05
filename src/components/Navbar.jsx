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

    const onResize = () => {
      moveIndicator(activeRef.current);
      if (window.innerWidth >= 1024) setOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.clearTimeout(lockTimer.current);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

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

  return (
    <header className="site-header">
      <div className="header-bar">
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
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div
        className={`mobile-scrim lg:hidden ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="mobile-menu"
        className={`mobile-drawer lg:hidden ${open ? "is-open" : ""}`}
        aria-label="Mobile"
      >
        <p className="mobile-drawer-kicker">Menu</p>
        <div className="mobile-drawer-links">
          {links.map(([label, href], index) => (
            <a
              key={href}
              href={href}
              onClick={() => goTo(href)}
              className={`mobile-nav-link ${active === href ? "is-active" : ""}`}
            >
              <span className="mobile-nav-label">{label}</span>
              <span className="nav-index">{String(index + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </div>
        <div className="mobile-drawer-actions">
          <a href={profile.resume} className="btn btn-primary" download>
            Download resume
          </a>
          <a href="#contact" className="btn btn-ghost" onClick={() => goTo("#contact")}>
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
