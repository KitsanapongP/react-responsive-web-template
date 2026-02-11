import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { LanguageProvider } from './providers/LanguageContext';

// Import Pages
import Home from './pages/Home/Home';
import CompetencyPage from './pages/Competency/Competency';
import SmartLifePage from './pages/SmartLife/SmartLife';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            {/* หน้าหลัก */}
            <Route path="/" element={<Home />} />

            {/* Template Routes */}
            <Route path="/competency" element={<CompetencyPage />} />
            <Route path="/smartlife" element={<SmartLifePage />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;