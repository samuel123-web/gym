import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Dumbbell, Sun, Moon, Globe, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { siteConfig } from '../data/siteData';

export function Navbar({ onOpenJoinModal, currentLang, onToggleLang, currentTheme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const t = siteConfig.i18n[currentLang] || siteConfig.i18n.en;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
    return () => document.body.classList.remove('scroll-locked');
  }, [mobileOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: t.navHome },
    { path: '/about', label: t.navAbout },
    { path: '/programs', label: t.navPrograms },
    { path: '/trainers', label: t.navTrainers },
    { path: '/membership', label: t.navMembership },
    { path: '/gallery', label: t.navGallery },
    { path: '/contact', label: t.navContact }
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <NavLink to="/" className="brand-logo" aria-label="IronForge Fitness Home">
            <Dumbbell className="brand-icon" style={{ color: 'var(--accent-orange)' }} size={28} />
            <span>IRON<span className="brand-accent">FORGE</span></span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="nav-links" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Controls & CTA */}
          <div className="nav-actions">
            <button
              className="lang-toggle-btn"
              onClick={onToggleLang}
              title={`Switch to ${currentLang === 'en' ? 'Amharic' : 'English'}`}
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, marginLeft: '2px' }}>
                {currentLang.toUpperCase()}
              </span>
            </button>

            <button
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              title="Toggle Theme"
              aria-label="Toggle theme"
            >
              {currentTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Button
              variant="primary"
              onClick={() => onOpenJoinModal('Join Now')}
              className="desktop-only-btn"
            >
              {t.joinNow}
            </Button>

            <button
              className="hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Mobile Menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <NavLink to="/" className="brand-logo" onClick={() => setMobileOpen(false)}>
            <Dumbbell style={{ color: 'var(--accent-orange)' }} size={28} />
            <span>IRON<span className="brand-accent">FORGE</span></span>
          </NavLink>
          <button className="hamburger-btn" onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-controls">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Globe size={18} style={{ color: 'var(--accent-orange)' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{currentLang === 'am' ? 'ቋንቋ (Amharic)' : 'Language (English)'}</span>
          </div>
          <button className="lang-toggle-btn" onClick={onToggleLang}>
            {currentLang === 'am' ? 'EN' : 'AM'}
          </button>
        </div>

        <div className="mobile-footer-cta">
          <Button
            variant="primary"
            icon={ArrowRight}
            onClick={() => {
              setMobileOpen(false);
              onOpenJoinModal('Free 7-Day Trial');
            }}
          >
            {t.freeTrial}
          </Button>
        </div>
      </div>
    </>
  );

}
