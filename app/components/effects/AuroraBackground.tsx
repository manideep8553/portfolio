"use client";

import { useEffect, useRef } from "react";

export const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const blobs = [
      { x: 0.2, y: 0.3, r: 300, color: "124, 58, 237", dx: 0.0003, dy: 0.0002 },
      { x: 0.8, y: 0.7, r: 250, color: "6, 182, 212", dx: -0.0002, dy: -0.0003 },
      { x: 0.5, y: 0.5, r: 350, color: "168, 85, 247", dx: 0.0001, dy: -0.0001 },
      { x: 0.1, y: 0.8, r: 200, color: "56, 189, 248", dx: -0.0003, dy: 0.0002 },
    ];

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((b) => {
        b.x += b.dx;
        b.y += b.dy;

        if (b.x < -0.1 || b.x > 1.1) b.dx *= -1;
        if (b.y < -0.1 || b.y > 1.1) b.dy *= -1;

        const x = b.x * canvas.width;
        const y = b.y * canvas.height;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, b.r);
        gradient.addColorStop(0, `rgba(${b.color}, 0.12)`);
        gradient.addColorStop(0.5, `rgba(${b.color}, 0.06)`);
        gradient.addColorStop(1, `rgba(${b.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
