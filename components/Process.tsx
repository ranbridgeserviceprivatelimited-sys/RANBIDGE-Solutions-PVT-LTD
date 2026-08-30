import React, { useEffect, useRef } from "react";
import { PROCESS_STEPS } from "../constants";
import { gsap } from "gsap";

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Magnetic hover effect for cards
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -30, scale: 1.1, duration: 0.5, ease: "back.out(2)" });
          if (lineRef.current) {
            // Curve the SVG line towards the active card
            const yTarget = 80; // Baseline
            const curveHeight = 40;
            const progress = i / (PROCESS_STEPS.length - 1);
            const midX = 100 + (progress * 800);

            gsap.to(lineRef.current, {
              attr: { d: `M 100 80 Q ${midX} ${yTarget - curveHeight} 900 80` },
              duration: 0.6,
              ease: "power2.out"
            });
          }
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.5, ease: "power2.out" });
          if (lineRef.current) {
            gsap.to(lineRef.current, {
              attr: { d: `M 100 80 Q 500 80 900 80` },
              duration: 0.6,
              ease: "power2.out"
            });
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-32 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-24 text-slate-900 font-heading uppercase tracking-tight">
          Development Roadmap
        </h2>

        {/* Desktop Roadmap */}
        <div className="hidden lg:block relative h-[300px] max-w-5xl mx-auto">
          {/* Interactive SVG Path */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1000 200">
            <path
              ref={lineRef}
              d="M 100 80 Q 500 80 900 80"
              fill="none"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="4"
              strokeDasharray="8 12"
              className="transition-all duration-300"
            />
            {/* Animated Glow on Line */}
            <path
              d="M 100 80 Q 500 80 900 80"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              strokeDasharray="8 12"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          <div className="flex justify-between items-start absolute top-0 left-0 w-full px-12">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="flex flex-col items-center text-center w-56 group cursor-pointer relative z-10"
              >
                {/* Node Dot */}
                <div className="w-10 h-10 rounded-full bg-white border-4 border-slate-300 mb-8 flex items-center justify-center text-blue-600 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                  <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:bg-white animate-ping" />
                </div>

                {/* Content Card */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 group-hover:border-blue-500/50 shadow-lg shadow-slate-200/50 transition-all duration-300">
                  <div className="text-blue-600 mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Roadmap */}
        <div className="lg:hidden space-y-10 pl-8 border-l-2 border-slate-300 border-dashed ml-4">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[53px] top-0 w-10 h-10 rounded-full bg-white border-4 border-slate-300 flex items-center justify-center text-blue-600 shadow-md">
                {step.icon}
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
