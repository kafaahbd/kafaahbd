import React from "react";
import ScrollAnimation from "../components/ScrollAnimation";
import ProgressBar from "../components/ProgressBar";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	BookOpen,
	Languages,
	Library,
	Rocket,
	Layers,
	ArrowRight,
	Pen,
	Sparkles,
} from "lucide-react";
import Latex from "react-latex-next";
import { Link } from "react-router-dom";

interface ProjectItem {
	title: string;
	progress: string;
	desc: string;
	icon: React.ReactNode;
	color: string;
	image: string;
	status: "planned" | "in-progress" | "completed";
	link?: string;
}

const Projects: React.FC = () => {
	const { t, lang } = useLanguage();
	const isBn = lang === "bn";

	const projects: ProjectItem[] = [
		{
			title:
				t("projects.study.title") ||
				(isBn ? "স্টাডি প্রজেক্ট" : "Study Project"),
			progress: "50%",
			desc:
				t("projects.study.desc") ||
				(isBn
					? "আধুনিক শিক্ষা ও প্রযুক্তির সমন্বয়। শিক্ষার্থীদের জন্য সেরা মানের কন্টেন্ট এবং দিকনির্দেশনা।"
					: "Merging modern education with technology. High-quality content and guidance for students."),
			icon: <Library className="w-8 h-8 md:w-9 md:h-9" />,
			color: "from-emerald-500 to-teal-600",
			image:
				"https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/file_00000000ef98720bb731b6bfa446cc1b.png",
			status: "in-progress",
			link: "https://study.kafaahbd.com",
		},
		{
			title:
				t("projects.exam.title") ||
				(isBn ? "কাফাআহ স্মার্ট এক্সাম সিস্টেম" : "Kafaah Smart Exam System"),
			progress: "3%",
			desc:
				t("projects.exam.desc") ||
				(isBn
					? "কোচিং সেন্টার, স্কুল ও প্রতিষ্ঠানের জন্য তৈরি একটি আধুনিক অনলাইন পরীক্ষা প্ল্যাটফর্ম।\n\nএতে রয়েছে লাইভ মনিটরিং, সন্দেহজনক কার্যকলাপ শনাক্তকরণ, অটো সেভ, রিয়েল-টাইম রেজাল্ট এবং স্মার্ট অ্যানালিটিক্স সুবিধা।"
					: "A modern online exam platform built for coaching centers, schools, and organizations.\n\nFeatures include live monitoring, suspicious activity detection, auto-save, real-time results, and smart analytics."),
			icon: <Pen className="w-8 h-8 md:w-9 md:h-9" />,
			color: "from-red-500 to-orange-600",
			image: "",
			status: "in-progress",
			link: "https://exam.kafaahbd.com",
		},
		{
			title:
				t("projects.quran.title") ||
				(isBn ? "কুরআন লার্নিং অ্যাপ" : "Quran Learning App"),
			progress: "0%",
			desc:
				t("projects.quran.desc") ||
				(isBn
					? "সহজে কুরআন শেখার ডিজিটাল প্ল্যাটফর্ম। ইন্টারেক্টিভ মডিউল এবং অডিও সহ।"
					: "Digital platform to learn Quran easily. With interactive modules and audio."),
			icon: <BookOpen className="w-8 h-8 md:w-9 md:h-9" />,
			color: "from-indigo-500 to-purple-600",
			image: "",
			status: "planned",
		},
		{
			title:
				t("projects.english.title") ||
				(isBn ? "ইংলিশ লার্নিং অ্যাপ" : "English Learning App"),
			progress: "0%",
			desc:
				t("projects.english.desc") ||
				(isBn
					? "উম্মাহর জন্য সহজ ইংরেজি শিক্ষা। প্র্যাকটিসের মাধ্যমে নিজের যোগ্যতা বৃদ্ধি।"
					: "Easy English learning for the Ummah. Enhance your skills through practice."),
			icon: <Languages className="w-8 h-8 md:w-9 md:h-9" />,
			color: "from-amber-500 to-orange-600",
			image: "",
			status: "planned",
		},
	];

	return (
		<div className="min-h-screen bg-slate-50 dark:bg-[#030712] transition-colors duration-500 pb-24 font-sans overflow-x-hidden">
			<SEO
				title={isBn ? "প্রকল্পসমূহ" : "Projects"}
				description={
					isBn ? "কাফআহর চলমান প্রকল্পসমূহ।" : "Ongoing projects of Kafa'ah."
				}
				url="/projects"
				image="https://kafaahbd.com/projects-cover.jpg"
				breadcrumbs={[
					{ name: isBn ? "প্রকল্পসমূহ" : "Projects", url: "/projects" },
				]}
			/>

			{/* Header Section */}
			<section className="pt-12 pb-12 md:pt-20 md:pb-24 px-4 relative overflow-hidden">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[160px] rounded-[100%] pointer-events-none" />
				
				<div className="max-w-6xl mx-auto flex flex-col items-center">
					<div className="self-start mb-8 w-full flex justify-center lg:justify-start">
						<Breadcrumb items={[{ name: isBn ? "প্রকল্পসমূহ" : "Projects" }]} />
					</div>

					<ScrollAnimation>
						<div className="text-center lg:text-left w-full flex flex-col items-center lg:items-start">
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-500/20 backdrop-blur-md">
								<Layers size={14} className="animate-pulse" />{" "}
								{isBn ? "আমাদের কর্মযজ্ঞ" : "Innovation Hub"}
							</div>
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight max-w-3xl leading-tight">
								{isBn ? "আমাদের বিশেষ প্রকল্পসমূহ" : "Crafting Impactful Ecosystems"}
							</h1>
							<p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed lg:mr-auto">
								{isBn
									? "প্রযুক্তির সঠিক ব্যবহারের মাধ্যমে আমরা এমন কিছু প্রজেক্ট তৈরি করছি যা ইনশাআল্লাহ মানুষের জীবনকে সহজ এবং বরকতময় করবে।"
									: "Through the strategic leverage of technology, we build solutions engineered to simplify daily routines and enrich the global Ummah, InshaAllah."}
							</p>
						</div>
					</ScrollAnimation>
				</div>
			</section>

			{/* Projects List Container */}
			<div className="max-w-6xl mx-auto px-4 space-y-16 md:space-y-24">
				{projects.map((project, idx) => (
					<ScrollAnimation
						key={idx}
						direction={idx % 2 === 0 ? "left" : "right"}
					>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.6, ease: "easeOut" }}
							className="group relative flex flex-col lg:flex-row bg-white dark:bg-slate-900/40 backdrop-blur-md rounded-[2rem] overflow-hidden border border-slate-200/60 dark:border-slate-800/50 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/[0.05] dark:hover:shadow-emerald-500/[0.02] transition-all duration-500"
						>
							{/* Left/Right Interactive Media Compartment */}
							<div
								className={`w-full lg:w-[45%] h-64 sm:h-72 lg:h-auto min-h-[320px] relative overflow-hidden bg-slate-100 dark:bg-slate-900 ${
									idx % 2 !== 0 ? "lg:order-2" : ""
								}`}
							>
								{project.image ? (
									<>
										<div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500 z-10`} />
										<img
											className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
											src={project.image}
											alt={project.title}
											loading="lazy"
										/>
									</>
								) : (
									/* Modern, Premium Placeholder fallback when no asset image exists */
									<div className={`w-full h-full bg-gradient-to-br ${project.color} relative flex items-center justify-center p-8 overflow-hidden`}>
										<div className="absolute inset-0 bg-[#000]/10 dark:bg-[#000]/30 backdrop-blur-[2px]" />
										<div className="absolute top-0 -left-1/4 w-full h-full bg-white/10 blur-3xl rounded-full transform -rotate-45 pointer-events-none" />
										<motion.div 
											animate={{ y: [0, -10, 0] }}
											transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
											className="relative z-10 text-white/25 dark:text-white/15 transform scale-150"
										>
											{project.icon}
										</motion.div>
									</div>
								)}

								{/* Floating Identity Icon Shield */}
								<div className={`absolute top-6 left-6 z-20 w-14 h-14 bg-gradient-to-br ${project.color} p-[1px] rounded-2xl shadow-xl shadow-black/10`}>
									<div className="w-full h-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl rounded-[15px] flex items-center justify-center text-slate-800 dark:text-white transition-colors duration-500">
										{React.cloneElement(project.icon as React.ReactElement, { className: "w-6 h-6 text-slate-800 dark:text-slate-200" })}
									</div>
								</div>
							</div>

							{/* Creative Copywriting & Metrics Section */}
							<div className="w-full lg:w-[55%] p-6 sm:p-10 lg:p-14 flex flex-col justify-between relative">
								<div>
									{/* Status Pills */}
									<div className="flex items-center gap-3 mb-6">
										<span
											className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-sm ${
												project.status === "in-progress"
													? "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-400"
													: "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:bg-amber-500/5 dark:text-amber-400"
											}`}
										>
											<span className={`w-1.5 h-1.5 rounded-full ${project.status === "in-progress" ? "bg-emerald-500 animate-pulse" : "bg-amber-400"}`} />
											{project.status === "in-progress"
												? (isBn ? "চলমান" : "In Progress")
												: (isBn ? "পরিকল্পিত" : "Planned")}
										</span>
									</div>

									{/* Project Title */}
									<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
										{project.title}
									</h2>

									{/* Processed Description Box */}
									<p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl whitespace-pre-line">
										<Latex>{project.desc}</Latex>
									</p>
								</div>

								{/* Bottom Meta & Functional Footers */}
								<div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
									{/* Custom Interactive Progress Metrics Container */}
									<div className="w-full bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/40">
										<div className="flex justify-between items-center mb-2">
											<span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase">
												{isBn ? "অগ্রগতি" : "Development Progress"}
											</span>
											<span className="text-xs font-bold text-slate-900 dark:text-white bg-slate-200/60 dark:bg-slate-800 px-2 py-0.5 rounded-md">
												{project.progress}
											</span>
										</div>
										<ProgressBar progress={project.progress} />
									</div>

									{/* CTA Dynamic Node Wrapper */}
									<div className="flex justify-between items-center">
										<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase tracking-widest italic opacity-80">
											<Sparkles size={12} className="text-emerald-500/60" />
											In Sha Allah
										</span>

										{project.link ? (
											<a 
												href={project.link} 
												target="_blank" 
												rel="noopener noreferrer"
												aria-label={`Visit ${project.title}`}
												className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 text-slate-600 dark:text-slate-300 hover:text-white dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group/btn group-hover:scale-105"
											>
												<ArrowRight
													size={18}
													className="transform group-hover/btn:-rotate-45 transition-transform duration-300"
												/>
											</a>
										) : (
											<span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-200/40 dark:border-slate-800/20">
												{isBn ? "শীঘ্রই আসছে" : "Coming Soon"}
											</span>
										)}
									</div>
								</div>
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>

			{/* Future Journey Roadmap Module */}
			<section className="max-w-5xl mx-auto px-4 mt-28 md:mt-36">
				<ScrollAnimation>
					<div className="bg-gradient-to-br from-emerald-800 to-teal-950 dark:from-emerald-950/40 dark:to-slate-950 p-8 sm:p-12 md:p-20 rounded-[2.5rem] text-center relative overflow-hidden group border border-emerald-700/30 dark:border-emerald-800/30 shadow-2xl shadow-emerald-950/10">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent opacity-70 pointer-events-none" />

						<Rocket
							className="absolute -left-12 -bottom-12 text-emerald-500/10 dark:text-emerald-500/5 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-1000 ease-out rotate-12 pointer-events-none"
							size={260}
						/>

						<div className="relative z-10 max-w-2xl mx-auto">
							<h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
								{isBn ? "আরো অনেক কিছু আসছে..." : "Unveiling More Soon"}
							</h3>
							<p className="text-emerald-100/80 dark:text-slate-300/90 mb-10 text-base sm:text-lg md:text-xl font-light leading-relaxed">
								{t("projects.more") ||
									(isBn
										? "আমরা উম্মাহর সেবায় নিত্যনতুন আইডিয়া নিয়ে কাজ করছি।"
										: "We are aggressively scaling and building human-centric tools designed to serve the global Ummah.")}
							</p>
							<Link to="/join" className="inline-block">
								<motion.button 
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.98 }}
									className="px-8 py-3.5 bg-white text-emerald-950 dark:bg-emerald-500 dark:text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5"
								>
									{isBn ? "আমাদের সাথে যুক্ত হন" : "Join Our Journey"}
									<ArrowRight size={18} />
								</motion.button>
							</Link>
						</div>
					</div>
				</ScrollAnimation>
			</section>
		</div>
	);
};

export default Projects;
