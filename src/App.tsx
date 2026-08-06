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
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl dark:bg-emerald-500/10"
        />
      </div>

      {/* Main Loader Core */}
      <div className="relative flex items-center justify-center">
        {/* Outer Rotating Glowing Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="h-24 w-24 rounded-full border-[3px] border-transparent border-t-emerald-500 border-r-green-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
        />

        {/* Counter-rotating Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          className="absolute h-16 w-16 rounded-full border-[3px] border-transparent border-b-emerald-400 border-l-teal-300"
        />

        {/* Central Pulsing Glowing Core */}
        <motion.div
          animate={{
            scale: [0.85, 1.15, 0.85],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute h-6 w-6 rounded-full bg-gradient-to-tr from-emerald-500 to-green-400 shadow-[0_0_20px_rgba(16,185,129,0.8)]"
        />
      </div>

      {/* Animated Text & Dots */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 flex flex-col items-center gap-2"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-gradient-to-r from-gray-700 via-emerald-600 to-gray-700 bg-clip-text text-sm font-bold uppercase tracking-[0.25em] text-transparent dark:from-gray-300 dark:via-emerald-400 dark:to-gray-300"
        >
          {isBn ? 'লোড হচ্ছে' : "Loading Kafa'ah"}
        </motion.p>

        {/* Dynamic Loading Bar Indicator */}
        <div className="h-[2px] w-24 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 1.5,
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
