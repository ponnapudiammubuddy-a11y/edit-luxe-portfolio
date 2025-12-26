import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import InteractiveBubbles from '@/components/InteractiveBubbles';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>VE Edit | Professional Video Editing Studio</title>
        <meta name="description" content="VE Edit is a premium video editing studio specializing in cinematic edits, motion graphics, and brand storytelling. Transform your vision into stunning visual content." />
        <meta name="keywords" content="video editing, motion graphics, cinematic editing, brand videos, YouTube editing, social media content" />
        <link rel="canonical" href="https://veedit.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="VE Edit | Professional Video Editing Studio" />
        <meta property="og:description" content="Premium video editing, motion graphics, and cinematic storytelling for brands and creators." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VE Edit | Professional Video Editing Studio" />
        <meta name="twitter:description" content="Premium video editing, motion graphics, and cinematic storytelling." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <FloatingBubbles />
        <InteractiveBubbles />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
