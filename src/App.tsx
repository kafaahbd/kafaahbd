import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useLanguage } from './contexts/LanguageContext'

const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Study = lazy(() => import('./pages/Study'))
const SSCCorner = lazy(() => import('./pages/SSCCorner'))
const HSCCorner = lazy(() => import('./pages/HSCCorner'))
const AdmissionCorner = lazy(() => import('./pages/AdmissionCorner'))
const About = lazy(() => import('./pages/About'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const JoiningConditions = lazy(() => import('./pages/JoiningConditions'))
const TermsConditions = lazy(() => import('./pages/TermsConditions'))
const Contact = lazy(() => import('./pages/Contact'))
const Team = lazy(() => import('./pages/Team'))
const ExamCenter = lazy(() => import('./pages/ExamCenter'))

const App: React.FC = () => {
  const { lang } = useLanguage()

  const PageLoader = () => (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-green-600 dark:border-blue-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="h-4 w-4 bg-green-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
        </div>
        <p className="text-center mt-4 text-gray-600 dark:text-gray-400 font-medium">
          {lang === 'bn' ? 'পৃষ্ঠা লোড হচ্ছে...' : 'Loading page...'}
        </p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/study" element={<Study />} />
            <Route path="/study/ssc" element={<SSCCorner />} />
            <Route path="/study/hsc" element={<HSCCorner />} />
            <Route path="/study/admission" element={<AdmissionCorner />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/joining-conditions" element={<JoiningConditions />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/study/exam" element={<ExamCenter />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App