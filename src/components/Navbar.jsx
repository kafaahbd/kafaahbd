import { useState, useEffect, useRef } from 'react'
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
  const menuRef = useRef(null) // মোবাইল মেনু রেফ
  const buttonRef = useRef(null) // টগল বাটন রেফ

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.join'), path: 'https://docs.google.com/forms/d/e/1FAIpQLScM3Usiy57D08kuVwDl__6vaR6YjRTCrIvGoCFH_U5wwF8kKw/viewform', external: true },
    { name: t('nav.study'), path: '/study' },
    { name: t('nav.about'), path: '/about' },
  ]

  // ক্লিক আউটসাইড হ্যান্ডলার
  useEffect(() => {
    const handleClickOutside = (event) => {
      // যদি মেনু খোলা থাকে এবং ক্লিক করা জায়গাটা মেনু বা বাটনের ভিতরে না হয়
      if (isOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          buttonRef.current && 
          !buttonRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // লিঙ্ক ক্লিক করলে মেনু বন্ধ হবে
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
                    className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-blue-400 transition"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-blue-400 transition ${
                      location.pathname === link.path ? 'text-green-600 dark:text-blue-400 font-semibold' : ''
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
                className="px-4 py-2 bg-green-600 dark:bg-blue-600 text-white rounded-lg hover:bg-green-700 dark:hover:bg-blue-700 transition"
              >
                {t('nav.login')}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-300 p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Slide Down Animation */}
          <div
            ref={menuRef}
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-2 space-y-2">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition ${
                      location.pathname === link.path ? 'text-green-600 dark:text-blue-400 font-semibold' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              
              {/* Mobile Toggles */}
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <LanguageToggle />
                <ThemeToggle />
                <button
                  onClick={() => {
                    setShowLogin(true)
                    setIsOpen(false)
                  }}
                  className="flex-1 px-4 py-2 bg-green-600 dark:bg-blue-600  text-white rounded-lg hover:bg-green-700 dark:hover:bg-blue-700 transition text-center"
                >
                  {t('nav.login')}
                </button>
              </div>
            </div>
          </div>
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