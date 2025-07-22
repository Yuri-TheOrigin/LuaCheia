import { useLocation, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import App from './App.jsx'
import Sobre from './pages/Sobre.jsx'
import Callisto from './pages/Callisto.jsx'
import PageTransition from './components/PageTransition'

export default function AnimatedRoutes() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 1000) // duração da animação
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      {loading && <PageTransition />}
      <Routes location={location}>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/callisto" element={<Callisto />} />
      </Routes>
    </>
  )
}