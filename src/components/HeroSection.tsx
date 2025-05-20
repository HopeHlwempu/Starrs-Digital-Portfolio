
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold">
              Hi, I'm Hope <span className="animate-pulse-soft">👩🏽‍💻</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Creative Software Engineer. Dreamer. Builder. Deep Thinker.
            </h2>
            
            <p className="text-lg text-muted-foreground/90">
              I craft beautiful user experiences and robust code that makes a difference. 
              Passionate about combining technical excellence with creative expression to build 
              solutions that matter.
            </p>
            
            <div className="flex items-center space-x-3 justify-center lg:justify-start">
              <span className="text-lg">💻</span>
              <span className="text-lg">✝️</span>
              <span className="text-lg">💭</span>
              <span className="text-lg">🎶</span>
              <span className="text-lg">🪴</span>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="bg-gradient-pink hover:opacity-90 transition-opacity">
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
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-soft">
                <img 
                  src="/public/placeholder.svg" 
                  alt="Hope Hlwempu" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative circle */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-pink opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
