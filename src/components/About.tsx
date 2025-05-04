
import { Book, Briefcase, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="card-hover">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <User className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">My Background</h3>
              <p className="text-muted-foreground">
                Passionate software developer with a keen interest in algorithmic problem-solving 
                and clean code practices.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Book className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-muted-foreground">
                Bachelor of Engineering (B.E),<br />
                Computer Science (Data Science)<br />
                Sri Venkateshwara College of Engineering
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <p className="text-muted-foreground">
                Frontend Development Intern<br />
                IEEE Member and active participant in<br />
                various tech community initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 bg-white rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Who Am I?</h3>
              <p className="text-muted-foreground mb-4">
                I am currently pursuing my Bachelor's in Computer Science with a specialization in Data Science, 
                expected to graduate in 2027.
              </p>
              <p className="text-muted-foreground mb-4">
                As an IEEE member, I actively participate in tech community events, workshops, and collaborative research opportunities.
              </p>
              <Button asChild className="mt-2">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 gradient-text">My Approach</h3>
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
