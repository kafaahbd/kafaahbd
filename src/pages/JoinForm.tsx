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
  Loader2
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";

const skillsList = [
  "Frontend (React/Next.js)", "Backend (Node/Express)", "TypeScript", 
  "UI/UX Design", "App Development (Flutter/RN)", "Graphic Design", 
  "Content Writing", "Video Editing", "SEO Specialist", "Digital Marketing",
  "Project Management", "Cyber Security", "Database Management", "QA Testing","Photo Editing " ,"Photo Design" ,"Page management ","Question Creation "
];

const JoinForm: React.FC = () => {
  const { t, lang } = useLanguage();
  
  // Form States
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dob: "",
    presentAddress: "",
    permanentAddress: "",
    experience: "",
    previousWork: "",
    motivation: ""
  });
  const [image, setImage] = useState<File | null>(null);

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!image) {
      setErrorMessage("Please upload a profile picture.");
      return;
    }
    if (selectedSkills.length === 0) {
      setErrorMessage("Please select at least one skill.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append("skills", selectedSkills.join(", "));
    data.append("image", image);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${apiUrl}/api/join`, {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Failed to submit");

      // On success:
      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        dob: "",
        presentAddress: "",
        permanentAddress: "",
        experience: "",
        previousWork: "",
        motivation: ""
      });
      setSelectedSkills([]);
      setImage(null);
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
        title={lang === "bn" ? "যোগ দিন | কাফআহ" : "Join Us | Kafa'ah"} 
        description="Join Team Kafa'ah and be part of our Islamic tech vision."
        url="/join"
        image="https://kafaahbd.com/join-cover.jpg"
        breadcrumbs={[{ name: lang === "bn" ? "যোগ দিন" : "Join Us", url: "/join" }]}
      />
      
      <div className="min-h-screen relative bg-[#f0f4f8] dark:bg-[#020408] transition-colors duration-500 font-sans overflow-hidden">
        {/* Mesh Gradient / Ambient Backgrounds for Glassmorphism */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] bg-gradient-to-br from-emerald-300/30 to-teal-400/20 dark:from-emerald-900/40 dark:to-teal-900/30 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-cyan-300/30 to-blue-400/20 dark:from-cyan-900/40 dark:to-blue-900/30 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-purple-300/20 dark:bg-purple-900/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        </div>

        <div className="relative z-10 pt-8 pb-20 px-4">
          <div className="max-w-4xl mx-auto mb-8 flex justify-center lg:justify-start">
             <Breadcrumb items={[{ name: lang === "bn" ? "আবেদন ফরম" : "Application Form" }]} />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white/40 dark:bg-black/40 backdrop-blur-3xl rounded-[2.5rem] md:rounded-[3rem] shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/60 dark:border-white/10 overflow-hidden"
          >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-700 p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')] mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white relative z-10 tracking-tight mb-4">
              {lang === "bn" ? "আমাদের টিমে যোগ দিন" : "Join Our Elite Team"}
            </h1>
            <p className="text-emerald-50 text-sm md:text-lg font-medium opacity-90 relative z-10 max-w-2xl mx-auto leading-relaxed">
              {lang === "bn" ? "আপনার দক্ষতা দিয়ে গড়ুন আগামীর ইসলামিক টেকনোলজি" : "Shape the future of Islamic technology with your skills"}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              // Success Message UI
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 md:p-20 text-center space-y-6 flex flex-col items-center justify-center min-h-[400px]"
              >
                <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-[2rem] flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 size={48} className="text-emerald-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Application Submitted!
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-lg leading-relaxed">
                  Thank you for applying to join Team Kafa'ah. We have received your application and will contact you via email shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-10 px-8 py-4 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors border border-gray-200/50 dark:border-white/5"
                >
                  Submit Another Response
                </button>
              </motion.div>
            ) : (
              // Form UI
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="p-8 md:p-12 lg:p-16 space-y-12"
              >
                {errorMessage && (
                  <div className="p-4 bg-red-50/80 backdrop-blur-md border border-red-200 rounded-2xl text-red-600 text-sm font-semibold flex items-center gap-3 shadow-sm">
                    <Info size={18} className="shrink-0" />
                    {errorMessage}
                  </div>
                )}
                
                {/* Personal Information Section */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 border-b border-gray-200 dark:border-white/10 pb-4">
                    <div className="p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl text-emerald-500">
                      <User size={24} />
                    </div>
                    Basic Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe" 
                        className="w-full bg-white/50 dark:bg-[#131821] border border-gray-200/50 dark:border-white/5 rounded-[1.5rem] px-5 py-4 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white shadow-sm font-medium" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com" 
                        className="w-full bg-white/50 dark:bg-[#131821] border border-gray-200/50 dark:border-white/5 rounded-[1.5rem] px-5 py-4 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white shadow-sm font-medium" 
                      />
                    </div>
                    <div className="space-y-3 md:col-span-2 lg:col-span-1">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Date of Birth</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-white/50 dark:bg-[#131821] border border-gray-200/50 dark:border-white/5 rounded-[1.5rem] px-5 py-4 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white shadow-sm font-medium" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Present Address</label>
                      <textarea 
                        name="presentAddress"
                        value={formData.presentAddress}
                        onChange={handleInputChange}
                        required
                        rows={3} 
                        placeholder="Current location..." 
                        className="w-full bg-white/50 dark:bg-[#131821] border border-gray-200/50 dark:border-white/5 rounded-[1.5rem] px-5 py-4 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white shadow-sm font-medium resize-none" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Permanent Address</label>
                      <textarea 
                        name="permanentAddress"
                        value={formData.permanentAddress}
                        onChange={handleInputChange}
                        required
                        rows={3} 
                        placeholder="Home town..." 
                        className="w-full bg-white/50 dark:bg-[#131821] border border-gray-200/50 dark:border-white/5 rounded-[1.5rem] px-5 py-4 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white shadow-sm font-medium resize-none" 
                      />
                    </div>
                  </div>
                </div>

                {/* Skills Selection */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 border-b border-gray-200 dark:border-white/10 pb-4">
                    <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-xl text-blue-500">
                       <CheckCircle2 size={24} />
                    </div>
                    Professional Skills
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {skillsList.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                          selectedSkills.includes(skill)
                            ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-500/30 scale-105"
                            : "bg-white/50 dark:bg-white/5 border-gray-200/50 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Experience & Work */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 border-b border-gray-200 dark:border-white/10 pb-4">
                    <div className="p-2 bg-orange-50 dark:bg-orange-500/10 rounded-xl text-orange-500">
                      <Briefcase size={24} />
                    </div>
                    Work Experience
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Years of Experience</label>
                      <input 
                        type="text" 
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. 2 Years" 
                        className="w-full bg-white/50 dark:bg-[#131821] border border-gray-200/50 dark:border-white/5 rounded-[1.5rem] px-5 py-4 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white shadow-sm font-medium" 
                      />
                      <p className="text-[11px] text-gray-500 flex items-center gap-1.5 ml-1 font-medium bg-gray-50 dark:bg-white/5 inline-flex px-2 py-1 rounded-md">
                        <Info size={12} /> If you are a beginner, type "Learner"
                      </p>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Previous Work Place</label>
                      <input 
                        type="text" 
                        name="previousWork"
                        value={formData.previousWork}
                        onChange={handleInputChange}
                        required
                        placeholder="Company or Agency name" 
                        className="w-full bg-white/50 dark:bg-[#131821] border border-gray-200/50 dark:border-white/5 rounded-[1.5rem] px-5 py-4 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white shadow-sm font-medium" 
                      />
                      <p className="text-[11px] text-gray-500 ml-1 font-medium italic">If none, please type "None"</p>
                    </div>
                  </div>
                </div>

                {/* Motivation & Media */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 border-b border-gray-200 dark:border-white/10 pb-4">
                    <div className="p-2 bg-purple-50 dark:bg-purple-500/10 rounded-xl text-purple-500">
                      <ImageIcon size={24} />
                    </div>
                    Final Details
                  </h2>
                  
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Why do you want to join Team Kafa'ah?</label>
                    <textarea 
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={5} 
                      placeholder="Tell us about your motivation..." 
                      className="w-full bg-white/50 dark:bg-[#131821] border border-gray-200/50 dark:border-white/5 rounded-[1.5rem] px-5 py-4 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all dark:text-white shadow-sm font-medium resize-none" 
                    />
                  </div>

                  <div className="relative p-10 bg-white/30 dark:bg-[#131821]/50 border-2 border-dashed border-emerald-200 dark:border-emerald-900/30 rounded-[2.5rem] text-center hover:bg-emerald-50 dark:hover:bg-emerald-900/10 hover:border-emerald-400 transition-all cursor-pointer group shadow-sm">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      required
                    />
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-[1.5rem] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-inner">
                        <ImageIcon size={28} className="text-emerald-500" />
                      </div>
                      <span className="text-base font-bold text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 transition-colors">
                        {image ? image.name : "Upload Professional Profile Picture"}
                      </span>
                      <span className="text-xs text-gray-500 mt-2 font-medium bg-white/50 dark:bg-white/5 px-3 py-1 rounded-full">PNG, JPG up to 5MB</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white py-5 rounded-full font-black text-xl shadow-[0_10px_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 transition-all ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>Processing <Loader2 size={24} className="animate-spin" /></>
                    ) : (
                      <>Submit Application <Send size={24} /></>
                    )}
                  </motion.button>
                </div>

              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
        </div>
      </div>
    </>
  );
};

export default JoinForm;
