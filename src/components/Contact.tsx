import { useState } from 'react';
import { Send, Mail, Phone, MapPin, MessageCircle, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Get In Touch</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let's Create <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to bring your vision to life? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display font-semibold text-xl mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <a href="mailto:hello@veedit.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">onevisualedits@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+1234567890" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground">9121899077</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">​Remote , world wide     </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Follow Me</p>
                <div className="flex gap-3">
                  {[
                    { Icon: Instagram, href: 'https://www.instagram.com/one_visual_edits?igsh=MXc1ZXU2OHQ5c3ViOA==' },
                    { Icon: Youtube, href: 'https://youtube.com/@onevisualedits?si=QD1g_0cdzAjVkQWF' },
                    { Icon: Linkedin, href: 'https://www.linkedin.com/in/one-visual-edits-757279371' },
                    { Icon: Twitter, href: 'https://x.com/B__Jeevan' },
                  ].map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:bg-primary/20 transition-colors group">
                      <social.Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Your name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="your@email.com" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select name="project" value={formData.project} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" required>
                  <option value="">Select a service</option>
                  <option value="video-editing">Video Editing</option>
                  <option value="motion-graphics">Motion Graphics</option>
                  <option value="social-media">Social Media Content</option>
                  <option value="brand-video">Brand Video</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="Tell me about your project..." required />
              </div>

              <Button type="submit" variant="hero" className="w-full">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919121899077" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 group" style={{
      boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)'
    }}>
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-card text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat on WhatsApp
        </span>
      </a>
    </section>;
};
export default Contact;