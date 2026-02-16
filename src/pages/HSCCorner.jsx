import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import ScrollAnimation from '../components/ScrollAnimation'

const HSCCorner = () => {
  const { t, lang } = useLanguage()

  const groups = [
    {
      name: t('study.hsc.common'),
      icon: '📚',
      subjects: [
        { name: t('study.hsc.subjects.bangla'), path: '#' },
        { name: t('study.hsc.subjects.english'), path: 'https://kafaahbd.github.io/Eng2/' },
        { name: t('study.hsc.subjects.ict'), path: '#' },
      ]
    },
    {
      name: t('study.hsc.science'),
      icon: '🔬',
      subjects: [
        { name: t('study.hsc.subjects.physics'), path: '#' },
        { name: t('study.hsc.subjects.chemistry'), path: '#' },
        { name: t('study.hsc.subjects.biology'), path: '#' },
        { name: t('study.hsc.subjects.highermath'), path: '#' },
      ]
    },
    {
      name: t('study.hsc.arts'),
      icon: '🎨',
      subjects: [
        { name: t('study.hsc.subjects.history'), path: '#' },
        { name: t('study.hsc.subjects.islamic'), path: '#' },
        { name: t('study.hsc.subjects.civics'), path: '#' },
        { name: t('study.hsc.subjects.economics'), path: '#' },
        { name: t('study.hsc.subjects.geography'), path: '#' },
      ]
    },
    {
      name: t('study.hsc.commerce'),
      icon: '💼',
      subjects: [
        { name: t('study.hsc.subjects.accounting'), path: '#' },
        { name: t('study.hsc.subjects.management'), path: '#' },
        { name: t('study.hsc.subjects.finance'), path: '#' },
        { name: t('study.hsc.subjects.business'), path: '#' },
        { name: t('study.hsc.subjects.marketing'), path: '#' },
      ]
    }
  ]

  const handleSubjectClick = (path, e) => {
    e.preventDefault()
    window.open(path, '_blank')
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
            {t('study.hsc.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('study.hsc.subtitle')}
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {groups.map((group, groupIdx) => (
            <ScrollAnimation key={groupIdx}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition h-full">
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
                      className="w-full text-left px-4 py-3 hover:bg-green-50 dark:hover:bg-gray-700 rounded-lg transition flex items-center justify-between group border-b border-gray-100 dark:border-gray-700 last:border-0"
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
              ? 'এইচএসসি প্রতিটি সাবজেক্টের জন্য কন্টেন্ট খুব শীঘ্রই যোগ করা হবে ইনশাআল্লাহ। বর্তমানে লিঙ্কগুলো খালি আছে, যা পরবর্তীতে আপডেট করা হবে'
              : 'Content for each HSC subject will be added very soon InshaAllah. Currently the links are empty which will be updated later.'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HSCCorner