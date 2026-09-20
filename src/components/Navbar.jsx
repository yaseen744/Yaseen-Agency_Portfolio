import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "../config/siteData";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const secs = Array.from(document.querySelectorAll("main > section[id]"));
    if (!("IntersectionObserver" in window) || !secs.length) return;
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    secs.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header className={"nav" + (solid ? " solid" : "")} id="nav">
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label={`${personalInfo.name}, back to top`}>
            <svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="url(#g-gold-brand)" strokeLinejoin="round">
              <path d="M16 3l11.5 8.3v10.4L16 30 4.5 21.7v-10.4z" strokeWidth="1.6" />
              <path d="M16 3v27M4.5 11.3l23 10.4M27.5 11.3l-23 10.4" strokeWidth="1" opacity=".55" />
            </svg>
            <span>{personalInfo.firstName}</span>
          </a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <a href={`#${l.to}`} aria-current={active === l.to ? "true" : undefined}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="menu-btn"
            id="menuBtn"
            aria-expanded={open}
            aria-controls="sheet"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      <div
        className={"sheet" + (open ? " open" : "")}
        id="sheet"
        aria-hidden={!open}
        onClick={(e) => {
          if (e.target.closest("a")) setOpen(false);
        }}
      >
        {navLinks.map((l) => (
          <a key={l.to} href={`#${l.to}`}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
