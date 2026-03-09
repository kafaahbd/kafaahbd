import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Home, 
  ArrowLeft, 
  Compass, 
  Search, 
  BookOpen, 
  MessageCircle 
} from 'lucide-react';

const NotFound = () => {
  const { t, lang } = useLanguage();
  const isBn = lang === 'bn';

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-slate-50 dark:bg-[#05070a] transition-colors overflow-hidden relative">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl w-full text-center relative">
        
        {/* Large 404 Backdrop Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute inset-0 flex items-center justify-center -z-10 select-none pointer-events-none"
        >
          <h1 className="text-[12rem] md:text-[22rem] font-black leading-none text-emerald-500/[0.05] dark:text-white/[0.03]">
            404
          </h1>
        </motion.div>

        {/* Main Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 dark:bg-[#0d1117]/80 backdrop-blur-2xl p-10 md:p-16 rounded-[3.5rem] border border-white dark:border-white/5 shadow-2xl shadow-emerald-500/5"
        >
          {/* Animated Compass Icon */}
          <motion.div 
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20"
          >
            <Compass size={48} strokeWidth={1.5} />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            {isBn ? 'গন্তব্য খুঁজে পাওয়া যায়নি' : 'Path Not Found'}
          </h2>
          
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-12 max-w-md mx-auto leading-relaxed text-sm md:text-lg">
            {isBn 
              ? 'দুঃখিত, আপনি যে পাতাটি খুঁজছেন সেটি বর্তমানে আমাদের ডেটাবেজে নেই। সম্ভবত এটি সরিয়ে ফেলা হয়েছে।' 
              : 'The page you are looking for has been moved or no longer exists in our database.'}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/"
              className="group w-full sm:w-auto px-10 py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2"
            >
              <Home size={18} />
              {isBn ? 'হোমপেজে ফিরে যান' : 'Back to Home'}
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-10 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              {isBn ? 'পেছনে যান' : 'Go Back'}
            </button>
          </div>

          {/* Quick Help Links */}
          <div className="pt-8 border-t border-gray-100 dark:border-white/5">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
              {isBn ? 'সহায়ক কিছু লিংক' : 'Helpful Links'}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: isBn ? 'প্রজেক্টস' : 'Projects', icon: <Search size={14} />, path: '/projects' },
                { name: isBn ? 'পড়াশোনা' : 'Study', icon: <BookOpen size={14} />, path: '/study' },
                { name: isBn ? 'যোগাযোগ' : 'Contact', icon: <MessageCircle size={14} />, path: '/contact' },
              ].map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="flex items-center gap-1.5 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Small Decorative Floating Quran/Knowledge Elements */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="hidden md:block absolute -top-12 -right-8 p-4 bg-white dark:bg-[#0d1117] rounded-2xl shadow-xl border border-white/50 dark:border-white/5 -rotate-12"
        >
          <BookOpen className="text-emerald-500" size={32} />
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;