import { services, whyHireMe } from "../config/siteData";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="services-head">
          <h2 className="h2 reveal">What I can build for you</h2>
        </div>
        <div className="svc-list">
          {services.map((s) => (
            <div className="svc reveal" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
        <div className="promise reveal">
          <h3>Every project comes with</h3>
          <ul>
            {whyHireMe.map((w) => (
              <li key={w.text}>
                <span className="dot core" aria-hidden="true"></span>
                {w.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
