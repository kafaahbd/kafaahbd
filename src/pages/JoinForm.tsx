import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
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
  Clock,
  Share2,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  Check,
  Star,
  Building,
  Heart,
  FileUp,
  FileText
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

const JoinForm: React.FC = () => {
  const { lang } = useLanguage();
  const isBn = lang === "bn";

  // Form States
  const [formData, setFormData] = useState({
    // 1. Basic Info
    fullNameEn: "",
    email: "",
    phone: "",
    gender: "Male",
    emergencyContact: "",
    dob: "",
    bloodGroup: "",
    
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
    isNotMuslim: false,
    islamicKnowledgeLevel: "Intermediate",
    quranRecitation: "Reading with basic rules",
    madrasaBackground: "No",
    madrasaDetails: "",

    // 5. Technical Skills
    portfolioLink: "",
    yearsOfExp: "",

    // 6. Preferred Role
    primaryRole: "Frontend Developer",
    secondaryRole: "UI/UX Designer",
    preferredDepartment: "Software Engineering",

    // 7. Work Preference
    workMode: "Remote",
    weeklyHours: "20-30 Hours / Week",
    preferredShift: "Flexible / Output Based",
    availableStartDate: "",

    // 8. Previous Experience
    previousOrg: "",
    pastProjectLinks: "",
    keyAchievements: "",

    // 9. Motivation & Vision
    whyJoinKafaah: "",
    contributionVision: "",
    twoYearGoal: "",

    // 10. Social Links
    linkedin: "",
    facebook: "",
    github: "",
    website: "",
    telegram: "",

    // 11. Terms & Commitments
    agreedToTerms: false,
    truthDeclaration: false,

    // 12. Final Feedback & Referral
    referralSource: "Facebook Page / Group",
    additionalComments: ""
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>(["Frontend (React/Next.js)"]);
  const [skillProficiencies, setSkillProficiencies] = useState<Record<string, number>>({
    "Frontend (React/Next.js)": 4
  });

  // Files
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);

  // UI States
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

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage(isBn ? "সিভি ফাইলের আকার সর্বোচ্চ ১০ মেগাবাইট হতে পারবে।" : "CV file size must be under 10MB");
        return;
      }
      setCvFile(file);
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
    data.append("fullNameEn", formData.fullNameEn);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("gender", formData.gender);
    data.append("emergencyContact", formData.emergencyContact);
    data.append("dob", formData.dob);
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

    data.append("isNotMuslim", formData.isNotMuslim ? "true" : "false");
    if (!formData.isNotMuslim) {
      data.append("islamicKnowledgeLevel", formData.islamicKnowledgeLevel);
      data.append("quranRecitation", formData.quranRecitation);
      data.append("madrasaBackground", formData.madrasaBackground);
      data.append("madrasaDetails", formData.madrasaDetails);
    } else {
      data.append("islamicKnowledgeLevel", "Non-Muslim Applicant");
    }

    data.append("skills", selectedSkills.join(", "));
    data.append("skillProficiencies", JSON.stringify(skillProficiencies));
    data.append("portfolioLink", formData.portfolioLink);
    data.append("yearsOfExp", formData.yearsOfExp);

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
    if (cvFile) {
      data.append("cv", cvFile);
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

  return (
    <>
      <SEO 
        title={isBn ? "আবেদন ফরম | কাফআহ" : "Application Form | Kafa'ah"} 
        description="Join Team Kafa'ah - Official Join & Recruitment Form"
        url="/join"
        image="https://kafaahbd.com/join-cover.jpg"
        breadcrumbs={[{ name: isBn ? "আবেদন ফরম" : "Application Form", url: "/join" }]}
      />
      
      <div className="min-h-screen relative bg-[#f8fafc] dark:bg-[#030712] text-gray-800 dark:text-gray-100 transition-colors duration-700 font-sans pb-32 selection:bg-emerald-500/30">
  {/* Premium Ambient Background Gradients */}
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-emerald-400/10 dark:bg-emerald-900/20 blur-[160px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
    <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-teal-400/10 dark:bg-teal-900/20 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
    <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-indigo-400/5 dark:bg-indigo-900/10 blur-[120px] rounded-full" />
  </div>

  <div className="relative z-10 pt-12 px-4 max-w-[900px] mx-auto">
    {/* Breadcrumb & Tag */}
    <div className="mb-8 flex flex-wrap justify-between items-center gap-4">
      <Breadcrumb items={[{ name: isBn ? "আবেদন ফরম" : "Join Application Form" }]} />
      <div className="flex items-center gap-2 px-4 py-1.5 bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-full border border-gray-200 dark:border-white/10 shadow-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-bold text-gray-700 dark:text-gray-300 tracking-wide uppercase">
          {isBn ? "অফিসিয়াল পোর্টাল" : "Official Portal"}
        </span>
      </div>
    </div>

    {/* Hero Header */}
    <div className="relative rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl shadow-emerald-900/5 border border-white/60 dark:border-white/10 bg-white/40 dark:bg-[#0b121c]/60 backdrop-blur-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 via-teal-700/90 to-emerald-900/90 dark:from-emerald-900/80 dark:via-teal-950/80 dark:to-gray-900/90" />
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="relative z-10 p-10 md:p-14 text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md text-emerald-100 text-xs font-bold uppercase tracking-widest mb-6 border border-white/20 shadow-inner">
            <Sparkles size={14} className="text-emerald-300" /> 
            {isBn ? "টিম কাফআহ রিক্রুটমেন্ট ২০২৬" : "Team Kafa'ah Recruitment 2026"}
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-5 leading-tight drop-shadow-lg">
            {isBn ? "কাফআহ টিমে যোগ দেওয়ার আবেদন" : "Join Team Kafa'ah Application"}
          </h1>
          <p className="text-emerald-50/90 text-sm md:text-lg font-medium max-w-xl leading-relaxed text-balance">
            {isBn 
              ? "আপনার পেশাগত ও সুন্নাহমুখী দক্ষতার মাধ্যমে গড়ে তুলুন শক্তিশালী ইসলামিক প্রযুক্তি প্ল্যাটফর্ম। নিচের ফরমটি সঠিক তথ্য দিয়ে পূরণ করুন।" 
              : "Empower Islamic Technology with your technical & creative skills. Please carefully fill out the application below."}
          </p>
        </div>
      </div>
    </div>

    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white/70 dark:bg-[#0b121c]/80 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[2.5rem] p-12 md:p-20 text-center max-w-2xl mx-auto shadow-2xl shadow-emerald-500/10"
        >
          <div className="relative w-28 h-28 mx-auto mb-8">
            <div className="absolute inset-0 bg-emerald-400/20 dark:bg-emerald-500/20 rounded-full animate-ping" />
            <div className="relative w-full h-full bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <CheckCircle2 size={56} className="text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            {isBn ? "আবেদন সফলভাবে জমা হয়েছে!" : "Application Submitted Successfully!"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 text-balance">
            {isBn 
              ? "আপনার আবেদনপত্র টিমে গৃহীত হয়েছে। আপনার ইমেইলে একটি নিশ্চিতকরণ বার্তা পাঠানো হয়েছে। শর্টলিস্ট করা হলে আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।" 
              : "Thank you for applying to Team Kafa'ah! A confirmation email has been dispatched to your provided address. Our recruitment panel will review your application."}
          </p>
          <button 
            onClick={() => { setIsSuccess(false); window.location.reload(); }}
            className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-2xl font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
          >
            {isBn ? "নতুন আবেদন করুন" : "Submit Another Application"}
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-10">
          {errorMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 bg-red-50/80 dark:bg-red-900/20 backdrop-blur-md border border-red-200 dark:border-red-800/50 rounded-2xl text-red-600 dark:text-red-400 text-sm font-bold flex items-center gap-4 shadow-lg shadow-red-500/5"
            >
              <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-full">
                <Info size={20} className="text-red-600 dark:text-red-400" />
              </div>
              {errorMessage}
            </motion.div>
          )}

          {/* SECTION 1: BASIC INFO */}
          <section className="bg-white/70 dark:bg-[#0b121c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/60 dark:border-white/5 shadow-xl shadow-gray-200/20 dark:shadow-black/40 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-gradient-to-br from-emerald-100 to-teal-50 dark:from-emerald-900/40 dark:to-teal-900/20 rounded-2xl text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-100 dark:border-white/5">
                <User size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {isBn ? "ব্যক্তিগত মৌলিক তথ্য" : "Basic Information"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                  {isBn ? "আপনার ব্যক্তিগত পরিচয় সংক্রান্ত তথ্য প্রদান করুন" : "Provide your identity & contact details"}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
              {/* Full Name */}
              <div className="md:col-span-2 relative">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "পূর্ণ নাম *" : "Full Name *"}
                </label>
                <input 
                  type="text" 
                  name="fullNameEn" 
                  value={formData.fullNameEn} 
                  onChange={handleInputChange} 
                  required 
                  placeholder={isBn ? "যেমন: আবদুল্লাহ আল মামুন" : "e.g. Abdullah Al Mamun"}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 hover:border-gray-300 dark:hover:border-white/20"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "ইমেইল ঠিকানা *" : "Email Address *"}
                </label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="abdullah@example.com"
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 hover:border-gray-300 dark:hover:border-white/20"
                />
              </div>

              {/* Merged Phone & WhatsApp */}
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "ফোন ও হোয়াটসঅ্যাপ নম্বর *" : "Phone / WhatsApp Number *"}
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="01700000000"
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 hover:border-gray-300 dark:hover:border-white/20"
                />
              </div>

              {/* Gender Section */}
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "লিঙ্গ *" : "Gender *"}
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all hover:border-gray-300 dark:hover:border-white/20 appearance-none"
                >
                  <option value="Male">{isBn ? "পুরুষ" : "Male"}</option>
                  <option value="Female">{isBn ? "নারী" : "Female"}</option>
                  <option value="Other">{isBn ? "অন্যান্য" : "Other"}</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "জন্ম তারিখ *" : "Date of Birth *"}
                </label>
                <input 
                  type="date" 
                  name="dob" 
                  value={formData.dob} 
                  onChange={handleInputChange} 
                  required 
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all hover:border-gray-300 dark:hover:border-white/20"
                />
              </div>

              {/* Emergency Contact */}
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "জরুরি যোগাযোগ (নাম ও নম্বর)" : "Emergency Contact (Name & Phone)"}
                </label>
                <input 
                  type="text" 
                  name="emergencyContact" 
                  value={formData.emergencyContact} 
                  onChange={handleInputChange} 
                  placeholder={isBn ? "অভিভাবক: ০১৮০০০০০... (ঐচ্ছিক)" : "Guardian: 01800000000 (Optional)"}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 hover:border-gray-300 dark:hover:border-white/20"
                />
              </div>

              {/* Blood Group */}
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "রক্তের গ্রুপ" : "Blood Group"}
                </label>
                <select 
                  name="bloodGroup" 
                  value={formData.bloodGroup} 
                  onChange={handleInputChange}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all hover:border-gray-300 dark:hover:border-white/20 appearance-none"
                >
                  <option value="">{isBn ? "-- নির্বাচন করুন (ঐচ্ছিক) --" : "-- Select (Optional) --"}</option>
                  {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
                </select>
              </div>

              {/* Profile Picture Upload */}
              <div className="md:col-span-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "প্রোফাইল ছবি *" : "Profile Picture *"}
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-5 p-6 bg-gray-50/50 dark:bg-[#111823] border-2 border-dashed border-gray-300 dark:border-white/10 rounded-3xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="w-24 h-24 rounded-full object-cover border-4 border-emerald-500/30 shadow-xl" />
                  ) : (
                    <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center shadow-inner">
                      <ImageIcon size={36} strokeWidth={1.5} />
                    </div>
                  )}
                  <div className="flex-1 text-center sm:text-left">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      className="text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-emerald-600 file:text-white hover:file:bg-emerald-500 cursor-pointer transition-all"
                    />
                    <p className="text-xs text-gray-400 mt-2 font-medium">
                      {isBn ? "PNG অথবা JPG, সর্বোচ্চ সাইজ ৫ মেগাবাইট" : "PNG or JPG, Maximum size 5MB."}
                    </p>
                  </div>
                </div>
              </div>

              {/* CV / Resume Uploader */}
              <div className="md:col-span-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <FileText size={18} className="text-emerald-600 dark:text-emerald-400" />
                  {isBn ? "সিভি / রেজুমে আপলোড করুন (PDF)" : "Upload CV / Resume (PDF)"}
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-5 p-6 bg-gray-50/50 dark:bg-[#111823] border-2 border-dashed border-gray-300 dark:border-white/10 rounded-3xl hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-colors">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                    <FileUp size={30} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 overflow-hidden text-center sm:text-left">
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      onChange={handleCvChange}
                      className="text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-teal-600 file:text-white hover:file:bg-teal-500 cursor-pointer transition-all w-full"
                    />
                    <p className="text-xs text-gray-400 mt-2 font-medium truncate">
                      {cvFile ? cvFile.name : (isBn ? "PDF বা DOCX ফাইল, সর্বোচ্চ ১০ মেগাবাইট" : "PDF or DOCX format, max 10MB.")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: ADDRESS DETAILS */}
          <section className="bg-white/70 dark:bg-[#0b121c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/60 dark:border-white/5 shadow-xl shadow-gray-200/20 dark:shadow-black/40 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/20 rounded-2xl text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-white/5">
                <MapPin size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {isBn ? "ঠিকানা সংক্রান্ত তথ্য" : "Address Details"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                  {isBn ? "বর্তমান ও স্থায়ী ঠিকানা প্রদান করুন" : "Present & Permanent address information"}
                </p>
              </div>
            </div>

            <div className="space-y-10">
              {/* Present Address */}
              <div>
                <h3 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-blue-600/30"></span>
                  {isBn ? "বর্তমান ঠিকানা" : "Present Address"}
                </h3>
                <div className="grid md:grid-cols-3 gap-5">
                  {[
                    { placeholder: isBn ? "বাড়ি / গ্রাম / রোড *" : "House / Village / Road *", field: "village" },
                    { placeholder: isBn ? "ইউনিয়ন / ওয়ার্ড নম্বর *" : "Union / Ward No *", field: "union" },
                    { placeholder: isBn ? "থানা / উপজেলা *" : "Thana / Upazila *", field: "thana" },
                    { placeholder: isBn ? "জেলা *" : "District *", field: "district" },
                    { placeholder: isBn ? "বিভাগ *" : "Division *", field: "division" },
                    { placeholder: isBn ? "পোস্ট কোড *" : "Post Code *", field: "postCode" }
                  ].map((item, idx) => (
                    <input 
                      key={idx}
                      type="text" 
                      placeholder={item.placeholder}
                      value={formData.presentAddress[item.field as keyof typeof formData.presentAddress]}
                      onChange={(e) => handleNestedAddressChange('presentAddress', item.field, e.target.value)}
                      required
                      className="bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 hover:border-gray-300 dark:hover:border-white/20"
                    />
                  ))}
                </div>
              </div>

              {/* Checkbox Same Address */}
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-[#111823] p-4 rounded-2xl border border-gray-200 dark:border-white/10">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    id="sameAsPresent" 
                    checked={formData.sameAsPresent} 
                    onChange={handleSameAddressToggle} 
                    className="peer w-6 h-6 appearance-none border-2 border-gray-300 dark:border-gray-600 rounded-md checked:bg-blue-600 checked:border-blue-600 focus:ring-4 focus:ring-blue-500/20 transition-all cursor-pointer"
                  />
                  <Check size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" strokeWidth={3} />
                </div>
                <label htmlFor="sameAsPresent" className="text-sm font-bold text-gray-700 dark:text-gray-300 cursor-pointer select-none">
                  {isBn ? "স্থায়ী ঠিকানা বর্তমান ঠিকানার অনুরূপ" : "Permanent address same as present address"}
                </label>
              </div>

              {/* Permanent Address */}
              <AnimatePresence>
                {!formData.sameAsPresent && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <h3 className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4 pt-2 flex items-center gap-2">
                      <span className="w-6 h-[1px] bg-indigo-600/30"></span>
                      {isBn ? "স্থায়ী ঠিকানা" : "Permanent Address"}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-5">
                      {[
                        { placeholder: isBn ? "বাড়ি / গ্রাম / রোড *" : "House / Village / Road *", field: "village" },
                        { placeholder: isBn ? "ইউনিয়ন / ওয়ার্ড নম্বর *" : "Union / Ward No *", field: "union" },
                        { placeholder: isBn ? "থানা / উপজেলা *" : "Thana / Upazila *", field: "thana" },
                        { placeholder: isBn ? "জেলা *" : "District *", field: "district" },
                        { placeholder: isBn ? "বিভাগ *" : "Division *", field: "division" },
                        { placeholder: isBn ? "পোস্ট কোড *" : "Post Code *", field: "postCode" }
                      ].map((item, idx) => (
                        <input 
                          key={`perm_${idx}`}
                          type="text" 
                          placeholder={item.placeholder}
                          value={formData.permanentAddress[item.field as keyof typeof formData.permanentAddress]}
                          onChange={(e) => handleNestedAddressChange('permanentAddress', item.field, e.target.value)}
                          required
                          className="bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 hover:border-gray-300 dark:hover:border-white/20"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* SECTION 3: EDUCATIONAL BACKGROUND */}
          <section className="bg-white/70 dark:bg-[#0b121c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/60 dark:border-white/5 shadow-xl shadow-gray-200/20 dark:shadow-black/40 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-400 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-gradient-to-br from-purple-100 to-fuchsia-50 dark:from-purple-900/40 dark:to-fuchsia-900/20 rounded-2xl text-purple-600 dark:text-purple-400 shadow-sm border border-purple-100 dark:border-white/5">
                <GraduationCap size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {isBn ? "শিক্ষাগত যোগ্যতা" : "Educational Background"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                  {isBn ? "আপনার সর্বশেষ ও বর্তমান শিক্ষাগত বিষয়াবলী" : "Academic qualification & achievements"}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "বর্তমান অবস্থা *" : "Current Status *"}
                </label>
                <select 
                  name="currentEduStatus" 
                  value={formData.currentEduStatus} 
                  onChange={handleInputChange}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all appearance-none"
                >
                  <option value="Student">{isBn ? "শিক্ষার্থী (Student)" : "Student"}</option>
                  <option value="Graduated">{isBn ? "গ্র্যাজুয়েট / চাকুরিজীবী" : "Graduated / Employed"}</option>
                  <option value="Job Seeker">{isBn ? "চাকুরিপ্রার্থী" : "Job Seeker"}</option>
                  <option value="Freelancer">{isBn ? "ফ্রিল্যান্সার" : "Freelancer"}</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "সর্বোচ্চ ডিগ্রি / যোগ্যতা *" : "Highest Degree / Qualification *"}
                </label>
                <input 
                  type="text" 
                  name="highestDegree" 
                  value={formData.highestDegree} 
                  onChange={handleInputChange} 
                  required 
                  placeholder={isBn ? "যেমন: বিএসসি / ডিপ্লোমা / আলিম" : "e.g. B.Sc in CSE / Diploma / Alim"}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "প্রতিষ্ঠানের নাম *" : "Institution Name *"}
                </label>
                <input 
                  type="text" 
                  name="institutionName" 
                  value={formData.institutionName} 
                  onChange={handleInputChange} 
                  required 
                  placeholder={isBn ? "বিশ্ববিদ্যালয় / কলেজ / মাদরাসার নাম" : "University / College / Madrasa Name"}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "বিভাগ / বিষয় *" : "Department / Subject *"}
                </label>
                <input 
                  type="text" 
                  name="subjectDept" 
                  value={formData.subjectDept} 
                  onChange={handleInputChange} 
                  required 
                  placeholder={isBn ? "যেমন: কম্পিউটার সায়েন্স / হাদিস" : "e.g. Computer Science / Economics / Hadith"}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "পাশের সাল / প্রত্যাশিত সাল *" : "Passing Year / Expected Graduation *"}
                </label>
                <input 
                  type="text" 
                  name="passingYear" 
                  value={formData.passingYear} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="2025"
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "এসএসসি / দাখিল জিপিএ ও বোর্ড *" : "SSC / Dakhil GPA / Board *"}
                </label>
                <input 
                  type="text" 
                  name="sscGpa" 
                  value={formData.sscGpa} 
                  onChange={handleInputChange} 
                  required 
                  placeholder={isBn ? "যেমন: ৫.০০ (ঢাকা বোর্ড)" : "e.g. 5.00 (Dhaka Board)"}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "এইচএসসি / আলিম জিপিএ ও বোর্ড *" : "HSC / Alim GPA / Board *"}
                </label>
                <input 
                  type="text" 
                  name="hscGpa" 
                  value={formData.hscGpa} 
                  onChange={handleInputChange} 
                  required 
                  placeholder={isBn ? "যেমন: ৫.০০ (মাদরাসা বোর্ড / ঢাকা বোর্ড)" : "e.g. 5.00 (Madrasa Board / Dhaka Board)"}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>
          </section>

          {/* SECTION 4: ISLAMIC KNOWLEDGE & ETHICS */}
          <section className="bg-white/70 dark:bg-[#0b121c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-amber-200/50 dark:border-amber-900/30 shadow-xl shadow-amber-500/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-gradient-to-br from-amber-100 to-orange-50 dark:from-amber-900/40 dark:to-orange-900/20 rounded-2xl text-amber-600 dark:text-amber-400 shadow-sm border border-amber-100 dark:border-white/5">
                  <BookOpen size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    {isBn ? "ইসলামিক জ্ঞান ও মূল্যবোধ" : "Islamic Knowledge & Values"}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                    {isBn ? "দ্বীনি বুঝ ও আখলাক সংক্রান্ত তথ্য" : "Islamic understanding & alignment"}
                  </p>
                </div>
              </div>

              {/* Non-Muslim Toggle styled as an elegant pill */}
              <div className="p-1.5 bg-gray-100 dark:bg-[#111823] rounded-2xl border border-gray-200 dark:border-white/10 inline-flex items-center">
                <label className="relative flex items-center cursor-pointer p-2 rounded-xl">
                  <input 
                    type="checkbox" 
                    name="isNotMuslim"
                    checked={formData.isNotMuslim} 
                    onChange={handleInputChange} 
                    className="sr-only peer"
                  />
                  <div className="w-14 h-8 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[10px] after:left-[10px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-amber-500 shadow-inner"></div>
                  <span className="ml-3 text-sm font-bold text-gray-700 dark:text-gray-300 pr-2">
                    {isBn ? "আমি অমুসলিম" : "Non-Muslim Applicant"}
                  </span>
                </label>
              </div>
            </div>

            <AnimatePresence>
              {!formData.isNotMuslim && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid md:grid-cols-2 gap-x-6 gap-y-8 pt-4 overflow-hidden"
                >
                  <div>
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                      {isBn ? "মৌলিক ইসলামিক জ্ঞানের মাত্রা *" : "Basic Islamic Knowledge Level *"}
                    </label>
                    <select 
                      name="islamicKnowledgeLevel" 
                      value={formData.islamicKnowledgeLevel} 
                      onChange={handleInputChange}
                      className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all appearance-none"
                    >
                      <option value="Basic">{isBn ? "প্রাথমিক ধারণা (Basic)" : "Basic"}</option>
                      <option value="Intermediate">{isBn ? "মাঝারি জ্ঞান (Intermediate)" : "Intermediate"}</option>
                      <option value="Advanced">{isBn ? "উন্নত ধারণা (Advanced)" : "Advanced"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                      {isBn ? "কুরআন তিলাওয়াত দক্ষতা *" : "Quran Recitation Ability *"}
                    </label>
                    <select 
                      name="quranRecitation" 
                      value={formData.quranRecitation} 
                      onChange={handleInputChange}
                      className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all appearance-none"
                    >
                      <option value="Fluent with Tajweed">{isBn ? "সহীহ তিলাওয়াত (Fluent with Tajweed)" : "Fluent with Tajweed"}</option>
                      <option value="Reading with basic rules">{isBn ? "সাধারণ পড়া (Basic Reading)" : "Reading with basic rules"}</option>
                      <option value="Currently Learning">{isBn ? "শিখছি (Learning)" : "Currently Learning"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                      {isBn ? "মাদরাসা ব্যাকগ্রাউন্ড আছে?" : "Madrasa Education Background"}
                    </label>
                    <select 
                      name="madrasaBackground" 
                      value={formData.madrasaBackground} 
                      onChange={handleInputChange}
                      className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all appearance-none"
                    >
                      <option value="No">{isBn ? "না (সাধারণ শিক্ষা)" : "No (General Education)"}</option>
                      <option value="Yes - Qawmi">{isBn ? "হ্যাঁ - কওমী মাদরাসা" : "Yes - Qawmi Madrasa"}</option>
                      <option value="Yes - Alia">{isBn ? "হ্যাঁ - আলিয়া মাদরাসা" : "Yes - Alia Madrasa"}</option>
                      <option value="Yes - Short Course">{isBn ? "হ্যাঁ - ইসলামিক শর্ট কোর্স/ডিপ্লোমা" : "Yes - Short Course / Diploma"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                      {isBn ? "মাদরাসা / কোর্সের বিবরণ (যদি থাকে)" : "Madrasa / Course Details (If any)"}
                    </label>
                    <input 
                      type="text" 
                      name="madrasaDetails" 
                      value={formData.madrasaDetails} 
                      onChange={handleInputChange} 
                      placeholder={isBn ? "যেমন: দাওরাতুল হাদিস / ডিপ্লোমা" : "e.g. Dawratul Hadith / Diploma in Shariah"}
                      className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* SECTION 5: TECHNICAL SKILLS & PROFICIENCY */}
          <section className="bg-white/70 dark:bg-[#0b121c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/60 dark:border-white/5 shadow-xl shadow-gray-200/20 dark:shadow-black/40 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-gradient-to-br from-cyan-100 to-blue-50 dark:from-cyan-900/40 dark:to-blue-900/20 rounded-2xl text-cyan-600 dark:text-cyan-400 shadow-sm border border-cyan-100 dark:border-white/5">
                <Code size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {isBn ? "টেকনিক্যাল স্কিলস ও প্রফিসিয়েন্সি" : "Technical Skills & Proficiency"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                  {isBn ? "আপনার প্রাসঙ্গিক স্কিল নির্বাচন করুন এবং রেটিং দিন" : "Select skills & set proficiency ratings (1-5)"}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 block">
                  {isBn ? "আপনার কারিগরি ও ক্রিয়েটিভ স্কিলসমূহ নির্বাচন করুন *" : "Select Your Technical & Creative Skills *"}
                </label>
                <div className="flex flex-wrap gap-3">
                  {skillsList.map((skill) => {
                    const isSelected = selectedSkills.includes(skill);
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${
                          isSelected 
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/30 scale-[1.02]" 
                            : "bg-white dark:bg-[#111823] text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-cyan-400/50 dark:hover:border-cyan-400/50 hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
                        }`}
                      >
                        {isSelected && <Check size={16} strokeWidth={3} />}
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Skills Rating */}
              <AnimatePresence>
                {selectedSkills.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-6 border-t border-gray-100 dark:border-white/5 space-y-5"
                  >
                    <label className="text-xs font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-6 h-[1px] bg-cyan-600/30"></span>
                      {isBn ? "স্কিল প্রফিসিয়েন্সি রেটিং (১ - ৫ স্টার):" : "Set Skill Proficiency Level (1 to 5 Stars):"}
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedSkills.map(skill => (
                        <div key={skill} className="flex items-center justify-between p-4 bg-gray-50/80 dark:bg-[#111823] rounded-2xl border border-gray-200/60 dark:border-white/5 hover:border-cyan-500/30 transition-colors">
                          <span className="text-sm font-bold text-gray-800 dark:text-gray-200 truncate pr-4">{skill}</span>
                          <div className="flex items-center gap-1.5 bg-white dark:bg-black/20 p-1.5 rounded-xl shadow-sm border border-gray-100 dark:border-white/5">
                            {[1, 2, 3, 4, 5].map(star => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => updateSkillProficiency(skill, star)}
                                className="p-1 hover:scale-125 transition-transform"
                              >
                                <Star 
                                  size={18} 
                                  className={star <= (skillProficiencies[skill] || 3) ? "fill-amber-400 text-amber-400" : "text-gray-300 dark:text-gray-700"} 
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid md:grid-cols-2 gap-x-6 gap-y-8 pt-4">
                {/* Portfolio Link */}
                <div>
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                    {isBn ? "পোর্টফোলিও / গিটহাব / বিহ্যাভ লিঙ্ক" : "Portfolio / GitHub / Behance Link"}
                  </label>
                  <input 
                    type="url" 
                    name="portfolioLink" 
                    value={formData.portfolioLink} 
                    onChange={handleInputChange} 
                    placeholder={isBn ? "https://github.com/... (ঐচ্ছিক)" : "https://github.com/username (Optional)"}
                    className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Years of Experience */}
                <div>
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                    {isBn ? "মোট অভিজ্ঞতার বছর" : "Total Years of Experience"}
                  </label>
                  <input 
                    type="text" 
                    name="yearsOfExp" 
                    value={formData.yearsOfExp} 
                    onChange={handleInputChange} 
                    placeholder={isBn ? "যেমন: ২ বছর / নতুন (ঐচ্ছিক)" : "e.g. 2 Years / Learner (Optional)"}
                    className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: PREFERRED ROLE & DEPARTMENT */}
          <section className="bg-white/70 dark:bg-[#0b121c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/60 dark:border-white/5 shadow-xl shadow-gray-200/20 dark:shadow-black/40 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-gradient-to-br from-rose-100 to-pink-50 dark:from-rose-900/40 dark:to-pink-900/20 rounded-2xl text-rose-600 dark:text-rose-400 shadow-sm border border-rose-100 dark:border-white/5">
                <Briefcase size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {isBn ? "পছন্দের পদ ও ডিপার্টমেন্ট" : "Preferred Role & Department"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                  {isBn ? "যে পদে কাজ করতে আপনি বেশি আগ্রহী" : "Roles and department choices"}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-x-6 gap-y-8">
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "প্রধান পদ *" : "Primary Role Applied For *"}
                </label>
                <input 
                  type="text" 
                  name="primaryRole" 
                  value={formData.primaryRole} 
                  onChange={handleInputChange} 
                  required 
                  placeholder={isBn ? "যেমন: রিঅ্যাক্ট ডেভলপার" : "e.g. React Developer"}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-rose-500/20 focus:border-rose-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "দ্বিতীয় পছন্দের পদ (ঐচ্ছিক)" : "Secondary Role (Optional)"}
                </label>
                <input 
                  type="text" 
                  name="secondaryRole" 
                  value={formData.secondaryRole} 
                  onChange={handleInputChange} 
                  placeholder={isBn ? "যেমন: ইউআই ডিজাইনার" : "e.g. UI Designer"}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-rose-500/20 focus:border-rose-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "পছন্দের ডিপার্টমেন্ট *" : "Preferred Department *"}
                </label>
                <select 
                  name="preferredDepartment" 
                  value={formData.preferredDepartment} 
                  onChange={handleInputChange}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-rose-500/20 focus:border-rose-500 outline-none transition-all appearance-none"
                >
                  <option value="Software Engineering">{isBn ? "সফটওয়্যার ইঞ্জিনিয়ারিং ও টেক" : "Software Engineering & Tech"}</option>
                  <option value="Creative & Design">{isBn ? "ক্রিয়েটিভ ও ইউআই/ইউএক্স" : "Creative, UI/UX & Graphics"}</option>
                  <option value="Media & Content">{isBn ? "মিডিয়া, ভিডিও ও কন্টেন্ট" : "Media, Video & Writing"}</option>
                  <option value="Operations & Management">{isBn ? "অপারেশনস ও প্রজেক্ট ম্যানেজমেন্ট" : "Operations & Project Mgmt"}</option>
                  <option value="Islamic Research">{isBn ? "ইসলামিক রিসার্চ ও কিউএ" : "Islamic Research & QA"}</option>
                </select>
              </div>
            </div>
          </section>

          {/* SECTION 7: WORK PREFERENCE & AVAILABILITY */}
          <section className="bg-white/70 dark:bg-[#0b121c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/60 dark:border-white/5 shadow-xl shadow-gray-200/20 dark:shadow-black/40 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/20 rounded-2xl text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-white/5">
                <Clock size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {isBn ? "কাজের ধরণ ও সময়িক সহজলভ্যতা" : "Work Preference & Availability"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                  {isBn ? "আপনার কাজের সময় ও শিফট নির্বাচন" : "Availability and work mode preferences"}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "কাজের ধরণ *" : "Work Mode *"}
                </label>
                <select 
                  name="workMode" 
                  value={formData.workMode} 
                  onChange={handleInputChange}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none"
                >
                  <option value="Remote">{isBn ? "রিমোট (Remote)" : "Remote"}</option>
                  <option value="Hybrid">{isBn ? "হাইব্রিড (Hybrid)" : "Hybrid"}</option>
                  <option value="Onsite">{isBn ? "অনসাইট (Onsite)" : "Onsite"}</option>
                  <option value="Flexible">{isBn ? "ফ্লেক্সিবল (Flexible)" : "Flexible"}</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "সাপ্তাহিক সহজলভ্য সময় *" : "Weekly Available Hours *"}
                </label>
                <select 
                  name="weeklyHours" 
                  value={formData.weeklyHours} 
                  onChange={handleInputChange}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none"
                >
                  <option value="10-20 Hours / Week">{isBn ? "১০-২০ ঘণ্টা / সপ্তাহ" : "10-20 Hours / Week"}</option>
                  <option value="20-30 Hours / Week">{isBn ? "২০-৩০ ঘণ্টা / সপ্তাহ" : "20-30 Hours / Week"}</option>
                  <option value="30-40 Hours / Week">{isBn ? "৩০-৪০ ঘণ্টা / সপ্তাহ" : "30-40 Hours / Week"}</option>
                  <option value="40+ Hours (Full Time)">{isBn ? "৪০+ ঘণ্টা (ফুল টাইম)" : "40+ Hours (Full Time)"}</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "পছন্দের শিফট *" : "Preferred Shift / Time Slot *"}
                </label>
                <select 
                  name="preferredShift" 
                  value={formData.preferredShift} 
                  onChange={handleInputChange}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none"
                >
                  <option value="Morning Shift">{isBn ? "মর্নিং শিফট" : "Morning Shift"}</option>
                  <option value="Evening Shift">{isBn ? "ইভনিং শিফট" : "Evening Shift"}</option>
                  <option value="Night Shift">{isBn ? "নাইট শিফট" : "Night Shift"}</option>
                  <option value="Flexible / Output Based">{isBn ? "ফ্লেক্সিবল / আউটপুট ভিত্তিক" : "Flexible / Output Based"}</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "সম্ভাব্য যোগদানের তারিখ *" : "Earliest Joining Date *"}
                </label>
                <input 
                  type="date" 
                  name="availableStartDate" 
                  value={formData.availableStartDate} 
                  onChange={handleInputChange} 
                  required 
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>
          </section>

          {/* SECTION 8: PREVIOUS EXPERIENCE */}
          <section className="bg-white/70 dark:bg-[#0b121c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/60 dark:border-white/5 shadow-xl shadow-gray-200/20 dark:shadow-black/40 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-gradient-to-br from-teal-100 to-emerald-50 dark:from-teal-900/40 dark:to-emerald-900/20 rounded-2xl text-teal-600 dark:text-teal-400 shadow-sm border border-teal-100 dark:border-white/5">
                <Building size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {isBn ? "পূর্ববর্তী অভিজ্ঞতা ও প্রজেক্ট" : "Previous Experience & Projects"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                  {isBn ? "পূর্বে কাজ করা প্রতিষ্ঠান ও কাজের বিবরণ" : "Past organization and key achievements"}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "পূর্ববর্তী প্রতিষ্ঠান (প্রথমবার হলে 'নেই' লিখুন) *" : "Previous Organization / Company *"}
                </label>
                <input 
                  type="text" 
                  name="previousOrg" 
                  value={formData.previousOrg} 
                  onChange={handleInputChange} 
                  required 
                  placeholder={isBn ? "কোম্পানির নাম অথবা ফ্রিল্যান্সিং / নেই" : "Company name or Freelancing / None"}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "পূর্ববর্তী প্রজেক্ট লিঙ্ক / বিবরণ *" : "Past Project Links / Descriptions *"}
                </label>
                <textarea 
                  name="pastProjectLinks" 
                  value={formData.pastProjectLinks} 
                  onChange={handleInputChange} 
                  required 
                  rows={4}
                  placeholder={isBn ? "আপনার ২-৩টি সেরা প্রজেক্ট লিঙ্ক ও বিবরণ দিন..." : "Provide links or short description of 2-3 live projects..."}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "বিশেষ কোনো অর্জন / অবদান" : "Key Achievements / Contributions"}
                </label>
                <textarea 
                  name="keyAchievements" 
                  value={formData.keyAchievements} 
                  onChange={handleInputChange} 
                  rows={3}
                  placeholder={isBn ? "যেমন: ই-কমার্স প্রজেক্ট তৈরি, ৫০কে গ্রুপের পরিচালনা..." : "e.g. Built an e-commerce backend, managed 50k Facebook group..."}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none placeholder:text-gray-400"
                />
              </div>
            </div>
          </section>

          {/* SECTION 9: MOTIVATION & VISION */}
          <section className="bg-white/70 dark:bg-[#0b121c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/60 dark:border-white/5 shadow-xl shadow-gray-200/20 dark:shadow-black/40 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-gradient-to-br from-pink-100 to-rose-50 dark:from-pink-900/40 dark:to-rose-900/20 rounded-2xl text-pink-600 dark:text-pink-400 shadow-sm border border-pink-100 dark:border-white/5">
                <Heart size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {isBn ? "উদ্দেশ্য ও ভিশন" : "Motivation & Vision"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                  {isBn ? "কাফআহে যুক্ত হওয়ার লক্ষ্য ও প্রেরণা" : "Why you want to join and your future roadmap"}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "কেন কাফআহ টিমে যোগ দিতে চান? *" : "Why do you want to join Team Kafa'ah? *"}
                </label>
                <textarea 
                  name="whyJoinKafaah" 
                  value={formData.whyJoinKafaah} 
                  onChange={handleInputChange} 
                  required 
                  rows={3}
                  placeholder={isBn ? "আপনার লক্ষ্য ও আগ্রহ প্রকাশ করুন..." : "Share your inspiration & enthusiasm..."}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all resize-none placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "কাফআহের ইসলামিক টেক ভিশনে কীভাবে ভূমিকা রাখবেন? *" : "How will you contribute to Kafa'ah's Islamic Tech Vision? *"}
                </label>
                <textarea 
                  name="contributionVision" 
                  value={formData.contributionVision} 
                  onChange={handleInputChange} 
                  required 
                  rows={3}
                  placeholder={isBn ? "আপনার মেধা দিয়ে কীভাবে ভিশনে অবদান রাখবেন লিখুন..." : "Explain how your technical/creative skills will advance Islamic tech..."}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all resize-none placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "আগামী ২ বছরে নিজেকে কোথায় দেখতে চান?" : "Where do you see yourself in 2 years with Kafa'ah?"}
                </label>
                <input 
                  type="text" 
                  name="twoYearGoal" 
                  value={formData.twoYearGoal} 
                  onChange={handleInputChange} 
                  placeholder={isBn ? "যেমন: লিড ডেভলপার / প্রজেক্ট ম্যানেজার" : "e.g. Lead Frontend Developer / Product Manager"}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>
          </section>

          {/* SECTION 10: SOCIAL LINKS */}
          <section className="bg-white/70 dark:bg-[#0b121c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/60 dark:border-white/5 shadow-xl shadow-gray-200/20 dark:shadow-black/40 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-gradient-to-br from-indigo-100 to-purple-50 dark:from-indigo-900/40 dark:to-purple-900/20 rounded-2xl text-indigo-600 dark:text-indigo-400 shadow-sm border border-indigo-100 dark:border-white/5">
                <Share2 size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {isBn ? "সোশ্যাল ও প্রোফেশনাল লিঙ্ক" : "Social & Professional Links"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                  {isBn ? "আপনার অনলাইন প্রোফাইল লিঙ্কসমূহ (ঐচ্ছিক)" : "LinkedIn, Facebook, GitHub URLs (Optional)"}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "লিঙ্কডইন প্রোফাইল" : "LinkedIn Profile"}
                </label>
                <input 
                  type="url" 
                  name="linkedin" 
                  value={formData.linkedin} 
                  onChange={handleInputChange} 
                  placeholder="https://linkedin.com/in/username"
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "ফেসবুক প্রোফাইল" : "Facebook Profile"}
                </label>
                <input 
                  type="url" 
                  name="facebook" 
                  value={formData.facebook} 
                  onChange={handleInputChange} 
                  placeholder="https://facebook.com/username"
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "গিটহাব প্রোফাইল" : "GitHub Profile"}
                </label>
                <input 
                  type="url" 
                  name="github" 
                  value={formData.github} 
                  onChange={handleInputChange} 
                  placeholder="https://github.com/username"
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "পার্সোনাল ওয়েবসাইট / ব্লগ" : "Personal Website / Blog"}
                </label>
                <input 
                  type="url" 
                  name="website" 
                  value={formData.website} 
                  onChange={handleInputChange} 
                  placeholder="https://yourwebsite.com"
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "টেলিগ্রাম ইউজারনেম" : "Telegram Username"}
                </label>
                <input 
                  type="text" 
                  name="telegram" 
                  value={formData.telegram} 
                  onChange={handleInputChange} 
                  placeholder="@username"
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>
          </section>

          {/* SECTION 11: TERMS & COMMITMENTS */}
          <section className="bg-emerald-50/80 dark:bg-emerald-950/10 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border-2 border-emerald-400/30 dark:border-emerald-500/20 shadow-xl shadow-emerald-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-3.5 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl text-white shadow-lg shadow-emerald-500/30">
                <ShieldCheck size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-emerald-900 dark:text-emerald-400 tracking-tight">
                  {isBn ? "শর্তাবলী ও অঙ্গীকারনামা" : "Terms & Declaration"}
                </h2>
                <p className="text-sm text-emerald-700/80 dark:text-emerald-500/80 font-medium mt-1">
                  {isBn ? "অফিসিয়াল পলিসি ও সততা ঘোষণা" : "Official code of conduct & honesty pledge"}
                </p>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="p-6 bg-white/60 dark:bg-black/20 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-900/30 rounded-2xl text-sm text-gray-800 dark:text-gray-200 leading-relaxed shadow-sm">
                <p className="font-extrabold text-emerald-800 dark:text-emerald-400 mb-3 text-base">
                  {isBn ? "কাফআহ কোড অফ কন্ডাক্ট ও নীতিমালা:" : "Team Kafa'ah Code of Conduct:"}
                </p>
                <ul className="list-disc pl-5 space-y-2 font-medium">
                  <li>{isBn ? "ইসলামিক শরীয়াহ নীতি ও পেশাদার শালীনতা বজায় রাখতে হবে।" : "Adhere to Islamic Shariah values & professional ethics at all times."}</li>
                  <li>{isBn ? "প্রদানকৃত সকল তথ্য সম্পূর্ণ সত্য হতে হবে।" : "All provided information must be completely true and accurate."}</li>
                  <li>{isBn ? "প্রতিষ্ঠানের গোপনীয়তা রক্ষা করতে আপনি বাধ্য থাকবেন।" : "Maintain strict confidentiality regarding internal projects & client details."}</li>
                </ul>
              </div>

              <label className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-100/50 dark:hover:bg-emerald-900/20 transition-colors cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input 
                    type="checkbox" 
                    id="agreedToTerms" 
                    name="agreedToTerms" 
                    checked={formData.agreedToTerms} 
                    onChange={handleInputChange} 
                    required 
                    className="peer w-6 h-6 appearance-none border-2 border-emerald-400 dark:border-emerald-600 rounded-md checked:bg-emerald-500 checked:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all cursor-pointer"
                  />
                  <Check size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" strokeWidth={3} />
                </div>
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200 select-none group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {isBn 
                    ? "আমি কাফআহের সকল নিয়মকানুন, গোপনীয়তা চুক্তি এবং শালীনতার নীতিমালা মেনে চলতে সম্মত।" 
                    : "I agree to Team Kafa'ah's Code of Conduct, Confidentiality guidelines, and Ethical principles."}
                </span>
              </label>

              <label className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-100/50 dark:hover:bg-emerald-900/20 transition-colors cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input 
                    type="checkbox" 
                    id="truthDeclaration" 
                    name="truthDeclaration" 
                    checked={formData.truthDeclaration} 
                    onChange={handleInputChange} 
                    required 
                    className="peer w-6 h-6 appearance-none border-2 border-emerald-400 dark:border-emerald-600 rounded-md checked:bg-emerald-500 checked:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all cursor-pointer"
                  />
                  <Check size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" strokeWidth={3} />
                </div>
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200 select-none group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {isBn 
                    ? "আমি সজ্ঞানে ঘোষণা করছি যে উপরে প্রদত্ত সকল তথ্য সম্পূর্ণ সত্য ও সঠিক।" 
                    : "I solemnly declare that all information supplied above is true and correct to the best of my knowledge."}
                </span>
              </label>
            </div>
          </section>

          {/* SECTION 12: REFERRAL & FEEDBACK */}
          <section className="bg-white/70 dark:bg-[#0b121c]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/60 dark:border-white/5 shadow-xl shadow-gray-200/20 dark:shadow-black/40 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-violet-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3.5 bg-gradient-to-br from-violet-100 to-purple-50 dark:from-violet-900/40 dark:to-purple-900/20 rounded-2xl text-violet-600 dark:text-violet-400 shadow-sm border border-violet-100 dark:border-white/5">
                <MessageSquare size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {isBn ? "রেফারেল ও মন্তব্য" : "Referral & Additional Comments"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                  {isBn ? "কীভাবে কাফআহ সম্পর্কে জানতে পারলেন" : "How you heard about us & final notes"}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "কীভাবে কাফআহ সম্পর্কে জানতে পেরেছেন? *" : "How did you hear about Kafa'ah? *"}
                </label>
                <select 
                  name="referralSource" 
                  value={formData.referralSource} 
                  onChange={handleInputChange}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 outline-none transition-all appearance-none"
                >
                  <option value="Facebook Page / Group">{isBn ? "ফেসবুক পেজ / গ্রুপ" : "Facebook Page / Group"}</option>
                  <option value="LinkedIn">{isBn ? "লিঙ্কডইন" : "LinkedIn"}</option>
                  <option value="Friend / Referral">{isBn ? "বন্ধু / পরিচিত জন" : "Friend / Referral"}</option>
                  <option value="Kafa'ah Website">{isBn ? "কাফআহ ওয়েবসাইট" : "Kafa'ah Website"}</option>
                  <option value="YouTube / Social Media">{isBn ? "ইউটিউব / সামাজিক যোগাযোগ মাধ্যম" : "YouTube / Social Media"}</option>
                  <option value="Event / Workshop">{isBn ? "ইভেন্ট / ওয়ার্কশপ" : "Event / Workshop"}</option>
                  <option value="Other">{isBn ? "অন্যান্য" : "Other"}</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">
                  {isBn ? "অতিরিক্ত মন্তব্য / প্রশ্ন (ঐচ্ছিক)" : "Additional Comments / Questions (Optional)"}
                </label>
                <textarea 
                  name="additionalComments" 
                  value={formData.additionalComments} 
                  onChange={handleInputChange} 
                  rows={4}
                  placeholder={isBn ? "টিমের জন্য কোনো প্রশ্ন বা অতিরিক্ত মন্তব্য..." : "Any questions for the team or extra note..."}
                  className="w-full bg-gray-50/50 dark:bg-[#111823] border border-gray-200 dark:border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 outline-none transition-all resize-none placeholder:text-gray-400"
                />
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-8 pb-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative group overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-6 rounded-3xl font-black text-xl shadow-2xl hover:shadow-emerald-500/25 flex items-center justify-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              {/* Button Shine Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              
              <div className="relative z-10 flex items-center gap-3">
                {isSubmitting ? (
                  <>
                    <Loader2 size={28} className="animate-spin text-emerald-400 dark:text-emerald-600" />
                    <span>{isBn ? "আবেদন প্রসেস করা হচ্ছে..." : "Submitting Application..."}</span>
                  </>
                ) : (
                  <>
                    <Send size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>{isBn ? "সম্পূর্ণ আবেদনটি জমা দিন" : "Submit Application"}</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </form>
      )}
    </AnimatePresence>
  </div>
</div>
    </>
  );
};

export default JoinForm;
