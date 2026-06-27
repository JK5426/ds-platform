import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import { getTopicById } from '../data/topics';
import Badge from '../components/common/Badge';
import Logo from '../components/common/Logo';

// Lazy load markdown files dynamically
const markdownFiles = import.meta.glob('../content/**/*.md', { query: '?raw', import: 'default' });

const SubtopicPage = () => {
  const { topicId, subtopicId } = useParams();
  const navigate = useNavigate();
  const topic = getTopicById(topicId);
  const subtopic = topic?.subtopics?.find(s => s.id === subtopicId);

  const [markdownContent, setMarkdownContent] = useState('');
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (topic && subtopic) {
      document.title = `DS Platform - ${subtopic.title}`;
    }
  }, [topic, subtopic]);

  useEffect(() => {
    const fetchMarkdown = async () => {
      setIsLoadingContent(true);
      const expectedPath = `../content/${topicId}/${subtopicId}.md`;
      const importer = markdownFiles[expectedPath];
      if (importer) {
        try {
          const content = await importer();
          setMarkdownContent(content);
        } catch (error) {
          console.error("Failed to load markdown:", error);
          setMarkdownContent('');
        }
      } else {
        setMarkdownContent('');
      }
      setIsLoadingContent(false);
    };

    if (topicId && subtopicId) {
      fetchMarkdown();
    }
  }, [topicId, subtopicId]);

  if (!topic || !subtopic) {
    return (
      <div className="text-center py-20 animate-float">
        <h2 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-cyan">
          404: Vibe Check Failed
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-xl">Could not find the requested subtopic.</p>
        <button 
          onClick={() => navigate('/')} 
          className="px-8 py-3 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-gray-900 dark:text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(192,132,252,0.3)]"
        >
          Take me back home 🏠
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-4xl mx-auto pb-20"
    >
      {/* Navigation */}
      <nav className="mb-8 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
        <button onClick={() => navigate('/')} className="hover:text-brand-neon transition-colors">Home</button>
        <span>/</span>
        <button onClick={() => navigate(`/topic/${topicId}`)} className="hover:text-brand-cyan transition-colors">{topic.title}</button>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">{subtopic.title}</span>
      </nav>

      {/* Hero Header */}
      <header className="mb-12 md:mb-16 relative rounded-[2rem] overflow-hidden glass-panel border-0 shadow-2xl">
        <div className="relative z-10 p-6 sm:p-10 md:p-16">
          <div className="relative z-10 mb-6 inline-block scale-[0.65] origin-left opacity-70">
            <Logo />
          </div>
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <Badge variant={subtopic.difficulty === 'Medium' ? 'warning' : 'success'}>
              {subtopic.difficulty}
            </Badge>
            <span className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-[10px] md:text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-brand-lime border border-emerald-600/20 dark:border-brand-lime/20 shadow-[0_0_10px_rgba(190,242,100,0.1)]">
              {topic.title} {topic.icon}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
            {subtopic.title}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed font-medium">
            {subtopic.description}
          </p>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose dark:prose-invert ds-prose max-w-none text-gray-800 dark:text-gray-300">
        
        {/* Dynamic Markdown Content */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl mt-8 min-h-[400px]">
          {isLoadingContent ? (
            <div className="flex flex-col items-center justify-center h-64 opacity-60">
              <div className="w-10 h-10 border-4 border-brand-neon border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="font-mono text-sm">Loading concepts...</p>
            </div>
          ) : markdownContent ? (
            <Markdown 
              remarkPlugins={[remarkGfm]}
              components={{
                strong: ({node, ...props}) => {
                  const text = props.children?.[0];
                  if (typeof text === 'string' && text.includes('O(')) {
                    return <strong className="complexity" {...props} />;
                  }
                  return <strong {...props} />;
                }
              }}
            >
              {markdownContent}
            </Markdown>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500 dark:text-gray-400">Content coming soon...</p>
              <p className="text-indigo-600 dark:text-brand-neon mt-4">Be the first to contribute this module! 🚀</p>
            </div>
          )}
        </div>
        
      </article>

      {/* Footer CTA */}
      <div className="mt-20 pt-10 border-t border-gray-200 dark:border-white/10 text-center flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to crush some code?</h3>
        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-neon to-brand-cyan hover:from-brand-cyan hover:to-brand-neon text-black font-extrabold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(192,132,252,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
          Start Practicing Now 🚀
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-2xl hover:scale-110 active:scale-95 transition-transform z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </motion.button>
      )}

    </motion.div>
  );
};

export default SubtopicPage;
