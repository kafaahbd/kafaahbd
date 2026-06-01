import React from 'react';
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
import Breadcrumb from "../components/Breadcrumb";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  History, 
  Target, 
  Zap, 
  Users, 
  Handshake, 
  CheckCircle2, 
  Globe2,
  Rocket,
  Sparkles
} from 'lucide-react';

const About: React.FC = () => {
  const { lang } = useLanguage();
  const isBn = lang === "bn";

  const uniqueness = [
    { bn: "১০০% নির্ভরযোগ্য ইসলামিক কনটেন্ট", en: "100% Authentic Islamic Content" },
    { bn: "আধুনিক ও নিরাপদ অ্যাপ/ওয়েব ডেভেলপমেন্ট", en: "Modern & Secure App/Web Development" },
    { bn: "ফাস্ট পারফরম্যান্স এবং ক্লিন ইউজার ইন্টারফেস", en: "Fast Performance & Clean UI" },
    { bn: "ইসলামিক নৈতিক মানদণ্ড বজায় রাখা", en: "Islamic Ethical Standards" },
    { bn: "সাশ্রয়ী ও সহজ সমাধান", en: "Affordable & User-Friendly Solutions" },
    { bn: "দক্ষ এবং নিবেদিত টিম", en: "Skilled & Dedicated Team" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] transition-colors duration-500 pb-24 font-sans overflow-x-hidden">
      <SEO 
        title={isBn ? "আমাদের সম্পর্কে" : "About Us"}
        description={isBn ? "কাফআহ প্রতিষ্ঠিত হয় ২০২৬ সালে। আমাদের লক্ষ্য ইসলামিক জ্ঞান প্রসার ও প্রযুক্তি।" : "Kafa'ah was established in 2026. Our goal is to spread Islamic knowledge through modern technology."}
        url="/about"
        image="https://kafaahbd.com/about-cover.jpg"
        breadcrumbs={[
          { name: isBn ? "সম্পর্কে" : "About Us", url: "/about" }
        ]}
      />

      {/* --- Header Section --- */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 overflow-hidden">
        {/* Soft Ambient Background Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-teal-500/10 dark:bg-teal-500/5 blur-[130px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          <div className="self-start w-full flex justify-center lg:justify-start mb-8 md:mb-12">
             <Breadcrumb items={[{ name: isBn ? "আমাদের সম্পর্কে" : "About Us" }]} />
          </div>

          <div className="w-full text-center lg:text-left">
            <ScrollAnimation>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 lg:mb-8 backdrop-blur-md shadow-sm">
                <History size={14} className="animate-pulse" /> {isBn ? "প্রতিষ্ঠা: ১ জানুয়ারি ২০২৬" : "Est. January 1, 2026"}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tight max-w-4xl leading-tight">
                {isBn ? "আমাদের পরিচয় ও উদ্দেশ্য" : "Bridging Islamic Wisdom & Technology"}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-3xl lg:mr-auto">
                {isBn 
                  ? "Kafa’ah Islamic and Multiproject Company একটি মহান উদ্দেশ্য নিয়ে যাত্রা শুরু করেছে—ইসলামিক জ্ঞান বিশ্বব্যাপী ছড়িয়ে দেওয়া এবং শিক্ষাকে প্রযুক্তির মাধ্যমে আধুনিক করে তোলা।"
                  : "Kafa’ah Islamic and Multiproject Company was established with a clear mandate—to scale and amplify authentic Islamic knowledge globally while modernizing modular systems through engineering excellence."}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* --- Content Ecosystem Container --- */}
      <div className="max-w-6xl mx-auto px-4 space-y-16 md:space-y-24">
        
        {/* --- Vision & Mission Cards --- */}
        <section className="grid lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          <ScrollAnimation direction="right" className="lg:col-span-7 h-full">
            <div className="p-8 sm:p-12 lg:p-14 rounded-[2rem] bg-white dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/50 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                  {isBn ? "আমাদের লক্ষ্য (Vision)" : "Our Core Vision"}
                </h2>
                <ul className="space-y-6 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  <li className="flex gap-4 items-start">
                    <div className="p-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 shrink-0 mt-0.5">
                      <CheckCircle2 size={18} />
                    </div>
                    <span>{isBn ? "বিশ্বমানের ইসলামিক ও এডুকেশনাল ডিজিটাল প্ল্যাটফর্ম তৈরি করা" : "To engineer world-class Islamic and educational digital platforms that serve worldwide workflows."}</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="p-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 shrink-0 mt-0.5">
                      <CheckCircle2 size={18} />
                    </div>
                    <span>{isBn ? "আন্তর্জাতিক পর্যায়ে আধুনিক টেক সリューション নিশ্চিত করা" : "To deploy resilient, enterprise-grade technology ecosystems tailored for global performance standards."}</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="p-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 shrink-0 mt-0.5">
                      <CheckCircle2 size={18} />
                    </div>
                    <span>{isBn ? "নির্ভুল ও নিরাপদ ইসলামিক তথ্য পৌঁছে দেওয়া" : "To provide verified, pristine, and secure access channels for traditional Islamic knowledge databases."}</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left" className="lg:col-span-5 h-full">
            <div className="p-8 sm:p-12 rounded-[2rem] bg-gradient-to-br from-emerald-800 to-teal-950 dark:from-emerald-950/40 dark:to-slate-950 text-white shadow-xl h-full relative overflow-hidden flex flex-col justify-between group border border-emerald-700/20 dark:border-emerald-800/20">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
               <div className="absolute -right-12 -bottom-12 opacity-[0.05] dark:opacity-[0.03] rotate-12 text-white pointer-events-none">
                <Rocket size={220} className="group-hover:-translate-y-6 group-hover:translate-x-6 transition-transform duration-1000 ease-out" />
               </div>
              <div className="relative z-10 w-full">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-8 border border-white/10">
                  <Zap className="w-6 h-6 animate-pulse" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight text-white">
                  {isBn ? "ব্যতিক্রমী বৈশিষ্ট্য" : "Our Uniqueness"}
                </h2>
                <div className="grid grid-cols-1 gap-3 w-full">
                  {uniqueness.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 text-xs sm:text-sm transition-colors duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                      <span className="font-medium tracking-wide">{isBn ? item.bn : item.en}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* --- Target & Partner Section --- */}
        <section className="grid lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          <ScrollAnimation className="lg:col-span-8 h-full">
            <div className="bg-white dark:bg-slate-900/40 backdrop-blur-md p-8 sm:p-10 lg:p-12 rounded-[2rem] border border-slate-200/60 dark:border-slate-800/50 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start text-center sm:text-left shadow-sm hover:shadow-xl transition-all duration-500 h-full justify-center">
              <div className="w-20 h-20 shrink-0 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 shadow-sm">
                <Users className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                  {isBn ? "কাদের জন্য আমরা?" : "Target Demographic"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                  {isBn 
                    ? "বিশ্বের প্রতিটি মানুষ—যারা ইসলাম শিখতে চান, শিক্ষা নিতে চান, বা উপকারী ডিজিটাল সমাধান ব্যবহার করতে চান।"
                    : "The global community—tailored perfectly for individuals striving to seek authentic Islamic parameters, modern functional literacy, or intuitive productivity apps."}
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1} className="lg:col-span-4 h-full">
            <div className="bg-emerald-500/5 dark:bg-emerald-500/[0.02] backdrop-blur-md p-8 sm:p-10 rounded-[2rem] border border-emerald-500/20 text-center shadow-sm h-full flex flex-col justify-center items-center group hover:border-emerald-500/40 transition-colors duration-500">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-5 shadow-sm border border-emerald-500/10 group-hover:scale-105 transition-transform duration-300">
                 <Handshake className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-sm font-semibold text-slate-400 dark:text-slate-500 mb-1.5 tracking-wider uppercase">
                {isBn ? "সহযোগী প্রতিষ্ঠান" : "Strategic Alliance"}
              </h3>
              <p className="text-2xl sm:text-3xl font-black text-emerald-700 dark:text-emerald-500 tracking-wider uppercase font-sans">
                Doyox
              </p>
            </div>
          </ScrollAnimation>
        </section>

        {/* --- Closing Quote --- */}
        <section className="text-center py-12 md:py-16 relative">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto px-4 relative z-10">
               <div className="w-20 h-20 mx-auto bg-slate-100 dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-slate-200/50 dark:border-slate-800/40">
                 <Globe2 className="w-9 h-9 text-slate-400 dark:text-slate-600" strokeWidth={1} />
               </div>
               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-slate-800 dark:text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto px-2">
                 "{isBn 
                    ? "আমরা বিশ্বাস করি, সঠিক জ্ঞান, সঠিক প্রযুক্তি এবং সঠিক নিয়ত একত্র হলে পৃথিবী বদলে যায়।" 
                    : "We believe that when absolute knowledge, robust technology, and uncompromised intentions converge, global transformation becomes inevitable."}"
               </h2>
               <div className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-700 dark:text-emerald-400 font-bold text-sm sm:text-base tracking-widest uppercase">
                 <Sparkles size={14} className="text-emerald-500/60" />
                 In Sha Allah.
               </div>
            </div>
          </ScrollAnimation>
        </section>

      </div>
    </div>
  );
};

export default About;
