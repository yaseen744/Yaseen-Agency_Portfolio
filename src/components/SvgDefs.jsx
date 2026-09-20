// Shared gradient definitions reused by every inline SVG icon/logo across the site
export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="g-gold" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="120" y2="120">
          <stop offset="0" stopColor="#C9A44C" />
          <stop offset="1" stopColor="#E8C773" />
        </linearGradient>
        <linearGradient id="g-gold-brand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C9A44C" />
          <stop offset="1" stopColor="#E8C773" />
        </linearGradient>
      </defs>
    </svg>
  );
}
