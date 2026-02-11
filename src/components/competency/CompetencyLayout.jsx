// src/components/competency/CompetencyLayout.jsx
import React, { useState } from 'react';
import {
    GraduationCap, LayoutDashboard, User, ClipboardCheck,
    Menu, X
} from 'lucide-react';
import ColorBends from '../ColorBends';
import { DARK_BACKGROUND_COLORS, LIGHT_BACKGROUND_COLORS } from '../../config/theme';
import { useLanguage } from '../../providers/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher';
import ThemeToggle from '../ThemeToggle';
import { useTheme } from '../../providers/ThemeProvider';

const CompetencyLayout = ({ children, activePage, onNavigate }) => {
    const { t } = useLanguage();
    const { resolvedTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isDark = resolvedTheme === 'dark';
    const blendColors = isDark ? DARK_BACKGROUND_COLORS : LIGHT_BACKGROUND_COLORS;

    const handleNavigate = (page) => {
        onNavigate(page);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <ColorBends
                className="color-bends-bg"
                transparent={true}
                colors={blendColors}
                rotation={0}
                autoRotate={0}
                speed={0.2}
                scale={0.7}
                frequency={1}
                warpStrength={1}
                mouseInfluence={1}
                parallax={0.5}
                noise={0.1}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: -1,
                    pointerEvents: 'none',
                    background: isDark ? '#000000' : '#ffffff',
                    opacity: isDark ? 0.42 : 0.5,
                    transition: 'background-color 350ms ease, opacity 350ms ease',
                }}
            />
            <div className="competency-app">
                {/* NAVBAR */}
                <nav className="navbar">
                    <div className="container nav-inner">
                        <div className="logo">
                            <div className="logo-icon">
                                <GraduationCap size={24} />
                            </div>
                            <span className="logo-text">KKU Competency</span>
                        </div>

                        <div className="nav-menu">
                            <button
                                className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`}
                                onClick={() => handleNavigate('dashboard')}
                            >
                                <LayoutDashboard size={18} />
                                <span>{t('dashboard')}</span>
                            </button>
                            <button
                                className={`nav-item ${activePage === 'profile' ? 'active' : ''}`}
                                onClick={() => handleNavigate('profile')}
                            >
                                <User size={18} />
                                <span>{t('profile')}</span>
                            </button>
                            <button
                                className={`nav-item ${activePage === 'verify' ? 'active' : ''}`}
                                onClick={() => handleNavigate('verify')}
                            >
                                <ClipboardCheck size={18} />
                                <span>{t('verify')}</span>
                            </button>
                        </div>

                        <div className="nav-right-section">
                            <div className="desktop-quick-controls">
                                <ThemeToggle />
                                <LanguageSwitcher />
                            </div>

                            <div className="user-area">
                                <div className="user-info">
                                    <span className="user-name">Kitsanapong P.</span>
                                    <span className="user-role">{t('student')}</span>
                                </div>
                                <div className="avatar">KP</div>
                            </div>

                            {/* Mobile: quick controls visible outside burger */}
                            <div className="mobile-inline-controls">
                                <ThemeToggle />
                                <LanguageSwitcher />
                            </div>

                            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* MOBILE MENU DRAWER */}
                {mobileMenuOpen && (
                    <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
                        <div className="mobile-menu-drawer left" onClick={e => e.stopPropagation()}>
                            <div className="mobile-menu-header">
                                <div className="logo-icon small">
                                    <GraduationCap size={20} />
                                </div>
                                <span>KKU Competency</span>
                                <button className="close-drawer-btn" onClick={() => setMobileMenuOpen(false)}>
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="mobile-nav-items">
                                <button
                                    className={`mobile-nav-item ${activePage === 'dashboard' ? 'active' : ''}`}
                                    onClick={() => handleNavigate('dashboard')}
                                >
                                    <LayoutDashboard size={20} />
                                    <span>{t('dashboard')}</span>
                                </button>
                                <button
                                    className={`mobile-nav-item ${activePage === 'profile' ? 'active' : ''}`}
                                    onClick={() => handleNavigate('profile')}
                                >
                                    <User size={20} />
                                    <span>{t('profile')}</span>
                                </button>
                                <button
                                    className={`mobile-nav-item ${activePage === 'verify' ? 'active' : ''}`}
                                    onClick={() => handleNavigate('verify')}
                                >
                                    <ClipboardCheck size={20} />
                                    <span>{t('verify')}</span>
                                </button>
                            </div>
                            <div className="mobile-user-section">
                                <div className="avatar">KP</div>
                                <div>
                                    <span className="user-name">Kitsanapong P.</span>
                                    <span className="user-role">{t('student')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* MAIN CONTENT */}
                <main className="main-content">
                    <div className="container">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
};

export default CompetencyLayout;
