import React from 'react';
import { motion } from 'framer-motion';
import { topicsData } from '../data/topics';
import TopicList from '../components/features/TopicList';

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <header className="text-center mb-16 relative">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tighter"
        >
          DS & <span className="text-gradient">ALGORITHMS</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Master the algorithms with modular React Architecture. 🧢
        </motion.p>
        <div className="absolute top-0 right-[20%] text-6xl animate-float opacity-50 hidden md:block">🚀</div>
        <div className="absolute bottom-0 left-[20%] text-6xl animate-float opacity-50 hidden md:block" style={{animationDelay: '1s'}}>🧠</div>
      </header>

      <TopicList topics={topicsData} />
    </motion.div>
  );
};

export default HomePage;
