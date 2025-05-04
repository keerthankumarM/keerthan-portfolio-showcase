
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
    <section id="home" className="min-h-screen flex items-center justify-center relative code-background">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
      <div className="container relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 pt-20">
        <div className="flex-1 text-center md:text-left animate-fade-in">
          <h2 className="text-xl md:text-2xl font-medium mb-2 text-primary">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Keerthan Kumar M
          </h1>
          <div className="text-xl md:text-2xl font-medium text-foreground/80 mb-6">
            Software Developer | Data Science Enthusiast
          </div>
          
          <div className="h-16 md:h-12">
            <p className="font-mono text-sm md:text-base text-foreground/90 mb-8">
              {typingText}
              <span className="animate-blink-caret border-r-2 border-primary ml-1"></span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <Button asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Keerthan Kumar M" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg">
              IEEE<br/>Member
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="text-primary" size={32} />
      </a>
    </section>
  );
};

export default Hero;
