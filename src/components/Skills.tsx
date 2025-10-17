
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Skills = () => {
  const technicalSkills = [
    { 
      name: 'Python', 
      proficiency: 90, 
      icon: '🐍',
      description: 'Data analysis, web development, and automation'
    },
    { 
      name: 'C', 
      proficiency: 85, 
      icon: '©️',
      description: 'System programming and algorithm implementation'
    },
    { 
      name: 'MySQL', 
      proficiency: 80, 
      icon: '🛢️',
      description: 'Database design and management'
    },
    { 
      name: 'Data Visualization', 
      proficiency: 80, 
      icon: '📊',
      description: 'Creating insightful data visualizations'
    },
    { 
      name: 'Machine Learning', 
      proficiency: 70, 
      icon: '🤖',
      description: 'Building predictive models and algorithms'
    },
    { 
      name: 'Git', 
      proficiency: 85, 
      icon: '📦',
      description: 'Version control and collaboration'
    }
  ];

  const softSkills = [
    {
      name: 'Problem Solving',
      description: 'Analytical approach to identify solutions to complex challenges',
      icon: '🧩'
    },
    {
      name: 'Team Collaboration',
      description: 'Effective communication and coordination in group settings',
      icon: '👥'
    },
    {
      name: 'Time Management',
      description: 'Efficient prioritization and completion of tasks under deadlines',
      icon: '⏱️'
    },
    {
      name: 'Communication',
      description: 'Clear articulation of technical concepts to various audiences',
      icon: '💬'
    },
    {
      name: 'Adaptability',
      description: 'Quick adjustment to new technologies and working environments',
      icon: '🔄'
    },
    {
      name: 'Critical Thinking',
      description: 'Objective analysis and evaluation to form reasoned judgments',
      icon: '🔍'
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-bl from-background via-primary/5 to-background -z-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">My Skills</h2>
        
        <Tabs defaultValue="technical" className="mt-8">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8 mx-auto bg-background/90 border border-primary/20">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill) => (
                <Card key={skill.name} className="card-hover backdrop-blur-sm bg-background/90 dark:bg-card/90 border-primary/20 overflow-hidden transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center gap-2 text-foreground">
                        <span className="text-xl">{skill.icon}</span>
                        {skill.name}
                      </CardTitle>
                      <span className="text-sm font-medium text-primary">{skill.proficiency}%</span>
                    </div>
                    <CardDescription className="text-muted-foreground">{skill.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="soft" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              {softSkills.map((skill) => (
                <Card key={skill.name} className="card-hover backdrop-blur-sm bg-background/90 dark:bg-card/90 border-primary/20 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex justify-center text-center mb-2">
                      <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                    </CardTitle>
                    <CardTitle className="text-center group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-foreground">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
