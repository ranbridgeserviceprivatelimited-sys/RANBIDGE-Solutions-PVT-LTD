import React, { useEffect, useRef } from 'react';
import { ExternalLink, Rocket, Award, Users, CheckCircle2, Code, Clock, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const Internship: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(heroRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
      .fromTo(
        cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(ctaRef.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6 }, '-=0.2');
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "1:1 Expert Mentorship",
      description: "Direct guidance from seasoned software engineers to review your code and guide your career development."
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-400" />,
      title: "Real-World Projects",
      description: "Build production-ready applications with modern tech stacks like Python, React, Flask, and PostgreSQL."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: "Verified Certification",
      description: "Earn standardized internship completion certificates that enhance your resume and professional portfolio."
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-400" />,
      title: "Flexible Commitment",
      description: "1–2 hours daily commitment carefully crafted to complement your regular college academic schedules."
    }
  ];

  const highlights = [
    "Structured weekly learning outcomes",
    "Hands-on mini and capstone projects",
    "No disruption to regular academic timetables",
    "Continuous feedback & assessment loops"
  ];

  return (
    <section className="pt-36 pb-24 bg-transparent page-break min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* HERO SECTION */}
        <div ref={heroRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6">
            <Rocket size={16} /> Industry-Ready Internship Program
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Accelerate Your Technical Career With <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Hands-On Practical Learning
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Gain industry exposure, build real-world software applications, and get personalized 1-on-1 mentorship designed to bridge the gap between academia and industry expectations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://ranbidge-intern-4djb.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-105"
            >
              Explore Internship Portal
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="bg-slate-800/80 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DETAILED HIGHLIGHTS & ROADMAP SECTION */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-slate-800 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Why Choose Our Internship Experience?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              We focus on ethical engagement, practical skill development, and real project delivery. Every participant receives tailored guidance to transform technical concepts into professional execution.
            </p>
            <div className="space-y-4">
              {highlights.map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-400 flex-shrink-0" size={20} />
                  <span className="text-slate-200 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-purple-900/30 rounded-3xl p-8 md:p-10 border border-blue-900/40 shadow-xl relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-4">Structured Internship Tracks</h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Explore specialized domains including Full Stack Web Development, Python Engineering, API Integration, and Cloud Deployments.
            </p>

            <div className="space-y-3 mb-8">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                <span className="text-white font-semibold">Python Full Stack Engineering</span>
                <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full font-medium">6–8 Weeks</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                <span className="text-white font-semibold">Web App Development (Flask & React)</span>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full font-medium">4–6 Weeks</span>
              </div>
            </div>

            <a
              href="https://ranbidge-intern-4djb.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold transition-colors"
            >
              View all tracks on Internship Portal
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* BOTTOM CTA BANNER */}
        <div
          ref={ctaRef}
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to Start Your Internship Journey?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mb-8 leading-relaxed">
              Visit our dedicated Ranbidge Internship portal to register, explore active projects, and submit your application.
            </p>
            <a
              href="https://ranbidge-intern-4djb.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 hover:bg-slate-100 px-9 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:scale-105"
            >
              Explore Internship Portal
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Internship;