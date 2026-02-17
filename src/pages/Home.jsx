import ScrollAnimation from "../components/ScrollAnimation";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
	const { t, lang } = useLanguage();

	const services = [
		t("home.services.software"),
		t("home.services.islamicapps"),
		t("home.services.learning"),
		t("home.services.saas"),
		t("home.services.ecommerce"),
	];

	const whyPoints = [
		t("home.why.authentic"),
		t("home.why.quality"),
		t("home.why.performance"),
		t("home.why.ethical"),
		t("home.why.affordable"),
		t("home.why.dedicated"),
	];

	return (
		<>
			<Helmet>
				{lang === "bn" ? (
					<>
						<title>কাফআহ - প্রযুক্তি উম্মাহর জন্য | হোম</title>
						<meta
							name="description"
							content="কাফআহ ইসলামিক অ্যান্ড মাল্টিপ্রজেক্ট কোম্পানি। আমরা তৈরি করি ইসলামিক অ্যাপ, লার্নিং প্ল্যাটফর্ম ও সফটওয়্যার। ইনশাআল্লাহ প্রযুক্তির মাধ্যমে উম্মাহর সেবায়।"
						/>
						<meta
							property="og:title"
							content="কাফআহ - প্রযুক্তি উম্মাহর জন্য"
						/>
						<meta
							property="og:description"
							content="ইসলামিক অ্যাপ, এডুকেশন প্ল্যাটফর্ম, এসএসসি/এইচএসসি/এডমিশন পরীক্ষার ব্যবস্থা ইনশাআল্লাহ।"
						/>
					</>
				) : (
					<>
						<title>Kafa'ah - Technology for Ummah | Home</title>
						<meta
							name="description"
							content="Kafa'ah Islamic and Multiproject Company. We develop Islamic apps, learning platforms, and software. Serving the Ummah through technology, InshaAllah."
						/>
						<meta
							property="og:title"
							content="Kafa'ah - Technology for the Ummah"
						/>
						<meta
							property="og:description"
							content="Islamic apps, educational platforms, SSC/HSC/Admission exam preparation, InshaAllah."
						/>
					</>
				)}
				<meta
					property="og:image"
					content="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaahlogo5.png"
				/>
				<meta
					property="og:url"
					content="https://kafaahbd.github.io/kafaahbd/"
				/>
			</Helmet>
			<div className="bg-geometric-light dark:bg-geometric-dark">
				{/* {hero} */}
				<section className="relative h-[80vh] flex items-center justify-center text-center bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
					<div className="max-w-4xl px-4">
						<ScrollAnimation>
							<h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
								{t("home.hero.tagline")}
							</h1>
							<p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
								{t("home.mission.text")}
							</p>
							<p className="text-xl text-gray-100 dark:text-gray-100 mb-8">
								{t("home.slogan")}
							</p>
						</ScrollAnimation>
					</div>
				</section>

				{/* Mission & Vision */}
				<section className="py-20 px-4">
					<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
						<ScrollAnimation className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
							<h2 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-400">
								{t("home.mission.title")}
							</h2>
							<p className="text-gray-700 dark:text-gray-300">
								{t("home.mission.text")}
							</p>
						</ScrollAnimation>
						<ScrollAnimation className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
							<h2 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-400">
								{t("home.vision.title")}
							</h2>
							<p className="text-gray-700 dark:text-gray-300">
								{t("home.vision.text")}
							</p>
						</ScrollAnimation>
					</div>
				</section>

				{/* Services Grid */}
				<section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
							{t("home.services.title")}
						</h2>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
							{services.map((service, idx) => (
								<ScrollAnimation key={idx}>
									<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center">
										<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
											{service}
										</h3>
									</div>
								</ScrollAnimation>
							))}
						</div>
					</div>
				</section>

				{/* Why Choose Kafa'ah */}
				<section className="py-20 px-4">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
							{t("home.why.title")}
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{whyPoints.map((point, idx) => (
								<ScrollAnimation key={idx}>
									<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-green-500">
										<p className="text-gray-800 dark:text-gray-200 font-medium">
											{point}
										</p>
									</div>
								</ScrollAnimation>
							))}
						</div>
					</div>
				</section>

				{/* Call to Action */}
				<section className="py-20 px-4 bg-green-600 dark:bg-green-700">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-4xl font-bold text-white mb-6">
							{t("home.cta.title")}
						</h2>
						<Link
							to="https://docs.google.com/forms/d/e/1FAIpQLScM3Usiy57D08kuVwDl__6vaR6YjRTCrIvGoCFH_U5wwF8kKw/viewform"
							target="_blank"
							className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition"
						>
							{t("home.cta.button")}
						</Link>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;
