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

const skillsList = [
  "Frontend (React/Next.js)", "Backend (Node/Express)", "TypeScript", 
  "UI/UX Design", "App Development (Flutter/RN)", "Graphic Design", 
  "Content Writing", "Video Editing", "SEO Specialist", "Digital Marketing",
  "Project Management", "Cyber Security", "Database Management", "QA Testing"
];

const JoinForm: React.FC = () => {
  const { t, lang } = useLanguage();
  
  // Form States
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    presentAddress: "",
    permanentAddress: "",
    experience: "",
    previousWork: "",
    motivation: ""
  });

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      ...formData,
      skills: selectedSkills
    };

    try {
      // TODO: Replace this URL with your actual Node.js/Express backend endpoint
      // Example: fetch('https://api.kafaahbd.com/v1/applications', { ... })
      
      /* const response = await fetch("YOUR_BACKEND_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) throw new Error("Failed to submit");
      */

      // Simulating an API call delay for UI demonstration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // On success:
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      // Handle error UI here if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title={lang === "bn" ? "যোগ দিন | কাফআহ" : "Join Us | Kafa'ah"} 
        description="Join Team Kafa'ah and be part of our Islamic tech vision."
      />
      
      <div className="min-h-screen bg-slate-50 dark:bg-[#05070a] py-20 px-4 transition-colors duration-500">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white dark:bg-[#0d1117] rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-white/5 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 md:p-12 text-center relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
            <h1 className="text-3xl md:text-5xl font-black text-white relative z-10">
              {lang === "bn" ? "আমাদের টিমে যোগ দিন" : "Join Our Elite Team"}
            </h1>
            <p className="text-green-50 mt-4 text-sm md:text-lg font-medium opacity-90">
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
                className="p-12 text-center space-y-6 flex flex-col items-center justify-center min-h-[400px]"
              >
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={48} className="text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Application Submitted!
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  Thank you for applying to join Team Kafa'ah. We have received your application and will contact you via email shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 px-8 py-3 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
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
                className="p-6 md:p-12 space-y-10"
              >
                
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-white/5 pb-2">
                    <User size={20} className="text-green-500" /> Basic Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe" 
                        className="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Date of Birth</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Present Address</label>
                      <textarea 
                        name="presentAddress"
                        value={formData.presentAddress}
                        onChange={handleInputChange}
                        required
                        rows={2} 
                        placeholder="Current location..." 
                        className="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Permanent Address</label>
                      <textarea 
                        name="permanentAddress"
                        value={formData.permanentAddress}
                        onChange={handleInputChange}
                        required
                        rows={2} 
                        placeholder="Home town..." 
                        className="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white" 
                      />
                    </div>
                  </div>
                </div>

                {/* Skills Selection */}
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-white/5 pb-2">
                    <CheckCircle2 size={20} className="text-green-500" /> Professional Skills
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {skillsList.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all border ${
                          selectedSkills.includes(skill)
                            ? "bg-green-600 border-green-600 text-white shadow-lg shadow-green-500/30 scale-105"
                            : "bg-transparent border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-green-500"
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Experience & Work */}
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-white/5 pb-2">
                    <Briefcase size={20} className="text-green-500" /> Work Experience
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Years of Experience</label>
                      <input 
                        type="text" 
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. 2 Years" 
                        className="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white" 
                      />
                      <p className="text-[10px] text-gray-500 flex items-center gap-1 italic">
                        <Info size={12} /> If you are a beginner, type "Learner"
                      </p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Previous Work Place</label>
                      <input 
                        type="text" 
                        name="previousWork"
                        value={formData.previousWork}
                        onChange={handleInputChange}
                        required
                        placeholder="Company or Agency name" 
                        className="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white" 
                      />
                      <p className="text-[10px] text-gray-500 italic">If none, please type "None"</p>
                    </div>
                  </div>
                </div>

                {/* Motivation & Media */}
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-white/5 pb-2">
                    <ImageIcon size={20} className="text-green-500" /> Final Details
                  </h2>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Why do you want to join Team Kafa'ah?</label>
                    <textarea 
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={4} 
                      placeholder="Tell us about your motivation..." 
                      className="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white" 
                    />
                  </div>

                  {/* Note: In a real app, bind this to an actual file input state using an invisible <input type="file" /> */}
                  <div className="p-8 border-2 border-dashed border-gray-200 dark:border-white/10 rounded-[2rem] text-center hover:border-green-500 transition-colors cursor-pointer group">
                    <div className="flex flex-col items-center">
                      <ImageIcon size={40} className="text-gray-400 group-hover:text-green-500 transition-colors mb-2" />
                      <span className="text-sm font-bold text-gray-500 dark:text-gray-400">Upload Professional Profile Picture</span>
                      <span className="text-[10px] text-gray-400 mt-1">PNG, JPG up to 5MB</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl flex items-center justify-center gap-3 transition-all ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "shadow-green-500/20 hover:shadow-green-500/40"
                  }`}
                >
                  {isSubmitting ? (
                    <>Processing <Loader2 size={22} className="animate-spin" /></>
                  ) : (
                    <>Submit Application <Send size={22} /></>
                  )}
                </motion.button>

              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default JoinForm;