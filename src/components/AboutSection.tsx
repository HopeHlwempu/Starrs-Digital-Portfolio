
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, BookOpen, Music, Code, Heart } from 'lucide-react';

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type PassionItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
};

const timelineItems: TimelineItem[] = [
  {
    year: "2025",
    title: "Real-World Application",
    description: "Began applying my skills in real-world scenarios through mentorships, internships, job shadowing, and building personal projects, turning knowledge into tangible impact.",
  },
  {
    year: "2024",
    title: "HyperionDev Coding Bootcamp",
    description: "Attended an intensive coding bootcamp where I learned foundational programming concepts and built my first real applications.",
  },
  {
    year: "2023",
    title: "Self-Learning Journey",
    description: "Completed several online courses in web development and programming, while also deepening my understanding of Geography, Physics, and Math.",
  },
  {
    year: "2022",
    title: "Discovered Computer Science",
    description: "Discovered my love for computer science in high school, where I consistently earned distinctions in the subject.",
  },
];

const passions: PassionItem[] = [
  {
    title: "Faith",
    description: "My faith in God guides my purpose and gives meaning to my work.",
    icon: <span className="text-2xl">✝️</span>,
    image: "/public/placeholder.svg",
  },
  {
    title: "Family",
    description: "My family provides the support system that allows me to pursue my dreams.",
    icon: <Heart className="h-6 w-6 text-hope-magenta" />,
    image: "/public/placeholder.svg",
  },
  {
    title: "Coding",
    description: "I love creating solutions that solve real problems through code.",
    icon: <Code className="h-6 w-6 text-hope-magenta" />,
    image: "/public/placeholder.svg",
  },
  {
    title: "Music",
    description: "Playing piano and composing music is how I express myself creatively.",
    icon: <Music className="h-6 w-6 text-hope-magenta" />,
    image: "/public/placeholder.svg",
  },
  {
    title: "Creativity",
    description: "I enjoy exploring different forms of creative expression through art and design.",
    icon: <Palette className="h-6 w-6 text-hope-magenta" />,
    image: "/public/placeholder.svg",
  },
  {
    title: "Storytelling",
    description: "I express myself through poetry, art (drawing & painting), and the way I write code.",
    icon: <BookOpen className="h-6 w-6 text-hope-magenta" />,
    image: "/public/placeholder.svg",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title font-serif">About Me <span className="ml-2">💭</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-serif font-bold text-hope-magenta mb-4">My Story</h3>
              <p className="mb-4 text-muted-foreground">
                Hi there! I'm Hope, a creative software engineer with a passion for building beautiful, 
                functional applications that make a difference in people's lives.
              </p>
              <p className="mb-4 text-muted-foreground">
                My journey into tech started when I first discovered the magic of turning lines of code 
                into something people could interact with. That moment of creation sparked a love for 
                problem-solving and building that continues to drive me today.
              </p>
              <p className="text-muted-foreground">
                Outside of coding, you'll find me journaling my thoughts, playing piano, exploring 
                philosophy, or diving into a good book. I believe that being well-rounded makes me a 
                better engineer - it helps me approach problems from different angles and create more 
                human-centered solutions.
              </p>
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-hope-magenta pt-4">My Journey</h3>
            <div className="relative border-l-2 border-hope-pink/30 pl-8 space-y-8">
              {timelineItems.map((item, index) => (
                <div key={index} className={cn(
                  "relative timeline-item timeline-dot",
                  index !== timelineItems.length - 1 ? "pb-8" : ""
                )}>
                  <h4 className="font-serif font-bold text-xl flex items-center gap-2">
                    <span className="inline-block bg-hope-pink text-hope-magenta px-2 py-0.5 rounded-full text-sm">
                      {item.year}
                    </span>
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-hope-magenta mb-4">What I'm Passionate About</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {passions.map((passion, index) => (
                <Card key={index} className="overflow-hidden card-hover">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={passion.image} 
                      alt={passion.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-serif font-bold text-lg flex items-center gap-2 mb-2">
                      {passion.icon}
                      {passion.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {passion.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="pt-6">
              <Card className="bg-hope-softGray/50 border-none p-6">
                <h4 className="font-serif font-bold text-lg mb-3">More About Me</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">📝</span>
                    <span>I journal daily to reflect on my growth and ideas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🎹</span>
                    <span>I play piano and compose music in my free time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📚</span>
                    <span>I love reading books on philosophy and personal development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✍️</span>
                    <span>I write poetry to express my deeper thoughts and emotions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🌱</span>
                    <span>I'm constantly learning and growing both technically and personally</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
