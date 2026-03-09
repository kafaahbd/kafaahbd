import React from 'react';
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  Gavel, 
  CheckCircle2, 
  Settings, 
  UserCircle, 
  Lock, 
  CreditCard, 
  AlertTriangle, 
  Copyright, 
  Ban, 
  Mail,
  Scale
} from 'lucide-react';

const TermsConditions: React.FC = () => {
  const { lang } = useLanguage();
  const isBn = lang === "bn";

  const sections = [
    {
      icon: <CheckCircle2 className="text-emerald-500" />,
      title: isBn ? "১. শর্তাবলী গ্রহণ" : "1. Acceptance of Terms",
      content: isBn 
        ? "আমাদের যেকোনো ডিজিটাল সেবা ব্যবহার করলে আপনি এই শর্তাবলী মেনে নিচ্ছেন। দ্বিমত থাকলে দয়া করে সেবা ব্যবহার থেকে বিরত থাকুন।" 
        : "By using our digital services, you agree to these terms. If you disagree, please refrain from using our services."
    },
    {
      icon: <Settings className="text-blue-500" />,
      title: isBn ? "২. আমাদের সেবা" : "2. Our Services",
      content: isBn 
        ? "আমরা ফ্রি এবং পেইড উভয় প্রকার ইসলামিক ও এডুকেশনাল সফটওয়্যার প্রদান করি। আমরা যেকোনো সময় সেবা পরিবর্তন বা বন্ধ করতে পারি।" 
        : "We provide both free and paid Islamic and educational software. We may modify or discontinue services at any time."
    },
    {
      icon: <UserCircle className="text-purple-500" />,
      title: isBn ? "৩. ইউজার অ্যাকাউন্ট" : "3. User Account",
      content: isBn 
        ? "অ্যাকাউন্টের নিরাপত্তা এবং পাসওয়ার্ড ব্যবহারের জন্য আপনি সম্পূর্ণ দায়ী। শর্ত লঙ্ঘন করলে অ্যাকাউন্ট স্থগিত করা হতে পারে।" 
        : "You are fully responsible for your account security and password. Accounts may be suspended for violations."
    },
    {
      icon: <Lock className="text-emerald-600" />,
      title: isBn ? "৪. নিরাপত্তা ও গোপনীয়তা" : "4. Data & Privacy",
      content: isBn 
        ? "আপনার তথ্য আমাদের কাছে নিরাপদ — ইনশাআল্লাহ। আমরা অনুমতি ছাড়া আপনার ডাটা কারো কাছে শেয়ার করি না।" 
        : "Your data is safe with us — InshaAllah. We do not share your data without your permission."
    },
    {
      icon: <CreditCard className="text-amber-500" />,
      title: isBn ? "৫. ফ্রি ও পেইড এক্সেস" : "5. Access & Payments",
      content: isBn 
        ? "পেমেন্ট সাধারণত অফেরতযোগ্য। আমরা যেকোনো সময় মূল্য বা অ্যাক্সেস পলিসি পরিবর্তনের অধিকার রাখি।" 
        : "Payments are generally non-refundable. We reserve the right to change pricing or access policy."
    },
    {
      icon: <AlertTriangle className="text-rose-500" />,
      title: isBn ? "৬. ব্যবহারকারীর দায়িত্ব" : "6. User Responsibilities",
      content: isBn 
        ? "সেবা অপব্যবহার বা ইসলামবিরোধী কাজে ব্যবহার করা সম্পূর্ণ নিষেধ। অনুমতি ছাড়া সফটওয়্যার কপি করা যাবে না।" 
        : "Misuse of service or anti-Islamic usage is strictly prohibited. Software cannot be copied without permission."
    },
    {
      icon: <Copyright className="text-indigo-500" />,
      title: isBn ? "৭. মেধাস্বত্ব" : "7. Intellectual Property",
      content: isBn 
        ? "সকল কনটেন্ট ও সফটওয়্যার Kafa’ah-এর মালিকানা। মালিকানা দাবি বা পুনঃবিতরণ করা আইনত দণ্ডনীয়।" 
        : "All content and software are owned by Kafa’ah. Claiming ownership or redistribution is prohibited."
    },
    {
      icon: <Ban className="text-red-500" />,
      title: isBn ? "৮. সেবা বন্ধের অধিকার" : "8. Right to Terminate",
      content: isBn 
        ? "শর্ত ভঙ্গ হলে আমরা যেকোনো সময় আপনার অ্যাকাউন্ট বন্ধ বা সেবা সীমাবদ্ধ করার অধিকার রাখি।" 
        : "We reserve the right to terminate accounts or limit services if terms are violated."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#05070a] py-20 px-4 transition-colors duration-500">
      <SEO 
        title={isBn ? "ব্যবহারের শর্তাবলী" : "Terms & Conditions"}
        description="Terms and conditions for Kafa'ah Islamic & Multiproject Company"
        url="https://kafaahbd.com/terms-conditions"
      />

      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Scale size={14} /> {isBn ? "আইনি চুক্তি" : "Legal Agreement"}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              {isBn ? "ব্যবহারের শর্তাবলী" : "Terms & Conditions"}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              {isBn 
                ? "আমাদের প্ল্যাটফর্ম ব্যবহারের মাধ্যমে আপনি যে নিয়মগুলো মেনে চলতে সম্মত হচ্ছেন তার বিস্তারিত বিবরণ নিচে দেওয়া হলো।" 
                : "A detailed description of the rules you agree to follow by using our platform."}
            </p>
          </ScrollAnimation>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((item, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.05} direction="up">
              <div className="group h-full p-8 bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-white/5 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Contact Support Footer */}
        <ScrollAnimation className="mt-16">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-blue-900/20 dark:to-emerald-900/10 p-10 md:p-16 rounded-[3.5rem] text-center border border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {isBn ? "কোনো প্রশ্ন আছে?" : "Have Questions?"}
            </h2>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">
              {isBn 
                ? "আমাদের শর্তাবলী সম্পর্কে আরও বিস্তারিত জানতে বা কোনো আইনি জিজ্ঞাসায় সরাসরি ইমেইল করুন।" 
                : "For more details about our terms or any legal inquiries, please email us directly."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:tanvirishrak04@gmail.com"
                className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-colors"
              >
                <Mail size={18} /> {isBn ? "ইমেইল পাঠান" : "Send Email"}
              </a>
              <div className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold backdrop-blur-sm">
                kafaahbd.com
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default TermsConditions;