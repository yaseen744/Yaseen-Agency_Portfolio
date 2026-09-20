import { useEffect } from "react";

// Replicates the site's restrained "fade up once" entrance: every element
// carrying the .reveal class gets the .in class the moment it scrolls into
// view, then is left alone. Runs once for the whole app after every route
// paints, mirroring the original static-site behaviour.
export default function useRevealOnScroll(deps = []) {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!els.length) return;

    if (!("IntersectionObserver" in window) || reduce) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
