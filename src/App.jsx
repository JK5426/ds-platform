import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Lazy load pages for massive performance boost
const HomePage = lazy(() => import('./pages/HomePage'));
const TopicPage = lazy(() => import('./pages/TopicPage'));
const SubtopicPage = lazy(() => import('./pages/SubtopicPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// A sleek fallback spinner
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] opacity-60">
    <div className="w-12 h-12 border-4 border-brand-neon border-t-transparent rounded-full animate-spin mb-4"></div>
    <p className="font-mono text-sm tracking-widest uppercase">Loading...</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="topic/:id" element={<TopicPage />} />
            <Route path="topic/:topicId/subtopic/:subtopicId" element={<SubtopicPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
