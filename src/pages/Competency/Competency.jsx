import React, { useState, useEffect } from 'react';
import { 
  Plus, Trash2, CheckCircle, Award, 
  BarChart3, BookOpen, Settings2,
  ChevronRight, GraduationCap, Share2,
  Facebook, Twitter, Github, Mail
} from 'lucide-react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import './Competency.css';

// การตั้งค่า Chart.js
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// ---------------------------------------------------------
// CONFIGURATION (ปรับแต่งโครงสร้างเว็ปที่นี่)
// ---------------------------------------------------------
const CONFIG = {
  theme: {
    primary: '#1e3a8a',    // สีหลัก (Navy Blue)
    secondary: '#d97706',  // สีเน้น (Amber Gold)
    fontScale: 1.0,        // ขนาดฟอนต์หลัก
    radius: '12px',        // ความโค้งมนของ UI
  },
  content: {
    title: 'University Competency',
    subtitle: 'ระบบประเมินสมรรถนะผู้เรียน',
    nav: ['แดชบอร์ด', 'กิจกรรม', 'ประวัติ', 'ช่วยเหลือ'],
    heroTitle: 'ติดตามการเรียนรู้ของคุณแบบ Real-time',
    heroDesc: 'รวบรวมทุกการเข้าร่วมกิจกรรมและประมวลผลเป็นสมรรถนะ เพื่อสร้าง Portfolio ที่แข็งแกร่งสำหรับอนาคตของคุณ',
    formTitle: 'ลงทะเบียนเข้าร่วมกิจกรรม',
    formSubtitle: 'กรอกรหัสกิจกรรมและรายชื่อสมาชิกเพื่อบันทึกสมรรถนะสะสม'
  }
};

function CompetencyPage() {
  const [attendees, setAttendees] = useState([{ name: '', email: '' }]);
  const [activityCode, setActivityCode] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // ข้อมูลสมรรถนะจำลองสำหรับ Radar Chart
  const competencyData = {
    labels: [
      'Critical Thinking', 
      'Digital Literacy', 
      'Leadership', 
      'Ethical Awareness', 
      'Communication', 
      'Collaboration'
    ],
    datasets: [
      {
        label: 'Current Skills',
        data: [85, 72, 90, 65, 80, 75],
        backgroundColor: 'rgba(30, 58, 138, 0.2)',
        borderColor: CONFIG.theme.primary,
        borderWidth: 2,
        pointBackgroundColor: CONFIG.theme.primary,
        pointBorderColor: '#fff',
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: { stepSize: 20, display: false }
      }
    },
    plugins: { legend: { display: false } },
    maintainAspectRatio: false
  };

  // จัดการรายชื่อสมาชิก
  const addPerson = () => setAttendees([...attendees, { name: '', email: '' }]);
  const removePerson = (index) => setAttendees(attendees.filter((_, i) => i !== index));
  const updatePerson = (index, field, value) => {
    const updated = [...attendees];
    updated[index][field] = value;
    setAttendees(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="app-container">
      {/* 1. TOP PARTNER BAR */}
      <div className="partner-bar">
        <div className="marquee">
          <div className="marquee-content">
            {['Global Partner Network', 'Academic Excellence 2024', 'Innovation Hub', 'Student Success Program'].map((item, i) => (
              <span key={i} className="partner-item">{item}</span>
            ))}
            {/* วนซ้ำเพื่อให้ Loop ไหลลื่น */}
            {['Global Partner Network', 'Academic Excellence 2024', 'Innovation Hub', 'Student Success Program'].map((item, i) => (
              <span key={i + 'dup'} className="partner-item">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="navbar">
        <div className="container nav-wrapper">
          <div className="logo-group">
            <div className="logo-icon"><GraduationCap size={24} /></div>
            <div className="logo-text">
              <span className="brand">UNIV-COMP</span>
              <span className="tagline">MANAGEMENT SYSTEM</span>
            </div>
          </div>
          <div className="nav-links">
            {CONFIG.content.nav.map((item, i) => (
              <a key={i} href="#" className="nav-link">{item}</a>
            ))}
          </div>
          <div className="user-profile">
            <div className="user-data">
              <span className="user-name">KITSANAPONG P.</span>
              <span className="user-id">ID: 6701XXXX</span>
            </div>
            <div className="avatar">KP</div>
          </div>
        </div>
      </nav>

      <main className="container">
        {/* 3. HERO & RADAR DASHBOARD */}
        <section className="dashboard-hero">
          <div className="hero-text">
            <div className="badge-formal"><Award size={14} /> Official Performance Tracking</div>
            <h1>{CONFIG.content.heroTitle}</h1>
            <p>{CONFIG.content.heroDesc}</p>
            <div className="hero-stats">
              <div className="stat-card">
                <span className="stat-value">12</span>
                <span className="stat-label">กิจกรรมที่เข้าร่วม</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">840</span>
                <span className="stat-label">แต้มสมรรถนะรวม</span>
              </div>
            </div>
          </div>

          <div className="radar-card">
            <div className="card-head">
              <h3><BarChart3 size={18} /> Skill Visualization</h3>
              <Settings2 size={16} className="icon-btn" />
            </div>
            <div className="radar-container">
              <Radar data={competencyData} options={radarOptions} />
            </div>
          </div>
        </section>

        {/* 4. ACTIVITY RECORD FORM */}
        <section className="registration-section">
          <div className="section-header">
            <h2>{CONFIG.content.formTitle}</h2>
            <p>{CONFIG.content.formSubtitle}</p>
          </div>

          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>รหัสกิจกรรม (Activity Code)</label>
                <input 
                  type="text" 
                  className="main-input" 
                  placeholder="EX: ACT-2024-001" 
                  value={activityCode}
                  onChange={(e) => setActivityCode(e.target.value)}
                  required 
                />
              </div>

              <div className="attendee-list">
                <label>รายชื่อสมาชิกกลุ่ม</label>
                {attendees.map((person, index) => (
                  <div key={index} className="attendee-row">
                    <input 
                      type="text" 
                      placeholder="ชื่อ-นามสกุล" 
                      value={person.name}
                      onChange={(e) => updatePerson(index, 'name', e.target.value)}
                      required 
                    />
                    <input 
                      type="email" 
                      placeholder="อีเมลนิสิต" 
                      value={person.email}
                      onChange={(e) => updatePerson(index, 'email', e.target.value)}
                      required 
                    />
                    {attendees.length > 1 && (
                      <button type="button" className="remove-btn" onClick={() => removePerson(index)}>
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={addPerson}>
                  <Plus size={18} /> เพิ่มคนในทีม
                </button>
                <button type="submit" className="btn-primary">
                  บันทึกข้อมูลและส่งอีเมลยืนยัน
                </button>
              </div>
            </form>

            {isSuccess && (
              <div className="success-toast">
                <CheckCircle size={20} /> ระบบได้รับข้อมูลของคุณแล้ว อีเมลยืนยันจะส่งไปใน 1-2 นาที
              </div>
            )}
          </div>
        </section>

        {/* 5. RECENT ACTIVITIES */}
        <section className="recent-activities">
          <div className="section-header-flex">
            <h3><BookOpen size={20} /> ประวัติกิจกรรมล่าสุด</h3>
            <button className="text-link">ดูทั้งหมด <ChevronRight size={16}/></button>
          </div>
          <div className="activity-grid">
            {[
              { title: 'AI Ethics & Future Workshop', points: '+20 Ethics', date: '24 Jan 2024' },
              { title: 'Leadership Bootcamp #4', points: '+40 Leadership', date: '18 Jan 2024' },
              { title: 'Digital Content Creation', points: '+15 Digital', date: '12 Jan 2024' }
            ].map((item, i) => (
              <div key={i} className="activity-item">
                <div className="act-content">
                  <span className="act-date">{item.date}</span>
                  <h4>{item.title}</h4>
                </div>
                <div className="act-badge">{item.points}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 6. FOOTER */}
      <footer className="footer">
        <div className="container footer-wrapper">
          <div className="footer-brand">
            <div className="logo-group">
              <div className="logo-icon"><GraduationCap size={20} /></div>
              <span className="brand">UNIV-COMP</span>
            </div>
            <p>ระบบติดตามสมรรถนะนิสิตมาตรฐานสากล เพื่ออนาคตที่วัดผลได้</p>
          </div>
          <div className="footer-links">
            <div className="social-links">
              <a href="#"><Facebook size={20}/></a>
              <a href="#"><Twitter size={20}/></a>
              <a href="#"><Github size={20}/></a>
              <a href="#"><Mail size={20}/></a>
            </div>
            <p className="copyright">© 2024 University Competency System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CompetencyPage;