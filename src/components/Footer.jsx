import { personalInfo } from "../config/siteData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <a className="brand" href="#top" aria-label="Back to top">
          <svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="url(#g-gold-brand)" strokeLinejoin="round">
            <path d="M16 3l11.5 8.3v10.4L16 30 4.5 21.7v-10.4z" strokeWidth="1.6" />
            <path d="M16 3v27M4.5 11.3l23 10.4M27.5 11.3l-23 10.4" strokeWidth="1" opacity=".55" />
          </svg>
          <span>{personalInfo.name}</span>
        </a>
        <div className="footer-links">
          <a href={`mailto:${personalInfo.email}`}>Email</a>
          <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
        <p className="copy">&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
