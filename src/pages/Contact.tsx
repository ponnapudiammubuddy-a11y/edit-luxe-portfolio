import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingBubbles from '@/components/FloatingBubbles';
import InteractiveBubbles from '@/components/InteractiveBubbles';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | VE Edit</title>
        <meta name="description" content="Get in touch with VE Edit to discuss your video editing project. Professional video editing services available worldwide." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <FloatingBubbles />
        <InteractiveBubbles />
        <Navbar />
        
        <main>
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;

