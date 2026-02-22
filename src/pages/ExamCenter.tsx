import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { subjectChapters } from "../data/subjectChapters";
import { Helmet } from "react-helmet-async";
import Latex from "react-latex-next";
import html2pdf from "html2pdf.js";
import katex from "katex";

// টাইপ ডিফিনেশন
interface Chapter {
	name: string;
	url: string;
}

interface Question {
	id: number;
	question: string;
	options: {
		[key: string]: string;
	};
	correct_answer: string;
	explanation: string;
}

interface ResultItem extends Question {
	userAnswer: string | undefined;
	isCorrect: boolean;
	correctAnswer: string;
}

type ExamState = "setup" | "running" | "finished";

const ExamCenter: React.FC = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const { lang } = useLanguage();

	const group = searchParams.get("group"); // 'ssc', 'hsc', 'admission'
	const subject = searchParams.get("subject"); // 'physics', 'bangla', etc.

	// যদি গ্রুপ বা সাবজেক্ট না থাকে, তাহলে স্টাডি পৃষ্ঠায় ফেরত পাঠান
	useEffect(() => {
		if (!group || !subject) {
			navigate("/study");
		}
	}, [group, subject, navigate]);

	// এই সাবজেক্টের জন্য অধ্যায়ের তালিকা
	const chaptersForSubject: Chapter[] =
		(group && subject && subjectChapters[group]?.[subject]) || [];

	const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
	const [duration, setDuration] = useState<number>(20);
	const [questionCount, setQuestionCount] = useState<number>(20);
	const [examState, setExamState] = useState<ExamState>("setup");
	const [questions, setQuestions] = useState<Question[]>([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [userAnswers, setUserAnswers] = useState<{ [id: number]: string }>({});
	const [timeLeft, setTimeLeft] = useState<number>(0);
	const [result, setResult] = useState<{
		total: number;
		correct: number;
		results: ResultItem[];
	} | null>(null);

	// সাবজেক্টের নাম বাংলায়/ইংরেজিতে দেখানোর জন্য ম্যাপিং
	const subjectNames = {
		bn: {
			bangla: "বাংলা",
			english: "ইংরেজি",
			ict: "আইসিটি",
			math: "গণিত",
			islam: "ইসলাম শিক্ষা",
			physics: "পদার্থ",
			chemistry: "রসায়ন",
			biology: "জীববিজ্ঞান",
			history: "ইতিহাস",
			civics: "পৌরনীতি",
			geography: "ভূগোল",
			accounting: "হিসাববিজ্ঞান",
			business: "ব্যবসায় উদ্যোগ",
			finance: "ফাইন্যান্স",
			highermath: "উচ্চতর গণিত",
			agriculture: "কৃষি",
			health: "স্বাস্থ্য",
			management: "ব্যবস্থাপনা",
			marketing: "মার্কেটিং",
			"engineering-physics": "ইঞ্জিনিয়ারিং পদার্থ",
			"engineering-chemistry": "ইঞ্জিনিয়ারিং রসায়ন",
			"engineering-math": "ইঞ্জিনিয়ারিং গণিত",
			"engineering-highermath": "ইঞ্জিনিয়ারিং উচ্চতর গণিত",
			"medical-physics": "মেডিকেল পদার্থ",
			"medical-chemistry": "মেডিকেল রসায়ন",
			"medical-biology": "মেডিকেল জীববিজ্ঞান",
			"university-bangla": "বিশ্ববিদ্যালয় বাংলা",
			"university-english": "বিশ্ববিদ্যালয় ইংরেজি",
			"university-gk": "সাধারণ জ্ঞান",
		},
		en: {
			bangla: "Bangla",
			english: "English",
			ict: "ICT",
			math: "Math",
			islam: "Islamic Studies",
			physics: "Physics",
			chemistry: "Chemistry",
			biology: "Biology",
			history: "History",
			civics: "Civics",
			geography: "Geography",
			accounting: "Accounting",
			business: "Business Entrepreneurship",
			finance: "Finance",
			highermath: "Higher Math",
			agriculture: "Agriculture",
			health: "Health Science",
			management: "Management",
			marketing: "Marketing",
			"engineering-physics": "Engineering Physics",
			"engineering-chemistry": "Engineering Chemistry",
			"engineering-math": "Engineering Math",
			"engineering-highermath": "Engineering Higher Math",
			"medical-physics": "Medical Physics",
			"medical-chemistry": "Medical Chemistry",
			"medical-biology": "Medical Biology",
			"university-bangla": "University Bangla",
			"university-english": "University English",
			"university-gk": "General Knowledge",
		},
	};

	// সেফ গ্রুপ নাম ফাংশন
	const getGroupName = (): string => {
		if (!group) return "";
		const groupMap = {
			bn: { ssc: "এসএসসি", hsc: "এইচএসসি", admission: "এডমিশন" },
			en: { ssc: "SSC", hsc: "HSC", admission: "Admission" },
		};
		const langKey = lang as "bn" | "en";
		if (group === "ssc" || group === "hsc" || group === "admission") {
			return groupMap[langKey][group];
		}
		return group;
	};

	// সেফ সাবজেক্ট নাম ফাংশন
	const getSubjectName = (): string => {
		if (!subject) return "";
		const bnKeys = subjectNames.bn as Record<string, string>;
		if (subject in bnKeys) return bnKeys[subject];
		const enKeys = subjectNames.en as Record<string, string>;
		if (subject in enKeys) return enKeys[subject];
		return subject;
	};

	const subjectName = getSubjectName();
	const groupName = getGroupName();

	// পৃষ্ঠার মেটা ট্যাগের জন্য
	const pageTitle = `${subjectName} - ${groupName} | ${lang === "bn" ? "কাফআহ পরীক্ষা কেন্দ্র" : "Kafa'ah Exam Center"}`;
	const pageDescription =
		lang === "bn"
			? `${subjectName} অধ্যায়ভিত্তিক মডেল টেস্ট দিন। সম্পূর্ণ ফ্রি ইনশাআল্লাহ।`
			: `Take chapter-wise model tests for ${subjectName}. Completely free InshaAllah.`;
	const pageUrl = `https://kafaahbd.github.io/kafaahbd/study/exam?group=${group}&subject=${subject}`;

	// নির্বাচিত অধ্যায় থেকে প্রশ্ন লোড করা
	const loadQuestions = async () => {
		if (selectedChapters.length === 0) {
			alert(
				lang === "bn"
					? "অনুগ্রহ করে অন্তত একটি অধ্যায় নির্বাচন করুন"
					: "Please select at least one chapter",
			);
			return;
		}

		try {
			const allQuestions: Question[] = [];
			for (const chapterId of selectedChapters) {
				const chapter = chaptersForSubject.find((c) => c.name === chapterId);
				if (chapter && chapter.url && chapter.url !== "#") {
					const response = await fetch(chapter.url);
					const data = await response.json();
					allQuestions.push(...data);
				} else {
					console.warn("Chapter URL missing:", chapterId);
				}
			}
			if (allQuestions.length === 0) {
				alert(lang === "bn" ? "কোনো প্রশ্ন পাওয়া যায়নি" : "No questions found");
				return;
			}
			// এলোমেলোভাবে নির্দিষ্ট সংখ্যক প্রশ্ন নির্বাচন
			const shuffled = allQuestions.sort(() => 0.5 - Math.random());
			const selected = shuffled.slice(
				0,
				Math.min(questionCount, allQuestions.length),
			);
			setQuestions(selected);
			setExamState("running");
			setTimeLeft(duration * 60);
		} catch (error) {
			console.error("প্রশ্ন লোড করতে সমস্যা:", error);
			alert(
				lang === "bn"
					? "প্রশ্ন লোড করা যায়নি। আবার চেষ্টা করুন।"
					: "Failed to load questions. Please try again.",
			);
		}
	};

	// টাইমার
	useEffect(() => {
		if (examState === "running" && timeLeft > 0) {
			const timer = setInterval(() => {
				setTimeLeft((prev) => {
					if (prev <= 1) {
						clearInterval(timer);
						handleSubmit();
						return 0;
					}
					return prev - 1;
				});
			}, 1000);
			return () => clearInterval(timer);
		}
	}, [examState, timeLeft]);

	// উত্তর সংরক্ষণ
	const handleAnswerSelect = (questionId: number, answer: string) => {
		setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
	};

	// পরীক্ষা জমা দেওয়া
	const handleSubmit = () => {
		let correct = 0;
		const results: ResultItem[] = questions.map((q) => {
			const userAns = userAnswers[q.id];
			const isCorrect = userAns === q.correct_answer;
			if (isCorrect) correct++;
			return {
				...q,
				userAnswer: userAns,
				isCorrect,
				correctAnswer: q.correct_answer,
			};
		});
		setResult({ total: questions.length, correct, results });
		setExamState("finished");
	};

	// সময় ফরম্যাট mm:ss
	const formatTime = (seconds: number): string => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
	};

	// ব্যাক বাটন
	const handleBack = () => navigate(-1);

	// প্রিন্ট (PDF via browser)
	const handlePrint = () => window.print();

	// মিশ্র টেক্সট রেন্ডার ফাংশন (LaTeX কে HTML এ রূপান্তর)
	const renderMixedText = (text: string): string => {
		if (!text) return "";
		const parts = text.split(/(\$[^\$]+\$)/g);
		return parts
			.map((part) => {
				if (part.startsWith("$") && part.endsWith("$")) {
					const latex = part.slice(1, -1);
					try {
						return katex.renderToString(latex, {
							throwOnError: false,
							displayMode: false,
							output: "html",
						});
					} catch (e) {
						console.warn("KaTeX error:", e);
						return part;
					}
				}
				return part;
			})
			.join("");
	};

	// PDF ডাউনলোড (html2pdf)
	const downloadPDF = () => {
		if (!result) return;

		// অস্থায়ী HTML এলিমেন্ট তৈরি
		const element = document.createElement("div");
		element.style.padding = "20px";
		element.style.fontFamily =
			'Inter, "Noto Sans Bengali", "SolaimanLipi", sans-serif';
		element.style.backgroundColor = "#ffffff";
		element.style.color = "#000000";
		element.style.maxWidth = "800px";
		element.style.margin = "0 auto";

		const date = new Date();
		const dateStr = date.toLocaleDateString(lang === "bn" ? "bn-BD" : "en-US");
		const percentage = Math.round((result.correct / result.total) * 100);

		// KaTeX CSS
		const katexCSS = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css">
      <style>
        .katex { font-size: 1.1em; }
        .katex-display { margin: 0.5em 0; }
      </style>
    `;

		// HTML কন্টেন্ট শুরু
		let htmlContent = `
      ${katexCSS}
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #16a34a; font-size: 24px; margin-bottom: 10px;">${subjectName} - ${groupName}</h1>
        <h2 style="color: #333; font-size: 20px;">${lang === "bn" ? "পরীক্ষার ফলাফল" : "Exam Result"}</h2>
        <p style="color: #666; margin: 5px 0;">${lang === "bn" ? "তারিখ" : "Date"}: ${dateStr}</p>
      </div>
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 10px; margin-bottom: 30px; text-align: center;">
        <div style="font-size: 48px; font-weight: bold; color: #16a34a;">${result.correct}/${result.total}</div>
        <div style="font-size: 18px; color: #4b5563; margin-top: 5px;">${percentage}%</div>
        <div style="display: flex; justify-content: center; gap: 30px; margin-top: 15px;">
          <div><span style="color: #4b5563;">${lang === "bn" ? "সঠিক" : "Correct"}:</span> <span style="color: #16a34a; font-weight: bold;">${result.correct}</span></div>
          <div><span style="color: #4b5563;">${lang === "bn" ? "ভুল" : "Wrong"}:</span> <span style="color: #dc2626; font-weight: bold;">${result.total - result.correct}</span></div>
        </div>
      </div>
    `;

		// প্রতিটি প্রশ্ন ও উত্তর
		result.results.forEach((item, idx) => {
			const questionHtml = renderMixedText(item.question);
			const userAnswerHtml = item.userAnswer
				? renderMixedText(item.options[item.userAnswer])
				: "";
			const correctAnswerHtml = item.correctAnswer
				? renderMixedText(item.options[item.correctAnswer])
				: "";
			const explanationHtml = renderMixedText(item.explanation);

			htmlContent += `
        <div style="margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb;">
          <p style="font-weight: bold; margin-bottom: 10px; font-size: 16px;">${idx + 1}. ${questionHtml}</p>
          <div style="margin-left: 20px;">
            <p style="color: ${item.isCorrect ? "#16a34a" : "#dc2626"}; margin: 5px 0;">
              ${lang === "bn" ? "আপনার উত্তর:" : "Your answer:"} ${item.userAnswer}. ${userAnswerHtml}
            </p>
            ${
							!item.isCorrect
								? `
              <p style="color: #16a34a; margin: 5px 0;">
                ${lang === "bn" ? "সঠিক উত্তর:" : "Correct answer:"} ${item.correctAnswer}. ${correctAnswerHtml}
              </p>
            `
								: ""
						}
            <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">
              <strong>${lang === "bn" ? "ব্যাখ্যা:" : "Explanation:"}</strong> ${explanationHtml}
            </p>
          </div>
        </div>
      `;
		});

		htmlContent += `
      <div style="text-align: center; margin-top: 40px; color: #9ca3af; font-size: 12px;">
        ${lang === "bn" ? "ধন্যবাদ কাফআহ পরীক্ষা কেন্দ্র ব্যবহার করার জন্য" : "Thanks for using Kafa'ah Exam Center"}
      </div>
    `;

		element.innerHTML = htmlContent;

		const margin: [number, number, number, number] = [0.5, 0.5, 0.5, 0.5];
		// html2pdf অপশন - টাইপ error এড়াতে as const ব্যবহার
		const opt = {
			margin: [0.5, 0.5, 0.5, 0.5] as [number, number, number, number],
			filename: `${subjectName}_${groupName}_result_${date.getTime()}.pdf`,
			image: { type: "jpeg" as const, quality: 0.98 },
			html2canvas: { scale: 2, letterRendering: true, useCORS: true },
			jsPDF: { unit: "in", format: "a4", orientation: "portrait" as const },
		};

		html2pdf().set(opt).from(element).save();
	};

	// যদি কোনো অধ্যায় না থাকে (যেমন ভুল সাবজেক্ট)
	if (chaptersForSubject.length === 0) {
		return (
			<div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-8 px-4">
				<Helmet>
					<title>
						{lang === "bn" ? "সাবজেক্ট পাওয়া যায়নি" : "Subject Not Found"} |
						Kafa'ah
					</title>
				</Helmet>
				<div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
					<h2 className="text-2xl font-bold text-red-600 mb-4">
						{lang === "bn" ? "সাবজেক্ট পাওয়া যায়নি" : "Subject Not Found"}
					</h2>
					<p className="text-gray-600 dark:text-gray-400 mb-6">
						{lang === "bn"
							? "এই সাবজেক্টের জন্য এখনো কোনো অধ্যায় সংযুক্ত করা হয়নি।"
							: "No chapters have been added for this subject yet."}
					</p>
					<button
						onClick={handleBack}
						className="bg-green-600 dark:bg-blue-600 text-white px-6 py-2 rounded-lg"
					>
						{lang === "bn" ? "স্টাডি কর্নারে ফিরে যান" : "Back to Study Corner"}
					</button>
				</div>
				<div className="text-center text-xs text-gray-500 dark:text-gray-500 mt-8">
					{lang === "bn"
						? "প্রশ্ন বা উত্তরে ভুল পেলে দয়া করে আমাদের WhatsApp জানাবেন ।"
						: "Please let us know via WhatsApp if you find any mistakes in the questions or answers."}
				</div>
			</div>
		);
	}

	// ========== সেটআপ ভিউ ==========
	if (examState === "setup") {
		return (
			<>
				<Helmet>
					<title>{pageTitle}</title>
					<meta name="description" content={pageDescription} />
					<meta property="og:title" content={pageTitle} />
					<meta property="og:description" content={pageDescription} />
					<meta property="og:url" content={pageUrl} />
					<meta
						property="og:image"
						content="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaahlogo5.png"
					/>
				</Helmet>
				<div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-8 px-4">
					<div className="max-w-4xl mx-auto flex items-center justify-between mb-8">
						<button
							onClick={handleBack}
							className="text-green-600 dark:text-blue-400 hover:underline"
						>
							<i className="fas fa-arrow-left mr-2"></i>
							{lang === "bn" ? "পেছনে" : "Back"}
						</button>
						<img
							src="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaah.png"
							alt="Kafa'ah"
							className="h-10"
						/>
					</div>
					<div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
						<h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
							{subjectName} - {lang === "bn" ? "পরীক্ষা" : "Exam"}
						</h1>
						<p className="text-center text-gray-600 dark:text-gray-400 mb-8">
							{lang === "bn"
								? "অধ্যায় ও প্রশ্ন সংখ্যা নির্বাচন করুন"
								: "Select Chapters and Number of Questions"}
						</p>
						<div className="mb-6">
							<h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
								{lang === "bn" ? "অধ্যায় নির্বাচন করুন" : "Select Chapters"}
							</h2>
							<div className="grid md:grid-cols-2 gap-3">
								{chaptersForSubject.map((ch, index) => (
									<label
										key={index}
										className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-green-50 dark:hover:bg-gray-700"
									>
										<input
											type="checkbox"
											value={ch.name}
											checked={selectedChapters.includes(ch.name)}
											onChange={(e) => {
												if (e.target.checked) {
													setSelectedChapters([...selectedChapters, ch.name]);
												} else {
													setSelectedChapters(
														selectedChapters.filter((n) => n !== ch.name),
													);
												}
											}}
											className="w-4 h-4 text-green-600 dark:text-blue-600"
											disabled={ch.url === "#"}
										/>
										<span
											className={`text-gray-700 dark:text-gray-300 ${ch.url === "#" ? "opacity-50" : ""}`}
										>
											{ch.name}{" "}
											{ch.url === "#" &&
												(lang === "bn" ? "(শীঘ্রই আসছে)" : "(coming soon)")}
										</span>
									</label>
								))}
							</div>
						</div>
						<div className="mb-6">
							<h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
								{lang === "bn"
									? "প্রশ্ন সংখ্যা নির্বাচন করুন"
									: "Number of Questions"}
							</h2>
							<div className="flex flex-wrap gap-3">
								{[5, 15, 20, 25, 30, 50].map((num) => (
									<label
										key={num}
										className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-green-50 dark:hover:bg-gray-700"
									>
										<input
											type="radio"
											name="questionCount"
											value={num}
											checked={questionCount === num}
											onChange={() => setQuestionCount(num)}
											className="w-4 h-4 text-green-600 dark:text-blue-600"
										/>
										<span className="text-gray-700 dark:text-gray-300">
											{num}
										</span>
									</label>
								))}
							</div>
						</div>
						<div className="mb-8">
							<h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
								{lang === "bn"
									? "সময় নির্বাচন করুন (মিনিট)"
									: "Select Duration (minutes)"}
							</h2>
							<select
								value={duration}
								onChange={(e) => setDuration(Number(e.target.value))}
								className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
							>
								<option value="10">১০ মিনিট</option>
								<option value="20">২০ মিনিট</option>
								<option value="30">৩০ মিনিট</option>
								<option value="45">৪৫ মিনিট</option>
								<option value="60">৬০ মিনিট</option>
							</select>
						</div>
						<div className="mb-8 flex justify-between items-center">
							<button
								onClick={() =>
									setSelectedChapters(
										chaptersForSubject
											.filter((ch) => ch.url !== "#")
											.map((ch) => ch.name),
									)
								}
								className="text-green-600 dark:text-blue-400 hover:underline"
							>
								{lang === "bn"
									? "সমস্ত অধ্যায় নির্বাচন করুন"
									: "Select All Chapters"}
							</button>
							<span className="text-sm text-gray-500">
								{selectedChapters.length} টি অধ্যায় নির্বাচিত
							</span>
						</div>
						<button
							onClick={loadQuestions}
							disabled={selectedChapters.length === 0}
							className="w-full bg-green-600 dark:bg-blue-600 text-white py-4 rounded-xl text-xl font-bold hover:bg-green-700 dark:hover:bg-blue-700 transition disabled:opacity-50"
						>
							{lang === "bn" ? "পরীক্ষা শুরু করুন" : "Start Exam"}
						</button>
					</div>
					<div className="text-center text-xs text-gray-500 dark:text-gray-500 mt-8">
						{lang === "bn"
							? "প্রশ্ন বা উত্তরে ভুল পেলে দয়া করে আমাদের WhatsApp জানাবেন ।"
							: "Please let us know via WhatsApp if you find any mistakes in the questions or answers."}
					</div>
				</div>
			</>
		);
	}

	// ========== পরীক্ষা চলাকাল ==========
	if (examState === "running") {
		const currentQuestion = questions[currentQuestionIndex];
		return (
			<>
				<Helmet>
					<title>{`${subjectName} - ${groupName} | ${lang === "bn" ? "পরীক্ষা চলছে" : "Exam in Progress"}`}</title>
				</Helmet>
				<div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-8 px-4">
					<div className="max-w-4xl mx-auto flex items-center justify-between mb-8">
						<button
							onClick={handleBack}
							className="text-green-600 dark:text-blue-400 hover:underline"
						>
							<i className="fas fa-arrow-left mr-2"></i>
							{lang === "bn" ? "পেছনে" : "Back"}
						</button>
						<img
							src="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaah.png"
							alt="Kafa'ah"
							className="h-10"
						/>
						<div className="text-red-600 font-bold text-xl">
							{formatTime(timeLeft)}
						</div>
					</div>
					<div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
						<div className="mb-6 flex justify-between items-center">
							<span className="text-gray-600 dark:text-gray-400">
								{lang === "bn" ? "প্রশ্ন" : "Question"}{" "}
								{currentQuestionIndex + 1} / {questions.length}
							</span>
							<div className="w-64 bg-gray-200 rounded-full h-2.5">
								<div
									className="bg-green-600 dark:bg-blue-500 h-2.5 rounded-full"
									style={{
										width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
									}}
								></div>
							</div>
						</div>
						<h2 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-6">
							<Latex>{currentQuestion?.question}</Latex>
						</h2>
						<div className="space-y-3 mb-8">
							{currentQuestion &&
								Object.entries(currentQuestion.options).map(([key, value]) => (
									<label
										key={key}
										className={`block p-4 border rounded-lg cursor-pointer transition ${
											userAnswers[currentQuestion.id] === key
												? "border-green-500 dark:border-blue-500 bg-green-50 dark:bg-blue-900/30"
												: "border-gray-200 dark:hover:border-blue-300 hover:border-green-300"
										}`}
									>
										<div className="flex items-center">
											<input
												type="radio"
												name={`q-${currentQuestion.id}`}
												value={key}
												checked={userAnswers[currentQuestion.id] === key}
												onChange={() =>
													handleAnswerSelect(currentQuestion.id, key)
												}
												className="w-4 h-4 text-green-600"
											/>
											<span className="ml-3 text-2xl text-gray-700 dark:text-gray-300">
												{key}. <Latex>{value}</Latex>
											</span>
										</div>
									</label>
								))}
						</div>
						<div className="flex justify-between">
							<button
								onClick={() =>
									setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
								}
								disabled={currentQuestionIndex === 0}
								className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
							>
								{lang === "bn" ? "পূর্ববর্তী" : "Previous"}
							</button>
							{currentQuestionIndex === questions.length - 1 ? (
								<button
									onClick={handleSubmit}
									className="px-6 py-2 bg-green-600 dark:bg-blue-600 text-white rounded-lg hover:bg-green-700 dark:hover:bg-blue-700"
								>
									{lang === "bn" ? "জমা দিন" : "Submit"}
								</button>
							) : (
								<button
									onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
									className="px-6 py-2 bg-green-600 dark:bg-blue-600 text-white rounded-lg dark:hover:bg-blue-700 hover:bg-green-700"
								>
									{lang === "bn" ? "পরবর্তী" : "Next"}
								</button>
							)}
						</div>
					</div>
					<div className="text-center text-xs text-gray-500 dark:text-gray-500 mt-8">
						{lang === "bn"
							? "প্রশ্ন বা উত্তরে ভুল পেলে দয়া করে আমাদের WhatsApp জানাবেন ।"
							: "Please let us know via WhatsApp if you find any mistakes in the questions or answers."}
					</div>
				</div>
			</>
		);
	}

	// ========== ফলাফল ==========
	if (examState === "finished" && result) {
		return (
			<>
				<Helmet>
					<title>{`${subjectName} - ${groupName} | ${lang === "bn" ? "ফলাফল" : "Result"}`}</title>
				</Helmet>
				<div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-8 px-4">
					<div className="max-w-4xl mx-auto flex items-center justify-between mb-8">
						<button
							onClick={handleBack}
							className="text-green-600 hover:underline"
						>
							<i className="fas fa-arrow-left mr-2"></i>
							{lang === "bn" ? "পেছনে" : "Back"}
						</button>
						<img
							src="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaah.png"
							alt="Kafa'ah"
							className="h-10"
						/>
					</div>
					<div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
						<h1 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
							{lang === "bn" ? "ফলাফল" : "Result"}
						</h1>
						<div className="flex justify-center gap-4 mb-6 flex-wrap">
							<button
								onClick={handlePrint}
								className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition inline-flex items-center gap-2"
							>
								<i className="fas fa-print"></i>
								{lang === "bn" ? "প্রিন্ট" : "Print"}
							</button>
							<button
								onClick={downloadPDF}
								className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition inline-flex items-center gap-2"
							>
								<i className="fas fa-file-pdf"></i>
								{lang === "bn" ? "PDF ডাউনলোড" : "Download PDF"}
							</button>
						</div>
						<div className="text-center mb-8">
							<div className="text-5xl font-bold text-green-600 mb-2">
								{result.correct} / {result.total}
							</div>
							<p className="text-gray-600 dark:text-gray-400">
								{lang === "bn" ? "সঠিক উত্তর" : "Correct Answers"}
							</p>
						</div>
						<div className="space-y-6">
							{result.results.map((item, idx) => {
								const userOptionText: string =
									item.userAnswer && item.options[item.userAnswer]
										? item.options[item.userAnswer]
										: "";
								const correctOptionText: string =
									item.options[item.correctAnswer] || "";
								return (
									<div
										key={idx}
										className="border-b border-gray-200 dark:border-gray-700 pb-4"
									>
										<p className="text-xl font-medium mb-6">
											{idx + 1}. <Latex>{item.question}</Latex>
										</p>
										<div className="ml-4">
											<p
												className={`text-xl ${item.isCorrect ? "text-green-600" : "text-red-600"}`}
											>
												{lang === "bn" ? "আপনার উত্তর:" : "Your answer:"}{" "}
												<Latex>
													{item.userAnswer ?? ""}. {userOptionText}
												</Latex>
											</p>
											{!item.isCorrect && (
												<p className="mt-4 text-xl text-green-600">
													{lang === "bn" ? "সঠিক উত্তর:" : "Correct answer:"}{" "}
													<Latex>
														{item.correctAnswer}. {correctOptionText}
													</Latex>
												</p>
											)}
											<p className="text-xl text-gray-800 dark:text-gray-300 mt-6">
												<span className="font-medium">
													{lang === "bn" ? "ব্যাখ্যা:" : "Explanation:"}
												</span>{" "}
												<Latex>{item.explanation}</Latex>
											</p>
										</div>
									</div>
								);
							})}
						</div>
						<div className="mt-8 text-center">
							<button
								onClick={() => {
									setExamState("setup");
									setSelectedChapters([]);
									setUserAnswers({});
									setResult(null);
								}}
								className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
							>
								{lang === "bn" ? "আবার পরীক্ষা দিন" : "Take Another Exam"}
							</button>
						</div>
					</div>
					<div className="text-center text-xs text-gray-500 dark:text-gray-500 mt-8">
						{lang === "bn"
							? "প্রশ্ন বা উত্তরে ভুল পেলে দয়া করে আমাদের WhatsApp জানাবেন ।"
							: "Please let us know via WhatsApp if you find any mistakes in the questions or answers."}
					</div>
				</div>
			</>
		);
	}

	return null;
};

export default ExamCenter;
