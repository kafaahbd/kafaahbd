import ScrollAnimation from '../components/ScrollAnimation'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { lang } = useLanguage()

  return (
    <div className="min-h-screen bg-geometric-light dark:bg-geometric-dark py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {lang === 'bn' ? 'যোগাযোগ' : 'Contact'}
        </h1>
        <ScrollAnimation>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-green-600 dark:text-green-400 text-2xl"></i>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300">tanvirishrak04@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-green-600 dark:text-green-400 text-2xl"></i>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {lang === 'bn' ? 'ঠিকানা' : 'Address'}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">Rajshahi</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone text-green-600 dark:text-green-400 text-2xl"></i>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-700 dark:text-gray-300">01770676700</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Contact