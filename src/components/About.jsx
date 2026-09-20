import { personalInfo, stats } from "../config/siteData";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <h2 className="h2 reveal">I care about the small details</h2>
        <div className="about-grid">
          <div className="photo reveal">
            <div className="photo-img">
              <img
                src={personalInfo.photo}
                alt={`Portrait of ${personalInfo.name} at his desk with a laptop`}
                width="720"
                height="960"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="about-text reveal" style={{ "--d": ".1s" }}>
            {personalInfo.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about-actions">
              <a className="btn btn-ghost" href={personalInfo.resumeUrl} download>
                Download CV
              </a>
            </div>
            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b>{s.value}{s.suffix}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
