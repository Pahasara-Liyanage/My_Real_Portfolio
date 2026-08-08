import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Data Entry Operator',
    company: 'OREL Corporation (Private) Limited - Colombo',
    period: '2025',
    description: 'Managed data entry and organizational tasks efficiently.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Freelance Web Developer & Graphic Designer',
    company: 'Self-Employed',
    period: '2024 - Present',
    description: 'Designed logos, social media posts, and photo frames. Developed responsive websites using the latest frameworks.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'ICT Support & Administrative Trainee',
    company: 'Road Development Authority - Galle',
    period: 'June 2023 - Dec 2023',
    description: 'Completed six months of job training focusing on ICT support and administrative tasks.',
    color: 'from-amber-500 to-orange-500'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-accent/30 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col items-center mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            <Briefcase className="h-4 w-4 mr-2" />
            Experience
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Work History</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            My professional journey and the roles that have shaped my skills in ICT, development, and design.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:ml-7 sm:before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent pl-2 sm:pl-0">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 150}ms` }}>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-gradient-to-r ${exp.color} text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}>
                <Briefcase className="h-4 w-4" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 sm:p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <h3 className="font-bold text-lg sm:text-xl text-foreground">{exp.title}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary whitespace-nowrap">
                    <Calendar className="w-3 h-3 mr-1" />
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-muted-foreground font-medium mb-4 flex items-center">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mr-2`}></span>
                  {exp.company}
                </h4>
                <p className="text-muted-foreground/90 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
