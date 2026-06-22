import React, { useEffect, useState, useRef } from 'react';

export default function SparkCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let sparks = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Spark {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = (Math.random() - 0.5) * 4 - 1; // Slight upward drift
        this.alpha = 1.0;
        this.color = Math.random() > 0.5 ? '#22d3ee' : '#a78bfa'; // cyan or purple sparks
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.02;
      }

      draw(context) {
        context.save();
        context.globalAlpha = this.alpha;
        context.fillStyle = this.color;
        context.shadowColor = this.color;
        context.shadowBlur = 8;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    let lastX = 0;
    let lastY = 0;

    const mouseTracker = (e) => {
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (dist < 12) return; // Only spawn if mouse has moved at least 12 pixels
      
      lastX = e.clientX;
      lastY = e.clientY;

      // Spawn new electric spark particles upon movement
      for (let i = 0; i < 2; i++) {
        sparks.push(new Spark(e.clientX, e.clientY));
      }
    };

    window.addEventListener('mousemove', mouseTracker);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw active sparks
      sparks = sparks.filter(s => s.alpha > 0);
      sparks.forEach(s => {
        s.update();
        s.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', mouseTracker);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-50 pointer-events-none block" />;
}
