import { Award, Film, Zap, Heart } from 'lucide-react';

const features = [
  {
    icon: Film,
    title: 'Cinematic Vision',
    description: 'Every frame is crafted with precision and artistic intent.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Quality work delivered within your timeline.',
  },
  {
    icon: Award,
    title: 'Award Quality',
    description: 'Professional standards that exceed expectations.',
  },
  {
    icon: Heart,
    title: 'Passion Driven',
    description: 'Every project receives dedicated creative attention.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">About Me</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Bringing Your Vision{' '}
              <span className="text-gradient">To Life</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              With over 5 years of experience in professional video editing, 
              I specialize in transforming raw footage into compelling visual 
              narratives. From cinematic brand films to engaging social media 
              content, I bring technical expertise and creative vision to every project.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My passion lies in understanding your brand's story and translating 
              it into visuals that resonate with your audience. Whether it's motion 
              graphics, color grading, or sound design, I ensure every element 
              contributes to a cohesive and impactful final product.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Motion Graphics', 'Color Grading', 'Sound Design'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full glass-card text-sm text-foreground hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl glass-card hover:bg-card/60 transition-all duration-500 hover:scale-105 hover:glow-effect-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
