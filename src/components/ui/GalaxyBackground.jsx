import React, { useEffect, useRef } from "react";

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const stars = Array.from({ length: 200 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random(),
      fadeDirection: Math.random() > 0.5 ? 0.01 : -0.01,
    }));

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const shouldReduceMotion = mediaQuery.matches;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Nebula Gradient (simulated with large soft circles)
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width,
      );
      gradient.addColorStop(0, "rgba(49, 46, 129, 0.1)"); // Indigo-900/10
      gradient.addColorStop(0.5, "rgba(88, 28, 135, 0.05)"); // Purple-900/05
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#ffffff";

      stars.forEach((star) => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        if (!shouldReduceMotion) {
          // Animate opacity (twinkle)
          star.opacity += star.fadeDirection;
          if (star.opacity > 1 || star.opacity < 0.2) {
            star.fadeDirection = -star.fadeDirection;
          }

          // Animate position (parallax drift)
          star.y -= star.speed;
          if (star.y < 0) {
            star.y = canvas.height;
            star.x = Math.random() * canvas.width;
          }
        }
      });

      if (!shouldReduceMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-[#030712] overflow-hidden">
      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030712] to-[#030712]" />

      {/* Canvas Starfield */}
      <canvas ref={canvasRef} className="absolute inset-0 block" />

      {/* Scanline/Vignette Overlay for Cinematic feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/50 pointer-events-none"></div>
    </div>
  );
};

export default GalaxyBackground;
