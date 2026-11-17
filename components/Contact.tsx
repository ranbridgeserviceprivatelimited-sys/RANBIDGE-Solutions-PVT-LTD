import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Plus,
  Minus
} from "lucide-react";
import { COMPANY_NAME, FAQ_DATA } from "../constants";
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
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        }
      );

      /* Contact cards */
      gsap.fromTo(
        cardsRef.current?.children,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );

      /* Let’s Talk section */
      gsap.fromTo(
        talkRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: talkRef.current,
            start: "top 80%",
          },
        }
      );

      /* FAQ Section */
      gsap.fromTo(
        faqRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
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
      className="relative pt-40 pb-24 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* 🔹 HEADER */}
        <div
          ref={headerRef}
          data-cursor
          data-logo="true"
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-blue-600 uppercase tracking-wider text-sm font-bold">
            Contact Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Let’s Build Something
            <span className="text-blue-600"> Meaningful Together</span>
          </h3>
          <p className="text-lg text-slate-700 font-medium leading-relaxed">
            Reach out to discuss internships, MoUs, institutional collaborations,
            or custom digital solutions.
          </p>
        </div>

        {/* 🔹 MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* 📞 CONTACT DETAILS */}
          <div ref={cardsRef} className="space-y-8">

            {/* EMAIL */}
            <div
              data-cursor
              data-logo="false"
              className="group flex items-start gap-5 p-8 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50
                         hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all rounded-2xl p-4">
                <Mail size={26} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Email
                </p>
                <a
                  href="mailto:ranbidgesolutionspvtltd@gmail.com"
                  className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  ranbidgesolutionspvtltd@gmail.com
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div
              data-cursor
              data-logo="false"
              className="group flex items-start gap-5 p-8 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50
                         hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all rounded-2xl p-4">
                <Phone size={26} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Phone
                </p>
                <a
                  href="tel:+918247392437"
                  className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  +91 82473 92437
                </a>
              </div>
            </div>

            {/* ADDRESS */}
            <div
              data-cursor
              data-logo="false"
              className="group flex items-start gap-5 p-8 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50
                         hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all rounded-2xl p-4">
                <MapPin size={26} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Office Address
                </p>
                <p className="text-lg font-bold text-slate-900">
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
              p-8 sm:p-10 rounded-3xl
              bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900
              text-white
              shadow-2xl
              hover:shadow-blue-500/20
              transition-all
            "
          >
            <div className="mb-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-500/30 text-blue-200 border border-blue-400/30 mb-3 inline-block">
                Project Development & Building
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
                Have a Project in Mind?
              </h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Tell us what you want to build—from IoT & Robotics hardware to custom web and mobile applications—or ask your technical questions below.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/60 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/15 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1.5">
                  Phone Number or Email
                </label>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="e.g. +91 98765 43210 or yourname@gmail.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/60 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/15 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1.5">
                  What type of project are you building?
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all cursor-pointer"
                >
                  <option value="IoT & Smart Hardware (Arduino / ESP32 / Raspberry Pi)">
                    IoT & Smart Hardware (Arduino / ESP32 / Raspberry Pi)
                  </option>
                  <option value="Robotics & Autonomous Systems (ROS / OpenCV / Bots)">
                    Robotics & Autonomous Systems (ROS / OpenCV / Bots)
                  </option>
                  <option value="Web Development & SaaS Applications (React / Node / Python)">
                    Web Development & SaaS Applications (React / Node / Python)
                  </option>
                  <option value="Mobile App Development (Flutter / React Native)">
                    Mobile App Development (Flutter / React Native)
                  </option>
                  <option value="Final-Year Academic / Capstone Project">
                    Final-Year Academic / Capstone Project
                  </option>
                  <option value="Research Paper Writing & Prototype (IEEE / Scopus)">
                    Research Paper Writing & Prototype (IEEE / Scopus)
                  </option>
                  <option value="Custom Business IT Solution">
                    Custom Business IT Solution
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1.5">
                  Questions & What You Want to Build
                </label>
                <textarea
                  rows={3}
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  placeholder="Ask questions about components, sensor requirements, timeline, budget, or describe your project idea..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/60 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/15 transition-all resize-none"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition-all shadow-md hover:scale-[1.02]"
              >
                <MessageCircle size={18} />
                Send via WhatsApp
              </a>

              <a
                href={getMailtoUrl()}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm transition-all shadow-md hover:scale-[1.02]"
              >
                <Mail size={18} />
                Submit via Email
              </a>
            </div>

            <p className="mt-6 text-xs text-blue-200/80 text-center">
              Our engineers typically review and reply to project inquiries within 24 hours.
            </p>
          </div>
        </div>

        {/* 🔹 FAQ SECTION */}
        <div ref={faqRef} className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h4>
            <p className="text-slate-700 font-medium">Common questions about our services, building projects, IoT, and process.</p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                  <span className="text-blue-600 bg-blue-50 p-1 rounded-lg">
                    {activeFaq === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-slate-600 leading-relaxed">
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
