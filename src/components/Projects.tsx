
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Super Mall Web Application',
      description: 'A comprehensive web application for mall management with real-time offer tracking and product management capabilities.',
      image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: [
        'Real-time offer management',
        'Product inventory tracking',
        'Admin dashboard',
        'User authentication'
      ],
      links: {
        github: 'https://github.com/keerthankumarM/super-mall',
        live: '#'
      }
    },
    {
      title: 'Operation Scheduler for Hospital Management',
      description: 'An intelligent scheduling system for hospital operations that optimizes doctor and facility availability.',
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b',
      techStack: ['Python', 'Django', 'PostgreSQL', 'Chart.js'],
      features: [
        'Scheduling automation',
        'Patient record management',
        'Doctor availability tracking',
        'Resource optimization'
      ],
      links: {
        github: 'https://github.com/keerthankumarM/hospital-scheduler',
        live: '#'
      }
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive data visualization platform that transforms complex datasets into meaningful insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      techStack: ['D3.js', 'React', 'TypeScript', 'Material UI'],
      features: [
        'Interactive charts',
        'Data filtering',
        'Customizable views',
        'Export capabilities'
      ],
      links: {
        github: 'https://github.com/keerthankumarM/data-viz-dashboard',
        live: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-secondary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my notable projects that showcase my technical skills and problem-solving abilities.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden flex flex-col backdrop-blur-sm bg-white/50 dark:bg-background/50 border-primary/10 group">
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
                <CardTitle className="group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight size={12} className="text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t border-border/30 pt-4">
                <Button variant="outline" size="sm" asChild className="group/btn">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github size={14} className="transition-transform duration-300 group-hover/btn:rotate-12" />
                    <span>Code</span>
                  </a>
                </Button>
                <Button size="sm" asChild className="group/btn relative overflow-hidden">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary/80 opacity-0 group-hover/btn:opacity-100 transition-opacity -z-10"></span>
                    <ExternalLink size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:translate-y-[-1px]" />
                    <span>Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="group relative overflow-hidden border-primary/20 hover:border-primary/50">
            <a href="https://github.com/keerthankumarM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
              <Github size={16} className="transition-transform duration-300 group-hover:rotate-12" />
              <span>See more projects on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
