import { Mail, Phone, Linkedin, Instagram, Github, ExternalLink, Play } from 'lucide-react';
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#050505]"
    >
      <HeroBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6 items-center max-w-7xl relative z-10 py-16 sm:py-20 md:py-0">
        
        {/* ── Mobile Profile Photo (shown above text on mobile only) ── */}
        <div className="md:hidden flex justify-center hero-photo-enter">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56">
            {/* Ambient radial glow */}
            <div
              className="absolute -inset-10 rounded-full hero-ring-pulse pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,85,0,0.22) 15%, rgba(255,60,0,0.06) 45%, transparent 70%)',
              }}
            />
            {/* Rotating ring glow */}
            <div
              className="absolute -inset-2 rounded-full hero-ring-rotate pointer-events-none opacity-50"
              style={{
                background:
                  'conic-gradient(from 0deg, #ff5500, #ff8c00, #ffaa00, #ff5500, transparent, transparent, #ff3300, #ff5500)',
                filter: 'blur(16px)',
              }}
            />
            {/* Sharp ring */}
            <div
              className="absolute -inset-0.5 rounded-full hero-ring-rotate pointer-events-none"
              style={{
                background:
                  'conic-gradient(from 180deg, #ff5500, #ff8c00, #ffaa00, #ff5500, rgba(255,85,0,0.03), rgba(255,85,0,0.01), #ff3300, #ff5500)',
              }}
            >
              <div className="absolute inset-[3px] rounded-full bg-[#080808]" />
            </div>
            {/* Photo */}
            <div className="absolute inset-[4px] rounded-full overflow-hidden bg-[#080808]">
              <img
                src="/profile.jpg"
                alt="Rasheen Pahasara Liyanage"
                className="w-full h-full object-cover scale-[1.45] translate-y-5"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ── Left Content ── */}
        <div className="md:col-span-7 flex flex-col gap-4 sm:gap-5 text-center md:text-left items-center md:items-start">
          {/* Accent subtitle */}
          <div className="flex items-center gap-3 hero-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] shadow-[0_0_8px_rgba(255,85,0,0.8)] animate-pulse" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gray-400 font-medium">
              Hey I Am <span className="text-[#ff5500] font-semibold">Rasheen</span>
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black uppercase leading-[0.95] tracking-tight text-white hero-fade-in-delay-1">
            I Build
            <br />
            Experiences
            <br />
            That{' '}
            <span className="text-[#ff5500] hero-text-glow inline-block">Inspire</span>
          </h1>

          {/* Sub-title role */}
          <p className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider text-white/70 hero-fade-in-delay-1">
            Web Developer &amp; Graphic Designer
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-lg leading-relaxed hero-fade-in-delay-2">
            A passionate and results-oriented ICT professional with NVQ Level 4 &amp; 5
            qualifications. Skilled in graphic design, software development, computer
            networking, and hardware solutions, with the ability to combine technical
            expertise and creative thinking to deliver effective digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-5 mt-1 hero-fade-in-delay-2">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 sm:gap-3 bg-[#ff5500] text-white pl-5 sm:pl-7 pr-1.5 sm:pr-2 py-2 rounded-full font-bold uppercase text-xs sm:text-sm tracking-wider hover:bg-[#ff6600] transition-all duration-300 shadow-[0_0_25px_rgba(255,85,0,0.25)] hover:shadow-[0_0_45px_rgba(255,85,0,0.45)]"
            >
              View Work
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors backdrop-blur-sm">
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 sm:gap-3 text-white/80 font-semibold uppercase text-xs sm:text-sm tracking-wider hover:text-[#ff5500] transition-colors"
            >
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-[#ff5500]/60 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,85,0,0.2)]">
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 fill-current" />
              </span>
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center md:justify-start gap-8 sm:gap-10 mt-3 sm:mt-4 pt-4 sm:pt-5 border-t border-white/[0.06] hero-fade-in-delay-3 w-full">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white">10+</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-medium leading-tight">
                Projects
                <br />
                Completed
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white">5+</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-medium leading-tight">
                Happy
                <br />
                Clients
              </span>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-x-6 gap-y-1.5 sm:gap-y-2 mt-2 sm:mt-3 hero-fade-in-delay-4">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-500">
              <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#ff5500]/70 shrink-0" />
              <span className="truncate">pahasaraliyanage2002@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-500">
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#ff5500]/70 shrink-0" />
              <span>076 8401477 | 072 2749084</span>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center md:justify-start gap-3 mt-2 sm:mt-3 hero-fade-in-delay-4">
            <span className="text-[10px] uppercase tracking-widest text-gray-600 font-medium mr-1 sm:mr-2">
              Find Me
            </span>
            {[
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Github, label: 'GitHub' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-gray-500 hover:text-[#ff5500] hover:border-[#ff5500]/40 hover:bg-[#ff5500]/5 transition-all duration-300"
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Right — Profile Photo (Desktop only) ── */}
        <div className="hidden md:flex md:col-span-5 justify-center items-center hero-photo-enter">
          <div className="relative w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem]">
            {/* Ambient radial glow */}
            <div
              className="absolute -inset-14 rounded-full hero-ring-pulse pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,85,0,0.22) 15%, rgba(255,60,0,0.06) 45%, transparent 70%)',
              }}
            />
            {/* Rotating conic-gradient ring (glow layer) */}
            <div
              className="absolute -inset-3 rounded-full hero-ring-rotate pointer-events-none opacity-50"
              style={{
                background:
                  'conic-gradient(from 0deg, #ff5500, #ff8c00, #ffaa00, #ff5500, transparent, transparent, #ff3300, #ff5500)',
                filter: 'blur(22px)',
              }}
            />
            {/* Sharp ring */}
            <div
              className="absolute -inset-1 rounded-full hero-ring-rotate pointer-events-none"
              style={{
                background:
                  'conic-gradient(from 180deg, #ff5500, #ff8c00, #ffaa00, #ff5500, rgba(255,85,0,0.03), rgba(255,85,0,0.01), #ff3300, #ff5500)',
              }}
            >
              <div className="absolute inset-[4px] rounded-full bg-[#080808]" />
            </div>
            {/* Photo */}
            <div className="absolute inset-[5px] rounded-full overflow-hidden bg-[#080808]">
              <img
                src="/profile.jpg"
                alt="Rasheen Pahasara Liyanage"
                className="w-full h-full object-cover scale-[1.45] translate-y-5"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Vertical side text */}
            <div className="hidden lg:flex absolute -right-20 top-1/2 -translate-y-1/2 rotate-90 origin-center pointer-events-none">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-medium whitespace-nowrap">
                Creating Impact Through Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
