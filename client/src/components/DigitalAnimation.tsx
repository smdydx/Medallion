import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function DigitalAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Particle array
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];
    
    // Check if mobile
    const isMobile = () => window.innerWidth < 768;
    
    // Create particles
    function createParticles() {
      // Clear existing particles
      particles.length = 0;
      
      // Determine count based on device
      const count = isMobile() ? 30 : 80;
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (isMobile() ? 4 : 3) + (isMobile() ? 1.5 : 1),
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: `rgba(0, 120, 255, ${Math.random() * 0.5 + (isMobile() ? 0.3 : 0.2)})`
        });
      }
    }
    
    // Update particles
    function updateParticles() {
      for (let i = 0; i < particles.length; i++) {
        // Move particle
        particles[i].x += particles[i].speedX;
        particles[i].y += particles[i].speedY;
        
        // Wrap around edges
        if (particles[i].x < 0) particles[i].x = canvas.width;
        if (particles[i].x > canvas.width) particles[i].x = 0;
        if (particles[i].y < 0) particles[i].y = canvas.height;
        if (particles[i].y > canvas.height) particles[i].y = 0;
        
        // Draw particle
        ctx.fillStyle = particles[i].color;
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Connect particles with lines
    function connectParticles() {
      const maxDistance = isMobile() ? 120 : 150;
      const step = isMobile() ? 2 : 1; // Skip particles on mobile
      
      for (let a = 0; a < particles.length; a += step) {
        for (let b = a; b < particles.length; b += step) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            const opacityFactor = isMobile() ? 0.3 : 0.2;
            
            ctx.strokeStyle = `rgba(0, 120, 255, ${opacity * opacityFactor})`;
            ctx.lineWidth = isMobile() ? 1.5 : 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Animation loop
    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and connect particles
      updateParticles();
      connectParticles();
      
      // Continue animation
      requestAnimationFrame(animate);
    }
    
    // Initialize particles
    createParticles();
    
    // Start animation
    animate();
    
    // Handle window resize
    let resizeTimer: number | null = null;
    
    function handleResize() {
      // Update canvas size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Debounce particle recreation
      if (resizeTimer) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(createParticles, 300);
    }
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimer) window.clearTimeout(resizeTimer);
    };
  }, []);
  
  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 2 }}
    />
  );
}