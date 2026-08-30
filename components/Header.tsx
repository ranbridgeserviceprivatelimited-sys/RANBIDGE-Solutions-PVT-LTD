import React, { useState, useEffect, useRef } from "react";
import { Facebook, Instagram, Linkedin, Phone, Twitter, Youtube, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOnHero, setIsOnHero] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const iconsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  /* Scroll hide / show */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 100));
      setLastScrollY(currentScrollY);
      setIsOnHero(currentScrollY < window.innerHeight - 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* Opening animations */
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      iconsRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(
        navRef.current,
        { scale: 0.9, opacity: 0, filter: "blur(8px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.7 },
        "-=0.4"
      )
      .fromTo(
        logoRef.current,
        { scale: 0.85, rotation: -5, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        menuItemsRef.current?.querySelectorAll(".nav-link"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5 },
        "-=0.3"
      );
  }, []);

  /* Magnetic hover for nav buttons */
  useEffect(() => {
    const items = menuItemsRef.current?.querySelectorAll(".nav-link");
    if (!items) return;

    const cleanupFns: Array<() => void> = [];

    items.forEach((item) => {
      const move = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = item.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left - rect.width / 2;
        const y = mouseEvent.clientY - rect.top - rect.height / 2;

        gsap.to(item, { x: x * 0.25, y: y * 0.25, duration: 0.3 });
      };

      const leave = () => {
        gsap.to(item, { x: 0, y: 0, duration: 0.3 });
      };

      item.addEventListener("mousemove", move);
      item.addEventListener("mouseleave", leave);

      cleanupFns.push(() => {
        item.removeEventListener("mousemove", move);
        item.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  const handleIconHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { scale: 1.15, rotation: 6, duration: 0.3 });
  };

  const handleIconLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { scale: 1, rotation: 0, duration: 0.3 });
  };

  return (
    <header
      className={`fixed top-6 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* 🔝 SOCIAL + CONTACT */}
        <div ref={iconsRef} className="grid grid-cols-3 items-center px-4 md:px-28 mb-4">
          <div className="flex gap-2 md:gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61578597456959"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              className={`p-1.5 md:p-2 rounded-full transition-colors ${isOnHero ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400 hover:bg-slate-700"
                }`}
            >
              <Facebook size={16} className="md:size-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/ranbidge-solutions-private-limited-company-a98983376"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              className={`p-1.5 md:p-2 rounded-full transition-colors ${isOnHero ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400 hover:bg-slate-700"
                }`}
            >
              <Linkedin size={16} className="md:size-6" />
            </a>

            <a
              href="https://www.instagram.com/rspl_academy?igsh=MXE3NWY3ZmNiNmtucg=="
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              className={`p-1.5 md:p-2 rounded-full transition-colors ${isOnHero ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400 hover:bg-slate-700"
                }`}
            >
              <Instagram size={16} className="md:size-6" />
            </a>

            <a
              href="https://x.com/RanbridgePvtLtd"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              className={`p-1.5 md:p-2 rounded-full transition-colors ${isOnHero ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400 hover:bg-slate-700"
                }`}
            >
              <Twitter size={16} className="md:size-6" />
            </a>

            <a
              href="https://www.youtube.com/@RSPL-Academy"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
              className={`p-1.5 md:p-2 rounded-full transition-colors ${isOnHero ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400 hover:bg-slate-700"
                }`}
            >
              <Youtube size={16} className="md:size-6" />
            </a>
          </div>

          <div />

          <div className="flex justify-end">
            <a
              href="tel:+918247392437"
              className={`flex items-center gap-1.5 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm transition-colors ${isOnHero ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400 hover:bg-slate-700"
                }`}
            >
              <Phone size={16} className="md:size-6" />
              <span className="hidden sm:inline">+91 82473 92437</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>

        {/* 🔽 NAVBAR */}
        <div ref={navRef} className="bg-slate-900/85 backdrop-blur-md rounded-full shadow-xl shadow-blue-950/20 px-4 sm:px-6 py-2.5 border border-slate-700/60 w-full lg:w-fit lg:mx-auto">
          <div ref={menuItemsRef} className="flex items-center justify-between lg:justify-center gap-3 sm:gap-4 lg:gap-5 w-full">

            {/* DESKTOP LEFT BUTTONS */}
            <nav className="hidden lg:flex items-center gap-2 sm:gap-3 lg:gap-4">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/services", label: "Services" }
              ].map((item, i) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={i}
                    to={item.path}
                    className={`nav-link relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-white font-bold bg-blue-500/10"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0.5 left-3 right-3 h-[3px] bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 ${
                        isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* LOGO - Center */}
            <div className="flex justify-center items-center px-1 sm:px-2">
              <Link to="/" className="flex items-center">
                <img
                  ref={logoRef}
                  src="https://ik.imagekit.io/lg14qfjkg/RANBIDGE%20SOLUTIONS%20PRIVATE%20LIMITED.png"
                  alt="Ranbidge Logo"
                  className="h-10 lg:h-11 object-contain brightness-0 invert hover:scale-105 transition-transform"
                />
              </Link>
            </div>

            {/* DESKTOP RIGHT BUTTONS */}
            <nav className="hidden lg:flex items-center gap-2 sm:gap-3 lg:gap-4">
              {[
                { path: "/domains", label: "Domains" },
                { path: "/internship", label: "Internship" },
                { path: "/contact", label: "Contact" }
              ].map((item, i) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={i}
                    to={item.path}
                    className={`nav-link relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-white font-bold bg-blue-500/10"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0.5 left-3 right-3 h-[3px] bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 ${
                        isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-full transition-colors ${isOnHero ? "bg-blue-600 text-white" : "bg-slate-800 text-blue-400 hover:bg-slate-700"}`}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-xl overflow-hidden">
            <nav className="flex flex-col p-4 space-y-3">
              {["/", "/about", "/services", "/domains", "/internship", "/contact"].map((path, i) => {
                const isActive = location.pathname === path;
                return (
                  <Link
                    key={i}
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-colors font-medium ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
