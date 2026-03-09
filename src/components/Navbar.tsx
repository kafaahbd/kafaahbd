import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion' // Animation
import { Menu, X, ExternalLink, Home, Briefcase, GraduationCap, Info, UserPlus } from 'lucide-react' // Icons
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

interface NavLink {
  name: string;
  path: string;
  icon: React.ReactNode;
  external?: boolean;
}

const Navbar: React.FC = () => {
  const { t } = useLanguage()
  const { darkMode } = useTheme()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const navLinks: NavLink[] = [
    { name: t('nav.home'), path: '/', icon: <Home size={18} /> },
    { name: t('nav.projects'), path: '/projects', icon: <Briefcase size={18} /> },
    { name: t('nav.join'), path: 'https://docs.google.com/forms/...', icon: <UserPlus size={18} />, external: true },
    { name: t('nav.study'), path: '/study', icon: <GraduationCap size={18} /> },
    { name: t('nav.about'), path: '/about', icon: <Info size={18} /> },
  ]

  // স্ক্রল করলে নেভবারের স্টাইল পরিবর্তন হবে
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ক্লিক আউটসাইড হ্যান্ডলার
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled 
          ? 'py-2 bg-white/90 dark:bg-[#05070a]/90 backdrop-blur-xl shadow-lg border-b border-gray-100 dark:border-white/5' 
          : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Section */}
            <Link to="/" className="relative z-10 group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaah.png" 
                alt="Kafa'ah" 
                width="160"
                height="48"
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Menu Links */}
            <div className="hidden lg:flex items-center bg-gray-100/50 dark:bg-white/5 px-6 py-2 rounded-full border border-gray-200/50 dark:border-white/5 backdrop-blur-md">
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    target={link.external ? "_blank" : "_self"}
                    className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full flex items-center gap-2 ${
                      location.pathname === link.path 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400'
                    }`}
                  >
                    {location.pathname === link.path && (
                      <motion.div 
                        layoutId="nav-active"
                        className="absolute inset-0 bg-green-500/10 dark:bg-green-500/20 rounded-full"
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                    {link.external && <ExternalLink size={12} className="opacity-50" />}
                  </Link>
                ))}
              </div>
            </div>

            {/* Toggles & Actions */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex items-center space-x-2 bg-gray-100 dark:bg-white/5 p-1 rounded-full border border-gray-200 dark:border-white/5">
                <LanguageToggle />
                <ThemeToggle />
              </div>

              {/* Mobile Menu Toggle */}
              <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="lg:hidden p-2.5 rounded-xl bg-green-600 text-white shadow-lg shadow-green-500/30 transition-transform active:scale-90"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              ref={menuRef}
              className="lg:hidden bg-white dark:bg-[#0d1117] border-b border-gray-100 dark:border-white/5 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    target={link.external ? "_blank" : "_self"}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-bold transition-all ${
                      location.pathname === link.path
                      ? 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                  >
                    <span className={`p-2 rounded-lg ${location.pathname === link.path ? 'bg-white dark:bg-green-500/20 shadow-sm' : 'bg-gray-100 dark:bg-white/5'}`}>
                      {link.icon}
                    </span>
                    {link.name}
                    {link.external && <ExternalLink size={14} className="ml-auto opacity-30" />}
                  </Link>
                ))}
                
                {/* Mobile Specific Toggles */}
                <div className="flex sm:hidden justify-between items-center p-4 mt-4 bg-gray-50 dark:bg-white/5 rounded-2xl">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Settings</span>
                  <div className="flex gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section এর জন্য স্পেসার */}
      <div className="h-20 md:h-24"></div>
    </>
  )
}

export default Navbar