import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import InteractiveBubbles from '@/components/InteractiveBubbles';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | VE Edit</title>
        <meta name="description" content="Learn about VE Edit - Professional video editing with over 5 years of experience in cinematic storytelling and motion graphics." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <FloatingBubbles />
        <InteractiveBubbles />
        <Navbar />
        
        <main>
          <About />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;

