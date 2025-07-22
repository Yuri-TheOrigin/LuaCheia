import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './AnimatedRoutes'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AnimatedRoutes />
    </Router>
  </StrictMode>,
)