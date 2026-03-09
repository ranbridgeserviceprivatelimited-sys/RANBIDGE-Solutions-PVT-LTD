
import React from 'react';
import { SRSData } from '../types';

interface SRSViewerProps {
  markdown: string;
  data: SRSData;
  onReset: () => void;
}

const SRSViewer: React.FC<SRSViewerProps> = ({ markdown, data, onReset }) => {
  const handleWhatsApp = () => {
    const phoneNumber = "918247392437";
    const text = encodeURIComponent(`*NEW SRS DOCUMENT GENERATED*\n\n*Client:* ${data.client.clientName}\n*Company:* ${data.client.companyName}\n*Project Type:* ${data.client.projectType}\n\n_Please check the attached requirements for Ranbidge Solutions._`);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-6">
        <div className="bg-indigo-600 px-6 py-4 flex items-center justify-between text-white print:hidden">
          <div>
            <h2 className="text-lg font-bold">Generated Documentation</h2>
            <p className="text-xs text-indigo-100 uppercase tracking-widest font-medium">Software Requirements Specification</p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handleWhatsApp}
              className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center shadow-lg"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.483 2.247 2.246 3.484 5.232 3.484 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.761-1.493l-6.126 1.714zm6.052-3.487c1.554.919 3.064 1.385 4.779 1.385 5.394 0 9.782-4.387 9.782-9.783 0-2.612-1.021-5.068-2.873-6.92s-4.308-2.873-6.92-2.873c-5.396 0-9.785 4.389-9.785 9.784 0 1.794.507 3.407 1.467 4.908l-.961 3.511 3.491-.912zm9.734-6.326c-.229-.115-1.355-.668-1.565-.744-.21-.077-.363-.115-.515.115-.153.229-.592.744-.725.897-.133.153-.267.172-.496.057-.229-.115-.967-.356-1.841-1.135-.68-.606-1.138-1.355-1.272-1.584-.133-.229-.014-.353.1-.468.103-.104.229-.267.344-.401.115-.133.153-.229.229-.382.077-.153.038-.287-.019-.401-.057-.115-.515-1.24-.706-1.699-.187-.45-.377-.388-.515-.395-.133-.005-.287-.006-.44-.006-.153 0-.401.057-.611.287-.21.229-.802.783-.802 1.91 0 1.127.819 2.217.935 2.37.115.153 1.611 2.46 3.902 3.45.545.234.97.374 1.302.479.549.174 1.048.15 1.442.09.439-.067 1.355-.554 1.545-1.088.191-.534.191-.992.133-1.088-.058-.096-.21-.153-.44-.268z" />
              </svg>
              Send to WhatsApp
            </button>
            <button onClick={handlePrint} className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Print / Save PDF
            </button>
            <button onClick={onReset} className="bg-indigo-800 hover:bg-indigo-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              New Draft
            </button>
          </div>
        </div>

        <div className="p-8 md:p-12 prose prose-slate max-w-none prose-headings:text-slate-800 prose-headings:font-bold prose-p:text-slate-600 prose-li:text-slate-600">
          <div className="mb-12 border-b-2 border-slate-100 pb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-2">SRS DOCUMENT</h1>
                <p className="text-indigo-600 font-bold">Ranbidge Solutions Private Limited</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Document Date</p>
                <p className="text-lg font-bold text-slate-800">{new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-slate-400 uppercase font-bold text-[10px] mb-2 tracking-widest">Prepared For</p>
                <p className="font-bold text-slate-800 text-lg">{data.client.clientName}</p>
                <p className="text-slate-600">{data.client.companyName}</p>
                <p className="text-slate-600 mt-1">{data.client.email}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-slate-400 uppercase font-bold text-[10px] mb-2 tracking-widest">Project Reference</p>
                <p className="font-bold text-slate-800 text-lg">#{Math.floor(Math.random() * 900000) + 100000}</p>
                <p className="text-slate-600">Type: {data.client.projectType}</p>
                <p className="text-slate-600 mt-1">Status: Requirement Draft</p>
              </div>
            </div>
          </div>

          <div className="markdown-content whitespace-pre-wrap font-sans text-slate-700 leading-relaxed">
            {markdown}
          </div>

          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-8 uppercase tracking-widest text-center">12. APPROVAL & SIGN-OFF</h3>
            <div className="grid grid-cols-2 gap-12 mt-8">
              <div className="border-t border-slate-300 pt-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Client Authorization</p>
                <div className="flex flex-col space-y-2">
                  <div className="h-px bg-slate-200 w-full mb-1"></div>
                  <p className="text-sm text-slate-700">{data.client.clientName}</p>
                  <p className="text-[10px] text-slate-400">Authorized Signatory, {data.client.companyName}</p>
                </div>
              </div>
              <div className="border-t border-slate-300 pt-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Service Provider Approval</p>
                <div className="flex flex-col space-y-2">
                  <div className="h-px bg-slate-200 w-full mb-1"></div>
                  <p className="text-sm text-slate-700">Project Manager</p>
                  <p className="text-[10px] text-slate-400">Ranbidge Solutions Private Limited</p>
                </div>
              </div>
            </div>
            <p className="text-center text-[10px] text-slate-400 mt-12 italic">
              * This document is generated electronically based on requirements collected via the Ranbidge SRS Portal.
              The requirements are subject to technical feasibility review by the engineering department.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @media print {
          body { background: white; }
          .container { max-width: 100%; width: 100%; margin: 0; padding: 0; }
          .shadow-xl { border: none; box-shadow: none; }
          .prose { max-width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SRSViewer;
