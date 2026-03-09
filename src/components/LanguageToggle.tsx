import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion'; // Animation
import { Languages } from 'lucide-react'; // Modern icon

const LanguageToggle: React.FC = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className={`relative flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-2xl font-bold text-sm transition-all duration-300 shadow-sm overflow-hidden
        ${lang === 'en' 
          ? 'bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' 
          : 'bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20'
        }`}
    >
      {/* Icon with spin effect on hover */}
      <motion.div
        animate={{ rotate: lang === 'en' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "anticipate" }}
      >
        <Languages size={18} strokeWidth={2.5} />
      </motion.div>

      <div className="relative h-5 w-14 flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={lang}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center tracking-wider"
          >
            {lang === 'en' ? 'বাংলা' : 'ENGLISH'}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Background Pulse Effect */}
      <div className={`absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500 ${lang === 'en' ? 'bg-emerald-400' : 'bg-blue-400'}`} />
    </motion.button>
  );
};

export default LanguageToggle;