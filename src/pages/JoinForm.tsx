import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Calendar, 
  MapPin, 
  Briefcase, 
  Image as ImageIcon, 
  Send, 
  CheckCircle2,
  Info,
  Loader2,
  GraduationCap,
  BookOpen,
  Code,
  Award,
  Clock,
  Laptop,
  Share2,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Check,
  Star,
  FileText,
  Building,
  Heart
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";

const skillsList = [
  "Frontend (React/Next.js)", "Backend (Node/Express/Python)", "TypeScript", 
  "UI/UX Design (Figma)", "App Development (Flutter/React Native)", "Graphic Design", 
  "Content Writing", "Video Editing & Animation", "SEO Specialist", "Digital Marketing",
  "Project Management", "Cyber Security", "Database Management (PostgreSQL/MongoDB)", "QA & Testing",
  "Photo Editing", "3D Design / Motion Graphics", "Page & Community Management", "Islamic Content Creation"
];

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const workModes = ["Remote", "Hybrid", "Onsite", "Flexible"];
const availabilityHours = ["10-20 Hours / Week", "20-30 Hours / Week", "30-40 Hours / Week", "40+ Hours (Full Time)"];
const shifts = ["Morning Shift", "Evening Shift", "Night Shift", "Flexible / Output Based"];
const referralSources = ["Facebook Page / Group", "LinkedIn", "Friend / Referral", "Kafa'ah Website", "YouTube / Social Media", "Event / Workshop", "Other"];

const JoinForm: React.FC = () => {
  const { t, lang } = useLanguage();
  const isBn = lang === "bn";

  // Form States
  const [formData, setFormData] = useState({
    // 1. Basic Info
    fullNameEn: "",
    fullNameBn: "",
    email: "",
    phone: "",
    whatsapp: "",
    emergencyContact: "",
    dob: "",
    nidOrBirthReg: "",
    bloodGroup: "A+",
    
    // 2. Address Details
    presentAddress: { village: "", union: "", thana: "", district: "", division: "", postCode: "" },
    permanentAddress: { village: "", union: "", thana: "", district: "", division: "", postCode: "" },
    sameAsPresent: false,

    // 3. Educational Background
    currentEduStatus: "Student",
    highestDegree: "",
    institutionName: "",
    subjectDept: "",
    passingYear: "",
    sscGpa: "",
    hscGpa: "",

    // 4. Islamic Knowledge & Ethics
    islamicKnowledgeLevel: "Intermediate",
    quranRecitation: "Reading with basic rules",
    madrasaBackground: "No",
    madrasaDetails: "",
    shariahCommitment: true,

    // 5. Technical Skills
    portfolioLink: "",
    yearsOfExp: "",

    // 6. Soft Skills Ratings (1-5)
    communicationRating: 4,
    leadershipRating: 3,
    problemSolvingRating: 4,
    timeManagementRating: 4,
    teamworkRating: 5,

    // 7. Preferred Role
    primaryRole: "Frontend Developer",
    secondaryRole: "UI/UX Designer",
    preferredDepartment: "Software Engineering",

    // 8. Work Preference
    workMode: "Remote",
    weeklyHours: "20-30 Hours / Week",
    preferredShift: "Flexible / Output Based",
    availableStartDate: "",

    // 9. Previous Experience
    previousOrg: "",
    pastProjectLinks: "",
    keyAchievements: "",

    // 10. Motivation & Vision
    whyJoinKafaah: "",
    contributionVision: "",
    twoYearGoal: "",

    // 11. Hardware & Internet
    pcSpecs: "",
    internetType: "Fiber Broadband",
    powerBackup: "Yes (IPS / Generator)",

    // 12. Social Links
    linkedin: "",
    facebook: "",
    github: "",
    website: "",
    telegram: "",

    // 13. Terms & Commitments
    agreedToTerms: false,
    truthDeclaration: false,

    // 14. Final Feedback & Referral
    referralSource: "Facebook Page / Group",
    additionalComments: ""
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>(["Frontend (React/Next.js)"]);
  const [skillProficiencies, setSkillProficiencies] = useState<Record<string, number>>({
    "Frontend (React/Next.js)": 4
  });
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // UI & Active Step States
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleNestedAddressChange = (type: 'presentAddress' | 'permanentAddress', field: string, value: string) => {
    setFormData(prev => {
      const updated = { ...prev[type], [field]: value };
      let newPermanent = prev.permanentAddress;
      if (type === 'presentAddress' && prev.sameAsPresent) {
        newPermanent = { ...updated };
      }
      return { ...prev, [type]: updated, permanentAddress: newPermanent };
    });
  };

  const handleSameAddressToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setFormData(prev => ({
      ...prev,
      sameAsPresent: checked,
      permanentAddress: checked ? { ...prev.presentAddress } : prev.permanentAddress
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage(isBn ? "ছবি সর্বোচ্চ ৫ মেগাবাইট হতে হবে" : "Image size must be under 5MB");
        return;
      }
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setErrorMessage("");
    }
  };

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(prev => prev.filter(s => s !== skill));
      const updatedProf = { ...skillProficiencies };
      delete updatedProf[skill];
      setSkillProficiencies(updatedProf);
    } else {
      setSelectedSkills(prev => [...prev, skill]);
      setSkillProficiencies(prev => ({ ...prev, [skill]: 3 }));
    }
  };

  const updateSkillProficiency = (skill: string, level: number) => {
    setSkillProficiencies(prev => ({ ...prev, [skill]: level }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!image) {
      setErrorMessage(isBn ? "অনুগ্রহ করে আপনার প্রোফাইল ছবি আপলোড করুন।" : "Please upload a profile picture.");
      return;
    }
    if (selectedSkills.length === 0) {
      setErrorMessage(isBn ? "কমপক্ষে একটি স্কিল নির্বাচন করুন।" : "Please select at least one skill.");
      return;
    }
    if (!formData.agreedToTerms || !formData.truthDeclaration) {
      setErrorMessage(isBn ? "আবেদন জমা দেওয়ার পূর্বে শর্তাবলী ও সত্যতা ঘোষণায় সম্মত হন।" : "Please agree to terms and truth declaration before submitting.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const data = new FormData();
    // Stringify non-file objects/arrays or send fields
    data.append("fullNameEn", formData.fullNameEn);
    data.append("fullNameBn", formData.fullNameBn);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("whatsapp", formData.whatsapp);
    data.append("emergencyContact", formData.emergencyContact);
    data.append("dob", formData.dob);
    data.append("nidOrBirthReg", formData.nidOrBirthReg);
    data.append("bloodGroup", formData.bloodGroup);

    data.append("presentAddress", JSON.stringify(formData.presentAddress));
    data.append("permanentAddress", JSON.stringify(formData.permanentAddress));

    data.append("currentEduStatus", formData.currentEduStatus);
    data.append("highestDegree", formData.highestDegree);
    data.append("institutionName", formData.institutionName);
    data.append("subjectDept", formData.subjectDept);
    data.append("passingYear", formData.passingYear);
    data.append("sscGpa", formData.sscGpa);
    data.append("hscGpa", formData.hscGpa);

    data.append("islamicKnowledgeLevel", formData.islamicKnowledgeLevel);
    data.append("quranRecitation", formData.quranRecitation);
    data.append("madrasaBackground", formData.madrasaBackground);
    data.append("madrasaDetails", formData.madrasaDetails);

    data.append("skills", selectedSkills.join(", "));
    data.append("skillProficiencies", JSON.stringify(skillProficiencies));
    data.append("portfolioLink", formData.portfolioLink);
    data.append("yearsOfExp", formData.yearsOfExp);

    data.append("softSkills", JSON.stringify({
      communication: formData.communicationRating,
      leadership: formData.leadershipRating,
      problemSolving: formData.problemSolvingRating,
      timeManagement: formData.timeManagementRating,
      teamwork: formData.teamworkRating
    }));

    data.append("primaryRole", formData.primaryRole);
    data.append("secondaryRole", formData.secondaryRole);
    data.append("preferredDepartment", formData.preferredDepartment);

    data.append("workMode", formData.workMode);
    data.append("weeklyHours", formData.weeklyHours);
    data.append("preferredShift", formData.preferredShift);
    data.append("availableStartDate", formData.availableStartDate);

    data.append("previousOrg", formData.previousOrg);
    data.append("pastProjectLinks", formData.pastProjectLinks);
    data.append("keyAchievements", formData.keyAchievements);

    data.append("whyJoinKafaah", formData.whyJoinKafaah);
    data.append("contributionVision", formData.contributionVision);
    data.append("twoYearGoal", formData.twoYearGoal);

    data.append("pcSpecs", formData.pcSpecs);
    data.append("internetType", formData.internetType);
    data.append("powerBackup", formData.powerBackup);

    data.append("linkedin", formData.linkedin);
    data.append("facebook", formData.facebook);
    data.append("github", formData.github);
    data.append("website", formData.website);
    data.append("telegram", formData.telegram);

    data.append("referralSource", formData.referralSource);
    data.append("additionalComments", formData.additionalComments);

    if (image) {
      data.append("image", image);
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${apiUrl}/api/join`, {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Failed to submit application");

      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error: any) {
      console.error("Submission error:", error);
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionsList = [
    { id: 1, title: isBn ? "ব্যক্তিগত তথ্য" : "Basic Info", icon: User },
    { id: 2, title: isBn ? "ঠিকানা" : "Address", icon: MapPin },
    { id: 3, title: isBn ? "শিক্ষাগত যোগ্যতা" : "Education", icon: GraduationCap },
    { id: 4, title: isBn ? "ইসলামিক জ্ঞান" : "Islamic Knowledge", icon: BookOpen },
    { id: 5, title: isBn ? "টেকনিক্যাল দক্ষতা" : "Tech Skills", icon: Code },
    { id: 6, title: isBn ? "সফট স্কিলস" : "Soft Skills", icon: Award },
    { id: 7, title: isBn ? "পছন্দের রোল" : "Preferred Role", icon: Briefcase },
    { id: 8, title: isBn ? "কাজের পছন্দ" : "Work Pref.", icon: Clock },
    { id: 9, title: isBn ? "পূর্ব অভিজ্ঞতা" : "Experience", icon: Building },
    { id: 10, title: isBn ? "উদ্দেশ্য ও ভিশন" : "Vision & Goals", icon: Heart },
    { id: 11, title: isBn ? "হার্ডওয়্যার ও নেট" : "Hardware & Net", icon: Laptop },
    { id: 12, title: isBn ? "সোশ্যাল প্রোফাইল" : "Social Links", icon: Share2 },
    { id: 13, title: isBn ? "প্রতিশ্রুতি" : "Commitment", icon: ShieldCheck },
    { id: 14, title: isBn ? "ফিডব্যাক" : "Feedback", icon: MessageSquare }
  ];

  return (
    <>
      <SEO 
        title={isBn ? "আবেদন ফরম | কাফআহ" : "Comprehensive Application | Kafa'ah"} 
        description="Join Team Kafa'ah - Official Join & Recruitment Form"
        url="/join"
        image="https://kafaahbd.com/join-cover.jpg"
        breadcrumbs={[{ name: isBn ? "আবেদন ফরম" : "Application Form", url: "/join" }]}
      />
      
      <div className="min-h-screen relative bg-[#f4f7f6] dark:bg-[#070c12] text-gray-800 dark:text-gray-100 transition-colors duration-500 font-sans pb-24">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-emerald-500/10 dark:bg-emerald-900/20 blur-[130px] rounded-full" />
          <div className="absolute top-[40%] -left-[10%] w-[45vw] h-[45vw] bg-teal-500/10 dark:bg-teal-900/20 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 pt-8 px-4 max-w-6xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <Breadcrumb items={[{ name: isBn ? "আবেদন ফরম" : "Join Application Form" }]} />
            <span className="text-xs font-semibold px-3 py-1 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-200 dark:border-emerald-800">
              {isBn ? "অফিসিয়াল রিক্রুটমেন্ট পোর্টাল" : "Official Recruitment Portal"}
            </span>
          </div>

          {/* Form Header */}
          <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white p-8 md:p-12 rounded-3xl shadow-xl mb-10 relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                <Sparkles size={14} /> {isBn ? "টিম কাফআহ রিক্রুটমেন্ট ২০২৬" : "Team Kafa'ah Recruitment 2026"}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
                {isBn ? "কাফআহ টিমে যোগ দেওয়ার বিস্তারিত আবেদন" : "Join Team Kafa'ah Application"}
              </h1>
              <p className="text-emerald-100/90 text-sm md:text-base max-w-3xl leading-relaxed">
                {isBn 
                  ? "আপনার পেশাগত ও সুন্নাহমুখী দক্ষতার মাধ্যমে গড়ে তুলুন শক্তিশালী ইসলামিক প্রযুক্তি প্ল্যাটফর্ম। সকল ১৪টি সেকশন মনোযোগ দিয়ে পূরণ করুন।" 
                  : "Empower Islamic Technology with your tech & creative skills. Please carefully fill out all 14 structured sections below."}
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-[#101720] border border-emerald-500/20 rounded-3xl p-10 md:p-16 text-center max-w-2xl mx-auto shadow-2xl space-y-6"
              >
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={44} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {isBn ? "আবেদন সফলভাবে জমা হয়েছে!" : "Application Submitted Successfully!"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {isBn 
                    ? "আপনার আবেদনপত্র টিমে গৃহীত হয়েছে। আপনার ইমেইলে একটি নিশ্চিতকরণ বার্তা পাঠানো হয়েছে। শর্টলিস্ট করা হলে আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।" 
                    : "Thank you for applying to Team Kafa'ah! A confirmation email has been dispatched to your provided address. Our recruitment panel will review your application."}
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => { setIsSuccess(false); window.location.reload(); }}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/30"
                  >
                    {isBn ? "নতুন আবেদন করুন" : "Submit Another Application"}
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Navigation Sidebar / Stepper */}
                <div className="lg:col-span-3 space-y-2 sticky top-6 bg-white dark:bg-[#101720] p-4 rounded-2xl border border-gray-200/80 dark:border-white/10 shadow-sm max-h-[85vh] overflow-y-auto hidden lg:block">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-1 border-b border-gray-100 dark:border-white/5 mb-2">
                    {isBn ? "আবেদন সেকশনসমূহ (১৪টি)" : "Form Sections (14)"}
                  </div>
                  {sectionsList.map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeTab === sec.id;
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => setActiveTab(sec.id)}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                          isActive 
                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20" 
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                        }`}
                      >
                        <Icon size={16} className={isActive ? "text-white" : "text-emerald-600 dark:text-emerald-400"} />
                        <span className="truncate">{sec.id}. {sec.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="lg:col-span-9 space-y-8">
                  {errorMessage && (
                    <div className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 rounded-2xl text-red-600 dark:text-red-300 text-sm font-semibold flex items-center gap-3 shadow-sm">
                      <Info size={18} className="shrink-0 text-red-500" />
                      {errorMessage}
                    </div>
                  )}

                  {/* SECTION 1: BASIC INFO */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 dark:text-emerald-400">
                        <User size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">1. {isBn ? "ব্যক্তিগত মৌলিক তথ্য" : "Basic Information"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "আপনার ব্যক্তিগত পরিচয় সংক্রান্ত তথ্য প্রদান করুন" : "Provide your identity & contact details"}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Full Name (English) *</label>
                        <input 
                          type="text" 
                          name="fullNameEn" 
                          value={formData.fullNameEn} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="e.g. Abdullah Al Mamun"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">পূর্ণ নাম (বাংলায়) *</label>
                        <input 
                          type="text" 
                          name="fullNameBn" 
                          value={formData.fullNameBn} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="যেমন: আবদুল্লাহ আল মামুন"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Email Address *</label>
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="abdullah@example.com"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Phone Number *</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="01700000000"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">WhatsApp Number *</label>
                        <input 
                          type="tel" 
                          name="whatsapp" 
                          value={formData.whatsapp} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="01700000000"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Emergency Contact (Name & Phone) *</label>
                        <input 
                          type="text" 
                          name="emergencyContact" 
                          value={formData.emergencyContact} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="Father / Guardian: 01800000000"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Date of Birth *</label>
                        <input 
                          type="date" 
                          name="dob" 
                          value={formData.dob} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">NID / Birth Registration No. *</label>
                        <input 
                          type="text" 
                          name="nidOrBirthReg" 
                          value={formData.nidOrBirthReg} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="199XXXXXXXXXXXXXX"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Blood Group *</label>
                        <select 
                          name="bloodGroup" 
                          value={formData.bloodGroup} 
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
                        </select>
                      </div>

                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Profile Picture (Passport Size / Formal Image) *</label>
                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-[#161f2c] border-2 border-dashed border-gray-300 dark:border-white/10 rounded-2xl">
                          {imagePreview ? (
                            <img src={imagePreview} alt="Preview" className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500" />
                          ) : (
                            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 rounded-full flex items-center justify-center">
                              <ImageIcon size={28} />
                            </div>
                          )}
                          <div className="flex-1">
                            <input 
                              type="file" 
                              accept="image/*" 
                              onChange={handleImageChange}
                              className="text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-600 file:text-white hover:file:bg-emerald-500 cursor-pointer"
                            />
                            <p className="text-[11px] text-gray-400 mt-1">PNG or JPG, Maximum size 5MB.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 2: ADDRESS DETAILS */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400">
                        <MapPin size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">2. {isBn ? "ঠিকানা সংক্রান্ত তথ্য" : "Address Details"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "বর্তমান ও স্থায়ী ঠিকানা প্রদান করুন" : "Present & Permanent address information"}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{isBn ? "বর্তমান ঠিকানা (Present Address)" : "Present Address"}</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <input 
                          type="text" 
                          placeholder="House / Village / Road"
                          value={formData.presentAddress.village}
                          onChange={(e) => handleNestedAddressChange('presentAddress', 'village', e.target.value)}
                          required
                          className="bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                        <input 
                          type="text" 
                          placeholder="Union / Ward No"
                          value={formData.presentAddress.union}
                          onChange={(e) => handleNestedAddressChange('presentAddress', 'union', e.target.value)}
                          required
                          className="bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                        <input 
                          type="text" 
                          placeholder="Thana / Upazila"
                          value={formData.presentAddress.thana}
                          onChange={(e) => handleNestedAddressChange('presentAddress', 'thana', e.target.value)}
                          required
                          className="bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                        <input 
                          type="text" 
                          placeholder="District"
                          value={formData.presentAddress.district}
                          onChange={(e) => handleNestedAddressChange('presentAddress', 'district', e.target.value)}
                          required
                          className="bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                        <input 
                          type="text" 
                          placeholder="Division"
                          value={formData.presentAddress.division}
                          onChange={(e) => handleNestedAddressChange('presentAddress', 'division', e.target.value)}
                          required
                          className="bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                        <input 
                          type="text" 
                          placeholder="Post Code"
                          value={formData.presentAddress.postCode}
                          onChange={(e) => handleNestedAddressChange('presentAddress', 'postCode', e.target.value)}
                          required
                          className="bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="pt-2 flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          id="sameAsPresent" 
                          checked={formData.sameAsPresent} 
                          onChange={handleSameAddressToggle} 
                          className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                        />
                        <label htmlFor="sameAsPresent" className="text-xs font-bold text-gray-700 dark:text-gray-300 cursor-pointer">
                          {isBn ? "স্থায়ী ঠিকানা বর্তমান ঠিকানার অনুরূপ" : "Permanent address same as present address"}
                        </label>
                      </div>

                      {!formData.sameAsPresent && (
                        <div className="space-y-4 pt-2">
                          <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{isBn ? "স্থায়ী ঠিকানা (Permanent Address)" : "Permanent Address"}</h3>
                          <div className="grid md:grid-cols-3 gap-4">
                            <input 
                              type="text" 
                              placeholder="House / Village / Road"
                              value={formData.permanentAddress.village}
                              onChange={(e) => handleNestedAddressChange('permanentAddress', 'village', e.target.value)}
                              required
                              className="bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                            />
                            <input 
                              type="text" 
                              placeholder="Union / Ward No"
                              value={formData.permanentAddress.union}
                              onChange={(e) => handleNestedAddressChange('permanentAddress', 'union', e.target.value)}
                              required
                              className="bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                            />
                            <input 
                              type="text" 
                              placeholder="Thana / Upazila"
                              value={formData.permanentAddress.thana}
                              onChange={(e) => handleNestedAddressChange('permanentAddress', 'thana', e.target.value)}
                              required
                              className="bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                            />
                            <input 
                              type="text" 
                              placeholder="District"
                              value={formData.permanentAddress.district}
                              onChange={(e) => handleNestedAddressChange('permanentAddress', 'district', e.target.value)}
                              required
                              className="bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                            />
                            <input 
                              type="text" 
                              placeholder="Division"
                              value={formData.permanentAddress.division}
                              onChange={(e) => handleNestedAddressChange('permanentAddress', 'division', e.target.value)}
                              required
                              className="bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                            />
                            <input 
                              type="text" 
                              placeholder="Post Code"
                              value={formData.permanentAddress.postCode}
                              onChange={(e) => handleNestedAddressChange('permanentAddress', 'postCode', e.target.value)}
                              required
                              className="bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </section>

                  {/* SECTION 3: EDUCATIONAL BACKGROUND */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400">
                        <GraduationCap size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">3. {isBn ? "শিক্ষাগত যোগ্যতা" : "Educational Background"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "আপনার সর্বশেষ ও বর্তমান শিক্ষাগত বিষয়াবলী" : "Academic qualification & achievements"}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Current Status *</label>
                        <select 
                          name="currentEduStatus" 
                          value={formData.currentEduStatus} 
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          <option value="Student">Student</option>
                          <option value="Graduated">Graduated / Job Holder</option>
                          <option value="Job Seeker">Job Seeker</option>
                          <option value="Freelancer">Freelancer</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Highest Degree / Qualification *</label>
                        <input 
                          type="text" 
                          name="highestDegree" 
                          value={formData.highestDegree} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="e.g. B.Sc in CSE / Diploma / Alim"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Institution Name *</label>
                        <input 
                          type="text" 
                          name="institutionName" 
                          value={formData.institutionName} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="University / College / Madrasa Name"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Department / Subject *</label>
                        <input 
                          type="text" 
                          name="subjectDept" 
                          value={formData.subjectDept} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="e.g. Computer Science / Economics / Hadith"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Passing Year / Expected Graduation *</label>
                        <input 
                          type="text" 
                          name="passingYear" 
                          value={formData.passingYear} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="e.g. 2025"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">SSC / Dakhil GPA / Board *</label>
                        <input 
                          type="text" 
                          name="sscGpa" 
                          value={formData.sscGpa} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="e.g. 5.00 (Dhaka Board)"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">HSC / Alim GPA / Board *</label>
                        <input 
                          type="text" 
                          name="hscGpa" 
                          value={formData.hscGpa} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="e.g. 5.00 (Madrasa Board / Dhaka Board)"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>
                    </div>
                  </section>

                  {/* SECTION 4: ISLAMIC KNOWLEDGE & ETHICS */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-amber-100 dark:bg-amber-900/30 rounded-2xl text-amber-600 dark:text-amber-400">
                        <BookOpen size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">4. {isBn ? "ইসলামিক জ্ঞান ও মূল্যবোধ" : "Islamic Knowledge & Values"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "দ্বীনি বুঝ ও আখলাক সংক্রান্ত তথ্য" : "Islamic understanding & alignment"}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Basic Islamic Knowledge Level *</label>
                        <select 
                          name="islamicKnowledgeLevel" 
                          value={formData.islamicKnowledgeLevel} 
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          <option value="Basic">Basic (প্রাথমিক ধারণা)</option>
                          <option value="Intermediate">Intermediate (মাঝারি জ্ঞান)</option>
                          <option value="Advanced">Advanced / Student of Knowledge (উন্নত ধারণা)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Quran Recitation Ability *</label>
                        <select 
                          name="quranRecitation" 
                          value={formData.quranRecitation} 
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          <option value="Fluent with Tajweed">Fluent with Tajweed (সহীহ তিলাওয়াত)</option>
                          <option value="Reading with basic rules">Reading with basic rules (সাধারণ পড়া)</option>
                          <option value="Currently Learning">Currently Learning (শিখছি)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Madrasa / Islamic Education Background *</label>
                        <select 
                          name="madrasaBackground" 
                          value={formData.madrasaBackground} 
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          <option value="No">No (সাধারণ শিক্ষায় শিক্ষিত)</option>
                          <option value="Yes - Qawmi">Yes - Qawmi Madrasa</option>
                          <option value="Yes - Alia">Yes - Alia Madrasa</option>
                          <option value="Yes - Short Course / Diploma">Yes - Islamic Course / Diploma</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Madrasa / Course Details (If any)</label>
                        <input 
                          type="text" 
                          name="madrasaDetails" 
                          value={formData.madrasaDetails} 
                          onChange={handleInputChange} 
                          placeholder="e.g. Dawratul Hadith / Diploma in Shariah"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>
                    </div>
                  </section>

                  {/* SECTION 5: TECHNICAL SKILLS & PROFICIENCY */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl text-cyan-600 dark:text-cyan-400">
                        <Code size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">5. {isBn ? "টেকনিক্যাল স্কিলস ও প্রফিসিয়েন্সি" : "Technical Skills & Proficiency"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "আপনার প্রাসঙ্গিক স্কিল নির্বাচন করুন এবং রেটিং দিন" : "Select skills & set proficiency ratings (1-5)"}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Select Your Technical & Creative Skills *</label>
                      <div className="flex flex-wrap gap-2">
                        {skillsList.map((skill) => {
                          const isSelected = selectedSkills.includes(skill);
                          return (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => toggleSkill(skill)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                                isSelected 
                                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105" 
                                  : "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                              }`}
                            >
                              {isSelected && <Check size={14} />}
                              {skill}
                            </button>
                          );
                        })}
                      </div>

                      {/* Selected Skills Rating */}
                      {selectedSkills.length > 0 && (
                        <div className="pt-4 border-t border-gray-100 dark:border-white/5 space-y-3">
                          <label className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                            {isBn ? "স্কিল প্রফিসিয়েন্সি রেটিং (১ - ৫ স্টার):" : "Set Skill Proficiency Level (1 to 5 Stars):"}
                          </label>
                          <div className="grid md:grid-cols-2 gap-3">
                            {selectedSkills.map(skill => (
                              <div key={skill} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#161f2c] rounded-xl border border-gray-200/60 dark:border-white/5">
                                <span className="text-xs font-bold truncate max-w-[180px]">{skill}</span>
                                <div className="flex items-center gap-1">
                                  {[1, 2, 3, 4, 5].map(star => (
                                    <button
                                      key={star}
                                      type="button"
                                      onClick={() => updateSkillProficiency(skill, star)}
                                      className="p-1 hover:scale-125 transition-transform"
                                    >
                                      <Star 
                                        size={16} 
                                        className={star <= (skillProficiencies[skill] || 3) ? "fill-amber-400 text-amber-400" : "text-gray-300 dark:text-gray-600"} 
                                      />
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-5 pt-2">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Portfolio / GitHub / Behance / Drive Link *</label>
                          <input 
                            type="url" 
                            name="portfolioLink" 
                            value={formData.portfolioLink} 
                            onChange={handleInputChange} 
                            required 
                            placeholder="https://github.com/username or Behance"
                            className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Total Years of Experience *</label>
                          <input 
                            type="text" 
                            name="yearsOfExp" 
                            value={formData.yearsOfExp} 
                            onChange={handleInputChange} 
                            required 
                            placeholder="e.g. 2 Years / Learner"
                            className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 6: SOFT SKILLS */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-orange-100 dark:bg-orange-900/30 rounded-2xl text-orange-600 dark:text-orange-400">
                        <Award size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">6. {isBn ? "সফট স্কিলস আত্মমূল্যায়ন" : "Non-Technical / Soft Skills Rating"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "আপনার ব্যক্তিগত ও সামাজিক দক্ষতার রেটিং দিন (১-৫)" : "Rate your soft skills from 1 to 5"}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { label: "Communication (যোগাযোগ দক্ষতা)", field: "communicationRating" },
                        { label: "Leadership (নেতৃত্বদান)", field: "leadershipRating" },
                        { label: "Problem Solving (সমস্যা সমাধান)", field: "problemSolvingRating" },
                        { label: "Time Management (সময় সচেতনতা)", field: "timeManagementRating" },
                        { label: "Teamwork & Collaboration (টিমওয়ার্ক)", field: "teamworkRating" },
                      ].map((soft) => (
                        <div key={soft.field} className="p-4 bg-gray-50 dark:bg-[#161f2c] rounded-2xl border border-gray-200/50 dark:border-white/5 space-y-2">
                          <label className="text-xs font-bold text-gray-800 dark:text-gray-200">{soft.label}</label>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                              {(formData as any)[soft.field]} / 5
                            </span>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map(val => (
                                <button
                                  key={val}
                                  type="button"
                                  onClick={() => setFormData(prev => ({ ...prev, [soft.field]: val }))}
                                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                                    (formData as any)[soft.field] === val 
                                      ? "bg-emerald-600 text-white shadow-md" 
                                      : "bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-300"
                                  }`}
                                >
                                  {val}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* SECTION 7: PREFERRED ROLE & DEPARTMENT */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl text-indigo-600 dark:text-indigo-400">
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">7. {isBn ? "পছন্দের পদ ও ডিপার্টমেন্ট" : "Preferred Role & Department"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "যে পদে কাজ করতে আপনি বেশি আগ্রহী" : "Roles and department choices"}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Primary Role Applied For *</label>
                        <input 
                          type="text" 
                          name="primaryRole" 
                          value={formData.primaryRole} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="e.g. React Developer"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Secondary Role (Optional)</label>
                        <input 
                          type="text" 
                          name="secondaryRole" 
                          value={formData.secondaryRole} 
                          onChange={handleInputChange} 
                          placeholder="e.g. UI Designer"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Preferred Department *</label>
                        <select 
                          name="preferredDepartment" 
                          value={formData.preferredDepartment} 
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          <option value="Software Engineering">Software Engineering & Tech</option>
                          <option value="Creative & Design">Creative, UI/UX & Graphics</option>
                          <option value="Media & Content">Media, Video & Writing</option>
                          <option value="Operations & Management">Operations & Project Mgmt</option>
                          <option value="Islamic Research">Islamic Research & QA</option>
                        </select>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 8: WORK PREFERENCE & AVAILABILITY */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-rose-100 dark:bg-rose-900/30 rounded-2xl text-rose-600 dark:text-rose-400">
                        <Clock size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">8. {isBn ? "কাজের ধরণ ও সময়িক সহজলভ্যতা" : "Work Preference & Availability"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "আপনার কাজের সময় ও শিফট নির্বাচন" : "Availability and work mode preferences"}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Work Mode *</label>
                        <select 
                          name="workMode" 
                          value={formData.workMode} 
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          {workModes.map(mode => <option key={mode} value={mode}>{mode}</option>)}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Weekly Available Hours *</label>
                        <select 
                          name="weeklyHours" 
                          value={formData.weeklyHours} 
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          {availabilityHours.map(hrs => <option key={hrs} value={hrs}>{hrs}</option>)}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Preferred Shift / Time Slot *</label>
                        <select 
                          name="preferredShift" 
                          value={formData.preferredShift} 
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          {shifts.map(shift => <option key={shift} value={shift}>{shift}</option>)}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Earliest Joining Date *</label>
                        <input 
                          type="date" 
                          name="availableStartDate" 
                          value={formData.availableStartDate} 
                          onChange={handleInputChange} 
                          required 
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>
                    </div>
                  </section>

                  {/* SECTION 9: PREVIOUS EXPERIENCE */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-teal-100 dark:bg-teal-900/30 rounded-2xl text-teal-600 dark:text-teal-400">
                        <Building size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">9. {isBn ? "পূর্ববর্তী অভিজ্ঞতা ও প্রজেক্ট" : "Previous Experience & Projects"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "পূর্বে কাজ করা প্রতিষ্ঠান ও কাজের বিবরণ" : "Past organization and key achievements"}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Previous Organization / Company (Type "None" if first time) *</label>
                        <input 
                          type="text" 
                          name="previousOrg" 
                          value={formData.previousOrg} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="Company name or Freelancing / None"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Past Project Links / Descriptions *</label>
                        <textarea 
                          name="pastProjectLinks" 
                          value={formData.pastProjectLinks} 
                          onChange={handleInputChange} 
                          required 
                          rows={3}
                          placeholder="Provide links or short description of 2-3 live projects..."
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Key Achievements / Contributions</label>
                        <textarea 
                          name="keyAchievements" 
                          value={formData.keyAchievements} 
                          onChange={handleInputChange} 
                          rows={2}
                          placeholder="e.g. Built an e-commerce backend, managed 50k Facebook group..."
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                        />
                      </div>
                    </div>
                  </section>

                  {/* SECTION 10: MOTIVATION & VISION */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-pink-100 dark:bg-pink-900/30 rounded-2xl text-pink-600 dark:text-pink-400">
                        <Heart size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">10. {isBn ? "উদ্দেশ্য ও ভিশন" : "Motivation & Vision"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "কাফআহে যুক্ত হওয়ার লক্ষ্য ও প্রেরণা" : "Why you want to join and your future roadmap"}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Why do you want to join Team Kafa'ah? *</label>
                        <textarea 
                          name="whyJoinKafaah" 
                          value={formData.whyJoinKafaah} 
                          onChange={handleInputChange} 
                          required 
                          rows={3}
                          placeholder="Share your inspiration & enthusiasm..."
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">How will you contribute to Kafa'ah's Islamic Tech Vision? *</label>
                        <textarea 
                          name="contributionVision" 
                          value={formData.contributionVision} 
                          onChange={handleInputChange} 
                          required 
                          rows={3}
                          placeholder="Explain how your technical/creative skills will advance Islamic tech..."
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Where do you see yourself in 2 years with Kafa'ah?</label>
                        <input 
                          type="text" 
                          name="twoYearGoal" 
                          value={formData.twoYearGoal} 
                          onChange={handleInputChange} 
                          placeholder="e.g. Lead Frontend Developer / Product Manager"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>
                    </div>
                  </section>

                  {/* SECTION 11: HARDWARE & INTERNET */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-[#f59e0b]/10 rounded-2xl text-amber-500">
                        <Laptop size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">11. {isBn ? "হার্ডওয়্যার ও ইন্টারনেট সেটআপ" : "Hardware & Internet Infrastructure"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "আপনার ব্যবহৃত ডিভাইস ও কানেক্টিভিটি" : "Your workstation specs and connectivity setup"}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">PC / Laptop Specs *</label>
                        <input 
                          type="text" 
                          name="pcSpecs" 
                          value={formData.pcSpecs} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="e.g. Core i5 12th Gen, 16GB RAM, SSD"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Internet Type *</label>
                        <select 
                          name="internetType" 
                          value={formData.internetType} 
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          <option value="Fiber Broadband">Fiber Broadband (ব্রডব্যান্ড)</option>
                          <option value="4G / 5G Mobile Data">4G / 5G Mobile Data</option>
                          <option value="Both Fiber & Mobile Backup">Both Fiber & Mobile Backup</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Power Backup (IPS / Generator) *</label>
                        <select 
                          name="powerBackup" 
                          value={formData.powerBackup} 
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          <option value="Yes (IPS / Generator)">Yes (IPS / Generator available)</option>
                          <option value="No Power Backup">No Power Backup</option>
                          <option value="Laptop Battery Only">Laptop Battery Only (2-3 hrs)</option>
                        </select>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 12: SOCIAL & PROFESSIONAL LINKS */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400">
                        <Share2 size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">12. {isBn ? "সোশ্যাল ও প্রোফেশনাল লিংক" : "Social & Professional Links"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "আপনার অনলাইন প্রোফাইল লিংকসমূহ" : "LinkedIn, Facebook, GitHub URLs"}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">LinkedIn Profile *</label>
                        <input 
                          type="url" 
                          name="linkedin" 
                          value={formData.linkedin} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="https://linkedin.com/in/username"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Facebook Profile *</label>
                        <input 
                          type="url" 
                          name="facebook" 
                          value={formData.facebook} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="https://facebook.com/username"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">GitHub Profile (If Tech)</label>
                        <input 
                          type="url" 
                          name="github" 
                          value={formData.github} 
                          onChange={handleInputChange} 
                          placeholder="https://github.com/username"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Personal Website / Blog (Optional)</label>
                        <input 
                          type="url" 
                          name="website" 
                          value={formData.website} 
                          onChange={handleInputChange} 
                          placeholder="https://yourwebsite.com"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Telegram Username *</label>
                        <input 
                          type="text" 
                          name="telegram" 
                          value={formData.telegram} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="@username"
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>
                    </div>
                  </section>

                  {/* SECTION 13: TERMS & COMMITMENTS */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-emerald-500/30 dark:border-emerald-500/20 shadow-md space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 dark:text-emerald-400">
                        <ShieldCheck size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">13. {isBn ? "শর্তাবলী ও অঙ্গীকারনামা" : "Terms, Ethics & Truthfulness Declaration"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "অফিসিয়াল পলিসি ও সততা ঘোষণা" : "Official code of conduct & honesty pledge"}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 rounded-2xl text-xs text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                        <p className="font-bold text-emerald-800 dark:text-emerald-300">
                          {isBn ? "কাফআহ কোড অফ কন্ডাক্ট ও নীতিমালা:" : "Team Kafa'ah Code of Conduct:"}
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>{isBn ? "ইসলামিক শরীয়াহ নীতি ও পেশাদার শালীনতা বজায় রাখতে হবে।" : "Adhere to Islamic Shariah values & professional ethics at all times."}</li>
                          <li>{isBn ? "প্রদানকৃত সকল তথ্য সম্পূর্ণ সত্য হতে হবে।" : "All provided information must be completely true and accurate."}</li>
                          <li>{isBn ? "প্রতিষ্ঠানের গোপনীয়তা রক্ষা করতে আপনি বাধ্য থাকবেন।" : "Maintain strict confidentiality regarding internal projects & client details."}</li>
                        </ul>
                      </div>

                      <div className="flex items-start gap-3 pt-2">
                        <input 
                          type="checkbox" 
                          id="agreedToTerms" 
                          name="agreedToTerms" 
                          checked={formData.agreedToTerms} 
                          onChange={handleInputChange} 
                          required 
                          className="mt-1 w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                        />
                        <label htmlFor="agreedToTerms" className="text-xs font-bold text-gray-800 dark:text-gray-200 cursor-pointer">
                          {isBn 
                            ? "আমি কাফআহের সকল নিয়মকানুন, গোপনীয়তা চুক্তি এবং ইসলামিক আখলাকের নীতিমালা মেনে চলতে সম্মত।" 
                            : "I agree to Team Kafa'ah's Code of Conduct, Confidentiality guidelines, and Ethical principles."}
                        </label>
                      </div>

                      <div className="flex items-start gap-3">
                        <input 
                          type="checkbox" 
                          id="truthDeclaration" 
                          name="truthDeclaration" 
                          checked={formData.truthDeclaration} 
                          onChange={handleInputChange} 
                          required 
                          className="mt-1 w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                        />
                        <label htmlFor="truthDeclaration" className="text-xs font-bold text-gray-800 dark:text-gray-200 cursor-pointer">
                          {isBn 
                            ? "আমি সজ্ঞানে ঘোষণা করছি যে উপরে প্রদত্ত সকল তথ্য সম্পূর্ণ সত্য ও সঠিক।" 
                            : "I solemnly declare that all information supplied above is true and correct to the best of my knowledge."}
                        </label>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 14: REFERRAL & FEEDBACK */}
                  <section className="bg-white dark:bg-[#101720] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/10 pb-4">
                      <div className="p-2.5 bg-violet-100 dark:bg-violet-900/30 rounded-2xl text-violet-600 dark:text-violet-400">
                        <MessageSquare size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">14. {isBn ? "রেফারেল ও মন্তব্য" : "Referral & Additional Comments"}</h2>
                        <p className="text-xs text-gray-500">{isBn ? "কীভাবে কাফআহ সম্পর্কে জানতে পারলেন" : "How you heard about us & final questions"}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">How did you hear about Kafa'ah? *</label>
                        <select 
                          name="referralSource" 
                          value={formData.referralSource} 
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                        >
                          {referralSources.map(ref => <option key={ref} value={ref}>{ref}</option>)}
                        </select>
                      </div>

                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Additional Comments / Questions (Optional)</label>
                        <textarea 
                          name="additionalComments" 
                          value={formData.additionalComments} 
                          onChange={handleInputChange} 
                          rows={3}
                          placeholder="Any questions for the team or extra note..."
                          className="w-full bg-gray-50 dark:bg-[#161f2c] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={24} className="animate-spin" />
                          <span>{isBn ? "আবেদন প্রসেস করা হচ্ছে..." : "Submitting Application..."}</span>
                        </>
                      ) : (
                        <>
                          <Send size={24} />
                          <span>{isBn ? "সম্পূর্ণ আবেদনটি জমা দিন" : "Submit Complete Application"}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default JoinForm;
