import { useEffect, useRef } from "react";
import Hero3D from "./Hero3D";
import { personalInfo, agencyInfo, heroStack } from "../config/siteData";

function HeroGlow() {
  const glowRef = useRef(null);
  useEffect(() => {
    const glow = glowRef.current;
    const hero = glow?.closest(".hero");
    if (!glow || !hero) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce || !canHover) return;

    let gx = 0.5, gy = 0.35, tx = gx, ty = gy, raf;
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width;
      ty = (e.clientY - r.top) / r.height;
    };
    hero.addEventListener("mousemove", onMove);
    const loop = () => {
      gx += (tx - gx) * 0.08;
      gy += (ty - gy) * 0.08;
      glow.style.setProperty("--gx", gx * 100 + "%");
      glow.style.setProperty("--gy", gy * 100 + "%");
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div className="hero-glow" ref={glowRef}></div>;
}

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <HeroGlow />
      <Hero3D />
      <div className="hero-inner">
        <div className="hero-copy">
          {personalInfo.available && (
            <div className="status-pill">
              <span className="status-dot" aria-hidden="true"></span>
              Available for new projects
            </div>
          )}

          <a className="agency-badge" href={agencyInfo.facebook} target="_blank" rel="noopener noreferrer">
            <svg className="agency-badge-mark" viewBox="0 0 84 90" aria-hidden="true">
              <path d="M0 0h22v90H0z" fill="#1B2338" />
              <path d="M0 0h22l62 90H62z" fill="url(#g-gold-brand)" />
              <path d="M62 0h22v90H62z" fill="#1B2338" />
            </svg>
            <span className="agency-badge-text">
              Also the founder of <strong>{agencyInfo.name}</strong>
              <em>{agencyInfo.tagline}</em>
            </span>
          </a>

          <h1 className="hero-name" aria-label={personalInfo.name}>
            {personalInfo.name.split(" ").map((word) => (
              <span className="line" key={word}>
                <span>{word}</span>
              </span>
            ))}
          </h1>
          <p className="hero-role">{personalInfo.role}</p>
          <p className="hero-tagline">{personalInfo.tagline}</p>

          <ul className="hero-stack" aria-label="Core stack">
            {heroStack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">Hire me</a>
            <a className="btn btn-ghost" href="#projects">View projects</a>
          </div>

          <p className="hero-place">Based in {personalInfo.location}</p>
        </div>

        <a className="scroll-cue" href="#about" aria-label="Scroll to learn more">
          <span className="scroll-cue-line" aria-hidden="true"></span>
          <span>Scroll</span>
        </a>
      </div>
    </section>
  );
}
