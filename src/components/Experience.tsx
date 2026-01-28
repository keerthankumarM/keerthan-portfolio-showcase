
import { Calendar, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Experience</h2>
        {/* Updated: Fork Technologies added */}
        
        <div className="mt-12 grid gap-8 relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block"></div>
          
          {/* Fork Technologies - Most Recent */}
          <Card className="card-hover md:w-5/6 ml-auto relative backdrop-blur-sm bg-background/90 dark:bg-card/90 border-primary/20">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary hidden md:block"></div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/20 animate-pulse hidden md:block"></div>
            
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <Briefcase className="text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Frontend Engineer Intern</CardTitle>
                </div>
                <CardDescription className="flex items-center gap-1 text-muted-foreground">
                  <Calendar size={14} className="text-primary" />
                  <span>July 2025 - October 2025</span>
                </CardDescription>
              </div>
              <CardDescription className="font-medium text-primary/80">Fork Technologies Pvt. Ltd.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>
                    Worked with the Frontend engineering team to develop and maintain web applications
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>
                    Demonstrated eagerness to learn and strong problem-solving skills in daily development tasks
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>
                    Contributed positively to team collaboration with a professional and dedicated attitude
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>
                    Gained hands-on experience in building scalable frontend solutions
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Unified Mentor */}
          <Card className="card-hover md:w-5/6 mr-auto relative backdrop-blur-sm bg-background/90 dark:bg-card/90 border-primary/20">
            {/* Timeline dot */}
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary hidden md:block"></div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/20 animate-pulse hidden md:block"></div>
            
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <Briefcase className="text-primary" />
                  </div>
                  <CardTitle className="text-foreground">Frontend Development Intern</CardTitle>
                </div>
                <CardDescription className="flex items-center gap-1 text-muted-foreground">
                  <Calendar size={14} className="text-primary" />
                  <span>April 2025 - May 2025</span>
                </CardDescription>
              </div>
              <CardDescription className="font-medium text-primary/80">Unified Mentor</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>
                    Collaborated with a team of developers to create responsive and user-friendly web interfaces using React and Tailwind CSS
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>
                    Implemented interactive components and optimized front-end performance leading to 25% faster page load times
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>
                    Participated in code reviews and daily stand-up meetings, contributing to the improvement of development workflows
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>
                    Developed and maintained documentation for front-end components and design systems
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="card-hover md:w-5/6 mr-auto relative backdrop-blur-sm bg-background/90 dark:bg-card/90 border-primary/20">
            {/* Timeline dot */}
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary hidden md:block"></div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/20 animate-pulse hidden md:block"></div>
            
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 7V31M7 19H31M7 7H31V31H7V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <CardTitle className="text-foreground">IEEE Member</CardTitle>
                </div>
                <CardDescription className="flex items-center gap-1 text-muted-foreground">
                  <Calendar size={14} className="text-primary" />
                  <span>2025 - Present</span>
                </CardDescription>
              </div>
              <CardDescription className="font-medium text-primary/80">IEEE Student Branch</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>
                    Active member of the IEEE Student Branch, participating in technical workshops and events
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>
                    Collaborated with peers on research initiatives focused on emerging technologies
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>
                    Attended seminars and conferences to stay updated with the latest advancements in computer science and data science
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>
                    Participated in networking events, connecting with industry professionals and academic researchers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                  <span>
                    Contributed to community outreach programs aimed at promoting STEM education
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
