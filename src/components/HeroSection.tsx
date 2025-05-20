
import { Github, Linkedin, Mail, Instagram, Code, CrossIcon, Brain, Music, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden sparkle-container">
      {/* Sparkles */}
      <div className="sparkle sparkle-1"></div>
      <div className="sparkle sparkle-2"></div>
      <div className="sparkle sparkle-3"></div>
      <div className="sparkle sparkle-4"></div>
      
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-full space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
              Hi, I'm Hope
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground font-serif font-medium">
              Creative Software Engineer. Dreamer. Builder. Deep Thinker.
            </h2>
            
            <p className="text-lg text-muted-foreground/90">
              I craft beautiful user experiences and robust code that makes a difference. 
              Passionate about combining technical excellence with creative expression to build 
              solutions that matter.
            </p>
            
            <div className="flex items-center space-x-6 justify-center lg:justify-start">
              <Code className="text-muted-foreground" size={24} />
              <CrossIcon className="text-muted-foreground" size={24} />
              <Brain className="text-muted-foreground" size={24} />
              <Music className="text-muted-foreground" size={24} />
              <Leaf className="text-muted-foreground" size={24} />
            </div>
            
            <div className="pt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="bg-gradient-pink hover:opacity-90 transition-opacity transform hover:scale-105 shadow-glow">
                View My Work
              </Button>
              <Button variant="outline" className="border-hope-pink hover:bg-hope-pink/10">
                Get In Touch
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 justify-center lg:justify-start pt-4">
              <a href="https://github.com/HopeHlwempu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-hope-magenta transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-hope-magenta transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hopewlwempu@gmail.com" className="text-muted-foreground hover:text-hope-magenta transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.instagram.com/starr.hopey/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-hope-magenta transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Gallery Section */}
        <div className="mt-16 pt-8 border-t border-hope-pink/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-square rounded-lg overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <AspectRatio ratio={1/1} className="w-full h-full">
                  <img 
                    src={`/placeholder-${item}.jpg`}
                    alt={`Gallery image ${item}`} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
