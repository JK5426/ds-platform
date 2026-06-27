import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex flex-col inline-block group cursor-pointer transition-transform hover:scale-105 duration-300 ${className}`}>
      {/* Sci-fi Text (Orbitron) */}
      <div className="flex items-baseline gap-2 text-gray-900 dark:text-white" style={{ fontFamily: '"Orbitron", sans-serif' }}>
        <span className="text-3xl md:text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-neon">
          DS
        </span>
        <span className="text-sm md:text-lg font-bold tracking-[0.2em] uppercase opacity-90 hidden sm:inline">
          Platform
        </span>
      </div>
      
      {/* Sci-fi underline: horizontal rule + dot */}
      <div className="flex items-center gap-1.5 mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
        <div className="h-[2px] flex-1 bg-gradient-to-r from-brand-cyan to-brand-neon"></div>
        <div className="w-1.5 h-1.5 bg-brand-neon shadow-[0_0_8px_rgba(192,132,252,0.8)] shrink-0"></div>
        <div className="w-1 h-1 bg-brand-cyan shrink-0"></div>
      </div>
    </div>
  );
};

export default Logo;
