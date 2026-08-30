import React from "react";

const HomeIntro: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/40 border-y border-slate-700/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          Everything You Need to Build a Powerful Digital Presence
        </h2>
        <p className="text-lg sm:text-xl text-white font-semibold max-w-3xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          From industry-ready internships and custom software solutions to
          professional websites and research support — Ranbidge delivers
          end-to-end digital excellence under one roof.
        </p>
      </div>
    </section>
  );
};

export default HomeIntro;
