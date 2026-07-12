"use client";

import { useEffect, useRef } from "react";

export const MouseGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-[1] transition-transform duration-300 ease-out"
      style={{
        background:
          "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
      }}
    />
  );
};
