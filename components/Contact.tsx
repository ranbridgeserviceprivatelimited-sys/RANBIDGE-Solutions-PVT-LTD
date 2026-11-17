import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Plus,
  Minus
} from "lucide-react";
import { FAQ_DATA } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursorEffect } from "./useCursorEffect";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  useCursorEffect();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const talkRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    projectType: "IoT & Smart Hardware (Arduino / ESP32 / Raspberry Pi)",
    question: "",
  });

  const getWhatsappUrl = () => {
    const text = `Hello Ranbidge Team, I have a project inquiry!\n\n• Name: ${formData.name || "Prospective Client"}\n• Contact Info: ${formData.contact || "Not provided"}\n• Project Type: ${formData.projectType}\n• Questions / What I want to build:\n${formData.question || "I want to discuss building a custom project with your team."}`;
    return `https://wa.me/918247392437?text=${encodeURIComponent(text)}`;
  };

  const getMailtoUrl = () => {
    const subject = `Project Inquiry: ${formData.projectType} - ${formData.name || "Client"}`;
    const body = `Hello Ranbidge Team,\n\nI would like to inquire about building a project with your team:\n\n• Name: ${formData.name}\n• Contact: ${formData.contact}\n• Project Category: ${formData.projectType}\n\n• Project Details & Questions:\n${formData.question || "Please provide details regarding timeline, hardware/software stack, and quotation."}\n\nLooking forward to your guidance.`;
    return `mailto:ranbidgesolutionspvtltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Header */
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      /* Contact cards */
      gsap.fromTo(
        cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        }
      );

      /* Let’s Talk section */
      gsap.fromTo(
        talkRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: talkRef.current,
            start: "top 85%",
          },
        }
      );

      /* FAQ Section */
      gsap.fromTo(
        faqRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: faqRef.current,
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
      id="contact"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16 lg:space-y-20">

        {/* 🔹 HEADER */}
        <div
          ref={headerRef}
          data-cursor
          data-logo="true"
          className="max-w-3xl mx-auto text-center space-y-2 sm:space-y-4"
        >
          <h2 className="text-blue-600 uppercase tracking-wider text-xs sm:text-sm font-bold">
            Contact Us
          </h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Let’s Build Something
            <span className="text-blue-600"> Meaningful Together</span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto">
            Reach out to discuss internships, MoUs, institutional collaborations,
            or custom digital & hardware solutions.
          </p>
        </div>

        {/* 🔹 MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">

          {/* 📞 CONTACT DETAILS */}
          <div ref={cardsRef} className="space-y-4 sm:space-y-6">

            {/* EMAIL */}
            <div
              data-cursor
              data-logo="false"
              className="group flex items-center sm:items-start gap-3.5 sm:gap-5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md shadow-slate-200/50 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all rounded-xl sm:rounded-2xl p-3 sm:p-4 shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                  Email
                </p>
                <a
                  href="mailto:ranbidgesolutionspvtltd@gmail.com"
                  className="block text-sm sm:text-base lg:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors break-all"
                >
                  ranbidgesolutionspvtltd@gmail.com
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div
              data-cursor
              data-logo="false"
              className="group flex items-center sm:items-start gap-3.5 sm:gap-5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md shadow-slate-200/50 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all rounded-xl sm:rounded-2xl p-3 sm:p-4 shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                  Phone
                </p>
                <a
                  href="tel:+918247392437"
                  className="block text-sm sm:text-base lg:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  +91 82473 92437
                </a>
              </div>
            </div>

            {/* ADDRESS */}
            <div
              data-cursor
              data-logo="false"
              className="group flex items-start gap-3.5 sm:gap-5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md shadow-slate-200/50 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all rounded-xl sm:rounded-2xl p-3 sm:p-4 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                  Office Address
                </p>
                <p className="text-xs sm:text-sm lg:text-base font-semibold text-slate-900 leading-snug">
                  Opposite to RTA Office, Narasaraopet,
                  <br />
                  Palnadu District, Andhra Pradesh 522601
                </p>
              </div>
            </div>
          </div>

          {/* 💬 PROJECT INQUIRY & LET’S TALK */}
          <div
            ref={talkRef}
            data-cursor
            data-logo="true"
            className="
              p-5 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl
              bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900
              text-white
              shadow-xl
              hover:shadow-blue-500/20
              transition-all
            "
          >
            <div className="mb-4 sm:mb-6">
              <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-blue-500/30 text-blue-200 border border-blue-400/30 mb-2 sm:mb-3 inline-block">
                Project Development & Building
              </span>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-1.5 text-white">
                Have a Project in Mind?
              </h4>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                Tell us what you want to build—from IoT & Robotics hardware to custom web/mobile apps—or ask your technical questions below.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/15 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">
                  Phone Number or Email
                </label>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="e.g. +91 98765 43210 or name@gmail.com"
                  className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/15 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">
                  Project Domain / Category
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-slate-800 border border-white/20 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all cursor-pointer"
                >
                  <option value="IoT & Smart Hardware (Arduino / ESP32 / Raspberry Pi)">
                    IoT & Smart Hardware (Arduino / ESP32 / Raspberry Pi)
                  </option>
                  <option value="Robotics & Autonomous Systems (ROS / OpenCV / Bots)">
                    Robotics & Autonomous Systems (ROS / OpenCV / Bots)
                  </option>
                  <option value="Web Development & SaaS Applications (React / Node / Python)">
                    Web Development & SaaS (React / Node / Python)
                  </option>
                  <option value="Mobile App Development (Flutter / React Native)">
                    Mobile App Development (Flutter / React Native)
                  </option>
                  <option value="Final-Year Academic / Capstone Project">
                    Final-Year Academic / Capstone Project
                  </option>
                  <option value="Research Paper Writing & Prototype (IEEE / Scopus)">
                    Research Paper & Prototype (IEEE / Scopus)
                  </option>
                  <option value="Custom Business IT Solution">
                    Custom Business IT Solution
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">
                  Project Details / Questions
                </label>
                <textarea
                  rows={2}
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  placeholder="Ask questions about components, sensor requirements, timeline, budget, or describe your project idea..."
                  className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/15 transition-all resize-none"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.01] active:scale-95"
              >
                <MessageCircle size={16} />
                Send via WhatsApp
              </a>

              <a
                href={getMailtoUrl()}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.01] active:scale-95"
              >
                <Mail size={16} />
                Submit via Email
              </a>
            </div>

            <p className="mt-4 sm:mt-5 text-[11px] sm:text-xs text-blue-200/80 text-center">
              Our engineers typically review and reply to inquiries within 24 hours.
            </p>
          </div>
        </div>

        {/* 🔹 FAQ SECTION */}
        <div ref={faqRef} className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center space-y-1 sm:space-y-2">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">Frequently Asked Questions</h4>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">Common questions about our services, building projects, IoT, and process.</p>
          </div>

          <div className="space-y-2.5 sm:space-y-3.5">
            {FAQ_DATA.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 leading-snug">{faq.question}</span>
                  <span className="text-blue-600 bg-blue-50 p-1 sm:p-1.5 rounded-lg shrink-0">
                    {activeFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <div
                  className={`px-4 sm:px-5 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? "max-h-96 pb-4 sm:pb-5 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
