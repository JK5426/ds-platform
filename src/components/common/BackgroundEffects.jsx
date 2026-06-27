import React, { useEffect, useRef } from 'react';

const BackgroundEffects = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let nodes = [];

    // Resize canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    // Initialize nodes
    const initNodes = () => {
      nodes = [];
      const numNodes = Math.floor((canvas.width * canvas.height) / 15000); // Responsive amount
      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDarkMode = document.documentElement.classList.contains('dark');
      
      // Node and line colors
      const nodeColor = isDarkMode ? 'rgba(34, 211, 238, 0.8)' : 'rgba(192, 132, 252, 0.6)';
      const lineColorBase = isDarkMode ? '34, 211, 238' : '192, 132, 252';

      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        // Connect near nodes
        for (let j = i + 1; j < nodes.length; j++) {
          let target = nodes[j];
          let dx = node.x - target.x;
          let dy = node.y - target.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            // Opacity based on distance
            const opacity = 1 - (dist / 150);
            ctx.strokeStyle = `rgba(${lineColorBase}, ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#fafafa] dark:bg-[#09090b] transition-colors duration-500">
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full opacity-20 dark:opacity-[0.15]" 
      />
      {/* Subtle overlay gradient to blend it into the brand */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fafafa] dark:to-[#09090b] opacity-80"></div>
    </div>
  );
};

export default BackgroundEffects;
