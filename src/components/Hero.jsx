import portraitImage from '../assets/hero.png'

function Hero() {
  return (
    <section className="hero" id="top" style={{ '--portrait-image': `url(${portraitImage})` }}>
      <div className="hero-grid" />
      <div className="hero-copy">
        <p className="eyebrow">Industrial engineering / Dubai, UAE</p>
        <h1>Systems that<br /><em>move</em> people<br />and production.</h1>
        <p className="hero-intro">I am a manufacturing engineer turning complex operations into clear, measurable momentum. With 6+ years across industrial engineering, factory operations, and continuous improvement, I bridge shop-floor reality with executive-level decisions.</p>
        <a className="text-link" href="#work">Explore my work <span>↓</span></a>
      </div>
      <div className="portrait-wrap">
        <div className="portrait-glow" />
        <div className="portrait-frame">
          <div className="portrait-image" role="img" aria-label="Portrait of Aravind Sivakumar" />
        </div>
        <div className="orbit-label">Precision<br /><span>in motion</span></div>
      </div>
      <div className="hero-foot"><span>Scroll to continue</span><span>06° 14' N / 55° 16' E</span></div>
    </section>
  )
}

export default Hero
