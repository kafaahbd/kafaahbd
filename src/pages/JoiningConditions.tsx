import React from 'react';
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  ShieldCheck, 
  Banknote, 
  Briefcase, 
  Code2, 
  Scale, 
  UserPlus, 
  Lock, 
  LogOut, 
  AlertCircle,
  Clock
} from 'lucide-react';

const JoiningConditions: React.FC = () => {
  const { lang } = useLanguage();
  const isBn = lang === "bn";

  const conditions = [
    {
      id: 1,
      icon: <ShieldCheck className="text-emerald-500" />,
      title: isBn ? "১. বর্তমান অবস্থা" : "1. Company Status",
      content: isBn 
        ? "আমাদের কোম্পানি বর্তমানে নতুনভাবে যাত্রা শুরু করেছে। প্রথম দায়িত্ব হবে— কোম্পানিকে মানুষের কাছে পৌঁছে দেওয়া এবং পরিচিত করে তোলা।" 
        : "Our company has recently started its journey. The primary responsibility is to introduce the company to people."
    },
    {
      id: 2,
      icon: <Banknote className="text-blue-500" />,
      title: isBn ? "২. বেতন নীতি" : "2. Salary Policy",
      content: isBn 
        ? "আপাতত কোম্পানি বেতন দিতে সক্ষম নয়। তবে যারা শুরু থেকেই থাকবেন, তারা ভবিষ্যতে বিশেষ অগ্রাধিকার এবং অন্যদের তুলনায় বেশি বেতন পাবেন ইনশাআল্লাহ।" 
        : "Currently, the company is unable to provide salaries. However, early members will receive special priority and higher salaries in the future, InshaAllah."
    },
    {
      id: 3,
      icon: <Briefcase className="text-orange-500" />,
      title: isBn ? "৩. কাজের ধরন" : "3. Work Type",
      content: isBn 
        ? "বর্তমানে কাজ হবে প্রজেক্ট-ভিত্তিক। ফুল-টাইম বা নির্দিষ্ট ঘণ্টা কাজ এখন বাধ্যতামূলক নয়।" 
        : "Work will be project-based for now. Full-time or fixed-hour work is not mandatory at this stage."
    },
    {
      id: 4,
      icon: <Code2 className="text-purple-500" />,
      title: isBn ? "৪. প্রয়োজনীয় দক্ষতা" : "4. Skill Requirements",
      content: isBn 
        ? "ওয়েব, অ্যাপ ডেভেলপমেন্ট, ইসলামিক কন্টেন্ট, ডিজাইন, এডিটিং, মার্কেটিং বা রাইটিং—যেকোনো স্কিল নিয়ে যোগ দেওয়া যাবে।" 
        : "Web/App development, Islamic content, design, editing, marketing, or writing—anyone with these skills can join."
    },
    {
      id: 5,
      icon: <Scale className="text-emerald-600" />,
      title: isBn ? "৫. ইসলামিক আচরণবিধি" : "5. Islamic Code of Conduct",
      content: isBn 
        ? "শালীন আচরণ, হারাম কন্টেন্ট বর্জন, এবং টিম মেম্বারদের সাথে শ্রদ্ধাপূর্ণ যোগাযোগ বজায় রাখা বাধ্যতামূলক।" 
        : "Modest behavior, avoiding haram content, and respectful communication with the team are mandatory."
    },
    {
      id: 6,
      icon: <UserPlus className="text-indigo-500" />,
      title: isBn ? "৬. বয়স ও নির্বাচন" : "6. Age & Selection",
      content: isBn 
        ? "ন্যূনতম বয়স ১৪+ হতে হবে। দক্ষতা এবং ইসলামিক মাইন্ডসেট দেখে সদস্য নিশ্চিত করা হবে।" 
        : "Minimum age 14+. Membership confirmed based on skill and Islamic mindset."
    },
    {
      id: 7,
      icon: <Lock className="text-rose-500" />,
      title: isBn ? "৭. গোপনীয়তা" : "7. Confidentiality",
      content: isBn 
        ? "কোম্পানির প্রজেক্ট, কোড বা ডিজাইন অনুমতি ছাড়া কারও কাছে শেয়ার করা যাবে না।" 
        : "Company projects, code, or designs cannot be shared without permission."
    },
    {
      id: 8,
      icon: <LogOut className="text-amber-600" />,
      title: isBn ? "৮. ত্যাগ করার নিয়ম" : "8. Leaving Rules",
      content: isBn 
        ? "কোম্পানি ছাড়তে চাইলে অন্তত ৩ দিন আগে জানাতে হবে এবং চলমান প্রজেক্ট অসম্পূর্ণ রাখা যাবে না।" 
        : "Inform at least 3 days before leaving and do not leave ongoing projects incomplete."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#05070a] py-10 md:py-20 px-4">
      <SEO 
        title={isBn ? "যোগদানের শর্তাবলী" : "Joining Conditions"}
        description="Kafa'ah Joining Terms and Conditions"
        url="https://kafaahbd.com/joining-conditions"
      />

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
              <Clock size={14} /> {isBn ? "আপডেট করা হয়েছে: ২০২৬" : "Updated: 2026"}
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 md:mb-6">
              {isBn ? "টিমে যোগদানের শর্তাবলী" : "Joining Terms & Conditions"}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto italic">
              {isBn 
                ? "“সঠিক প্রযুক্তির মাধ্যমে উম্মাহর সেবায় আমাদের সহযোগী হোন”" 
                : "“Join us in serving the Ummah through the right technology”"}
            </p>
          </ScrollAnimation>
        </div>

        {/* Conditions Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {conditions.map((item, idx) => (
            <ScrollAnimation key={item.id} delay={idx * 0.05} direction={idx % 2 === 0 ? "right" : "left"}>
              <div className="group h-full p-4 md:p-8 bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-white/5 rounded-3xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
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

        {/* Warning/Rights Footer */}
        <ScrollAnimation direction="up" className="mt-6 md:mt-12">
          <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20 p-4 md:p-6 rounded-3xl flex gap-4 items-center">
            <AlertCircle className="text-amber-600 shrink-0" size={24} />
            <p className="text-sm text-amber-800 dark:text-amber-400 font-medium">
              {isBn 
                ? "কোম্পানি প্রয়োজনে যেকোনো সদস্যকে আচরণবিধি লঙ্ঘনের দায়ে সরিয়ে দেওয়ার এবং শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করে।" 
                : "The company reserves the right to remove any member for violating the code of conduct and to change terms as needed."}
            </p>
          </div>
          
          <div className="mt-6 md:mt-12 text-center">
            <a 
              href="https://docs.google.com/forms/..." 
              target="_blank" 
              className="inline-flex items-center gap-3 px-6 py-3 md:px-10 md:py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
            >
              {isBn ? "আমি রাজি, আবেদন করব" : "I Agree, Apply Now"}
              <UserPlus size={20} />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default JoiningConditions;