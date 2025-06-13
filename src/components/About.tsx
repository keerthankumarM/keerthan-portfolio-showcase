
import { Book, Briefcase, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="section-container relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="card-hover backdrop-blur-sm bg-background/90 dark:bg-card/90 border-primary/20 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="pt-6 text-center relative z-10">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <User className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">My Background</h3>
              <p className="text-muted-foreground">
                Passionate software developer with a keen interest in algorithmic problem-solving 
                and clean code practices.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover backdrop-blur-sm bg-background/90 dark:bg-card/90 border-primary/20 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="pt-6 text-center relative z-10">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Book className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Education</h3>
              <p className="text-muted-foreground">
                Bachelor of Engineering (B.E),<br />
                Computer Science (Data Science)<br />
                Sri Venkateshwara College of Engineering
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover backdrop-blur-sm bg-background/90 dark:bg-card/90 border-primary/20 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="pt-6 text-center relative z-10">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Experience</h3>
              <p className="text-muted-foreground">
                Frontend Development Intern<br />
                IEEE Member and active participant in<br />
                various tech community initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 backdrop-blur-sm bg-background/90 dark:bg-card/90 border border-primary/20 rounded-xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-primary/20 to-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Who Am I?</h3>
              <p className="text-muted-foreground mb-4">
                I am currently pursuing my Bachelor's in Computer Science with a specialization in Data Science, 
                expected to graduate in 2027.
              </p>
              <p className="text-muted-foreground mb-4">
                As an IEEE member, I actively participate in tech community events, workshops, and collaborative research opportunities.
              </p>
              <Button asChild className="mt-2 group relative overflow-hidden">
                <a href="#contact">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
                  Get In Touch
                </a>
              </Button>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">My Approach</h3>
              <p className="text-muted-foreground mb-4">
                I'm deeply passionate about crafting efficient and elegant software solutions. I believe in the power of clean code, 
                algorithmic thinking, and software craftsmanship to create applications that not only meet technical requirements but 
                provide exceptional user experiences.
              </p>
              <p className="text-muted-foreground mb-4">
                My journey in computer science has equipped me with a robust foundation in both theoretical concepts and practical 
                implementation. I constantly strive to expand my knowledge and skills, staying updated with the latest technologies 
                and best practices in the rapidly evolving tech landscape.
              </p>
              <p className="text-muted-foreground">
                Whether it's front-end development or data science projects, I approach each challenge with analytical thinking, 
                attention to detail, and a commitment to delivering high-quality results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
