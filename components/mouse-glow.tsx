'use client';

import { useEffect, useRef } from 'react';

interface AuroraLayer {
  hue: number;
  offset: number;
  amplitude: number;
  frequency: number;
  speed: number;
  opacity: number;
}

export default function MouseGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);

    mouse.current.x = mouse.current.tx = width / 2;
    mouse.current.y = mouse.current.ty = height / 2;

    const layers: AuroraLayer[] = [
      { hue: 265, offset: 0, amplitude: 90, frequency: 0.004, speed: 0.0008, opacity: 0.18 },
      { hue: 240, offset: 80, amplitude: 110, frequency: 0.003, speed: 0.0012, opacity: 0.14 },
      { hue: 270, offset: 160, amplitude: 70, frequency: 0.005, speed: 0.0006, opacity: 0.12 },
      { hue: 245, offset: 240, amplitude: 100, frequency: 0.0035, speed: 0.001, opacity: 0.10 },
    ];

    let time = 0;
    let raf: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.tx = e.clientX;
      mouse.current.ty = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      time += 1;
      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.08;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.08;
      ctx.clearRect(0, 0, width, height);

      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (const layer of layers) {
        ctx.beginPath();
        ctx.moveTo(0, height);
        const step = 8;
        for (let x = 0; x <= width; x += step) {
          const dx = x - mx;
          const dist = Math.abs(dx);
          const influence = Math.exp(-(dist * dist) / (2 * 250 * 250));
          const wave1 = Math.sin(x * layer.frequency + time * layer.speed + layer.offset) * layer.amplitude;
          const wave2 = Math.sin(x * layer.frequency * 2.3 + time * layer.speed * 1.5) * (layer.amplitude * 0.4);
          const baseY = height * 0.5 + layer.offset * 1.5;
          const mouseYPull = (my - height * 0.5) * 0.3 * influence;
          const y = baseY + wave1 + wave2 - influence * 120 + mouseYPull;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, height * 0.3, 0, height);
        grad.addColorStop(0, `hsla(${layer.hue}, 70%, 60%, ${layer.opacity})`);
        grad.addColorStop(0.5, `hsla(${layer.hue}, 60%, 50%, ${layer.opacity * 0.6})`);
        grad.addColorStop(1, `hsla(${layer.hue}, 50%, 40%, 0)`);
        ctx.fillStyle = grad;
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
