import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/eco-hero-bg.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="hero-content space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
  
          {/* Clean, Simple Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">
              <span className="block">Eco</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Essentia
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Engineering sustainable solutions for a cleaner tomorrow
            </p>
          </div>

          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="nature-button-primary text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-lg px-8 py-4 rounded-xl transition-[var(--transition-gentle)] hover:-translate-y-0.5"
              onClick={scrollToServices}
            >
              Our Services
            </Button>
          </div>

          {/* Clean Stats */}
          <div className="hero-stats grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/30">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2+</div>
              <div className="text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">60+</div>
              <div className="text-muted-foreground font-medium">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">99%</div>
              <div className="text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 gentle-float">
        <ChevronDown 
          className="h-6 w-6 text-primary cursor-pointer transition-colors hover:text-accent" 
          onClick={scrollToServices} 
        />
      </div>
    </section>
  );
};

export default Hero;