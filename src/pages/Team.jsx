import { Helmet } from "react-helmet-async";
import ScrollAnimation from "../components/ScrollAnimation";
import { useLanguage } from "../contexts/LanguageContext";

const Team = () => {
	const { lang } = useLanguage();

	// Placeholder team members (no human photos)
	const members = [
		{
			name: "Tanvir Ishrak",
			role: lang === "bn" ? "প্রধান স্থপতি" : "Lead Architect",
		},
		{
			name: "Marjuk Mahmud",
			role: lang === "bn" ? "পরিকল্পনা প্রসূতকারী" : "Idea Generator",
		},
		{
			name: "Ahnaf Habib Ritom",
			role: lang === "bn" ? "উৎসেচক" : "Enzyme",
		},
		{
			name: "MD Rifat Al Mahmud",
			role: lang === "bn" ? "অনুঘটক" : "Catalyst",
		},
		{
			name: "Mueen Ahmad",
			role:
				lang === "bn" ? "অ্যাপ নির্মাতা" : "App Developer",
		},
	];

	return (
		<div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-16 px-4">
			<Helmet>
				{lang === "bn" ? (
					<>
						<title>আমাদের টিম - কাফআহ</title>
						<meta
							name="description"
							content="কাফআহ টিমের সদস্যগণ। দক্ষ ও নিবেদিত পেশাজীবী ইনশাআল্লাহ।"
						/>
						<meta property="og:title" content="আমাদের টিম - কাফআহ" />
						<meta
							property="og:description"
							content="কাফআহ টিমের সদস্যদের পরিচিতি।"
						/>
					</>
				) : (
					<>
						<title>Our Team - Kafa'ah</title>
						<meta
							name="description"
							content="Members of Kafa'ah team. Skilled and dedicated professionals, InshaAllah."
						/>
						<meta property="og:title" content="Our Team - Kafa'ah" />
						<meta
							property="og:description"
							content="Meet the Kafa'ah team members."
						/>
					</>
				)}
				<meta
					property="og:url"
					content="https://kafaahbd.github.io/kafaahbd/team"
				/>
			</Helmet>
			<div className="max-w-6xl mx-auto">
				<h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
					{lang === "bn" ? "আমাদের টিম" : "Our Team"}
				</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{members.map((member, idx) => (
						<ScrollAnimation key={idx}>
							<div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
								<i className="fas fa-user-circle text-6xl text-green-600 dark:text-blue-400 mx-auto mb-4"></i>
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
									{member.name}
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									{member.role}
								</p>
							</div>
						</ScrollAnimation>
					))}
				</div>
			</div>
		</div>
	);
};

export default Team;
