import React from "react";
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
import Breadcrumb from "../components/Breadcrumb";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import {
	Cpu,
	Lightbulb,
	Beaker,
	Zap,
	Code2,
	ShieldCheck,
	Facebook,
	Github,
	MessageCircle,
	FileText,
	Edit3,
	HelpCircle,
	FileQuestion,
	Droplet,
	Brain, // WhatsApp এর জন্য Lucide আইকন
} from "lucide-react";

interface TeamMember {
	name: string;
	role: string;
	icon: React.ReactNode;
	theme: string;
	image?: string;
	socials: {
		facebook?: string;
		whatsapp: string;
		github?: string; // ঐচ্ছিক GitHub
	};
}

const Team: React.FC = () => {
	const { lang } = useLanguage();
	const isBn = lang === "bn";

	const members: TeamMember[] = [
		{
			name: "Tanvir Ishrak",
			role: isBn ? "প্রধান স্থপতি" : "Lead Architect",
			icon: <Cpu size={32} />,
			theme: "from-emerald-500 to-teal-600 shadow-emerald-500/20",
			image: "",
			socials: {
				facebook: "https://www.facebook.com/tanvir.ishrak.13",
				whatsapp: "https://wa.me/8801770676700",
				github: "https://github.com/kafaahbd",
			},
		},
		{
			name: "Mueen Ahmad",
			role: isBn ? "অ্যাপ নির্মাতা" : "App Developer",
			icon: <Code2 size={32} />,
			theme: "from-cyan-500 to-blue-600 shadow-blue-500/20",
			image: "",
			socials: {
				whatsapp: "https://wa.me/8801744635364",
				github: "https://github.com/Mueen-Ahmad",
			},
		},
		{
			name: "Tousif Hasnat Anan",
			role: isBn ? "কন্টেন্ট নির্মাতা" : "Content Creator",
			icon: <Edit3 size={32} />,
			theme: "from-green-500 to-emerald-600 shadow-green-500/20",
			image: "",
			socials: {
				whatsapp: "https://wa.me/8801743199426",
			},
		},
		{
			name: "Labonnya Das",
			role: isBn ? "প্রশ্ন নির্মাতা" : "Question Creator",
			icon: <HelpCircle size={32} />,
			theme: "from-pink-500 to-rose-600 shadow-rose-500/20",
			image: "",
			socials: {
				whatsapp: "https://wa.me/8801727719346",
			},
		},
		{
			name: "MD Rifat Al Mahmud",
			role: isBn ? "বিশ্লেষক" : "Analyst",
			icon: <Zap size={32} />,
			theme: "from-rose-500 to-purple-600 shadow-purple-500/20",
			image: "",
			socials: {
				facebook: "https://www.facebook.com/rifatdoyox",
				whatsapp: "https://wa.me/8801581483444",
			},
		},
		{
			name: "Marjuk Mahmud",
			role: isBn ? "চিন্তাবিদ" : "Thinker",
			icon: <Brain size={32} />,
			theme: "from-amber-400 to-orange-600 shadow-orange-500/20",
			image: "",
			socials: {
				facebook: "https://www.facebook.com/marjuk.mahmud.419103",
				whatsapp: "https://wa.me/8801957845923",
			},
		},
		{
			name: "Ahnaf Habib Ritom",
			role: isBn ? "উৎসেচক" : "Enzyme",
			icon: <Beaker size={32} />,
			theme: "from-blue-500 to-indigo-600 shadow-indigo-500/20",
			image: "",
			socials: {
				facebook: "https://www.facebook.com/ahnaf.ritom",
				whatsapp: "https://wa.me/8801735617590",
			},
		},
		{
			name: "MD Limon Sarkar",
			role: isBn ? "গ্রাফিক্স নির্মাতা" : "Grapics Designer",
			icon: <Droplet size={32} />,
			theme: "from-orange-500 to-yellow-600 shadow-yellow-500/20",
			image: "",
			socials: {
				facebook: "https://www.facebook.com/profile.php?id=100090667061416",
				whatsapp: "https://wa.me/8801409538310",
			},
		},
	];

	return (
		<div className="min-h-screen bg-[#f8fafc] dark:bg-[#05070a] transition-colors duration-500 pb-24 font-sans">
			<SEO
				title={isBn ? "আমাদের টিম" : "Our Team"}
				description={isBn ? "কাফআহ টিমের সদস্যগণ।" : "Members of Kafa'ah team."}
				url="/team"
        image="https://kafaahbd.com/team-cover.jpg"
				breadcrumbs={[{ name: isBn ? "আমাদের টিম" : "Team", url: "/team" }]}
			/>

			{/* Header Section */}
			<section className="relative pt-8 pb-12 md:pt-12 md:pb-16 px-4 overflow-hidden">
				{/* Soft Background Blur Elements */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-80 bg-emerald-400/10 dark:bg-emerald-900/10 blur-[150px] -z-10 rounded-full" />
				
				<div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
					<div className="self-start w-full flex justify-center lg:justify-center mb-6 md:mb-10">
						<Breadcrumb items={[{ name: isBn ? "আমাদের দল" : "Our Team" }]} />
					</div>

					<ScrollAnimation className="text-center w-full">
						<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
							<ShieldCheck size={16} /> {isBn ? "একনিষ্ঠ টিম" : "Dedicated Team"}
						</div>
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 md:mb-8 tracking-tight">
							{isBn ? "আমাদের কারিগর" : "Meet The Team"}
						</h1>
					</ScrollAnimation>
				</div>
			</section>

			{/* Team Grid */}
			<div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
					{members.map((member, idx) => (
						<ScrollAnimation key={idx} delay={idx * 0.1} direction="up">
							<motion.div
								whileHover={{ y: -10, scale: 1.02 }}
								className="group relative bg-white/70 dark:bg-[#0a0d13]/70 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/50 dark:border-white/5 shadow-lg hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center h-full overflow-hidden"
							>
								{/* Subtle glow effect on hover */}
								<div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
								
								{/* Avatar Section */}
								<div className="relative mb-8 z-10">
									<div
										className={`w-28 h-28 md:w-32 md:h-32 rounded-[2rem] bg-gradient-to-br ${member.theme} flex items-center justify-center text-white shadow-xl group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] group-hover:rotate-6 group-hover:scale-105 transition-all duration-500 overflow-hidden ring-4 ring-white dark:ring-[#131821]`}
									>
										{member.image ? (
											<img
												src={member.image}
												alt={member.name}
												className="w-full h-full object-cover"
											/>
										) : (
											<div className="transform group-hover:scale-110 transition-transform duration-500">
												{member.icon}
											</div>
										)}
									</div>
									<div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl bg-white dark:bg-[#1a1f26] shadow-lg flex items-center justify-center border-4 border-gray-50/50 dark:border-[#0a0d13]/50 text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
										{member.icon}
									</div>
								</div>

								<div className="flex-grow z-10">
									<h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
										{member.name}
									</h3>
									<div className="inline-block px-4 py-1.5 rounded-xl bg-gray-100/80 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-xs font-bold tracking-widest border border-gray-200/50 dark:border-white/5 shadow-sm">
										{member.role}
									</div>
								</div>

								{/* Social Links */}
								<div className="flex gap-4 md:gap-5 mt-8 items-center z-10">
									{member.socials.facebook && (
										<a
											href={member.socials.facebook}
											target="_blank"
											rel="noreferrer"
											className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#131821] flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 border border-gray-100 dark:border-white/5 transition-all hover:scale-110 hover:-translate-y-1 shadow-sm"
										>
											<Facebook size={18} />
										</a>
									)}
									<a
										href={member.socials.whatsapp}
										target="_blank"
										rel="noreferrer"
										className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#131821] flex items-center justify-center text-gray-400 hover:bg-green-50 hover:text-green-500 dark:hover:bg-green-500/10 dark:hover:text-green-400 border border-gray-100 dark:border-white/5 transition-all hover:scale-110 hover:-translate-y-1 shadow-sm"
									>
										<MessageCircle size={18} />
									</a>
									{member.socials.github && (
										<a
											href={member.socials.github}
											target="_blank"
											rel="noreferrer"
											className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#131821] flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-white/10 dark:hover:text-white border border-gray-100 dark:border-white/5 transition-all hover:scale-110 hover:-translate-y-1 shadow-sm"
										>
											<Github size={18} />
										</a>
									)}
								</div>

								<div className="w-12 h-1.5 bg-gray-200 dark:bg-white/10 mt-8 rounded-full group-hover:w-24 group-hover:bg-emerald-500 transition-all duration-500 shadow-inner" />
							</motion.div>
						</ScrollAnimation>
					))}
				</div>
			</div>

			{/* Footer Note */}
			<section className="mt-16 md:mt-24 text-center px-4 relative z-10">
				<ScrollAnimation>
					<div className="inline-block bg-white/60 dark:bg-white/5 backdrop-blur-md px-8 py-5 rounded-[2rem] border border-gray-200/50 dark:border-white/10 shadow-lg">
						<p className="text-emerald-700 dark:text-emerald-400 font-serif font-medium italic text-lg md:text-2xl leading-relaxed">
							{isBn
								? "সঠিক প্রযুক্তির মাধ্যমে উম্মাহর সেবায় আমরা সংকল্পবদ্ধ"
								: "Committed to serving the Ummah through the right technology"}
						</p>
						<p className="mt-4 font-sans font-bold text-emerald-600 dark:text-emerald-300 tracking-widest text-sm uppercase">
							- InshaAllah -
						</p>
					</div>
				</ScrollAnimation>
			</section>
		</div>
	);
};

export default Team;
