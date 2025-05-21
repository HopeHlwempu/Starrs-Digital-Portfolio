
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type TechItem = {
  name: string;
  icon: string; // For now using an emoji as placeholder
  color?: string;
};

const frontendTech: TechItem[] = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "JavaScript", icon: "🟨", color: "#F7DF1E" },
  { name: "TypeScript", icon: "🔷", color: "#3178C6" },
  { name: "Next.js", icon: "▲", color: "#000000" },
  { name: "HTML", icon: "🌐", color: "#E34F26" },
  { name: "CSS", icon: "🎨", color: "#1572B6" },
  { name: "Tailwind CSS", icon: "🌊", color: "#38B2AC" },
  { name: "SASS", icon: "💅", color: "#CC6699" },
];

const backendTech: TechItem[] = [
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "Express", icon: "🚂", color: "#000000" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "Firebase", icon: "🔥", color: "#FFCA28" },
  { name: "REST API", icon: "🔗", color: "#FF6C37" }
];

const toolsTech: TechItem[] = [
  { name: "Git", icon: "📂", color: "#F05032" },
  { name: "GitHub", icon: "🐙", color: "#181717" },
  { name: "VS Code", icon: "📝", color: "#007ACC" },
  { name: "Figma", icon: "🖌️", color: "#F24E1E" },
  { name: "Framer", icon: "🃏", color: "#C21325" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "AWS", icon: "☁️", color: "#232F3E" },
  { name: "Vercel", icon: "▲", color: "#000000" },
];

const TechGrid = ({ items }: { items: TechItem[] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {items.map((tech) => (
      <Card 
        key={tech.name}
        className="flex flex-col items-center p-4 card-hover bg-white/80 backdrop-blur-sm"
      >
        <div className="text-2xl mb-2">{tech.icon}</div>
        <span className="font-quicksand font-medium text-sm">{tech.name}</span>
      </Card>
    ))}
  </div>
);

const ToolboxSection = () => {
  return (
    <section id="toolbox" className="py-20 bg-gradient-to-b from-white to-hope-softGray/30">
      <div className="section-container">
        <h2 className="section-title">My Tech Toolbox <span className="ml-2">🧰</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are the technologies and tools I use to bring ideas to life. I'm always
          expanding my skillset and learning new technologies.
        </p>
        
        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-hope-softGray">
            <TabsTrigger value="frontend" className="font-quicksand">Frontend</TabsTrigger>
            <TabsTrigger value="backend" className="font-quicksand">Backend</TabsTrigger>
            <TabsTrigger value="tools" className="font-quicksand">Tools & Others</TabsTrigger>
          </TabsList>
          
          <TabsContent value="frontend" className="animate-fade-in">
            <TechGrid items={frontendTech} />
          </TabsContent>
          
          <TabsContent value="backend" className="animate-fade-in">
            <TechGrid items={backendTech} />
          </TabsContent>
          
          <TabsContent value="tools" className="animate-fade-in">
            <TechGrid items={toolsTech} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ToolboxSection;
