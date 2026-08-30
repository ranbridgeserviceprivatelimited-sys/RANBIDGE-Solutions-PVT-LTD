import React from "react";

const HomeIntro: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/80 border-y border-slate-200/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
          Everything You Need to Build a Powerful Digital Presence
        </h2>
        <p className="text-lg sm:text-xl text-slate-700 font-medium max-w-3xl mx-auto">
          From industry-ready internships and custom software solutions to
          professional websites and research support — Ranbidge delivers
          end-to-end digital excellence under one roof.
        </p>
      </div>
    </section>
  );
};

export default HomeIntro;
