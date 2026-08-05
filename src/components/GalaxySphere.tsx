import { useEffect, useRef } from "react";

type Point = { x: number; y: number; z: number };

function fibonacciSphere(n: number): Point[] {
  const pts: Point[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
  }
  return pts;
}

/** Rotating particle sphere. Rotation is driven by scroll position plus a slow idle drift. */
export function GalaxySphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const points = fibonacciSphere(900);
    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.2,
      t: Math.random() * Math.PI * 2,
    }));

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let scrollTarget = 0;
    let scrollSmooth = 0;
    const onScroll = () => {
      scrollTarget = window.scrollY / Math.max(window.innerHeight, 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    let frame = 0;

    const render = () => {
      frame += 1;
      scrollSmooth += (scrollTarget - scrollSmooth) * 0.07;

      const rotY = scrollSmooth * 2.4 + frame * 0.0016;
      const rotX = Math.sin(scrollSmooth * 0.8) * 0.6 + 0.25;

      ctx.clearRect(0, 0, width, height);

      // starfield
      for (const s of stars) {
        const twinkle = 0.35 + 0.65 * Math.abs(Math.sin(s.t + frame * 0.01));
        ctx.beginPath();
        ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(190, 215, 255, ${0.18 * twinkle})`;
        ctx.fill();
      }

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.33;
      const fade = Math.max(0, 1 - scrollSmooth * 0.55);

      // glow core
      const glow = ctx.createRadialGradient(cx, cy, radius * 0.1, cx, cy, radius * 1.7);
      glow.addColorStop(0, `rgba(80, 130, 255, ${0.3 * fade})`);
      glow.addColorStop(0.5, `rgba(120, 60, 255, ${0.12 * fade})`);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      for (const p of points) {
        let x = p.x * cosY - p.z * sinY;
        let z = p.x * sinY + p.z * cosY;
        const y = p.y * cosX - z * sinX;
        z = p.y * sinX + z * cosX;

        const depth = (z + 1) / 2;
        const persp = 0.75 + depth * 0.5;
        const px = cx + x * radius * persp;
        const py = cy + y * radius * persp;
        const size = (0.5 + depth * 1.7) * (0.7 + fade * 0.6);
        const alpha = (0.12 + depth * 0.75) * fade;

        const hueMix = depth;
        const r = Math.round(60 + hueMix * 60);
        const g = Math.round(150 + hueMix * 90);
        const b = 255;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();
      }

      // orbiting ring
      ctx.beginPath();
      for (let i = 0; i <= 120; i++) {
        const a = (i / 120) * Math.PI * 2;
        let x = Math.cos(a) * 1.32;
        let z = Math.sin(a) * 1.32;
        const rx = x * cosY - z * sinY;
        const rz = x * sinY + z * cosY;
        const ry = 0 * cosX - rz * sinX;
        const fz = 0 * sinX + rz * cosX;
        const persp = 0.75 + ((fz + 1) / 2) * 0.5;
        const px = cx + rx * radius * persp;
        const py = cy + ry * radius * persp;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = `rgba(150, 90, 255, ${0.35 * fade})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
}
