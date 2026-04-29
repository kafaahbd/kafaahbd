import React from 'react';
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
import Breadcrumb from "../components/Breadcrumb";
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
  Clock,
  CheckCircle2
} from 'lucide-react';

const JoiningConditions: React.FC = () => {
  const { lang } = useLanguage();
  const isBn = lang === "bn";

  const conditions = [
    {
      id: 1,
      icon: <ShieldCheck className="text-emerald-500" size={28} />,
      title: isBn ? "১. বর্তমান অবস্থা" : "1. Company Status",
      content: isBn 
        ? "আমাদের কোম্পানি বর্তমানে নতুনভাবে যাত্রা শুরু করেছে। প্রথম দায়িত্ব হবে— কোম্পানিকে মানুষের কাছে পৌঁছে দেওয়া এবং পরিচিত করে তোলা।" 
        : "Our company has recently started its journey. The primary responsibility is to introduce the company to people.",
      gradient: "from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/20 dark:to-teal-500/10"
    },
    {
      id: 2,
      icon: <Banknote className="text-blue-500" size={28} />,
      title: isBn ? "২. বেতন নীতি" : "2. Salary Policy",
      content: isBn 
        ? "আপাতত কোম্পানি বেতন দিতে সক্ষম নয়। তবে যারা শুরু থেকেই থাকবেন, তারা ভবিষ্যতে বিশেষ অগ্রাধিকার এবং অন্যদের তুলনায় বেশি বেতন পাবেন ইনশাআল্লাহ।" 
        : "Currently, the company is unable to provide salaries. However, early members will receive special priority and higher salaries in the future, InshaAllah.",
      gradient: "from-blue-500/10 to-cyan-500/5 dark:from-blue-500/20 dark:to-cyan-500/10"
    },
    {
      id: 3,
      icon: <Briefcase className="text-orange-500" size={28} />,
      title: isBn ? "৩. কাজের ধরন" : "3. Work Type",
      content: isBn 
        ? "বর্তমানে কাজ হবে প্রজেক্ট-ভিত্তিক। ফুল-টাইম বা নির্দিষ্ট ঘণ্টা কাজ এখন বাধ্যতামূলক নয়।" 
        : "Work will be project-based for now. Full-time or fixed-hour work is not mandatory at this stage.",
      gradient: "from-orange-500/10 to-amber-500/5 dark:from-orange-500/20 dark:to-amber-500/10"
    },
    {
      id: 4,
      icon: <Code2 className="text-indigo-500" size={28} />,
      title: isBn ? "৪. প্রয়োজনীয় দক্ষতা" : "4. Skill Requirements",
      content: isBn 
        ? "ওয়েব, অ্যাপ ডেভেলপমেন্ট, ইসলামিক কন্টেন্ট, ডিজাইন, এডিটিং, মার্কেটিং বা রাইটিং—যেকোনো স্কিল নিয়ে যোগ দেওয়া যাবে।" 
        : "Web/App development, Islamic content, design, editing, marketing, or writing—anyone with these skills can join.",
      gradient: "from-indigo-500/10 to-violet-500/5 dark:from-indigo-500/20 dark:to-violet-500/10"
    },
    {
      id: 5,
      icon: <Scale className="text-emerald-600 dark:text-emerald-400" size={28} />,
      title: isBn ? "৫. ইসলামিক আচরণবিধি" : "5. Islamic Code of Conduct",
      content: isBn 
        ? "শালীন আচরণ, হারাম কন্টেন্ট বর্জন, এবং টিম মেম্বারদের সাথে শ্রদ্ধাপূর্ণ যোগাযোগ বজায় রাখা বাধ্যতামূলক।" 
        : "Modest behavior, avoiding haram content, and respectful communication with the team are mandatory.",
      gradient: "from-green-500/10 to-emerald-500/5 dark:from-green-500/20 dark:to-emerald-500/10"
    },
    {
      id: 6,
      icon: <UserPlus className="text-rose-500" size={28} />,
      title: isBn ? "৬. বয়স ও নির্বাচন" : "6. Age & Selection",
      content: isBn 
        ? "ন্যূনতম বয়স ১৪+ হতে হবে। দক্ষতা এবং ইসলামিক মাইন্ডসেট দেখে সদস্য নিশ্চিত করা হবে।" 
        : "Minimum age 14+. Membership confirmed based on skill and Islamic mindset.",
      gradient: "from-rose-500/10 to-pink-500/5 dark:from-rose-500/20 dark:to-pink-500/10"
    },
    {
      id: 7,
      icon: <Lock className="text-slate-600 dark:text-slate-400" size={28} />,
      title: isBn ? "৭. গোপনীয়তা" : "7. Confidentiality",
      content: isBn 
        ? "কোম্পানির প্রজেক্ট, কোড বা ডিজাইন অনুমতি ছাড়া কারও কাছে শেয়ার করা যাবে না।" 
        : "Company projects, code, or designs cannot be shared without permission.",
      gradient: "from-slate-500/10 to-gray-500/5 dark:from-slate-500/20 dark:to-gray-500/10"
    },
    {
      id: 8,
      icon: <LogOut className="text-amber-600 dark:text-amber-500" size={28} />,
      title: isBn ? "৮. ত্যাগ করার নিয়ম" : "8. Leaving Rules",
      content: isBn 
        ? "কোম্পানি ছাড়তে চাইলে অন্তত ৩ দিন আগে জানাতে হবে এবং চলমান প্রজেক্ট অসম্পূর্ণ রাখা যাবেবিধা।" 
        : "Inform at least 3 days before leaving and do not leave ongoing projects incomplete.",
      gradient: "from-amber-500/10 to-yellow-500/5 dark:from-amber-500/20 dark:to-yellow-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#05070a] font-sans pb-24 transition-colors duration-500">
      <SEO 
        title={isBn ? "যোগদানের শর্তাবলী" : "Joining Conditions"}
        description="Kafa'ah Joining Terms and Conditions"
        url="/joining-conditions"
        image="https://kafaahbd.com/joining-conditions-cover.jpg"
        breadcrumbs={[{ name: isBn ? "যোগদানের শর্তাবলী" : "Joining Conditions", url: "/joining-conditions" }]}
      />

      {/* Header Section */}
      <section className="relative pt-8 pb-12 md:pt-12 md:pb-16 px-4 overflow-hidden">
        {/* Soft Ambient Background Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-400/10 dark:bg-emerald-900/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-teal-400/10 dark:bg-teal-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          <div className="self-start w-full flex justify-center lg:justify-center mb-6 md:mb-10">
             <Breadcrumb items={[{ name: isBn ? "শর্তাবলী" : "Conditions" }]} />
          </div>

          <ScrollAnimation className="text-center w-full">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <Clock size={16} /> {isBn ? "আপডেট করা হয়েছে: ২০২৬" : "Updated: 2026"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              {isBn ? "টিমে যোগদানের শর্তাবলী" : "Joining Terms & Conditions"}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto italic font-serif leading-relaxed">
              {isBn 
                ? "“সঠিক প্রযুক্তির মাধ্যমে উম্মাহর সেবায় আমাদের সহযোগী হোন”" 
                : "“Join us in serving the Ummah through the right technology”"}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Conditions Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {conditions.map((item, idx) => (
            <ScrollAnimation key={item.id} delay={idx * 0.05} direction={idx % 2 === 0 ? "right" : "left"}>
              <div className="group h-full p-6 md:p-8 bg-white/70 dark:bg-[#0a0d13]/70 backdrop-blur-xl border border-white/50 dark:border-white/5 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Subtle gradient hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="flex items-start gap-5 relative z-10">
                  <div className="p-3.5 bg-white dark:bg-[#131821] border border-gray-100 dark:border-white/5 rounded-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
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

        {/* Warning/Rights Footer */}
        <ScrollAnimation direction="up" className="mt-12 md:mt-16">
          <div className="bg-amber-50/80 dark:bg-amber-900/20 backdrop-blur-md border border-amber-200/50 dark:border-amber-700/30 p-6 md:p-8 rounded-[2rem] flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left shadow-sm">
            <div className="p-3 bg-amber-100 dark:bg-amber-800/30 rounded-2xl shrink-0">
               <AlertCircle className="text-amber-600 dark:text-amber-400" size={32} />
            </div>
            <p className="text-base md:text-lg text-amber-900 dark:text-amber-200 font-medium leading-relaxed">
              {isBn 
                ? "কোম্পানি প্রয়োজনে যেকোনো সদস্যকে আচরণবিধি লঙ্ঘনের দায়ে সরিয়ে দেওয়ার এবং শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করে।" 
                : "The company reserves the right to remove any member for violating the code of conduct and to change terms as needed."}
            </p>
          </div>
          
          <div className="mt-12 md:mt-16 text-center">
            <a 
              href="/join" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-lg md:text-xl rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.3)] transition-all hover:scale-105 hover:-translate-y-1 active:scale-95 group"
            >
              <CheckCircle2 size={24} className="group-hover:rotate-12 transition-transform" />
              {isBn ? "আমি রাজি, আবেদন করব" : "I Agree, Apply Now"}
              <UserPlus size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default JoiningConditions;