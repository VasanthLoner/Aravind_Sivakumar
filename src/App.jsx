import { useEffect } from 'react'
import './App.css'
import CursorEffects from './components/CursorEffects'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import PortfolioSections from './components/PortfolioSections'
import SiteLoader from './components/SiteLoader'

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    if (!window.location.hash) window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <SiteLoader />
      <CursorEffects />
      <Navigation />
      <Hero />
      <PortfolioSections />
    </main>
  )
}

export default App
