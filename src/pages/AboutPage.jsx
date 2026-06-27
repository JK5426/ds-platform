import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-4xl mx-auto py-10"
    >
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-cyan">
          About DS Platform
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Demystifying data structures and algorithms through clean design, interactive learning, and modern web architecture.
        </p>
      </header>

      <div className="glass-panel p-8 md:p-12 rounded-3xl ds-prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-300">
        <h2>Our Mission</h2>
        <p>
          Learning Data Structures and Algorithms shouldn't feel like reading a dusty textbook from 1995. The DS Platform was built with a single goal: <strong>to make computer science fundamentals highly accessible, visual, and radically simple to understand.</strong>
        </p>
        
        <h2>Why We Built This</h2>
        <p>
          Whether you are preparing for technical interviews or simply trying to become a better software engineer, mastering algorithms is a critical step. However, most resources focus too heavily on dense mathematical proofs and ignore the <em>intuition</em> behind why an algorithm works. We believe that with the right mental models, anyone can master complex data structures.
        </p>
        
        <h2>What You'll Find Here</h2>
        <ul>
          <li><strong>Visual Explanations:</strong> Clear, step-by-step breakdowns of how algorithms process data.</li>
          <li><strong>Real-World Use Cases:</strong> We answer the question: <em>"When will I actually use this?"</em></li>
          <li><strong>Complexity Analysis:</strong> Simple, no-nonsense breakdowns of Time and Space complexity.</li>
          <li><strong>Clean Implementations:</strong> Production-ready code snippets that prioritize readability.</li>
        </ul>

        <h2>Who Is This For?</h2>
        <p>
          This platform is designed for everyone—from university freshmen taking their first CS101 class, to self-taught developers preparing for whiteboard interviews, to seasoned engineers looking for a quick reference guide. 
        </p>
      </div>
    </motion.div>
  );
};

export default AboutPage;
