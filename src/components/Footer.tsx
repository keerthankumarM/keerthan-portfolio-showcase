
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Keerthan Kumar M</h2>
            <p className="text-background/80 text-sm">Software Developer | Data Science Enthusiast</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/keerthankumarM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/80 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a 
              href="https://www.linkedin.com/in/keerthan-kumar-m-793a97332?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtA%2Bz1vhkRaCdBxiRAy8ouA%3D%3D"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background/80 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a 
              href="mailto:keerthankumarmm@gmail.com" 
              className="text-background/80 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-background/20 text-center text-background/60 text-sm">
          <p>© {new Date().getFullYear()} Keerthan Kumar M. All rights reserved.</p>
          <p className="mt-1">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
