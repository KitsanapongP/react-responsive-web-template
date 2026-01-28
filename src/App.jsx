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
      nav: ['ภาพรวม', 'กิจกรรม', 'กำหนดการ', 'ผู้สนับสนุน', 'คำถาม'],
      heroBadge: 'Hackathon Smart Life 2024',
      heroTitle: 'สร้างชีวิตอัจฉริยะที่ทุกคนเข้าถึงได้',
      heroSubtitle:
        'เวทีรวมทีม นักพัฒนา นักออกแบบ และนักสร้างสรรค์ เพื่อสร้างผลิตภัณฑ์ Smart Life ที่มีผลกระทบจริง',
      heroPrimary: 'สมัครเข้าร่วม',
      heroSecondary: 'ดูรายละเอียดกิจกรรม',
      sponsorTitle: 'ผู้สนับสนุนหลัก',
      highlightsTitle: 'ทำไมต้อง Smart Life Hackathon',
      highlights: [
        {
          title: 'ธีมที่ชัดเจน',
          detail: 'เน้น Smart Home, Health, Mobility และพลังงานสะอาด',
        },
        {
          title: 'ทีมที่ครบทุกสกิล',
          detail: 'จับคู่ไอเดียกับ mentor และ community ที่แข็งแรง',
        },
        {
          title: 'ต่อยอดสู่ธุรกิจ',
          detail: 'พบกับ Venture Partner เพื่อผลักดันสู่ตลาดจริง',
        },
      ],
      scheduleTitle: 'กำหนดการไฮไลต์',
      scheduleSubtitle: 'วางแผนทุกช่วงเวลาให้ทีมเดินหน้าได้อย่างมั่นใจ',
      schedule: [
        {
          time: '09:30',
          title: 'Registration & Networking',
          detail: 'เช็คอิน รับชุดเอกสาร และพบเพื่อนร่วมทีม',
        },
        {
          time: '10:30',
          title: 'Keynote: The Future of Smart Life',
          detail: 'แนวโน้มเทคโนโลยีและโจทย์ที่ต้องการแก้ไข',
        },
        {
          time: '13:00',
          title: 'Build Session + Mentor Clinic',
          detail: 'ลงมือสร้าง พร้อม mentor ช่วยปรับทิศทาง',
        },
        {
          time: '17:30',
          title: 'Demo & Award',
          detail: 'นำเสนอผลงานต่อคณะกรรมการและนักลงทุน',
        },
      ],
      registrationTitle: 'ลงทะเบียนเป็นทีม',
      registrationSubtitle: 'กรอกข้อมูลผู้เข้าร่วมได้หลายคน เราจะส่งอีเมลยืนยันให้ทุกคน',
      addMember: '+ เพิ่มสมาชิก',
      shareTitle: 'แชร์กิจกรรมให้เพื่อนร่วมทีม',
      shareSubtitle: 'ส่งต่อผ่าน Facebook เพื่อรวมทีมให้เร็วขึ้น',
      shareButton: 'แชร์บน Facebook',
      faqTitle: 'คำถามที่พบบ่อย',
      faq: [
        {
          question: 'ต้องมีทีมก่อนสมัครไหม?',
          answer: 'สามารถสมัครเดี่ยวได้ ระบบจะช่วยจับทีมในวันงาน',
        },
        {
          question: 'เข้าร่วมแบบออนไลน์ได้หรือไม่?',
          answer: 'มีไลฟ์สตรีมและช่องทางส่งผลงานสำหรับทีมต่างจังหวัด',
        },
        {
          question: 'ต้องเตรียมอะไรบ้าง?',
          answer: 'โน้ตบุ๊ก ไอเดีย และความพร้อมในการสร้างสรรค์',
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
      <header className="header">
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

      <section className="sponsor-strip">
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

      <section className="hero">
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
              <strong>48 ชม.</strong>
              <span>เวลารวมสร้างผลงาน</span>
            </div>
            <div>
              <strong>15+</strong>
              <span>Mentor จากสาย Smart Life</span>
            </div>
            <div>
              <strong>30 ทีม</strong>
              <span>ทีมที่ผ่านการคัดเลือก</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card primary">
            <h3>Live Smart Dashboard</h3>
            <p>เห็นภาพรวมพลังงาน สุขภาพ และการเดินทางในที่เดียว</p>
            <div className="hero-stats">
              <span>Energy -18%</span>
              <span>Health +32%</span>
              <span>Mobility +24%</span>
            </div>
          </div>
          <div className="hero-card soft">
            <h4>Team Momentum</h4>
            <p>Mentor feedback ทุก 3 ชั่วโมง</p>
            <button className="btn btn-light" type="button">
              ดูกำหนดการ
            </button>
          </div>
        </div>
      </section>

      <section className="marquee">
        <div className="marquee-track">
          {[
            '🚀 เปิดรับสมัครทีมถึง 30 พ.ย.',
            '🎯 Challenge: Smart Home + Mobility',
            '🌐 มีช่องทางออนไลน์พร้อม mentor',
            '🏆 ชิงทุนต่อยอด 500,000 บาท',
          ].map((item, index) => (
            <span key={`${item}-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
          {[
            '🚀 เปิดรับสมัครทีมถึง 30 พ.ย.',
            '🎯 Challenge: Smart Home + Mobility',
            '🌐 มีช่องทางออนไลน์พร้อม mentor',
            '🏆 ชิงทุนต่อยอด 500,000 บาท',
          ].map((item, index) => (
            <span key={`dup-${item}-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="highlights">
        <div className="section-head">
          <h2>{text.highlightsTitle}</h2>
          <p>โครงสร้างงานที่ยืดหยุ่น ปรับให้เหมาะกับทีมของคุณได้ง่าย</p>
        </div>
        <div className="highlight-grid">
          {text.highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <button className="link" type="button">
                รายละเอียดเพิ่มเติม →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="schedule">
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

      <section className="registration">
        <div className="section-head">
          <h2>{text.registrationTitle}</h2>
          <p>{text.registrationSubtitle}</p>
        </div>
        <div className="registration-grid">
          <div className="form-card">
            {members.map((member, index) => (
              <div key={`member-${index}`} className="member-row">
                <div>
                  <label htmlFor={`name-${index}`}>ชื่อผู้เข้าร่วม {index + 1}</label>
                  <input
                    id={`name-${index}`}
                    placeholder="ชื่อ-นามสกุล"
                    type="text"
                    value={member.name}
                    onChange={(event) =>
                      handleMemberChange(index, 'name', event.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor={`email-${index}`}>อีเมลผู้เข้าร่วม</label>
                  <input
                    id={`email-${index}`}
                    placeholder="email@example.com"
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
                ส่งใบสมัครทีม
              </button>
              <button className="btn btn-light" type="button">
                ดาวน์โหลดเกณฑ์การประกวด
              </button>
            </div>
          </div>
          <div className="info-card">
            <h3>Hackathon Partner Pack</h3>
            <p>เตรียม resource ให้พร้อมก่อนวันจริง พร้อมชุดข้อมูล Smart City</p>
            <ul>
              <li>Smart Life API sandbox</li>
              <li>Design system จาก ReactBits</li>
              <li>Room booking + mentor channel</li>
            </ul>
            <div className="info-banner">
              <div>
                <strong>Pitch Deck Clinic</strong>
                <p>พร้อม feedback รอบสุดท้ายก่อนนำเสนอ</p>
              </div>
              <button className="btn btn-primary" type="button">
                จองคิว mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="share">
        <div>
          <h2>{text.shareTitle}</h2>
          <p>{text.shareSubtitle}</p>
        </div>
        <button className="btn btn-primary" type="button">
          {text.shareButton}
        </button>
      </section>

      <section className="faq">
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

      <footer className="footer">
        <div className="footer-brand">
          <div className="logo">SmartLife</div>
          <p>ร่วมสร้างเมืองอัจฉริยะที่ยั่งยืนสำหรับทุกคน</p>
        </div>
        <div className="footer-links">
          <div>
            <span>Explore</span>
            <a href="#">Overview</a>
            <a href="#">Mentors</a>
            <a href="#">Partners</a>
          </div>
          <div>
            <span>Resources</span>
            <a href="#">Guideline</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
