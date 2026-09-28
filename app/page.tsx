import {
  ArrowUpRight,
  Code2,
  FileText,
  Layers3,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

const skills = [
  'Python',
  'C++',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'FastAPI',
  'MongoDB',
  'PostgreSQL',
  'SQL',
  'Git & GitHub',
]

const projects = [
  {
    number: '01',
    name: 'AuditIQ',
    description: 'Audit analytics and continuous controls monitoring platform.',
    tags: ['Analytics', 'Controls', 'Full stack'],
    icon: <Layers3 aria-hidden="true" />,
  },
  {
    number: '02',
    name: 'Qubit Chat',
    description: 'AI-powered intelligent document interaction using RAG and quantum-inspired retrieval.',
    tags: ['AI / ML', 'RAG', 'Documents'],
    icon: <Sparkles aria-hidden="true" />,
  },
  {
    number: '03',
    name: 'Offline RAG PDF Chatbot',
    description: 'A privacy-focused PDF question-answering system that runs offline.',
    tags: ['Privacy', 'Python', 'RAG'],
    icon: <FileText aria-hidden="true" />,
  },
]

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abdul Basith Syed home">
          <span className="brand-mark">ABS</span>
          <span className="brand-name">Abdul Basith Syed</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-contact" href="#contact">Let&apos;s connect <ArrowUpRight aria-hidden="true" /></a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><Menu aria-hidden="true" /></summary>
          <div className="mobile-nav-panel">
            <div className="mobile-nav-top"><span>Navigate</span><X aria-hidden="true" /></div>
            <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
          </div>
        </details>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available to build</p>
          <h1 id="hero-title">Building Full-Stack &amp; AI Solutions</h1>
          <p className="hero-opportunity">Open to Software Engineering and AI opportunities.</p>
          <p className="hero-intro">I&apos;m Abdul Basith Syed, a final-year B.Tech Computer Science student and Full Stack Developer interested in AI and Machine Learning.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight aria-hidden="true" /></a>
            <a className="text-link" href="#about">More about me <span>↓</span></a>
          </div>
        </div>
        <div className="hero-aside" aria-hidden="true">
          <div className="code-window">
            <div className="window-bar"><span /><span /><span /><small>build.ts</small></div>
            <pre><code><span className="code-muted">const</span> developer = {'{'}{`\n`}  name: <span className="code-blue">&quot;Abdul Basith&quot;</span>,{`\n`}  focus: [<span className="code-blue">&quot;full-stack&quot;</span>,{`\n`}    <span className="code-blue">&quot;AI / ML&quot;</span>],{`\n`}  status: <span className="code-blue">&quot;learning&quot;</span>{`\n`}{'}'}</code></pre>
          </div>
          <p className="side-note">01 / Introduction</p>
        </div>
      </section>

      <section id="about" className="content-section about-section" aria-labelledby="about-title">
        <div className="section-label"><span>01</span><span>About me</span></div>
        <div className="about-content">
          <h2 id="about-title">Curious by nature.<br /><span>Practical by craft.</span></h2>
          <div className="about-body"><p>I build full-stack web applications and AI-powered projects with a focus on making complex ideas feel simple and useful.</p><p>My toolkit spans React, Next.js, Node.js, Python and FastAPI. I&apos;m currently exploring how AI and Machine Learning can create better products.</p></div>
        </div>
      </section>

      <section id="skills" className="content-section skills-section" aria-labelledby="skills-title">
        <div className="section-label"><span>02</span><span>Toolkit</span></div>
        <div className="skills-content"><div><h2 id="skills-title">Tools I use<br /><span>to make ideas real.</span></h2><p className="section-description">A practical stack for building, shipping and learning.</p></div><div className="skills-list">{skills.map((skill, index) => <span key={skill} className="skill-pill"><small>{String(index + 1).padStart(2, '0')}</small>{skill}</span>)}</div></div>
      </section>

      <section id="projects" className="content-section projects-section" aria-labelledby="projects-title">
        <div className="section-label"><span>03</span><span>Selected projects</span></div>
        <div className="projects-content"><div className="projects-heading"><h2 id="projects-title">Things I&apos;ve<br /><span>been building.</span></h2><p className="section-description">A few projects where curiosity met execution.</p></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.name}><div className="project-number">{project.number}</div><div className="project-icon">{project.icon}</div><div className="project-info"><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><ArrowUpRight className="project-arrow" aria-hidden="true" /></article>)}</div></div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-glow" aria-hidden="true" /><div className="section-label"><span>04</span><span>Contact</span></div><div className="contact-content"><p className="eyebrow">Have an idea?</p><h2 id="contact-title">Let&apos;s make<br /><em>something useful.</em></h2><p className="contact-copy">I&apos;m always open to learning, collaborating and building interesting things. Reach out through your preferred channel.</p></div>
      </section>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Abdul Basith Syed</span><span className="footer-note"><Code2 aria-hidden="true" /> Designed & built with curiosity</span><div className="footer-links"><a href="#top">Back to top ↑</a></div></footer>
    </main>
  )
}

