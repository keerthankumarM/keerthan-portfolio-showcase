
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Weather App',
      description: 'A modern weather application that provides real-time weather information with beautiful UI and interactive features.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b',
      techStack: ['React', 'TypeScript', 'Weather API', 'Tailwind CSS'],
      features: [
        'Real-time weather data',
        'Location-based forecasts',
        'Interactive weather maps',
        'Responsive design'
      ],
      links: {
        github: 'https://github.com/keerthankumarM/weather-app',
        live: 'https://weather-app-demo.vercel.app'
      }
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my notable projects that showcase my technical skills and problem-solving abilities.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden flex flex-col backdrop-blur-sm bg-background/95 dark:bg-card/95 border-primary/30 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-3 z-20">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-white/20 text-white border-none backdrop-blur-md text-xs">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <CardDescription className="mb-4 text-muted-foreground">{project.description}</CardDescription>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs group-hover:translate-x-1 transition-transform duration-300 text-muted-foreground">
                      <ArrowRight size={12} className="text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t border-border/30 pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleLinkClick(project.links.github)}
                  className="group/btn border-primary/20"
                >
                  <Github size={14} className="transition-transform duration-300 group-hover/btn:rotate-12 mr-1" />
                  <span>Code</span>
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => handleLinkClick(project.links.live)}
                  className="group/btn relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary/80 opacity-0 group-hover/btn:opacity-100 transition-opacity -z-10"></span>
                  <ExternalLink size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:translate-y-[-1px] mr-1" />
                  <span>View</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            onClick={() => handleLinkClick('https://github.com/keerthankumarM')}
            className="group relative overflow-hidden border-primary/20 hover:border-primary/50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
            <Github size={16} className="transition-transform duration-300 group-hover:rotate-12 mr-2" />
            <span>See more projects on GitHub</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
