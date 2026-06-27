import React from 'react';

const Badge = ({ children, variant = 'default' }) => {
  const baseStyle = "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider";
  const variants = {
    default: "bg-white/10 text-white/80",
    success: "bg-green-500/20 text-green-400",
    warning: "bg-yellow-500/20 text-yellow-400",
    danger: "bg-red-500/20 text-red-400"
  };
  
  return (
    <span className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
