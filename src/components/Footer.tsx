
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-white border-t border-hope-pink/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-quicksand text-muted-foreground text-sm">
              © {new Date().getFullYear()} Hope Hlwempu. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-center font-quicksand text-muted-foreground text-sm italic">
              "You love so much, you love when love hurts" — Kendrick Lamar
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="font-quicksand text-muted-foreground text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-hope-magenta" /> in South Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
