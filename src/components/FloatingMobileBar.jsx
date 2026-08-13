import React, { useState, useEffect } from 'react';
import { Zap, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export function FloatingMobileBar({ onOpenJoinModal, currentLang = 'am' }) {
  const [visible, setVisible] = useState(false);
  const isAmharic = currentLang === 'am';

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling 200px down
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="mobile-floating-bar animate-fade-in-up">
      <a
        href={`tel:${siteConfig.contact.phoneClean}`}
        className="mobile-bar-icon-btn"
        aria-label="Call Gym"
        title="Call IronForge"
      >
        <Phone size={20} />
      </a>

      <button
        className="mobile-bar-primary-btn"
        onClick={() => onOpenJoinModal(isAmharic ? 'ነፃ የ7 ቀን የሙከራ ፓስ' : 'Free 7-Day Trial Pass')}
      >
        <Zap size={18} className="pulse-icon" />
        <span>{isAmharic ? 'ነፃ የ7 ቀን ፓስ ያግኙ' : 'CLAIM FREE 7-DAY TRIAL'}</span>
      </button>
    </div>
  );
}
