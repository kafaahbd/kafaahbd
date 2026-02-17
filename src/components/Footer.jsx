import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t, lang } = useLanguage()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo and social */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <img 
            src="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaah.png" 
            alt="Kafa'ah" 
            className="h-12 w-auto mb-4 md:mb-0"
          />
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/kafaahbd" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="https://wa.me/8801837103985" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-600">
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Footer links line 1 */}
        <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
          <Link to="/about" className="text-gray-600 dark:text-gray-400 dark:hover:text-blue-400 hover:text-green-600">{t('footer.about')}</Link>
          <span>|</span>
          <Link to="/contact" className="text-gray-600 dark:text-gray-400 dark:hover:text-blue-400 hover:text-green-600">{t('footer.contact')}</Link>
          <span>|</span>
          <Link to="/team" className="text-gray-600 dark:text-gray-400 dark:hover:text-blue-400 hover:text-green-600">{t('footer.team')}</Link>
          <span>|</span>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScM3Usiy57D08kuVwDl__6vaR6YjRTCrIvGoCFH_U5wwF8kKw/viewform" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:hover:text-blue-400 dark:text-gray-400 hover:text-green-600">{t('footer.join')}</a>
          <span>|</span>
          <Link to="/projects" className="text-gray-600 dark:text-gray-400 dark:hover:text-blue-400 hover:text-green-600">{t('footer.projects')}</Link>
        </div>

        {/* Footer links line 2 */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
          <Link to="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-blue-400">{t('footer.privacy')}</Link>
          <span>|</span>
          <Link to="/joining-conditions" className="text-gray-600 dark:text-gray-400 dark:hover:text-blue-400 hover:text-green-600">{t('footer.joining')}</Link>
          <span>|</span>
          <Link to="/terms-conditions" className="text-gray-600 dark:text-gray-400 dark:hover:text-blue-400 hover:text-green-600">{t('footer.terms')}</Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-500">
          {lang === 'en' ? t('footer.copyright') : t('footer.copyright.bn')}
        </div>
      </div>
    </footer>
  )
}

export default Footer