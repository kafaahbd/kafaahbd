import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  GraduationCap, 
  FileText,
  Target,
  Compass,
  Users,
  FlaskConical,
  MessageCircle,
  Sparkles,
  MonitorPlay,
  ArrowRight
} from 'lucide-react';

// Feature Data Structure
const featureData = [
  { id: 'exam', icon: FileText, title: 'Exam', en: 'Take structured exams with real-time evaluation and performance tracking.', bn: 'রিয়েল-টাইম মূল্যায়ন ও পারফরম্যান্স ট্র্যাকিংসহ পরীক্ষা দেওয়ার সুবিধা।' },
  { id: 'practice', icon: Target, title: 'Practice', en: 'Solve board-standard questions with detailed explanations.', bn: 'বোর্ড স্ট্যান্ডার্ড প্রশ্ন সমাধান ও বিস্তারিত ব্যাখ্যা।' },
  { id: 'adventure', icon: Compass, title: 'Adventure', en: 'Learn through step-by-step lessons with interactive flow.', bn: 'ধাপে ধাপে লেসনের মাধ্যমে ইন্টারঅ্যাকটিভভাবে শেখা।' },
  { id: 'forum', icon: Users, title: 'Forum', en: 'Ask questions, share knowledge, and learn with the community.', bn: 'প্রশ্ন করা, আলোচনা করা এবং অন্যদের সাথে শেখা।' },
  { id: 'mistake', icon: FlaskConical, title: 'Mistake Lab', en: 'Analyze mistakes and improve weak areas efficiently.', bn: 'ভুল বিশ্লেষণ করে দুর্বলতা উন্নত করার ব্যবস্থা।' },
  { id: 'messaging', icon: MessageCircle, title: 'Messaging', en: 'Connect and communicate with other learners.', bn: 'অন্যান্য শিক্ষার্থীদের সাথে যোগাযোগের সুবিধা।' },
  { id: 'animations', icon: Sparkles, title: 'Animations', en: 'Smooth and modern UI for better user experience.', bn: 'স্মুথ ও আধুনিক UI অভিজ্ঞতা।' },
  { id: 'simulator', icon: MonitorPlay, title: 'Simulator', en: 'Interactive simulations to understand complex concepts easily.', bn: 'জটিল বিষয়গুলো সহজে বোঝার জন্য ইন্টারঅ্যাকটিভ সিমুলেশন।' },
];

// Framer Motion Variants for Staggered Animation
// Framer Motion Variants for Staggered Animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring" as const, // Added "as const" here to fix the TS error
      stiffness: 300, 
      damping: 24 
    } 
  }
};

const StudyCornerRedirect: React.FC = () => {
  const { lang } = useLanguage();
  const isBn = lang === 'bn';

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#05070a] flex items-center justify-center p-4 md:p-8 transition-colors duration-500 overflow-hidden relative py-12 md:py-20">
      <SEO 
        title={isBn ? 'কাফআহ স্টাডি কর্নার' : 'Kafaah Study Corner'}
        description={isBn ? 'Study Corner একটি আধুনিক ও ইন্টারঅ্যাকটিভ লার্নিং প্ল্যাটফর্ম, যা পড়াশোনাকে আরও সহজ, দ্রুত এবং আকর্ষণীয় করে তোলে।' : 'Study Corner is a modern, interactive learning platform designed to make studying smarter, faster, and more engaging.'}
        url="https://kafaahbd.com/study"
        image="https://kafaahbd.com/stufy.jpg"
      />

      {/* Modern Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[150px]" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto bg-white/60 dark:bg-[#0d1117]/60 backdrop-blur-3xl p-6 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-white/50 dark:border-white/5 relative"
      >
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white rounded-2xl mb-6 shadow-lg shadow-emerald-500/30"
            >
              <GraduationCap size={32} />
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              {isBn ? 'কাফআহ' : 'Kafaah'} <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-400 dark:to-emerald-200">
                {isBn ? 'স্টাডি কর্নার' : 'Study Corner'}
              </span>
            </h1>

            <div className="space-y-4 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                {isBn 
                  ? 'একটি আধুনিক ও ইন্টারঅ্যাকটিভ লার্নিং প্ল্যাটফর্ম, যা পড়াশোনাকে আরও সহজ, দ্রুত এবং আকর্ষণীয় করে তোলে।' 
                  : 'A modern, interactive learning platform designed to make studying smarter, faster, and more engaging.'}
              </p>
              <p className="text-sm md:text-base opacity-80">
                {isBn
                  ? 'একাধিক শক্তিশালী ফিচার একসাথে নিয়ে এসেছে, যাতে শিক্ষার্থীরা শেখা, প্র্যাকটিস এবং নিজেদের উন্নতি—সবকিছু এক জায়গা থেকেই করতে পারে।'
                  : 'Bringing together multiple powerful features in one place so students can learn, practice, and improve continuously.'}
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full max-w-[280px] md:max-w-md lg:max-w-[400px] order-1 lg:order-2 relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 blur-3xl group-hover:blur-2xl transition-all duration-500 rounded-full" />
            <img 
              src="https://kafaahbd.com/stufy.jpg" 
              alt="Study Corner" 
              width="400"
              height="400"
              loading="lazy"
              className="relative z-10 w-full h-auto object-cover rounded-[2.5rem] shadow-2xl border-8 border-white/50 dark:border-gray-800/50 transform group-hover:-translate-y-2 group-hover:rotate-2 transition-all duration-500 aspect-video lg:aspect-square"
            />
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-16" />

        {/* --- FEATURES GRID (Auto Displayed) --- */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {isBn ? 'প্লাটফর্মের ফিচারসমূহ' : 'Platform Features'}
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {featureData.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={feature.id} 
                  variants={itemVariants}
                  className="group p-6 rounded-3xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-emerald-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {isBn ? feature.bn : feature.en}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* --- CTA SECTION --- */}
        <div className="flex flex-col items-center justify-center text-center bg-gray-50/50 dark:bg-[#090c10]/50 rounded-[2rem] p-8 md:p-12 border border-gray-100 dark:border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]" />
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://study.kafaahbd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-3 bg-gray-900 dark:bg-white hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white dark:text-gray-900 hover:text-white px-8 py-4 md:px-12 md:py-5 rounded-2xl text-base md:text-xl font-black shadow-xl transition-all duration-300 group"
          >
            {isBn ? 'এখনই প্রবেশ করুন' : 'Enter Study Corner'}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <div className="mt-6 flex flex-col items-center gap-2 relative z-10">
            <p className="text-[10px] md:text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
              Official URL
            </p>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-full text-emerald-600 dark:text-emerald-400 text-xs md:text-sm font-mono">
              <ExternalLink size={14} />
              study.kafaahbd.com
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default StudyCornerRedirect;