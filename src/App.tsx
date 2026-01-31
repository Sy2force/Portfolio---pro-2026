import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Providers } from '@/components/providers/Providers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollIndicator, BackToTop } from '@/components/layout/ScrollIndicator';

// Lazy load pages
const Home = lazy(() => import('@/pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('@/pages/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('@/pages/Projects').then(module => ({ default: module.Projects })));
const Contact = lazy(() => import('@/pages/Contact').then(module => ({ default: module.Contact })));
const Stack = lazy(() => import('@/pages/Stack').then(module => ({ default: module.Stack })));
const Videos = lazy(() => import('@/pages/Videos').then(module => ({ default: module.Videos })));
const CV = lazy(() => import('@/pages/CV').then(module => ({ default: module.CV })));
const ProjectDetails = lazy(() => import('@/pages/ProjectDetails').then(module => ({ default: module.ProjectDetails })));
const NotFound = lazy(() => import('@/pages/NotFound').then(module => ({ default: module.NotFound })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <Providers>
        <ScrollIndicator />
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-20">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/stack" element={<Stack />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/cv" element={<CV />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
      </Providers>
    </Router>
  );
}

export default App;
