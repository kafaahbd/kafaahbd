import { Helmet } from "react-helmet-async";
import ScrollAnimation from "../components/ScrollAnimation";
import { useLanguage } from "../contexts/LanguageContext";

const PrivacyPolicy = () => {
	const { lang } = useLanguage();

	const text = {
		bn: `Privacy & Policy

Kafa’ah Islamic and Multiproject Company
Effective Date: 1 December, 2025

1. ভূমিকা

Kafa’ah Islamic and Multiproject Company (“আমরা”, “আমাদের”, “প্রতিষ্ঠান”) আমাদের ব্যবহারকারীদের ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ।
এই নীতিমালা আমাদের ওয়েবসাইট, অ্যাপ, প্রকল্প এবং সংশ্লিষ্ট সেবাগুলোর ব্যবহার সম্পর্কিত আপনার তথ্য সংগ্রহ, ব্যবহার ও সুরক্ষার পদ্ধতি ব্যাখ্যা করে।

---

2. তথ্য সংগ্রহ

আমরা নিম্নলিখিত ধরণের তথ্য সংগ্রহ করতে পারি:
ব্যক্তিগত তথ্য: যেমন নাম, ইমেইল, ফোন নম্বর, ঠিকানা, বা পেমেন্ট সংক্রান্ত তথ্য।
প্রযুক্তিগত তথ্য: যেমন IP ঠিকানা, ব্রাউজার ধরন, ডিভাইস তথ্য, লগ ডাটা ইত্যাদি।
ইন্টারঅ্যাকশন ডেটা: আপনি কীভাবে আমাদের ওয়েবসাইট বা অ্যাপ ব্যবহার করেন তার তথ্য (যেমন পেজ ভিজিট, ক্লিক, সময়কাল ইত্যাদি)।


---

3. তথ্যের ব্যবহার

আমরা আপনার তথ্য নিম্নলিখিত উদ্দেশ্যে ব্যবহার করি:
আমাদের সেবা উন্নত করা ও সঠিকভাবে প্রদান করা।
ব্যবহারকারীদের অভিজ্ঞতা ব্যক্তিগতকরণ করা।
গুরুত্বপূর্ণ নোটিফিকেশন বা আপডেট পাঠানো।
নিরাপত্তা ও প্রতারণা প্রতিরোধের উদ্দেশ্যে।
আইনগত বা প্রশাসনিক প্রয়োজন পূরণের জন্য।


---

4. তথ্যের সুরক্ষা

আমরা আপনার তথ্যের নিরাপত্তা নিশ্চিত করতে আধুনিক প্রযুক্তি ও সুরক্ষা ব্যবস্থা ব্যবহার করি। তবে, ইন্টারনেটের মাধ্যমে তথ্য প্রেরণ শতভাগ নিরাপদ নয় — তাই কোনো অনাকাঙ্ক্ষিত ক্ষতির জন্য প্রতিষ্ঠান দায়ী নয়। ইনশাল্লাহ আমরা আপনার তথ্য সুরক্ষার সর্বোচ্চ চেষ্টা করবো।

---

5. তথ্য শেয়ারিং

আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি, বিনিময় বা প্রকাশ করি না, তবে নিম্নলিখিত ক্ষেত্রে তথ্য শেয়ার করা হতে পারে:
আইনগত প্রয়োজনীয়তার কারণে।
আমাদের সেবা পরিচালনায় সহায়তা করা বিশ্বস্ত অংশীদারদের সাথে (যারা আমাদের Privacy Policy অনুসরণ করে)।


---

6. কুকিজ ও ট্র্যাকিং প্রযুক্তি

আমরা কুকিজ ব্যবহার করে ব্যবহারকারীর পছন্দ, ওয়েব ট্রাফিক বিশ্লেষণ, এবং অভিজ্ঞতা উন্নত করি। আপনি চাইলে ব্রাউজারের সেটিংস থেকে কুকিজ নিষ্ক্রিয় করতে পারেন।

---

7. তৃতীয় পক্ষের লিংক

আমাদের ওয়েবসাইটে তৃতীয় পক্ষের লিংক থাকবে না ইনশাল্লাহ।

---

8. শিশুদের গোপনীয়তা

আমাদের সেবা ৩ বছরের কম বয়সী শিশুদের জন্য নয়। আমরা সচেতনভাবে কোনো শিশুর ব্যক্তিগত তথ্য সংগ্রহ করি না।

---

9. নীতিমালা পরিবর্তন

আমরা সময় সময় এই Privacy Policy পরিবর্তন করতে পারি। পরিবর্তন হলে “Effective Date” আপডেট করা হবে। ব্যবহারকারীকে পরিবর্তন সম্পর্কে জানানো হবে।

---

10. যোগাযোগ

যদি আমাদের Privacy Policy সম্পর্কে কোনো প্রশ্ন থাকে, তাহলে যোগাযোগ করুন:
📧 Email: tanvirishrak04@gmail.com
📍 Address: Rajshahi
📞 Phone: 01770676700`,
		en: `Privacy & Policy

Kafa’ah Islamic and Multiproject Company
Effective Date: December 1, 2025

1. Introduction

Kafa’ah Islamic and Multiproject Company ("we", "our", "the Company") is committed to protecting the privacy of our users.
This policy explains how we collect, use, and protect your information in connection with our website, apps, projects, and related services.

---

2. Information Collection

We may collect the following types of information:
Personal Information: such as name, email, phone number, address, or payment details.
Technical Information: such as IP address, browser type, device information, log data, etc.
Interaction Data: information about how you use our website or app (e.g., page visits, clicks, time spent).

---

3. Use of Information

We use your information for the following purposes:
To improve and properly deliver our services.
To personalize user experience.
To send important notifications or updates.
For security and fraud prevention.
To fulfill legal or administrative requirements.

---

4. Data Security

We use modern technology and security measures to ensure the safety of your information. However, no method of transmission over the Internet is 100% secure — therefore, we cannot guarantee absolute security. InshaAllah, we will do our utmost to protect your data.

---

5. Information Sharing

We do not sell, exchange, or disclose your personal information to third parties, except in the following cases:
When required by law.
With trusted partners who assist us in operating our services (and who adhere to this Privacy Policy).

---

6. Cookies and Tracking Technologies

We use cookies to analyze user preferences, web traffic, and improve experience. You can disable cookies through your browser settings.

---

7. Third-Party Links

Our website will not contain third-party links, InshaAllah.

---

8. Children's Privacy

Our services are not intended for children under 3 years of age. We do not knowingly collect personal information from children.

---

9. Changes to This Policy

We may update this Privacy Policy from time to time. Changes will be reflected by an updated "Effective Date". Users will be notified of any changes.

---

10. Contact

If you have any questions about this Privacy Policy, please contact us:
📧 Email: tanvirishrak04@gmail.com
📍 Address: Rajshahi
📞 Phone: 01770676700`,
	};

	return (
		<div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-16 px-4">
			<Helmet>
				{lang === "bn" ? (
					<>
						<title>গোপনীয়তা নীতি - কাফআহ</title>
						<meta
							name="description"
							content="কাফআহ ওয়েবসাইট ও অ্যাপের গোপনীয়তা নীতি। আপনার তথ্য কীভাবে সংগ্রহ ও ব্যবহার করা হয় তা জানুন।"
						/>
						<meta property="og:title" content="গোপনীয়তা নীতি - কাফআহ" />
						<meta
							property="og:description"
							content="কাফআহ-এর গোপনীয়তা নীতি ও শর্তাবলী।"
						/>
					</>
				) : (
					<>
						<title>Privacy Policy - Kafa'ah</title>
						<meta
							name="description"
							content="Privacy policy of Kafa'ah website and app. Learn how we collect and use your information."
						/>
						<meta property="og:title" content="Privacy Policy - Kafa'ah" />
						<meta
							property="og:description"
							content="Kafa'ah's privacy policy and terms."
						/>
					</>
				)}
				<meta
					property="og:url"
					content="https://kafaahbd.github.io/kafaahbd/privacy-policy"
				/>
			</Helmet>
			<div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
				<ScrollAnimation>
					<div className="prose prose-lg dark:prose-invert max-w-none">
						<p className="whitespace-pre-line text-gray-800 dark:text-gray-200">
							{lang === "bn" ? text.bn : text.en}
						</p>
					</div>
				</ScrollAnimation>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
