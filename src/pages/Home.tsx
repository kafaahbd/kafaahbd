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

  useEffect(() => {
    fetchRandomAyat();
  }, []);

  const serviceIcons = [
    <Code size={28} />, 
    <Smartphone size={28} />, 
    <GraduationCap size={28} />, 
    <Layers size={28} />, 
    <ShoppingCart size={28} />
  ];

  const services: string[] = [
    t("home.services.software"),
    t("home.services.islamicapps"),
    t("home.services.learning"),
    t("home.services.saas"),
    t("home.services.ecommerce"),
  ];

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <>
      <SEO 
        title={lang === "bn" ? "হোম | কাফআহ - ইসলামিক ও আধুনিক প্রযুক্তি" : "Home | Kafa'ah - Islamic & Modern Tech"  }
        description={lang === "bn" ? "কাফআহ একটি আধুনিক ইসলামিক মাল্টিপ্রজেক্ট কোম্পানি। আমরা সফটওয়্যার, অ্যাপ এবং ইসলামিক লার্নিং নিয়ে কাজ করি।" : "Kafa'ah is a modern Islamic multi-project company specializing in software, apps, and ethical tech solutions."}
        url="https://kafaahbd.com/"
        image="https://kafaahbd.com/home.jpg"
      />

      <div className="bg-white dark:bg-[#020408] transition-colors duration-500 overflow-x-hidden">
        
        {/* --- Modern Hero Section --- */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
          </div>
          
          <div className="max-w-6xl w-full text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 text-green-700 dark:text-green-400 text-xs md:text-sm font-semibold mb-8 shadow-sm"
            >
              <Sparkles size={16} className="animate-pulse" /> {t("home.slogan")}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-8xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-8"
            >
              <span className="block">{t("home.hero.tagline").split(' ').slice(0, -1).join(' ')}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500">
                {t("home.hero.tagline").split(' ').pop()}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              {t("home.mission.text")}
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="flex flex-wrap justify-center gap-4"
            >
                <Link to="/services" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-green-600/20 flex items-center gap-2">
                    Explore Services <ArrowRight size={18} />
                </Link>
                <Link to="/about" className="px-8 py-4 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-all">
                    Our Vision
                </Link>
            </motion.div>
          </div>
        </section>

        {/* --- Glassmorphic Quranic Section --- */}
        <section className="py-20 px-4 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              {...fadeInUp}
              className="relative overflow-hidden rounded-[2.5rem] bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl p-8 md:p-20 border border-gray-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-none"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 dark:opacity-10 pointer-events-none">
                <BookOpen size={200} />
              </div>

              <div className="relative z-10 text-center">
                <h2 className="text-sm md:text-base font-bold text-green-600 uppercase tracking-[0.3em] mb-10">
                  {lang === "bn" ? "আজকের আয়াত" : "Ayat of the Day"}
                </h2>

                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div key="loader" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2 }} className="flex justify-center py-20">
                      <RefreshCw className="text-green-600" size={40} />
                    </motion.div>
                  ) : (
                    <motion.div 
                      key={ayat?.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      className="space-y-8"
                    >
                      <p className="text-3xl md:text-6xl text-gray-900 dark:text-white leading-[1.6] font-arabic" dir="rtl">
                        {ayat?.arabic}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs md:text-sm font-bold border border-green-100 dark:border-green-800">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        {ayat?.surah} : {ayat?.ayat_number}
                      </div>
                      <p className="text-base md:text-2xl text-gray-600 dark:text-gray-300 italic max-w-3xl mx-auto leading-relaxed">
                        "{ayat?.bangla}"
                      </p>
                      <button 
                        onClick={fetchRandomAyat}
                        className="mt-4 p-4 rounded-full bg-white dark:bg-white/5 shadow-md hover:shadow-xl hover:bg-green-600 hover:text-white transition-all duration-300 active:scale-95"
                      >
                        <RefreshCw size={24} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Modern Bento Services Grid --- */}
        <section className="py-24 px-6 bg-gray-50/50 dark:bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 dark:text-white">
                {t("home.services.title")}
              </h2>
              <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                  className="bg-white dark:bg-[#0d1117] p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                    {serviceIcons[idx]}
                  </div>
                  <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-gray-800 dark:text-gray-200">
                    {service}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Vision & Mission Side-by-Side --- */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
             {[
              { title: t("home.mission.title"), text: t("home.mission.text"), icon: <Target size={40} className="text-green-500" /> },
              { title: t("home.vision.title"), text: t("home.vision.text"), icon: <Eye size={40} className="text-emerald-500" /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                className="p-10 md:p-16 rounded-[3rem] bg-slate-50 dark:bg-[#0d1117] border border-gray-100 dark:border-white/5 relative overflow-hidden group"
              >
                <div className="absolute -right-10 -bottom-10 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                    {item.icon}
                </div>
                <div className="mb-8">{item.icon}</div>
                <h2 className="text-3xl md:text-4xl font-black mb-6 dark:text-white">{item.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="py-24 px-6">
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="max-w-6xl mx-auto rounded-[3rem] bg-gradient-to-br from-green-600 via-green-700 to-emerald-900 p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-7xl font-black text-white mb-10 leading-[1.1]">
                {t("home.cta.title")}
              </h2>
              <Link
                to="https://docs.google.com/forms/..."
                target="_blank"
                className="group inline-flex items-center gap-4 bg-white text-green-800 px-10 py-5 md:px-14 md:py-7 rounded-2xl text-lg md:text-xl font-black shadow-2xl hover:bg-gray-100 transition-all active:scale-95"
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
