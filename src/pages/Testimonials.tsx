import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import InteractiveBubbles from '@/components/InteractiveBubbles';

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials | VE Edit</title>
        <meta name="description" content="Read client testimonials and success stories from VE Edit's satisfied customers. See how we've helped brands and creators achieve their video editing goals." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <FloatingBubbles />
        <InteractiveBubbles />
        <Navbar />
        
        <main>
          <Testimonials />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TestimonialsPage;

