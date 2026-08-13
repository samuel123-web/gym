import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { siteConfig } from '../data/siteData';

export function ContactPage({ onShowToast }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.message) {
      onShowToast('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
    onShowToast('Your message has been sent successfully!');
  };

  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
      <div className="container">
        <SectionHeading
          badge="GET IN TOUCH"
          title="CONTACT IRONFORGE"
          subtitle="Have questions about our facility, pricing, or personal training? Reach out to our team today."
          center
        />

        <div className="contact-grid" style={{ marginBottom: '6rem' }}>
          {/* Left Column: Contact Cards & Hours */}
          <div className="contact-info-cards">
            <div className="contact-card">
              <div className="contact-icon-box">
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>VISIT OUR FACILITY</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{siteConfig.contact.address}</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-box">
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>PHONE & WHATSAPP</h4>
                <a href={`tel:${siteConfig.contact.phoneClean}`} style={{ fontSize: '0.95rem', color: 'var(--accent-orange)', fontWeight: 600 }}>
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-box">
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>EMAIL US</h4>
                <a href={`mailto:${siteConfig.contact.email}`} style={{ fontSize: '0.95rem', color: 'var(--accent-orange)', fontWeight: 600 }}>
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-box">
                <Clock size={24} />
              </div>
              <div style={{ width: '100%' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>STAFFED OPERATING HOURS</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.9rem' }}>
                  {siteConfig.contact.hours.map((h, i) => (
                    <li key={i} style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                      <span>{h.days}</span>
                      <strong style={{ color: 'var(--text-main)' }}>{h.time}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dark Styled Custom Map Visual */}
            <div className="map-placeholder">
              <div className="map-grid-overlay"></div>
              <MapPin size={36} style={{ color: 'var(--accent-orange)', zIndex: 2 }} />
              <div style={{ zIndex: 2, textAlign: 'center' }}>
                <strong style={{ color: 'var(--text-main)', display: 'block' }}>BOLE MEDHANIALLEM, ADDIS ABABA</strong>
                <span style={{ fontSize: '0.8rem' }}>Coordinates: 8.9954° N, 38.7869° E</span>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="card" style={{ padding: '2.5rem' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>SEND US A MESSAGE</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Fill out the form below and an IronForge representative will get back to you within 2 hours.
                </p>

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+251 900 000 000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select
                    className="form-select"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Membership Plans">Membership Plans</option>
                    <option value="Personal Training">Personal Training</option>
                    <option value="Free Trial Pass">Free 7-Day Trial Pass</option>
                    <option value="Corporate Partnership">Corporate Partnership</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    rows={5}
                    className="form-textarea"
                    placeholder="How can we help you achieve your goals?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" variant="primary" icon={Send} style={{ width: '100%', padding: '1rem' }}>
                  SEND MESSAGE
                </Button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle size={60} style={{ color: 'var(--accent-orange)', margin: '0 auto 1.25rem auto' }} />
                <h3 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>MESSAGE SENT!</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Thank you, <strong>{form.fullName}</strong>. We have received your message regarding <strong>{form.subject}</strong> and will respond shortly via email or phone.
                </p>

                <Button variant="secondary" onClick={() => setSubmitted(false)}>
                  SEND ANOTHER MESSAGE
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
