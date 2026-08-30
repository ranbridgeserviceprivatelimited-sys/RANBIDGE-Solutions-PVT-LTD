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

          {/* 💬 LET’S TALK */}
          <div
            ref={talkRef}
            data-cursor
            data-logo="true"
            className="
              p-12 rounded-3xl
              bg-gradient-to-br from-blue-600 to-indigo-700
              text-white
              shadow-2xl
              hover:scale-[1.02]
              transition-all
            "
          >
            <h4 className="text-3xl font-extrabold mb-4">
              Let’s Talk About Your Idea
            </h4>

            <p className="text-blue-100 leading-relaxed mb-8">
              Whether you’re planning internships, college collaborations,
              or a premium website — we’re here to help you shape it.
            </p>

            <ul className="space-y-3 mb-10 text-blue-50">
              <li>• Looking to sign an MoU with your institution?</li>
              <li>• Need industry-aligned internships?</li>
              <li>• Want a professional digital presence?</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:ranbidgesolutionspvtltd@gmail.com"
                className="px-6 py-3 rounded-xl bg-white text-blue-700 hover:bg-slate-50
                           font-semibold text-center transition"
              >
                Start a Conversation
              </a>

              <a
                href="https://wa.me/918247392437"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20
                           text-white font-semibold text-center transition border border-white/20"
              >
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-10 text-sm text-blue-200">
              {COMPANY_NAME}
            </p>
          </div>
        </div>

        {/* 🔹 FAQ SECTION */}
        <div ref={faqRef} className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h4>
            <p className="text-slate-700 font-medium">Common questions about our services and process.</p>
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
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
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
