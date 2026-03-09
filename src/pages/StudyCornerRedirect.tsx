import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

const StudyCornerRedirect: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-geometric-light dark:bg-geometric-dark flex items-center justify-center p-2 md:p-4">
      <SEO 
        title={lang === 'bn' ? 'কাফাহ স্টাডি কর্নার' : 'Kafaah Study Corner'}
        description={lang === 'bn' ? 'আপনার একাডেমিক প্রস্তুতিকে আরও সহজ ও কার্যকর করতে আমাদের বিশেষ লার্নিং প্ল্যাটফর্ম।' : 'Our specialized learning platform to make your academic preparation easier and more effective.'}
        url="https://kafaahbd.com/study"
        image="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/home.jpg"
      />
      
      {/* Container Width: 99% on mobile, 95% on desktop with a max-limit */}
      <div className="w-[99%] md:w-[95%] max-w-4xl mx-auto text-center bg-white dark:bg-gray-800 p-6 md:p-10 rounded-3xl shadow-2xl border border-green-100 dark:border-blue-900">
        
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {lang === 'bn' ? 'কাফাহ স্টাডি কর্নার' : 'Kafaah Study Corner'}
        </h1>

        {/* --- SMALLER IMAGE SECTION START --- */}
        {/* We use a flex container to center the small image.
            The max-w-sm class limits the width of the image.
            Adjust max-w-sm to other sizes (e.g., max-w-xs) if needed.
        */}
        <div className="mb-8 flex justify-center">
           <img 
            src="https://raw.githubusercontent.com/kafaahbd/Eng2/refs/heads/main/stufy.jpg" 
            alt="Kafaah Study Corner" 
            className="max-w-xs md:max-w-sm h-auto object-cover rounded-2xl shadow-md border-4 border-gray-100 dark:border-gray-700"
           />
        </div>
        {/* --- SMALLER IMAGE SECTION END --- */}

        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          {lang === 'bn'
            ? 'সব ধরণের শিক্ষামূলক রিসোর্স, কুইজ এবং স্টাডি ম্যাটেরিয়াল এখন এক জায়গায়। আপনার শেখার অভিজ্ঞতাকে আরও সমৃদ্ধ করতে আজই আমাদের নতুন প্ল্যাটফর্মে যোগ দিন।'
            : 'All educational resources, quizzes, and study materials are now in one place. Join our new platform today to enrich your learning experience.'}
        </p>

        <a
          href="https://study.kafaahbd.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 dark:bg-blue-600 text-white px-12 py-4 rounded-xl text-xl font-semibold hover:bg-green-700 dark:hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
        >
          {lang === 'bn' ? 'এখনই প্রবেশ করুন' : 'Enter Now'}
        </a>

        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-8">
          {lang === 'bn'
            ? 'আমাদের অফিশিয়াল স্টাডি প্ল্যাটফর্ম: study.kafaahbd.com'
            : 'Our official study platform: study.kafaahbd.com'}
        </p>
      </div>
    </div>
  );
};

export default StudyCornerRedirect;