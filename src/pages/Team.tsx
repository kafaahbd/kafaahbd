import React from "react";
import SEO from "../components/SEO";
import ScrollAnimation from "../components/ScrollAnimation";
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
	Droplet,// WhatsApp এর জন্য Lucide আইকন
} from "lucide-react";

interface TeamMember {
	name: string;
	role: string;
	icon: React.ReactNode;
	theme: string;
	image?: string;
	socials: {
		facebook: string;
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
			theme: "from-emerald-500 to-teal-600",
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
			theme: "from-cyan-500 to-blue-600",
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
			theme: "from-green-500 to-emerald-600",
			image: "",
			socials: {
				
				whatsapp: "https://wa.me/8801743199426",
				
			},
		},
		{
			name: "Labonnya Das",
			role: isBn ? "প্রশ্ন নির্মাতা" : "Question Creator",
			icon: <HelpCircle size={32} />,
			theme: "from-pink-500 to-rose-600",
			image: "",
			socials: {
				
				whatsapp: "https://wa.me/8801727719346",
				
			},
		},
		{
			name: "MD Rifat Al Mahmud",
			role: isBn ? "বিশ্লেষক" : "Analyst",
			icon: <Zap size={32} />,
			theme: "from-rose-500 to-purple-600",
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
			theme: "from-amber-400 to-orange-600",
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
			theme: "from-blue-500 to-indigo-600",
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
			theme: "from-orange-500 to-yellow-600",
			image: "",
			socials: {
				facebook: "https://www.facebook.com/profile.php?id=100090667061416",
				whatsapp: "https://wa.me/8801409538310",
				
			},
		},
		
	];

	return (
		<div className="min-h-screen bg-slate-50 dark:bg-[#05070a] transition-colors duration-500 pb-24">
			<SEO
				title={isBn ? "আমাদের টিম" : "Our Team"}
				description={isBn ? "কাফআহ টিমের সদস্যগণ।" : "Members of Kafa'ah team."}
				url="https://kafaahbd.com/team"
			/>

			{/* Header Section */}
			<section className="pt-12 pb-8 md:pt-24 md:pb-16 px-4 text-center relative overflow-hidden">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-emerald-500/5 blur-[120px] -z-10" />
				<ScrollAnimation>
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
						<ShieldCheck size={14} /> {isBn ? "একনিষ্ঠ টিম" : "Dedicated Team"}
					</div>
					<h1 className="text-3xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 md:mb-6 tracking-tighter">
						{isBn ? "আমাদের কারিগর" : "Meet The Team"}
					</h1>
				</ScrollAnimation>
			</section>

			{/* Team Grid - PC তে ৩টি মেম্বার */}
			<div className="max-w-6xl mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
					{members.map((member, idx) => (
						<ScrollAnimation key={idx} delay={idx * 0.1} direction="up">
							<motion.div
								whileHover={{ y: -12 }}
								className="group relative bg-white dark:bg-[#0d1117] p-6 md:p-10 rounded-[2rem] md:rounded-[3.5rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center h-full"
							>
								{/* Avatar Section */}
								<div className="relative mb-6 md:mb-8">
									<div
										className={`w-24 h-24 md:w-32 md:h-32 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br ${member.theme} flex items-center justify-center text-white shadow-2xl group-hover:rotate-6 transition-transform duration-500 overflow-hidden ring-4 ring-white dark:ring-gray-800`}
									>
										{member.image ? (
											<img
												src={member.image}
												alt={member.name}
												className="w-full h-full object-cover"
											/>
										) : (
											member.icon
										)}
									</div>
									<div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-11 md:h-11 rounded-2xl bg-white dark:bg-[#1a1f26] shadow-xl flex items-center justify-center text-emerald-500 border border-gray-100 dark:border-white/10">
										{member.icon}
									</div>
								</div>

								<div className="flex-grow">
									<h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-1 md:mb-2 group-hover:text-emerald-500 transition-colors">
										{member.name}
									</h3>
									<div className="inline-block px-3 py-1 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] border border-gray-100 dark:border-white/5">
										{member.role}
									</div>
								</div>

								{/* Social Links */}
								<div className="flex gap-4 md:gap-5 mt-6 md:mt-8 items-center">
									<a
										href={member.socials.facebook}
										target="_blank"
										rel="noreferrer"
										className="text-gray-400 hover:text-blue-600 transition-all hover:scale-125"
									>
										<Facebook size={18} />
									</a>
									<a
										href={member.socials.whatsapp}
										target="_blank"
										rel="noreferrer"
										className="text-gray-400 hover:text-green-500 transition-all hover:scale-125"
									>
										<MessageCircle size={20} />
									</a>
									{member.socials.github && (
										<a
											href={member.socials.github}
											target="_blank"
											rel="noreferrer"
											className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-125"
										>
											<Github size={18} />
										</a>
									)}
								</div>

								<div className="w-12 md:w-16 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mt-6 md:mt-8 rounded-full group-hover:w-24 md:group-hover:w-32 transition-all duration-700" />
							</motion.div>
						</ScrollAnimation>
					))}
				</div>
			</div>

			{/* Footer Note */}
			<section className="mt-12 md:mt-28 text-center px-4">
				<ScrollAnimation>
					<p className="text-emerald-600 dark:text-emerald-400 font-bold italic text-base md:text-xl">
						{isBn
							? "সঠিক প্রযুক্তির মাধ্যমে উম্মাহর সেবায় আমরা সংকল্পবদ্ধ—ইনশাআল্লাহ।"
							: "Committed to serving the Ummah through the right technology—InshaAllah."}
					</p>
				</ScrollAnimation>
			</section>
		</div>
	);
};

export default Team;
