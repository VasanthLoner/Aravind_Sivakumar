import { useEffect, useRef } from 'react'
import { achievements, certifications, competencies, education, experience, professionalSkills, softSkills } from '../data/portfolio'

function Counter({ value }) {
  const counterRef = useRef(null)
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/)

  useEffect(() => {
    if (!counterRef.current || !match) return undefined
    const target = Number(match[2])
    const decimals = match[2].includes('.') ? match[2].split('.')[1].length : 0
    const element = counterRef.current
    let frameId
    let startTime

    const render = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / 1100, 1)
      const eased = 1 - ((1 - progress) ** 3)
      element.textContent = `${match[1]}${(target * eased).toFixed(decimals)}${match[3]}`
      if (progress < 1) frameId = requestAnimationFrame(render)
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      frameId = requestAnimationFrame(render)
      observer.disconnect()
    }, { threshold: 0.45 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [match])

  return <strong ref={counterRef}>{value}</strong>
}

function PortfolioSections() {
  useEffect(() => {
    const items = document.querySelectorAll('.experience-item, .education-item, .certification-item')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.35 })

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <section className="statement section-pad" id="profile"><div className="section-kicker">01 / Credentials</div><div className="statement-copy"><h2 className="approach-heading">Certified in <em>improvement.</em></h2><div className="small-copy certification-list">{certifications.map((certification, index) => <p className="certification-item" key={certification}><span>0{index + 1}</span>{certification}</p>)}<a className="text-link" href="#work">See selected impact <span>↓</span></a></div></div></section>
      <section className="work section-pad" id="work"><div className="section-head reveal"><div className="section-kicker">02 / Selected impact</div><h2 className="approach-heading">Numbers with <em>weight.</em></h2></div><div className="metrics">{achievements.map(([value, label]) => <article className="metric reveal" key={value}><Counter value={value} /><span>{label}</span></article>)}</div></section>
      <section className="experience section-pad"><div className="section-kicker">03 / Experience</div><div className="experience-list">{experience.map((item, index) => <article className="experience-item reveal" key={item.company}><div className="experience-index">0{index + 1}</div><div><p className="period">{item.period}</p><h3>{item.role}</h3><p className="company">{item.company}</p><p className="experience-text">{item.text}</p></div></article>)}</div></section>
      <section className="professional-skills section-pad"><div className="section-kicker">04 / Skills</div><div className="skills-content"><h2>Tools and <em>people skills.</em></h2><div className="skills-list">{professionalSkills.map(([title, skills]) => <article className="skill-row" key={title}><h3>{title}</h3><p>{skills}</p></article>)}<article className="skill-row soft-skills"><h3>Soft Skills</h3><div>{softSkills.map((skill) => <span key={skill}>{skill}</span>)}</div></article></div></div></section>
      <section className="education section-pad"><div className="section-kicker">05 / Learning</div><div className="education-content"><h2>My <em>education.</em></h2><div className="education-list">{education.map(([period, degree, institution, result], index) => <article className="education-item" key={degree}><div className="education-node">0{index + 1}</div><div><p className="period">{period}</p><h3>{degree}</h3><p className="company">{institution}</p><p className="education-result">{result}</p></div></article>)}</div></div></section>
      <section className="capabilities section-pad"><div className="section-kicker">06 / Competencies</div><div className="competency-content"><h2>Core <em>competencies.</em></h2><div className="capability-grid">{competencies.map((item, index) => <div className="capability reveal" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></div></section>
      <footer className="footer section-pad"><div><p className="eyebrow">Available for the next meaningful challenge</p><h2>Let's make<br /><em>something work.</em></h2></div><a className="contact-button" href="mailto:er.s.aravind@gmail.com">Get in touch <span>↗</span></a><div className="footer-bottom"><span>Aravind Sivakumar © 2026</span><span>Manufacturing / Operations / Improvement</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  )
}

export default PortfolioSections
