import React, { useState, useEffect } from 'react';
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
import Breadcrumb from "../components/Breadcrumb";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  Scale, 
  Mail, 
  Globe, 
  Clock, 
  FileText,
  UserCheck,
  CreditCard,
  AlertTriangle,
  Server,
  ShieldAlert
} from 'lucide-react';

const TermsConditions: React.FC = () => {
  const { lang } = useLanguage();
  const isBn = lang === "bn";

  const [activeSection, setActiveSection] = useState<string>("section-1");

  const legalSections = [
    {
      id: "section-1",
      icon: <UserCheck size={20} />,
      title: isBn ? "১. অ্যাকাউন্ট তৈরি ও সম্মতি জ্ঞাপন" : "1. Account Creation & Mutual Consent",
      content: (
        <>
          <p>
            {isBn 
              ? "আমাদের প্ল্যাটফর্মে একটি অ্যাকাউন্ট তৈরি করার মাধ্যমে আপনি এই ব্যবহারের শর্তাবলী এবং আমাদের গোপনীয়তা নীতি সম্পূর্ণভাবে মেনে নিতে সম্মত হচ্ছেন। আপনি যদি এই শর্তাবলীতে সম্মত না হন, তবে অনুগ্রহ করে অ্যাকাউন্ট তৈরি করা বা আমাদের ডিজিটাল সেবা ব্যবহার করা থেকে বিরত থাকুন।" 
              : "By creating an account on our platform, you explicitly and unconditionally agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, you must immediately refrain from creating an account or accessing our services."}
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 border-l-2 border-blue-500 pl-3 italic">
            {isBn 
              ? "নিবন্ধন সম্পন্ন করার সাথে সাথেই ব্যবহারকারী এবং কর্তৃপক্ষের মধ্যে একটি আইনি চুক্তি সম্পাদিত হয়।" 
              : "Registration constitutes a binding electronic agreement between the user and the platform administration."}
          </p>
        </>
      )
    },
    {
      id: "section-2",
      icon: <FileText size={20} />,
      title: isBn ? "২. অ্যাকাউন্টের নিরাপত্তা ও ব্যবহারকারীর দায়িত্ব" : "2. Account Credentials & Security",
      content: (
        <>
          <p>
            {isBn 
              ? "আপনার অ্যাকাউন্টের গোপনীয়তা রক্ষা করার সম্পূর্ণ দায়িত্ব আপনার। পাসওয়ার্ডের অননুমোদিত ব্যবহার বা নিরাপত্তার যেকোনো ধরনের লঙ্ঘন চিহ্নিত হলে তা অবিলম্বে আমাদের সাপোর্ট টিমকে অবহিত করতে হবে।" 
              : "You are solely responsible for maintaining the confidentiality of your account credentials. You accept responsibility for all activities that occur under your account, and agree to notify us immediately of any unauthorized breach of security."}
          </p>
        </>
      )
    },
    {
      id: "section-3",
      icon: <CreditCard size={20} />,
      title: isBn ? "৩. প্রিমিয়াম সাবস্ক্রিপশন ও স্বয়ংক্রিয় নবায়ন" : "3. Subscriptions & Billing Architecture",
      content: (
        <>
          <p>
            {isBn 
              ? "আমাদের প্ল্যাটফর্মের নির্দিষ্ট কিছু প্রিমিয়াম এবং এডুকেশনাল ফিচার ব্যবহারের জন্য পেইড সাবস্ক্রিপশন প্রয়োজন। সাবস্ক্রিপশন পিরিয়ড শেষ হওয়ার পূর্বেই ব্যবহারকারী নিজে থেকে বাতিল না করলে এটি সিস্টেম দ্বারা স্বয়ংক্রিয়ভাবে নবায়ন (Auto-Renew) হতে পারে।" 
              : "Access to specific premium educational tools requires a paid subscription. Subscriptions are processed on a recurring basis and will automatically renew at the end of each cycle unless cancelled by the user prior to the billing date."}
          </p>
        </>
      )
    },
    {
      id: "section-4",
      icon: <Scale size={20} />,
      title: isBn ? "৪. কঠোর রিফান্ড পলিসি ও টেকনিক্যাল ব্যতিক্রম" : "4. Strict Refund Policy & System Exceptions",
      content: (
        <>
          <p>
            {isBn 
              ? "সাধারণ নিয়ম অনুযায়ী, একবার পেমেন্ট বা সাবস্ক্রিপশন সম্পন্ন হয়ে গেলে তা সম্পূর্ণ অফেরতযোগ্য (Non-Refundable)। তবে, যদি আমাদের সিস্টেম বা সার্ভারের কোনো প্রত্যক্ষ টেকনিক্যাল ত্রুটির কারণে আপনার পেমেন্ট জটিলতা তৈরি হয় বা এক্সেস ব্যাহত হয়, তবে আমাদের অভ্যন্তরীণ টিম তা যথাযথভাবে যাচাই ও তদন্তপূর্বক রিফান্ড প্রক্রিয়া সম্পন্ন করবে।" 
              : "As a standard corporate policy, all transactions and subscription fees are strictly non-refundable. However, in the absolute event that a verified system failure or technical fault directly on our end prevents you from accessing services, a manual refund may be issued after a structural internal audit."}
          </p>
        </>
      )
    },
    {
      id: "section-5",
      icon: <ShieldAlert size={20} />,
      title: isBn ? "৫. কনটেন্ট নীতি ও অ্যাকাউন্ট নিষেধাজ্ঞা (সাসপেনশন)" : "5. Content Moderation & Account Termination",
      content: (
        <>
          <p>
            {isBn 
              ? "ব্যবহারকারীরা প্ল্যাটফর্মে যেকোনো ধরনের কনটেন্ট বা মেসেজ আদান-প্রদান করতে পারবেন, তবে এতে কঠোর নীতি প্রয়োগ করা হবে। কোনো ধরনের যৌন, অশ্লীল, উস্কানিমূলক, বা ক্ষতিকারক কোনো কনটেন্ট আপলোড বা শেয়ার করা সম্পূর্ণ নিষিদ্ধ।" 
              : "Users retain responsibility for generated content, updates, or messaging logs. However, hosting, posting, or transmitting any form of sexually explicit, pornographic, offensive, or structurally harmful content is absolute grounds for termination."}
          </p>
          <div className="mt-4 p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-red-600 dark:text-red-400 font-medium">
            ⚠️ {isBn 
              ? "এই নিয়ম অমান্য করলে কোনো পূর্ব নোটিশ বা রিফান্ড ছাড়াই ব্যবহারকারীর অ্যাকাউন্ট স্থায়ীভাবে ব্যান বা সাময়িক স্থগিত (Suspend) করা হবে।" 
              : "Violations of these core conduct rules will trigger immediate system enforcement, resulting in a permanent ban or account suspension without prior notice or financial compensation."}
          </div>
        </>
      )
    },
    {
      id: "section-6",
      icon: <Server size={20} />,
      title: isBn ? "৬. সার্ভার মেইনটেন্যান্স ও ডাউনটাইম ক্ষতিপূরণ নীতি" : "6. Scheduled Maintenance & Downtime Compensation",
      content: (
        <>
          <p>
            {isBn 
              ? "সার্ভারের গতিশীলতা বজায় রাখতে পর্যায়ক্রমিক মেইনটেন্যান্স বা আপগ্রেডের প্রয়োজন পড়ে। যেকোনো শিডিউলড মেইনটেন্যান্সের ক্ষেত্রে প্ল্যাটফর্মে বা নোটিশ বোর্ডে আগে থেকে নোটিশ প্রকাশ করা হবে।" 
              : "To guarantee peak performance and security compliance, periodic infrastructure updates are necessary. We will exercise reasonable commercial efforts to broadcast an advance system notice prior to any scheduled maintenance."}
          </p>
          <p className="mt-3">
            {isBn 
              ? "যদি কোনো অনাকাঙ্ক্ষিত সার্ভার ডাউনটাইমের কারণে আপনার পেইড সাবস্ক্রিপশনের ব্যবহার সরাসরি বাধাগ্রস্ত হয়, তবে আমরা ক্ষতিপূরণ হিসেবে আপনার সক্রিয় সাবস্ক্রিপশনের সাথে অতিরিক্ত প্রিমিয়াম ডেইজ (Extra Days Subscription Gift) যুক্ত করে দেব।" 
              : "In the specific instance that unexpected or extended server downtime directly cuts off your active premium access, we will fully compensate you by gifting additional premium days to your running subscription cycle."}
          </p>
        </>
      )
    },
    {
      id: "section-7",
      icon: <AlertTriangle size={20} />,
      title: isBn ? "৭. মেধা সম্পদ ও মেধাস্বত্ব সংরক্ষণ" : "7. Intellectual Property Rights",
      content: (
        <>
          <p>
            {isBn 
              ? "এই প্ল্যাটফর্মের সমস্ত সোর্স কোড, UI/UX ডিজাইন, লোগো, ডাটাবেজ স্ট্রাকচার এবং কনটেন্ট Kafa'ah-এর আইনি ও মেধা সম্পদ। আমাদের লিখিত অনুমতি ব্যতীত সফটওয়্যার আর্কিটেকচার কপি করা, মডিফাই করা বা অননুমোদিতভাবে পুনরুৎপাদন করা আইনত দণ্ডনীয় অপরাধ।" 
              : "All digital intellectual properties including core site engines, designs, custom content layouts, code configurations, and service architectures are exclusively owned by Kafa'ah. Unauthorized extraction, reverse engineering, or digital redistribution is strictly actionable by law."}
          </p>
        </>
      )
    },
    {
      id: "section-8",
      icon: <Clock size={20} />,
      title: isBn ? "৮. নীতিমালার আইনি সংশোধন" : "8. Structural Amendments",
      content: (
        <>
          <p>
            {isBn 
              ? "আমরা যেকোনো সময় এই আইনি ব্যবহারের শর্তাবলী পরিমার্জন, সংশোধন বা সম্পূর্ণ পরিবর্তন করার অধিকার রাখি। যেকোনো বড় ধরনের কাঠামোগত পরিবর্তনের ক্ষেত্রে আমরা প্ল্যাটফর্মের নোটিফিকেশনের মাধ্যমে ব্যবহারকারীদের তা অবগতির ব্যবস্থা করব।" 
              : "We reserve the sole administrative right to alter, modify, or update these operational terms at any interval. If a policy shift is structurally substantial, we will publish a broadcast alert to your account interface."}
          </p>
        </>
      )
    }
  ];

  // Logic to handle active scroll highlighting on desktop side bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of legalSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] font-sans pb-32 transition-colors duration-300">
      <SEO 
        title={isBn ? "আইনি ব্যবহারের শর্তাবলী" : "Corporate Terms of Service"}
        description="Official legal agreement, subscription rules, content protocols, and service compliance for Kafa'ah Ecosystem."
        url="/terms-conditions"
        image="https://kafaahbd.com/terms-cover.jpg"
        breadcrumbs={[{ name: isBn ? "শর্তাবলী" : "Terms", url: "/terms-conditions" }]}
      />

      {/* Top Banner Accent */}
      <div className="h-2.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500" />

      {/* Corporate Header */}
      <header className="border-b border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-[#090d16]/50 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="mb-4">
            <Breadcrumb items={[{ name: isBn ? "আইনি ডকুমেন্টস" : "Legal Department" }]} />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Scale size={14} /> {isBn ? "অফিসিয়াল ডকুমেন্ট" : "Official Legal Agreement"}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {isBn ? "ব্যবহারের শর্তাবলী" : "Terms of Service"}
              </h1>
            </div>
            <div className="text-slate-500 dark:text-slate-400 text-sm md:text-right font-medium">
              <p>{isBn ? "সর্বশেষ পরিমার্জন:" : "Last Structural Update:"} June 1, 2026</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{isBn ? "সংস্করণ ২.৪ (কার্যকর)" : "v2.4 (Active deployment)"}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Enterprise Layout Frame */}
      <main className="max-w-7xl mx-auto px-4 mt-12">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* STICKY SIDEBAR TABLE OF CONTENTS (Desktop Corporate Standard) */}
          <aside className="hidden lg:block w-72 shrink-0 h-fit sticky top-28 self-start">
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#090d16] p-5 shadow-sm">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-2">
                {isBn ? "ডকুমেন্ট সূচিপত্র" : "Document Navigation"}
              </h4>
              <nav className="space-y-1">
                {legalSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-semibold tracking-tight transition-all ${
                      activeSection === sec.id
                        ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 pl-2 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    <span className={activeSection === sec.id ? "text-blue-600 dark:text-blue-400" : "text-slate-400 dark:text-slate-500"}>
                      {sec.icon}
                    </span>
                    <span className="truncate">{sec.title.split(". ")[1]}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* DOCUMENT CONTENT BODY */}
          <section className="flex-1 max-w-3xl space-y-12 bg-white dark:bg-[#090d16] border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] p-6 md:p-12 shadow-sm">
            
            {/* Introductory Overview */}
            <div className="pb-8 border-b border-slate-100 dark:border-slate-800/80">
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-normal">
                {isBn 
                  ? "আমাদের সফটওয়্যার এবং ডিজিটাল সেবাগুলো ব্যবহার করার পূর্বে অনুগ্রহ করে নিচে উল্লেখিত আইনি বাধ্যবাধকতাগুলো মনোযোগ সহকারে পড়ে নিন। এই শর্তাবলী আপনার আইনি অধিকার রক্ষা এবং আমাদের প্ল্যাটফর্মের সুস্থ পরিবেশ বজায় রাখার স্বার্থে তৈরি করা হয়েছে।" 
                  : "Please carefully evaluate these transactional and functional legal operational clauses before interacting with our engines. These provisions regulate your compliance, protect data systems architecture, and establish user guidelines for the overall ecosystem."}
              </p>
            </div>

            {/* Individual Structural Sections */}
            {legalSections.map((sec) => (
              <div 
                key={sec.id} 
                id={sec.id}
                className="scroll-mt-28 group transition-opacity duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-colors duration-300">
                    {sec.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {sec.title}
                  </h2>
                </div>
                <div className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-normal pl-0 md:pl-11 space-y-2">
                  {sec.content}
                </div>
              </div>
            ))}

            {/* Formal Governing Closing Footer */}
            <div className="pt-8 mt-12 border-t border-slate-100 dark:border-slate-800/80 text-sm text-slate-500 dark:text-slate-400 space-y-2">
              <p className="flex items-center gap-2 font-medium">
                <Globe size={14} className="text-slate-400" />
                {isBn ? "কার্যকর এখতিয়ার: বাংলাদেশ সাইবার ও ডিজিটাল আইন।" : "Jurisdiction Scope: Substantive Digital and Corporate Laws of Bangladesh."}
              </p>
              <p>
                {isBn
                  ? "এই শর্তাবলী কোনো ব্যবহারকারীর অধিকার খর্ব করার জন্য নয়, বরং প্রিমিয়াম সেবার মান এবং সিস্টেমের স্থায়িত্ব নিশ্চিতের লক্ষ্যে প্রণীত।"
                  : "These rules are structurally integrated to preserve user service continuity, manage platform parameters, and ensure secure software delivery layers."}
              </p>
            </div>
          </section>
        </div>

        {/* Corporate Legal Desk Footer Link */}
        <div className="mt-16 bg-slate-900 dark:from-slate-900 dark:to-slate-950 text-white rounded-3xl p-8 md:p-12 border border-slate-800 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">
                {isBn ? "আইনি ডেস্ক বা রিফান্ড ইনকোয়ারি" : "Legal Compliance Support"}
              </h3>
              <p className="text-slate-400 text-sm max-w-xl font-normal">
                {isBn 
                  ? "টেকনিক্যাল ত্রুটির কারণে রিফান্ড ক্লেইম করতে বা আইনি নোটিশের বিষয়ে সরাসরি আমাদের সিস্টেম অ্যাডমিনের সাথে ইমেইলে যোগাযোগ করুন।" 
                  : "If you need to log verified server fault inquiries, flag access limitations, or address institutional compliance matters, contact our data desk."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <a 
                href="mailto:tanvirishrak04@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all text-sm shadow-md"
              >
                <Mail size={16} /> {isBn ? "যোগাযোগ করুন" : "Contact Desk"}
              </a>
              <div className="px-5 py-3 bg-slate-800 border border-slate-700 text-slate-300 text-center rounded-xl font-mono text-xs tracking-wider">
                kafaahbd.com
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsConditions;
