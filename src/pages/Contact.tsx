import React from 'react';
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
import Breadcrumb from "../components/Breadcrumb";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Send, 
  Clock,
  Zap
} from 'lucide-react';

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const isBn = lang === "bn";

  const contactInfo = [
    {
      icon: <Mail className="text-emerald-500 dark:text-emerald-400" size={32} strokeWidth={1.5} />,
      title: "Email",
      value: "kafaahbd@gmail.com",
      link: "mailto:kafaahbd@gmail.com",
      color: "from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/20 dark:to-teal-500/10 border-emerald-100 dark:border-emerald-500/20"
    },
    {
      icon: <Phone className="text-blue-500 dark:text-blue-400" size={32} strokeWidth={1.5} />,
      title: isBn ? "ফোন" : "Phone",
      value: "+8801837103985",
      link: "tel:+8801837103985",
      color: "from-blue-500/10 to-indigo-500/5 dark:from-blue-500/20 dark:to-indigo-500/10 border-blue-100 dark:border-blue-500/20"
    },
    {
      icon: <MapPin className="text-rose-500 dark:text-rose-400" size={32} strokeWidth={1.5} />,
      title: isBn ? "ঠিকানা" : "Address",
      value: isBn ? "রাজশাহী, বাংলাদেশ" : "Rajshahi, Bangladesh",
      link: "#",
      color: "from-rose-500/10 to-pink-500/5 dark:from-rose-500/20 dark:to-pink-500/10 border-rose-100 dark:border-rose-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#05070a] transition-colors duration-500 font-sans pb-20">
      <SEO 
        title={isBn ? "যোগাযোগ" : "Contact"}
        description={isBn ? "কাফআহ-এর সাথে যোগাযোগ করুন। ইমেইল, ফোন ও ঠিকানা জানার জন্য এই পেজটি দেখুন।" : "Contact Kafa'ah. Find our email, phone and address."}
        url="/contact"
        image="https://kafaahbd.com/contact-cover.jpg"
        breadcrumbs={[
          { name: isBn ? "যোগাযোগ" : "Contact", url: "/contact" }
        ]}
      />

      {/* Hero Header */}
      <section className="relative pt-8 pb-12 md:pt-12 md:pb-20 px-4 overflow-hidden">
        {/* Soft Background Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-400/10 dark:bg-emerald-900/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        
        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          <div className="self-start w-full flex justify-center lg:justify-center mb-6 md:mb-10">
             <Breadcrumb items={[{ name: isBn ? "যোগাযোগ" : "Contact" }]} />
          </div>

          <ScrollAnimation>
            <div className="text-center w-full">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                {isBn ? "যোগাযোগ করুন" : "Get In Touch"}
              </h1>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                {isBn 
                  ? "আপনার যেকোনো প্রশ্ন বা সহযোগিতার জন্য আমরা সদা প্রস্তুত। প্রযুক্তির মাধ্যমে উম্মাহর সেবায় আমাদের সাথে যুক্ত হোন।" 
                  : "We are always ready for your questions or collaborations. Join us in serving the Ummah through technology."}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-12 md:pb-24 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contactInfo.map((item, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.1} direction="up">
              <motion.a
                href={item.link}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group flex flex-col items-center text-center p-8 md:p-10 bg-white/70 dark:bg-[#0a0d13]/70 backdrop-blur-xl border border-white/50 dark:border-white/5 rounded-[2.5rem] md:rounded-[3rem] shadow-lg hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto bg-white dark:bg-white/5 border ${item.color} rounded-[2rem] flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-sm`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium break-all text-base md:text-lg mb-6">{item.value}</p>
                  <div className="inline-flex items-center text-sm font-bold text-gray-900 dark:text-white gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/50 dark:bg-white/10 px-4 py-2 rounded-full border border-gray-200/50 dark:border-white/10 backdrop-blur-md">
                    {isBn ? "যোগাযোগ করুন" : "Contact Now"} <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            </ScrollAnimation>
          ))}
        </div>

        {/* Support Section */}
        <section>
          <ScrollAnimation direction="up">
            <div className="bg-gradient-to-br from-emerald-600 to-green-800 rounded-[3.5rem] p-10 md:p-16 lg:p-20 text-white overflow-hidden relative shadow-[0_20px_50px_rgba(16,185,129,0.2)] border border-emerald-500/50">
              {/* Decorative Background Icon */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
              <MessageSquare className="absolute -right-10 -bottom-10 opacity-10 rotate-12" size={350} strokeWidth={1} />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
                    <Clock size={16} /> {isBn ? "সহায়তার সময়" : "Support Time"}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-tight tracking-tight">
                    {isBn ? "যেকোনো জিজ্ঞাসায় আমাদের মেসেজ দিন" : "Message Us for Any Inquiries"}
                  </h2>
                  <p className="text-emerald-50/90 mb-10 leading-relaxed text-lg lg:text-xl font-medium">
                    {isBn 
                      ? "আমরা আপনার মেসেজের অপেক্ষায় আছি। সাধারণত আমরা ২৪ ঘণ্টার মধ্যে উত্তর দেওয়ার চেষ্টা করি।" 
                      : "We are waiting for your message. We usually try to respond within 24 hours."}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://wa.me/+8801837103985" 
                      target="_blank" 
                      className="bg-white text-emerald-800 px-8 py-4 rounded-full font-black text-lg shadow-xl hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2 group"
                    >
                      <MessageSquare size={22} className="group-hover:-rotate-12 transition-transform" /> WhatsApp
                    </a>
                    <a 
                      href="https://www.facebook.com/kafaahbd" 
                      target="_blank" 
                      className="bg-emerald-500/50 backdrop-blur-md text-white border border-emerald-400/50 px-8 py-4 rounded-full font-black text-lg hover:bg-emerald-500 transition-all w-full sm:w-auto text-center"
                    >
                      Facebook
                    </a>
                  </div>
                </div>

                <div className="hidden lg:block relative">
                  <div className="absolute inset-0 bg-white/5 blur-3xl rounded-[3rem]" />
                  <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[3rem] relative z-10 shadow-2xl">
                    <h4 className="font-bold text-2xl mb-8 flex items-center gap-3">
                      <Zap size={24} className="text-emerald-300" />
                      {isBn ? "সচরাচর জিজ্ঞাসিত প্রশ্ন" : "Quick FAQ"}
                    </h4>
                    <div className="space-y-6 text-base font-medium">
                      <div>
                        <p className="text-emerald-100 mb-2"><strong>Q:</strong> {isBn ? "কিভাবে জয়েন করব?" : "How to join?"}</p>
                        <p className="pb-4 border-b border-white/10">{isBn ? "আমাদের ফুটার এর Join লিংকে ক্লিক করুন।" : "Click the Join link in our footer."}</p>
                      </div>
                      <div>
                        <p className="text-emerald-100 mb-2"><strong>Q:</strong> {isBn ? "অফিস কোথায়?" : "Where is the office?"}</p>
                        <p>{isBn ? "বর্তমানে আমরা রিমোটলি কাজ করছি।" : "Currently, we are working remotely."}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>
      </div>
    </div>
  );
};

export default Contact;