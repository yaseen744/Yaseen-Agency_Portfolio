import { useState } from "react";
import { personalInfo, agencyInfo } from "../config/siteData";

export default function Contact() {
  const [values, setValues] = useState({ name: "", contact: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { ok: bool, url?: string }

  const onChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: false }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const name = values.name.trim();
    const contact = values.contact.trim();
    const message = values.message.trim();
    const bad = {};
    if (!name) bad.name = true;
    if (!contact) bad.contact = true;
    if (!message) bad.message = true;
    setErrors(bad);
    if (Object.keys(bad).length) {
      setStatus(null);
      document.getElementById(`f-${Object.keys(bad)[0]}`)?.focus();
      return;
    }

    const text =
      "Hello Yaseen, I found your portfolio and would like to talk about a project.\n\n" +
      `*Name:* ${name}\n` +
      `*Email/Phone:* ${contact}\n` +
      `*Message:* ${message}`;
    const url = `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(text)}`;
    const w = window.open(url, "_blank");
    if (w) {
      try { w.opener = null; } catch (err) { /* noop */ }
    }
    setStatus({ ok: !!w, url });
  };

  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <h2 className="h2 reveal">Tell me about your project</h2>
          <p className="lead reveal" style={{ "--d": ".08s" }}>
            Send a few lines about what you need. Your message opens in WhatsApp, ready to send. You can also write to me by email.
          </p>
          <dl className="cdl reveal" style={{ "--d": ".14s" }}>
            <div>
              <dt>Email</dt>
              <dd><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd><a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">+92 311 3404105</a></dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{personalInfo.location}</dd>
            </div>
            <div>
              <dt>Elsewhere</dt>
              <dd className="socials">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
              </dd>
            </div>
            <div>
              <dt>{agencyInfo.name.replace(" Digital Agency", "")} Agency</dt>
              <dd className="socials">
                <a href={agencyInfo.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href={agencyInfo.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </dd>
            </div>
          </dl>
        </div>

        <form className="form reveal" id="contactForm" noValidate style={{ "--d": ".1s" }} onSubmit={onSubmit}>
          <div className={"field" + (errors.name ? " err" : "")}>
            <label htmlFor="f-name">Name</label>
            <input id="f-name" name="name" type="text" autoComplete="name" placeholder="Your full name" value={values.name} onChange={onChange("name")} required />
            <p className="msg">Please enter your name.</p>
          </div>
          <div className={"field" + (errors.contact ? " err" : "")}>
            <label htmlFor="f-contact">Email or phone</label>
            <input id="f-contact" name="contact" type="text" autoComplete="email" inputMode="email" placeholder="Where can I reach you?" value={values.contact} onChange={onChange("contact")} required />
            <p className="msg">Please enter an email address or phone number.</p>
          </div>
          <div className={"field" + (errors.message ? " err" : "")}>
            <label htmlFor="f-message">Message</label>
            <textarea id="f-message" name="message" placeholder="What are you looking to build?" value={values.message} onChange={onChange("message")} required />
            <p className="msg">Please write a short message.</p>
          </div>
          <button className="btn btn-primary" type="submit">Send on WhatsApp</button>
          <p className="form-note">This opens WhatsApp in a new tab with your details already filled in. Press Send there to deliver the message.</p>
          <p className="form-status" id="formStatus" role="status" aria-live="polite">
            {status && (status.ok
              ? "WhatsApp opened in a new tab. Press Send there to deliver your message."
              : <>Your browser blocked the new tab. <a href={status.url} target="_blank" rel="noopener noreferrer">Open WhatsApp</a> to send your message.</>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
