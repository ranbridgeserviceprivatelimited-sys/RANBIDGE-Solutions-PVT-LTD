
import React from 'react';
import { FormStep, SRSData, ClientDetails } from '../types';

interface SRSFormProps {
  step: FormStep;
  data: SRSData;
  onUpdate: (newData: Partial<SRSData>) => void;
  onNext: () => void;
  onPrev: () => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const SRSForm: React.FC<SRSFormProps> = ({
  step,
  data,
  onUpdate,
  onNext,
  onPrev,
  onGenerate,
  isGenerating
}) => {
  const updateClient = (fields: Partial<ClientDetails>) => {
    onUpdate({ client: { ...data.client, ...fields } });
  };

  const toggleArrayItem = (key: keyof SRSData, item: string) => {
    const current = data[key] as string[];
    const next = current.includes(item)
      ? current.filter(i => i !== item)
      : [...current, item];
    onUpdate({ [key]: next });
  };

  const toggleTechStack = (category: keyof SRSData['techStack'], item: string) => {
    const current = data.techStack[category];
    const next = current.includes(item)
      ? current.filter(i => i !== item)
      : [...current, item];
    onUpdate({ techStack: { ...data.techStack, [category]: next } });
  };

  if (step === FormStep.CLIENT_INFO) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">1. Client Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Client Name</label>
            <input
              type="text"
              value={data.client.clientName}
              onChange={(e) => updateClient({ clientName: e.target.value })}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
            <input
              type="text"
              value={data.client.companyName}
              onChange={(e) => updateClient({ companyName: e.target.value })}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Organization"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <input
              type="email"
              value={data.client.email}
              onChange={(e) => updateClient({ email: e.target.value })}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={data.client.phone}
              onChange={(e) => updateClient({ phone: e.target.value })}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="+91..."
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
            <div className="flex gap-4">
              {['Website', 'Web App', 'Portal'].map((type) => (
                <button
                  key={type}
                  onClick={() => updateClient({ projectType: type as any })}
                  className={`flex-1 py-2 px-4 rounded-lg border transition-all ${data.client.projectType === type
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <button onClick={onNext} className="bg-indigo-600 text-white px-8 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Next: Website Type
          </button>
        </div>
      </div>
    );
  }

  if (step === FormStep.PROJECT_TYPE) {
    const websiteTypes = ['Company / Corporate', 'Portfolio', 'E-commerce', 'Educational / Internship', 'Blog / News', 'Custom'];
    const pages = ['Home', 'About Us', 'Services', 'Internship / Careers', 'Projects', 'Blog', 'Contact Us', 'FAQ', 'Privacy Policy', 'Terms'];
    const designs = ['Simple & Professional', 'Modern UI', 'Creative / Animated', 'Corporate Theme', 'Dark Mode', 'Light Mode', 'Mobile-First'];

    return (
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. Website Type & Pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {websiteTypes.map(t => (
              <label key={t} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${data.websiteType.includes(t) ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'bg-white border-slate-200'}`}>
                <input type="checkbox" className="hidden" checked={data.websiteType.includes(t)} onChange={() => toggleArrayItem('websiteType', t)} />
                <span className="text-sm font-medium">{t}</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. Pages Required</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {pages.map(p => (
              <label key={p} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${data.pages.includes(p) ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'bg-white border-slate-200'}`}>
                <input type="checkbox" className="hidden" checked={data.pages.includes(p)} onChange={() => toggleArrayItem('pages', p)} />
                <span className="text-sm font-medium">{p}</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. Design Preferences</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {designs.map(d => (
              <label key={d} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${data.designPreferences.includes(d) ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'bg-white border-slate-200'}`}>
                <input type="checkbox" className="hidden" checked={data.designPreferences.includes(d)} onChange={() => toggleArrayItem('designPreferences', d)} />
                <span className="text-sm font-medium">{d}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="flex justify-between pt-4 border-t">
          <button onClick={onPrev} className="text-slate-500 hover:text-slate-800 font-medium">Back</button>
          <button onClick={onNext} className="bg-indigo-600 text-white px-8 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Next: Features
          </button>
        </div>
      </div>
    );
  }

  if (step === FormStep.FUNCTIONALITY) {
    const features = ['Contact Form', 'Inquiry Form', 'Internship Application', 'Resume Upload', 'Admin Panel', 'Login / Signup', 'Email Notifications', 'WhatsApp Integration', 'Google Maps', 'Chatbot'];
    const security = ['SSL Certificate', 'Secure Admin Login', 'Data Encryption', 'CAPTCHA'];
    const marketing = ['Basic SEO', 'Google Analytics', 'Meta Tags', 'Sitemap', 'Social Media'];

    return (
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. Functional Requirements</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {features.map(f => (
              <label key={f} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${data.functionalRequirements.includes(f) ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'bg-white border-slate-200'}`}>
                <input type="checkbox" className="hidden" checked={data.functionalRequirements.includes(f)} onChange={() => toggleArrayItem('functionalRequirements', f)} />
                <span className="text-sm font-medium">{f}</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4">7. Security Requirements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {security.map(s => (
              <label key={s} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${data.security.includes(s) ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'bg-white border-slate-200'}`}>
                <input type="checkbox" className="hidden" checked={data.security.includes(s)} onChange={() => toggleArrayItem('security', s)} />
                <span className="text-sm font-medium">{s}</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4">8. SEO & Marketing</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {marketing.map(m => (
              <label key={m} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${data.marketing.includes(m) ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'bg-white border-slate-200'}`}>
                <input type="checkbox" className="hidden" checked={data.marketing.includes(m)} onChange={() => toggleArrayItem('marketing', m)} />
                <span className="text-sm font-medium">{m}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="flex justify-between pt-4 border-t">
          <button onClick={onPrev} className="text-slate-500 hover:text-slate-800 font-medium">Back</button>
          <button onClick={onNext} className="bg-indigo-600 text-white px-8 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Next: Technology
          </button>
        </div>
      </div>
    );
  }

  if (step === FormStep.TECH_STACK) {
    const frontends = ['HTML/CSS/JS', 'React.js', 'Next.js', 'Vue.js'];
    const backends = ['Node.js', 'Python Flask', 'Django', 'Go', 'PHP'];
    const databases = ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'];
    const hostings = ['Shared Hosting', 'Cloud Hosting', 'Render / AWS', 'Self-Hosted'];

    return (
      <div className="space-y-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">6 & 9. Technology & Hosting</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h3 className="font-semibold text-slate-700 mb-3 border-b pb-1">Frontend</h3>
            <div className="space-y-2">
              {frontends.map(t => (
                <label key={t} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" checked={data.techStack.frontend.includes(t)} onChange={() => toggleTechStack('frontend', t)} className="rounded border-slate-300 text-indigo-600" />
                  <span className="text-sm text-slate-600">{t}</span>
                </label>
              ))}
            </div>
          </section>

          <section className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h3 className="font-semibold text-slate-700 mb-3 border-b pb-1">Backend</h3>
            <div className="space-y-2">
              {backends.map(t => (
                <label key={t} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" checked={data.techStack.backend.includes(t)} onChange={() => toggleTechStack('backend', t)} className="rounded border-slate-300 text-indigo-600" />
                  <span className="text-sm text-slate-600">{t}</span>
                </label>
              ))}
            </div>
          </section>

          <section className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h3 className="font-semibold text-slate-700 mb-3 border-b pb-1">Database</h3>
            <div className="space-y-2">
              {databases.map(t => (
                <label key={t} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" checked={data.techStack.database.includes(t)} onChange={() => toggleTechStack('database', t)} className="rounded border-slate-300 text-indigo-600" />
                  <span className="text-sm text-slate-600">{t}</span>
                </label>
              ))}
            </div>
          </section>
        </div>

        <section>
          <h3 className="font-semibold text-slate-700 mb-3">9. Hosting & Domain</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {hostings.map(h => (
              <label key={h} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${data.hosting.includes(h) ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'bg-white border-slate-200'}`}>
                <input type="checkbox" className="hidden" checked={data.hosting.includes(h)} onChange={() => toggleArrayItem('hosting', h)} />
                <span className="text-sm font-medium">{h}</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-slate-700 mb-3">10. Maintenance & Support</h3>
          <div className="flex gap-3">
            {['3 Months', '6 Months', '1 Year', 'On-demand'].map(m => (
              <button key={m} onClick={() => onUpdate({ maintenance: m })} className={`flex-1 py-2 px-3 border rounded-lg text-sm transition-all ${data.maintenance === m ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600'}`}>
                {m}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-slate-700 mb-3">11. Additional Requirements</h3>
          <textarea
            value={data.additionalNotes}
            onChange={(e) => onUpdate({ additionalNotes: e.target.value })}
            className="w-full h-32 px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Special instructions, APIs to integrate, specific color palettes, etc."
          ></textarea>
        </section>

        <div className="flex justify-between pt-4 border-t">
          <button onClick={onPrev} className="text-slate-500 hover:text-slate-800 font-medium">Back</button>
          <button
            onClick={onNext}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95 flex items-center shadow-lg"
          >
            Proceed to Overview
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  if (step === FormStep.OVERVIEW) {
    const handleDownloadOverview = () => {
      const content = `
SRS REQUIREMENTS OVERVIEW - ${data.client.companyName || 'Project'}
Generated on: ${new Date().toLocaleString()}

1. CLIENT DETAILS
-----------------
Client Name: ${data.client.clientName}
Company Name: ${data.client.companyName}
Email: ${data.client.email}
Phone: ${data.client.phone}
Project Type: ${data.client.projectType}

2. PROJECT SCOPE
----------------
Website Types: ${data.websiteType.join(', ')}
Pages Required: ${data.pages.join(', ')}
Design Preferences: ${data.designPreferences.join(', ')}

3. FUNCTIONAL REQUIREMENTS
--------------------------
Features: ${data.functionalRequirements.join(', ')}
Security: ${data.security.join(', ')}
Marketing: ${data.marketing.join(', ')}

4. TECHNICAL STACK
------------------
Frontend: ${data.techStack.frontend.join(', ')}
Backend: ${data.techStack.backend.join(', ')}
Database: ${data.techStack.database.join(', ')}
Hosting: ${data.hosting.join(', ')}

5. ADDITIONAL INFO
------------------
Maintenance: ${data.maintenance}
Notes: ${data.additionalNotes || 'N/A'}

---
Ranbidge Solutions Private Limited
`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `SRS_Overview_${(data.client.companyName || 'Project').replace(/\s+/g, '_')}.txt`;
      link.click();
      URL.revokeObjectURL(url);
    };

    const SummarySection = ({ title, items, children }: { title: string; items?: string[]; children?: React.ReactNode }) => (
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4 transition-all hover:bg-white hover:shadow-md hover:border-indigo-200 group">
        <h3 className="font-bold text-slate-700 mb-2 flex items-center group-hover:text-indigo-600 transition-colors">
          <span className="w-1.5 h-6 bg-indigo-500 rounded-full mr-2"></span>
          {title}
        </h3>
        {items && items.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {items.map(i => (
              <span key={i} className="text-xs px-2 py-1 bg-white border border-slate-200 rounded-md text-slate-600 shadow-sm">{i}</span>
            ))}
          </div>
        ) : items ? (
          <p className="text-sm text-slate-400 italic">No items selected</p>
        ) : null}
        {children}
      </div>
    );

    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Final Overview</h2>
          <p className="text-slate-500">Please review all your details before final submission.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SummarySection title="1. Client Details">
            <div className="grid grid-cols-2 gap-y-2 text-sm mt-2">
              <span className="text-slate-500">Name:</span> <span className="text-slate-800 font-medium">{data.client.clientName}</span>
              <span className="text-slate-500">Company:</span> <span className="text-slate-800 font-medium">{data.client.companyName}</span>
              <span className="text-slate-500">Email:</span> <span className="text-slate-800 font-medium">{data.client.email}</span>
              <span className="text-slate-500">Phone:</span> <span className="text-slate-800 font-medium">{data.client.phone}</span>
              <span className="text-slate-500">Project Type:</span> <span className="text-slate-800 font-medium">{data.client.projectType}</span>
            </div>
          </SummarySection>

          <SummarySection title="2, 3 & 4. Website Scope & Design" items={[...data.websiteType, ...data.pages, ...data.designPreferences]} />

          <SummarySection title="5, 7 & 8. Features, Security & SEO" items={[...data.functionalRequirements, ...data.security, ...data.marketing]} />

          <SummarySection title="6 & 9. Tech & Hosting">
            <div className="space-y-2 text-xs mt-1">
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-500">Frontend:</span> <span className="text-slate-700 font-medium">{data.techStack.frontend.join(', ') || 'N/A'}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-500">Backend:</span> <span className="text-slate-700 font-medium">{data.techStack.backend.join(', ') || 'N/A'}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-500">Database:</span> <span className="text-slate-700 font-medium">{data.techStack.database.join(', ') || 'N/A'}</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-slate-500">Hosting:</span> <span className="text-slate-700 font-medium">{data.hosting.join(', ') || 'N/A'}</span>
              </div>
            </div>
          </SummarySection>

          <SummarySection title="10. Maintenance">
            <span className="text-sm font-semibold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">{data.maintenance}</span>
          </SummarySection>

          <SummarySection title="11. Additional Requirements">
            <p className="text-sm text-slate-600 line-clamp-3 italic leading-relaxed">{data.additionalNotes || 'No additional requirements provided.'}</p>
          </SummarySection>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t">
          <button onClick={onPrev} className="text-slate-500 hover:text-slate-800 font-medium order-3 md:order-1">Back</button>

          <div className="flex flex-wrap justify-center gap-3 order-1 md:order-2">
            <button
              onClick={handleDownloadOverview}
              className="px-6 py-3 border-2 border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800 transition-all flex items-center group shadow-sm active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Overview
            </button>

            <button
              onClick={onGenerate}
              disabled={isGenerating}
              className={`px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center shadow-lg disabled:opacity-75 relative overflow-hidden group ${isGenerating ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'}`}
            >
              <span className={`flex items-center ${isGenerating ? 'opacity-0' : 'opacity-100'}`}>
                Confirm & Submit
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {isGenerating && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  <span className="ml-2">Generating SRS...</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default SRSForm;
