import { Video, Film, Sparkles, Youtube, Megaphone, Clapperboard } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional cutting, pacing, and storytelling to create engaging content.',
    features: ['Multi-cam editing', 'Seamless transitions', 'Audio sync'],
  },
  {
    icon: Film,
    title: 'Cinematic Reels & Shorts',
    description: 'Eye-catching short-form content optimized for maximum engagement.',
    features: ['Instagram Reels', 'TikTok content', 'YouTube Shorts'],
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics',
    description: 'Dynamic animations and visual effects that bring your brand to life.',
    features: ['Logo animations', 'Lower thirds', 'Kinetic typography'],
  },
  {
    icon: Youtube,
    title: 'YouTube & Social Media',
    description: 'Platform-optimized content designed to grow your audience.',
    features: ['Thumbnails', 'Intros/Outros', 'Engagement hooks'],
  },
  {
    icon: Megaphone,
    title: 'Promotional Videos',
    description: 'High-impact promotional content that converts viewers into customers.',
    features: ['Product showcases', 'Brand stories', 'Ad creatives'],
  },
  {
    icon: Clapperboard,
    title: 'Brand Videos',
    description: 'Comprehensive brand films that communicate your unique story.',
    features: ['Corporate videos', 'Event coverage', 'Documentary style'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Services</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive video editing services tailored to elevate your brand 
            and captivate your audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl glass-card overflow-hidden transition-all duration-500 hover:bg-card/60 hover:scale-[1.02] hover:glow-effect-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
