import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 'calc(var(--nav-height) + 2rem)',
      textAlign: 'center'
    }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-orange-dim)',
          border: '1px solid rgba(249, 115, 22, 0.3)',
          color: 'var(--accent-orange)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem auto'
        }}>
          <Dumbbell size={40} />
        </div>

        <h1 style={{ fontSize: '6rem', color: 'var(--accent-orange)', lineHeight: 1, marginBottom: '0.5rem' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>PAGE NOT FOUND</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>
          Looks like you strayed off the training floor! The page you are looking for doesn't exist or has been moved.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button variant="primary" icon={Home} onClick={() => navigate('/')}>
            RETURN HOME
          </Button>
          <Button variant="secondary" icon={ArrowLeft} onClick={() => navigate(-1)}>
            GO BACK
          </Button>
        </div>
      </div>
    </div>
  );
}
