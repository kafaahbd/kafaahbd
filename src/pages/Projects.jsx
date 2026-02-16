import ScrollAnimation from '../components/ScrollAnimation'
import ProgressBar from '../components/ProgressBar'
import { useLanguage } from '../contexts/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()

  const projects = [
    {
      title: t('projects.study.title'),
      progress: '2%',
      desc: t('projects.study.desc'),
    },
    {
      title: t('projects.quran.title'),
      progress: '0%',
      desc: t('projects.quran.desc'),
    },
    {
      title: t('projects.english.title'),
      progress: '0%',
      desc: t('projects.english.desc'),
    },
    
  ]

  return (
    <div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Projects</h1>
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ScrollAnimation key={idx}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">{project.title}</h2>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{project.progress}</span>
                  </div>
                  <ProgressBar progress={project.progress} />
                </div>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{project.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
          <ScrollAnimation>
            <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-2xl text-center">
              <p className="text-xl text-gray-600 dark:text-gray-300">{t('projects.more')}</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

export default Projects