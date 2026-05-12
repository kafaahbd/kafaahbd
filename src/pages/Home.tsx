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
        title={lang === "bn" ? "হোম | কাফআহ" : "Home | Kafa'ah"  }
        description={lang === "bn" ? "কাফআহ ইসলামিক অ্যান্ড মাল্টিপ্রজেক্ট কোম্পানি, যেখানে প্রযুক্তি এবং ইসলাম ერთত্রে মিলেছে।" : "Kafa'ah Islamic & Multiproject Company, merging technology and Islam."}
        url="/"
        image="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaahlogo5.png"
      />

      <div className="bg-[#f8fafc] dark:bg-[#05070a] transition-colors duration-500 overflow-hidden font-sans">
        
        {/* --- Hero Section --- */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-4 overflow-hidden py-12 md:py-24">
          <div className="absolute inset-0 pointer-events-none">
            {/* Soft Ambient Glow Elements */}
            <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-emerald-400/10 dark:bg-emerald-900/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-green-300/10 dark:bg-green-800/20 blur-[100px] rounded-full mix-blend-screen" />
          </div>
          
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
            {/* Image for PC/Tablet logic: hidden on smaller devices */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-emerald-100 to-green-50 dark:from-emerald-900/30 dark:to-green-900/10 blur-2xl opacity-60 z-0"></div>
                <img 
                  src="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaahlogo5.png" 
                  alt="Kafa'ah Hero" 
                  className="relative z-10 w-full max-w-md drop-shadow-2xl object-contain animate-float"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 text-emerald-700 dark:text-emerald-400 text-[11px] md:text-sm font-bold uppercase tracking-widest mb-6 md:mb-8 shadow-sm"
              >
                <Sparkles size={16} /> {t("home.slogan")}
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-emerald-600 via-green-500 to-teal-400">
                  {t("home.hero.tagline")}
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed mb-10">
                {t("home.mission.text")}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                 <Link 
                   to="/projects"
                   className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-lg shadow-emerald-500/30 flex justify-center items-center gap-2 group"
                 >
                   Explore Projects <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </Link>
                 <Link
                   to="/about"
                   className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/60 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold backdrop-blur-md border border-gray-200/50 dark:border-white/10 transition-all flex justify-center items-center"
                 >
                   Learn More
                 </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Quranic Ayat Section --- */}
        <section className="py-12 md:py-24 px-4 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-[2.5rem] bg-white/60 dark:bg-white/5 backdrop-blur-xl p-8 md:p-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 dark:border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent dark:from-emerald-500/10 pointer-events-none"></div>
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-6 md:mb-8 text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 w-16 h-16 rounded-2xl items-center mx-auto shadow-inner">
                  <BookOpen size={32} strokeWidth={1.5} />
                </div>
                
                <h2 className="text-xl md:text-3xl font-black text-gray-900 dark:text-white mb-8 md:mb-12 flex items-center justify-center gap-4 uppercase tracking-wider">
                  <span className="h-[2px] w-12 bg-emerald-200 dark:bg-emerald-900/50 rounded-full"></span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-500">
                    {lang === "bn" ? "আজকের আয়াত" : "Ayat of the Day"}
                  </span>
                  <span className="h-[2px] w-12 bg-emerald-200 dark:bg-emerald-900/50 rounded-full"></span>
                </h2>

                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div key="loader" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="flex justify-center items-center min-h-[250px]">
                      <RefreshCw className="text-emerald-500 w-10 h-10" />
                    </motion.div>
                  ) : (
                    <motion.div 
                      key={ayat?.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6 md:space-y-12 min-h-[250px] flex flex-col justify-center"
                    >
                      <p className="text-3xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-[1.6] md:leading-loose font-arabic drop-shadow-sm" dir="rtl">
                        {ayat?.arabic}
                      </p>
                      <div>
                         <div className="inline-block px-5 py-1.5 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 border border-emerald-200/50 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300 text-sm font-bold tracking-widest shadow-sm">
                           {ayat?.surah} : {ayat?.ayat_number}
                         </div>
                      </div>
                      <p className="text-base md:text-2xl text-gray-600 dark:text-gray-300 italic max-w-3xl mx-auto leading-relaxed font-serif">
                        "{ayat?.bangla}"
                      </p>
                      <div className="pt-4">
                        <button 
                          onClick={fetchRandomAyat}
                          className="group p-4 rounded-full bg-white dark:bg-white/10 hover:bg-emerald-600 hover:shadow-lg transition-all border border-gray-100 dark:border-white/5 mx-auto flex items-center"
                          aria-label="New Ayat"
                        >
                          <RefreshCw size={24} className="group-hover:text-white group-active:rotate-[360deg] transition-all duration-700 text-emerald-600 dark:text-emerald-400" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Mission & Vision --- */}
        <section className="py-12 md:py-24 px-4 bg-white/30 dark:bg-black/30 backdrop-blur-md relative border-y border-white/50 dark:border-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12">
            {[
              { title: t("home.mission.title"), text: t("home.mission.text"), icon: <Target className="w-8 h-8 text-emerald-600" />, color: "from-emerald-500/10" },
              { title: t("home.vision.title"), text: t("home.vision.text"), icon: <Eye className="w-8 h-8 text-teal-600" />, color: "from-teal-500/10" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-8 md:p-14 rounded-[2.5rem] bg-gradient-to-br ${item.color} to-transparent border border-white/60 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none bg-white/40 dark:bg-white/5 backdrop-blur-lg`}
              >
                <div className="mb-6 md:mb-8 bg-white dark:bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100/50 dark:border-white/5">{item.icon}</div>
                <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 text-gray-900 dark:text-white tracking-tight">
                  {item.title}
                </h2>
                <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Services --- */}
        <section className="py-16 md:py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-12 md:mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
                {t("home.services.title")}
              </h2>
              <div className="h-1.5 w-24 bg-emerald-500 rounded-full mx-auto" />
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 40px -15px rgba(16, 185, 129, 0.2)" }}
                  className="bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-white/60 dark:border-white/10 text-center shadow-lg hover:border-emerald-200 dark:hover:border-emerald-500/30 flex flex-col items-center justify-center transition-all group"
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-emerald-50 dark:bg-emerald-900/40 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-inner">
                    {serviceIcons[idx]}
                  </div>
                  <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200">
                    {service}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Why Choose Us --- */}
        <section className="py-16 md:py-24 px-4 bg-emerald-900 dark:bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
             <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400 to-transparent blur-[100px]"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-20 tracking-tight">
              {t("home.why.title")}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {whyPoints.map((point, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-black/20 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl hover:bg-black/40 transition-colors"
                >
                  <div className="text-emerald-400 mb-4 opacity-50">
                    <Sparkles size={24} />
                  </div>
                  <p className="text-base md:text-lg text-emerald-50 font-serif leading-relaxed">
                     "{point}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Call to Action --- */}
        <section className="py-16 md:py-32 px-4 relative overflow-hidden">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="max-w-6xl mx-auto rounded-[3rem] md:rounded-[4rem] bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-900 p-8 md:p-24 text-center relative shadow-[0_20px_50px_rgba(16,185,129,0.3)] border border-emerald-400/30 overflow-hidden"
          >
            {/* abstract shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black/20 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black text-white mb-8 md:mb-12 leading-tight tracking-tight max-w-4xl mx-auto">
                {t("home.cta.title")}
              </h2>
              <Link
                to="/join"
                className="group inline-flex items-center gap-3 bg-white text-emerald-800 px-8 py-4 md:px-12 md:py-5 rounded-full text-base md:text-xl font-bold shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all border border-emerald-100"
              >
                {t("home.cta.button")}
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default Home;
