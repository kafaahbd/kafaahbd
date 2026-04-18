import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, BookOpen, RefreshCw, Code, Smartphone, 
  GraduationCap, Layers, ShoppingCart, ChevronRight,
  Target, Eye, Zap, ShieldCheck, HeartHandshake
} from "lucide-react"; 
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

interface Ayat {
  id: number;
  surah: string;
  ayat_number: number;
  arabic: string;
  bangla: string;
}

const Home: React.FC = () => {
  const { t, lang } = useLanguage();
  const [ayat, setAyat] = useState<Ayat | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRandomAyat = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await fetch("https://raw.githubusercontent.com/kafaahbd/nothing/refs/heads/main/ayat.json");
      const data: Ayat[] = await response.json();
      setAyat(data[Math.floor(Math.random() * data.length)]);
    } catch (err) {
      console.error("Failed to fetch ayat", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRandomAyat(); }, []);

  const serviceIcons = [
    <Code size={28} />, <Smartphone size={28} />, 
    <GraduationCap size={28} />, <Layers size={28} />, <ShoppingCart size={28} />
  ];

  const services: string[] = [
    t("home.services.software"), t("home.services.islamicapps"),
    t("home.services.learning"), t("home.services.saas"), t("home.services.ecommerce"),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <SEO 
        title={lang === "bn" ? "হোম | কাফআহ - আধুনিক ইসলামিক প্রযুক্তি" : "Home | Kafa'ah - Modern Islamic Tech"}
        description={lang === "bn" ? "প্রযুক্তির মাধ্যমে ইসলামের সেবা। আমরা তৈরি করি আধুনিক সফটওয়্যার এবং ইসলামিক অ্যাপস।" : "Serving Islam through technology. We build modern software and ethical Islamic applications."}
        url="https://kafaahbd.com/"
        image="https://kafaahbd.com/home.jpg"
      />

      <div className="bg-[#f8fafc] dark:bg-[#030712] transition-colors duration-500">
        
        {/* --- Hero: Dynamic Mesh Background --- */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-400/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-emerald-500/10 blur-[100px] rounded-full" />
          </div>

          <div className="max-w-6xl w-full relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-center mb-8"
            >
              <span className="glass-effect px-4 py-2 rounded-full text-xs font-bold tracking-tighter text-green-600 dark:text-green-400 flex items-center gap-2 border border-green-500/20">
                <Sparkles size={14} className="animate-spin-slow" /> {t("home.slogan")}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-8xl font-black text-center text-slate-900 dark:text-white leading-[0.95] tracking-tight mb-8"
            >
              {lang === "bn" ? "ইসলামিক প্রযুক্তি" : "Modern Islamic"}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-tr from-green-600 via-emerald-500 to-teal-400">
                {lang === "bn" ? "বিপ্লব" : "Revolution"}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto mb-12 font-medium"
            >
              {t("home.mission.text")}
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/join" className="w-full sm:w-auto px-10 py-5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-2 group">
                {t("home.cta.button")} <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="w-full sm:w-auto px-10 py-5 glass-effect text-slate-900 dark:text-white rounded-2xl font-bold hover:bg-white/50 transition-all text-center">
                {lang === "bn" ? "প্রজেক্টসমূহ" : "View Projects"}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* --- The "Bento" Ayat Section --- */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              className="lg:col-span-8 relative group overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900/50 p-8 md:p-16 border border-slate-200 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <BookOpen size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-2 w-12 bg-green-500 rounded-full" />
                  <h2 className="text-sm font-black uppercase tracking-widest text-green-600">{lang === "bn" ? "আজকের আয়াত" : "Ayat of the Day"}</h2>
                </div>

                <AnimatePresence mode="wait">
                  {loading ? (
                    <div className="h-64 flex items-center justify-center"><RefreshCw className="animate-spin text-green-500" size={32} /></div>
                  ) : (
                    <motion.div key={ayat?.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                      <p className="text-3xl md:text-5xl text-right font-arabic leading-relaxed text-slate-800 dark:text-white" dir="rtl">{ayat?.arabic}</p>
                      <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 italic">"{ayat?.bangla}"</p>
                      <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5">
                        <span className="text-sm font-bold text-green-600 bg-green-50 dark:bg-green-500/10 px-4 py-2 rounded-full">{ayat?.surah} : {ayat?.ayat_number}</span>
                        <button onClick={fetchRandomAyat} className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-green-600 hover:text-white transition-all active:scale-95"><RefreshCw size={20} /></button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              className="lg:col-span-4 rounded-[2.5rem] bg-gradient-to-br from-green-600 to-emerald-800 p-8 md:p-12 text-white flex flex-col justify-between"
            >
              <Zap size={40} className="mb-6 animate-pulse" />
              <div>
                <h3 className="text-3xl font-black mb-4 leading-tight">{lang === "bn" ? "দ্রুত ও আধুনিক সেবা" : "Fast & Ethical Solutions"}</h3>
                <p className="text-green-100/80 mb-8">{lang === "bn" ? "আমরা শরীয়াহ সম্মত ভাবে সফটওয়্যার সমাধান প্রদান করি।" : "We provide Shariah-compliant software solutions with modern tech."}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold hover:underline">
                  {lang === "bn" ? "আমাদের সাথে যোগাযোগ করুন" : "Get in touch"} <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Services: Hover-Grid --- */}
        <section className="py-24 px-4 bg-white dark:bg-[#020617] transition-colors duration-500">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-6xl font-black mb-4 dark:text-white">{t("home.services.title")}</h2>
              <p className="text-slate-500 dark:text-slate-400">{lang === "bn" ? "আমরা যা অফার করি" : "What we offer to the Ummah"}</p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-[2rem] bg-[#f8fafc] dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 hover:border-green-500/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-green-600 shadow-sm group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 mb-6">
                    {serviceIcons[idx]}
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-slate-800 dark:text-slate-200">{service}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Why Choose Us: Modern Cards --- */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:pr-12">
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight dark:text-white">{t("home.why.title")}</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">{lang === "bn" ? "কেন আমরা আলাদা? আমাদের মূল্যবোধ এবং কাজের গুণমান।" : "Why choose us? Our values and quality of work set us apart."}</p>
              <div className="flex gap-4">
                <div className="p-4 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600"><ShieldCheck size={24} /></div>
                <div className="p-4 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600"><HeartHandshake size={24} /></div>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {t("home.why.authentic") && [
                t("home.why.authentic"), t("home.why.performance"), 
                t("home.why.ethical"), t("home.why.affordable")
              ].map((point, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 shadow-sm"
                >
                  <div className="h-8 w-8 bg-green-500/10 rounded-full mb-4 flex items-center justify-center text-green-600 font-bold">{idx + 1}</div>
                  <p className="text-lg font-bold text-slate-800 dark:text-slate-200 italic">"{point}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Dynamic CTA --- */}
        <section className="py-20 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto relative overflow-hidden rounded-[3rem] bg-slate-900 dark:bg-green-900/20 p-12 md:p-24 text-center border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-none">{t("home.cta.title")}</h2>
            <Link
              to="/join"
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-6 rounded-2xl text-xl font-black hover:bg-green-500 hover:text-white transition-all shadow-2xl"
            >
              {t("home.cta.button")} <ChevronRight />
            </Link>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default Home;
