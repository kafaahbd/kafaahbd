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




const PageLoader = ({ lang = 'en' }) => {
  const isBn = lang === 'bn';

  return (
    <div className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#020408]">
      {/* Dynamic Ambient Background Glow (Vertical Orientation for Upward Feel) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="h-96 w-48 rounded-[100%] bg-emerald-500/20 blur-[100px] dark:bg-emerald-500/10"
        />
      </div>

      {/* Exceptional Upward Arrow Core */}
      <div className="relative z-10 flex h-40 w-40 flex-col items-center justify-center -space-y-8">
        
        {/* Central Energy Beam */}
        <motion.div
          animate={{
            height: ['0%', '100%', '0%'],
            opacity: [0, 0.8, 0],
            translateY: ['50%', '-50%', '50%'],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute z-0 w-[2px] bg-gradient-to-t from-transparent via-emerald-400 to-transparent blur-[1px]"
          style={{ height: '100%' }}
        />

        {/* Sequential Upward Chevrons */}
        {[0, 1, 2].map((index) => (
          <motion.svg
            key={index}
            animate={{
              y: [15, -20],
              opacity: [0, 1, 0],
              scale: [0.85, 1.15, 0.85],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              // Bottom arrow (index 2) moves first, then middle, then top
              delay: (2 - index) * 0.15, 
            }}
            className="relative z-10 h-14 w-14 text-emerald-500 drop-shadow-[0_0_12px_rgba(16,185,129,0.6)] dark:drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </motion.svg>
        ))}
      </div>

      {/* Animated Text & Loading Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, ease: 'easeOut' }}
        className="mt-6 flex z-10 flex-col items-center gap-3"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-gradient-to-r from-gray-500 via-emerald-600 to-gray-500 bg-clip-text text-xs font-black uppercase tracking-[0.35em] text-transparent dark:from-gray-400 dark:via-emerald-400 dark:to-gray-400 drop-shadow-sm"
        >
          {isBn ? 'লোড হচ্ছে' : "Loading Kafa'ah"}
        </motion.p>

        {/* Dynamic Loading Bar Indicator */}
        <div className="h-[2px] w-32 overflow-hidden rounded-full bg-gray-200/60 backdrop-blur-md dark:bg-gray-800/60">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-full w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
};




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
