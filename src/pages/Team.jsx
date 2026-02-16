import ScrollAnimation from '../components/ScrollAnimation'
import { useLanguage } from '../contexts/LanguageContext'

const Team = () => {
  const { lang } = useLanguage()

  // Placeholder team members (no human photos)
  const members = [
    { name: 'Tanvir Ishrak', role: lang === 'bn' ? 'প্রধান স্থপতি' : 'Lead Architect' },
    { name: 'Team Member 2', role: lang === 'bn' ? 'সিনিয়র ডেভেলপার' : 'Senior Developer' },
    { name: 'Team Member 3', role: lang === 'bn' ? 'প্রকল্প ব্যবস্থাপক' : 'Project Manager' },
    { name: 'Team Member 4', role: lang === 'bn' ? 'ইসলামিক বিষয় বিশেষজ্ঞ' : 'Islamic Content Specialist' },
    { name: 'Marjuk Mahmud', role: lang === 'bn' ? 'পরিকল্পনা প্রসূতকারী' : 'Idea Generator' },
  ]

  return (
    <div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {lang === 'bn' ? 'আমাদের টিম' : 'Our Team'}
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <ScrollAnimation key={idx}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
                <i className="fas fa-user-circle text-6xl text-green-600 dark:text-green-400 mx-auto mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team