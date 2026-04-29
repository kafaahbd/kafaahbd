import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ExternalLink, Home, Briefcase, GraduationCap, Info, UserPlus } from 'lucide-react'
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
    { name: t('nav.join'), path: '/join', icon: <UserPlus size={18} />},
    { name: t('nav.study'), path: '/study', icon: <GraduationCap size={18} /> },
    { name: t('nav.about'), path: '/about', icon: <Info size={18} /> },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <header 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled 
          ? 'py-2 bg-white/70 dark:bg-black/50 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/20 dark:border-white/10' 
          : 'py-4 bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
          <div className="flex justify-between items-center h-16">
            
            <Link to="/" className="relative z-10 group" aria-label="Kafa'ah Home">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaah.png" 
                alt="Kafa'ah Logo" 
                width="160"
                height="48"
                className="h-9 md:h-11 w-auto drop-shadow-sm"
              />
            </Link>

            <div className="hidden lg:flex items-center bg-white/40 dark:bg-white/5 px-6 py-2 rounded-full border border-gray-200/50 dark:border-white/10 backdrop-blur-md shadow-sm">
              <ul className="flex items-center space-x-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full flex items-center gap-2 ${
                        location.pathname === link.path 
                        ? 'text-emerald-700 dark:text-emerald-400' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-white/50 dark:hover:bg-white/5'
                      }`}
                      aria-current={location.pathname === link.path ? 'page' : undefined}
                    >
                      {location.pathname === link.path && (
                        <motion.div 
                          layoutId="nav-active"
                          className="absolute inset-0 bg-emerald-100/50 dark:bg-emerald-500/20 rounded-full -z-10"
                        />
                      )}
                      <span>{link.name}</span>
                      {link.external && <ExternalLink size={12} className="opacity-50" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex items-center space-x-2 bg-white/50 dark:bg-white/5 p-1 rounded-full border border-gray-200/50 dark:border-white/10 backdrop-blur-md shadow-sm">
                <LanguageToggle />
                <ThemeToggle />
              </div>

              <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle mobile menu"
                className="lg:hidden p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/30 transition-transform active:scale-95"
              >
                {isOpen ? <X size={22} className="drop-shadow-md" /> : <Menu size={22} className="drop-shadow-md" />}
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              ref={menuRef}
              className="lg:hidden absolute top-full left-0 w-full bg-white/90 dark:bg-[#05070a]/90 backdrop-blur-2xl border-b border-gray-100/50 dark:border-white/10 shadow-2xl"
            >
              <ul className="px-4 pt-4 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[15px] font-semibold transition-all ${
                        location.pathname === link.path
                        ? 'bg-emerald-50/80 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-100/50 dark:border-emerald-500/20'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50/80 dark:hover:bg-white/5 border border-transparent'
                      }`}
                      aria-current={location.pathname === link.path ? 'page' : undefined}
                    >
                      <span className={`p-2 rounded-xl shadow-sm ${location.pathname === link.path ? 'bg-white dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400'}`}>
                        {link.icon}
                      </span>
                      {link.name}
                      {link.external && <ExternalLink size={14} className="ml-auto opacity-40" />}
                    </Link>
                  </motion.li>
                ))}
                
                <li className="flex sm:hidden justify-between items-center p-4 mt-6 bg-gray-50/80 dark:bg-white/5 rounded-2xl border border-gray-100/50 dark:border-white/5">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Preferences</span>
                  <div className="flex gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                  </div>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Navbar