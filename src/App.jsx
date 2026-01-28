import { useMemo, useState } from 'react'
import './App.css'

const siteConfig = {
  locale: 'th',
  theme: {
    primary: '#2563eb',
    primarySoft: '#dbeafe',
    secondary: '#0f172a',
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#0f172a',
    muted: '#64748b',
    accent: '#38bdf8',
    border: '#e2e8f0',
    radius: '24px',
    fontFamily: '"Inter", "Prompt", system-ui, sans-serif',
    fontScale: 1,
  },
  locales: {
    th: {
      nav: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'],
      heroBadge: 'Lorem ipsum dolor sit amet',
      heroTitle: 'Lorem ipsum dolor sit amet consectetur',
      heroSubtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      heroPrimary: 'Lorem Ipsum',
      heroSecondary: 'Dolor Sit',
      sponsorTitle: 'Lorem ipsum',
      highlightsTitle: 'Lorem ipsum dolor sit',
      highlights: [
        {
          title: 'Lorem ipsum',
          detail: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        },
        {
          title: 'Dolor sit',
          detail: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
        },
        {
          title: 'Consectetur',
          detail: 'Ut enim ad minim veniam quis nostrud exercitation.',
        },
      ],
      scheduleTitle: 'Lorem ipsum',
      scheduleSubtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      schedule: [
        {
          time: '09:30',
          title: 'Lorem ipsum dolor',
          detail: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        },
        {
          time: '10:30',
          title: 'Consectetur adipiscing',
          detail: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
        },
        {
          time: '13:00',
          title: 'Lorem ipsum',
          detail: 'Ut enim ad minim veniam quis nostrud exercitation.',
        },
        {
          time: '17:30',
          title: 'Dolor sit amet',
          detail: 'Duis aute irure dolor in reprehenderit in voluptate.',
        },
      ],
      registrationTitle: 'Lorem ipsum',
      registrationSubtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      addMember: '+ Lorem',
      shareTitle: 'Lorem ipsum dolor',
      shareSubtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      shareButton: 'Lorem ipsum',
      faqTitle: 'Lorem ipsum',
      faq: [
        {
          question: 'Lorem ipsum dolor sit amet?',
          answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        },
        {
          question: 'Consectetur adipiscing elit?',
          answer: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
        },
        {
          question: 'Sed do eiusmod tempor?',
          answer: 'Ut enim ad minim veniam quis nostrud exercitation.',
        },
      ],
    },
  },
}

const createEmptyMember = () => ({ name: '', email: '' })

function App() {
  const { locale, theme, locales } = siteConfig
  const text = locales[locale]
  const [members, setMembers] = useState([createEmptyMember(), createEmptyMember()])

  const themeStyle = useMemo(
    () => ({
      '--primary': theme.primary,
      '--primary-soft': theme.primarySoft,
      '--secondary': theme.secondary,
      '--background': theme.background,
      '--surface': theme.surface,
      '--text': theme.text,
      '--muted': theme.muted,
      '--accent': theme.accent,
      '--border': theme.border,
      '--radius': theme.radius,
      '--font-family': theme.fontFamily,
      '--font-scale': theme.fontScale,
    }),
    [theme]
  )

  const handleMemberChange = (index, field, value) => {
    setMembers((prev) =>
      prev.map((member, idx) => (idx === index ? { ...member, [field]: value } : member))
    )
  }

  const addMember = () => {
    setMembers((prev) => [...prev, createEmptyMember()])
  }

  return (
    <div className="page" style={themeStyle}>
      <header className="header fade-in" style={{ '--delay': '0.05s' }}>
        <div className="logo">SmartLife</div>
        <nav className="nav">
          {text.nav.map((item) => (
            <button key={item} className="nav-link" type="button">
              {item}
            </button>
          ))}
        </nav>
        <button className="btn btn-primary" type="button">
          {text.heroPrimary}
        </button>
      </header>

      <section className="sponsor-strip fade-in" style={{ '--delay': '0.12s' }}>
        <span className="sponsor-label">{text.sponsorTitle}</span>
        <div className="sponsor-slider" aria-label="Sponsor logos">
          <div className="sponsor-track">
            {[
              {
                name: 'Pulse App',
                src: 'https://cdn.simpleicons.org/pwa/2563eb',
              },
              {
                name: 'Smart Fit',
                src: 'https://cdn.simpleicons.org/fitbit/2563eb',
              },
              {
                name: 'Cloud Lab',
                src: 'https://cdn.simpleicons.org/googlecloud/2563eb',
              },
              {
                name: 'Flow Lab',
                src: 'https://cdn.simpleicons.org/notion/2563eb',
              },
              {
                name: 'Spark Vision',
                src: 'https://cdn.simpleicons.org/adobe/2563eb',
              },
              {
                name: 'Mobility X',
                src: 'https://cdn.simpleicons.org/tesla/2563eb',
              },
              {
                name: 'Nova AI',
                src: 'https://cdn.simpleicons.org/openai/2563eb',
              },
              {
                name: 'LifeHub',
                src: 'https://cdn.simpleicons.org/airbnb/2563eb',
              },
            ].map((logo) => (
              <div key={logo.name} className="sponsor-card">
                <img src={logo.src} alt={logo.name} loading="lazy" />
                <span>{logo.name}</span>
              </div>
            ))}
            {[
              {
                name: 'Pulse App',
                src: 'https://cdn.simpleicons.org/pwa/2563eb',
              },
              {
                name: 'Smart Fit',
                src: 'https://cdn.simpleicons.org/fitbit/2563eb',
              },
              {
                name: 'Cloud Lab',
                src: 'https://cdn.simpleicons.org/googlecloud/2563eb',
              },
              {
                name: 'Flow Lab',
                src: 'https://cdn.simpleicons.org/notion/2563eb',
              },
              {
                name: 'Spark Vision',
                src: 'https://cdn.simpleicons.org/adobe/2563eb',
              },
              {
                name: 'Mobility X',
                src: 'https://cdn.simpleicons.org/tesla/2563eb',
              },
              {
                name: 'Nova AI',
                src: 'https://cdn.simpleicons.org/openai/2563eb',
              },
              {
                name: 'LifeHub',
                src: 'https://cdn.simpleicons.org/airbnb/2563eb',
              },
            ].map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="sponsor-card">
                <img src={logo.src} alt={logo.name} loading="lazy" />
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero fade-in" style={{ '--delay': '0.18s' }}>
        <div className="hero-content">
          <span className="hero-badge">{text.heroBadge}</span>
          <h1>{text.heroTitle}</h1>
          <p>{text.heroSubtitle}</p>
          <div className="hero-actions">
            <button className="btn btn-primary" type="button">
              {text.heroPrimary}
            </button>
            <button className="btn btn-ghost" type="button">
              {text.heroSecondary}
            </button>
          </div>
          <div className="hero-meta">
            <div>
              <strong>48</strong>
              <span>Lorem ipsum</span>
            </div>
            <div>
              <strong>15+</strong>
              <span>Lorem ipsum</span>
            </div>
            <div>
              <strong>30</strong>
              <span>Lorem ipsum</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card primary">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            <div className="hero-stats">
              <span>Lorem -18%</span>
              <span>Ipsum +32%</span>
              <span>Dolor +24%</span>
            </div>
          </div>
          <div className="hero-card soft">
            <h4>Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button className="btn btn-light" type="button">
              Lorem ipsum
            </button>
          </div>
        </div>
      </section>

      <section className="marquee fade-in" style={{ '--delay': '0.26s' }}>
        <div className="marquee-track">
          {[
            '🚀 Lorem ipsum dolor sit amet',
            '🎯 Lorem ipsum dolor',
            '🌐 Lorem ipsum dolor sit',
            '🏆 Lorem ipsum dolor amet',
          ].map((item, index) => (
            <span key={`${item}-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
          {[
            '🚀 Lorem ipsum dolor sit amet',
            '🎯 Lorem ipsum dolor',
            '🌐 Lorem ipsum dolor sit',
            '🏆 Lorem ipsum dolor amet',
          ].map((item, index) => (
            <span key={`dup-${item}-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="highlights fade-in" style={{ '--delay': '0.34s' }}>
        <div className="section-head">
          <h2>{text.highlightsTitle}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        </div>
        <div className="highlight-grid">
          {text.highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <button className="link" type="button">
                Lorem ipsum →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="schedule fade-in" style={{ '--delay': '0.42s' }}>
        <div className="section-head">
          <h2>{text.scheduleTitle}</h2>
          <p>{text.scheduleSubtitle}</p>
        </div>
        <div className="schedule-grid">
          {text.schedule.map((item) => (
            <div key={item.time} className="schedule-card">
              <span className="schedule-time">{item.time}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="registration fade-in" style={{ '--delay': '0.5s' }}>
        <div className="section-head">
          <h2>{text.registrationTitle}</h2>
          <p>{text.registrationSubtitle}</p>
        </div>
        <div className="registration-grid">
          <div className="form-card">
            {members.map((member, index) => (
              <div key={`member-${index}`} className="member-row">
                <div>
                  <label htmlFor={`name-${index}`}>Lorem ipsum {index + 1}</label>
                  <input
                    id={`name-${index}`}
                    placeholder="Lorem ipsum"
                    type="text"
                    value={member.name}
                    onChange={(event) =>
                      handleMemberChange(index, 'name', event.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor={`email-${index}`}>Lorem ipsum</label>
                  <input
                    id={`email-${index}`}
                    placeholder="lorem@example.com"
                    type="email"
                    value={member.email}
                    onChange={(event) =>
                      handleMemberChange(index, 'email', event.target.value)
                    }
                  />
                </div>
              </div>
            ))}
            <button className="btn btn-ghost" type="button" onClick={addMember}>
              {text.addMember}
            </button>
            <div className="form-actions">
              <button className="btn btn-primary" type="button">
                Lorem ipsum
              </button>
              <button className="btn btn-light" type="button">
                Lorem ipsum
              </button>
            </div>
          </div>
          <div className="info-card">
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            <ul>
              <li>Lorem ipsum dolor sit</li>
              <li>Consectetur adipiscing</li>
              <li>Sed do eiusmod</li>
            </ul>
            <div className="info-banner">
              <div>
                <strong>Lorem ipsum</strong>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <button className="btn btn-primary" type="button">
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="share fade-in" style={{ '--delay': '0.58s' }}>
        <div>
          <h2>{text.shareTitle}</h2>
          <p>{text.shareSubtitle}</p>
        </div>
        <button className="btn btn-primary" type="button">
          {text.shareButton}
        </button>
      </section>

      <section className="faq fade-in" style={{ '--delay': '0.66s' }}>
        <div className="section-head">
          <h2>{text.faqTitle}</h2>
        </div>
        <div className="faq-grid">
          {text.faq.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer fade-in" style={{ '--delay': '0.74s' }}>
        <div className="footer-brand">
          <div className="logo">SmartLife</div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        </div>
        <div className="footer-links">
          <div>
            <span>Lorem</span>
            <a href="#">Lorem ipsum</a>
            <a href="#">Dolor sit</a>
            <a href="#">Amet</a>
          </div>
          <div>
            <span>Ipsum</span>
            <a href="#">Lorem</a>
            <a href="#">Ipsum</a>
            <a href="#">Dolor</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
