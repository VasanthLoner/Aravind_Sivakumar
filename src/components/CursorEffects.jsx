import { useEffect } from 'react'

function CursorEffects() {
  useEffect(() => {
    const root = document.documentElement
    const media = window.matchMedia('(pointer: fine)')
    if (!media.matches) return undefined

    const moveCursor = (event) => {
      root.style.setProperty('--cursor-x', `${event.clientX}px`)
      root.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', moveCursor)
    return () => window.removeEventListener('pointermove', moveCursor)
  }, [])

  return <div className="cursor-glow" aria-hidden="true" />
}

export default CursorEffects
