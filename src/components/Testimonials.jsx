import { testimonials } from "../config/siteData";

export default function Testimonials() {
  const [featured, ...rest] = testimonials;
  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <h2 className="h2 reveal">What clients say</h2>
        {featured && (
          <figure className="quote-lg reveal">
            <span className="mark" aria-hidden="true">&ldquo;</span>
            <blockquote>{featured.quote}</blockquote>
            <figcaption className="who">
              <strong>{featured.name}</strong>
              <span>{featured.role}</span>
            </figcaption>
          </figure>
        )}
        <div className="quote-row">
          {rest.map((t, i) => (
            <figure className="quote-sm reveal" style={{ "--d": `${(i * 0.1).toFixed(2)}s` }} key={t.name}>
              <blockquote>{t.quote}</blockquote>
              <figcaption className="who">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
