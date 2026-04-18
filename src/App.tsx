import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const JoiningConditions = lazy(() => import('./pages/JoiningConditions'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const Contact = lazy(() => import('./pages/Contact'));
const Team = lazy(() => import('./pages/Team'));
const StudyCornerRedirect = lazy(() => import('./pages/StudyCornerRedirect'));
const NotFound = lazy(() => import('./pages/NotFound'));
const JoinForm = lazy(() => import('./pages/JoinForm'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const { lang } = useLanguage();
  const location = useLocation();

  const PageLoader = () => (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white dark:bg-[#020408]">
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-green-500/20 border-t-green-600 rounded-full animate-spin"></div>
        <div className="absolute w-12 h-12 border-4 border-emerald-500/20 border-b-emerald-500 rounded-full animate-spin-slow"></div>
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 text-sm font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400"
      >
        {lang === 'bn' ? 'লোড হচ্ছে...' : 'Loading Kafa\'ah...'}
      </motion.p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#020408] text-gray-900 dark:text-gray-100 selection:bg-green-100 selection:text-green-900 dark:selection:bg-green-900/30 transition-colors duration-500">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow pt-16 md:pt-20"> {/* Offset for sticky navbar */}
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/study" element={<StudyCornerRedirect />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/joining-conditions" element={<JoiningConditions />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/team" element={<Team />} />
                <Route path="/join" element={<JoinForm />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </Suspense>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
