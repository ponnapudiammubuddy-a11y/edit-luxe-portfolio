import { useEffect, useRef, useState } from 'react';
import aboutVideo from '@/assets/about-video.mp4';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 relative"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Video */}
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <video
                src={aboutVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div 
            className={`space-y-6 transition-all duration-700 ease-out delay-150 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-foreground">
              About Us
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              We are a passionate team of creative professionals dedicated to 
              transforming your vision into stunning visual experiences. With years 
              of expertise in video production and editing, we bring stories to life 
              through compelling narratives and cinematic excellence.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our commitment to quality and attention to detail ensures that every 
              project we undertake exceeds expectations. From concept to final cut, 
              we work closely with our clients to deliver content that resonates 
              with audiences and drives meaningful engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
