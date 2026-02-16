import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import ScrollAnimation from '../components/ScrollAnimation'

const SSCCorner = () => {
  const { t, lang } = useLanguage()

  const groups = [
    {
      name: t('study.common'),
      icon: '📚',
      subjects: [
        { name: t('study.subjects.bangla'), path: '#' },
        { name: t('study.subjects.english'), path: '#' },
        { name: t('study.subjects.ict'), path: '#' },
        { name: t('study.subjects.math'), path: '#' },
        { name: t('study.subjects.islam'), path: '#' },
      ]
    },
    {
      name: t('study.science'),
      icon: '🔬',
      subjects: [
        { name: t('study.subjects.physics'), path: '#' },
        { name: t('study.subjects.chemistry'), path: '#' },
        { name: t('study.subjects.biology'), path: '#' },
        { name: t('study.subjects.bgs'), path: '#' },
      ]
    },
    {
      name: t('study.arts'),
      icon: '🎨',
      subjects: [
        { name: t('study.subjects.history'), path: '#' },
        { name: t('study.subjects.civics'), path: '#' },
        { name: t('study.subjects.geography'), path: '#' },
        { name: t('study.subjects.bgs'), path: '#' },
      ]
    },
    {
      name: t('study.commerce'),
      icon: '💼',
      subjects: [
        { name: t('study.subjects.accounting'), path: '#' },
        { name: t('study.subjects.business'), path: '#' },
        { name: t('study.subjects.finance'), path: '#' },
        { name: t('study.subjects.bgs'), path: '#' },
      ]
    },
    {
      name: t('study.optional'),
      icon: '⭐',
      subjects: [
        { name: t('study.subjects.highermath'), path: '#' },
        { name: t('study.subjects.agriculture'), path: '#' },
        { name: t('study.subjects.health'), path: '#' },
      ]
    }
  ]

  const handleSubjectClick = (path, e) => {
    e.preventDefault()
    // This will open in a new tab/window
    window.open('#', '_blank')
    // You can replace '#' with actual links later
  }

  return (
    <div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            to="/study" 
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline mb-4"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            {t('study.back')}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {t('study.ssc.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('study.ssc.subtitle')}
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {groups.map((group, groupIdx) => (
            <ScrollAnimation key={groupIdx}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                {/* Group Header */}
                <div className="bg-green-600 dark:bg-green-700 p-4 text-white">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{group.icon}</span>
                    <h2 className="text-xl font-bold">{group.name}</h2>
                  </div>
                </div>

                {/* Subjects List */}
                <div className="p-4">
                  {group.subjects.map((subject, subIdx) => (
                    <button
                      key={subIdx}
                      onClick={(e) => handleSubjectClick(subject.path, e)}
                      className="w-full text-left px-4 py-3 hover:bg-green-50 dark:hover:bg-gray-700 rounded-lg transition flex items-center justify-between group"
                    >
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                        {subject.name}
                      </span>
                      <i className="fas fa-external-link-alt text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 text-sm"></i>
                    </button>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 text-center">
          <i className="fas fa-info-circle text-green-600 dark:text-green-400 text-3xl mb-3"></i>
          <p className="text-gray-700 dark:text-gray-300">
            {lang === 'bn' 
              ? 'ইনশাআল্লাহ্, খুব শীঘ্রই প্রতিটি বিষয়ের কন্টেন্ট বা বিষয়বস্তু যুক্ত করা হবে। বর্তমানে লিঙ্কগুলো খালি আছে, যা পরবর্তীতে আপডেট করা হবে'
              : 'Content for each subject will be added very soon InshaAllah. Currently the links are empty which will be updated later.'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SSCCorner