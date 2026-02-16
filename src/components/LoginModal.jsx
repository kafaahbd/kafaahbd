import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LoginModal = ({ isOpen, onClose }) => {
  const { t, lang } = useLanguage()
  const [showMessage, setShowMessage] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowMessage(true)
    // Auto hide after 3 seconds
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          {lang === 'bn' ? 'লগইন' : 'Login'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {lang === 'bn' ? 'ইমেইল' : 'Email'}
            </label>
            <input 
              type="email" 
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {lang === 'bn' ? 'পাসওয়ার্ড' : 'Password'}
            </label>
            <input 
              type="password" 
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition font-medium"
          >
            {lang === 'bn' ? 'লগইন করুন' : t('nav.login')}
          </button>
        </form>

        {/* Success/Info Message */}
        {showMessage && (
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-md">
            <p className="text-green-700 dark:text-green-400 text-center font-medium">
              <i className="fas fa-info-circle mr-2"></i>
              {lang === 'bn' 
                ? 'এই ফিচার খুব শীঘ্রই আসছে ইনশাআল্লাহ!' 
                : 'This feature will be available soon InshaAllah!'}
            </p>
          </div>
        )}

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
          {lang === 'bn' ? 'ডেমো মোড - কোন কার্যকারিতা নেই' : 'Demo mode - no functionality'}
        </p>
      </div>
    </div>
  )
}

export default LoginModal