
import { Calendar, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-12 grid gap-8">
          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="text-primary" />
                  <CardTitle>Frontend Development Intern</CardTitle>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>April 2025 - May 2025</span>
                </CardDescription>
              </div>
              <CardDescription>Unified Mentor</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Collaborated with a team of developers to create responsive and user-friendly web interfaces using React and Tailwind CSS
                </li>
                <li>
                  Implemented interactive components and optimized front-end performance leading to 25% faster page load times
                </li>
                <li>
                  Participated in code reviews and daily stand-up meetings, contributing to the improvement of development workflows
                </li>
                <li>
                  Developed and maintained documentation for front-end components and design systems
                </li>
                <li>
                  Assisted in troubleshooting cross-browser compatibility issues and implementing UI/UX improvements based on user feedback
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 7V31M7 19H31M7 7H31V31H7V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <CardTitle>IEEE Member</CardTitle>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>2025 - Present</span>
                </CardDescription>
              </div>
              <CardDescription>IEEE Student Branch</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Active member of the IEEE Student Branch, participating in technical workshops and events
                </li>
                <li>
                  Collaborated with peers on research initiatives focused on emerging technologies
                </li>
                <li>
                  Attended seminars and conferences to stay updated with the latest advancements in computer science and data science
                </li>
                <li>
                  Participated in networking events, connecting with industry professionals and academic researchers
                </li>
                <li>
                  Contributed to community outreach programs aimed at promoting STEM education
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
