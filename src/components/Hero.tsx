import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Code2 } from 'lucide-react';
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
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-teal-600/20 animate-code-flow"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping delay-1000"></div>
      </div>
      
      {/* Modern code decoration */}
      <div className="hidden lg:block absolute top-20 left-10 font-mono text-sm opacity-30 text-purple-300">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4" />
            <span>&lt;Developer&gt;</span>
          </div>
          <div className="ml-6 text-xs text-blue-300">passion: true;</div>
          <div className="ml-6 text-xs text-teal-300">innovation: 100%;</div>
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-40 right-10 font-mono text-sm opacity-30 text-purple-300">
        <div className="space-y-2">
          <div className="text-xs text-blue-300">creativity.level = 'MAX';</div>
          <div className="flex items-center gap-2">
            <span>&lt;/Developer&gt;</span>
            <Sparkles className="h-4 w-4" />
          </div>
        </div>
      </div>
      
      <div className="container relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 h-screen pt-20">
        <div className="flex-1 text-center md:text-left animate-fade-in">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                <h2 className="text-xl md:text-2xl font-medium text-purple-300">Hello, I'm</h2>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                Keerthan Kumar M
              </h1>
              <div className="text-xl md:text-2xl font-medium text-slate-300 mb-6 min-h-[3rem] flex items-center justify-center md:justify-start">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="relative inline-block group">
                    <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                      Software Developer
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                  <span className="text-purple-300">•</span>
                  <span className="relative inline-block group">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Data Science Enthusiast
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="relative min-h-[4rem] p-4 bg-slate-800/50 border border-purple-500/20 rounded-xl backdrop-blur-sm shadow-lg">
              <div className="absolute top-2 left-3 flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <div className="mt-4 min-h-[2rem] flex items-start">
                <p className="font-mono text-sm md:text-base text-slate-200 break-words">
                  <span className="text-purple-400">→</span> {typingText}
                  <span className="animate-blink-caret border-r-2 border-purple-400 ml-1"></span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <Button 
                className="group relative overflow-hidden shadow-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 text-white px-8 py-3 text-lg" 
                asChild
              >
                <a href="#contact">
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-purple-400/30 hover:border-purple-400/60 bg-slate-800/30 hover:bg-slate-700/50 text-purple-300 hover:text-purple-200 shadow-xl backdrop-blur-sm px-8 py-3 text-lg" 
                asChild
              >
                <a href="#projects">
                  <Code2 className="mr-2 h-5 w-5" />
                  View Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Enhanced glow effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-blue-500/40 rounded-full blur-2xl animate-pulse group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
            
            <div className="w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden border-4 border-gradient-to-r from-purple-400 via-pink-400 to-blue-400 shadow-2xl relative z-10 bg-slate-800 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="https://i.postimg.cc/PqqdGySg/IMG-20250522-WA0019.jpg" 
                alt="Keerthan Kumar M" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 filter brightness-110 contrast-110 saturate-110"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            
            {/* Enhanced badges */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-xl border-4 border-slate-800 group-hover:rotate-12 transition-transform duration-300">
              <div className="text-center">
                <div className="text-xs">IEEE</div>
                <div className="text-xs">Member</div>
                <div className="text-[10px] opacity-80">2025</div>
              </div>
            </div>
            <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white shadow-xl border-4 border-slate-800 group-hover:-rotate-12 transition-transform duration-300">
              <span className="text-xs font-bold">DEV</span>
            </div>
            <div className="absolute top-1/4 -right-8 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white shadow-lg border-2 border-slate-800 animate-bounce">
              <Sparkles className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 group z-10"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium text-purple-300 group-hover:text-purple-200 transition-colors">Explore More</span>
        <div className="p-2 rounded-full bg-purple-600/20 border border-purple-400/30 backdrop-blur-sm group-hover:bg-purple-600/30 transition-colors">
          <ArrowDown className="text-purple-300 h-5 w-5 group-hover:text-purple-200 transition-colors" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
