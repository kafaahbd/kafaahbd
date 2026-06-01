import React, { useState, useEffect } from 'react';
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
import Breadcrumb from "../components/Breadcrumb";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  Shield, 
  Mail, 
  Database, 
  HardDrive, 
  Key, 
  Trash2, 
  EyeOff, 
  UserX,
  FileText,
  Lock
} from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const { lang } = useLanguage();
  const isBn = lang === "bn";

  const [activeSection, setActiveSection] = useState<string>("privacy-1");

  const privacySections = [
    {
      id: "privacy-1",
      icon: <Database size={20} />,
      title: isBn ? "১. সংগৃহীত তথ্য ও ডেটা প্রোফাইল" : "1. Information Collection & Profiles",
      content: (
        <>
          <p>
            {isBn 
              ? "আমাদের প্ল্যাটফর্মে নিবন্ধন বা প্রোফাইল আপডেট করার সময় আমরা ব্যবহারকারীর নির্দিষ্ট কিছু ব্যক্তিগত তথ্য সংগ্রহ করি। এর মধ্যে রয়েছে আপনার নাম, মোবাইল নম্বর এবং ইমেল ঠিকানা।" 
              : "When you register an account or update your profile on our platform, we collect essential identifying details. This data profile strictly includes your full name, mobile phone number, and primary email address."}
          </p>
          <div className="mt-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-medium text-sm">
            🛡️ {isBn 
              ? "বাণিজ্যিক নিশ্চয়তা: আমরা আপনার কোনো ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রি, লিজ বা বিনিময় করি না।" 
              : "Commercial Guarantee: We do not sell, rent, trade, or distribute your personal details to any third-party marketing networks."}
          </div>
        </>
      )
    },
    {
      id: "privacy-2",
      icon: <HardDrive size={20} />,
      title: isBn ? "২. ক্লাউড ইনফ্রাস্ট্রাকচার ও থার্ড-পার্টি সাব-প্রসেসর" : "2. Infrastructure & Third-Party Processors",
      content: (
        <>
          <p>
            {isBn 
              ? "সিস্টেমের উচ্চ কার্যক্ষমতা ও নিরাপদ হোস্টিং নিশ্চিত করতে আমরা বিশ্বস্ত ক্লাউড সাব-প্রসেসর এবং ডেটাবেজ অবকাঠামো ব্যবহার করি। আমাদের ব্যবহৃত থার্ড-পার্টি সার্ভিসগুলো হলো:" 
              : "To maintain server architecture compliance and rapid request processing, we route operations through specialized global sub-processors. Our modern infrastructure environment includes:"}
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm font-mono text-slate-700 dark:text-slate-300 pl-4 list-disc">
            <li>Supabase & Neon DB</li>
            <li>Firebase Auth Engine</li>
            <li>Upstash Redis Cache</li>
            <li>Render & Vercel Hosting</li>
            <li>GitHub Deployment Workflow</li>
          </ul>
        </>
      )
    },
    {
      id: "privacy-3",
      icon: <Key size={20} />,
      title: isBn ? "৩. লোকাল স্টোরেজ ও সেশন ট্র্যাকিং" : "3. Local Storage & Session Maintenance",
      content: (
        <>
          <p>
            {isBn 
              ? "ব্যবহারকারীকে বারবার লগইন করার ঝামেলা থেকে মুক্তি দিতে আমরা ব্রাউজারের লোকাল স্টোরেজ (Browser Local Storage) ব্যবহার করি। এখানে আপনার সিকিউর JWT (JSON Web Token), ফায়ারবেস অথেনটিকেশন টোকেন এবং সাময়িক সেশন ভেরিয়েবলগুলো জমা রাখা হয়।" 
              : "To sustain active authorization layers across web sessions, we utilize client-side Browser Local Storage. This cache retains your secure JWT (JSON Web Token), Firebase authentication tokens, and temporary state-management variables."}
          </p>
        </>
      )
    },
    {
      id: "privacy-4",
      icon: <Lock size={20} />,
      title: isBn ? "৪. এনক্রিপশন ও ডেটা সিকিউরিটি প্রোটোকল" : "4. Encryption & Security Protocol",
      content: (
        <>
          <p>
            {isBn 
              ? "ব্যবহারকারীর ডেটা সুরক্ষায় আমরা আধুনিক ক্রিপ্টোগ্রাফিক প্রোটোকল ব্যবহার করি। আপনার অ্যাকাউন্টের পাসওয়ার্ড ডাটাবেজে জমা করার আগে ওয়ান-ওয়ে হ্যাশিং (Cryptographic Hashing) অ্যালগরিদম দ্বারা সম্পূর্ণ এনক্রিপ্ট করা হয়।" 
              : "We enforce structural data protection pipelines. All user account passwords undergo one-way cryptographic hashing prior to database storage, ensuring plain-text credentials are never accessible."}
          </p>
          <p className="mt-2">
            {isBn 
              ? "এছাড়াও, সার্ভার এবং ক্লায়েন্টের মধ্যে আদান-প্রদান করা ফায়ারবেস ও কাস্টম JWT টোকেনগুলো ট্রানজিট মোডে সম্পূর্ণ সুরক্ষিত এবং সাইনড (Signed) অবস্থায় থাকে।" 
              : "Furthermore, Firebase session handles and custom API JWT identifiers are digitally signed to block injection vulnerabilities or cross-site tampering."}
          </p>
        </>
      )
    },
    {
      id: "privacy-5",
      icon: <Trash2 size={20} />,
      title: isBn ? "৫. অ্যাকাউন্ট ডিলিটেশন এবং স্থায়ী ডেটা বিলোপ নীতি" : "5. Permanent Account & Data Deletion",
      content: (
        <>
          <p>
            {isBn 
              ? "প্ল্যাটফর্মে সংরক্ষিত নিজের তথ্যের ওপর ব্যবহারকারীর সম্পূর্ণ নিয়ন্ত্রণ রয়েছে। আপনি যদি আপনার অ্যাকাউন্ট ডিলিট করতে চান, তবে আমাদের সেটিংস ইন্টারফেস বা সাপোর্ট ডেস্কে যোগাযোগের মাধ্যমে তা করতে পারেন।" 
              : "Users maintain complete autonomy over their metadata footprint. If you choose to terminate your relationship with our platform, you can invoke a full data purge via your profile interface or contact support."}
          </p>
          <div className="mt-4 p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-red-600 dark:text-red-400 font-semibold text-sm">
            ⚠️ {isBn 
              ? "সতর্কবার্তা: একবার আপনার অ্যাকাউন্ট ডিলিট বা মুছে ফেলা হলে, আমাদের ক্লাউড প্রোডাকশন ডাটাবেজ (Supabase/Neon) থেকে আপনার সমস্ত ডেটা স্থায়ীভাবে বিলুপ্ত হবে এবং তা আর কখনোই পুনরুদ্ধার (Recover) করা সম্ভব নয়।" 
              : "Absolute Disclaimer: Once an account deletion execution finishes, all correlated tables within our cloud production engines (Supabase/Neon) are wiped permanently. This process is irreversible and data cannot be recovered."}
          </div>
        </>
      )
    },
    {
      id: "privacy-6",
      icon: <EyeOff size={20} />,
      title: isBn ? "৬. ব্যতিক্রমী আইনি প্রকাশ" : "6. Mandatory Legal Disclosures",
      content: (
        <>
          <p>
            {isBn 
              ? "আমরা কোনো বাণিজ্যিক উদ্দেশ্যে বা বিজ্ঞাপন সংস্থার কাছে আপনার ডেটা প্রকাশ করি না। তবে রাষ্ট্রীয় আইন প্রয়োগকারী সংস্থা বা আদালতের আইনি সমন বা সাইবার নিরাপত্তা সংক্রান্ত আইন মেনে চলার স্বার্থে যদি ডেটা প্রদর্শনের বাধ্যবাধকতা তৈরি হয়, তবে আমরা তা প্রকাশ করতে পারি।" 
              : "We do not expose profiles for advertising monetizations. We reserve the right to disclose collected parameters only if strictly mandated by a legal subpoena, valid judicial order, or to preserve platform state security from intentional breach loops."}
          </p>
        </>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of privacySections) {
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
        title={isBn ? "গোপনীয়তা নীতিমালা" : "Corporate Privacy Policy"}
        description="Official privacy policy, data architecture practices, and consumer rights handling for the Kafa'ah network."
        url="/privacy-policy"
        breadcrumbs={[{ name: isBn ? "গোপনীয়তা নীতি" : "Privacy", url: "/privacy-policy" }]}
      />

      {/* Top Banner Accent */}
      <div className="h-2.5 w-full bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500" />

      {/* Header */}
      <header className="border-b border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-[#090d16]/50 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="mb-4">
            <Breadcrumb items={[{ name: isBn ? "তথ্য সুরক্ষা" : "Data Protection" }]} />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Shield size={14} className="text-emerald-500" /> {isBn ? "ডেটা প্রাইভেসি" : "Data Privacy Compliance"}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {isBn ? "গোপনীয়তা নীতিমালা" : "Privacy Policy"}
              </h1>
            </div>
            <div className="text-slate-500 dark:text-slate-400 text-sm md:text-right font-medium">
              <p>{isBn ? "সর্বশেষ আপডেট:" : "Last Document Audit:"} June 1, 2026</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">{isBn ? "সংস্করণ ১.৮ (কার্যকর)" : "v1.8 (Active deployment)"}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Structural Content Layout */}
      <main className="max-w-7xl mx-auto px-4 mt-12">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* STICKY SIDEBAR TABLE OF CONTENTS */}
          <aside className="hidden lg:block w-72 shrink-0 h-fit sticky top-28 self-start">
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#090d16] p-5 shadow-sm">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-2">
                {isBn ? "নীতিমালা সূচি" : "Policy Content Nodes"}
              </h4>
              <nav className="space-y-1">
                {privacySections.map((sec) => (
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-semibold tracking-tight transition-all ${
                      activeSection === sec.id
                        ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-l-4 border-emerald-600 pl-2 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    <span className={activeSection === sec.id ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-slate-500"}>
                      {sec.icon}
                    </span>
                    <span className="truncate">{sec.title.split(". ")[1]}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* POLICY BLOCK DOCUMENT CONTAINER */}
          <section className="flex-1 max-w-3xl space-y-12 bg-white dark:bg-[#090d16] border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] p-6 md:p-12 shadow-sm">
            
            <div className="pb-8 border-b border-slate-100 dark:border-slate-800/80">
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {isBn 
                  ? "Kafa'ah প্ল্যাটফর্ম ব্যবহারকারীদের ডেটা সুরক্ষার বিষয়ে অত্যন্ত সংবেদনশীল। এই নীতিমালায় আমরা স্বচ্ছভাবে প্রকাশ করছি কীভাবে আপনার প্রয়োজনীয় তথ্য সংগ্রহ, ক্লাউড আর্কিটেকচারে প্রক্রিয়াজাত এবং সম্পূর্ণ এনক্রিপ্ট করার মাধ্যমে সুরক্ষিত রাখা হয়।" 
                  : "We take the security of your dynamic data configurations seriously. This document systematically charts how database entities are read, handled via sub-processors, and shielded through cryptographic integrity matrices within the Kafa'ah ecosystem."}
              </p>
            </div>

            {/* Iterated Segments */}
            {privacySections.map((sec) => (
              <div 
                key={sec.id} 
                id={sec.id}
                className="scroll-mt-28 group transition-opacity duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-600 transition-colors duration-300">
                    {sec.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {sec.title}
                  </h2>
                </div>
                <div className="text-slate-600 dark:text-slate-300 text-base leading-relaxed pl-0 md:pl-11 space-y-2">
                  {sec.content}
                </div>
              </div>
            ))}

            {/* Compliance Note */}
            <div className="pt-8 mt-12 border-t border-slate-100 dark:border-slate-800/80 text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <FileText size={14} className="text-slate-400" />
              <span>
                {isBn 
                  ? "এটি একটি আইনিভাবে সক্রিয় ডেটা সুরক্ষা চুক্তিপত্র।" 
                  : "Engineered under institutional encryption frameworks and data privacy standards."}
              </span>
            </div>
          </section>
        </div>

        {/* Data Purge & Governance Support Block */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 md:p-12 border border-slate-800 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-2 flex items-center gap-2">
                <UserX size={22} className="text-red-400" /> 
                {isBn ? "স্থায়ী অ্যাকাউন্ট নিষ্ক্রিয়করণ ডেস্ক" : "Data Erasure & Account Purge Desk"}
              </h3>
              <p className="text-slate-400 text-sm max-w-xl">
                {isBn 
                  ? "আপনার প্রোফাইল ডেটা আমাদের ক্লাউড ডেটাবেজ থেকে সম্পূর্ণ মুছে ফেলতে বা এনক্রিপশন প্রোটোকল সম্পর্কিত প্রশ্নের জন্য আমাদের ডেটা প্রটেকশন অফিসারের সাথে যোগাযোগ করুন।" 
                  : "If you encounter runtime interface errors when triggering an account delete action, or need an absolute manual database node clear, submit an direct request."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <a 
                href="mailto:tanvirishrak04@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all text-sm shadow-md"
              >
                <Mail size={16} /> {isBn ? "অনুরোধ পাঠান" : "Request Purge"}
              </a>
              <div className="px-5 py-3 bg-slate-800 border border-slate-700 text-slate-300 text-center rounded-xl font-mono text-xs tracking-wider">
                privacy@kafaahbd.com
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
