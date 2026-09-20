import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Faceted crystal hero visual: an icosahedron distorted into a cut-gem shape,
// finished in a navy -> bronze -> champagne gradient, that assembles itself
// from scattered shards on load and then idles with a slow parallax spin.
export default function Hero3D() {
  const hostRef = useRef(null);
  const [needsFallback, setNeedsFallback] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch (err) {
      setNeedsFallback(true);
      host.classList.add("ready");
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    const group = new THREE.Group();
    scene.add(group);

    const R = 1.8;
    const geo = new THREE.IcosahedronGeometry(R, 1);
    const pos = geo.attributes.position;
    const count = pos.count;
    const faces = count / 3;
    const v = new THREE.Vector3();
    for (let i = 0; i < count; i++) {
      v.fromBufferAttribute(pos, i);
      const n = v.clone().normalize();
      const k = 1 + 0.085 * Math.sin(3.1 * n.x + 1.7) * Math.cos(2.3 * n.y + 0.4) * Math.sin(2.7 * n.z + 2.1);
      v.multiplyScalar(k);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    const base = pos.array.slice();

    const cNavy = new THREE.Color("#18255a");
    const cBronze = new THREE.Color("#6e5a2c");
    const cGold = new THREE.Color("#D6B461");
    const tmp = new THREE.Color();
    const colors = new Float32Array(count * 3);
    const face = [];
    let seed = 7;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    for (let f = 0; f < faces; f++) {
      let cx = 0, cy = 0, cz = 0;
      for (let j = 0; j < 3; j++) {
        cx += base[(f * 3 + j) * 3];
        cy += base[(f * 3 + j) * 3 + 1];
        cz += base[(f * 3 + j) * 3 + 2];
      }
      cx /= 3; cy /= 3; cz /= 3;
      let t = ((cx * 0.5 + cy * 0.85 - cz * 0.15) / (R * 1.15)) * 0.5 + 0.5 + (rnd() - 0.5) * 0.22;
      t = Math.max(0, Math.min(1, t));
      if (t < 0.5) tmp.copy(cNavy).lerp(cBronze, t * 2);
      else tmp.copy(cBronze).lerp(cGold, (t - 0.5) * 2);
      for (let j2 = 0; j2 < 3; j2++) {
        colors[(f * 3 + j2) * 3] = tmp.r;
        colors[(f * 3 + j2) * 3 + 1] = tmp.g;
        colors[(f * 3 + j2) * 3 + 2] = tmp.b;
      }
      const len = Math.sqrt(cx * cx + cy * cy + cz * cz) || 1;
      const dist = 4 + rnd() * 3.5;
      face.push({
        c: [cx, cy, cz],
        d: [
          (cx / len) * dist + (rnd() - 0.5) * 2.4,
          (cy / len) * dist + (rnd() - 0.5) * 2.4,
          (cz / len) * dist + (rnd() - 0.5) * 2.4,
        ],
        delay: (1 - ((cy / R) * 0.5 + 0.5)) * 0.95 + rnd() * 0.2,
      });
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.MeshPhongMaterial({
      vertexColors: true,
      flatShading: true,
      shininess: 46,
      specular: new THREE.Color(0x8a7648),
      side: THREE.DoubleSide,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });
    const gem = new THREE.Mesh(geo, mat);
    gem.frustumCulled = false;
    group.add(gem);

    const edgeMat = new THREE.LineBasicMaterial({ color: 0xe8c773, transparent: true, opacity: 0 });
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 1), edgeMat);
    group.add(edges);

    const shellMat = new THREE.LineBasicMaterial({ color: 0xc9a44c, transparent: true, opacity: 0 });
    const shell = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.6, 0)), shellMat);
    group.add(shell);

    const ringMat = new THREE.MeshBasicMaterial({ color: 0xe8c773, transparent: true, opacity: 0 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(3.05, 0.006, 8, 220), ringMat);
    ring.rotation.set(1.18, 0.2, 0.35);
    scene.add(ring);

    const pN = 70;
    const pp = new Float32Array(pN * 3);
    for (let p = 0; p < pN; p++) {
      const u = rnd() * Math.PI * 2;
      const w = Math.acos(2 * rnd() - 1);
      const r = 3.3 + rnd() * 1.3;
      pp[p * 3] = r * Math.sin(w) * Math.cos(u);
      pp[p * 3 + 1] = r * Math.sin(w) * Math.sin(u);
      pp[p * 3 + 2] = r * Math.cos(w);
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(pp, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xe8c773,
      size: 0.045,
      transparent: true,
      opacity: 0,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const points = new THREE.Points(pg, pMat);
    scene.add(points);

    scene.add(new THREE.AmbientLight(0x4a5a94, 0.9));
    const key = new THREE.DirectionalLight(0xffe2b0, 0.7);
    key.position.set(4, 5, 6);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0x5b7be0, 0.55);
    fill.position.set(-6, -2, 3);
    scene.add(fill);
    const accent = new THREE.PointLight(0xffd98a, 0.5, 16);
    scene.add(accent);

    function size() {
      const wd = host.clientWidth || 1;
      const ht = host.clientHeight || 1;
      const a = wd / ht;
      renderer.setSize(wd, ht, false);
      camera.aspect = a;
      camera.position.set(0, 0, 13 / Math.min(1, a * 1.08));
      camera.updateProjectionMatrix();
    }
    size();
    const ro = "ResizeObserver" in window ? new ResizeObserver(size) : null;
    if (ro) ro.observe(host);
    else window.addEventListener("resize", size);

    let mx = 0, my = 0, tx = 0, ty = 0;
    const onPointerMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    if (!coarse) window.addEventListener("pointermove", onPointerMove, { passive: true });

    const ease = (x) => 1 - Math.pow(1 - x, 3);
    let INTRO = reduce ? 0 : 3.4;
    let t0 = performance.now();
    let last = t0;
    let spin = 0;
    let running = true;
    let visible = true;
    let done = false;
    let rafId = null;

    function assemble(t) {
      const arr = pos.array;
      for (let f = 0; f < faces; f++) {
        const fd = face[f];
        const pr = Math.max(0, Math.min(1, (t - 0.2 - fd.delay) / 1.5));
        const e = ease(pr);
        const s = 0.15 + 0.85 * e;
        const o = 1 - e;
        for (let j = 0; j < 3; j++) {
          const ix = (f * 3 + j) * 3;
          arr[ix] = fd.c[0] + (base[ix] - fd.c[0]) * s + fd.d[0] * o;
          arr[ix + 1] = fd.c[1] + (base[ix + 1] - fd.c[1]) * s + fd.d[1] * o;
          arr[ix + 2] = fd.c[2] + (base[ix + 2] - fd.c[2]) * s + fd.d[2] * o;
        }
      }
      pos.needsUpdate = true;
    }
    function restore() {
      pos.array.set(base);
      pos.needsUpdate = true;
    }

    function frame(now) {
      if (!running) return;
      rafId = requestAnimationFrame(frame);
      if (!visible) {
        last = now;
        return;
      }
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = (now - t0) / 1000;

      if (t < INTRO) {
        assemble(t);
        const speed = 0.16 + 4.6 * Math.exp(-t * 1.5);
        spin += speed * dt;
      } else {
        if (!done) {
          restore();
          done = true;
        }
        spin += (reduce ? 0 : 0.2) * dt;
      }
      const late = INTRO ? Math.max(0, Math.min(1, (t - (INTRO - 1.1)) / 1.4)) : 1;
      edgeMat.opacity = 0.5 * late;
      shellMat.opacity = 0.16 * late;
      ringMat.opacity = 0.5 * late;
      pMat.opacity = 0.7 * late;

      const sc = INTRO ? 0.88 + 0.12 * ease(Math.min(1, t / 2.6)) : 1;
      group.scale.setScalar(sc);
      tx += (mx - tx) * 0.045;
      ty += (my - ty) * 0.045;
      group.rotation.y = spin + tx * 0.5;
      group.rotation.x = Math.sin(t * 0.35) * 0.12 + 0.2 + ty * 0.35;
      shell.rotation.y = -spin * 0.6;
      shell.rotation.x = spin * 0.3;
      ring.rotation.z = 0.35 + spin * 0.25;
      points.rotation.y = spin * 0.18;
      accent.position.set(Math.cos(t * 0.55) * 5, Math.sin(t * 0.4) * 3, 4.2);
      renderer.render(scene, camera);
    }

    host.classList.add("ready");

    let visIO = null;
    if (reduce) {
      INTRO = 0;
      restore();
      done = true;
      edgeMat.opacity = 0.36;
      shellMat.opacity = 0.16;
      ringMat.opacity = 0.5;
      pMat.opacity = 0.7;
      group.rotation.set(0.3, 0.6, 0);
      renderer.render(scene, camera);
      running = false;
    } else {
      rafId = requestAnimationFrame((n) => {
        t0 = last = n;
        frame(n);
      });
      if ("IntersectionObserver" in window) {
        visIO = new IntersectionObserver((en) => { visible = en[0].isIntersecting; }, { threshold: 0 });
        visIO.observe(host);
      }
    }
    const onVis = () => { visible = !document.hidden; };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", size);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVis);
      if (visIO) visIO.disconnect();
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      if (host.contains(renderer.domElement)) host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="gem" id="gem" ref={hostRef} aria-hidden="true">
      {needsFallback && (
        <div className="gem-fallback" id="gemFallback">
          <svg viewBox="0 0 200 200" fill="none" strokeLinejoin="round">
            <defs>
              <linearGradient id="fb" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#22346b" />
                <stop offset=".55" stopColor="#8f7434" />
                <stop offset="1" stopColor="#E8C773" />
              </linearGradient>
            </defs>
            <polygon points="100,14 176,58 176,142 100,186 24,142 24,58" fill="url(#fb)" opacity=".28" stroke="#E8C773" strokeOpacity=".6" />
            <polygon points="100,14 176,58 100,100" fill="#E8C773" opacity=".55" />
            <polygon points="100,14 24,58 100,100" fill="#C9A44C" opacity=".4" />
            <polygon points="176,58 176,142 100,100" fill="#8f7434" opacity=".5" />
            <polygon points="24,58 24,142 100,100" fill="#22346b" opacity=".8" />
            <polygon points="24,142 100,186 100,100" fill="#1d2c5c" opacity=".9" />
            <polygon points="176,142 100,186 100,100" fill="#C9A44C" opacity=".35" />
          </svg>
        </div>
      )}
    </div>
  );
}
