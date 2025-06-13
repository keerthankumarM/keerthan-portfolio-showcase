
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Code, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: 'Email',
      value: 'keerthankumarmm@gmail.com',
      link: 'mailto:keerthankumarmm@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: 'Phone',
      value: '+91 7975548704',
      link: 'tel:+917975548704'
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      label: 'LinkedIn',
      value: 'keerthan-kumar-m',
      link: 'https://linkedin.com/in/keerthan-kumar-m'
    },
    {
      icon: <Github className="h-5 w-5 text-primary" />,
      label: 'GitHub',
      value: 'keerthankumarM',
      link: 'https://github.com/keerthankumarM'
    },
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      label: 'LeetCode',
      value: 'keerthan_kumar_m',
      link: 'https://leetcode.com/u/keerthan_kumar_m'
    },
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      label: 'HackerRank',
      value: 'keerthankumarm',
      link: 'https://hackerrank.com/profile/keerthankumarm'
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a backend service
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-primary/5 to-background -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a question or want to collaborate on a project? Feel free to reach out using the form below or through my contact information.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="card-hover backdrop-blur-sm bg-background/90 dark:bg-card/90 border-primary/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-tr-full"></div>
            
            <CardContent className="pt-6 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/90 border-primary/20 focus-visible:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/90 border-primary/20 focus-visible:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background/90 border-primary/20 focus-visible:ring-primary/50"
                  />
                </div>
                
                <Button type="submit" className="w-full group relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="card-hover backdrop-blur-sm bg-background/90 dark:bg-card/90 border-primary/20 overflow-hidden">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Contact Information</h3>
                <div className="grid gap-4">
                  {contactDetails.map((item, index) => (
                    <a 
                      key={index} 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/5 transition-colors group"
                    >
                      <div className="bg-primary/20 p-2 rounded-md group-hover:scale-105 group-hover:bg-primary/30 transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors text-foreground">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover backdrop-blur-sm bg-background/90 dark:bg-card/90 border-primary/20 overflow-hidden">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Let's Connect</h3>
                <div className="space-y-4 relative">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-primary/10 via-blue-500/10 to-transparent rounded-full blur-xl"></div>
                  <p className="text-muted-foreground relative z-10">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  <p className="text-muted-foreground relative z-10">
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
