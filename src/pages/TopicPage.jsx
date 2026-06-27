import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getTopicById } from '../data/topics';
import Badge from '../components/common/Badge';
import Logo from '../components/common/Logo';

const TopicPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = getTopicById(id);
  
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (topic) {
      document.title = `DS Platform - ${topic.title}`;
    }
  }, [topic]);

  if (!topic) {
    return (
      <div className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Topic Not Found</h2>
        <button onClick={() => navigate('/')} className="text-brand-neon hover:underline">
          Go back home
        </button>
      </div>
    );
  }

  const filteredSubtopics = topic.subtopics.filter(sub => 
    sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sub.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <button 
        onClick={() => navigate('/')}
        className="mb-8 flex items-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors glass-panel px-4 py-2 rounded-full text-sm font-semibold"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to Topics
      </button>

      <motion.header 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12 relative p-8 glass-panel rounded-3xl overflow-hidden"
      >
        <div className="relative z-10 mb-6 inline-block scale-75 origin-left opacity-70">
          <Logo />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative z-10 flex flex-wrap items-center gap-2 md:gap-4 text-gray-900 dark:text-white">
          {topic.title} <span>{topic.icon}</span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl relative z-10 leading-relaxed">{topic.description}</p>
      </motion.header>

      <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center w-full md:w-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white whitespace-nowrap">Algorithms & Techniques</h2>
          <div className="h-[2px] flex-1 md:w-16 bg-gradient-to-r from-brand-neon/50 to-transparent ml-6"></div>
        </div>
        
        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search algorithms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-white/10 rounded-xl leading-5 bg-white dark:bg-black/20 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-neon focus:border-brand-neon sm:text-sm transition-all"
          />
        </div>
      </div>

      <div className="space-y-6">
        {filteredSubtopics.map((sub, index) => (
          <motion.div 
            key={sub.id} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => navigate(`/topic/${topic.id}/subtopic/${sub.id}`)}
            className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors border-l-4 cursor-pointer group"
            style={{ borderLeftColor: 'var(--tw-color-lime-400)' }}
          >
            <div className="flex-1 w-full min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{sub.title}</h3>
                <Badge variant={sub.difficulty === 'Medium' ? 'warning' : 'success'}>
                  {sub.difficulty}
                </Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-5 text-lg leading-relaxed">{sub.description}</p>
            </div>
            
            <div className="w-full md:w-auto shrink-0 flex flex-col justify-end pt-2 md:pt-0">
              <button 
                onClick={(e) => { e.stopPropagation(); navigate(`/topic/${topic.id}/subtopic/${sub.id}`); }}
                className="w-full md:w-auto px-8 py-4 md:py-3 rounded-xl bg-gradient-to-r from-brand-neon to-brand-cyan hover:from-brand-cyan hover:to-brand-neon text-black font-extrabold text-lg md:text-base transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(192,132,252,0.3)] flex items-center justify-center gap-3"
              >
                Learn More <span className="text-xl leading-none flex items-center">🚀</span>
              </button>
            </div>
          </motion.div>
        ))}
        
        {topic.subtopics.length === 0 && (
          <div className="text-center p-12 glass-panel rounded-3xl text-gray-400">
            No algorithms added yet. Our decoupled architecture makes it easy to add more!
          </div>
        )}

        {topic.subtopics.length > 0 && filteredSubtopics.length === 0 && (
          <div className="text-center p-12 glass-panel rounded-3xl text-gray-500 dark:text-gray-400">
            No algorithms found matching "{searchQuery}".
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TopicPage;
