import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Twitter, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-800 py-6 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            {/* Company logo: hidden in mobile view, visible on sm+ */}
            <div className="hidden sm:flex justify-start">
              <img
                src="https://ik.imagekit.io/lg14qfjkg/RANBIDGE%20SOLUTIONS%20PRIVATE%20LIMITED.png?updatedAt=1766758168670"
                alt="Ranbidge Logo"
                className="h-10 w-10 md:h-12 md:w-12 object-contain bg-white rounded-full p-2 border border-slate-200 shadow-xs"
              />
            </div>
            <p className="text-slate-600 text-xs sm:text-sm text-center sm:text-left">
              Bridging the Gap Between Academics and Industry Excellence
            </p>
            {/* Social icons: includes Facebook, Instagram, LinkedIn, Twitter, YouTube, plus WhatsApp and Mail */}
            <div className="flex justify-center sm:justify-start items-center flex-wrap gap-2.5 sm:gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61578597456959"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 transition-colors p-2 bg-white rounded-full border border-slate-200 shadow-xs"
                title="Facebook"
              >
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/ranbidge_solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-pink-600 transition-colors p-2 bg-white rounded-full border border-slate-200 shadow-xs"
                title="Instagram"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ranbidge-solutions-private-limited-company-a98983376"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 transition-colors p-2 bg-white rounded-full border border-slate-200 shadow-xs"
                title="LinkedIn"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://x.com/RanbridgePvtLtd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-400 transition-colors p-2 bg-white rounded-full border border-slate-200 shadow-xs"
                title="Twitter / X"
              >
                <Twitter size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.youtube.com/@RSPL-Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-red-600 transition-colors p-2 bg-white rounded-full border border-slate-200 shadow-xs"
                title="YouTube"
              >
                <Youtube size={18} className="sm:w-5 sm:h-5" />
              </a>
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/918247392437"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-green-600 transition-colors p-2 bg-white rounded-full border border-slate-200 shadow-xs"
                title="WhatsApp"
              >
                <MessageCircle size={18} className="sm:w-5 sm:h-5 text-green-600" />
              </a>
              {/* Mail Icon */}
              <a
                href="mailto:ranbidgesolutionspvtltd@gmail.com"
                className="text-slate-600 hover:text-blue-600 transition-colors p-2 bg-white rounded-full border border-slate-200 shadow-xs"
                title="Email"
              >
                <Mail size={18} className="sm:w-5 sm:h-5 text-blue-600" />
              </a>
            </div>
          </div>

          {/* Quick Links: hidden in mobile view, visible on sm+ */}
          <div className="hidden sm:block space-y-4">
            <h3 className="text-lg font-bold text-slate-900 text-left">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm text-left">
                Home
              </Link>
              <Link to="/about" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm text-left">
                About
              </Link>
              <Link to="/services" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm text-left">
                Services
              </Link>
              <Link to="/domains" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm text-left">
                Domains
              </Link>
              <Link to="/internship" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm text-left">
                Internship
              </Link>
              <Link to="/contact" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm text-left">
                Contact
              </Link>
            </div>
          </div>

          {/* Services: hidden in mobile view, visible on sm+ */}
          <div className="hidden sm:block space-y-4">
            <h3 className="text-lg font-bold text-slate-900 text-left">Services</h3>
            <div className="space-y-2">
              <p className="text-slate-600 text-sm text-left">Internship Programs</p>
              <p className="text-slate-600 text-sm text-left">Skill Development</p>
              <p className="text-slate-600 text-sm text-left">Project-Based Learning</p>
              <p className="text-slate-600 text-sm text-left">Mentorship</p>
            </div>
          </div>

          {/* Contact Info: hidden in mobile view, visible on sm+ */}
          <div className="hidden sm:block space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-slate-900 text-left">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-start space-x-3">
                <Phone size={16} className="text-blue-600 flex-shrink-0" />
                <a
                  href="tel:+918247392437"
                  className="text-slate-600 text-sm hover:text-blue-600 transition-colors"
                >
                  +91 82473 92437
                </a>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <Mail size={16} className="text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:ranbidgesolutionspvtltd@gmail.com"
                  className="text-slate-600 text-sm hover:text-blue-600 transition-colors break-words"
                >
                  ranbidgesolutionspvtltd@gmail.com
                </a>
              </div>
              <div className="flex items-start justify-start space-x-3">
                <MapPin size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600 text-sm text-left">
                  Opposite to RTA Office, Narasaraopet, Palnadu District, Andhra Pradesh 522601
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-slate-200 mt-6 sm:mt-12 pt-4 sm:pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-slate-900 font-semibold text-xs sm:text-sm">
            <span className="text-slate-700"> &copy; 2025 Ranbidge Solutions Pvt Ltd. All rights reserved.</span>
            {/* Privacy Policy: hidden in mobile view, visible on sm+ */}
            <span className="hidden sm:inline text-slate-400">•</span>
            <Link 
              to="/privacy-policy" 
              className="hidden sm:inline-block text-blue-600 hover:text-blue-700 font-bold transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
