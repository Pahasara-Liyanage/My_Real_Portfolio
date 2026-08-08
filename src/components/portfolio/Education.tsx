import { GraduationCap, Award, BookOpen } from 'lucide-react';

const educationList = [
  {
    degree: 'Bachelor of Technology (B. Tech) – Undergraduate (NVQ Level 6/7)',
    specialization: 'Bachelor of Technology in Computer Networks and Cloud Security',
    institution: 'University of Vocational Technology (UOVT), Ratmalana',
    icon: GraduationCap,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    degree: 'National Diploma in Information & Communication Technology (NVQ Level 5)',
    institution: 'College of Technology, Galle',
    icon: Award,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    degree: 'National Certificate of ICT Technician (NVQ Level 4)',
    institution: 'Vocational Training Authority, VTC Talbot Town, Galle',
    icon: Award,
    color: 'from-purple-500 to-pink-500'
  },
  {
    degree: 'Certificate in English & Spoken English',
    institution: 'The Ceylon Kingdom English Academy, Elpitiya (30-day residential camp)',
    icon: BookOpen,
    color: 'from-pink-500 to-rose-500'
  },
  {
    degree: 'Diploma in English',
    institution: 'British way English Academy',
    icon: BookOpen,
    color: 'from-rose-500 to-orange-500'
  },
  {
    degree: 'Primary & Secondary Education (Grade 1 - 13)',
    institution: "St. Aloysius' College, Galle",
    details: [
      'G.C.E. Advanced Level (Maths Stream): Combined Maths - S | Physics - S | Chemistry - S | English - C',
      'G.C.E. Ordinary Level (2B & 7C Passes)'
    ],
    icon: GraduationCap,
    color: 'from-orange-500 to-amber-500'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            <GraduationCap className="h-4 w-4 mr-2" />
            Education
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Academic Journey</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            My educational background and professional qualifications that have built my foundation in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {educationList.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div 
                key={index} 
                className="group relative p-4 sm:p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-4 sm:mb-6 flex items-center justify-center bg-gradient-to-br ${edu.color} text-white shadow-lg`}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                
                <h3 className="font-bold text-base sm:text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                
                {edu.specialization && (
                  <p className="text-sm font-medium text-primary mb-3">
                    {edu.specialization}
                  </p>
                )}
                
                <p className="text-muted-foreground text-sm font-medium flex items-start mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 mr-2 shrink-0 group-hover:bg-primary transition-colors"></span>
                  {edu.institution}
                </p>

                {edu.details && (
                  <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                    {edu.details.map((detail, idx) => (
                      <p key={idx} className="text-xs text-muted-foreground/80 leading-relaxed">
                        • {detail}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
