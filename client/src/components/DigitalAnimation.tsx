
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function DigitalAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size and scaling for retina displays
    const scale = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;
    ctx.scale(scale, scale);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    
    // Enhanced particle system
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      pulse: number;
    }> = [];
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    canvas.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    // Check if mobile
    const isMobile = () => window.innerWidth < 768;
    
    function createParticles() {
      particles.length = 0;
      const count = isMobile() ? 40 : 100;
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (isMobile() ? 4 : 3) + (isMobile() ? 1.5 : 1),
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: `hsl(${Math.random() * 60 + 200}, 70%, 50%)`,
          alpha: Math.random() * 0.5 + 0.2,
          pulse: Math.random() * Math.PI
        });
      }
    }
    
    function updateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position with mouse influence
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          p.speedX += dx * 0.0001;
          p.speedY += dy * 0.0001;
        }
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Add pulsing effect
        p.pulse += 0.02;
        const pulseFactor = Math.sin(p.pulse) * 0.5 + 0.5;
        
        // Boundary check
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = p.alpha * pulseFactor;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * pulseFactor, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    
    function connectParticles() {
      const maxDistance = isMobile() ? 120 : 150;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.strokeStyle = `hsla(210, 70%, 50%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    function animate() {
      updateParticles();
      connectParticles();
      requestAnimationFrame(animate);
    }
    
    createParticles();
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      ctx.scale(scale, scale);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1.5 }}
    />
  );
}
