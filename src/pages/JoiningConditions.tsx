import React, { useState, useEffect } from 'react';
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
  CheckCircle2,
  FileCode2,
  Gem
} from 'lucide-react';

const JoiningConditions: React.FC = () => {
  const { lang } = useLanguage();
  const isBn = lang === "bn";

  const [activeNode, setActiveNode] = useState<string>("node-1");

  const conditionNodes = [
    {
      id: "node-1",
      icon: <ShieldCheck size={20} />,
      title: isBn ? "১. বর্তমান অবস্থা ও প্রারম্ভিক লক্ষ্য" : "1. Operational Stage & Goals",
      content: (
        <>
          <p>
            {isBn 
              ? "আমাদের কোম্পানি বর্তমানে একদম প্রাথমিক স্তরে থেকে নতুনভাবে যাত্রা শুরু করেছে। এই মুহূর্তে আমাদের মূল লক্ষ্য এবং প্রথম বড় দায়িত্ব হলো— কোয়ালিটি প্রজেক্ট বিল্ড করা এবং কোম্পানিকে সাধারণ মানুষ ও টার্গেট অডিয়েন্সের কাছে পরিচিত করে তোলা।" 
              : "Our venture is operating at its foundational stage. The primary milestones involve developing robust MVP architectures and scaling our platform visibility within global and local markets."}
          </p>
        </>
      )
    },
    {
      id: "node-2",
      icon: <Banknote size={20} />,
      title: isBn ? "২. বুটস্ট্র্যাপড বেতন নীতি ও দীর্ঘমেয়াদী অগ্রাধিকার" : "2. Bootstrap Compensation Policy",
      content: (
        <>
          <p>
            {isBn 
              ? "প্রাথমিক স্তরে বুটস্ট্র্যাপড অবস্থায় থাকায় কোম্পানি বর্তমানে কোনো ধরনের ফিক্সড মাসিক বেতন দিতে সক্ষম নয়। তবে যারা শুরু থেকে ডেডিকেশনের সাথে কন্ট্রিবিউট করবেন, তারা ভবিষ্যতে ফান্ডিং বা রেভিনিউ জেনারেট হলে বেতন কাঠামো চালুর ক্ষেত্রে সর্বোচ্চ অগ্রাধিকার পাবেন— ইনশাআল্লাহ।" 
              : "As a bootstrapped ecosystem, we do not provide immediate fixed financial compensation. However, foundational members holding early execution status will be explicitly prioritized with competitive corporate salary structures upon revenue conversion."}
          </p>
        </>
      )
    },
    {
      id: "node-3",
      icon: <Gem size={20} />,
      title: isBn ? "৩. যোগ্যতা সাপেক্ষে ফিউচার ইক্যুইটি ও শেয়ার স্কোপ" : "3. Future Equity & Partner Selection",
      content: (
        <>
          <p>
            {isBn 
              ? "টিমের সাথে দীর্ঘমেয়াদী পথচলায় যারা নিজেদের যোগ্যতা, কাজের মান এবং লিডারশিপ স্কিল প্রমাণ করতে পারবেন, কোম্পানির স্কেলিং ফেজে তাদের জন্য মেধা ও পারফরম্যান্স মূল্যায়নের মাধ্যমে কোম্পানির প্রোফিট শেয়ার বা পার্টনারশিপ/ইক্যুইটি (Equity Allocation) পাওয়ার সুযোগ থাকবে।" 
              : "Core contributors who successfully validate high-tier competence, system ownership, and leadership qualities will be structurally evaluated for future equity options, options pools, or direct profit-sharing brackets during scaling phases."}
          </p>
        </>
      )
    },
    {
      id: "node-4",
      icon: <Briefcase size={20} />,
      title: isBn ? "৪. প্রজেক্ট-ভিত্তিক কাজের ধরন" : "4. Milestone & Project-Based Workspace",
      content: (
        <>
          <p>
            {isBn 
              ? "বর্তমানে আমাদের সমস্ত কার্যক্রম প্রজেক্ট এবং মাইলস্টোন-ভিত্তিক (Project-Based)। এই মুহূর্তে টিম মেম্বারদের জন্য কোনো ফুল-টাইম ডিউটি বা কঠোর ৯-টা-৫-টা অফিস আওয়ার কিংবা নির্দিষ্ট ঘণ্টা কাজ করার কোনো বাধ্যবাধকতা নেই।" 
              : "Our operational flow runs purely on project-based execution schedules. Team members are not subject to standard full-time constraints or rigid daily hourly minimum logs at this development milestone."}
          </p>
        </>
      )
    },
    {
      id: "node-5",
      icon: <Code2 size={20} />,
      title: isBn ? "৫. প্রয়োজনীয় কারিগরি ও সৃজনশীল দক্ষতা" : "5. Core Competency & Tech Verticals",
      content: (
        <>
          <p>
            {isBn 
              ? "আমরা নির্দিষ্ট কিছু সেক্টরে দক্ষ মেম্বার খুঁজছি। ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট, মোবাইল অ্যাপ অ্যাপস, ইসলামিক কন্টেন্ট রিসার্চ, UI/UX ডিজাইন, ভিডিও এডিটিং, গ্রোথ মার্কেটিং কিংবা টেকনিক্যাল কনটেন্ট রাইটিং—যেকোনো স্কিল নিয়ে ডেডিকেটেড ব্যক্তিরা আমাদের সাথে কাজ করতে পারবেন।" 
              : "We integrate minds across specialized domains including Full-Stack Web Architecture, Mobile Systems, Islamic Content Frameworks, UI/UX Engineering, Media Post-Production, Growth Optimization, and Copywriting."}
          </p>
        </>
      )
    },
    {
      id: "node-6",
      icon: <Scale size={20} />,
      title: isBn ? "৬. ইসলামিক আচরণবিধি ও মূল্যবোধ" : "6. Islamic Professional Ethics",
      content: (
        <>
          <p>
            {isBn 
              ? "টিমের অভ্যন্তরে শালীনতা বজায় রাখা, সকল প্রকার হারাম কন্টেন্ট বা কাজ থেকে সম্পূর্ণ দূরে থাকা এবং বাকি টিম মেম্বারদের সাথে সর্বোচ্চ পেশাদার ও শ্রদ্ধাপূর্ণ যোগাযোগ বজায় রাখা প্রত্যেকের জন্য বাধ্যতামুলক।" 
              : "Upholding complete moral modesty, absolute rejection of haram elements or design architectures, and operating under a deeply professional, respectful internal communication loop are baseline requirements."}
          </p>
        </>
      )
    },
    {
      id: "node-7",
      icon: <Lock size={20} />,
      title: isBn ? "৭. প্রজেক্টের গোপনীয়তা ও আইপি সুরক্ষা" : "7. Information Security & IP Protection",
      content: (
        <>
          <p>
            {isBn 
              ? "কোম্পানির কোনো ইন্টারনাল প্রজেক্ট প্ল্যান, সোর্স কোড, ডাটাবেজ আর্কিটেকচার বা আপকামিং ইউআই ডিজাইন ডেভেলপমেন্ট টিমের অফিশিয়াল পারমিশন ছাড়া বাইরের কোনো ব্যক্তি বা প্রতিষ্ঠানের সাথে শেয়ার করা সম্পূর্ণ নিষিদ্ধ।" 
              : "Any internal system layout, code logic, repository structure, or production interface data remains strictly classified. Sharing these assets externally without structural administrative authorization is a critical compliance violation."}
          </p>
        </>
      )
    },
    {
      id: "node-8",
      icon: <FileCode2 size={20} />,
      title: isBn ? "৮. মেধা সম্পদের কপিরাইট ও ফাইল হ্যান্ডওভার নীতি" : "8. Code Asset Copyright & Deliverables Rule",
      content: (
        <>
          <p>
            {isBn 
              ? "কোম্পানির প্রজেক্টের অংশ হিসেবে আপনি যে সোর্স কোড, ডিজাইন এসেট বা কন্টেন্ট তৈরি করবেন, তার সম্পূর্ণ কপিরাইট এবং মালিকানা কোম্পানির থাকবে। কোনো মেম্বার টিম লিভ করার সিদ্ধান্ত নিলে, তার তৈরি করা সমস্ত সোর্স ফাইল এবং গিটহাব/ফিগমা অ্যাক্সেস টিমকে বুঝিয়ে দিয়ে যেতে হবে।" 
              : "All software architectures, assets, scripts, or documentation modules created under the company pipeline remain the exclusive property of the organization. Upon exit paths, full technical handovers of active repositories and master source files are mandatory."}
          </p>
        </>
      )
    },
    {
      id: "node-9",
      icon: <LogOut size={20} />,
      title: isBn ? "৯. অফবোর্ডিং ও টিম ত্যাগ করার নিয়ম" : "9. Standard Offboarding Framework",
      content: (
        <>
          <p>
            {isBn 
              ? "ব্যক্তিগত বা অন্য কোনো কারণে কেউ স্বেচ্ছায় টিম ছাড়তে চাইলে প্রজেক্টের স্বার্থে অন্তত ৩ দিন আগে অফিশিয়ালি জানাতে হবে। আপনার দায়িত্বে থাকা চলমান কোনো প্রজেক্ট অসম্পূর্ণ বা অলস অবস্থায় ফেলে রেখে আকস্মিকভাবে চলে যাওয়া যাবে না।" 
              : "If a member intends to exit early rosters, a formal notice must be logged at least 3 days in advance. Active critical milestones cannot be left un-compiled or stranded mid-execution cycle without structured handover logs."}
          </p>
        </>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const node of conditionNodes) {
        const element = document.getElementById(node.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNode(node.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNode = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
      setActiveNode(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] font-sans pb-32 transition-colors duration-300">
      <SEO 
        title={isBn ? "টিমে যোগদানের শর্তাবলী" : "Internal Team Onboarding Agreement"}
        description="Comprehensive guidelines, asset protection, and partnership terms for joining the Kafa'ah dev rosters."
        url="/joining-conditions"
        image="https://kafaahbd.com/joining-conditions-cover.jpg"
        breadcrumbs={[{ name: isBn ? "যোগদানের শর্তাবলী" : "Joining Conditions", url: "/joining-conditions" }]}
      />

      {/* Corporate Accent Line */}
      <div className="h-2.5 w-full bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400" />

      {/* Header Profile */}
      <header className="border-b border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-[#090d16]/50 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 text-center lg:text-left">
          <div className="mb-4 flex justify-center lg:justify-start">
            <Breadcrumb items={[{ name: isBn ? "রিক্রুটমেন্ট টার্মস" : "Human Resources" }]} />
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-800/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Clock size={14} /> {isBn ? "আপডেট করা হয়েছে: ২০২৬" : "Roster Framework Update: 2026"}
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                {isBn ? "টিমে যোগদানের শর্তাবলী" : "Team Joining Terms"}
              </h1>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mt-3 italic font-serif">
                {isBn 
                  ? "“সঠিক প্রযুক্তির মাধ্যমে উম্মাহর সেবায় আমাদের সহযোগী হোন”" 
                  : "“Join us in serving the Ummah through the right technology”"}
              </p>
            </div>
            <div className="text-slate-500 dark:text-slate-400 text-sm lg:text-right font-medium shrink-0">
              <p>{isBn ? "কমপ্লায়েন্স লেভেল: ১.৪" : "Compliance Document: v1.4"}</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">{isBn ? "সর্বনিম্ন বয়সসীমা: ১৪+" : "Minimum Age Authorization: 14+"}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Document Framework */}
      <main className="max-w-7xl mx-auto px-4 mt-12">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* STICKY SIDEBAR NAVIGATION */}
          <aside className="hidden lg:block w-72 shrink-0 h-fit sticky top-28 self-start">
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#090d16] p-5 shadow-sm">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-2">
                {isBn ? "শর্তাবলী সূচিপত্র" : "Roster Clauses"}
              </h4>
              <nav className="space-y-1">
                {conditionNodes.map((node) => (
                  <button
                    key={node.id}
                    onClick={() => scrollToNode(node.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-semibold tracking-tight transition-all ${
                      activeNode === node.id
                        ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-l-4 border-emerald-600 pl-2 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/60 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    <span className={activeNode === node.id ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400 dark:text-slate-500"}>
                      {node.icon}
                    </span>
                    <span className="truncate">{node.title.split(". ")[1]}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* DOCUMENT BODY CONTENT */}
          <section className="flex-1 max-w-3xl space-y-12 bg-white dark:bg-[#090d16] border border-slate-200/60 dark:border-slate-800/60 rounded-[2rem] p-6 md:p-12 shadow-sm">
            
            <div className="pb-8 border-b border-slate-100 dark:border-slate-800/80">
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {isBn 
                  ? "আমাদের কোরে টিমে যোগ দেওয়ার পূর্বে এই সমঝোতা স্মারক ও শর্তাবলী গুরুত্ব সহকারে সম্পন্ন করুন। এই নিয়মগুলো মূলত আমাদের টিমের কাজের সুশৃঙ্খল পরিবেশ, মেধা সম্পদের আইনি নিরাপত্তা এবং ভবিষ্যতে সবার সমান অধিকার সুনিশ্চিত করার লক্ষ্যেই ডিজাইন করা হয়েছে।" 
                  : "Review our primary roster guidelines before submitting an engineer profile. These clauses establish functional workspace metrics, secure our digital asset footprints, and formulate objective scaling reward systems for long-term core contributors."}
              </p>
            </div>

            {/* Rendered Nodes */}
            {conditionNodes.map((node) => (
              <div 
                key={node.id} 
                id={node.id}
                className="scroll-mt-28 group transition-opacity duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-600 transition-colors duration-300">
                    {node.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {node.title}
                  </h2>
                </div>
                <div className="text-slate-600 dark:text-slate-300 text-base leading-relaxed pl-0 md:pl-11 space-y-2">
                  {node.content}
                </div>
              </div>
            ))}

            {/* Warning Callout Box */}
            <div className="bg-amber-50/80 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-800/30 p-5 rounded-2xl flex gap-4 items-start">
              <AlertCircle className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-amber-900 dark:text-amber-200 font-medium leading-relaxed">
                {isBn 
                  ? "কোম্পানি প্রজেক্টের গোপনীয়তা রক্ষা এবং ইসলামিক আচরণবিধি লঙ্ঘনের দায়ে যেকোনো সদস্যকে টিমের পদ থেকে অবিলম্বে অব্যাহতি দেওয়ার এবং সময়ে সময়ে এই শর্তাবলী পরিবর্তন করার পূর্ণ আইনি অধিকার সংরক্ষণ করে।" 
                  : "The administration reserves full executive rights to remove any profile from active workspaces due to core ethical breaches or security failures, and update onboarding protocols at discretion."}
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Action Trigger Area */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <ScrollAnimation direction="up" className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-white dark:bg-[#090d16] border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {isBn ? "আপনি কি উপরের সকল শর্তাবলীতে একমত?" : "Are you ready to build with our core team?"}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {isBn 
                ? "আবেদন প্রক্রিয়া সম্পন্ন করার পূর্বে প্রতিটি ক্লজ ভালোমতো পড়ে নিশ্চিত হয়ে নিন।" 
                : "Ensure you clearly align with our bootstrapped phase goals and asset-handling pipelines before submitting."}
            </p>
          </div>

          <a 
            href="/join" 
            className="inline-flex items-center justify-center gap-3 px-10 py-4 md:px-12 md:py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-lg rounded-xl shadow-lg shadow-emerald-600/10 transition-all hover:scale-[1.03] hover:-translate-y-0.5 active:scale-95 group"
          >
            <CheckCircle2 size={20} className="group-hover:rotate-12 transition-transform" />
            {isBn ? "শর্তাবলীতে সম্মত, আবেদন করব" : "I Agree with Terms, Apply Now"}
            <UserPlus size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default JoiningConditions;
