import { skillGroups } from "../config/siteData";
import { skillIcons } from "./icons.jsx";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <h2 className="h2 reveal">The stack I build with</h2>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skill-col reveal" style={{ "--d": `${(i * 0.08).toFixed(2)}s` }} key={group.key}>
              <div className="skill-head">
                {skillIcons[group.icon]}
                <h3>{group.title}</h3>
              </div>
              <ul className="skill-list">
                {group.skills.map((s) => (
                  <li key={s.name}>
                    <span className={"dot" + (s.core ? " core" : "")} aria-hidden="true"></span>
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="skills-key reveal">
          <span className="dot core" aria-hidden="true"></span>Filled marks the core full-stack toolkit
        </p>
      </div>
    </section>
  );
}
