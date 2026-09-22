import { useEffect, useState } from 'react'

function SiteLoader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const start = performance.now()
    const hideLoader = () => {
      const remaining = Math.max(0, 650 - (performance.now() - start))
      window.setTimeout(() => {
        setIsLeaving(true)
        window.setTimeout(() => setIsVisible(false), 500)
      }, remaining)
    }

    if (document.readyState === 'complete') {
      requestAnimationFrame(hideLoader)
    } else {
      window.addEventListener('load', hideLoader, { once: true })
    }

    return () => window.removeEventListener('load', hideLoader)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`site-loader${isLeaving ? ' is-leaving' : ''}`} role="status" aria-label="Loading portfolio">
      <div className="loader-topline"><span>AS.</span><span>Portfolio / 2026</span></div>
      <div className="loader-center"><strong>AS<span>.</span></strong><span>Aravind Sivakumar</span></div>
      <div className="loader-bottomline"><span>Manufacturing engineer</span><span className="loader-progress" /></div>
    </div>
  )
}

export default SiteLoader
