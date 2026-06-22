import React, { useEffect, useRef } from 'react';

export default function PCBBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Nodes representing ECE circuit components & terminals
    const nodes = [];
    const traces = [];
    const particles = [];
    const nodeCount = Math.floor((canvas.width * canvas.height) / 18000);

    // Generate random electronic nodes (junctions, resistors, IC pins)
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        type: Math.random() > 0.75 ? 'ic' : 'junction',
        color: Math.random() > 0.5 ? '#06b6d4' : '#8b5cf6',
        size: Math.random() * 3 + 2,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // Connect nodes to create PCB trace patterns (prefer 90/45 degree angles for realism)
    for (let i = 0; i < nodes.length; i++) {
      let connections = 0;
      const sorted = [...nodes]
        .map((n, idx) => ({ idx, dist: Math.hypot(n.x - nodes[i].x, n.y - nodes[i].y) }))
        .filter(n => n.dist > 0 && n.dist < 200)
        .sort((a, b) => a.dist - b.dist);

      for (let j = 0; j < Math.min(sorted.length, 2); j++) {
        const target = nodes[sorted[j].idx];
        traces.push({
          from: nodes[i],
          to: target,
          currentPct: Math.random(),
          speed: 0.005 + Math.random() * 0.01
        });
      }
    }

    let time = 0;
    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle Grid overlay
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw PCB traces (lines connecting junctions)
      ctx.lineWidth = 1.5;
      traces.forEach(trace => {
        const opacity = 0.05 + Math.sin(time + trace.from.pulseOffset) * 0.02;
        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(trace.from.x, trace.from.y);
        // Draw with a 45-degree angle bending to targets for authentic ECE trace aesthetic
        const dx = trace.to.x - trace.from.x;
        const dy = trace.to.y - trace.from.y;
        if (Math.abs(dx) > Math.abs(dy)) {
          ctx.lineTo(trace.from.x + dy, trace.to.y);
        } else {
          ctx.lineTo(trace.to.x, trace.from.y + dx);
        }
        ctx.lineTo(trace.to.x, trace.to.y);
        ctx.stroke();

        // Animate electric current flow particles along the traces
        trace.currentPct += trace.speed;
        if (trace.currentPct > 1) trace.currentPct = 0;

        const currentX = trace.from.x + (trace.to.x - trace.from.x) * trace.currentPct;
        const currentY = trace.from.y + (trace.to.y - trace.from.y) * trace.currentPct;
        ctx.fillStyle = trace.from.color === '#06b6d4' ? '#22d3ee' : '#a78bfa';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw nodes (Junctions, IC terminals)
      nodes.forEach(node => {
        const glow = 2 + Math.abs(Math.sin(time + node.pulseOffset)) * 4;
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = glow;
        
        ctx.beginPath();
        if (node.type === 'ic') {
          // Draw mini square IC controllers
          ctx.rect(node.x - 3, node.y - 3, 6, 6);
        } else {
          // Circle junctions
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 block pointer-events-none" />;
}
