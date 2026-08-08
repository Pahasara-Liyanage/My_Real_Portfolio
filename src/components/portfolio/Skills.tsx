import { Code, PenTool, Network, Monitor, Languages, Trophy, Globe, Activity, Gamepad2 } from 'lucide-react';

const technicalSkills = [
  { name: 'Software & Web Development', icon: Code, level: 85, color: 'text-blue-500' },
  { name: 'Graphic Design', icon: PenTool, level: 90, color: 'text-pink-500' },
  { name: 'Computer Networking', icon: Network, level: 80, color: 'text-purple-500' },
  { name: 'Hardware Solutions', icon: Monitor, level: 85, color: 'text-amber-500' },
];

const languages = [
  { name: 'Sinhala', proficiency: 'Fluent', icon: Globe },
  { name: 'English', proficiency: 'Good Proficiency', icon: Languages },
];

const extracurriculars = [
  { name: 'Inter-House Competitions', desc: 'Participated in various events during school years', icon: Trophy },
  { name: 'School Prefect Board', desc: 'Active member demonstrating leadership and responsibility', icon: Activity },
  { name: 'Chess Tournaments', desc: 'Participated in competitive chess matches', icon: Gamepad2 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-accent/20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            <Code className="h-4 w-4 mr-2" />
            Skills & Activities
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">What I Bring to the Table</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            My technical toolkit, linguistic capabilities, and active participation in extracurricular activities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
              <Monitor className="h-6 w-6 mr-3 text-primary" />
              Technical Skills
            </h3>
            <div className="grid gap-4">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="p-4 rounded-xl border border-border bg-card shadow-sm hover:border-primary/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-accent/50">
                          <Icon className={`h-5 w-5 ${skill.color}`} />
                        </div>
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-accent rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-current ${skill.color}`} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-12">
            {/* Languages */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                <Languages className="h-6 w-6 mr-3 text-primary" />
                Languages
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {languages.map((lang, index) => {
                  const Icon = lang.icon;
                  return (
                    <div key={index} className="flex items-center p-4 rounded-xl border border-border bg-card shadow-sm group hover:border-primary/50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold">{lang.name}</h4>
                        <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Extracurriculars */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                <Trophy className="h-6 w-6 mr-3 text-primary" />
                Extracurricular Activities
              </h3>
              <div className="space-y-4">
                {extracurriculars.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-start p-4 rounded-xl border border-border bg-card shadow-sm hover:border-primary/50 transition-colors">
                      <div className="mt-1 mr-4 text-primary bg-primary/10 p-2 rounded-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{activity.name}</h4>
                        <p className="text-sm text-muted-foreground">{activity.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
