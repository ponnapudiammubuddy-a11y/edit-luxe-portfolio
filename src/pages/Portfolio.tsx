import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import InteractiveBubbles from '@/components/InteractiveBubbles';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | VE Edit</title>
        <meta name="description" content="Explore VE Edit's portfolio of cinematic video projects, motion graphics, and brand films." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <FloatingBubbles />
        <InteractiveBubbles />
        <Navbar />
        
        <main>
          <Portfolio />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;

