import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const StudyCornerRedirect: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-geometric-light dark:bg-geometric-dark flex items-center justify-center px-4">
      <Helmet>
        <title>{lang === 'bn' ? 'স্টাডি কর্নার আলাদা' : 'Study Corner Separated'}</title>
      </Helmet>
      <div className="max-w-2xl mx-auto text-center bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl border border-green-100 dark:border-blue-900">
        <div className="text-7xl mb-6">📖</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {lang === 'bn' ? 'স্টাডি কর্নার আলাদা করা হয়েছে' : 'Study Corner is now separated'}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {lang === 'bn'
            ? 'স্টাডি কর্নার এখন মূল ওয়েবসাইট থেকে আলাদা একটি প্ল্যাটফর্মে স্থানান্তরিত হয়েছে। নিচের বাটনে ক্লিক করে নতুন স্টাডি কর্নারে যান।'
            : 'Study Corner has been moved to a separate platform. Click the button below to go to the new Study Corner.'}
        </p>
        <a
          href="https://kafaahbd.github.io/study" // ← এখানে আপনার নতুন অ্যাপের URL দিন
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 dark:bg-blue-600 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:bg-green-700 dark:hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
        >
          {lang === 'bn' ? 'স্টাডি কর্নারে যান' : 'Go to Study Corner'}
        </a>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
          {lang === 'bn'
            ? 'নতুন ঠিকানা: https://kafaahbd.github.io/study'
            : 'New address: https://kafaahbd.github.io/study'}
        </p>
      </div>
    </div>
  );
};

export default StudyCornerRedirect;