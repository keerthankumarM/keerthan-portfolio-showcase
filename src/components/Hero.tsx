
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const fullText = 'Building Efficient Software Solutions with Precision and Passion.';
  const typingSpeed = 80; // ms per character
  
  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      setTypingText(fullText.substring(0, currentIndex + 1));
      currentIndex++;
      
      if (currentIndex >= fullText.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-blue-900/10 dark:to-purple-900/10 animate-code-flow"></div>
      
      {/* Geometric shapes for modern look */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Code-like decoration elements */}
      <div className="hidden lg:block absolute top-20 left-10 font-mono text-sm opacity-20 text-primary">
        &lt;div className="hero"&gt;
      </div>
      <div className="hidden lg:block absolute bottom-40 right-10 font-mono text-sm opacity-20 text-primary">
        &lt;/div&gt;
      </div>
      
      <div className="container relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 h-screen pt-20">
        <div className="flex-1 text-center md:text-left animate-fade-in">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-medium mb-2 text-primary">Hello, I'm</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
                Keerthan Kumar M
              </h1>
              <div className="text-xl md:text-2xl font-medium text-foreground/80 mb-6">
                <span className="relative inline-block">
                  Software Developer
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50"></span>
                </span>
                <span className="mx-2">|</span>
                <span className="relative inline-block">
                  Data Science Enthusiast
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50"></span>
                </span>
              </div>
            </div>
            
            <div className="h-16 md:h-12 p-2 bg-foreground/5 border border-foreground/10 rounded-lg">
              <p className="font-mono text-sm md:text-base text-foreground/90">
                {typingText}
                <span className="animate-blink-caret border-r-2 border-primary ml-1"></span>
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <Button 
                className="group relative overflow-hidden shadow-lg" 
                asChild
              >
                <a href="#contact">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
                  Get In Touch
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-primary/20 hover:border-primary/50 shadow-lg" 
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl relative z-10 bg-background">
              <img 
                src="https://i.postimg.cc/Lh7PKMfy/IMG-20240229-181257-384.jpg" 
                alt="Keerthan Kumar M" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-tech-purple flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-background">
              IEEE<br/>Member
            </div>
            <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-tech-green flex items-center justify-center text-white shadow-lg border-2 border-background">
              <span className="text-xs font-bold">2025</span>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium text-primary/80 group-hover:text-primary transition-colors">Explore More</span>
        <ArrowDown className="text-primary h-5 w-5 group-hover:text-primary/80 transition-colors" />
      </a>
    </section>
  );
};

export default Hero;
