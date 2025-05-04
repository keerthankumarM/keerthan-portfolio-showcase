
import { Code, Database, Layout, Layers, BarChart, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Responsive UI implementation with modern frameworks and libraries',
      icon: <Layout className="h-10 w-10 text-primary" />,
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
      icon: <BarChart className="h-10 w-10 text-primary" />,
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
      icon: <Code className="h-10 w-10 text-primary" />,
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
      icon: <Database className="h-10 w-10 text-primary" />,
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
      icon: <Layers className="h-10 w-10 text-primary" />,
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
      icon: <Settings className="h-10 w-10 text-primary" />,
      features: [
        'Technology stack evaluation',
        'Implementation roadmapping',
        'Project planning',
        'Technical risk assessment'
      ]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Services</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I offer a range of services to help you build efficient software solutions, from frontend development to data science insights.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <CardTitle className="text-center">{service.title}</CardTitle>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
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
