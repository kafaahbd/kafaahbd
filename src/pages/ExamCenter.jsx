import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { subjectChapters } from '../data/subjectChapters';

const ExamCenter = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { lang } = useLanguage();

  const group = searchParams.get('group'); // 'ssc', 'hsc', 'admission'
  const subject = searchParams.get('subject'); // 'physics', 'bangla', etc.

  // যদি গ্রুপ বা সাবজেক্ট না থাকে, তাহলে স্টাডি পৃষ্ঠায় ফেরত পাঠান
  useEffect(() => {
    if (!group || !subject) {
      navigate('/study');
    }
  }, [group, subject, navigate]);

  // এই সাবজেক্টের জন্য অধ্যায়ের তালিকা
  const chaptersForSubject = (group && subject && subjectChapters[group]?.[subject]) || [];

  const [selectedChapters, setSelectedChapters] = useState([]);
  const [duration, setDuration] = useState(20);
  const [examState, setExamState] = useState('setup');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [result, setResult] = useState(null);

  // সাবজেক্টের নাম বাংলায় দেখানোর জন্য (ঐচ্ছিক)
  const subjectName = (() => {
    const names = {
      bangla: 'বাংলা', english: 'ইংরেজি', ict: 'আইসিটি', math: 'গণিত',
      islam: 'ইসলাম শিক্ষা', physics: 'পদার্থ', chemistry: 'রসায়ন',
      biology: 'জীববিজ্ঞান', history: 'ইতিহাস', civics: 'পৌরনীতি',
      geography: 'ভূগোল', accounting: 'হিসাববিজ্ঞান', business: 'ব্যবসায় উদ্যোগ',
      finance: 'ফাইন্যান্স', highermath: 'উচ্চতর গণিত', agriculture: 'কৃষি',
      health: 'স্বাস্থ্য', management: 'ব্যবস্থাপনা', marketing: 'মার্কেটিং',
      'engineering-physics': 'ইঞ্জিনিয়ারিং পদার্থ', 'engineering-chemistry': 'ইঞ্জিনিয়ারিং রসায়ন',
      'engineering-math': 'ইঞ্জিনিয়ারিং গণিত', 'engineering-highermath': 'ইঞ্জিনিয়ারিং উচ্চতর গণিত',
      'medical-physics': 'মেডিকেল পদার্থ', 'medical-chemistry': 'মেডিকেল রসায়ন',
      'medical-biology': 'মেডিকেল জীববিজ্ঞান', 'university-bangla': 'বিশ্ববিদ্যালয় বাংলা',
      'university-english': 'বিশ্ববিদ্যালয় ইংরেজি', 'university-gk': 'সাধারণ জ্ঞান',
    };
    return names[subject] || subject;
  })();

  // নির্বাচিত অধ্যায় থেকে প্রশ্ন লোড করা
  const loadQuestions = async () => {
    if (selectedChapters.length === 0) {
      alert(lang === 'bn' ? 'অনুগ্রহ করে অন্তত একটি অধ্যায় নির্বাচন করুন' : 'Please select at least one chapter');
      return;
    }

    try {
      const allQuestions = [];
      for (const chapterId of selectedChapters) {
        const chapter = chaptersForSubject.find(c => c.name === chapterId); // আমরা নাম ধরে রাখছি, কিন্তু ID ব্যবহার করা ভালো
        if (chapter && chapter.url && chapter.url !== '#') {
          const response = await fetch(chapter.url);
          const data = await response.json();
          allQuestions.push(...data);
        } else {
          // URL না থাকলে স্কিপ বা মেসেজ
          console.warn('Chapter URL missing:', chapterId);
        }
      }
      if (allQuestions.length === 0) {
        alert(lang === 'bn' ? 'কোনো প্রশ্ন পাওয়া যায়নি' : 'No questions found');
        return;
      }
      // এলোমেলোভাবে ২০টি প্রশ্ন নির্বাচন (যদি পর্যাপ্ত না থাকে তাহলে সবগুলো)
      const shuffled = allQuestions.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, Math.min(20, allQuestions.length));
      setQuestions(selected);
      setExamState('running');
      setTimeLeft(duration * 60);
    } catch (error) {
      console.error('প্রশ্ন লোড করতে সমস্যা:', error);
      alert('প্রশ্ন লোড করা যায়নি। আবার চেষ্টা করুন।');
    }
  };

  // টাইমার
  useEffect(() => {
    if (examState === 'running' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmit(); // সময় শেষ হলে স্বয়ংক্রিয় সাবমিট
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [examState, timeLeft]);

  // উত্তর সংরক্ষণ
  const handleAnswerSelect = (questionId, answer) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  // পরীক্ষা জমা দেওয়া
  const handleSubmit = () => {
    let correct = 0;
    const results = questions.map(q => {
      const userAns = userAnswers[q.id];
      const isCorrect = userAns === q.correct_answer;
      if (isCorrect) correct++;
      return {
        ...q,
        userAnswer: userAns,
        isCorrect,
        correctAnswer: q.correct_answer
      };
    });
    setResult({ total: questions.length, correct, results });
    setExamState('finished');
  };

  // সময় ফরম্যাট mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // ব্যাক বাটন
  const handleBack = () => {
    navigate('/study');
  };

  // যদি কোনো অধ্যায় না থাকে (যেমন ভুল সাবজেক্ট)
  if (chaptersForSubject.length === 0) {
    return (
      <div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">সাবজেক্ট পাওয়া যায়নি</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">এই সাবজেক্টের জন্য এখনো কোনো অধ্যায় সংযুক্ত করা হয়নি।</p>
          <button onClick={handleBack} className="bg-green-600 text-white px-6 py-2 rounded-lg">
            স্টাডি কর্নারে ফিরে যান
          </button>
        </div>
        <div className="text-center text-xs text-gray-500 dark:text-gray-500 mt-8">
          © ২০২৫ Kafa’ah Islamic and Multiproject Company. সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    );
  }

  // ========== সেটআপ ভিউ ==========
  if (examState === 'setup') {
    return (
      <div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-8 px-4">
        {/* হেডার */}
        <div className="max-w-4xl mx-auto flex items-center justify-between mb-8">
          <button onClick={handleBack} className="text-green-600 hover:underline">
            <i className="fas fa-arrow-left mr-2"></i>
            {lang === 'bn' ? 'পেছনে' : 'Back'}
          </button>
          <img src="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaah.png" alt="Kafa'ah" className="h-10" />
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
            {subjectName} - {lang === 'bn' ? 'পরীক্ষা' : 'Exam'}
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            {lang === 'bn' ? 'অধ্যায় নির্বাচন করুন' : 'Select Chapters'}
          </p>

          {/* অধ্যায় নির্বাচন */}
          <div className="mb-6">
            <div className="grid md:grid-cols-2 gap-3">
              {chaptersForSubject.map((ch, index) => (
                <label key={index} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-green-50 dark:hover:bg-gray-700">
                  <input
                    type="checkbox"
                    value={ch.name}
                    checked={selectedChapters.includes(ch.name)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedChapters([...selectedChapters, ch.name]);
                      } else {
                        setSelectedChapters(selectedChapters.filter(n => n !== ch.name));
                      }
                    }}
                    className="w-4 h-4 text-green-600"
                    disabled={ch.url === '#'} // যেগুলোর URL নেই সেগুলো ডিসেবল
                  />
                  <span className={`text-gray-700 dark:text-gray-300 ${ch.url === '#' ? 'opacity-50' : ''}`}>
                    {ch.name} {ch.url === '#' && '(শীঘ্রই আসছে)'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* সময় নির্বাচন */}
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
              {lang === 'bn' ? 'সময় নির্বাচন করুন (মিনিট)' : 'Select Duration (minutes)'}
            </label>
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

          {/* ফুল বুক অপশন */}
          <div className="mb-8 flex justify-between items-center">
            <button
              onClick={() => setSelectedChapters(chaptersForSubject.filter(ch => ch.url !== '#').map(ch => ch.name))}
              className="text-green-600 hover:underline"
            >
              {lang === 'bn' ? 'সমস্ত অধ্যায় নির্বাচন করুন' : 'Select All Chapters'}
            </button>
            <span className="text-sm text-gray-500">
              {selectedChapters.length} টি অধ্যায় নির্বাচিত
            </span>
          </div>

          {/* স্টার্ট বাটন */}
          <button
            onClick={loadQuestions}
            disabled={selectedChapters.length === 0}
            className="w-full bg-green-600 text-white py-4 rounded-xl text-xl font-bold hover:bg-green-700 transition disabled:opacity-50"
          >
            {lang === 'bn' ? 'পরীক্ষা শুরু করুন' : 'Start Exam'}
          </button>
        </div>

        {/* কপিরাইট */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-500 mt-8">
          © ২০২৫ Kafa’ah Islamic and Multiproject Company. সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    );
  }

  // ========== পরীক্ষা চলাকাল ==========
  if (examState === 'running') {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-8 px-4">
        {/* হেডার */}
        <div className="max-w-4xl mx-auto flex items-center justify-between mb-8">
          <button onClick={handleBack} className="text-green-600 hover:underline">
            <i className="fas fa-arrow-left mr-2"></i>
            {lang === 'bn' ? 'পেছনে' : 'Back'}
          </button>
          <img src="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaah.png" alt="Kafa'ah" className="h-10" />
          <div className="text-red-600 font-bold text-xl">{formatTime(timeLeft)}</div>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          {/* প্রগ্রেস */}
          <div className="mb-6 flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">
              প্রশ্ন {currentQuestionIndex + 1} / {questions.length}
            </span>
            <div className="w-64 bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* প্রশ্ন */}
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            {currentQuestion?.question}
          </h2>

          {/* অপশন */}
          <div className="space-y-3 mb-8">
            {currentQuestion && Object.entries(currentQuestion.options).map(([key, value]) => (
              <label
                key={key}
                className={`block p-4 border rounded-lg cursor-pointer transition ${
                  userAnswers[currentQuestion.id] === key
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name={`q-${currentQuestion.id}`}
                    value={key}
                    checked={userAnswers[currentQuestion.id] === key}
                    onChange={() => handleAnswerSelect(currentQuestion.id, key)}
                    className="w-4 h-4 text-green-600"
                  />
                  <span className="ml-3 text-gray-700 dark:text-gray-300">
                    {key}. {value}
                  </span>
                </div>
              </label>
            ))}
          </div>

          {/* নেভিগেশন বাটন */}
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
            >
              {lang === 'bn' ? 'পূর্ববর্তী' : 'Previous'}
            </button>

            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                {lang === 'bn' ? 'জমা দিন' : 'Submit'}
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                {lang === 'bn' ? 'পরবর্তী' : 'Next'}
              </button>
            )}
          </div>
        </div>

        {/* কপিরাইট */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-500 mt-8">
          © ২০২৫ Kafa’ah Islamic and Multiproject Company. সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    );
  }

  // ========== ফলাফল ==========
  if (examState === 'finished' && result) {
    return (
      <div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-8 px-4">
        {/* হেডার */}
        <div className="max-w-4xl mx-auto flex items-center justify-between mb-8">
          <button onClick={handleBack} className="text-green-600 hover:underline">
            <i className="fas fa-arrow-left mr-2"></i>
            {lang === 'bn' ? 'পেছনে' : 'Back'}
          </button>
          <img src="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaah.png" alt="Kafa'ah" className="h-10" />
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            {lang === 'bn' ? 'ফলাফল' : 'Result'}
          </h1>
          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-green-600 mb-2">
              {result.correct} / {result.total}
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {lang === 'bn' ? 'সঠিক উত্তর' : 'Correct Answers'}
            </p>
          </div>

          {/* উত্তর ও ব্যাখ্যা */}
          <div className="space-y-6">
            {result.results.map((item, idx) => (
              <div key={idx} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <p className="font-medium mb-2">
                  {idx + 1}. {item.question}
                </p>
                <div className="ml-4">
                  <p className={`text-sm ${item.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {lang === 'bn' ? 'আপনার উত্তর:' : 'Your answer:'} {item.userAnswer}. {item.options[item.userAnswer]}
                  </p>
                  {!item.isCorrect && (
                    <p className="text-sm text-green-600">
                      {lang === 'bn' ? 'সঠিক উত্তর:' : 'Correct answer:'} {item.correctAnswer}. {item.options[item.correctAnswer]}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <span className="font-medium">{lang === 'bn' ? 'ব্যাখ্যা:' : 'Explanation:'}</span> {item.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* আবার পরীক্ষা দেওয়ার বাটন */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setExamState('setup');
                setSelectedChapters([]);
                setUserAnswers({});
                setResult(null);
              }}
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              {lang === 'bn' ? 'আবার পরীক্ষা দিন' : 'Take Another Exam'}
            </button>
          </div>
        </div>

        {/* কপিরাইট */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-500 mt-8">
          © ২০২৫ Kafa’ah Islamic and Multiproject Company. সর্বস্বত্ব সংরক্ষিত।
        </div>
      </div>
    );
  }
};

export default ExamCenter;