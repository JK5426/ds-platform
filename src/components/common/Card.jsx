import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, tagline, description, color, id, icon, subtopicsCount }) => {
  return (
    <Link 
      to={`/topic/${id}`}
      className="glass-panel rounded-3xl p-8 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group block"
    >
      <h2 className="text-3xl font-bold mb-2 flex items-center justify-between text-gray-900 dark:text-white">
        {title} <span className="text-2xl">{icon}</span>
      </h2>
      <h3 className="text-sm uppercase tracking-widest text-emerald-600 dark:text-brand-lime mb-4 font-semibold">
        {tagline}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
        {description}
      </p>
      
      <div className="flex items-center text-sm font-semibold text-gray-400 dark:text-white/50 group-hover:text-black dark:group-hover:text-white transition-colors">
        <span>Explore {subtopicsCount} algorithms</span>
        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </div>
    </Link>
  );
};

export default Card;
