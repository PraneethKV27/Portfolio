import React, { useEffect, useRef } from 'react';

export default function PCBBackground({ darkMode = true }) {
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
      ctx.fillStyle = darkMode ? '#030712' : '#f8fafc';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle Grid overlay
      ctx.strokeStyle = darkMode ? 'rgba(59, 130, 246, 0.02)' : 'rgba(6, 182, 212, 0.06)';
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
        const opacity = darkMode 
          ? (0.05 + Math.sin(time + trace.from.pulseOffset) * 0.02)
          : (0.12 + Math.sin(time + trace.from.pulseOffset) * 0.04);
        
        ctx.strokeStyle = darkMode 
          ? `rgba(6, 182, 212, ${opacity})`
          : `rgba(9, 79, 114, ${opacity})`;
          
        ctx.beginPath();
        ctx.moveTo(trace.from.x, trace.from.y);
        
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
        
        const particleColor = trace.from.color === '#06b6d4'
          ? (darkMode ? '#22d3ee' : '#0891b2')
          : (darkMode ? '#a78bfa' : '#7c3aed');
          
        ctx.fillStyle = particleColor;
        
        if (darkMode) {
          ctx.shadowColor = particleColor;
          ctx.shadowBlur = 8;
        }
        
        ctx.beginPath();
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw nodes (Junctions, IC terminals)
      nodes.forEach(node => {
        const glow = 2 + Math.abs(Math.sin(time + node.pulseOffset)) * 4;
        const nodeColor = node.color === '#06b6d4'
          ? (darkMode ? '#06b6d4' : '#0891b2')
          : (darkMode ? '#8b5cf6' : '#7c3aed');
          
        ctx.fillStyle = nodeColor;
        
        if (darkMode) {
          ctx.shadowColor = nodeColor;
          ctx.shadowBlur = glow;
        }
        
        ctx.beginPath();
        if (node.type === 'ic') {
          ctx.rect(node.x - 3, node.y - 3, 6, 6);
        } else {
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
  }, [darkMode]);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 block pointer-events-none" />;
}
