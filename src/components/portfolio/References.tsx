import { Users, Phone, MapPin, Building2, UserRound } from 'lucide-react';

const references = [
  {
    name: 'Mr. Chamindu Devaka',
    title: 'Lecturer in National Diploma ICT (NVQ level 5)',
    organization: 'COT - College of Technology, Kaluwella, Galle',
    phone: '071 449 4042',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'group-hover:border-blue-500/50',
    iconColor: 'text-blue-500'
  },
  {
    name: 'Mrs. N.A.D. Thushari Abewardana',
    title: 'Instructor in National Certificate ICT (NVQ level 4)',
    organization: 'VTA - Vocational Training Center, Talbot Town, Galle',
    phone: '077 905 8765',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'group-hover:border-purple-500/50',
    iconColor: 'text-purple-500'
  }
];

export default function References() {
  return (
    <section id="references" className="py-24 relative">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 -z-10 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center mb-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            <Users className="h-4 w-4 mr-2" />
            References
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Professional References</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            "I hereby certify that the above particulars given by me are true and correct to the best of my knowledge."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {references.map((ref, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${ref.borderColor}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${ref.color} flex items-center justify-center shrink-0`}>
                  <UserRound className={`h-7 w-7 ${ref.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {ref.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {ref.title}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Building2 className="h-5 w-5 shrink-0 text-muted-foreground/50 mt-0.5" />
                  <span className="text-sm leading-relaxed">{ref.organization}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 shrink-0 text-muted-foreground/50" />
                  <span className="text-sm font-medium">{ref.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-medium">
          <div className="flex items-center gap-4">
            <span>DATE: .......................................</span>
          </div>
          <div className="flex items-center gap-4">
            <span>SIGNATURE: .......................................</span>
          </div>
        </div>
      </div>
    </section>
  );
}
