import { Play, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { Button } from './ui/button';
import Logo from './Logo';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Animated Logo */}
          <div className="flex justify-center mb-6 animate-fade-up">
            <Logo size="lg" animated />
          </div>

          
          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up leading-tight">
            Crafting{' '}
            <span className="text-gradient text-glow">Cinematic</span>
            <br />
            Visual Stories
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delayed leading-relaxed">
            Transform your raw footage into stunning visual masterpieces. 
            Premium video editing, motion graphics, and creative storytelling 
            that captivates your audience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delayed flex-wrap">
            <Button variant="hero" size="xl" className="group">
              <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
              Watch My Work
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
              Book a Call
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-xl mx-auto">
            {[{
            value: '150+',
            label: 'Projects Delivered'
          }, {
            value: '50+',
            label: 'Happy Clients'
          }, {
            value: '3+',
            label: 'Years Experience'
          }].map((stat, index) => <div key={stat.label} className="text-center animate-fade-up" style={{
            animationDelay: `${0.4 + index * 0.1}s`
          }}>
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>

    </section>;
};
export default Hero;