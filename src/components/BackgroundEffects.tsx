import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  pulseSpeed: number;
  isHeart: boolean;
  color: string;
}

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate gentle starry particles and occasional subtle hearts
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
    const particles: Particle[] = [];

    const colors = [
      'rgba(244, 114, 182, ', // rose
      'rgba(216, 180, 254, ', // lavender
      'rgba(253, 230, 138, ', // warm gold
      'rgba(255, 255, 255, ', // soft white
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedY: -(Math.random() * 0.35 + 0.1),
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.7 + 0.2,
        pulseSpeed: Math.random() * 0.015 + 0.005,
        isHeart: i % 7 === 0, // only about 14% are tiny subtle hearts
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Helper to draw tiny heart
    function drawTinyHeart(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string, opacity: number) {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = `${color}${opacity * 0.75})`;
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
      ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size * 1.3);
      ctx.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
      ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;

        // Wrap around seamlessly
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const dynamicOpacity = Math.abs(Math.sin(tick * p.pulseSpeed + i)) * p.opacity;

        if (p.isHeart) {
          drawTinyHeart(ctx, p.x, p.y, p.size * 2.8, p.color, dynamicOpacity);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${dynamicOpacity})`;
          ctx.shadowColor = `${p.color}0.8)`;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="ambient-background" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep cinematic background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09070F] via-[#0E0B18] to-[#07050C]" />

      {/* Atmospheric glowing orbs */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] bg-pink-600/12 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[110px] animate-pulse-glow" style={{ animationDelay: '3.5s' }} />
      <div className="absolute -bottom-32 right-1/4 w-[28rem] h-[28rem] bg-fuchsia-600/15 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: '1.2s' }} />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,3,10,0.6)_100%)]" />

      {/* Interactive canvas for subtle stars and floating motes */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-75" />
    </div>
  );
};
