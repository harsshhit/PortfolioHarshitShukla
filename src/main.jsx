import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { reportWebVitals, logWebVitals } from './utils/webVitals'
import { createPersonStructuredData, setStructuredData } from './utils/seo'

// Create a root for React 18
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

// Render the app
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Report web vitals
reportWebVitals(logWebVitals)

// Add structured data for SEO
setStructuredData(createPersonStructuredData())

// Add event listener for page visibility changes to optimize performance
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    // Page is hidden, reduce animations and background processing
    document.body.classList.add('page-hidden')
  } else {
    // Page is visible again, restore normal operation
    document.body.classList.remove('page-hidden')
  }
})
