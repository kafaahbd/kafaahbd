import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'
import LoginModal from './LoginModal'

const Navbar = () => {
  const { t } = useLanguage()
  const { darkMode } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.join'), path: 'https://docs.google.com/forms/d/e/1FAIpQLScM3Usiy57D08kuVwDl__6vaR6YjRTCrIvGoCFH_U5wwF8kKw/viewform', external: true },
    { name: t('nav.study'), path: '/study' },
    { name: t('nav.about'), path: '/about' },
  ]

  const handleNavClick = (link) => {
    if (link.external) {
      window.open(link.path, '_blank')
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaah.png" 
                alt="Kafa'ah" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition ${
                      location.pathname === link.path ? 'text-green-600 dark:text-green-400 font-semibold' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            {/* Right side: toggles and login */}
            <div className="hidden md:flex items-center space-x-4">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={() => setShowLogin(true)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                {t('nav.login')}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <LanguageToggle />
                <ThemeToggle />
                <button
                  onClick={() => {
                    setShowLogin(true)
                    setIsOpen(false)
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  {t('nav.login')}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Spacer */}
      <div className="h-16"></div>

      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  )
}

export default Navbar