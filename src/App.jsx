import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Study from './pages/Study'
import SSCCorner from './pages/SSCCorner'
import HSCCorner from './pages/HSCCorner'
import AdmissionCorner from './pages/AdmissionCorner'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import JoiningConditions from './pages/JoiningConditions'
import TermsConditions from './pages/TermsConditions'
import Contact from './pages/Contact'
import Team from './pages/Team'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
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
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App