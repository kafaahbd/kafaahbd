import React from 'react';
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  History, 
  Target, 
  Zap, 
  Users, 
  Handshake, 
  CheckCircle2, 
  Globe2,
  Rocket
} from 'lucide-react';

const About: React.FC = () => {
  const { lang } = useLanguage();

  const isBn = lang === "bn";

  // Uniqueness points mapping
  const uniqueness = [
    { bn: "১০০% নির্ভরযোগ্য ইসলামিক কনটেন্ট", en: "100% Authentic Islamic Content" },
    { bn: "আধুনিক ও নিরাপদ অ্যাপ/ওয়েব ডেভেলপমেন্ট", en: "Modern & Secure App/Web Development" },
    { bn: "ফাস্ট পারফরম্যান্স এবং ক্লিন ইউজার ইন্টারফেস", en: "Fast Performance & Clean UI" },
    { bn: "ইসলামিক নৈতিক মানদণ্ড বজায় রাখা", en: "Islamic Ethical Standards" },
    { bn: "সাশ্রয়ী ও সহজ সমাধান", en: "Affordable & User-Friendly Solutions" },
    { bn: "দক্ষ এবং নিবেদিত টিম", en: "Skilled & Dedicated Team" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#05070a] transition-colors duration-500 pb-20">
      <SEO 
        title={isBn ? "আমাদের সম্পর্কে" : "About Us"}
        description={isBn ? "কাফআহ প্রতিষ্ঠিত হয় ২০২৬ সালে। আমাদের লক্ষ্য ইসলামিক জ্ঞান প্রসার।" : "Kafa'ah was established in 2026."}
        url="https://kafaahbd.com/about"
      />

      {/* --- Header Section --- */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-emerald-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <History size={16} /> {isBn ? "প্রতিষ্ঠা: ১ জানুয়ারি ২০২৬" : "Est. January 1, 2026"}
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              {isBn ? "আমাদের সম্পর্কে" : "About Us"}
            </h1>
            <p className="text-sm md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              {isBn 
                ? "Kafa’ah Islamic and Multiproject Company একটি মহান উদ্দেশ্য নিয়ে যাত্রা শুরু করেছে—ইসলামিক জ্ঞান বিশ্বব্যাপী ছড়িয়ে দেওয়া এবং শিক্ষাকে প্রযুক্তির মাধ্যমে আধুনিক করে তোলা।"
                : "Kafa’ah Islamic and Multiproject Company was established with a great purpose—to spread Islamic knowledge globally and modernize education through technology."}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 space-y-24">
        
        {/* --- Vision & Mission Cards --- */}
        <section className="grid md:grid-cols-2 gap-8">
          <ScrollAnimation direction="right" className="h-full">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-white/5 shadow-xl h-full">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold dark:text-white mb-6">{isBn ? "আমাদের লক্ষ্য (Vision)" : "Our Vision"}</h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-sm md:text-base">
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={20} /> {isBn ? "বিশ্বমানের ইসলামিক ও এডুকেশনাল ডিজিটাল প্ল্যাটফর্ম তৈরি করা" : "To build world-class Islamic and educational digital platforms."}</li>
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={20} /> {isBn ? "আন্তর্জাতিক পর্যায়ে আধুনিক টেক সলিউশন নিশ্চিত করা" : "To ensure modern tech solutions at an international level."}</li>
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={20} /> {isBn ? "নির্ভুল ও নিরাপদ ইসলামিক তথ্য পৌঁছে দেওয়া" : "To deliver accurate and safe Islamic information."}</li>
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left" className="h-full">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-xl h-full relative overflow-hidden">
               <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12 text-white">
                <Rocket size={200} />
               </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-8">
                  <Zap size={32} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{isBn ? "ব্যতিক্রমী বৈশিষ্ট্য" : "Our Uniqueness"}</h2>
                <div className="grid grid-cols-1 gap-3">
                  {uniqueness.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm text-xs md:text-sm">
                      <div className="w-2 h-2 rounded-full bg-emerald-300" />
                      {isBn ? item.bn : item.en}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* --- Target & Partner Section --- */}
        <section className="grid md:grid-cols-3 gap-8 items-center">
          <ScrollAnimation className="md:col-span-2">
            <div className="bg-white dark:bg-[#0d1117] p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-white/5 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-20 h-20 shrink-0 bg-orange-100 dark:bg-orange-500/10 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400">
                <Users size={40} />
              </div>
              <div>
                <h3 className="text-xl font-bold dark:text-white mb-2">{isBn ? "কাদের জন্য আমরা?" : "Our Target Users"}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {isBn 
                    ? "বিশ্বের প্রতিটি মানুষ—যারা ইসলাম শিখতে চান, শিক্ষা নিতে চান, বা উপকারী ডিজিটাল সমাধান ব্যবহার করতে চান।"
                    : "Every person in the world—who wants to learn Islam, pursue education, or use beneficial digital solutions."}
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-500/20 text-center">
              <Handshake size={40} className="mx-auto text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold dark:text-white mb-2">{isBn ? "সহযোগী প্রতিষ্ঠান" : "Our Partner"}</h3>
              <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">Doyox</p>
            </div>
          </ScrollAnimation>
        </section>

        {/* --- Closing Quote --- */}
        <section className="text-center py-10">
          <ScrollAnimation>
            <div className="max-w-2xl mx-auto px-4">
               <Globe2 size={48} className="mx-auto text-gray-300 dark:text-gray-700 mb-8" />
               <h2 className="text-xl md:text-3xl font-medium italic text-gray-800 dark:text-gray-200 leading-relaxed">
                 "{isBn 
                    ? "আমরা বিশ্বাস করি, সঠিক জ্ঞান, সঠিক প্রযুক্তি এবং সঠিক নিয়ত একত্র হলে পৃথিবী বদলে যায়।" 
                    : "We believe that when the right knowledge, the right technology, and the right intention come together, the world changes."}"
               </h2>
               <p className="mt-6 text-emerald-600 font-bold text-lg md:text-xl">In Sha Allah.</p>
            </div>
          </ScrollAnimation>
        </section>

      </div>
    </div>
  );
};

export default About;