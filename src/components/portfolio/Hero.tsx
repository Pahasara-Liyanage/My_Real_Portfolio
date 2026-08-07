import { Mail, Phone, MapPin, User } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center max-w-6xl">
        <div className="md:col-span-7 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Available for Work
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Hi, I'm <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Rasheen Pahasara
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Web Developer & Graphic Designer
          </h2>
          
          <p className="text-lg text-muted-foreground/90 leading-relaxed max-w-2xl">
            A passionate and results-oriented ICT professional with NVQ Level 4 & 5 qualifications. Skilled in graphic design, software development, computer networking, and hardware solutions, with the ability to combine technical expertise and creative thinking to deliver effective digital solutions.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Contact Me
            </a>
            <a href="#experience" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              View Work
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-8 pt-8 border-t border-border">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>pahasaraliyanage2002@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>076 8401477 | 072 2749084</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>661/A, Delgahawatta Rd, Thunadahena, Koratota, Kaduwela.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center animate-in fade-in zoom-in duration-700 delay-200">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary/40 to-blue-500/40 p-2 flex items-center justify-center overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/20">
            {/* Placeholder for Profile Picture */}
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden relative">
               <User className="w-32 h-32 text-primary/50" />
               <div className="absolute inset-0 bg-primary/5 hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
