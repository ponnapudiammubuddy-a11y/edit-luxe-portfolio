import Logo from './Logo';
import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
const Footer = () => {
  return <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="font-display font-bold text-lg">
              Visual <span className="text-primary">Edit</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-foreground transition-colors">Home</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {[
              { Icon: Instagram, url: 'https://www.instagram.com/one_visual_edits?igsh=MXc1ZXU2OHQ5c3ViOA==' },
              { Icon: Youtube, url: 'https://youtube.com/@onevisualedits?si=QD1g_0cdzAjVkQWF' },
              { Icon: Linkedin, url: 'https://www.linkedin.com/in/one-visual-edits-757279371' },
              { Icon: Twitter, url: 'https://x.com/B__Jeevan' },
            ].map(({ Icon, url }, index) => (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:bg-primary/20 transition-colors group">
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VE Edit. All rights reserved. Crafting Visual Excellence.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;