
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Code, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

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
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a question or want to collaborate on a project? Feel free to reach out using the form below or through my contact information.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
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
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
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
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
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
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="grid gap-4">
                {contactDetails.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-md">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <p className="text-muted-foreground">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
