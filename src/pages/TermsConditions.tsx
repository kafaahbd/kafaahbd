import React from 'react';
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
import Breadcrumb from "../components/Breadcrumb";
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
      icon: <CheckCircle2 className="text-emerald-500" size={28} />,
      title: isBn ? "১. শর্তাবলী গ্রহণ" : "1. Acceptance of Terms",
      content: isBn 
        ? "আমাদের যেকোনো ডিজিটাল সেবা ব্যবহার করলে আপনি এই শর্তাবলী মেনে নিচ্ছেন। দ্বিমত থাকলে দয়া করে সেবা ব্যবহার থেকে বিরত থাকুন।" 
        : "By using our digital services, you agree to these terms. If you disagree, please refrain from using our services.",
      gradient: "from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/20 dark:to-teal-500/10"
    },
    {
      icon: <Settings className="text-blue-500" size={28} />,
      title: isBn ? "২. আমাদের সেবা" : "2. Our Services",
      content: isBn 
        ? "আমরা ফ্রি এবং পেইড উভয় প্রকার ইসলামিক ও এডুকেশনাল সফটওয়্যার প্রদান করি। আমরা যেকোনো সময় সেবা পরিবর্তন বা বন্ধ করতে পারি।" 
        : "We provide both free and paid Islamic and educational software. We may modify or discontinue services at any time.",
      gradient: "from-blue-500/10 to-cyan-500/5 dark:from-blue-500/20 dark:to-cyan-500/10"
    },
    {
      icon: <UserCircle className="text-purple-500" size={28} />,
      title: isBn ? "৩. ইউজার অ্যাকাউন্ট" : "3. User Account",
      content: isBn 
        ? "অ্যাকাউন্টের নিরাপত্তা এবং পাসওয়ার্ড ব্যবহারের জন্য আপনি সম্পূর্ণ দায়ী। শর্ত লঙ্ঘন করলে অ্যাকাউন্ট স্থগিত করা হতে পারে।" 
        : "You are fully responsible for your account security and password. Accounts may be suspended for violations.",
      gradient: "from-purple-500/10 to-fuchsia-500/5 dark:from-purple-500/20 dark:to-fuchsia-500/10"
    },
    {
      icon: <Lock className="text-emerald-600 dark:text-emerald-400" size={28} />,
      title: isBn ? "৪. নিরাপত্তা ও গোপনীয়তা" : "4. Data & Privacy",
      content: isBn 
        ? "আপনার তথ্য আমাদের কাছে নিরাপদ — ইনশাআল্লাহ। আমরা অনুমতি ছাড়া আপনার ডাটা কারো কাছে শেয়ার করি না।" 
        : "Your data is safe with us — InshaAllah. We do not share your data without your permission.",
      gradient: "from-green-500/10 to-emerald-500/5 dark:from-green-500/20 dark:to-emerald-500/10"
    },
    {
      icon: <CreditCard className="text-amber-500" size={28} />,
      title: isBn ? "৫. ফ্রি ও পেইড এক্সেস" : "5. Access & Payments",
      content: isBn 
        ? "পেমেন্ট সাধারণত অফেরতযোগ্য। আমরা যেকোনো সময় মূল্য বা অ্যাক্সেস পলিসি পরিবর্তনের অধিকার রাখি।" 
        : "Payments are generally non-refundable. We reserve the right to change pricing or access policy.",
      gradient: "from-amber-500/10 to-orange-500/5 dark:from-amber-500/20 dark:to-orange-500/10"
    },
    {
      icon: <AlertTriangle className="text-rose-500" size={28} />,
      title: isBn ? "৬. ব্যবহারকারীর দায়িত্ব" : "6. User Responsibilities",
      content: isBn 
        ? "সেবা অপব্যবহার বা ইসলামবিরোধী কাজে ব্যবহার করা সম্পূর্ণ নিষেধ। অনুমতি ছাড়া সফটওয়্যার কপি করা যাবে না।" 
        : "Misuse of service or anti-Islamic usage is strictly prohibited. Software cannot be copied without permission.",
      gradient: "from-rose-500/10 to-red-500/5 dark:from-rose-500/20 dark:to-red-500/10"
    },
    {
      icon: <Copyright className="text-indigo-500" size={28} />,
      title: isBn ? "৭. মেধাস্বত্ব" : "7. Intellectual Property",
      content: isBn 
        ? "সকল কনটেন্ট ও সফটওয়্যার Kafa’ah-এর মালিকানা। মালিকানা দাবি বা পুনঃবিতরণ করা আইনত দণ্ডনীয়।" 
        : "All content and software are owned by Kafa’ah. Claiming ownership or redistribution is prohibited.",
      gradient: "from-indigo-500/10 to-violet-500/5 dark:from-indigo-500/20 dark:to-violet-500/10"
    },
    {
      icon: <Ban className="text-red-600 dark:text-red-500" size={28} />,
      title: isBn ? "৮. সেবা বন্ধের অধিকার" : "8. Right to Terminate",
      content: isBn 
        ? "শর্ত ভঙ্গ হলে আমরা যেকোনো সময় আপনার অ্যাকাউন্ট বন্ধ বা সেবা সীমাবদ্ধ করার অধিকার রাখি।" 
        : "We reserve the right to terminate accounts or limit services if terms are violated.",
      gradient: "from-red-500/10 to-rose-500/5 dark:from-red-500/20 dark:to-rose-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#05070a] font-sans pb-24 transition-colors duration-500 overflow-hidden relative">
      <SEO 
        title={isBn ? "ব্যবহারের শর্তাবলী" : "Terms & Conditions"}
        description="Terms and conditions for Kafa'ah Islamic & Multiproject Company"
        url="/terms-conditions"
        image="https://kafaahbd.com/terms-cover.jpg"
        breadcrumbs={[{ name: isBn ? "শর্তাবলী" : "Terms", url: "/terms-conditions" }]}
      />

      {/* Ambient Backgrounds */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-400/10 dark:bg-blue-900/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-indigo-400/10 dark:bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Header */}
      <section className="relative pt-8 pb-12 md:pt-12 md:pb-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          <div className="self-start w-full flex justify-center lg:justify-center mb-6 md:mb-10">
             <Breadcrumb items={[{ name: isBn ? "আইনি চুক্তি" : "Legal Agreement" }]} />
          </div>

          <ScrollAnimation className="text-center w-full">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-md border border-blue-200/50 dark:border-blue-700/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <Scale size={16} /> {isBn ? "আইনি চুক্তি" : "Legal Agreement"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              {isBn ? "ব্যবহারের শর্তাবলী" : "Terms & Conditions"}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
              {isBn 
                ? "আমাদের প্ল্যাটফর্ম ব্যবহারের মাধ্যমে আপনি যে নিয়মগুলো মেনে চলতে সম্মত হচ্ছেন তার বিস্তারিত বিবরণ নিচে দেওয়া হলো।" 
                : "A detailed description of the rules you agree to follow by using our platform."}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {sections.map((item, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.05} direction="up">
              <div className="group h-full p-6 md:p-8 bg-white/70 dark:bg-[#0a0d13]/70 backdrop-blur-xl border border-white/50 dark:border-white/5 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Subtle gradient hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="flex items-start gap-5 relative z-10">
                  <div className="p-3.5 bg-white dark:bg-[#131821] border border-gray-100 dark:border-white/5 rounded-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Contact Support Footer */}
        <ScrollAnimation className="mt-16 md:mt-24">
          <div className="bg-gradient-to-br from-slate-900 to-[#0a0d13] dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] text-center border border-slate-700/50 shadow-2xl relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
             
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10 tracking-tight">
              {isBn ? "কোনো প্রশ্ন আছে?" : "Have Questions?"}
            </h2>
            <p className="text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed font-medium text-lg relative z-10">
              {isBn 
                ? "আমাদের শর্তাবলী সম্পর্কে আরও বিস্তারিত জানতে বা কোনো আইনি জিজ্ঞাসায় সরাসরি ইমেইল করুন।" 
                : "For more details about our terms or any legal inquiries, please email us directly."}
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a 
                href="mailto:tanvirishrak04@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-2xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/10"
              >
                <Mail size={20} /> {isBn ? "ইমেইল পাঠান" : "Send Email"}
              </a>
              <div className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold backdrop-blur-md shadow-sm">
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