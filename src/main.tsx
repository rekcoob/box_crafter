import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import ReactGA from 'react-ga4'

ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
