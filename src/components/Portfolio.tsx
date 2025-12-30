import { useState, useEffect } from 'react';
import { Play, ExternalLink, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface PortfolioItem {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  category: string | null;
  link: string | null;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [projects, setProjects] = useState<PortfolioItem[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching portfolio:', error);
      } else if (data) {
        setProjects(data);
        // Extract unique categories
        const uniqueCategories = ['All', ...new Set(data.map(p => p.category).filter(Boolean) as string[])];
        setCategories(uniqueCategories);
      }
      setLoading(false);
    };

    fetchPortfolio();
  }, []);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Portfolio</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my best projects across various styles and industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground glow-effect-sm'
                  : 'glass-card text-muted-foreground hover:text-foreground hover:bg-card/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            No portfolio items found.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:scale-[1.02] hover:glow-effect"
              >
                {/* Thumbnail / Video */}
                <div className="relative aspect-video overflow-hidden bg-background/50">
                  {playingVideo === project.id && project.link ? (
                    <iframe
                      src={`${project.link}?autoplay=1&rel=0`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full absolute inset-0"
                    />
                  ) : (
                    <>
                      <img
                        src={project.image_url || 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Play Button */}
                      {project.link && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button 
                            onClick={() => setPlayingVideo(project.id)}
                            className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 glow-effect shadow-lg shadow-primary/30"
                          >
                            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
