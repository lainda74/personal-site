'use client';
import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Waterfall() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 300;
    const height = 800;
    const centerX = width / 2;

    const createStream = () => {
      const radius = Math.random() * 80 + 30; // Wider initial radius for top
      const angle = Math.random() * 2 * Math.PI;

      return {
        xOff: radius * Math.cos(angle),
        y: -50,
        oldY: -50,
        vy: Math.random() * 5 + 10,
        ay: 0.2,
        width: Math.random() * 1.8 + 0.5,
        color: Math.random() > 0.4 ? "#00BFFF" : "#ADD8E6",
        opacity: Math.random() * 0.4 + 0.1
      };
    };

    // Particle state
    type Particle = ReturnType<typeof createStream>;
    let particles: Particle[] = [];
    const maxParticles = 8000; // Even higher for "stream" effect

    const render = () => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';

      for (let i = 0; i < 70; i++) { 
        if (particles.length < maxParticles) {
          particles.push(createStream());
        }
      }

      particles = particles.filter(p => {
        p.oldY = p.y;
        p.vy += p.ay; 
        p.y += p.vy;

        // Tapering logic: decrease xOffset as a function of y depth
        // This makes the top wider than the bottom
        const taperFactor = 1 - (p.y / height) * 0.6; // Narrows down to 40% width
        const x = centerX + p.xOff * taperFactor;
        const oldX = centerX + p.xOff * (1 - (p.oldY / height) * 0.6);

        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.width;
        ctx.globalAlpha = p.opacity;
        ctx.moveTo(oldX, p.oldY);
        ctx.lineTo(x, p.y + 10); 
        ctx.stroke();

        return p.y < height;
      });
    };


    const timer = d3.timer(render);

    return () => timer.stop();
  }, []);

  return (
    <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[350px] h-[600px] pointer-events-none z-[1] overflow-hidden">
      <canvas
        ref={canvasRef}
        width={400}
        height={800}
        className="w-full h-full"
      />
    </div>
  );
}






