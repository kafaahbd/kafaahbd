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
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#05070a] transition-colors duration-500 pb-20 font-sans">
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
      <section className="relative pt-8 pb-12 md:pt-12 md:pb-20 px-4 overflow-hidden">
        {/* Soft Ambient Background Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-400/10 dark:bg-emerald-900/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-teal-400/10 dark:bg-teal-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          <div className="self-start w-full flex justify-center lg:justify-start mb-6 md:mb-10">
             <Breadcrumb items={[{ name: isBn ? "আমাদের সম্পর্কে" : "About Us" }]} />
          </div>

          <div className="w-full text-center lg:text-left">
            <ScrollAnimation>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 lg:mb-8 shadow-sm">
                <History size={16} /> {isBn ? "প্রতিষ্ঠা: ১ জানুয়ারি ২০২৬" : "Est. January 1, 2026"}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 md:mb-8 tracking-tight">
                {isBn ? "আমাদের সম্পর্কে" : "About Us"}
              </h1>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-3xl lg:mr-auto">
                {isBn 
                  ? "Kafa’ah Islamic and Multiproject Company একটি মহান উদ্দেশ্য নিয়ে যাত্রা শুরু করেছে—ইসলামিক জ্ঞান বিশ্বব্যাপী ছড়িয়ে দেওয়া এবং শিক্ষাকে প্রযুক্তির মাধ্যমে আধুনিক করে তোলা।"
                  : "Kafa’ah Islamic and Multiproject Company was established with a great purpose—to spread Islamic knowledge globally and modernize education through technology."}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 space-y-12 md:space-y-24">
        
        {/* --- Vision & Mission Cards --- */}
        <section className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ScrollAnimation direction="right" className="h-full">
            <div className="p-8 md:p-12 lg:p-14 rounded-[2.5rem] bg-white/60 dark:bg-[#0a0d13]/70 backdrop-blur-2xl border border-white/50 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all h-full group">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-inner">
                <Target size={32} />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 tracking-tight">{isBn ? "আমাদের লক্ষ্য (Vision)" : "Our Vision"}</h2>
              <ul className="space-y-5 text-gray-600 dark:text-gray-400 text-base md:text-lg">
                <li className="flex gap-4 items-start"><CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={24} /> <span>{isBn ? "বিশ্বমানের ইসলামিক ও এডুকেশনাল ডিজিটাল প্ল্যাটফর্ম তৈরি করা" : "To build world-class Islamic and educational digital platforms."}</span></li>
                <li className="flex gap-4 items-start"><CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={24} /> <span>{isBn ? "আন্তর্জাতিক পর্যায়ে আধুনিক টেক সলিউশন নিশ্চিত করা" : "To ensure modern tech solutions at an international level."}</span></li>
                <li className="flex gap-4 items-start"><CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={24} /> <span>{isBn ? "নির্ভুল ও নিরাপদ ইসলামিক তথ্য পৌঁছে দেওয়া" : "To deliver accurate and safe Islamic information."}</span></li>
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left" className="h-full">
            <div className="p-8 md:p-12 lg:p-14 rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-green-800 text-white shadow-[0_20px_50px_rgba(16,185,129,0.2)] h-full relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
               <div className="absolute -right-8 -bottom-8 opacity-[0.07] rotate-12 text-white pointer-events-none">
                <Rocket size={240} className="group-hover:-translate-y-8 group-hover:translate-x-8 transition-transform duration-1000" />
               </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-8 md:mb-10 shadow-sm border border-white/20">
                  <Zap size={32} />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 tracking-tight text-white">{isBn ? "ব্যতিক্রমী বৈশিষ্ট্য" : "Our Uniqueness"}</h2>
                <div className="grid grid-cols-1 gap-3 md:gap-4">
                  {uniqueness.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/10 backdrop-blur-md text-sm md:text-base transition-colors">
                      <div className="w-2 h-2 rounded-full bg-emerald-300 shrink-0 shadow-[0_0_8px_rgba(110,231,183,0.8)]" />
                      {isBn ? item.bn : item.en}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* --- Target & Partner Section --- */}
        <section className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
          <ScrollAnimation className="md:col-span-2">
            <div className="bg-white/60 dark:bg-[#0a0d13]/70 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/50 dark:border-white/5 flex flex-col md:flex-row gap-6 md:gap-10 items-center lg:items-start text-center lg:text-left shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-24 h-24 shrink-0 bg-orange-50 dark:bg-orange-500/10 rounded-[2rem] flex items-center justify-center text-orange-500 shadow-inner">
                <Users size={48} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{isBn ? "কাদের জন্য আমরা?" : "Our Target Users"}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                  {isBn 
                    ? "বিশ্বের প্রতিটি মানুষ—যারা ইসলাম শিখতে চান, শিক্ষা নিতে চান, বা উপকারী ডিজিটাল সমাধান ব্যবহার করতে চান।"
                    : "Every person in the world—who wants to learn Islam, pursue education, or use beneficial digital solutions."}
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2} className="h-full">
            <div className="bg-emerald-50/80 dark:bg-emerald-900/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-emerald-100/50 dark:border-emerald-500/20 text-center shadow-lg h-full flex flex-col justify-center">
              <div className="w-20 h-20 mx-auto bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald-50 dark:border-white/5">
                 <Handshake size={40} className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{isBn ? "সহযোগী প্রতিষ্ঠান" : "Our Partner"}</h3>
              <p className="text-3xl md:text-4xl font-black text-emerald-700 dark:text-emerald-500 tracking-widest uppercase">Doyox</p>
            </div>
          </ScrollAnimation>
        </section>

        {/* --- Closing Quote --- */}
        <section className="text-center py-12 md:py-20 relative">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto px-4 relative z-10">
               <div className="w-24 h-24 mx-auto bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-[2rem] flex items-center justify-center mb-10 shadow-sm border border-white/50 dark:border-white/10">
                 <Globe2 size={48} className="text-gray-400 dark:text-gray-500" strokeWidth={1} />
               </div>
               <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium italic text-gray-900 dark:text-gray-200 leading-snug md:leading-tight mb-8">
                 "{isBn 
                    ? "আমরা বিশ্বাস করি, সঠিক জ্ঞান, সঠিক প্রযুক্তি এবং সঠিক নিয়ত একত্র হলে পৃথিবী বদলে যায়।" 
                    : "We believe that when the right knowledge, the right technology, and the right intention come together, the world changes."}"
               </h2>
               <div className="inline-block px-8 py-3 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 font-bold text-lg md:text-xl tracking-widest shadow-sm">
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