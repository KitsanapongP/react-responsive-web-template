import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Zap, ArrowRight, GraduationCap, Gamepad2 } from 'lucide-react';
import './Home.css';

const Home = () => {
  const templates = [
    {
      id: 1,
      title: 'University Competency',
      desc: 'ระบบแดชบอร์ดสำหรับประเมินสมรรถนะนิสิต มาพร้อม Radar Chart และฟอร์มบันทึกข้อมูล Theme: Navy/Gold Formal',
      path: '/competency',
      icon: <GraduationCap size={48} color="white" opacity={0.8} />,
      colorClass: 'bg-navy',
      tags: ['Dashboard', 'Chart.js', 'Forms']
    },
    {
      id: 2,
      title: 'Smart Life',
      desc: 'Landing Page สำหรับงาน Event รองรับการเลื่อนแบบ Scroll Reveal และตารางกิจกรรม Theme: Modern Blue',
      path: '/smartlife',
      icon: <Zap size={48} color="white" opacity={0.8} />,
      colorClass: 'bg-blue',
      tags: ['Landing Page', 'Scroll Reveal', 'Event']
    },
    {
      id: 3,
      title: 'Game Theme',
      desc: 'Landing Page + ระบบลงทะเบียนทีมแบบ Lobby สไตล์ Gartic Phone พร้อม Interactive Background (△ ○ □ ✕) และ Dark/Light Mode',
      path: '/gametheme',
      icon: <Gamepad2 size={48} color="white" opacity={0.8} />,
      colorClass: 'bg-purple',
      tags: ['Landing Page', 'Team System', 'Game UI']
    }
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>React Responsive Templates</h1>
        <p>Collection of ready-to-use, responsive web layouts.</p>
      </header>

      <div className="template-grid">
        {templates.map((template) => (
          <div key={template.id} className="template-card">
            <div className={`card-preview ${template.colorClass}`}>
              {template.icon}
              <div className="preview-badge">React + Vite</div>
            </div>
            <div className="card-content">
              <h3>{template.title}</h3>
              <p>{template.desc}</p>
              <div className="card-actions">
                <Link to={template.path} className="btn-view">
                  View Template <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Card สำหรับ Template ในอนาคต */}
        <div className="template-card" style={{ borderStyle: 'dashed', background: '#f8fafc' }}>
          <div className="card-content" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ padding: '20px', background: '#e2e8f0', borderRadius: '50%', marginBottom: '20px' }}>
              <Layout size={32} color="#94a3b8" />
            </div>
            <h3 style={{ color: '#94a3b8' }}>Coming Soon</h3>
            <p>More templates are on the way...</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;