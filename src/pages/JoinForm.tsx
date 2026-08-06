import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
	Sparkles,
	CheckCircle2,
	Info,
	User,
	ImageIcon,
	BookOpen,
	Code,
	Check,
	Star,
	Briefcase,
	Clock,
	Building,
	Heart,
	Share2,
	ShieldCheck,
	MessageSquare,
	Loader2,
	Send,
	UploadCloud,
	MapPin,
	GraduationCap,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";

const skillsList = [
	"Frontend (React/Next.js)",
	"Backend (Node/Express/Python)",
	"TypeScript",
	"UI/UX Design (Figma)",
	"App Development (Flutter/React Native)",
	"Graphic Design",
	"Content Writing",
	"Video Editing & Animation",
	"SEO Specialist",
	"Digital Marketing",
	"Project Management",
	"Cyber Security",
	"Database Management (PostgreSQL/MongoDB)",
	"QA & Testing",
	"Photo Editing",
	"3D Design / Motion Graphics",
	"Page & Community Management",
	"Islamic Content Creation",
];

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const containerVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

const JoinForm: React.FC = () => {
	const { lang } = useLanguage();
	const isBn = lang === "bn";

	// Step State
	const [currentStep, setCurrentStep] = useState<number>(1);

	// Form States
	const [formData, setFormData] = useState({
		fullNameEn: "",
		email: "",
		phone: "",
		gender: "Male",
		emergencyContact: "",
		dob: "",
		bloodGroup: "",

		presentAddress: {
			village: "",
			union: "",
			thana: "",
			district: "",
			division: "",
			postCode: "",
		},
		permanentAddress: {
			village: "",
			union: "",
			thana: "",
			district: "",
			division: "",
			postCode: "",
		},
		sameAsPresent: false,

		currentEduStatus: "Student",
		highestDegree: "",
		institutionName: "",
		subjectDept: "",
		passingYear: "",
		sscGpa: "",
		hscGpa: "",

		isNotMuslim: false,
		islamicKnowledgeLevel: "Intermediate",
		quranRecitation: "Reading with basic rules",
		madrasaBackground: "No",
		madrasaDetails: "",

		portfolioLink: "",
		yearsOfExp: "",

		primaryRole: "Frontend Developer",
		secondaryRole: "UI/UX Designer",
		preferredDepartment: "Software Engineering",

		workMode: "Remote",
		weeklyHours: "20-30 Hours / Week",
		preferredShift: "Flexible / Output Based",
		availableStartDate: "",

		previousOrg: "",
		pastProjectLinks: "",
		keyAchievements: "",

		whyJoinKafaah: "",
		contributionVision: "",
		twoYearGoal: "",

		linkedin: "",
		facebook: "",
		github: "",
		website: "",
		telegram: "",

		agreedToTerms: false,
		truthDeclaration: false,

		referralSource: "Facebook Page / Group",
		additionalComments: "",
	});

	const [selectedSkills, setSelectedSkills] = useState<string[]>([
		"Frontend (React/Next.js)",
	]);
	const [skillProficiencies, setSkillProficiencies] = useState<
		Record<string, number>
	>({
		"Frontend (React/Next.js)": 4,
	});

	// Files
	const [image, setImage] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [cvFile, setCvFile] = useState<File | null>(null);

	// UI States
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value, type } = e.target;
		if (type === "checkbox") {
			const checked = (e.target as HTMLInputElement).checked;
			setFormData((prev) => ({ ...prev, [name]: checked }));
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleNestedAddressChange = (
		type: "presentAddress" | "permanentAddress",
		field: string,
		value: string,
	) => {
		setFormData((prev) => {
			const updated = { ...prev[type], [field]: value };
			let newPermanent = prev.permanentAddress;
			if (type === "presentAddress" && prev.sameAsPresent) {
				newPermanent = { ...updated };
			}
			return { ...prev, [type]: updated, permanentAddress: newPermanent };
		});
	};

	const handleSameAddressToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const checked = e.target.checked;
		setFormData((prev) => ({
			...prev,
			sameAsPresent: checked,
			permanentAddress: checked
				? { ...prev.presentAddress }
				: prev.permanentAddress,
		}));
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			if (file.size > 5 * 1024 * 1024) {
				setErrorMessage(
					isBn
						? "ছবি সর্বোচ্চ ৫ মেগাবাইট হতে হবে"
						: "Image size must be under 5MB",
				);
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
				setErrorMessage(
					isBn
						? "সিভি ফাইলের আকার সর্বোচ্চ ১০ মেগাবাইট হতে পারবে।"
						: "CV file size must be under 10MB",
				);
				return;
			}
			setCvFile(file);
			setErrorMessage("");
		}
	};

	const toggleSkill = (skill: string) => {
		if (selectedSkills.includes(skill)) {
			setSelectedSkills((prev) => prev.filter((s) => s !== skill));
			const updatedProf = { ...skillProficiencies };
			delete updatedProf[skill];
			setSkillProficiencies(updatedProf);
		} else {
			setSelectedSkills((prev) => [...prev, skill]);
			setSkillProficiencies((prev) => ({ ...prev, [skill]: 3 }));
		}
	};

	const updateSkillProficiency = (skill: string, level: number) => {
		setSkillProficiencies((prev) => ({ ...prev, [skill]: level }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!image) {
			setErrorMessage(
				isBn
					? "অনুগ্রহ করে আপনার প্রোফাইল ছবি আপলোড করুন।"
					: "Please upload a profile picture.",
			);
			return;
		}
		if (selectedSkills.length === 0) {
			setErrorMessage(
				isBn
					? "কমপক্ষে একটি স্কিল নির্বাচন করুন।"
					: "Please select at least one skill.",
			);
			return;
		}
		if (!formData.agreedToTerms || !formData.truthDeclaration) {
			setErrorMessage(
				isBn
					? "আবেদন জমা দেওয়ার পূর্বে শর্তাবলী ও সত্যতা ঘোষণায় সম্মত হন।"
					: "Please agree to terms and truth declaration before submitting.",
			);
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

			if (!response.ok)
				throw new Error(result.error || "Failed to submit application");

			setIsSuccess(true);
			window.scrollTo({ top: 0, behavior: "smooth" });
		} catch (error: any) {
			console.error("Submission error:", error);
			setErrorMessage(error.message || "An unexpected error occurred.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const steps = [
		{
			id: 1,
			label: isBn ? "ব্যক্তিগত ও ঠিকানা" : "Personal & Address",
			icon: User,
		},
		{
			id: 2,
			label: isBn ? "শিক্ষা ও স্কিল" : "Education & Skills",
			icon: Code,
		},
		{
			id: 3,
			label: isBn ? "অভিজ্ঞতা ও ভিশন" : "Work & Vision",
			icon: Briefcase,
		},
		{
			id: 4,
			label: isBn ? "ঘোষণা ও জমা" : "Declaration & Submit",
			icon: ShieldCheck,
		},
	];

	return (
		<>
			<SEO
				title={isBn ? "আবেদন ফরম | কাফআহ" : "Application Form | Kafa'ah"}
				description="Join Team Kafa'ah - Official Join & Recruitment Form"
				url="/join"
				image="https://kafaahbd.com/join-cover.jpg"
				breadcrumbs={[
					{ name: isBn ? "আবেদন ফরম" : "Application Form", url: "/join" },
				]}
			/>

			<div className="min-h-screen relative bg-[#f8fafc] dark:bg-[#060a0f] text-slate-800 dark:text-slate-100 transition-colors duration-500 font-sans pb-24 selection:bg-emerald-500 selection:text-white">
				<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
					<div className="absolute top-0 right-1/4 w-[45vw] h-[45vw] bg-emerald-500/10 dark:bg-emerald-600/10 blur-[130px] rounded-full animate-pulse" />
					<div className="absolute top-1/3 left-[-5%] w-[40vw] h-[40vw] bg-teal-500/10 dark:bg-teal-600/10 blur-[120px] rounded-full" />
					<div className="absolute bottom-10 right-[-5%] w-[35vw] h-[35vw] bg-cyan-500/10 dark:bg-cyan-600/10 blur-[130px] rounded-full" />
				</div>

				<div className="relative z-10 pt-6 px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
					<header className="flex flex-wrap gap-4 justify-between items-center bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-xl p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
						<Breadcrumb
							items={[{ name: isBn ? "আবেদন ফরম" : "Join Application Form" }]}
						/>
						<span className="text-xs font-semibold px-3.5 py-1.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-full border border-emerald-500/20 flex items-center gap-2">
							<span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
							{isBn
								? "অফিসিয়াল রিক্রুটমেন্ট পোর্টাল"
								: "Official Recruitment Portal"}
						</span>
					</header>

					<div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden border border-emerald-800/40">
						<div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
						<div className="relative z-10 space-y-3">
							<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-white/10">
								<Sparkles size={14} className="text-amber-300" />
								{isBn
									? "টিম কাফআহ রিক্রুটমেন্ট ২০২৬"
									: "Team Kafa'ah Recruitment 2026"}
							</div>
							<h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
								{isBn ? "কাফআহ টিমে যোগ দেওয়ার আবেদন" : "Join Team Kafa'ah"}
							</h1>
							<p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
								{isBn
									? "আপনার পেশাগত ও সুন্নাহমুখী দক্ষতার মাধ্যমে গড়ে তুলুন শক্তিশালী ইসলামিক প্রযুক্তি প্ল্যাটফর্ম।"
									: "Empower Islamic Technology with your technical & creative skills. Fill out the application form below."}
							</p>
						</div>
					</div>

					<AnimatePresence mode="wait">
						{isSuccess ? (
							<motion.div
								key="success"
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								className="bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-8 md:p-14 text-center max-w-xl mx-auto shadow-2xl space-y-6"
							>
								<div className="w-20 h-20 bg-emerald-500 text-white rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/30">
									<CheckCircle2 size={44} />
								</div>
								<div className="space-y-2">
									<h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
										{isBn
											? "আবেদন সফলভাবে জমা হয়েছে!"
											: "Application Submitted!"}
									</h2>
									<p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
										{isBn
											? "আপনার আবেদনপত্র টিমে গৃহীত হয়েছে। শর্টলিস্ট করা হলে আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।"
											: "Thank you for applying to Team Kafa'ah! Our recruitment panel will review your application."}
									</p>
								</div>
								<button
									onClick={() => {
										setIsSuccess(false);
										window.location.reload();
									}}
									className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-600/30"
								>
									{isBn ? "নতুন আবেদন করুন" : "Submit Another Application"}
								</button>
							</motion.div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-8">
								<div className="bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-xl p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
									<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
										{steps.map((step) => {
											const Icon = step.icon;
											const isActive = currentStep === step.id;
											const isCompleted = currentStep > step.id;
											return (
												<button
													key={step.id}
													type="button"
													onClick={() => setCurrentStep(step.id)}
													className={`flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
														isActive
															? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
															: isCompleted
																? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
																: "bg-slate-100/50 dark:bg-white/5 text-slate-400"
													}`}
												>
													<div
														className={`p-2 rounded-lg ${isActive ? "bg-white/20 text-white" : "bg-transparent"}`}
													>
														<Icon size={18} />
													</div>
													<div className="hidden sm:block">
														<div className="text-[10px] uppercase font-bold tracking-wider opacity-75">
															{isBn ? `ধাপ 0${step.id}` : `Step 0${step.id}`}
														</div>
														<div className="text-xs font-bold truncate">
															{step.label}
														</div>
													</div>
												</button>
											);
										})}
									</div>
								</div>

								{errorMessage && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										className="p-4 bg-rose-500/10 border border-rose-500/30 backdrop-blur-md rounded-2xl text-rose-600 dark:text-rose-400 text-sm font-semibold flex items-center gap-3"
									>
										<Info size={20} className="shrink-0 text-rose-500" />
										{errorMessage}
									</motion.div>
								)}

								{/* STEP 1 */}
								{currentStep === 1 && (
									<motion.div
										key="step1"
										variants={containerVariants}
										initial="hidden"
										animate="visible"
										exit="hidden"
										className="space-y-8"
									>
										<SectionCard
											icon={User}
											title={
												isBn
													? "১. ব্যক্তিগত মৌলিক তথ্য"
													: "1. Basic Information"
											}
											subtitle={
												isBn
													? "আপনার পরিচয় ও যোগাযোগের তথ্য"
													: "Provide identity & contact details"
											}
										>
											<div className="grid md:grid-cols-2 gap-5">
												<InputField
													label={isBn ? "পূর্ণ নাম *" : "Full Name *"}
													name="fullNameEn"
													value={formData.fullNameEn}
													onChange={handleInputChange}
													required
													placeholder={
														isBn
															? "যেমন: আবদুল্লাহ আল মামুন"
															: "e.g. Abdullah Al Mamun"
													}
													className="md:col-span-2"
												/>
												<InputField
													label={isBn ? "ইমেইল ঠিকানা *" : "Email Address *"}
													type="email"
													name="email"
													value={formData.email}
													onChange={handleInputChange}
													required
													placeholder="abdullah@example.com"
												/>
												<InputField
													label={
														isBn
															? "ফোন ও হোয়াটসঅ্যাপ নম্বর *"
															: "Phone / WhatsApp Number *"
													}
													type="tel"
													name="phone"
													value={formData.phone}
													onChange={handleInputChange}
													required
													placeholder="01700000000"
												/>

												<SelectField
													label={isBn ? "লিঙ্গ *" : "Gender *"}
													name="gender"
													value={formData.gender}
													onChange={handleInputChange}
													required
												>
													<option value="Male">
														{isBn ? "পুরুষ" : "Male"}
													</option>
													<option value="Female">
														{isBn ? "নারী" : "Female"}
													</option>
													<option value="Other">
														{isBn ? "অন্যান্য" : "Other"}
													</option>
												</SelectField>

												<InputField
													label={isBn ? "জন্ম তারিখ *" : "Date of Birth *"}
													type="date"
													name="dob"
													value={formData.dob}
													onChange={handleInputChange}
													required
												/>
												<InputField
													label={isBn ? "জরুরি যোগাযোগ" : "Emergency Contact"}
													name="emergencyContact"
													value={formData.emergencyContact}
													onChange={handleInputChange}
													placeholder={
														isBn
															? "অভিভাবক: ০১৮০০০০০... (ঐচ্ছিক)"
															: "Guardian: 01800000000 (Optional)"
													}
												/>

												<SelectField
													label={isBn ? "রক্তের গ্রুপ" : "Blood Group"}
													name="bloodGroup"
													value={formData.bloodGroup}
													onChange={handleInputChange}
												>
													<option value="">
														{isBn
															? "-- নির্বাচন করুন (ঐচ্ছিক) --"
															: "-- Select (Optional) --"}
													</option>
													{bloodGroups.map((bg) => (
														<option key={bg} value={bg}>
															{bg}
														</option>
													))}
												</SelectField>

												<div className="space-y-2 md:col-span-2">
													<label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
														{isBn ? "প্রোফাইল ছবি *" : "Profile Picture *"}
													</label>
													<div className="border-2 border-dashed border-slate-200 dark:border-white/10 hover:border-emerald-500 rounded-2xl p-4 bg-slate-50/50 dark:bg-white/5 flex flex-col sm:flex-row items-center gap-4 transition-all">
														{imagePreview ? (
															<img
																src={imagePreview}
																alt="Preview"
																className="w-16 h-16 rounded-xl object-cover border border-emerald-500"
															/>
														) : (
															<div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center shrink-0">
																<ImageIcon size={24} />
															</div>
														)}
														<div className="flex-1 text-center sm:text-left space-y-1">
															<p className="text-xs font-semibold">
																{isBn
																	? "ছবি নির্বাচন করুন (PNG/JPG, সর্বোচ্চ 5MB)"
																	: "Upload profile photo (PNG/JPG, max 5MB)"}
															</p>
															<input
																type="file"
																accept="image/*"
																onChange={handleImageChange}
																className="text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:bg-emerald-600 file:text-white hover:file:bg-emerald-500 cursor-pointer"
															/>
														</div>
													</div>
												</div>

												<div className="space-y-2 md:col-span-2">
													<label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
														{isBn
															? "সিভি / রেজুমে আপলোড করুন (PDF) *"
															: "Upload CV / Resume (PDF) *"}
													</label>
													<div className="border-2 border-dashed border-slate-200 dark:border-white/10 hover:border-teal-500 rounded-2xl p-4 bg-slate-50/50 dark:bg-white/5 flex flex-col sm:flex-row items-center gap-4 transition-all">
														<div className="w-12 h-12 bg-teal-500/10 text-teal-500 rounded-xl flex items-center justify-center shrink-0">
															<UploadCloud size={24} />
														</div>
														<div className="flex-1 text-center sm:text-left space-y-1">
															<p className="text-xs font-semibold truncate">
																{cvFile
																	? cvFile.name
																	: isBn
																		? "PDF বা DOCX ফাইল সিলেক্ট করুন"
																		: "Upload your resume file (Max 10MB)"}
															</p>
															<input
																type="file"
																accept=".pdf,.doc,.docx"
																onChange={handleCvChange}
																className="text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:bg-teal-600 file:text-white hover:file:bg-teal-500 cursor-pointer"
															/>
														</div>
													</div>
												</div>
											</div>
										</SectionCard>

										<SectionCard
											icon={MapPin}
											title={
												isBn ? "২. ঠিকানা সংক্রান্ত তথ্য" : "2. Address Details"
											}
											subtitle={
												isBn
													? "বর্তমান ও স্থায়ী ঠিকানা"
													: "Present & Permanent Address Details"
											}
										>
											<div className="space-y-6">
												<span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">
													{isBn ? "বর্তমান ঠিকানা" : "Present Address"}
												</span>
												<div className="grid md:grid-cols-3 gap-4">
													<InputField
														placeholder={
															isBn
																? "বাড়ি / গ্রাম / রোড *"
																: "House / Village / Road *"
														}
														value={formData.presentAddress.village}
														onChange={(e) =>
															handleNestedAddressChange(
																"presentAddress",
																"village",
																e.target.value,
															)
														}
														required
													/>
													<InputField
														placeholder={
															isBn
																? "ইউনিয়ন / ওয়ার্ড নম্বর *"
																: "Union / Ward No *"
														}
														value={formData.presentAddress.union}
														onChange={(e) =>
															handleNestedAddressChange(
																"presentAddress",
																"union",
																e.target.value,
															)
														}
														required
													/>
													<InputField
														placeholder={
															isBn ? "থানা / উপজেলা *" : "Thana / Upazila *"
														}
														value={formData.presentAddress.thana}
														onChange={(e) =>
															handleNestedAddressChange(
																"presentAddress",
																"thana",
																e.target.value,
															)
														}
														required
													/>
													<InputField
														placeholder={isBn ? "জেলা *" : "District *"}
														value={formData.presentAddress.district}
														onChange={(e) =>
															handleNestedAddressChange(
																"presentAddress",
																"district",
																e.target.value,
															)
														}
														required
													/>
													<InputField
														placeholder={isBn ? "বিভাগ *" : "Division *"}
														value={formData.presentAddress.division}
														onChange={(e) =>
															handleNestedAddressChange(
																"presentAddress",
																"division",
																e.target.value,
															)
														}
														required
													/>
													<InputField
														placeholder={isBn ? "পোস্ট কোড *" : "Post Code *"}
														value={formData.presentAddress.postCode}
														onChange={(e) =>
															handleNestedAddressChange(
																"presentAddress",
																"postCode",
																e.target.value,
															)
														}
														required
													/>
												</div>

												<div className="flex items-center gap-3 pt-2">
													<input
														type="checkbox"
														id="sameAsPresent"
														checked={formData.sameAsPresent}
														onChange={handleSameAddressToggle}
														className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 cursor-pointer"
													/>
													<label
														htmlFor="sameAsPresent"
														className="text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer select-none"
													>
														{isBn
															? "স্থায়ী ঠিকানা বর্তমান ঠিকানার অনুরূপ"
															: "Permanent address same as present address"}
													</label>
												</div>

												{!formData.sameAsPresent && (
													<div className="space-y-4 pt-2">
														<span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">
															{isBn ? "স্থায়ী ঠিকানা" : "Permanent Address"}
														</span>
														<div className="grid md:grid-cols-3 gap-4">
															<InputField
																placeholder={
																	isBn
																		? "বাড়ি / গ্রাম / রোড *"
																		: "House / Village / Road *"
																}
																value={formData.permanentAddress.village}
																onChange={(e) =>
																	handleNestedAddressChange(
																		"permanentAddress",
																		"village",
																		e.target.value,
																	)
																}
																required
															/>
															<InputField
																placeholder={
																	isBn
																		? "ইউনিয়ন / ওয়ার্ড নম্বর *"
																		: "Union / Ward No *"
																}
																value={formData.permanentAddress.union}
																onChange={(e) =>
																	handleNestedAddressChange(
																		"permanentAddress",
																		"union",
																		e.target.value,
																	)
																}
																required
															/>
															<InputField
																placeholder={
																	isBn ? "থানা / উপজেলা *" : "Thana / Upazila *"
																}
																value={formData.permanentAddress.thana}
																onChange={(e) =>
																	handleNestedAddressChange(
																		"permanentAddress",
																		"thana",
																		e.target.value,
																	)
																}
																required
															/>
															<InputField
																placeholder={isBn ? "জেলা *" : "District *"}
																value={formData.permanentAddress.district}
																onChange={(e) =>
																	handleNestedAddressChange(
																		"permanentAddress",
																		"district",
																		e.target.value,
																	)
																}
																required
															/>
															<InputField
																placeholder={isBn ? "বিভাগ *" : "Division *"}
																value={formData.permanentAddress.division}
																onChange={(e) =>
																	handleNestedAddressChange(
																		"permanentAddress",
																		"division",
																		e.target.value,
																	)
																}
																required
															/>
															<InputField
																placeholder={
																	isBn ? "পোস্ট কোড *" : "Post Code *"
																}
																value={formData.permanentAddress.postCode}
																onChange={(e) =>
																	handleNestedAddressChange(
																		"permanentAddress",
																		"postCode",
																		e.target.value,
																	)
																}
																required
															/>
														</div>
													</div>
												)}
											</div>
										</SectionCard>
									</motion.div>
								)}

								{/* STEP 2 */}
								{currentStep === 2 && (
									<motion.div
										key="step2"
										variants={containerVariants}
										initial="hidden"
										animate="visible"
										exit="hidden"
										className="space-y-8"
									>
										<SectionCard
											icon={GraduationCap}
											title={
												isBn ? "৩. শিক্ষাগত যোগ্যতা" : "3. Academic Background"
											}
											subtitle={
												isBn
													? "আপনার সর্বশেষ শিক্ষাগত তথ্য"
													: "Academic qualification & details"
											}
										>
											<div className="grid md:grid-cols-2 gap-5">
												<SelectField
													label={isBn ? "বর্তমান অবস্থা *" : "Current Status *"}
													name="currentEduStatus"
													value={formData.currentEduStatus}
													onChange={handleInputChange}
												>
													<option value="Student">
														{isBn ? "শিক্ষার্থী (Student)" : "Student"}
													</option>
													<option value="Graduated">
														{isBn
															? "গ্র্যাজুয়েট / চাকুরিজীবী"
															: "Graduated / Employed"}
													</option>
													<option value="Job Seeker">
														{isBn ? "চাকুরিপ্রার্থী" : "Job Seeker"}
													</option>
													<option value="Freelancer">
														{isBn ? "ফ্রিল্যান্সার" : "Freelancer"}
													</option>
												</SelectField>

												<InputField
													label={
														isBn
															? "সর্বোচ্চ ডিগ্রি *"
															: "Highest Qualification *"
													}
													name="highestDegree"
													value={formData.highestDegree}
													onChange={handleInputChange}
													required
													placeholder="e.g. B.Sc in CSE / Diploma"
												/>
												<InputField
													label={
														isBn ? "প্রতিষ্ঠানের নাম *" : "Institution Name *"
													}
													name="institutionName"
													value={formData.institutionName}
													onChange={handleInputChange}
													required
													placeholder="University / College Name"
												/>
												<InputField
													label={
														isBn ? "বিভাগ / বিষয় *" : "Department / Subject *"
													}
													name="subjectDept"
													value={formData.subjectDept}
													onChange={handleInputChange}
													required
													placeholder="Computer Science / Economics"
												/>
												<InputField
													label={isBn ? "পাশের সাল *" : "Passing Year *"}
													name="passingYear"
													value={formData.passingYear}
													onChange={handleInputChange}
													required
													placeholder="2025"
												/>
												<InputField
													label={
														isBn
															? "এসএসসি জিপিএ ও বোর্ড *"
															: "SSC GPA / Board *"
													}
													name="sscGpa"
													value={formData.sscGpa}
													onChange={handleInputChange}
													required
													placeholder="5.00 (Dhaka Board)"
												/>
												<InputField
													label={
														isBn
															? "এইচএসসি জিপিএ ও বোর্ড *"
															: "HSC GPA / Board *"
													}
													name="hscGpa"
													value={formData.hscGpa}
													onChange={handleInputChange}
													required
													placeholder="5.00 (Dhaka Board)"
													className="md:col-span-2"
												/>
											</div>
										</SectionCard>

										<SectionCard
											icon={BookOpen}
											title={
												isBn
													? "৪. ইসলামিক জ্ঞান ও মূল্যবোধ"
													: "4. Islamic Knowledge & Ethics"
											}
											subtitle={
												isBn
													? "দ্বীনি বুঝ ও শালীনতা"
													: "Islamic understanding & alignment"
											}
										>
											<div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-between gap-4 mb-4">
												<div>
													<h4 className="text-xs font-bold text-amber-800 dark:text-amber-300">
														{isBn
															? "আপনি কি অমুসলিম আবেদনকারী?"
															: "Are you a non-Muslim applicant?"}
													</h4>
													<p className="text-[11px] text-amber-700/80 dark:text-amber-400/80">
														{isBn
															? "চিহ্নিত করলে ইসলামিক প্রশ্নসমূহ বাদ যাবে।"
															: "Selecting this skips Islamic knowledge questions."}
													</p>
												</div>
												<input
													type="checkbox"
													name="isNotMuslim"
													checked={formData.isNotMuslim}
													onChange={handleInputChange}
													className="w-5 h-5 text-amber-600 rounded border-amber-400 cursor-pointer"
												/>
											</div>

											{!formData.isNotMuslim && (
												<div className="grid md:grid-cols-2 gap-5">
													<SelectField
														label={
															isBn
																? "ইসলামিক জ্ঞানের মাত্রা *"
																: "Islamic Knowledge Level *"
														}
														name="islamicKnowledgeLevel"
														value={formData.islamicKnowledgeLevel}
														onChange={handleInputChange}
													>
														<option value="Basic">
															{isBn ? "প্রাথমিক (Basic)" : "Basic"}
														</option>
														<option value="Intermediate">
															{isBn ? "মাঝারি (Intermediate)" : "Intermediate"}
														</option>
														<option value="Advanced">
															{isBn ? "উন্নত (Advanced)" : "Advanced"}
														</option>
													</SelectField>

													<SelectField
														label={
															isBn ? "কুরআন তিলাওয়াত *" : "Quran Recitation *"
														}
														name="quranRecitation"
														value={formData.quranRecitation}
														onChange={handleInputChange}
													>
														<option value="Fluent with Tajweed">
															{isBn
																? "সহীহ তিলাওয়াত (Fluent with Tajweed)"
																: "Fluent with Tajweed"}
														</option>
														<option value="Reading with basic rules">
															{isBn
																? "সাধারণ পড়া (Basic Reading)"
																: "Reading with basic rules"}
														</option>
														<option value="Currently Learning">
															{isBn ? "শিখছি (Learning)" : "Currently Learning"}
														</option>
													</SelectField>

													<SelectField
														label={
															isBn
																? "মাদরাসা ব্যাকগ্রাউন্ড?"
																: "Madrasa Background?"
														}
														name="madrasaBackground"
														value={formData.madrasaBackground}
														onChange={handleInputChange}
													>
														<option value="No">
															{isBn ? "না (General Education)" : "No"}
														</option>
														<option value="Yes - Qawmi">
															{isBn ? "হ্যাঁ - কওমী" : "Yes - Qawmi"}
														</option>
														<option value="Yes - Alia">
															{isBn ? "হ্যাঁ - আলিয়া" : "Yes - Alia"}
														</option>
														<option value="Yes - Short Course">
															{isBn
																? "হ্যাঁ - শর্ট কোর্স"
																: "Yes - Short Course"}
														</option>
													</SelectField>

													<InputField
														label={
															isBn
																? "মাদরাসা / কোর্স বিবরণ"
																: "Madrasa / Course Details"
														}
														name="madrasaDetails"
														value={formData.madrasaDetails}
														onChange={handleInputChange}
														placeholder="e.g. Diploma in Shariah"
													/>
												</div>
											)}
										</SectionCard>

										<SectionCard
											icon={Code}
											title={
												isBn
													? "৫. টেকনিক্যাল স্কিলস"
													: "5. Technical Skills & Proficiency"
											}
											subtitle={
												isBn
													? "আপনার স্কিলসমূহ নির্বাচন ও রেটিং দিন"
													: "Select skills & rate proficiency"
											}
										>
											<div className="space-y-4">
												<div className="flex flex-wrap gap-2">
													{skillsList.map((skill) => {
														const isSelected = selectedSkills.includes(skill);
														return (
															<button
																key={skill}
																type="button"
																onClick={() => toggleSkill(skill)}
																className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
																	isSelected
																		? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
																		: "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-emerald-500/10"
																}`}
															>
																{isSelected && <Check size={14} />}
																{skill}
															</button>
														);
													})}
												</div>

												{selectedSkills.length > 0 && (
													<div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-3">
														<span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">
															{isBn
																? "স্কিল প্রফিসিয়েন্সি (১ - ৫ স্টার):"
																: "Set Skill Proficiency Level (1 to 5 Stars):"}
														</span>
														<div className="grid md:grid-cols-2 gap-3">
															{selectedSkills.map((skill) => (
																<div
																	key={skill}
																	className="flex items-center justify-between p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200/50 dark:border-white/5"
																>
																	<span className="text-xs font-bold truncate">
																		{skill}
																	</span>
																	<div className="flex gap-1">
																		{[1, 2, 3, 4, 5].map((star) => (
																			<button
																				key={star}
																				type="button"
																				onClick={() =>
																					updateSkillProficiency(skill, star)
																				}
																				className="hover:scale-110 transition-transform"
																			>
																				<Star
																					size={14}
																					className={
																						star <=
																						(skillProficiencies[skill] || 3)
																							? "fill-amber-400 text-amber-400"
																							: "text-slate-300 dark:text-slate-600"
																					}
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
													<InputField
														label={
															isBn
																? "পোর্টফোলিও / গিটহাব লিঙ্ক"
																: "Portfolio / GitHub Link"
														}
														type="url"
														name="portfolioLink"
														value={formData.portfolioLink}
														onChange={handleInputChange}
														placeholder="https://github.com/username"
													/>
													<InputField
														label={
															isBn ? "অভিজ্ঞতার বছর" : "Years of Experience"
														}
														name="yearsOfExp"
														value={formData.yearsOfExp}
														onChange={handleInputChange}
														placeholder="e.g. 2 Years"
													/>
												</div>
											</div>
										</SectionCard>
									</motion.div>
								)}

								{/* STEP 3 */}
								{currentStep === 3 && (
									<motion.div
										key="step3"
										variants={containerVariants}
										initial="hidden"
										animate="visible"
										exit="hidden"
										className="space-y-8"
									>
										<SectionCard
											icon={Briefcase}
											title={
												isBn
													? "৬. পছন্দের পদ ও বিভাগ"
													: "6. Preferred Role & Department"
											}
											subtitle={
												isBn
													? "আপনার পছন্দের কাজের পদ"
													: "Roles and department choices"
											}
										>
											<div className="grid md:grid-cols-3 gap-5">
												<InputField
													label={
														isBn ? "প্রধান পদ *" : "Primary Role Applied For *"
													}
													name="primaryRole"
													value={formData.primaryRole}
													onChange={handleInputChange}
													required
													placeholder="e.g. React Developer"
												/>
												<InputField
													label={isBn ? "দ্বিতীয় পছন্দের পদ" : "Secondary Role"}
													name="secondaryRole"
													value={formData.secondaryRole}
													onChange={handleInputChange}
													placeholder="e.g. UI Designer"
												/>
												<SelectField
													label={
														isBn
															? "পছন্দের ডিপার্টমেন্ট *"
															: "Preferred Department *"
													}
													name="preferredDepartment"
													value={formData.preferredDepartment}
													onChange={handleInputChange}
												>
													<option value="Software Engineering">
														{isBn
															? "সফটওয়্যার ইঞ্জিনিয়ারিং"
															: "Software Engineering"}
													</option>
													<option value="Creative & Design">
														{isBn ? "ক্রিয়েটিভ ও ডিজাইন" : "Creative & Design"}
													</option>
													<option value="Media & Content">
														{isBn ? "মিডিয়া ও কন্টেন্ট" : "Media & Content"}
													</option>
													<option value="Operations & Management">
														{isBn ? "অপারেশনস" : "Operations & Management"}
													</option>
												</SelectField>
											</div>
										</SectionCard>

										<SectionCard
											icon={Clock}
											title={
												isBn
													? "৭. কাজের সময়িক সহজলভ্যতা"
													: "7. Work Preference & Availability"
											}
											subtitle={
												isBn
													? "আপনার কাজের ধরণ ও শিফট"
													: "Availability and work mode preferences"
											}
										>
											<div className="grid md:grid-cols-2 gap-5">
												<SelectField
													label={isBn ? "কাজের ধরণ *" : "Work Mode *"}
													name="workMode"
													value={formData.workMode}
													onChange={handleInputChange}
												>
													<option value="Remote">Remote</option>
													<option value="Hybrid">Hybrid</option>
													<option value="Onsite">Onsite</option>
												</SelectField>

												<SelectField
													label={
														isBn
															? "সাপ্তাহিক সহজলভ্য সময় *"
															: "Weekly Available Hours *"
													}
													name="weeklyHours"
													value={formData.weeklyHours}
													onChange={handleInputChange}
												>
													<option value="10-20 Hours / Week">
														10-20 Hours / Week
													</option>
													<option value="20-30 Hours / Week">
														20-30 Hours / Week
													</option>
													<option value="30-40 Hours / Week">
														30-40 Hours / Week
													</option>
													<option value="40+ Hours (Full Time)">
														40+ Hours (Full Time)
													</option>
												</SelectField>

												<SelectField
													label={isBn ? "পছন্দের শিফট *" : "Preferred Shift *"}
													name="preferredShift"
													value={formData.preferredShift}
													onChange={handleInputChange}
												>
													<option value="Morning Shift">Morning Shift</option>
													<option value="Evening Shift">Evening Shift</option>
													<option value="Night Shift">Night Shift</option>
												</SelectField>

												<InputField
													label={
														isBn
															? "সম্ভাব্য যোগদানের তারিখ *"
															: "Earliest Joining Date *"
													}
													type="date"
													name="availableStartDate"
													value={formData.availableStartDate}
													onChange={handleInputChange}
													required
												/>
											</div>
										</SectionCard>

										<SectionCard
											icon={Building}
											title={
												isBn
													? "৮. পূর্ববর্তী অভিজ্ঞতা ও প্রজেক্ট"
													: "8. Previous Experience & Projects"
											}
											subtitle={
												isBn
													? "পূর্ববর্তী প্রতিষ্ঠানের কাজের বিবরণ"
													: "Past organization and key achievements"
											}
										>
											<div className="space-y-4">
												<InputField
													label={
														isBn
															? "পূর্ববর্তী প্রতিষ্ঠান *"
															: "Previous Organization *"
													}
													name="previousOrg"
													value={formData.previousOrg}
													onChange={handleInputChange}
													required
													placeholder="Company name or Freelance"
												/>
												<TextAreaField
													label={
														isBn
															? "প্রজেক্ট লিঙ্ক ও বিবরণ *"
															: "Past Project Links / Description *"
													}
													name="pastProjectLinks"
													value={formData.pastProjectLinks}
													onChange={handleInputChange}
													required
													rows={3}
													placeholder="Links or short description of 2-3 live projects..."
												/>
												<TextAreaField
													label={isBn ? "বিশেষ অর্জন" : "Key Achievements"}
													name="keyAchievements"
													value={formData.keyAchievements}
													onChange={handleInputChange}
													rows={2}
													placeholder="e.g. Managed 50k Facebook group..."
												/>
											</div>
										</SectionCard>

										<SectionCard
											icon={Heart}
											title={
												isBn ? "৯. উদ্দেশ্য ও ভিশন" : "9. Motivation & Vision"
											}
											subtitle={
												isBn
													? "কাফআহে যুক্ত হওয়ার লক্ষ্য"
													: "Why you want to join and future roadmap"
											}
										>
											<div className="space-y-4">
												<TextAreaField
													label={
														isBn
															? "কেন কাফআহ টিমে যোগ দিতে চান? *"
															: "Why do you want to join Team Kafa'ah? *"
													}
													name="whyJoinKafaah"
													value={formData.whyJoinKafaah}
													onChange={handleInputChange}
													required
													rows={3}
													placeholder="Share your motivation..."
												/>
												<TextAreaField
													label={
														isBn
															? "কাফআহের ভিশনে কীভাবে ভূমিকা রাখবেন? *"
															: "How will you contribute to Kafa'ah's Vision? *"
													}
													name="contributionVision"
													value={formData.contributionVision}
													onChange={handleInputChange}
													required
													rows={3}
													placeholder="Explain how your skills match..."
												/>
												<InputField
													label={
														isBn
															? "আগামী ২ বছরে নিজেকে কোথায় দেখতে চান?"
															: "Where do you see yourself in 2 years?"
													}
													name="twoYearGoal"
													value={formData.twoYearGoal}
													onChange={handleInputChange}
													placeholder="e.g. Lead Frontend Developer"
												/>
											</div>
										</SectionCard>
									</motion.div>
								)}

								{/* STEP 4 */}
								{currentStep === 4 && (
									<motion.div
										key="step4"
										variants={containerVariants}
										initial="hidden"
										animate="visible"
										exit="hidden"
										className="space-y-8"
									>
										<SectionCard
											icon={Share2}
											title={isBn ? "১০. সোশ্যাল লিঙ্ক" : "10. Social Links"}
											subtitle={
												isBn
													? "আপনার লিঙ্কডইন, গিটহাব প্রোফাইল"
													: "LinkedIn, Facebook, GitHub URLs"
											}
										>
											<div className="grid md:grid-cols-2 gap-5">
												<InputField
													label="LinkedIn"
													type="url"
													name="linkedin"
													value={formData.linkedin}
													onChange={handleInputChange}
													placeholder="https://linkedin.com/in/username"
												/>
												<InputField
													label="Facebook"
													type="url"
													name="facebook"
													value={formData.facebook}
													onChange={handleInputChange}
													placeholder="https://facebook.com/username"
												/>
												<InputField
													label="GitHub"
													type="url"
													name="github"
													value={formData.github}
													onChange={handleInputChange}
													placeholder="https://github.com/username"
												/>
												<InputField
													label="Website / Blog"
													type="url"
													name="website"
													value={formData.website}
													onChange={handleInputChange}
													placeholder="https://yourwebsite.com"
												/>
											</div>
										</SectionCard>

										<SectionCard
											icon={MessageSquare}
											title={
												isBn
													? "১১. রেফারেল ও মন্তব্য"
													: "11. Referral & Comments"
											}
											subtitle={
												isBn
													? "কীভাবে আমাদের সম্পর্কে জানতে পারলেন"
													: "How you heard about us & final notes"
											}
										>
											<div className="grid md:grid-cols-2 gap-5">
												<SelectField
													label={
														isBn
															? "কীভাবে জানতে পেরেছেন? *"
															: "How did you hear about us? *"
													}
													name="referralSource"
													value={formData.referralSource}
													onChange={handleInputChange}
												>
													<option value="Facebook Page / Group">
														Facebook Page / Group
													</option>
													<option value="LinkedIn">LinkedIn</option>
													<option value="Friend / Referral">
														Friend / Referral
													</option>
													<option value="Kafa'ah Website">
														Kafa'ah Website
													</option>
												</SelectField>
												<TextAreaField
													label={
														isBn ? "অতিরিক্ত মন্তব্য" : "Additional Comments"
													}
													name="additionalComments"
													value={formData.additionalComments}
													onChange={handleInputChange}
													rows={3}
													placeholder="Any questions or notes..."
													className="md:col-span-2"
												/>
											</div>
										</SectionCard>

										<SectionCard
											icon={ShieldCheck}
											title={
												isBn
													? "১২. শর্তাবলী ও অঙ্গীকারনামা"
													: "12. Terms & Declaration"
											}
											subtitle={
												isBn
													? "নীতিমালা ও সততা ঘোষণা"
													: "Official code of conduct & honesty pledge"
											}
										>
											<div className="space-y-4">
												<div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-xs space-y-2">
													<p className="font-bold text-emerald-800 dark:text-emerald-300">
														{isBn
															? "কাফআহ কোড অফ কন্ডাক্ট:"
															: "Team Kafa'ah Code of Conduct:"}
													</p>
													<ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
														<li>
															{isBn
																? "ইসলামিক শরীয়াহ নীতি ও শালীনতা বজায় রাখতে হবে।"
																: "Adhere to Islamic Shariah values & professional ethics."}
														</li>
														<li>
															{isBn
																? "প্রদানকৃত সকল তথ্য সত্য হতে হবে।"
																: "All provided information must be completely accurate."}
														</li>
													</ul>
												</div>

												<div className="space-y-3 pt-2">
													<label className="flex items-start gap-3 cursor-pointer">
														<input
															type="checkbox"
															name="agreedToTerms"
															checked={formData.agreedToTerms}
															onChange={handleInputChange}
															required
															className="mt-1 w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
														/>
														<span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
															{isBn
																? "আমি কাফআহের সকল নিয়মকানুন ও শালীনতার নীতিমালা মেনে চলতে সম্মত।"
																: "I agree to Team Kafa'ah's Code of Conduct and Ethical principles."}
														</span>
													</label>

													<label className="flex items-start gap-3 cursor-pointer">
														<input
															type="checkbox"
															name="truthDeclaration"
															checked={formData.truthDeclaration}
															onChange={handleInputChange}
															required
															className="mt-1 w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
														/>
														<span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
															{isBn
																? "আমি ঘোষণা করছি যে উপরে প্রদত্ত সকল তথ্য সম্পূর্ণ সত্য ও সঠিক।"
																: "I solemnly declare that all supplied information above is true."}
														</span>
													</label>
												</div>
											</div>
										</SectionCard>
									</motion.div>
								)}

								{/* Form Navigation Controls */}
								<div className="flex items-center justify-between gap-4 pt-4">
									{currentStep > 1 ? (
										<button
											type="button"
											onClick={() => setCurrentStep((prev: number) => prev - 1)}
											className="px-6 py-3.5 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 text-slate-700 dark:text-slate-200 rounded-2xl font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
										>
											<ChevronLeft size={18} />
											{isBn ? "পূর্ববর্তী ধাপ" : "Back Step"}
										</button>
									) : (
										<div />
									)}

									{currentStep < 4 ? (
										<button
											type="button"
											onClick={() => setCurrentStep((prev: number) => prev + 1)}
											className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/20 cursor-pointer"
										>
											{isBn ? "পরবর্তী ধাপ" : "Next Step"}
											<ChevronRight size={18} />
										</button>
									) : (
										<button
											type="submit"
											disabled={isSubmitting}
											className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-2xl font-black text-base shadow-xl shadow-emerald-600/30 flex items-center gap-3 transition-all disabled:opacity-50 cursor-pointer"
										>
											{isSubmitting ? (
												<>
													<Loader2 size={20} className="animate-spin" />
													<span>{isBn ? "জমা হচ্ছে..." : "Submitting..."}</span>
												</>
											) : (
												<>
													<Send size={18} />
													<span>
														{isBn ? "আবেদন জমা দিন" : "Submit Application"}
													</span>
												</>
											)}
										</button>
									)}
								</div>
							</form>
						)}
					</AnimatePresence>
				</div>
			</div>
		</>
	);
};

/* Helper Components with Full Types */
interface SectionCardProps {
	icon: React.ElementType;
	title: string;
	subtitle: string;
	children: React.ReactNode;
}

function SectionCard({
	icon: Icon,
	title,
	subtitle,
	children,
}: SectionCardProps) {
	return (
		<div className="bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-200/20 dark:shadow-none space-y-6">
			<div className="flex items-center gap-3 border-b border-slate-100 dark:border-white/10 pb-4">
				<div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-600 dark:text-emerald-400">
					<Icon size={22} />
				</div>
				<div>
					<h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
						{title}
					</h2>
					<p className="text-xs text-slate-500 dark:text-slate-400">
						{subtitle}
					</p>
				</div>
			</div>
			{children}
		</div>
	);
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	className?: string;
}

function InputField({ label, className = "", ...props }: InputFieldProps) {
	return (
		<div className={`space-y-1.5 ${className}`}>
			{label && (
				<label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
					{label}
				</label>
			)}
			<input
				{...props}
				className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-[#161f2c] transition-all outline-none font-medium"
			/>
		</div>
	);
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	className?: string;
	children: React.ReactNode;
}

function SelectField({
	label,
	children,
	className = "",
	...props
}: SelectFieldProps) {
	return (
		<div className={`space-y-1.5 ${className}`}>
			{label && (
				<label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
					{label}
				</label>
			)}
			<select
				{...props}
				className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-[#161f2c] transition-all outline-none font-medium cursor-pointer"
			>
				{children}
			</select>
		</div>
	);
}

interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	className?: string;
}

function TextAreaField({
	label,
	className = "",
	...props
}: TextAreaFieldProps) {
	return (
		<div className={`space-y-1.5 ${className}`}>
			{label && (
				<label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
					{label}
				</label>
			)}
			<textarea
				{...props}
				className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-[#161f2c] transition-all outline-none font-medium resize-none"
			/>
		</div>
	);
}

export default JoinForm;
