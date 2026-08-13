import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Youtube, Send, MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export function Footer({ currentLang = 'am', onShowToast }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const isAmharic = currentLang === 'am';
  const t = siteConfig.i18n[currentLang] || siteConfig.i18n.am;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      onShowToast(isAmharic ? 'እባክዎን ትክክለኛ ኢሜይል ያስገቡ::' : 'Please enter a valid email address.');
      return;
    }
    onShowToast(isAmharic ? 'ስለተመዘገቡ እናመሰግናለን!' : 'Thank you for subscribing to IronForge updates!');
    setNewsletterEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <NavLink to="/" className="brand-logo footer-brand-title">
              <Dumbbell style={{ color: 'var(--accent-orange)' }} size={28} />
              <span>IRON<span className="brand-accent">FORGE</span></span>
            </NavLink>
            <p style={{ margin: '1rem 0 1.5rem 0', fontSize: '0.95rem' }}>
              {isAmharic ? siteConfig.taglineAmharic : siteConfig.tagline}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginBottom: '1.5rem' }}>
              {isAmharic ? siteConfig.supportingMessageAmharic : siteConfig.supportingMessage}
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                <Send size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links: Navigation */}
          <div>
            <h4 className="footer-column-title">{isAmharic ? "ፕሮግራሞች" : "Programs"}</h4>
            <ul className="footer-links">
              <li><NavLink to="/programs" className="footer-link">{isAmharic ? "የጥንካሬ ስልጠና" : "Strength Training"}</NavLink></li>
              <li><NavLink to="/programs" className="footer-link">{isAmharic ? "የግል አሰልጣኝ" : "Personal Training"}</NavLink></li>
              <li><NavLink to="/programs" className="footer-link">{isAmharic ? "ፈንክሽናል ፊስነስ" : "Functional Fitness"}</NavLink></li>
              <li><NavLink to="/programs" className="footer-link">{isAmharic ? "ካርዲዮ እና ሂት" : "Cardio & HIIT"}</NavLink></li>
              <li><NavLink to="/programs" className="footer-link">{isAmharic ? "የክብደት መቀነስ" : "Weight Loss Shred"}</NavLink></li>
              <li><NavLink to="/programs" className="footer-link">{isAmharic ? "የቡድን ስልጠና" : "Group Training"}</NavLink></li>
            </ul>
          </div>

          {/* Quick Links: Company */}
          <div>
            <h4 className="footer-column-title">{isAmharic ? "ስለ እኛ" : "Company"}</h4>
            <ul className="footer-links">
              <li><NavLink to="/about" className="footer-link">{isAmharic ? "አላማችን" : "Our Philosophy"}</NavLink></li>
              <li><NavLink to="/trainers" className="footer-link">{isAmharic ? "አሰልጣኞች" : "Meet Coaches"}</NavLink></li>
              <li><NavLink to="/membership" className="footer-link">{isAmharic ? "የአባልነት ዋጋ" : "Membership Plans"}</NavLink></li>
              <li><NavLink to="/gallery" className="footer-link">{isAmharic ? "ጋለሪ" : "Facility Gallery"}</NavLink></li>
              <li><NavLink to="/contact" className="footer-link">{isAmharic ? "አድራሻ" : "Contact & Location"}</NavLink></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-column-title">{isAmharic ? "አድራሻ እና መረጃ" : "Location & Info"}</h4>
            <ul className="footer-links" style={{ fontSize: '0.88rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: 'var(--accent-orange)', flexShrink: 0, marginTop: '3px' }} />
                <span>{isAmharic ? siteConfig.contact.address : siteConfig.contact.addressEn}</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--accent-orange)' }} />
                <a href={`tel:${siteConfig.contact.phoneClean}`} className="footer-link">{siteConfig.contact.phone}</a>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--accent-orange)' }} />
                <a href={`mailto:${siteConfig.contact.email}`} className="footer-link">{siteConfig.contact.email}</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 className="footer-column-title">{isAmharic ? "መረጃዎች ይድረስዎ" : "Stay Informed"}</h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
              {isAmharic ? "የሳምንታዊ የስልጠና እና የምግብ ምክሮችን ለማግኘት ይመዝገቡ::" : "Subscribe to receive weekly training advice, nutrition tips, and gym updates."}
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder={isAmharic ? "ኢሜይልዎን ያስገቡ" : "Enter your email"}
                className="form-input"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '0.65rem 1rem', fontSize: '0.85rem' }}>
                {isAmharic ? "አሁኑኑ ይመዝገቡ" : "SUBSCRIBE NOW"}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            {t.rights}
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <NavLink to="/privacy" className="footer-link">{isAmharic ? "የግል መረጃ ጥበቃ" : "Privacy Policy"}</NavLink>
            <NavLink to="/terms" className="footer-link">{isAmharic ? "የአባልነት ውል" : "Terms & Conditions"}</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
