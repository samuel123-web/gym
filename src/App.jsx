import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/main.css';
import './styles/navbar.css';
import './styles/components.css';
import './styles/pages.css';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { BookingModal } from './components/BookingModal';
import { TrainerDetailModal } from './components/TrainerDetailModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { LightboxModal } from './components/LightboxModal';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { TrainersPage } from './pages/TrainersPage';
import { MembershipPage } from './pages/MembershipPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  // Theme state
  const [theme, setTheme] = useState(() => localStorage.getItem('if_theme') || 'dark');
  
  // Language state - default to Amharic ('am')
  const [lang, setLang] = useState(() => localStorage.getItem('if_lang') || 'am');

  // Modals state
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [joinModalTitle, setJoinModalTitle] = useState('JOIN NOW');
  
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  // Toast state
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('if_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('if_lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  const handleOpenJoinModal = (title = 'JOIN NOW') => {
    setJoinModalTitle(title);
    setIsJoinModalOpen(true);
  };

  const handleShowToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <Router>
      <ScrollToTop />
      
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar
          onOpenJoinModal={handleOpenJoinModal}
          currentLang={lang}
          onToggleLang={toggleLang}
          currentTheme={theme}
          onToggleTheme={toggleTheme}
        />

        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  currentLang={lang}
                  onOpenJoinModal={handleOpenJoinModal}
                  onSelectProgram={setSelectedProgram}
                  onSelectTrainer={setSelectedTrainer}
                  onSelectGalleryItem={setSelectedGalleryItem}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage currentLang={lang} onOpenJoinModal={handleOpenJoinModal} />}
            />
            <Route
              path="/programs"
              element={
                <ProgramsPage
                  currentLang={lang}
                  onSelectProgram={setSelectedProgram}
                  onOpenJoinModal={handleOpenJoinModal}
                />
              }
            />
            <Route
              path="/trainers"
              element={
                <TrainersPage
                  currentLang={lang}
                  onSelectTrainer={setSelectedTrainer}
                  onOpenJoinModal={handleOpenJoinModal}
                />
              }
            />
            <Route
              path="/membership"
              element={<MembershipPage currentLang={lang} onOpenJoinModal={handleOpenJoinModal} />}
            />
            <Route
              path="/gallery"
              element={<GalleryPage currentLang={lang} onSelectGalleryItem={setSelectedGalleryItem} />}
            />
            <Route
              path="/contact"
              element={<ContactPage currentLang={lang} onShowToast={handleShowToast} />}
            />
            <Route path="/privacy" element={<PrivacyPage currentLang={lang} />} />
            <Route path="/terms" element={<TermsPage currentLang={lang} />} />
            <Route path="*" element={<NotFoundPage currentLang={lang} />} />
          </Routes>
        </main>

        <Footer currentLang={lang} onShowToast={handleShowToast} />
      </div>

      {/* Global Modals */}
      <BookingModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        initialTitle={joinModalTitle}
        currentLang={lang}
        onShowToast={handleShowToast}
      />

      <TrainerDetailModal
        trainer={selectedTrainer}
        currentLang={lang}
        onClose={() => setSelectedTrainer(null)}
        onBookTrainer={handleOpenJoinModal}
      />

      <ProgramDetailModal
        program={selectedProgram}
        currentLang={lang}
        onClose={() => setSelectedProgram(null)}
        onBookProgram={handleOpenJoinModal}
      />

      <LightboxModal
        item={selectedGalleryItem}
        currentLang={lang}
        onClose={() => setSelectedGalleryItem(null)}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </Router>
  );
}
