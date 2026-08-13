import React, { useEffect } from 'react';
import { Bell, X } from 'lucide-react';

export function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="toast-banner">
      <Bell size={20} className="toast-icon" />
      <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{message}</span>
      <button onClick={onClose} style={{ color: 'var(--text-muted)', marginLeft: '1rem' }} aria-label="Close notification">
        <X size={16} />
      </button>
    </div>
  );
}
