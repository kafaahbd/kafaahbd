import React from 'react';
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
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
      icon: <FileText size={20} />,
      title: isBn ? "১. ভূমিকা" : "1. Introduction",
      content: isBn 
        ? "Kafa’ah Islamic and Multiproject Company আমাদের ব্যবহারকারীদের ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ।" 
        : "Kafa’ah Islamic and Multiproject Company is committed to protecting the privacy of our users."
    },
    {
      id: "collection",
      icon: <Database size={20} />,
      title: isBn ? "২. তথ্য সংগ্রহ" : "2. Information Collection",
      content: isBn 
        ? "আমরা ব্যক্তিগত তথ্য (নাম, ইমেইল), প্রযুক্তিগত তথ্য (IP ঠিকানা) এবং ইন্টারঅ্যাকশন ডেটা সংগ্রহ করি।" 
        : "We collect personal info (name, email), technical info (IP address), and interaction data."
    },
    {
      id: "usage",
      icon: <Eye size={20} />,
      title: isBn ? "৩. তথ্যের ব্যবহার" : "3. Use of Information",
      content: isBn 
        ? "সেবা উন্নত করা, অভিজ্ঞতা ব্যক্তিগতকরণ এবং নিরাপত্তা নিশ্চিত করার উদ্দেশ্যে আপনার তথ্য ব্যবহার করা হয়।" 
        : "Your information is used to improve services, personalize experience, and ensure security."
    },
    {
      id: "security",
      icon: <Lock size={20} />,
      title: isBn ? "৪. তথ্যের সুরক্ষা" : "4. Data Security",
      content: isBn 
        ? "আমরা আধুনিক প্রযুক্তি ব্যবহার করি। ইনশাআল্লাহ আমরা আপনার তথ্য সুরক্ষার সর্বোচ্চ চেষ্টা করবো।" 
        : "We use modern technology. InshaAllah, we will do our utmost to protect your data."
    },
    {
      id: "sharing",
      icon: <Share2 size={20} />,
      title: isBn ? "৫. তথ্য শেয়ারিং" : "5. Information Sharing",
      content: isBn 
        ? "আমরা তথ্য বিক্রি করি না। কেবল আইনগত প্রয়োজনে বা বিশ্বস্ত অংশীদারদের সাথে শেয়ার করা হতে পারে।" 
        : "We do not sell data. It may only be shared for legal reasons or with trusted partners."
    },
    {
      id: "cookies",
      icon: <Cookie size={20} />,
      title: isBn ? "৬. কুকিজ" : "6. Cookies",
      content: isBn 
        ? "ব্যবহারকারীর পছন্দ ও ট্রাফিক বিশ্লেষণের জন্য আমরা কুকিজ ব্যবহার করি।" 
        : "We use cookies to analyze user preferences and web traffic."
    },
    {
      id: "children",
      icon: <Baby size={20} />,
      title: isBn ? "৭. শিশুদের গোপনীয়তা" : "7. Children's Privacy",
      content: isBn 
        ? "আমাদের সেবা ৩ বছরের কম বয়সী শিশুদের জন্য নয়।" 
        : "Our services are not intended for children under 3 years of age."
    },
    {
      id: "changes",
      icon: <RefreshCcw size={20} />,
      title: isBn ? "৮. নীতিমালা পরিবর্তন" : "8. Changes",
      content: isBn 
        ? "আমরা সময় সময় এই নীতিমালা পরিবর্তন করতে পারি। পরিবর্তনের ক্ষেত্রে আপনাকে জানানো হবে।" 
        : "We may update this policy from time to time. You will be notified of changes."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#05070a] transition-colors duration-500">
      <SEO 
        title={isBn ? "গোপনীয়তা নীতি" : "Privacy Policy"}
        description="Privacy policy of Kafa'ah Islamic and Multiproject Company"
        url="https://kafaahbd.com/privacy-policy"
      />

      {/* Header */}
      <div className="bg-slate-50 dark:bg-white/5 py-10 md:py-20 border-b border-gray-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation>
            <ShieldCheck size={48} className="mx-auto text-emerald-600 mb-4" />
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-2">
              {isBn ? "গোপনীয়তা নীতি" : "Privacy Policy"}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">
              {isBn ? "কার্যকরী তারিখ: ১ ডিসেম্বর, ২০২৫" : "Effective Date: December 1, 2025"}
            </p>
          </ScrollAnimation>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8 md:py-16">
        <div className="space-y-6 md:space-y-12">
          {sections.map((section, idx) => (
            <ScrollAnimation key={section.id} delay={idx * 0.05}>
              <div className="flex gap-4 md:gap-6 group">
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  {idx !== sections.length - 1 && (
                    <div className="w-px h-full bg-gray-100 dark:bg-white/5 my-2 md:my-4" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4 flex items-center gap-3">
                    <span className="sm:hidden text-emerald-600">{section.icon}</span>
                    {section.title}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Contact Footer */}
        <ScrollAnimation className="mt-10 md:mt-20 pt-6 md:pt-12 border-t border-gray-100 dark:border-white/5">
          <div className="bg-blue-50 dark:bg-blue-500/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-blue-100 dark:border-blue-500/20">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2">
              <Mail size={20} className="text-blue-600" />
              {isBn ? "যোগাযোগ" : "Contact Us"}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 text-sm md:text-base">
              <div className="space-y-1">
                <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Email</p>
                <p className="text-gray-700 dark:text-gray-300 font-medium">tanvirishrak04@gmail.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Phone</p>
                <p className="text-gray-700 dark:text-gray-300 font-medium">01770676700</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default PrivacyPolicy;