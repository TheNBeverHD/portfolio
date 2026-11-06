import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { approach, copy, links, projects, services, stack, type Language, type Localized, type Project } from './content'
import './styles.css'

const tr = (value: Localized, language: Language) => value[language]
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

function ExternalLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<span aria-hidden="true"> ↗</span></a>
}

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem('portfolio-language') === 'uk' ? 'uk' : 'en' } catch { return 'en' }
  })
  const [hash, setHash] = useState(() => window.location.hash)
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = (value: Localized) => tr(value, language)
  const activeProject = projects.find(project => hash === `#project/${project.id}`)

  useEffect(() => {
    const onHash = () => { setHash(window.location.hash); setMobileOpen(false) }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    try { localStorage.setItem('portfolio-language', language) } catch { /* private browsing */ }
    document.documentElement.lang = language === 'uk' ? 'uk' : 'en'
    const title = language === 'uk' ? 'Незалежна розробка програмного забезпечення' : 'Independent Software Engineering'
    document.title = activeProject ? `${activeProject.name} · ${title}` : title
    document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'uk'
      ? 'Telegram-системи для бізнесу, full-stack вебзастосунки, Kotlin Multiplatform і практична розробка програмного забезпечення.'
      : 'Independent developer for Telegram business systems, full-stack applications, Kotlin Multiplatform, and practical software engineering.')
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', language === 'uk'
      ? 'Telegram-системи, вебзастосунки, кросплатформне ПЗ та практичні інженерні рішення.'
      : 'Telegram business systems, full-stack applications, cross-platform software, and practical engineering.')
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'uk' ? 'uk_UA' : 'en_US')
  }, [language, activeProject])

  useEffect(() => {
    if (activeProject) { window.scrollTo(0, 0); return }
    const id = hash.slice(1)
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
  }, [hash, activeProject])

  const nav = [
    { id: 'home', label: copy.nav.home }, { id: 'projects', label: copy.nav.projects },
    { id: 'services', label: copy.nav.services }, { id: 'about', label: copy.nav.about },
    { id: 'contact', label: copy.nav.contact },
  ]

  return <>
    <a href="#main" className="skip-link">{t(copy.skip)}</a>
    <header className="site-header">
      <div className="shell nav-shell">
        <a className="brand" href="#home" onClick={() => setMobileOpen(false)}><span className="brand-mark" aria-hidden="true">✳</span>{t(copy.brand)}</a>
        <nav id="mobile-navigation" className={mobileOpen ? 'nav-links is-open' : 'nav-links'} aria-label={language === 'uk' ? 'Головна навігація' : 'Main navigation'}>
          {nav.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setMobileOpen(false)}>{t(item.label)}</a>)}
          <ExternalLink href={links.telegram} className="mobile-contact">{t(copy.telegramCta)}</ExternalLink>
        </nav>
        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label={language === 'uk' ? 'Мова' : 'Language'}>
            <button type="button" className={language === 'en' ? 'active' : ''} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
            <span aria-hidden="true">/</span>
            <button type="button" className={language === 'uk' ? 'active' : ''} aria-pressed={language === 'uk'} onClick={() => setLanguage('uk')}>UA</button>
          </div>
          <ExternalLink href={links.telegram} className="nav-contact">{t(copy.nav.contact)}</ExternalLink>
          <button className="menu-toggle" type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? (language === 'uk' ? 'Закрити меню' : 'Close menu') : (language === 'uk' ? 'Відкрити меню' : 'Open menu')} onClick={() => setMobileOpen(v => !v)}><span></span><span></span></button>
        </div>
      </div>
    </header>

    {activeProject ? <CaseStudy project={activeProject} language={language} /> : <main id="main">
      <section id="home" className="hero shell">
        <div className="hero-topline"><span>{t(copy.heroEyebrow)}</span><span className="availability"><i aria-hidden="true"></i>{t(copy.role)}</span></div>
        <div className="hero-content">
          <p className="hero-index">[ 01 — 06 ]</p>
          <h1>{t(copy.heroTitle)}</h1>
          <div className="hero-bottom">
            <p>{t(copy.heroText)}</p>
            <div className="hero-actions"><ExternalLink href={links.telegram} className="button button-primary">{t(copy.telegramCta)}</ExternalLink><a href="#projects" className="button button-text">{t(copy.projectsCta)} <span aria-hidden="true">↓</span></a></div>
          </div>
        </div>
        <div className="hero-foot"><span>{language === 'uk' ? 'TELEGRAM / ВЕБ / KMP' : 'TELEGRAM / WEB / KMP'}</span><span>{language === 'uk' ? 'ГОРТАЙТЕ ДАЛІ ↓' : 'SCROLL TO EXPLORE ↓'}</span></div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="shell">
          <SectionIntro label={t(copy.introLabel)} title={t(copy.introTitle)} text={t(copy.introText)} />
          <div className="project-list">
            {projects.map((project, index) => <article className={`project-row project-row-${index + 1}`} key={project.id}>
              <div className="project-info"><div className="project-meta"><span>{project.number} / 03</span><span>{t(project.category)}</span></div><h3>{project.name}</h3><p>{t(project.description)}</p><div className="technology-list">{project.technologies.slice(0, 5).map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-actions"><a href={`#project/${project.id}`} className="inline-link">{t(copy.viewStudy)} <span aria-hidden="true">↗</span></a><ExternalLink href={project.repo} className="subtle-link">GitHub</ExternalLink></div></div>
              <a href={`#project/${project.id}`} className="project-visual" aria-label={`${t(copy.viewStudy)}: ${project.name}`}><img src={asset(project.images[0].path)} alt={t(project.images[0].alt)} loading="lazy" />{project.id === 'appointment-booking-bot' && <span className="visual-note">{t(copy.visualNote)}</span>}<span className="visual-corner" aria-hidden="true">↗</span></a>
            </article>)}
          </div>
          <div className="github-strip"><div><span className="eyebrow">{language === 'uk' ? 'ВІДКРИТИЙ КОД / ПУБЛІЧНІ РЕПОЗИТОРІЇ' : 'OPEN SOURCE / PUBLIC REPOSITORIES'}</span><p>{language === 'uk' ? 'Повний перелік відкритих проєктів — у GitHub.' : 'See the complete public project record on GitHub.'}</p></div><ExternalLink href={links.github} className="inline-link">{t(copy.githubCta)}</ExternalLink></div>
        </div>
      </section>

      <section id="services" className="section services-section"><div className="shell"><SectionIntro label={t(copy.serviceLabel)} title={t(copy.serviceTitle)} text={t(copy.serviceIntro)} /><div className="services-grid">{services.map(service => <article className={service.featured ? 'service-card featured' : 'service-card'} key={service.number}><span className="service-number">{service.number}</span><div><h3>{t(service.title)}</h3><p>{t(service.text)}</p></div><span className="service-sigil" aria-hidden="true">↗</span></article>)}</div></div></section>

      <section className="section approach-section"><div className="shell"><SectionIntro label={t(copy.approachLabel)} title={t(copy.approachTitle)} text={t(copy.approachText)} /><div className="approach-grid">{approach.map(item => <article key={item.number}><span>{item.number} / 04</span><h3>{t(item.title)}</h3><p>{t(item.text)}</p></article>)}</div></div></section>

      <section className="section stack-section"><div className="shell"><SectionIntro label={t(copy.stackLabel)} title={t(copy.stackTitle)} text={t(copy.stackText)} /><div className="stack-grid">{stack.map(group => <div className="stack-group" key={group.title.en}><h3>{t(group.title)}</h3><div>{group.values.map(value => <span key={value}>{value}</span>)}</div></div>)}</div></div></section>

      <section id="about" className="section about-section"><div className="shell about-grid"><div><span className="eyebrow">{t(copy.aboutLabel)}</span><h2>{t(copy.aboutTitle)}</h2></div><div className="about-copy"><p>{t(copy.aboutText)}</p><ExternalLink href={links.github} className="inline-link">{t(copy.githubCta)}</ExternalLink></div></div></section>

      <section id="contact" className="contact-section"><div className="shell contact-inner"><span className="eyebrow">{t(copy.contactLabel)}</span><h2>{t(copy.contactTitle)}</h2><div className="contact-bottom"><p>{t(copy.contactText)}</p><ExternalLink href={links.telegram} className="button button-dark">{t(copy.telegramCta)}</ExternalLink></div></div></section>
    </main>}

    <footer className="site-footer"><div className="shell footer-inner"><a className="brand" href="#home"><span className="brand-mark" aria-hidden="true">✳</span>{t(copy.brand)}</a><p>{t(copy.footer)}</p><div><ExternalLink href={links.telegram}>Telegram</ExternalLink><ExternalLink href={links.github}>GitHub</ExternalLink><a href="#home">↑ {language === 'uk' ? 'Вгору' : 'Top'}</a></div></div></footer>
  </>
}

function SectionIntro({ label, title, text }: { label: string; title: string; text: string }) {
  return <div className="section-intro"><span className="eyebrow">{label}</span><div><h2>{title}</h2><p>{text}</p></div></div>
}

function CaseStudy({ project, language }: { project: Project; language: Language }) {
  const t = (value: Localized) => tr(value, language)
  return <main id="main" className="case-page">
    <div className="shell"><a href="#projects" className="back-link">← {t(copy.back)}</a><div className="case-hero"><div className="case-topline"><span>{project.number} / 03 · {t(project.category)}</span><span>{t(project.status)}</span></div><h1>{project.name}</h1><p>{t(project.description)}</p><div className="case-links"><ExternalLink href={project.repo} className="button button-primary">{t(copy.source)}</ExternalLink><a href="#contact" className="button button-text">{t(copy.nav.contact)} ↗</a></div></div>
      <div className="case-image"><img src={asset(project.images[0].path)} alt={t(project.images[0].alt)} /><span>{project.id === 'appointment-booking-bot' ? t(copy.visualNote) : project.name}</span></div>
      <div className="case-content"><aside><span className="eyebrow">{language === 'uk' ? 'ПРОЄКТ' : 'PROJECT'} / {project.number}</span><p>{t(project.status)}</p><div className="case-tech">{project.technologies.map(item => <span key={item}>{item}</span>)}</div></aside><div className="case-sections"><CaseSection title={t(copy.caseOverview)} text={t(project.overview)} /><CaseSection title={t(copy.casePurpose)} text={t(project.purpose)} /><CaseSection title={t(copy.caseApproach)} text={t(project.technical)} /><CaseSection title={t(copy.caseArchitecture)} text={t(project.architecture)} /><section><h2>{t(copy.caseFeatures)}</h2><ul>{project.features.map(item => <li key={item.en}>{t(item)}</li>)}</ul></section><CaseSection title={t(copy.caseDetails)} text={t(project.details)} /></div></div>
      <div className="case-gallery"><div className="case-gallery-head"><span className="eyebrow">{t(copy.caseScreens)}</span><span>{project.images.length.toString().padStart(2, '0')} {language === 'uk' ? 'ЗОБРАЖЕННЯ' : 'IMAGES'}</span></div><div className="gallery-grid">{project.images.map((image, index) => <figure key={image.path}><img src={asset(image.path)} alt={t(image.alt)} loading="lazy" /><figcaption>{String(index + 1).padStart(2, '0')} / {t(image.alt)}{project.id === 'appointment-booking-bot' ? ` · ${t(copy.visualNote)}` : ''}</figcaption></figure>)}</div></div>
      <div className="case-end"><a href="#projects" className="inline-link">← {t(copy.back)}</a><ExternalLink href={project.repo} className="inline-link">{t(copy.source)}</ExternalLink></div>
    </div>
  </main>
}

function CaseSection({ title, text }: { title: string; text: string }) { return <section><h2>{title}</h2><p>{text}</p></section> }

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
