import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home/Home';
import CompetencyPage from './pages/Competency/Competency';
import SmartLifePage from './pages/SmartLife/SmartLife';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* หน้าหลัก */}
        <Route path="/" element={<Home />} />

        {/* Template Routes */}
        <Route path="/competency" element={<CompetencyPage />} />
        <Route path="/smartlife" element={<SmartLifePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;