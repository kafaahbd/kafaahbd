import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion'; // Smooth animation
import { Sun, Moon } from 'lucide-react'; // Modern icons

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }} // ক্লিক করলে হালকা ছোট হবে
      whileHover={{ scale: 1.05 }}
      onClick={toggleTheme}
      className={`relative flex items-center justify-center size-10 md:size-11 rounded-2xl transition-all duration-500 overflow-hidden shadow-sm
        ${darkMode 
          ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20' 
          : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
        }`}
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {darkMode ? (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.3, ease: "backOut" }}
          >
            <Sun size={20} strokeWidth={2.5} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.3, ease: "backOut" }}
          >
            <Moon size={20} strokeWidth={2.5} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Glow Effect */}
      <div className={`absolute inset-0 opacity-20 blur-lg transition-colors duration-500 ${darkMode ? 'bg-amber-400' : 'bg-indigo-400'}`} />
    </motion.button>
  );
};

export default ThemeToggle;