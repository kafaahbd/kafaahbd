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
  Eye
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

  useEffect(() => {
    fetchRandomAyat();
  }, []);

  // আইকন ম্যাপিং
  const serviceIcons = [
    <Code size={24} />, 
    <Smartphone size={24} />, 
    <GraduationCap size={24} />, 
    <Layers size={24} />, 
    <ShoppingCart size={24} />
  ];

  const services: string[] = [
    t("home.services.software"),
    t("home.services.islamicapps"),
    t("home.services.learning"),
    t("home.services.saas"),
    t("home.services.ecommerce"),
  ];

  const whyPoints: string[] = [
    t("home.why.authentic"),
    t("home.why.quality"),
    t("home.why.performance"),
    t("home.why.ethical"),
    t("home.why.affordable"),
    t("home.why.dedicated"),
  ];

  return (
    <>
      <SEO 
        title={lang === "bn" ? "হোম" : "Home"}
        description={lang === "bn" ? "কাফআহ ইসলামিক অ্যান্ড মাল্টিপ্রজেক্ট কোম্পানি..." : "Kafa'ah Islamic..."}
        url="https://kafaahbd.com/"
        image="https://kafaahbd.com/home.jpg"
      />

      <div className="bg-slate-50 dark:bg-[#05070a] transition-colors duration-500 overflow-hidden">
        
        {/* --- Hero Section --- */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-100/20 via-transparent to-transparent dark:from-green-900/10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center relative z-10"
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles size={14} /> {t("home.slogan")}
            </motion.div>
            
            <h1 className="text-3xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
                {t("home.hero.tagline")}
              </span>
            </h1>
            
            <p className="text-sm md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
              {t("home.mission.text")}
            </p>
          </motion.div>
        </section>

        {/* --- Quranic Ayat Section --- */}
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-[2rem] bg-white dark:bg-[#0d1117] p-6 md:p-16 shadow-2xl border border-gray-100 dark:border-white/5"
            >
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-4 md:mb-6 text-green-600">
                  <BookOpen size={32} strokeWidth={1.5} />
                </div>
                
                <h2 className="text-lg md:text-2xl font-bold text-green-700 dark:text-green-500 mb-6 md:mb-8 flex items-center justify-center gap-3">
                  <span className="h-[1px] w-8 bg-green-200 dark:bg-green-900"></span>
                  {lang === "bn" ? "আজকের আয়াত" : "Ayat of the Day"}
                  <span className="h-[1px] w-8 bg-green-200 dark:bg-green-900"></span>
                </h2>

                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div key="loader" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2 }} className="flex justify-center py-6 md:py-10 min-h-[300px]">
                      <RefreshCw className="text-green-600" />
                    </motion.div>
                  ) : (
                    <motion.div 
                      key={ayat?.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 md:space-y-10 min-h-[300px]"
                    >
                      <p className="text-2xl md:text-5xl text-gray-900 dark:text-white leading-loose font-arabic" dir="rtl">
                        {ayat?.arabic}
                      </p>
                      <div className="inline-block px-4 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs md:text-sm font-bold">
                        {ayat?.surah} : {ayat?.ayat_number}
                      </div>
                      <p className="text-sm md:text-xl text-gray-600 dark:text-gray-300 italic max-w-2xl mx-auto leading-relaxed">
                        "{ayat?.bangla}"
                      </p>
                      <button 
                        onClick={fetchRandomAyat}
                        className="group p-3 rounded-full bg-slate-50 dark:bg-white/5 hover:bg-green-600 transition-all"
                      >
                        <RefreshCw size={20} className="group-hover:text-white group-active:rotate-180 transition-all duration-500 text-green-600" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Image Section (PC Optimized) --- */}
        <section className="py-12 px-4 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/5"
          >
            <img 
              src="https://kafaahbd.com/home.jpg" 
              alt="Kafaah Vision" 
              width="800"
              height="450"
              loading="lazy"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000 aspect-video"
            />
          </motion.div>
        </section>

        {/* --- Mission & Vision --- */}
        <section className="py-10 md:py-24 px-4 bg-white/50 dark:bg-gray-950/50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 md:gap-10">
            {[
              { title: t("home.mission.title"), text: t("home.mission.text"), icon: <Target className="text-green-500" />, color: "from-green-500/10" },
              { title: t("home.vision.title"), text: t("home.vision.text"), icon: <Eye className="text-emerald-500" />, color: "from-emerald-500/10" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`p-6 md:p-12 rounded-[2rem] bg-gradient-to-br ${item.color} to-transparent border border-gray-100 dark:border-white/5 shadow-sm`}
              >
                <div className="mb-4 md:mb-6">{item.icon}</div>
                <h2 className="text-xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Services --- */}
        <section className="py-10 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black text-center mb-8 md:mb-12 dark:text-white">
              {t("home.services.title")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-[#0d1117] p-4 md:p-10 rounded-2xl border border-gray-100 dark:border-white/5 text-center shadow-sm flex flex-col items-center"
                >
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-green-600">
                    {serviceIcons[idx]}
                  </div>
                  <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-800 dark:text-gray-300">
                    {service}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Why Choose Us --- */}
        <section className="py-10 md:py-24 px-4 bg-gray-50 dark:bg-[#080a0e]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black text-center mb-8 md:mb-12 dark:text-white">
              {t("home.why.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {whyPoints.map((point, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="bg-white dark:bg-[#0d1117] p-4 md:p-6 rounded-2xl border-l-4 border-green-500 shadow-sm"
                >
                  <p className="text-sm md:text-lg text-gray-800 dark:text-gray-200 font-semibold italic">"{point}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Call to Action --- */}
        <section className="py-10 md:py-20 px-4">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[4rem] bg-gradient-to-br from-green-600 to-emerald-800 p-6 md:p-24 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-6xl font-bold text-white mb-6 md:mb-12 leading-tight">
                {t("home.cta.title")}
              </h2>
              <Link
                to="https://docs.google.com/forms/..."
                target="_blank"
                className="group inline-flex items-center gap-3 bg-white text-green-700 px-6 py-3 md:px-12 md:py-6 rounded-full text-sm md:text-xl font-black shadow-xl hover:shadow-2xl transition-all"
              >
                {t("home.cta.button")}
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default Home;