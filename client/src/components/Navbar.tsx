import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/med.jpg';
import { ThemeToggle } from './theme-toggle';
import { useTheme } from '@/components/ui/theme-provider';
import NavMenu from './NavMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, navigate] = useLocation();
  const { theme } = useTheme();
  
  const activeSection = useScrollSpy([
    '#home', 
    '#about', 
    '#services', 
    '#projects', 
    '#team', 
    '#contact'
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Main navigation items
  const mainNavItems = [
    { 
      label: 'Home', 
      href: '/' 
    },
    { 
      label: 'About',
      href: '/about',
      submenu: [
        { label: 'Our History', href: '/about#history' },
        { label: 'Leadership Team', href: '/about#leadership' },
        { label: 'Our Values', href: '/about#values' }
      ]
    },
    { 
      label: 'Services',
      href: '/services',
      submenu: [
        { label: 'Tunnel Engineering', href: '/services#tunnel' },
        { label: 'Structural Engineering', href: '/services#structural' },
        { label: 'Construction Management', href: '/services#construction' },
        { label: 'Civil Engineering Design', href: '/services#civil' },
        { label: 'Mechanical Systems', href: '/services#mechanical' },
        { label: 'Consultancy Services', href: '/services#consultancy' }
      ]
    },
    { 
      label: 'Projects',
      href: '/projects',
      submenu: [
        { label: 'All Projects', href: '/projects' },
        { label: 'Tunnels', href: '/projects#tunnels' },
        { label: 'Bridges', href: '/projects#bridges' },
        { label: 'Rail', href: '/projects#rail' },
        { label: 'Urban', href: '/projects#urban' }
      ]
    },
    { 
      label: 'Contact', 
      href: '/contact' 
    }
  ];

  // For homepage scrolling
  const scrollToSection = (sectionId: string) => {
    if (location !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth',
          });
        }
      }, 100);
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? theme === "dark" ? "bg-background/90 shadow-md py-2" : "bg-white shadow-md py-2" 
          : theme === "dark" ? "bg-background/90 py-4" : "bg-white/90 py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <img src={logoImage} alt="Medallion India Logo" className="h-14 mr-3" />
            <div className="font-heading font-bold text-2xl hidden sm:block">
              <span className="text-secondary">M</span>edallion <span className="text-primary">India</span>
            </div>
          </div>

          <div className="flex items-center">
            <nav className="hidden md:flex space-x-6 mr-4">
              {mainNavItems.map((item) => (
                item.submenu ? (
                  <NavMenu 
                    key={item.href}
                    label={item.label} 
                    items={item.submenu}
                  />
                ) : (
                  <button
                    key={item.href}
                    className="nav-link font-heading font-medium text-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => navigate(item.href)}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>
            
            <ThemeToggle />
            
            <button
              className="md:hidden text-foreground focus:outline-none ml-4"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden w-full border-t border-gray-200 overflow-auto transition-all duration-300",
        theme === "dark" ? "bg-background" : "bg-white",
        isMenuOpen ? "max-h-[75vh]" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 py-3">
          {mainNavItems.map((item) => (
            <div key={item.href}>
              {item.submenu ? (
                <div className="py-2">
                  <Link href={item.href}>
                    <a className="font-heading font-medium hover:text-primary block w-full text-left">
                      {item.label}
                    </a>
                  </Link>
                  <div className="pl-4 mt-2 border-l-2 border-gray-200">
                    {item.submenu.map(subItem => (
                      <button
                        key={subItem.href}
                        className="block w-full text-left py-2 text-sm hover:text-primary"
                        onClick={() => {
                          navigate(subItem.href);
                          closeMenu();
                        }}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  className="block w-full text-left py-2 font-heading font-medium hover:text-primary"
                  onClick={() => {
                    navigate(item.href);
                    closeMenu();
                  }}
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
