
import { Code, Database, Layout, Layers, BarChart, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Responsive UI implementation with modern frameworks and libraries',
      icon: <Layout className="h-12 w-12 text-primary" />,
      bgColor: 'from-blue-500/20 to-primary/10',
      features: [
        'UI/UX principles implementation',
        'Responsive design',
        'Framework guidance',
        'Performance optimization'
      ]
    },
    {
      title: 'Data Visualization',
      description: 'Transform complex data into clear, insightful visual representations',
      icon: <BarChart className="h-12 w-12 text-primary" />,
      bgColor: 'from-green-500/20 to-primary/10',
      features: [
        'Interactive charts',
        'Dashboard creation',
        'Data storytelling',
        'Real-time analytics'
      ]
    },
    {
      title: 'Code Review & Optimization',
      description: 'Improve code quality, readability, and performance with expert reviews',
      icon: <Code className="h-12 w-12 text-primary" />,
      bgColor: 'from-purple-500/20 to-primary/10',
      features: [
        'Code quality assessment',
        'Performance optimization',
        'Best practices implementation',
        'Documentation improvement'
      ]
    },
    {
      title: 'Data Science Support',
      description: 'Machine learning solutions and data-driven insights for your projects',
      icon: <Database className="h-12 w-12 text-primary" />,
      bgColor: 'from-yellow-500/20 to-primary/10',
      features: [
        'ML fundamentals',
        'Database integration',
        'Predictive modeling',
        'Interactive data apps'
      ]
    },
    {
      title: 'Software Architecture',
      description: 'Design scalable and maintainable software architectures',
      icon: <Layers className="h-12 w-12 text-primary" />,
      bgColor: 'from-red-500/20 to-primary/10',
      features: [
        'System design',
        'Microservices architecture',
        'API design',
        'Scalability solutions'
      ]
    },
    {
      title: 'Technical Consulting',
      description: 'Expert advice on technology choices and implementation strategies',
      icon: <Settings className="h-12 w-12 text-primary" />,
      bgColor: 'from-teal-500/20 to-primary/10',
      features: [
        'Technology stack evaluation',
        'Implementation roadmapping',
        'Project planning',
        'Technical risk assessment'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Services</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I offer a range of services to help you build efficient software solutions, from frontend development to data science insights.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="card-hover backdrop-blur-sm bg-background/90 dark:bg-card/90 border-primary/20 overflow-hidden relative group">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-background/80 to-background/30 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-center group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-center text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm group-hover:translate-x-1 transition-transform duration-300 text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
