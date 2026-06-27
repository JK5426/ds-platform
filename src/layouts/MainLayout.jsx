import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import ThemeToggle from '../components/common/ThemeToggle';
import Logo from '../components/common/Logo';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <nav className="glass-panel sticky top-0 z-50 border-t-0 border-x-0 border-b border-gray-200 dark:border-white/10 mx-2 md:mx-4 mt-2 md:mt-4 rounded-2xl md:rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity outline-none">
            <Logo />
          </Link>
          <div className="flex items-center gap-4 md:gap-6 text-sm font-semibold text-gray-500 dark:text-gray-400">
            <Link to="/about" className="hover:text-black dark:hover:text-brand-cyan transition-colors hidden sm:block">About</Link>
            <Link to="/contact" className="hover:text-black dark:hover:text-brand-cyan transition-colors hidden sm:block">Contact</Link>
            <ThemeToggle />
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors glass-panel px-3 py-2 md:px-4 md:py-2 rounded-full text-gray-800 dark:text-white whitespace-nowrap text-xs md:text-sm">
              Star on GitHub ⭐
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 mt-8">
        <Outlet />
      </main>

      <footer className="text-center py-12 text-gray-500 text-sm font-mono mt-20 border-t border-gray-200 dark:border-white/10">
        <div className="flex justify-center gap-6 mb-6 font-sans">
          <Link to="/about" className="hover:text-brand-cyan transition-colors">About</Link>
          <Link to="/contact" className="hover:text-brand-cyan transition-colors">Contact</Link>
        </div>
        <p>Designed with big brain energy 🧠</p>
        <p className="mt-2">React Router • Extensible Architecture • Small Components</p>
        <p className="mt-6 text-xs text-gray-400 dark:text-gray-600">
          &copy; {new Date().getFullYear()} DS Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
