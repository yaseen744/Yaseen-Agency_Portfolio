// Small shared library of inline SVG icons used across Skills, Services and Projects.
// Every icon uses the shared gold gradient (see SvgDefs) for a consistent line-art look.

export const skillIcons = {
  frontend: (
    <svg viewBox="0 0 34 34" aria-hidden="true">
      <rect x="4" y="6" width="26" height="20" rx="3" />
      <path d="M4 12h26" />
      <path d="M11 19l-3 2 3 2M21 19l3 2-3 2M17.5 18l-2 6" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 34 34" aria-hidden="true">
      <rect x="5" y="5" width="24" height="9" rx="2.5" />
      <rect x="5" y="20" width="24" height="9" rx="2.5" />
      <path d="M10 9.5h.01M10 24.5h.01M17 14v6" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 34 34" aria-hidden="true">
      <path d="M5 13h24v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
      <path d="M12 13V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
      <path d="M5 20h24" />
    </svg>
  ),
};

export const serviceIcons = {
  globe: (
    <svg viewBox="0 0 28 28" aria-hidden="true"><circle cx="14" cy="14" r="10" /><path d="M4 14h20M14 4c3 3 4.5 6.5 4.5 10S17 21 14 24c-3-3-4.5-6.5-4.5-10S11 7 14 4z" /></svg>
  ),
  cart: (
    <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M3 5h3l2.6 12.4a2 2 0 0 0 2 1.6h9a2 2 0 0 0 2-1.6L23 9H7" /><circle cx="11" cy="23" r="1.6" /><circle cx="19" cy="23" r="1.6" /></svg>
  ),
  academic: (
    <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M14 5L3 10l11 5 11-5z" /><path d="M8 13v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5" /></svg>
  ),
  estate: (
    <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M5 23V9l7-4.5L19 9v14" /><path d="M11 23v-8h6v8" /><path d="M4 23h20" /></svg>
  ),
  layout: (
    <svg viewBox="0 0 28 28" aria-hidden="true"><rect x="3.5" y="4.5" width="21" height="19" rx="2" /><path d="M3.5 10h21M9.5 10v13.5" /></svg>
  ),
  portfolio: (
    <svg viewBox="0 0 28 28" aria-hidden="true"><rect x="3.5" y="8" width="21" height="15" rx="2" /><path d="M9.5 8V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v2" /></svg>
  ),
  redesign: (
    <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M20 6a9 9 0 1 1-6.4-2.7" /><path d="M20 2v6h-6" /></svg>
  ),
  responsive: (
    <svg viewBox="0 0 28 28" aria-hidden="true"><rect x="2.5" y="6" width="16" height="12" rx="1.6" /><rect x="20" y="9" width="6" height="14" rx="1.4" /></svg>
  ),
  maintenance: (
    <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M17.5 6.8a4.6 4.6 0 0 1-5.6 5.6L4 20.3l3.7 3.7 7.9-7.9a4.6 4.6 0 0 1 5.6-5.6l-3 3-2.5-2.5z" /></svg>
  ),
};

export const projectIcons = {
  cart: (
    <svg className="art-icon" viewBox="0 0 120 120"><path d="M14 24h14l10 46h48l10-34H31" /><path d="M52 36l3 34M67 36v34M82 36l-3 34" /><circle cx="46" cy="86" r="6" /><circle cx="80" cy="86" r="6" /><path className="fill" d="M100 12l3.2 4.8l4.8 3.2l-4.8 3.2l-3.2 4.8l-3.2-4.8l-4.8-3.2l4.8-3.2z" /></svg>
  ),
  academic: (
    <svg className="art-icon" viewBox="0 0 120 120"><path d="M60 26L18 46l42 20 42-20z" /><path d="M34 56v18c0 6 12 12 26 12s26-6 26-12V56" /><path d="M102 46v24" /><circle cx="102" cy="74" r="3.5" /><path className="fill" d="M20 18l2.4 3.6l3.6 2.4l-3.6 2.4l-2.4 3.6l-2.4-3.6l-3.6-2.4l3.6-2.4z" /></svg>
  ),
  estate: (
    <svg className="art-icon" viewBox="0 0 120 120"><path d="M28 98V38l28-14v74" /><path d="M56 98V56h38v42" /><path d="M16 98h88" /><path d="M38 48h8M38 60h8M38 72h8M38 84h8M66 68h8M80 68h8M66 82h8M80 82h8" /><path className="fill" d="M96 24l2.4 3.6l3.6 2.4l-3.6 2.4l-2.4 3.6l-2.4-3.6l-3.6-2.4l3.6-2.4z" /></svg>
  ),
  salon: (
    <svg className="art-icon" viewBox="0 0 120 120"><circle cx="38" cy="88" r="11" /><circle cx="68" cy="88" r="11" /><path d="M45 79L92 24" /><path d="M61 79L28 30" /><path className="fill" d="M96 55l2.8 4.2l4.2 2.8l-4.2 2.8l-2.8 4.2l-2.8-4.2l-4.2-2.8l4.2-2.8z" /><path className="fill" d="M24 55.5l1.8 2.7l2.7 1.8l-2.7 1.8l-1.8 2.7l-1.8-2.7l-2.7-1.8l2.7-1.8z" /></svg>
  ),
  travel: (
    <svg className="art-icon" viewBox="0 0 120 120"><path d="M18 58L104 22 74 98 56 70z" /><path d="M104 22L56 70" /><path d="M56 70l-3 22 15-16" /><path d="M12 92c8 8 18-2 26 4" strokeDasharray="2 6" /></svg>
  ),
  restaurant: (
    <svg className="art-icon" viewBox="0 0 120 120"><path d="M22 84a38 34 0 0 1 76 0" /><path d="M12 84h96" /><path d="M18 96h84" /><circle cx="60" cy="44" r="4.5" /><path d="M40 70c4-9 12-15 22-17" /><path className="fill" d="M96 24l2.4 3.6l3.6 2.4l-3.6 2.4l-2.4 3.6l-2.4-3.6l-3.6-2.4l3.6-2.4z" /></svg>
  ),
  clinic: (
    <svg className="art-icon" viewBox="0 0 120 120"><path d="M50 14h20v22h22v20H70v22H50V56H28V36h22z" /><path d="M12 102h28l6-10 8 20 8-28 6 18h42" /></svg>
  ),
  clean: (
    <svg className="art-icon" viewBox="0 0 120 120"><rect x="38" y="60" width="38" height="42" rx="9" /><path d="M50 60V48h14v12" /><path d="M44 48V34h30l8 8v6z" /><path d="M76 52c7 0 9 5 9 11v9" /><path d="M38 36l-11-4M38 41l-13 0M38 46l-11 4" /><path className="fill" d="M57 75l2.8 4.2l4.2 2.8l-4.2 2.8l-2.8 4.2l-2.8-4.2l-4.2-2.8l4.2-2.8z" /><path className="fill" d="M98 22l2.4 3.6l3.6 2.4l-3.6 2.4l-2.4 3.6l-2.4-3.6l-3.6-2.4l3.6-2.4z" /></svg>
  ),
  gym: (
    <svg className="art-icon" viewBox="0 0 120 120"><g transform="rotate(-28 60 60)"><rect x="34" y="55" width="52" height="10" rx="2.5" /><rect x="24" y="36" width="11" height="48" rx="3.5" /><rect x="85" y="36" width="11" height="48" rx="3.5" /><rect x="12" y="46" width="9" height="28" rx="2.5" /><rect x="99" y="46" width="9" height="28" rx="2.5" /></g><path className="fill" d="M26 22l2.4 3.6l3.6 2.4l-3.6 2.4l-2.4 3.6l-2.4-3.6l-3.6-2.4l3.6-2.4z" /></svg>
  ),
};
