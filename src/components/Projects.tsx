
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
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my notable projects that showcase my technical skills and problem-solving abilities.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs">
                      <ArrowRight size={12} className="text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <a href="https://github.com/keerthankumarM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={16} />
              <span>See more projects on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
