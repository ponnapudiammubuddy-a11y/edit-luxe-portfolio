import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from './ui/button';
import { useAuth } from '@/hooks/useAuth';
const navLinks = [{
  name: 'Home',
  href: '/'
}, {
  name: 'About',
  href: '/about'
}, {
  name: 'Services',
  href: '/services'
}, {
  name: 'Portfolio',
  href: '/portfolio'
}, {
  name: 'Testimonials',
  href: '/testimonials'
}, {
  name: 'Contact',
  href: '/contact'
}];
const Navbar = () => {
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Logo size="sm" />
          <span className="font-display font-bold text-xl text-foreground">
            Visual <span className="text-primary">Edit</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <Link key={link.name} to={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>)}
          {user && (
            <Link to="/admin" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group">
              Admin
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          )}
          <Button variant="hero" size="sm">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map(link => <Link key={link.name} to={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>)}
          {user && (
            <Link to="/admin" className="text-muted-foreground hover:text-foreground transition-colors duration-300 py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Admin
            </Link>
          )}
          <Button variant="hero" className="mt-4">
            Get a Quote
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navbar;