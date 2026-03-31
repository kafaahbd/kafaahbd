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
                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-medium">
                    {errorMessage}
                  </div>
                )}
                
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
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com" 
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

                  <div className="relative p-8 border-2 border-dashed border-gray-200 dark:border-white/10 rounded-[2rem] text-center hover:border-green-500 transition-colors cursor-pointer group">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      required
                    />
                    <div className="flex flex-col items-center">
                      <ImageIcon size={40} className="text-gray-400 group-hover:text-green-500 transition-colors mb-2" />
                      <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                        {image ? image.name : "Upload Professional Profile Picture"}
                      </span>
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