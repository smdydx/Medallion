
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function DigitalAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const scale = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;
    ctx.scale(scale, scale);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      color: string;
      alpha: number;
      pulse: number;
      z: number;
    }> = [];
    
    let mouseX = 0;
    let mouseY = 0;
    let rotationAngle = 0;
    
    canvas.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    const isMobile = () => window.innerWidth < 768;
    
    function createParticles() {
      particles.length = 0;
      const count = isMobile() ? 50 : 150;
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * (isMobile() ? 4 : 3) + (isMobile() ? 1.5 : 1),
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          speedZ: Math.random() * 4 - 2,
          color: `hsl(${Math.random() * 60 + 200}, 70%, ${50 + Math.random() * 20}%)`,
          alpha: Math.random() * 0.5 + 0.2,
          pulse: Math.random() * Math.PI
        });
      }
    }
    
    function updateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rotationAngle += 0.001;
      
      particles.sort((a, b) => b.z - a.z);
      
      particles.forEach((p, i) => {
        // 3D rotation
        const cosR = Math.cos(rotationAngle);
        const sinR = Math.sin(rotationAngle);
        const dx = p.x - canvas.width / 2;
        const dz = p.z - 500;
        p.x = dx * cosR - dz * sinR + canvas.width / 2;
        p.z = dx * sinR + dz * cosR + 500;
        
        // Mouse interaction
        const mouseDistance = Math.hypot(mouseX - p.x, mouseY - p.y);
        if (mouseDistance < 120) {
          const angle = Math.atan2(mouseY - p.y, mouseX - p.x);
          p.speedX += Math.cos(angle) * 0.2;
          p.speedY += Math.sin(angle) * 0.2;
        }
        
        // Update position with momentum
        p.x += p.speedX;
        p.y += p.speedY;
        p.z += p.speedZ;
        
        // Boundaries check with wrapping
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        if (p.z < 0) p.z = 1000;
        if (p.z > 1000) p.z = 0;
        
        // Scale based on z-position
        const scale = (1000 - p.z) / 1000;
        const size = p.size * scale;
        
        // Pulsing effect
        p.pulse += 0.05;
        const pulseFactor = Math.sin(p.pulse) * 0.5 + 0.5;
        
        // Draw particle with enhanced glow
        ctx.save();
        ctx.globalAlpha = p.alpha * scale;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 15 * pulseFactor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * pulseFactor, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        // Speed decay
        p.speedX *= 0.99;
        p.speedY *= 0.99;
        p.speedZ *= 0.98;
      });
    }
    
    function connectParticles() {
      const maxDistance = isMobile() ? 100 : 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dz = particles[i].z - particles[j].z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance < maxDistance) {
            const scale = (1000 - Math.min(particles[i].z, particles[j].z)) / 1000;
            const opacity = (1 - distance / maxDistance) * 0.5 * scale;
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `hsla(210, 70%, 50%, ${opacity})`);
            gradient.addColorStop(1, `hsla(240, 70%, 50%, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2 * scale;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
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
