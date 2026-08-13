import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export function BookingModal({ isOpen, onClose, initialTitle, currentLang = 'am', onShowToast }) {
  const isAmharic = currentLang === 'am';
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    plan: isAmharic ? 'የፕሮ አባልነት (5,900 ETB)' : 'PRO Membership (5,900 ETB)',
    preferredTime: isAmharic ? 'ጠዋት (ከ1:00 - 4:00)' : 'Morning (07:00 - 10:00)'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      onShowToast(isAmharic ? 'እባክዎን ሁሉንም አስፈላጊ መረጃዎች ይሙሉ::' : 'Please complete all required fields.');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="section-badge" style={{ marginBottom: '0.5rem' }}>IRONFORGE FITNESS</div>
              <h3 style={{ fontSize: '1.75rem' }}>
                {initialTitle || (isAmharic ? 'ስልጠናዎን ይጀምሩ' : 'START YOUR JOURNEY')}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                {isAmharic
                  ? 'ከዚህ በታች ያለውን አጭር ፎርም ይሙሉ:: የአባላት አገልግሎታችን በ2 ሰዓት ውስጥ ደውሎ ፓስዎን ያረጋግጥልዎታል::'
                  : 'Fill out the quick form below. Our team will contact you within 2 hours to confirm your pass.'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">{isAmharic ? 'ሙሉ ስም *' : 'Full Name *'}</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder={isAmharic ? 'ምሳሌ፡ ሚካኤል ሮባ' : 'e.g. Michael Roba'}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">{isAmharic ? 'ኢሜይል አድራሻ *' : 'Email Address *'}</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder={isAmharic ? 'ምሳሌ፡ michael@example.com' : 'e.g. michael@example.com'}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">{isAmharic ? 'ስልክ ቁጥር *' : 'Phone Number *'}</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+251 900 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">{isAmharic ? 'የተመረጠ አገልግሎት' : 'Selected Option'}</label>
                  <select
                    className="form-select"
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                  >
                    <option value={isAmharic ? "የ7 ቀን ነፃ የሙከራ ፓስ" : "Free 7-Day Trial Pass"}>
                      {isAmharic ? "የ7 ቀን ነፃ የሙከራ ፓስ" : "Free 7-Day Trial Pass"}
                    </option>
                    <option value={isAmharic ? "መሰረታዊ አባልነት (2,900 ETB)" : "BASIC Membership (2,900 ETB/mo)"}>
                      {isAmharic ? "መሰረታዊ አባልነት (2,900 ETB/ወር)" : "BASIC Membership (2,900 ETB/mo)"}
                    </option>
                    <option value={isAmharic ? "የፕሮ አባልነት (5,900 ETB)" : "PRO Membership (5,900 ETB/mo)"}>
                      {isAmharic ? "የፕሮ አባልነት (5,900 ETB/ወር)" : "PRO Membership (5,900 ETB/mo)"}
                    </option>
                    <option value={isAmharic ? "የኤሊት አባልነት (9,900 ETB)" : "ELITE Membership (9,900 ETB/mo)"}>
                      {isAmharic ? "የኤሊት አባልነት (9,900 ETB/ወር)" : "ELITE Membership (9,900 ETB/mo)"}
                    </option>
                    <option value={isAmharic ? "የግል አሰልጣኝ (1-on-1)" : "Personal Training Session"}>
                      {isAmharic ? "የግል አሰልጣኝ (1-on-1)" : "Personal Training Session"}
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">{isAmharic ? 'የተመረጠ ሰዓት' : 'Preferred Time Slot'}</label>
                  <select
                    className="form-select"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  >
                    <option value={isAmharic ? "ማለዳ (ከ11:00 - 2:00)" : "Early Bird (05:00 - 08:00)"}>
                      {isAmharic ? "ማለዳ (ከ11:00 - 2:00)" : "Early Bird (05:00 - 08:00)"}
                    </option>
                    <option value={isAmharic ? "ጠዋት (ከ2:00 - 6:00)" : "Morning (08:00 - 12:00)"}>
                      {isAmharic ? "ጠዋት (ከ2:00 - 6:00)" : "Morning (08:00 - 12:00)"}
                    </option>
                    <option value={isAmharic ? "ከሰአት (ከ6:00 - 11:00)" : "Afternoon (12:00 - 17:00)"}>
                      {isAmharic ? "ከሰአት (ከ6:00 - 11:00)" : "Afternoon (12:00 - 17:00)"}
                    </option>
                    <option value={isAmharic ? "ምሽት (ከ11:00 - 3:00)" : "Peak Evening (17:00 - 21:00)"}>
                      {isAmharic ? "ምሽት (ከ11:00 - 3:00)" : "Peak Evening (17:00 - 21:00)"}
                    </option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '1rem 0 1.5rem 0', fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
                <ShieldCheck size={16} style={{ color: 'var(--accent-orange)' }} />
                <span>{isAmharic ? 'ምንም አይነትቅድመ ክፍያ አይጠየቅም:: በቦሌ ጂማችን ፈጣን አገልግሎት ያግኙ::' : 'Zero financial commitment. Instant access to our Bole facility.'}</span>
              </div>

              <Button type="submit" variant="primary" style={{ width: '100%', padding: '1rem' }}>
                {isAmharic ? 'ፓስ ያግኙ' : 'CLAIM MY ACCESS PASS'}
              </Button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <CheckCircle size={60} style={{ color: 'var(--accent-orange)', margin: '0 auto 1.25rem auto' }} />
            <h3 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
              {isAmharic ? 'በተሳካ ሁኔታ ተመዝግበዋል!' : "YOU'RE ALL SET!"}
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {isAmharic ? (
                <>እንኳን ደህና መጡ <strong>{formData.fullName}</strong>! ለ<strong>{formData.plan}</strong> የተሰጠዎ የረጋገጫ ኮድ ተፈቅዷል:: በአጭር ጊዜ በ<strong>{formData.phone}</strong> እንደውላለን::</>
              ) : (
                <>Welcome, <strong>{formData.fullName}</strong>! Your <strong>{formData.plan}</strong> pass confirmation code has been generated. Our membership concierge will reach out via <strong>{formData.phone}</strong> shortly.</>
              )}
            </p>

            <div style={{ backgroundColor: 'var(--bg-input)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px border var(--border-color)', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', display: 'block' }}>
                {isAmharic ? 'የማረጋገጫ ኮድ' : 'CONFIRMATION CODE'}
              </span>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--accent-orange)', fontWeight: 800, letterSpacing: '0.1em' }}>
                IF-{Math.floor(100000 + Math.random() * 900000)}
              </span>
            </div>

            <Button variant="primary" onClick={handleReset} style={{ width: '100%' }}>
              {isAmharic ? 'ጨርስ' : 'DONE'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
