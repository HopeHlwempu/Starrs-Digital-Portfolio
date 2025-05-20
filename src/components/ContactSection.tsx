
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-hope-softGray/30 to-white">
      <div className="section-container">
        <h2 className="section-title">Let's Connect <span className="ml-2">💌</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let's build something beautiful together! Whether you have a project in mind,
          job opportunity, or just want to say hi, I'd love to hear from you.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="border-none shadow-soft p-6">
            <CardContent className="p-0 space-y-6">
              <h3 className="text-2xl font-quicksand font-bold text-hope-magenta">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I'd love to hear about your project or opportunity..."
                      required
                      className="w-full rounded-md min-h-[150px]"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-pink hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-quicksand font-bold text-hope-magenta mb-4">
                  Connect With Me
                </h3>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:hopewlwempu@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-hope-pink/10 transition-colors"
                >
                  <div className="bg-hope-pink rounded-full p-2 text-hope-magenta">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-quicksand font-medium">Email</h4>
                    <p className="text-sm text-muted-foreground">hopewlwempu@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/HopeHlwempu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-hope-pink/10 transition-colors"
                >
                  <div className="bg-hope-pink rounded-full p-2 text-hope-magenta">
                    <Github size={20} />
                  </div>
                  <div>
                    <h4 className="font-quicksand font-medium">GitHub</h4>
                    <p className="text-sm text-muted-foreground">github.com/HopeHlwempu</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-hope-pink/10 transition-colors"
                >
                  <div className="bg-hope-pink rounded-full p-2 text-hope-magenta">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="font-quicksand font-medium">LinkedIn</h4>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/hope-hlwempu</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
