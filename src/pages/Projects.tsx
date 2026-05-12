import React from 'react';
import ScrollAnimation from "../components/ScrollAnimation";
import ProgressBar from "../components/ProgressBar";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  BookOpen, 
  Languages, 
  Library, 
  Rocket, 
  ExternalLink, 
  Layers,
  ArrowRight
} from 'lucide-react';
import Latex from 'react-latex-next';

interface ProjectItem {
  title: string;
  progress: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  status: 'planned' | 'in-progress' | 'completed';
}

const Projects: React.FC = () => {
  const { t, lang } = useLanguage();
  const isBn = lang === "bn";
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const projects: ProjectItem[] = [
    {
      title: t("projects.study.title") || (isBn ? "স্টাডি প্রজেক্ট" : "Study Project"),
      progress: "50%",
      desc: t("projects.study.desc") || (isBn ? "আধুনিক শিক্ষা ও প্রযুক্তির সমন্বয়। শিক্ষার্থীদের জন্য সেরা মানের কন্টেন্ট এবং দিকনির্দেশনা।" : "Merging modern education with technology. High-quality content and guidance for students."),
      icon: <Library size={32} />,
      color: "from-emerald-500 to-teal-600",
      image: "https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/file_00000000ef98720bb731b6bfa446cc1b.png",
      status: "in-progress",
      
    },
    {
      title: t("projects.quran.title") || (isBn ? "কুরআন লার্নিং অ্যাপ" : "Quran Learning App"),
      progress: "0%",
      desc: t("projects.quran.desc") || (isBn ? "সহজে কুরআন শেখার ডিজিটাল প্ল্যাটফর্ম। ইন্টারেক্টিভ মডিউল এবং অডিও সহ।" : "Digital platform to learn Quran easily. With interactive modules and audio."),
      icon: <BookOpen size={32} />,
      color: "from-indigo-500 to-purple-600",
      image: "",
      status: "planned"
    },
    {
      title: t("projects.english.title") || (isBn ? "ইংলিশ লার্নিং অ্যাপ" : "English Learning App"),
      progress: "0%",
      desc: t("projects.english.desc") || (isBn ? "উম্মাহর জন্য সহজ ইংরেজি শিক্ষা। প্র্যাকটিসের মাধ্যমে নিজের যোগ্যতা বৃদ্ধি।" : "Easy English learning for the Ummah. Enhance your skills through practice."),
      icon: <Languages size={32} />,
      color: "from-amber-500 to-orange-600",
      image: "",
      status: "planned"
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#05070a] transition-colors duration-500 pb-20 font-sans">
      <SEO 
        title={isBn ? "প্রকল্পসমূহ" : "Projects"}
        description={isBn ? "কাফআহর চলমান প্রকল্পসমূহ।" : "Ongoing projects of Kafa'ah."}
        url="/projects"
        image="https://kafaahbd.com/projects-cover.jpg"
        breadcrumbs={[
          { name: isBn ? "প্রকল্পসমূহ" : "Projects", url: "/projects" }
        ]}
      />

      {/* Header Section */}
      <section className="pt-8 pb-8 md:pt-12 md:pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-emerald-500/10 blur-[150px] rounded-[100%] pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="self-start mb-6 w-full flex justify-center lg:justify-start">
             <Breadcrumb items={[{ name: isBn ? "প্রকল্পসমূহ" : "Projects" }]} />
          </div>

          <ScrollAnimation>
            <div className="text-center lg:text-left w-full flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-200/50 dark:border-emerald-800/50 backdrop-blur-sm">
                <Layers size={14} /> {isBn ? "আমাদের কর্মযজ্ঞ" : "Innovation Hub"}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                {isBn ? "চলমান প্রকল্পসমূহ" : "Our Projects"}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-base md:text-xl leading-relaxed lg:mr-auto">
                {isBn 
                  ? "প্রযুক্তির সঠিক ব্যবহারের মাধ্যমে আমরা এমন কিছু প্রজেক্ট তৈরি করছি যা 인শাআল্লাহ মানুষের জীবনকে সহজ এবং বরকতময় করবে।" 
                  : "Through the right use of technology, we are building projects that will, InshaAllah, make lives easier and blessed."}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects List (One per line) */}
      <div className="max-w-5xl mx-auto px-4 space-y-12 md:space-y-24">
        {projects.map((project, idx) => (
          <ScrollAnimation key={idx} direction={idx % 2 === 0 ? "left" : "right"}>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="group relative flex flex-col md:flex-row bg-white/70 dark:bg-[#0a0d13]/70 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/50 dark:border-white/5 shadow-xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] transition-all duration-700"
            >
              {/* Image Side */}
              <div className={`w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay opacity-60 z-10`} />
                <motion.img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
                {/* Floating Icon */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 w-16 h-16 bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  {project.icon}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} opacity-[0.03] dark:opacity-[0.05] rounded-full blur-[80px] -mr-20 -mt-20`} />
                
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${
                    project.status === 'in-progress' 
                    ? 'bg-emerald-100/50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800/50' 
                    : 'bg-gray-100/50 text-gray-600 border-gray-200 dark:bg-white/5 dark:text-gray-400 dark:border-white/10'
                  }`}>
                    {project.status === 'in-progress' ? (isBn ? "চলমান" : "In Progress") : (isBn ? "পরিকল্পিত" : "Planned")}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                  <span className={`bg-clip-text hover:bg-gradient-to-r ${project.color}`}>{project.title}</span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl">
                 <Latex> {project.desc}</Latex>
                </p>

                <div className="mt-auto w-full max-w-md bg-gray-50/50 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/5">
                   <div className="flex justify-between items-center mb-3">
                     <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Progress</span>
                     <span className="text-sm font-black text-gray-900 dark:text-white">{project.progress}</span>
                   </div>
                   <ProgressBar progress={project.progress} />
                </div>

                <div className="mt-8 flex justify-between items-center w-full max-w-md">
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-widest italic opacity-70">
                     In Sha Allah
                   </span>
                   <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white dark:hover:text-white text-gray-500 dark:text-gray-400 transition-all group/btn">
                     <ArrowRight size={20} className="group-hover/btn:-rotate-45 transition-transform" />
                   </button>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Future Roadmap / More CTA */}
      <section className="max-w-5xl mx-auto px-4 mt-24 md:mt-32">
        <ScrollAnimation>
          <div className="bg-emerald-700 dark:bg-emerald-900/40 p-10 md:p-16 lg:p-24 rounded-[3rem] text-center relative overflow-hidden group border border-emerald-600 dark:border-emerald-800/50 shadow-2xl">
            {/* abstract elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400/20 to-transparent blur-3xl pointer-events-none"></div>
            
            <Rocket className="absolute -left-16 -bottom-16 text-white/5 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-1000 rotate-12" size={300} />
            
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10 tracking-tight">
              {isBn ? "আরো অনেক কিছু আসছে..." : "Many More Projects Coming..."}
            </h3>
            <p className="text-emerald-100/90 dark:text-emerald-200/80 mb-10 md:mb-12 relative z-10 max-w-2xl mx-auto italic text-lg md:text-xl font-medium">
              {t("projects.more") || (isBn ? "আমরা উম্মাহর সেবায় নিত্যনতুন আইডিয়া নিয়ে কাজ করছি।" : "We are working on innovative ideas to serve the Ummah.")}
            </p>
            <button className="relative z-10 px-10 py-4 bg-white text-emerald-800 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto">
              {isBn ? "আমাদের সাথে যুক্ত হন" : "Join Our Journey"}
              <ArrowRight size={20} />
            </button>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default Projects;
