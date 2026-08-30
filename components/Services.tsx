import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const partnershipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      // Service cards animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );

      // CTA section animation
      gsap.fromTo(
        partnershipRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: partnershipRef.current,
            start: "top 85%",
          },
        }
      );
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={servicesRef}
      id="services"
      className="
        relative pt-20 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24
        bg-transparent
        overflow-hidden
      "
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
            Core Services
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6">
            Comprehensive Support for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Academic & Career Excellence</span>
          </h3>
          <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed">
            We provide structured, industry-aligned services that empower
            students, institutions, and professionals to succeed in today's
            competitive environment.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
        >
          {SERVICES.map((service, index) => {
            const colorSchemes = [
              { bg: "bg-blue-50", text: "text-blue-600", hoverBg: "group-hover:bg-blue-600" },
              { bg: "bg-purple-50", text: "text-purple-600", hoverBg: "group-hover:bg-purple-600" },
              { bg: "bg-emerald-50", text: "text-emerald-600", hoverBg: "group-hover:bg-emerald-600" },
              { bg: "bg-amber-50", text: "text-amber-600", hoverBg: "group-hover:bg-amber-600" },
              { bg: "bg-rose-50", text: "text-rose-600", hoverBg: "group-hover:bg-rose-600" },
              { bg: "bg-cyan-50", text: "text-cyan-600", hoverBg: "group-hover:bg-cyan-600" },
            ];
            const colors = colorSchemes[index % colorSchemes.length];
            
            return (
            <div
              key={index}
              className="
                bg-white
                p-6 sm:p-8
                rounded-2xl
                border border-slate-200
                shadow-lg shadow-slate-200/50
                hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300
                group cursor-pointer
              "
            >
              <div
                className={`
                  ${colors.bg}
                  ${colors.text}
                  w-12 h-12 sm:w-14 sm:h-14
                  rounded-2xl
                  flex items-center justify-center
                  mb-4 sm:mb-6
                  ${colors.hoverBg}
                  group-hover:text-white
                  transition-colors
                `}
              >
                {service.icon}
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                {service.title}
              </h4>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          )})}
        </div>

        {/* RESEARCH CTA */}
        <div
          ref={partnershipRef}
          className="
            mt-12 sm:mt-16 md:mt-20
            p-8 sm:p-12
            bg-white
            border border-slate-200
            rounded-2xl sm:rounded-3xl
            flex flex-col lg:flex-row
            items-center justify-between gap-6 sm:gap-8 lg:gap-10
            shadow-lg shadow-slate-200/50 hover:shadow-xl
            transition-all
          "
        >
          <div className="max-w-xl text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
              Research Paper Writing & Publication Support
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We assist students and faculty with research idea formulation,
              paper drafting, plagiarism correction, formatting, and submission
              guidance for IEEE, Scopus, and UGC-approved journals.
            </p>
          </div>

          <Link
            to="/contact"
            className="
              px-6 sm:px-8 py-3
              bg-blue-600
              text-white
              font-semibold
              rounded-xl
              hover:bg-blue-700
              hover:scale-105
              transition-all
              whitespace-nowrap text-sm sm:text-base
            "
          >
            Get Publication Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
