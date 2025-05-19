import { useState, useEffect } from 'react';

export function useScrollSpy(selectors: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = selectors.map(selector => document.querySelector(selector));
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveId(`#${entry.target.id}`);
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px',
      ...options,
    });
    
    elements.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [selectors, options]);
  
  return activeId;
}
