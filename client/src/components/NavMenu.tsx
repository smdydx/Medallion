import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'wouter';

interface SubMenuItem {
  label: string;
  href: string;
}

interface NavMenuProps {
  label: string;
  items: SubMenuItem[];
  className?: string;
}

export default function NavMenu({ label, items, className }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="nav-link font-heading font-medium text-foreground hover:text-primary transition-colors duration-300 flex items-center"
      >
        {label}
        <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-background py-1 z-50">
          {items.map((item) => (
            <div key={item.href}>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => {
                  navigate(item.href);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}