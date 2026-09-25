import { useEffect, useState } from 'react'
import portraitImage from '../assets/hero.png'

function AnimatedText({ text, className = '' }) {
  return (
    <span className={className} aria-hidden="true">
      {[...text].map((character, index) => (
        <span className="write-character" key={`${character}-${index}`} style={{ '--char-index': index }}>
          {character === ' ' ? '\u00a0' : character}
        </span>
      ))}
    </span>
  )
}

function JumpingText({ text }) {
  return (
    <span aria-label={text}>
      {[...text].map((character, index) => (
        <span className="jump-character" key={`${character}-${index}`} style={{ '--jump-index': index }} aria-hidden="true">
          {character === ' ' ? '\u00a0' : character}
        </span>
      ))}
    </span>
  )
}

function Hero() {
  const [introState, setIntroState] = useState('visible')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 4) return
      setIntroState('hiding')
      window.removeEventListener('scroll', handleScroll)
      window.setTimeout(() => setIntroState('hidden'), 450)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleIntroCta = (event) => {
    event.preventDefault()
    if (introState !== 'visible') return
    setIntroState('hiding')
    window.setTimeout(() => {
      setIntroState('hidden')
      window.requestAnimationFrame(() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' }))
    }, 450)
  }

  return (
    <>
      <section
        className={`portrait-intro is-${introState}`}
        style={{
          '--portrait-image': `url(${portraitImage})`,
          display: introState === 'hidden' ? 'none' : 'block',
        }}
      >
        <div className="portrait-intro-copy">
          <p className="eyebrow"><AnimatedText text="Industrial engineering / Dubai, UAE" /></p>
          <h1 aria-label="I'm Aravind Sivakumar."><AnimatedText text="I'm" /><span className="mobile-name-break"><br /></span><span className="desktop-name-space"> </span><AnimatedText text="Aravind" /><br /><em><AnimatedText text="Sivakumar." /></em></h1>
        </div>
        <a className="portrait-intro-foot" href="#top" onClick={handleIntroCta}><JumpingText text="Scroll to continue" /> <span>↓</span></a>
      </section>
      <section className="hero" id="top" style={{ '--hero-image': `url(${portraitImage})` }}>
        <div className="hero-grid" />
        <div className="hero-copy">
          <p className="eyebrow">Industrial engineering / Dubai, UAE</p>
          <h1>Systems that<br /><em>move</em> people<br />and production.</h1>
          <p className="hero-intro">I am a manufacturing engineer turning complex operations into clear, measurable momentum. With 6+ years across industrial engineering, factory operations, and continuous improvement, I bridge shop-floor reality with executive-level decisions.</p>
          <a className="text-link" href="#work">Explore my work <span>↓</span></a>
        </div>
        <div className="hero-foot"><a href="#profile">Scroll to continue <span>↓</span></a></div>
      </section>
    </>
  )
}

export default Hero
