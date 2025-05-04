
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
      name: 'Docker', 
      proficiency: 75, 
      icon: '🐳',
      description: 'Container creation and management'
    },
    { 
      name: 'React', 
      proficiency: 70, 
      icon: '⚛️',
      description: 'Frontend application development'
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
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <Tabs defaultValue="technical" className="mt-8">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8 mx-auto">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill) => (
                <Card key={skill.name} className="card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        {skill.name}
                      </CardTitle>
                      <span className="text-sm font-medium text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <CardDescription>{skill.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="skill-bar mt-2">
                      <div className={`skill-progress progress-${skill.proficiency}`}></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="soft" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              {softSkills.map((skill) => (
                <Card key={skill.name} className="card-hover">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex justify-center text-center mb-2">
                      <span className="text-3xl">{skill.icon}</span>
                    </CardTitle>
                    <CardTitle className="text-center">{skill.name}</CardTitle>
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
