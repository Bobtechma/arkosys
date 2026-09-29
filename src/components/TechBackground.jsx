import React, { useEffect, useRef } from 'react';
import './TechBackground.css';

const TECH_SYMBOLS = ['</>', '{ }', '=>', 'API', '01', 'git', 'const', 'async', 'SQL', 'npm', 'json', '404', '200'];

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const isMobile = width < 768;

    // Nodes (System architecture nodes)
    const calculatedNodes = Math.floor((width * height) / 22000);
    const targetNodeCount = isMobile ? 16 : Math.max(35, calculatedNodes);
    const nodes = [];

    for (let i = 0; i < targetNodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.2,
        isAccent: Math.random() > 0.65
      });
    }

    // Code Stream Symbols floating in background
    const symbols = [];
    const symbolCount = isMobile ? 6 : Math.floor(width / 140);

    for (let i = 0; i < symbolCount; i++) {
      symbols.push({
        text: TECH_SYMBOLS[Math.floor(Math.random() * TECH_SYMBOLS.length)],
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 0.35 + 0.15,
        opacity: Math.random() * 0.18 + 0.05,
        fontSize: Math.floor(Math.random() * 4) + 11
      });
    }

    // Packets traveling along lines
    let pulses = [];

    const maxDistance = isMobile ? 95 : 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw floating code symbols
      ctx.font = '12px "Courier New", monospace';
      symbols.forEach((sym) => {
        ctx.fillStyle = `rgba(249, 115, 22, ${sym.opacity})`;
        ctx.font = `${sym.fontSize}px monospace`;
        ctx.fillText(sym.text, sym.x, sym.y);

        sym.y -= sym.speed;
        if (sym.y < -20) {
          sym.y = height + 20;
          sym.x = Math.random() * width;
          sym.text = TECH_SYMBOLS[Math.floor(Math.random() * TECH_SYMBOLS.length)];
        }
      });

      // 2. Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Occasionally create a traveling pulse packet
            if (Math.random() < 0.0003 && pulses.length < 8) {
              pulses.push({
                from: node,
                to: other,
                progress: 0,
                speed: 0.015 + Math.random() * 0.01
              });
            }
          }
        }

        // Draw node point
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isAccent
          ? 'rgba(249, 115, 22, 0.45)'
          : 'rgba(255, 255, 255, 0.25)';
        ctx.fill();
      }

      // 3. Draw traveling pulses (data flow along system architecture)
      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        p.progress += p.speed;

        if (p.progress >= 1) {
          pulses.splice(k, 1);
          continue;
        }

        const px = p.from.x + (p.to.x - p.from.x) * p.progress;
        const py = p.from.y + (p.to.y - p.from.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(249, 115, 22, 0.85)';
        ctx.shadowColor = '#F97316';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
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
    <div className="tech-bg-container" aria-hidden="true">
      <div className="tech-bg-gradient-overlay"></div>
      <canvas ref={canvasRef} className="tech-bg-canvas" />
    </div>
  );
};

export default TechBackground;
