import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap, BookCheck, Globe } from 'lucide-react';

const StudyCornerRedirect: React.FC = () => {
  const { lang } = useLanguage();
  const isBn = lang === 'bn';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#05070a] flex items-center justify-center p-4 transition-colors duration-500 overflow-hidden relative">
      <SEO 
        title={isBn ? 'কাফআহ স্টাডি কর্নার' : 'Kafaah Study Corner'}
        description={isBn ? 'আপনার একাডেমিক প্রস্তুতিকে আরও সহজ ও কার্যকর করতে আমাদের বিশেষ লার্নিং প্ল্যাটফর্ম।' : 'Our specialized learning platform to make your academic preparation easier and more effective.'}
        url="https://kafaahbd.com/study"
        image="https://kafaahbd.com/stufy.jpg"
      />

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto text-center bg-white/70 dark:bg-[#0d1117]/80 backdrop-blur-2xl p-8 md:p-16 rounded-[3rem] shadow-2xl border border-white dark:border-white/5 relative overflow-hidden"
      >
        {/* Floating Icon Decoration */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-3xl mb-8"
        >
          <GraduationCap size={40} />
        </motion.div>

        <h1 className="text-3xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          {isBn ? 'কাফআহ স্টাডি কর্নার' : 'Kafaah Study Corner'}
        </h1>

        {/* --- IMAGE SECTION --- */}
        <div className="mb-10 flex justify-center relative group">
           <div className="absolute inset-0 bg-emerald-500/20 blur-2xl group-hover:bg-emerald-500/30 transition-all rounded-full" />
           <img 
            src="https://kafaahbd.com/stufy.jpg" 
            alt="Study Corner" 
            className="relative z-10 max-w-xs md:max-w-md h-auto object-cover rounded-[2rem] shadow-2xl border-4 border-white dark:border-gray-800 transform group-hover:scale-105 transition-transform duration-500"
           />
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {isBn
            ? 'সব ধরণের শিক্ষামূলক রিসোর্স, কুইজ এবং স্টাডি ম্যাটেরিয়াল এখন এক জায়গায়। আপনার শেখার অভিজ্ঞতাকে আরও সমৃদ্ধ করতে আজই আমাদের নতুন প্ল্যাটফর্মে যোগ দিন।'
            : 'All educational resources, quizzes, and study materials are now in one place. Join our new platform today to enrich your learning experience.'}
        </p>

        {/* Stats Preview (Visual Decoration) */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-md mx-auto">
          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
            <BookCheck size={20} className="mx-auto text-emerald-500 mb-2" />
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{isBn ? 'কুইজ' : 'Quizzes'}</p>
          </div>
          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
            <Globe size={20} className="mx-auto text-blue-500 mb-2" />
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{isBn ? 'রিসোর্স' : 'Resources'}</p>
          </div>
          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
            <ExternalLink size={20} className="mx-auto text-amber-500 mb-2" />
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{isBn ? 'অ্যাক্সেস' : 'Access'}</p>
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://study.kafaahbd.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-5 rounded-[1.5rem] text-xl font-black shadow-xl shadow-emerald-600/20 transition-all"
        >
          {isBn ? 'এখনই প্রবেশ করুন' : 'Enter Now'}
          <ExternalLink size={20} />
        </motion.a>

        <div className="mt-12 flex flex-col items-center gap-2">
          <p className="text-xs md:text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
            Official Platform
          </p>
          <code className="px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-mono">
            study.kafaahbd.com
          </code>
        </div>
      </motion.div>
    </div>
  );
};

export default StudyCornerRedirect;