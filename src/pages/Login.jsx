import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Use a sleek light/cream theme for the page background
  useEffect(() => {
    document.body.removeAttribute('data-theme');
    document.body.style.background = '#FAFAF8';
    return () => {
      document.body.style.background = '';
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const baseUrl = 'https://92dx2j0s-8000.inc1.devtunnels.ms';
      
      // 1. Authenticate
      const authRes = await fetch(`${baseUrl}/api/auth/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (!authRes.ok) {
        throw new Error('Invalid credentials');
      }

      const authData = await authRes.json();
      const token = authData.data?.access;
      
      if (!token) throw new Error('Token not received from server');

      localStorage.setItem('access_token', token);
      
      // 2. Get User Info
      const meRes = await fetch(`${baseUrl}/api/auth/me/`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (!meRes.ok) {
        throw new Error('Failed to retrieve user info');
      }

      const meData = await meRes.json();
      
      if (meData?.data?.role === 'ADMIN') {
        navigate('/admin/dashboard');
      } else {
        navigate('/employee/dashboard');
      }

    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#FAFAF8',
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    }}>
      <div style={{ position: 'absolute', top: 32, left: 32 }}>
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          <img src="/mayalabs_logo.png" alt="MAYA LABS" style={{ height: '32px', borderRadius: '6px' }} />
        </a>
      </div>

      <div style={{ 
        width: '100%', 
        maxWidth: '420px', 
        background: '#0A0A0A', // Sleek black card
        padding: '48px', 
        borderRadius: '20px',
        boxShadow: '0 24px 48px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.04)',
        border: '1px solid rgba(0,0,0,0.1)'
      }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ 
            fontSize: '11px', 
            fontWeight: 700, 
            letterSpacing: '0.12em', 
            color: '#FAFAF8', 
            opacity: 0.6,
            marginBottom: '12px',
            textTransform: 'uppercase'
          }}>
            Secure Access
          </div>
          <h2 style={{ fontSize: '28px', color: '#FAFAF8', margin: 0, fontWeight: 600 }}>Mission Control</h2>
        </div>

        {error && (
          <div style={{ 
            padding: '12px 16px', 
            background: 'rgba(229, 57, 53, 0.1)', 
            color: '#EF5350', 
            borderRadius: '8px', 
            marginBottom: '24px', 
            fontSize: '13px', 
            border: '1px solid rgba(229, 57, 53, 0.2)',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input 
            type="text" 
            placeholder="Username / Identifier" 
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            style={{ 
              background: '#1A1A1A', 
              color: '#FAFAF8', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '10px',
              padding: '14px 16px',
              fontSize: '15px',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ 
              background: '#1A1A1A', 
              color: '#FAFAF8', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '10px',
              padding: '14px 16px',
              fontSize: '15px',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
          
          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              background: '#FAFAF8', 
              color: '#0A0A0A',
              border: 'none',
              width: '100%', 
              padding: '16px',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '0.02em',
              marginTop: '16px',
              cursor: 'pointer',
              transition: 'transform 0.1s, opacity 0.2s',
              opacity: loading ? 0.7 : 1
            }}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {loading ? 'AUTHENTICATING...' : 'AUTHORIZE LOGIN'}
          </button>
        </form>
      </div>
    </div>
  );
}
