import { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Fire ember color palette
    const emberColors = [
      '255, 85, 0',
      '255, 120, 0',
      '255, 60, 0',
      '255, 160, 40',
      '220, 40, 0',
      '255, 200, 60',
    ];

    interface Ember {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      life: number;
      maxLife: number;
      color: string;
      wobbleSpeed: number;
      wobbleAmp: number;
    }

    const createEmber = (spreadY = false): Ember => {
      const maxLife = Math.random() * 320 + 120;
      return {
        x: Math.random() * width,
        y: spreadY ? Math.random() * height : height + Math.random() * 80,
        vx: (Math.random() - 0.5) * 0.7,
        vy: -(Math.random() * 1.4 + 0.3),
        radius: Math.random() * 2.5 + 0.5,
        alpha: Math.random() * 0.65 + 0.25,
        life: spreadY ? Math.random() * maxLife : 0,
        maxLife,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
        wobbleSpeed: Math.random() * 0.04 + 0.008,
        wobbleAmp: Math.random() * 2 + 0.4,
      };
    };

    const emberCount = Math.min(Math.floor((width * height) / 11000), 110);
    const embers: Ember[] = [];
    for (let i = 0; i < emberCount; i++) {
      embers.push(createEmber(true));
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Ambient warm glow from bottom
      const bottomGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 1.15,
        0,
        width * 0.5,
        height * 1.15,
        height * 0.85,
      );
      bottomGlow.addColorStop(0, 'rgba(255, 60, 0, 0.07)');
      bottomGlow.addColorStop(0.5, 'rgba(255, 40, 0, 0.025)');
      bottomGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bottomGlow;
      ctx.fillRect(0, 0, width, height);

      // Right-side warm glow (where profile sits)
      const sideGlow = ctx.createRadialGradient(
        width * 0.78,
        height * 0.45,
        0,
        width * 0.78,
        height * 0.45,
        width * 0.35,
      );
      sideGlow.addColorStop(0, 'rgba(255, 85, 0, 0.045)');
      sideGlow.addColorStop(0.6, 'rgba(255, 50, 0, 0.015)');
      sideGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = sideGlow;
      ctx.fillRect(0, 0, width, height);

      // Update & draw each ember
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.life++;

        // Reset dead or off-screen embers
        if (e.life >= e.maxLife || e.y < -40 || e.x < -40 || e.x > width + 40) {
          embers[i] = createEmber(false);
          continue;
        }

        // Physics: wobble + drift upward
        const wobble = Math.sin(e.life * e.wobbleSpeed + i) * e.wobbleAmp * 0.12;
        e.x += e.vx + wobble;
        e.y += e.vy;
        e.vy *= 0.9995; // slight deceleration

        // Mouse repulsion
        const mDx = e.x - mouseX;
        const mDy = e.y - mouseY;
        const mDist = Math.sqrt(mDx * mDx + mDy * mDy);
        if (mDist < 110 && mDist > 0) {
          const force = (1 - mDist / 110) * 1.8;
          e.x += (mDx / mDist) * force;
          e.y += (mDy / mDist) * force;
        }

        // Fade in/out based on lifetime
        const lifeFrac = e.life / e.maxLife;
        let currentAlpha = e.alpha;
        if (lifeFrac < 0.08) {
          currentAlpha *= lifeFrac / 0.08;
        } else if (lifeFrac > 0.65) {
          currentAlpha *= (1 - lifeFrac) / 0.35;
        }

        const currentRadius = e.radius * (1 - lifeFrac * 0.35);

        // Outer glow halo
        if (currentRadius > 0.8) {
          const glow = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, currentRadius * 7);
          glow.addColorStop(0, `rgba(${e.color}, ${currentAlpha * 0.35})`);
          glow.addColorStop(0.4, `rgba(${e.color}, ${currentAlpha * 0.08})`);
          glow.addColorStop(1, `rgba(${e.color}, 0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(e.x, e.y, currentRadius * 7, 0, Math.PI * 2);
          ctx.fill();
        }

        // Bright ember core
        ctx.beginPath();
        ctx.arc(e.x, e.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${e.color}, ${currentAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Solid dark base */}
      <div className="absolute inset-0 bg-[#050505]" />
      {/* Subtle bottom warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(80,20,0,0.15),_transparent_65%)]" />
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
