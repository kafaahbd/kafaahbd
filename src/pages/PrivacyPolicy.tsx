import React from 'react';
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
import Breadcrumb from "../components/Breadcrumb";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  ShieldCheck, 
  Database, 
  Eye, 
  Lock, 
  Share2, 
  Cookie, 
  Link2, 
  Baby, 
  RefreshCcw, 
  Mail,
  FileText
} from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const { lang } = useLanguage();
  const isBn = lang === "bn";

  const sections = [
    {
      id: "intro",
      icon: <FileText size={24} />,
      title: isBn ? "১. ভূমিকা" : "1. Introduction",
      content: isBn 
        ? "Kafa’ah Islamic and Multiproject Company আমাদের ব্যবহারকারীদের ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ।" 
        : "Kafa’ah Islamic and Multiproject Company is committed to protecting the privacy of our users."
    },
    {
      id: "collection",
      icon: <Database size={24} />,
      title: isBn ? "২. তথ্য সংগ্রহ" : "2. Information Collection",
      content: isBn 
        ? "আমরা ব্যক্তিগত তথ্য (নাম, ইমেইল), প্রযুক্তিগত তথ্য (IP ঠিকানা) এবং ইন্টারঅ্যাকশন ডেটা সংগ্রহ করি।" 
        : "We collect personal info (name, email), technical info (IP address), and interaction data."
    },
    {
      id: "usage",
      icon: <Eye size={24} />,
      title: isBn ? "৩. তথ্যের ব্যবহার" : "3. Use of Information",
      content: isBn 
        ? "সেবা উন্নত করা, অভিজ্ঞতা ব্যক্তিগতকরণ এবং নিরাপত্তা নিশ্চিত করার উদ্দেশ্যে আপনার তথ্য ব্যবহার করা হয়।" 
        : "Your information is used to improve services, personalize experience, and ensure security."
    },
    {
      id: "security",
      icon: <Lock size={24} />,
      title: isBn ? "৪. তথ্যের সুরক্ষা" : "4. Data Security",
      content: isBn 
        ? "আমরা আধুনিক প্রযুক্তি ব্যবহার করি। ইনশাআল্লাহ আমরা আপনার তথ্য সুরক্ষার সর্বোচ্চ চেষ্টা করবো।" 
        : "We use modern technology. InshaAllah, we will do our utmost to protect your data."
    },
    {
      id: "sharing",
      icon: <Share2 size={24} />,
      title: isBn ? "৫. তথ্য শেয়ারিং" : "5. Information Sharing",
      content: isBn 
        ? "আমরা তথ্য বিক্রি করি না। কেবল আইনগত প্রয়োজনে বা বিশ্বস্ত অংশীদারদের সাথে শেয়ার করা হতে পারে।" 
        : "We do not sell data. It may only be shared for legal reasons or with trusted partners."
    },
    {
      id: "cookies",
      icon: <Cookie size={24} />,
      title: isBn ? "৬. কুকিজ" : "6. Cookies",
      content: isBn 
        ? "ব্যবহারকারীর পছন্দ ও ট্রাফিক বিশ্লেষণের জন্য আমরা কুকিজ ব্যবহার করি।" 
        : "We use cookies to analyze user preferences and web traffic."
    },
    {
      id: "children",
      icon: <Baby size={24} />,
      title: isBn ? "৭. শিশুদের গোপনীয়তা" : "7. Children's Privacy",
      content: isBn 
        ? "আমাদের সেবা ৩ বছরের কম বয়সী শিশুদের জন্য নয়।" 
        : "Our services are not intended for children under 3 years of age."
    },
    {
      id: "changes",
      icon: <RefreshCcw size={24} />,
      title: isBn ? "৮. নীতিমালা পরিবর্তন" : "8. Changes",
      content: isBn 
        ? "আমরা সময় সময় এই নীতিমালা পরিবর্তন করতে পারি। পরিবর্তনের ক্ষেত্রে আপনাকে জানানো হবে।" 
        : "We may update this policy from time to time. You will be notified of changes."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#05070a] font-sans pb-24 transition-colors duration-500 overflow-hidden relative">
      <SEO 
        title={isBn ? "গোপনীয়তা নীতি" : "Privacy Policy"}
        description="Privacy policy of Kafa'ah Islamic and Multiproject Company"
        url="/privacy-policy"
        image="https://kafaahbd.com/privacy-cover.jpg"
        breadcrumbs={[{ name: isBn ? "গোপনীয়তা নীতি" : "Privacy Policy", url: "/privacy-policy" }]}
      />

      {/* Ambient Backgrounds */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-400/10 dark:bg-emerald-900/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-teal-400/10 dark:bg-teal-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Header */}
      <section className="relative pt-8 pb-12 md:pt-12 md:pb-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <div className="self-start w-full flex justify-center lg:justify-start mb-6 md:mb-10">
             <Breadcrumb items={[{ name: isBn ? "গোপনীয়তা নীতি" : "Privacy Policy" }]} />
          </div>

          <ScrollAnimation className="text-center w-full">
            <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-[2rem] shadow-sm mb-6 group hover:scale-110 transition-transform">
              <ShieldCheck size={48} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              {isBn ? "গোপনীয়তা নীতি" : "Privacy Policy"}
            </h1>
            <p className="text-emerald-600 dark:text-emerald-400 font-bold text-sm tracking-widest uppercase bg-emerald-50 dark:bg-white/5 inline-flex px-4 py-2 rounded-full shadow-sm">
              {isBn ? "কার্যকরী তারিখ: ১ ডিসেম্বর, ২০২৫" : "Effective Date: December 1, 2025"}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="space-y-6 md:space-y-10">
          {sections.map((section, idx) => (
            <ScrollAnimation key={section.id} delay={idx * 0.05}>
              <div className="group flex flex-col md:flex-row gap-4 md:gap-8 p-6 md:p-8 bg-white/70 dark:bg-[#0a0d13]/70 backdrop-blur-xl border border-white/50 dark:border-white/5 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-emerald-50 dark:bg-[#131821] border border-emerald-100 dark:border-white/5 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 shadow-sm">
                    {section.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                    {section.content}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Contact Footer */}
        <ScrollAnimation className="mt-12 md:mt-20">
          <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-900/10 dark:to-indigo-900/10 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-blue-100/50 dark:border-blue-500/10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none">
              <Mail size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-500/20 rounded-xl text-blue-600 dark:text-blue-400">
                  <Mail size={24} />
                </div>
                {isBn ? "যোগাযোগ করুন" : "Contact Us"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg font-medium leading-relaxed">
                {isBn 
                  ? "আমাদের গোপনীয়তা নীতি সম্পর্কে কোনো প্রশ্ন থাকলে, অনুগ্রহ করে যোগাযোগ করুন:" 
                  : "If you have any questions about our privacy policy, please contact us:"}
              </p>
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2 bg-white/50 dark:bg-white/5 p-4 rounded-2xl border border-white/50 dark:border-white/5">
                  <p className="text-blue-500 dark:text-blue-400 uppercase tracking-widest text-[11px] font-bold">Email Support</p>
                  <p className="text-gray-900 dark:text-white font-semibold text-lg">tanvirishrak04@gmail.com</p>
                </div>
                <div className="space-y-2 bg-white/50 dark:bg-white/5 p-4 rounded-2xl border border-white/50 dark:border-white/5">
                  <p className="text-blue-500 dark:text-blue-400 uppercase tracking-widest text-[11px] font-bold">Phone Support</p>
                  <p className="text-gray-900 dark:text-white font-semibold text-lg">01770676700</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default PrivacyPolicy;