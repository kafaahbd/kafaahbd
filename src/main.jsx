import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import App from './App'
import './index.css'

// ===== যোগ করুন: GitHub Pages redirect handling =====
(function handleRedirect() {
  const redirect = sessionStorage.getItem('redirect');
  if (redirect) {
    sessionStorage.removeItem('redirect');
    // replace the current url with the stored path
    const fullPath = window.location.origin + redirect;
    window.history.replaceState(null, null, fullPath);
  }
})();
// ===== শেষ =====

const basename = '/kafaahbd';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);