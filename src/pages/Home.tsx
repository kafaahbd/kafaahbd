import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  BookOpen, 
  RefreshCw, 
  Code, 
  Smartphone, 
  GraduationCap, 
  Layers, 
  ShoppingCart, 
  ChevronRight,
  Target,
  Eye,
  ArrowRight
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
      const response = await fetch(
        "https://raw.githubusercontent.com/kafaahbd/nothing/refs/heads/main/ayat.json"
      );
      const data: Ayat[] = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setAyat(data[randomIndex]);
    } catch (err) {
      console.error("Failed to fetch ayat", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRandomAyat(); }, []);

  const serviceIcons = [
    <Code size={24} />, <Smartphone size={24} />, 
    <GraduationCap size={24} />, <Layers size={24} />, <ShoppingCart size={24} />
  ];

  const services: string[] = [
    t("home.services.software"), t("home.services.islamicapps"),
    t("home.services.learning"), t("home.services.saas"), t("home.services.ecommerce"),
  ];

  const whyPoints: string[] = [
    t("home.why.authentic"), t("home.why.quality"), t("home.why.performance"),
    t("home.why.ethical"), t("home.why.affordable"), t("home.why.dedicated"),
  ];

  return (
    <>
      <SEO 
        title={lang === "bn" ? "হোম | কাফআহ - আধুনিক ইসলামিক প্রযুক্তি" : "Home | Kafa'ah - Modern Islamic Tech"}
        description={lang === "bn" ? "কাফআহ ইসলামিক অ্যান্ড মাল্টিপ্রজেক্ট কোম্পানি..." : "Kafa'ah Islamic & Multi-project Company..."}
        url="https://kafaahbd.com/"
        image="https://kafaahbd.com/home.jpg"
      />

      <div className="bg-[#fdfdfd] dark:bg-[#02040a] transition-colors duration-500 overflow-hidden">
        
        {/* --- Hero Section --- */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
          {/* Subtle Background Mesh */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 dark:opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-600 blur-[120px] rounded-full"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl text-center relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-widest border border-green-100 dark:border-green-900/50 mb-8">
              <Sparkles size={14} className="animate-pulse" /> {t("home.slogan")}
            </div>
            
            <h1 className="text-4xl md:text-8xl font-black text-gray-900 dark:text-white leading-[1.1] mb-8 tracking-tighter">
              {t("home.hero.tagline").split(' ').map((word, i) => (
                <span key={i} className={i === 2 ? "text-green-600 dark:text-green-500" : ""}>{word} </span>
              ))}
            </h1>
            
            <p className="text-base md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
              {t("home.mission.text")}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
               <Link to="/join" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-green-600/20 flex items-center gap-2 group">
                  Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </Link>
               <Link to="/projects" className="px-8 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all">
                  Our Projects
               </Link>
            </div>
          </motion.div>
        </section>

        {/* --- Image Section (RESTORED) --- */}
        <section className="pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white dark:border-[#0d1117] ring-1 ring-gray-200 dark:ring-white/5"
            >
              <img 
                src="https://kafaahbd.com/home.jpg" 
                alt="Kafaah Workspace" 
                className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </section>

        {/* --- Modern Ayat Section (Premium Glass) --- */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="relative overflow-hidden rounded-[3rem] bg-white dark:bg-[#0d1117] p-8 md:p-20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-white/5"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none">
                <BookOpen size={180} />
              </div>

              <div className="relative z-10 text-center">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-green-600 mb-10">
                  {lang === "bn" ? "আজকের আয়াত" : "Ayat of the Day"}
                </h2>

                <AnimatePresence mode="wait">
                  {loading ? (
                    <div className="flex justify-center py-20"><RefreshCw className="animate-spin text-green-600" size={32} /></div>
                  ) : (
                    <motion.div 
                      key={ayat?.id}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="space-y-8"
                    >
                      <p className="text-3xl md:text-6xl text-gray-900 dark:text-white leading-[1.4] font-arabic" dir="rtl">
                        {ayat?.arabic}
                      </p>
                      <div className="inline-block px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold border border-green-100 dark:border-green-800">
                        {ayat?.surah} : {ayat?.ayat_number}
                      </div>
                      <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 italic max-w-2xl mx-auto leading-relaxed">
                        "{ayat?.bangla}"
                      </p>
                      <button onClick={fetchRandomAyat} className="p-4 rounded-full bg-gray-50 dark:bg-white/5 hover:bg-green-600 hover:text-white transition-all active:scale-90">
                        <RefreshCw size={20} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Bento Grid Features (Services) --- */}
        <section className="py-24 px-4 bg-gray-50/50 dark:bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black dark:text-white mb-4">{t("home.services.title")}</h2>
               <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-[#0d1117] p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm text-center flex flex-col items-center group transition-all hover:shadow-xl hover:border-green-500/30"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                    {serviceIcons[idx]}
                  </div>
                  <h3 className="text-[11px] md:text-xs font-black uppercase tracking-widest text-gray-800 dark:text-gray-200">
                    {service}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Why Us Section --- */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-black dark:text-white leading-tight mb-6">{t("home.why.title")}</h2>
              <p className="text-gray-500 dark:text-gray-400">Serving the Ummah with modern excellence and ethical standards.</p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyPoints.slice(0, 4).map((point, idx) => (
                <div key={idx} className="p-8 rounded-[2rem] bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-white/5 shadow-sm group hover:bg-green-600 transition-all duration-500">
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-white transition-colors italic">"{point}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Call to Action --- */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto rounded-[3rem] bg-slate-900 dark:bg-green-900/20 p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black text-white mb-10 leading-none">
                {t("home.cta.title")}
              </h2>
              <Link
                to="/join"
                className="group inline-flex items-center gap-4 bg-green-600 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-xl hover:bg-green-500 transition-all"
              >
                {t("home.cta.button")}
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
