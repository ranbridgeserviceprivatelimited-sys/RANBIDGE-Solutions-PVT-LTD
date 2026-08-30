import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-800 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex justify-center sm:justify-start">
              <img
                src="https://ik.imagekit.io/lg14qfjkg/RANBIDGE%20SOLUTIONS%20PRIVATE%20LIMITED.png?updatedAt=1766758168670"
                alt="Ranbidge Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain bg-white rounded-full p-2 border border-slate-200 shadow-xs"
              />
            </div>
            <p className="text-slate-600 text-sm text-center sm:text-left">
              Bridging the Gap Between Academics and Industry Excellence
            </p>
            <div className="flex justify-center sm:justify-start space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61578597456959" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors p-2 bg-white rounded-full border border-slate-200 shadow-xs">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/ranbidge_solutions/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors p-2 bg-white rounded-full border border-slate-200 shadow-xs">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ranbidge-solutions-private-limited-company-a98983376" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors p-2 bg-white rounded-full border border-slate-200 shadow-xs">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/RanbridgePvtLtd" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors p-2 bg-white rounded-full border border-slate-200 shadow-xs">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@RSPL-Academy" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors p-2 bg-white rounded-full border border-slate-200 shadow-xs">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 text-center sm:text-left">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm text-center sm:text-left">
                Home
              </Link>
              <Link to="/about" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm text-center sm:text-left">
                About
              </Link>
              <Link to="/services" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm text-center sm:text-left">
                Services
              </Link>
              <Link to="/domains" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm text-center sm:text-left">
                Domains
              </Link>
              <Link to="/internship" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm text-center sm:text-left">
                Internship
              </Link>
              <Link to="/contact" className="block text-slate-600 hover:text-blue-600 transition-colors text-sm text-center sm:text-left">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 text-center sm:text-left">Services</h3>
            <div className="space-y-2">
              <p className="text-slate-600 text-sm text-center sm:text-left">Internship Programs</p>
              <p className="text-slate-600 text-sm text-center sm:text-left">Skill Development</p>
              <p className="text-slate-600 text-sm text-center sm:text-left">Project-Based Learning</p>
              <p className="text-slate-600 text-sm text-center sm:text-left">Mentorship</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-slate-900 text-center sm:text-left">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone size={16} className="text-blue-600 flex-shrink-0" />
                <a
                  href="tel:+918247392437"
                  className="text-slate-600 text-sm hover:text-blue-600 transition-colors"
                >
                  +91 82473 92437
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail size={16} className="text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:ranbidgesolutionspvtltd@gmail.com"
                  className="text-slate-600 text-sm hover:text-blue-600 transition-colors break-words"
                >
                  ranbidgesolutionspvtltd@gmail.com
                </a>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MapPin size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600 text-sm text-center sm:text-left">
                 Opposite to RTA Office, Narasaraopet, Palnadu District, Andhra Pradesh 522601
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-900 font-semibold text-xs sm:text-sm">
            <span className="text-black"> &copy; 2025 Ranbidge Solutions Pvt Ltd. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <Link 
              to="/privacy-policy" 
              className="text-blue-600 hover:text-blue-700 font-bold transition-colors"
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
