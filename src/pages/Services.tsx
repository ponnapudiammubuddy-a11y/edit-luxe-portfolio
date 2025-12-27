import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import InteractiveBubbles from '@/components/InteractiveBubbles';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services | VE Edit</title>
        <meta name="description" content="Comprehensive video editing services from VE Edit - Video editing, motion graphics, cinematic reels, YouTube content, and brand videos." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <FloatingBubbles />
        <InteractiveBubbles />
        <Navbar />
        
        <main>
          <Services />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;

