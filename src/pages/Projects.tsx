import React from 'react';
import ScrollAnimation from "../components/ScrollAnimation";
import ProgressBar from "../components/ProgressBar";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "../components/SEO";
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Languages, 
  Library, 
  Rocket, 
  ExternalLink, 
  Layers 
} from 'lucide-react';

interface ProjectItem {
  title: string;
  progress: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

const Projects: React.FC = () => {
  const { t, lang } = useLanguage();
  const isBn = lang === "bn";

  const projects: ProjectItem[] = [
    {
      title: t("projects.study.title") || (isBn ? "স্টাডি প্রজেক্ট" : "Study Project"),
      progress: "44%",
      desc: t("projects.study.desc") || (isBn ? "আধুনিক শিক্ষা ও প্রযুক্তির সমন্বয়।" : "Merging modern education with technology."),
      icon: <Library className="text-emerald-500" size={28} />,
      color: "from-emerald-500/20 to-teal-500/5",
    },
    {
      title: t("projects.quran.title") || (isBn ? "কুরআন লার্নিং অ্যাপ" : "Quran Learning App"),
      progress: "0%",
      desc: t("projects.quran.desc") || (isBn ? "সহজে কুরআন শেখার ডিজিটাল প্ল্যাটফর্ম।" : "Digital platform to learn Quran easily."),
      icon: <BookOpen className="text-blue-500" size={28} />,
      color: "from-blue-500/20 to-indigo-500/5",
    },
    {
      title: t("projects.english.title") || (isBn ? "ইংলিশ লার্নিং অ্যাপ" : "English Learning App"),
      progress: "0%",
      desc: t("projects.english.desc") || (isBn ? "উম্মাহর জন্য সহজ ইংরেজি শিক্ষা।" : "Easy English learning for the Ummah."),
      icon: <Languages className="text-amber-500" size={28} />,
      color: "from-amber-500/20 to-orange-500/5",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#05070a] transition-colors duration-500 pb-20">
      <SEO 
        title={isBn ? "প্রকল্পসমূহ" : "Projects"}
        description={isBn ? "কাফআহর চলমান প্রকল্পসমূহ।" : "Ongoing projects of Kafa'ah."}
        url="https://kafaahbd.com/projects"
      />

      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-emerald-500/5 blur-[120px] -z-10" />
        <ScrollAnimation>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Layers size={14} /> {isBn ? "আমাদের কর্মযজ্ঞ" : "Innovation Hub"}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            {isBn ? "চলমান প্রকল্পসমূহ" : "Our Projects"}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {isBn 
              ? "প্রযুক্তির সঠিক ব্যবহারের মাধ্যমে আমরা এমন কিছু প্রজেক্ট তৈরি করছি যা ইনশাআল্লাহ মানুষের জীবনকে সহজ এবং বরকতময় করবে।" 
              : "Through the right use of technology, we are building projects that will, InshaAllah, make lives easier and blessed."}
          </p>
        </ScrollAnimation>
      </section>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ScrollAnimation key={idx} delay={idx * 0.1} direction="up">
            <motion.div 
              whileHover={{ y: -8 }}
              className="relative group h-full bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-white/5 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <div className="px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded-lg uppercase tracking-wider">
                    {parseInt(project.progress) > 0 ? (isBn ? "চলমান" : "In Progress") : (isBn ? "পরিকল্পিত" : "Planned")}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h2>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="mt-auto">
                   <ProgressBar progress={project.progress} />
                </div>

                <div className="mt-6 pt-6 border-t border-gray-50 dark:border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">
                    In Sha Allah
                  </span>
                  <button className="text-gray-400 hover:text-emerald-500 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Future Roadmap / More CTA */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
        <ScrollAnimation>
          <div className="bg-emerald-600 dark:bg-emerald-500/10 p-8 md:p-12 rounded-[3rem] text-center relative overflow-hidden group">
            <Rocket className="absolute -left-10 -bottom-10 text-white/10 group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-1000" size={200} />
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
              {isBn ? "আরো অনেক কিছু আসছে..." : "Many More Projects Coming..."}
            </h3>
            <p className="text-emerald-50 dark:text-emerald-400/80 mb-8 relative z-10 max-w-lg mx-auto italic">
              {t("projects.more") || (isBn ? "আমরা নতুন নতুন আইডিয়া নিয়ে কাজ করছি।" : "We are working on new and innovative ideas.")}
            </p>
            <button className="relative z-10 px-8 py-3 bg-white text-emerald-700 font-bold rounded-xl shadow-xl hover:bg-emerald-50 transition-all active:scale-95">
              {isBn ? "আমাদের সাথে যুক্ত হন" : "Join Our Journey"}
            </button>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default Projects;