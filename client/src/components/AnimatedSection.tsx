import { useRef, ReactNode, useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-up' | 'fade-right';
  delay?: 1 | 2 | 3 | 4 | 5;
  threshold?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className,
  animation = 'fade-up',
  delay,
  threshold = 0.1,
  id,
}: AnimatedSectionProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once the element is visible, we don't need to observe it anymore
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  
  const animationClass = {
    'fade-in': 'fade-in-hidden',
    'fade-up': 'fade-up-hidden',
    'fade-right': 'fade-right-hidden',
  }[animation];
  
  const delayClass = delay ? `slide-delay-${delay}` : '';
  
  return (
    <div
      ref={ref}
      className={cn(
        animationClass,
        delayClass,
        isInView && 'fade-in-visible',
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
}
