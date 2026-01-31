import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Calendar,
  Clock,
  Plus,
  Trash2,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Zap,
  Sparkles,
  Lightbulb,
  Users,
  Target,
  Rocket,
  Award,
  Menu,
  X
} from 'lucide-react';
import './SmartLife.css';
import DotGrid from '../../components/DotGrid';

const config = {
  theme: {
    primary: '#2563eb',    // สีหลัก (Blue)
    text: '#0f172a',       // สีตัวหนังสือ
    fontScale: 1.0,        // ขนาดตัวหนังสือ (1.0 = ปกติ)
    radius: '16px',        // ความโค้งของปุ่ม/กล่อง
  },
  locale: {
    lang: 'th',
    labels: {
      nav: ['หน้าแรก', 'เกี่ยวกับ', 'ตารางกิจกรรม', 'ลงทะเบียน'],
      heroBadge: '🚀 Smart Life Hackathon 2025',
      heroTitle: 'สร้างสรรค์นวัตกรรม เพื่อชีวิตที่ฉลาดกว่า',
      heroSubtitle: 'ร่วมมือกับเราในงาน Hackathon สุดยิ่งใหญ่แห่งปี พบกับ Speaker ระดับโลกและโอกาสชิงเงินรางวัลรวมกว่า 100,000 บาท',
      ctaPrimary: 'ลงทะเบียนเลย',
      ctaSecondary: 'ดูตารางงาน',
      sponsorTitle: 'ผู้สนับสนุนหลักอย่างเป็นทางการ',
      scheduleTitle: 'กำหนดการกิจกรรม',
      formTitle: 'สมัครเข้าร่วมทีม',
      formDesc: 'กรอกรายชื่อสมาชิกในทีมได้สูงสุด 5 คน',
      shareTitle: 'แชร์กิจกรรมนี้ให้เพื่อน',
      footerText: '© 2025 SmartLife Hackathon. All rights reserved.'
    }
  }
};

// Import sponsor logos
import chatgptLogo from '../../assets/sponsors/ChatGPT.png';
import claudeLogo from '../../assets/sponsors/Claude Ai.png';
import geminiLogo from '../../assets/sponsors/Google Ai Gemini.png';
import grabfoodLogo from '../../assets/sponsors/GrabFood.png';
import laravelLogo from '../../assets/sponsors/Laravel.png';
import linemanLogo from '../../assets/sponsors/Line Man.png';
import pepsiLogo from '../../assets/sponsors/Pepsi.png';
import shopeeLogo from '../../assets/sponsors/Shopee.png';

// ข้อมูลจำลอง (Lorem Ipsum / Placeholder)
const schedules = [
  { time: '09:00 - 10:00', title: 'Registration & Welcome', desc: 'ลงทะเบียนรับป้ายชื่อและของที่ระลึก' },
  { time: '10:00 - 12:00', title: 'Keynote Speaker: The Future of AI', desc: 'โดย CEO จาก Tech Giant (Lorem Ipsum Dolor)' },
  { time: '13:00 - 16:00', title: 'Hacking Begins', desc: 'เริ่มการแข่งขันช่วงแรก Mentor เดินให้คำปรึกษา' },
  { time: '16:30 - 18:00', title: 'Project Pitching Round 1', desc: 'นำเสนอผลงานรอบคัดเลือก 10 ทีมสุดท้าย' },
];

const sponsors = [
  chatgptLogo,
  claudeLogo,
  geminiLogo,
  grabfoodLogo,
  laravelLogo,
  linemanLogo,
  pepsiLogo,
  shopeeLogo
];

function SmartLifePage() {
  // --- State Management ---
  const [attendees, setAttendees] = useState([{ name: '', email: '' }]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- Theme Application ---
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', config.theme.primary);
    root.style.setProperty('--text-main', config.theme.text);
    root.style.setProperty('--radius', config.theme.radius);
    document.body.style.fontSize = `${config.theme.fontScale * 16}px`;
  }, []);

  // --- Lock Body Scroll when Mobile Menu is Open ---
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // --- Scroll Animation Logic (Intersection Observer) ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // --- Handlers ---
  const handleAddAttendee = () => {
    if (attendees.length < 5) setAttendees([...attendees, { name: '', email: '' }]);
  };

  const handleRemoveAttendee = (index) => {
    const newList = [...attendees];
    newList.splice(index, 1);
    setAttendees(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitted(true);
      alert(`ส่งอีเมลยืนยันไปที่ ${attendees[0].email} เรียบร้อยแล้ว!`);
    }, 1000);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = config.locale.labels.heroTitle;
    let shareUrl = '';

    if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    if (platform === 'twitter') shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="app-container">
      {/* DotGrid Background */}
      <DotGrid
        dotSize={3}
        gap={30}
        baseColor="#cbd5e1"
        activeColor="#2563eb"
        proximity={150}
        speedTrigger={100}
        shockRadius={250}
        shockStrength={5}
        className="dotgrid-background"
      />

      {/* Navigation */}
      <nav className={`navbar ${mobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="container nav-content">
          {/* Mobile Burger Menu Button - Left side on mobile */}
          <button
            className="burger-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a href="#" className="logo">
            <Zap fill="currentColor" className="text-primary" />
            SmartLife
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {config.locale.labels.nav.map((item, idx) => (
              <a href={`#section-${idx}`} key={idx} className="nav-link">{item}</a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <button className="btn btn-primary nav-cta-desktop" onClick={() => document.getElementById('register').scrollIntoView()}>
            เข้าร่วมตอนนี้
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        <div
          className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Drawer */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-links">
            {config.locale.labels.nav.map((item, idx) => (
              <a
                href={`#section-${idx}`}
                key={idx}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
          <button
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '20px' }}
            onClick={() => {
              document.getElementById('register').scrollIntoView();
              setMobileMenuOpen(false);
            }}
          >
            เข้าร่วมตอนนี้
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero container reveal">
        <div className="badge">
          <Globe size={16} /> {config.locale.labels.heroBadge}
        </div>
        <h1>{config.locale.labels.heroTitle}</h1>
        <p className="hero-subtitle-highlight">{config.locale.labels.heroSubtitle}</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => document.getElementById('register').scrollIntoView()}>
            {config.locale.labels.ctaPrimary} <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary">
            {config.locale.labels.ctaSecondary}
          </button>
        </div>
      </section>

      {/* Sponsors Marquee (Infinite Scroll) */}
      <div className="sponsors-wrapper">
        <div className="container" style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
          {config.locale.labels.sponsorTitle}
        </div>
        <div className="marquee">
          {/* Double the array for seamless loop */}
          {[...sponsors, ...sponsors].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Sponsor ${index + 1}`}
              className="sponsor-logo"
            />
          ))}
        </div>
      </div>

      {/* MagicBento Section - About Smart Life Series */}
      <section className="container reveal">
        <div className="section-header">
          <h2>ทำไมต้อง Smart Life Hackathon?</h2>
          <p>ค้นพบโอกาสและประสบการณ์ที่จะเปลี่ยนแปลงอนาคตของคุณ</p>
        </div>
        <div className="bento-grid">
          <div className="bento-card reveal">
            <div className="bento-icon gradient-purple">
              <Sparkles color="white" size={28} />
            </div>
            <h3>นวัตกรรมที่แท้จริง</h3>
            <p>สร้างสรรค์โซลูชันที่แก้ปัญหาจริง พัฒนาทักษะด้านเทคโนโลยีและการคิดเชิงนวัตกรรม</p>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon gradient-pink">
              <Users color="white" size={28} />
            </div>
            <h3>เครือข่ายมืออาชีพ</h3>
            <p>พบปะกับนักพัฒนา ผู้ประกอบการ และผู้เชี่ยวชาญจากบริษัทชั้นนำทั่วประเทศ</p>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon gradient-blue">
              <Lightbulb color="white" size={28} />
            </div>
            <h3>เรียนรู้จากผู้เชี่ยวชาญ</h3>
            <p>Workshop และ Mentoring จาก Industry Leaders ที่พร้อมแชร์ประสบการณ์และความรู้</p>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon gradient-orange">
              <Award color="white" size={28} />
            </div>
            <h3>รางวัลมูลค่ารวม 100,000 บาท</h3>
            <p>ชิงรางวัลใหญ่และโอกาสในการนำเสนอผลงานต่อนักลงทุน</p>
          </div>
          <div className="bento-card large reveal">
            <div className="bento-icon gradient-teal">
              <Target color="white" size={28} />
            </div>
            <h3>Smart Life Series: ชุดกิจกรรมที่ครบครัน</h3>
            <p>
              Smart Life ไม่ใช่แค่ Hackathon แต่เป็นชุดกิจกรรมที่ออกแบบมาเพื่อพัฒนาทักษะและสร้างเครือข่าย
              ตั้งแต่ Workshop เทคโนโลยีล่าสุด, การแข่งขัน Hackathon, ไปจนถึง Demo Day สำหรับนำเสนอผลงานต่อนักลงทุน
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="container reveal extra-spacing-top">
        <div className="section-header">
          <h2>{config.locale.labels.scheduleTitle}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="schedule-grid">
          {schedules.map((item, idx) => (
            <div key={idx} className="schedule-card reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="time-box">{item.time}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form (Multi-Person) */}
      <section id="register" className="container reveal extra-spacing-top">
        <div className="section-header">
          <h2>{config.locale.labels.formTitle}</h2>
          <p>{config.locale.labels.formDesc}</p>
        </div>

        <div className="form-container">
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <CheckCircle size={64} color="var(--primary)" style={{ margin: '0 auto 20px' }} />
              <h3>Registration Complete!</h3>
              <p>Please check your email for confirmation.</p>
              <button className="btn btn-secondary" onClick={() => setIsSubmitted(false)} style={{ marginTop: '20px' }}>
                Register another team
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {attendees.map((person, index) => (
                <div key={index} className="attendee-row reveal">
                  <div>
                    <label className="input-label">ชื่อ - นามสกุล (Person {index + 1})</label>
                    <input
                      type="text"
                      className="input-field"
                      required
                      placeholder="John Doe"
                      value={person.name}
                      onChange={(e) => {
                        const newAttendees = [...attendees];
                        newAttendees[index].name = e.target.value;
                        setAttendees(newAttendees);
                      }}
                    />
                  </div>
                  <div>
                    <label className="input-label">อีเมล</label>
                    <input
                      type="email"
                      className="input-field"
                      required
                      placeholder="john@example.com"
                      value={person.email}
                      onChange={(e) => {
                        const newAttendees = [...attendees];
                        newAttendees[index].email = e.target.value;
                        setAttendees(newAttendees);
                      }}
                    />
                  </div>
                  {attendees.length > 1 && (
                    <button type="button" className="btn-icon" onClick={() => handleRemoveAttendee(index)}>
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              ))}

              <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                <button type="button" className="btn btn-secondary" onClick={handleAddAttendee}>
                  <Plus size={18} /> เพิ่มสมาชิก
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  ยืนยันการสมัคร
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Share Section */}
      <section className="container reveal" style={{ textAlign: 'center', padding: '60px 0' }}>
        <h3>{config.locale.labels.shareTitle}</h3>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px' }}>
          <button className="social-icon" onClick={() => handleShare('facebook')}>
            <Facebook size={20} />
          </button>
          <button className="social-icon" onClick={() => handleShare('twitter')}>
            <Twitter size={20} />
          </button>
          <button className="social-icon" onClick={() => navigator.clipboard.writeText(window.location.href)}>
            <Globe size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="logo" style={{ marginBottom: '16px' }}>SmartLife</div>
              <p style={{ maxWidth: '300px' }}>
                Building the future of smart living through innovation and collaboration.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '48px' }}>
              <div>
                <h4 style={{ marginBottom: '16px' }}>Event</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="#" className="nav-link">Schedule</a>
                  <a href="#" className="nav-link">Speakers</a>
                  <a href="#" className="nav-link">Sponsors</a>
                </div>
              </div>
              <div>
                <h4 style={{ marginBottom: '16px' }}>Legal</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="#" className="nav-link">Privacy</a>
                  <a href="#" className="nav-link">Terms</a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
            {config.locale.labels.footerText}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SmartLifePage;