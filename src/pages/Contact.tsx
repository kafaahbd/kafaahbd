import React from 'react';
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Send, 
  Clock 
} from 'lucide-react';

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const isBn = lang === "bn";

  const contactInfo = [
    {
      icon: <Mail className="text-emerald-500" size={28} />,
      title: "Email",
      value: "kafaahbd@gmail.com",
      link: "mailto:kafaahbd@gmail.com",
      color: "bg-emerald-50 dark:bg-emerald-500/10"
    },
    {
      icon: <Phone className="text-blue-500" size={28} />,
      title: isBn ? "ফোন" : "Phone",
      value: "+8801837103985",
      link: "tel:+8801837103985",
      color: "bg-blue-50 dark:bg-blue-500/10"
    },
    {
      icon: <MapPin className="text-rose-500" size={28} />,
      title: isBn ? "ঠিকানা" : "Address",
      value: isBn ? "রাজশাহী, বাংলাদেশ" : "Rajshahi, Bangladesh",
      link: "#",
      color: "bg-rose-50 dark:bg-rose-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#05070a] transition-colors duration-500">
      <SEO 
        title={isBn ? "যোগাযোগ" : "Contact"}
        description={isBn ? "কাফআহ-এর সাথে যোগাযোগ করুন। ইমেইল, ফোন ও ঠিকানা।" : "Contact Kafa'ah. Email, phone and address."}
        url="https://kafaahbd.com/contact"
      />

      {/* Hero Header */}
      <section className="pt-24 pb-12 px-4 text-center">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            {isBn ? "যোগাযোগ করুন" : "Get In Touch"}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {isBn 
              ? "আপনার যেকোনো প্রশ্ন বা সহযোগিতার জন্য আমরা সদা প্রস্তুত। প্রযুক্তির মাধ্যমে উম্মাহর সেবায় আমাদের সাথে যুক্ত হোন।" 
              : "We are always ready for your questions or collaborations. Join us in serving the Ummah through technology."}
          </p>
        </ScrollAnimation>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((item, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.1} direction="up">
              <motion.a
                href={item.link}
                whileHover={{ y: -10 }}
                className="group block p-8 bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-white/5 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 h-full"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium break-all">{item.value}</p>
                <div className="mt-6 flex items-center text-sm font-bold text-emerald-600 dark:text-emerald-400 gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {isBn ? "যোগাযোগ করুন" : "Contact Now"} <Send size={14} />
                </div>
              </motion.a>
            </ScrollAnimation>
          ))}
        </div>

        {/* Support Section */}
        <section className="mt-16">
          <ScrollAnimation direction="up">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
              {/* Decorative Background Icon */}
              <MessageSquare className="absolute -right-10 -bottom-10 opacity-10" size={250} />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                    <Clock size={16} /> {isBn ? "সহায়তার সময়" : "Support Time"}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                    {isBn ? "যেকোনো জিজ্ঞাসায় আমাদের মেসেজ দিন" : "Message Us for Any Inquiries"}
                  </h2>
                  <p className="text-emerald-50/80 mb-8 leading-relaxed">
                    {isBn 
                      ? "আমরা আপনার মেসেজের অপেক্ষায় আছি। সাধারণত আমরা ২৪ ঘণ্টার মধ্যে উত্তর দেওয়ার চেষ্টা করি।" 
                      : "We are waiting for your message. We usually try to respond within 24 hours."}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://wa.me/+8801837103985" 
                      target="_blank" 
                      className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-black shadow-lg hover:bg-emerald-50 transition-colors flex items-center gap-2"
                    >
                      <MessageSquare size={20} /> WhatsApp
                    </a>
                    <a 
                      href="https://www.facebook.com/kafaahbd" 
                      target="_blank" 
                      className="bg-emerald-500 text-white border border-emerald-400/30 px-8 py-4 rounded-2xl font-black hover:bg-emerald-400 transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem]">
                    <h4 className="font-bold mb-4">{isBn ? "সচরাচর জিজ্ঞাসিত প্রশ্ন" : "Quick FAQ"}</h4>
                    <div className="space-y-4 text-sm opacity-90">
                      <p><strong>Q:</strong> {isBn ? "কিভাবে জয়েন করব?" : "How to join?"}</p>
                      <p className="pb-2 border-b border-white/10">{isBn ? "আমাদের ফুটার এর Join লিংকে ক্লিক করুন।" : "Click the Join link in our footer."}</p>
                      <p><strong>Q:</strong> {isBn ? "অফিস কোথায়?" : "Where is the office?"}</p>
                      <p>{isBn ? "বর্তমানে আমরা রিমোটলি কাজ করছি।" : "Currently, we are working remotely."}</p>
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