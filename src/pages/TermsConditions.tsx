import React from 'react';
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
import Breadcrumb from "../components/Breadcrumb";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  CheckCircle2, 
  UserPlus,
  CreditCard, 
  Ban, 
  Clock,
  ShieldCheck,
  RefreshCw,
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
        ? "আমাদের প্ল্যাটফর্মে একটি অ্যাকাউন্ট তৈরি করার মাধ্যমে আপনি আমাদের শর্তাবলী এবং গোপনীয়তা নীতি মেনে চলতে স্পষ্টভাবে সম্মত হচ্ছেন।" 
        : "By creating an account on our platform, you explicitly agree to be bound by these Terms and Conditions and our Privacy Policy.",
      gradient: "from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/20 dark:to-teal-500/10"
    },
    {
      icon: <UserPlus className="text-blue-500" size={28} />,
      title: isBn ? "২. অ্যাকাউন্ট ও নিরাপত্তা" : "2. Accounts & Security",
      content: isBn 
        ? "অ্যাকাউন্টের পাসওয়ার্ড সুরক্ষিত রাখা এবং আপনার অ্যাকাউন্টের অধীনে সংঘটিত সমস্ত কার্যক্রমের জন্য আপনি সম্পূর্ণ দায়ী থাকবেন।" 
        : "You are entirely responsible for maintaining the confidentiality of your account password and for all activities that occur under your account.",
      gradient: "from-blue-500/10 to-cyan-500/5 dark:from-blue-500/20 dark:to-cyan-500/10"
    },
    {
      icon: <CreditCard className="text-amber-500" size={28} />,
      title: isBn ? "৩. সাবস্ক্রিপশন ও পেমেন্ট" : "3. Subscriptions & Payments",
      content: isBn 
        ? "কিছু প্রিমিয়াম সেবা সাবস্ক্রিপশন ভিত্তিক। সাবস্ক্রিপশন পিরিয়ড শেষ হওয়ার আগে বাতিল না করলে এটি স্বয়ংক্রিয়ভাবে নবায়ন (Renew) হবে।" 
        : "Certain features are subscription-based. Subscriptions automatically renew at the end of each billing cycle unless cancelled before the renewal date.",
      gradient: "from-amber-500/10 to-orange-500/5 dark:from-amber-500/20 dark:to-orange-500/10"
    },
    {
      icon: <RefreshCw className="text-purple-500" size={28} />,
      title: isBn ? "৪. রিফান্ড পলিসি" : "4. Refund Policy",
      content: isBn 
        ? "সাধারণত পেমেন্ট সম্পূর্ণ অফেরতযোগ্য। তবে, আমাদের পক্ষ থেকে কোনো টেকনিক্যাল ত্রুটির কারণে সমস্যা হলে তা যাচাই সাপেক্ষে রিফান্ড করা হবে।" 
        : "All payments are non-refundable. However, if an access issue occurs due to a verified technical fault from our system, a refund may be issued upon verification.",
      gradient: "from-purple-500/10 to-fuchsia-500/5 dark:from-purple-500/20 dark:to-fuchsia-500/10"
    },
    {
      icon: <Ban className="text-red-500" size={28} />,
      title: isBn ? "৫. নিষিদ্ধ কনটেন্ট ও সাসপেনশন" : "5. Prohibited Content & Suspension",
      content: isBn 
        ? "যৌন, ক্ষতিকারক বা স্প্যাম কনটেন্ট তৈরি করা সম্পূর্ণ নিষিদ্ধ। এই নিয়ম লঙ্ঘন করলে কোনো পূর্ব নোটিশ ছাড়াই অ্যাকাউন্ট চিরতরে ব্যান বা স্থগিত করা হবে।" 
        : "Posting sexual, harmful, or malicious content is strictly prohibited. Violating this will lead to an immediate account suspension or permanent ban without any notice.",
      gradient: "from-red-500/10 to-rose-500/5 dark:from-red-500/20 dark:to-rose-500/10"
    },
    {
      icon: <Clock className="text-indigo-500" size={28} />,
      title: isBn ? "৬. সার্ভার মেইনটেন্যান্স ও ক্ষতিপূরণ" : "6. Maintenance & Downtime Gift",
      content: isBn 
        ? "সার্ভার মেইনটেন্যান্সের আগে নোটিশ দেওয়া হবে। মেইনটেন্যান্সের কারণে পেইড সাবস্ক্রিপশনের ক্ষতি হলে ব্যবহারকারীকে অতিরিক্ত দিন গিফট করা হবে।" 
        : "Prior notice will be given for scheduled maintenance. If server downtime harms your active paid subscription, we will compensate you by gifting extra days.",
      gradient: "from-indigo-500/10 to-violet-500/5 dark:from-indigo-500/20 dark:to-violet-500/10"
    },
    {
      icon: <ShieldCheck className="text-emerald-600 dark:text-emerald-400" size={28} />,
      title: isBn ? "৭. মেধা সম্পদ ও লাইসেন্স" : "7. Intellectual Property",
      content: isBn 
        ? "প্ল্যাটফর্মের সমস্ত কোড, ডিজাইন এবং কনটেন্ট Kafa'ah-এর নিজস্ব সম্পত্তি। অনুমতি ছাড়া তা কপি, বিতরণ বা রি-সেলার করা আইনত দণ্ডনীয়।" 
        : "All platform source code, software, designs, and materials are owned by Kafa'ah. Unauthorized replication or redistribution is strictly prohibited.",
      gradient: "from-green-500/10 to-emerald-500/5 dark:from-green-500/20 dark:to-emerald-500/10"
    },
    {
      icon: <Scale className="text-slate-500" size={28} />,
      title: isBn ? "৮. নীতিমালার পরিবর্তন" : "8. Changes to Terms",
      content: isBn 
        ? "আমরা যেকোনো সময় এই আইনি শর্তাবলী পরিবর্তন করার অধিকার রাখি। যেকোনো বড় পরিবর্তনের ক্ষেত্রে ব্যবহারকারীদের আগে থেকে অবহিত করা হবে।" 
        : "We reserve the right to modify these terms at any time. In case of significant structural updates, users will be notified on the platform beforehand.",
      gradient: "from-slate-500/10 to-gray-500/5 dark:from-slate-500/20 dark:to-gray-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#05070a] font-sans pb-24 transition-colors duration-500 overflow-hidden relative">
      <SEO 
        title={isBn ? "ব্যবহারের শর্তাবলী" : "Terms & Conditions"}
        description="Terms and conditions for Kafa'ah Digital Learning & Multiproject Platform"
        url="/terms-conditions"
        image="https://kafaahbd.com/terms-cover.jpg"
        breadcrumbs={[{ name: isBn ? "শর্তাবলী" : "Terms", url: "/terms-conditions" }]}
      />

      {/* Ambient Background Blur Graphics */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-400/10 dark:bg-blue-900/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-indigo-400/10 dark:bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Header Section */}
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
                ? "আমাদের প্ল্যাটফর্ম ব্যবহারের মাধ্যমে আপনি যে নিয়ম ও আইনি বাধ্যবাধকতাগুলো মেনে চলছেন তার বিস্তারিত বিবরণ।" 
                : "A clear and direct summary of your legal rights and operational rules when building with or utilizing our platform."}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Responsive Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {sections.map((item, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.05} direction="up">
              <div className="group h-full p-6 md:p-8 bg-white/70 dark:bg-[#0a0d13]/70 backdrop-blur-xl border border-white/50 dark:border-white/5 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Dynamic Hover Background Effect */}
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

        {/* Support Call-to-Action Footer */}
        <ScrollAnimation className="mt-16 md:mt-24">
          <div className="bg-gradient-to-br from-slate-900 to-[#0a0d13] dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] text-center border border-slate-700/50 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
             
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10 tracking-tight">
              {isBn ? "কোনো প্রশ্ন আছে?" : "Have Questions?"}
            </h2>
            <p className="text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed font-medium text-lg relative z-10">
              {isBn 
                ? "আমাদের আইনি শর্তাবলী বা সাবস্ক্রিপশন রিফান্ড সমস্যা নিয়ে কোনো জিজ্ঞাসায় সরাসরি যোগাযোগ করুন।" 
                : "For any issues regarding server disruptions, refund claims, or legal terms compliance, feel free to contact us."}
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
