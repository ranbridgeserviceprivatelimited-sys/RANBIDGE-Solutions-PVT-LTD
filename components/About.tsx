import React, { useEffect, useRef } from "react";
import {
  Eye,
  Target,
  GraduationCap,
  Building2,
  Briefcase,
  Layers,
  User,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        storyRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        visionRef.current?.children ? Array.from(visionRef.current.children) : [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative pt-40 pb-24
        bg-transparent
        overflow-hidden
      "
    >
      {/* SUBTLE DEPTH LAYER (VERY LIGHT) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.05),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-28">
        {/* STORY */}
        <div
          ref={storyRef}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-blue-600 uppercase tracking-wider text-sm font-bold">
            About Ranbidge
          </h2>

          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Bridging Education with
            <span className="text-blue-600"> Industry Reality</span>
          </h3>

          <p className="text-lg text-slate-900 font-semibold leading-relaxed">
            <strong>RANBIDGE Solutions Private Limited</strong> is built with a
            single purpose — to close the gap between academic learning and
            real-world industry expectations.
          </p>

          <p className="text-lg text-slate-900 font-semibold leading-relaxed">
            We partner with colleges, students, and organizations to deliver
            structured programs, live internships, and industry-aligned skill
            development.
          </p>
        </div>

        {/* WHO WE SERVE */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: <GraduationCap size={28} />,
              title: "Students",
              desc: "Hands-on exposure, career clarity, and job-ready skills.",
            },
            {
              icon: <Building2 size={28} />,
              title: "Educational Institutions",
              desc: "Improved employability outcomes and industry partnerships.",
            },
            {
              icon: <Briefcase size={28} />,
              title: "Industry Partners",
              desc: "Access to trained talent and project execution support.",
            },
            {
              icon: <Layers size={28} />,
              title: "Project Development & Building",
              desc: "End-to-end software solutions, real-world prototyping, and scalable product engineering.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                group bg-white border border-slate-200 shadow-lg shadow-slate-200/50
                rounded-2xl p-8
                hover:shadow-2xl hover:border-blue-500/50 hover:-translate-y-2
                transition-all duration-300 flex flex-col justify-between cursor-pointer
              "
            >
              <div>
                <div className="w-14 h-14 mb-6 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* VISION & MISSION */}
        <div
          ref={visionRef}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="bg-white border border-slate-200 rounded-2xl p-12 shadow-lg shadow-slate-200/50">
            <Eye className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-2xl font-bold text-slate-900 mb-4">
              Our Vision
            </h4>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                To become a trusted national bridge between education and industry,
                creating ethical, skilled, and future-ready professionals.
              </p>
              <p>
                <strong>RANBIDGE SOLUTIONS PRIVATE LIMITED</strong> specializes in delivering comprehensive IT services that bridge the gap between innovation and real-world impact, providing everything your business needs to thrive digitally.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-12 shadow-lg shadow-slate-200/50">
            <Target className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-2xl font-bold text-slate-900 mb-4">
              Our Mission
            </h4>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                To deliver practical learning experiences, real internships, and
                structured growth pathways aligned with industry needs.
              </p>
              <p>
                Our expertise spans across modern technology stacks including <strong>MERN, MEAN, LAMP</strong>, mobile development with <strong>Flutter and React Native</strong>, and cutting-edge AI solutions—your one-stop destination for all online IT services.
              </p>
            </div>
          </div>
        </div>

        {/* TEAM INTRODUCTION */}
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-slate-900">Our Expert Team</h3>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto font-medium">
              Meet the professionals behind <strong>RANBIDGE</strong> dedicated to delivering excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "R Gopinath Reddy",
                role: "CEO & Founder",
                image: "/ceo.jpg",
              },
              {
                name: "V Konda Reddy",
                role: "CFO & Co-Founder",
                image: "/cfo.jpg",
              },
              {
                name: "A.Naga Ravindra",
                role: "CTO",
              },
              {
                name: "B.Varun Sandesh",
                role: "COO",
              },
              {
                name: "Kakara Lavanya",
                role: "Chief Secretary",
                image: "/chief-secretary.jpg",
              },
              {
                name: "Devarapalli Charithardha",
                role: "HR Executive",
                image: "/hr-executive.jpeg",
              },
              {
                name: "Poornima",
                role: "Chief Marketing Officer",
                image: "/cmo.jpg",
              },
              {
                name: "R Nani Nayak",
                role: "Student Ambassador",
                image: "/student-ambassador.jpeg",
              },
              {
                name: "Kodeti Raghavendra",
                role: "Media Partner",
                image: "/kodeti-raghavendra.jpg",
              },
              {
                name: "Revanth",
                role: "Media Partner",
                image: "/revanth.jpg",
              }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4 border border-slate-200 bg-slate-100 flex items-center justify-center shadow-md">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <User className="w-24 h-24 text-slate-400 group-hover:text-blue-600 transition-all duration-500" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex flex-col justify-end p-6">
                    <h5 className="text-white font-bold">{member.name}</h5>
                    <p className="text-blue-300 text-sm font-medium">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
