import { useState } from 'react';
import { Play, Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    text: 'VE Edit transformed our product launch video into a cinematic masterpiece. The attention to detail and creative vision exceeded all expectations. Highly recommend!',
    hasVideo: true,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'Creative Labs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: 'Working with VE Edit was an absolute pleasure. They understood our brand vision perfectly and delivered content that truly resonates with our audience.',
    hasVideo: true,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Content Creator',
    company: 'Self-Employed',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    text: 'The motion graphics and editing quality are next level. My YouTube channel has grown significantly since partnering with VE Edit.',
    hasVideo: false,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Testimonials</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear what our clients have to say about their experience working with VE Edit.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/20" />

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Profile Section */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/30"
                  />
                  {testimonials[activeIndex].hasVideo && (
                    <button className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform glow-effect-sm">
                      <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                    </button>
                  )}
                </div>
                <h4 className="font-display font-semibold text-lg">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {testimonials[activeIndex].role}
                </p>
                <p className="text-primary text-sm">
                  {testimonials[activeIndex].company}
                </p>
                {/* Stars */}
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="md:col-span-2">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 italic">
                  "{testimonials[activeIndex].text}"
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
