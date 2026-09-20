import { useEffect, useRef } from "react";
import { projects } from "../config/siteData";
import { projectIcons } from "./icons.jsx";

function ProjectArt({ project }) {
  const artRef = useRef(null);

  useEffect(() => {
    const art = artRef.current;
    if (!art) return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduce) return;

    const icon = art.querySelector(".art-icon");
    const onMove = (e) => {
      const r = art.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      art.style.setProperty("--ry", ((px - 0.5) * 7).toFixed(2) + "deg");
      art.style.setProperty("--rx", ((0.5 - py) * 6).toFixed(2) + "deg");
      art.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
      art.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
      if (icon) {
        icon.style.setProperty("--px", (px - 0.5).toFixed(3));
        icon.style.setProperty("--py", (py - 0.5).toFixed(3));
      }
    };
    const onLeave = () => {
      ["--rx", "--ry", "--gx", "--gy"].forEach((p) => art.style.removeProperty(p));
      if (icon) {
        icon.style.setProperty("--px", 0);
        icon.style.setProperty("--py", 0);
      }
    };
    art.addEventListener("pointermove", onMove);
    art.addEventListener("pointerleave", onLeave);
    return () => {
      art.removeEventListener("pointermove", onMove);
      art.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <a
      className="art"
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      aria-hidden="true"
      style={{ "--gx": `${project.gx}%`, "--gy": `${project.gy}%` }}
      ref={artRef}
    >
      {projectIcons[project.icon]}
      <span className="art-kind">{project.kind}</span>
    </a>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="projects-head">
          <h2 className="h2 reveal">Nine projects, live and open source</h2>
          <p className="lead reveal" style={{ "--d": ".08s" }}>
            Each one has a working demo and its full source on GitHub.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((p, i) => (
            <article className="project reveal" style={{ "--d": `${(i % 2 === 1 ? 0.1 : 0).toFixed(2)}s` }} key={p.id}>
              <ProjectArt project={p} />
              <div className="project-body">
                <h3>{p.title}</h3>
                {p.subtitle && <p className="project-sub">{p.subtitle}</p>}
                <p className="project-desc">{p.description}</p>
                <ul className="tags" aria-label="Technologies">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="plinks">
                  <a className="plink live" href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${p.title}`}>
                    Live demo
                  </a>
                  <a className="plink" href={p.code} target="_blank" rel="noopener noreferrer" aria-label={`Source code of ${p.title} on GitHub`}>
                    Source code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
