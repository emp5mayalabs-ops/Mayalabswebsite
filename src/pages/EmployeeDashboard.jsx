import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://92dx2j0s-8000.inc1.devtunnels.ms';

/* ──────────────────── DESIGN TOKENS (same as Admin) ──────────────────── */
const T = {
  bg: '#FAFAF8',
  surface: '#FFFFFF',
  surfaceAlt: '#F5F4F1',
  border: 'rgba(0,0,0,0.06)',
  borderHover: 'rgba(0,0,0,0.12)',
  text: '#1A1A1A',
  textSoft: '#6B6B6B',
  textMuted: '#9E9E9E',
  accent: '#0D9488',
  accentSoft: 'rgba(13,148,136,0.08)',
  radius: '10px',
  radiusSm: '6px',
  shadow: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
  shadowHover: '0 4px 16px rgba(0,0,0,0.06)',
  font: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
};

const cardStyle = {
  background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radius,
  padding: '22px 24px', transition: 'box-shadow 0.2s, border-color 0.2s',
};
const pillBadge = (bg, color) => ({
  background: bg, color, padding: '3px 10px', borderRadius: '50px', fontSize: '11px',
  fontWeight: 600, letterSpacing: '0.03em', whiteSpace: 'nowrap', lineHeight: '18px',
  display: 'inline-block',
});

function getToken() { return localStorage.getItem('access_token'); }

async function api(path) {
  const token = getToken();
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}

/* ──────────────────── DEPARTMENTS PANEL ──────────────────── */
function DepartmentsPanel() {
  const [departments, setDepartments] = useState([]);

  const load = useCallback(async () => {
    try { const d = await api('/api/departments/'); setDepartments(d.data || []); } catch (e) { console.error(e); }
  }, []);
  useEffect(() => { load(); }, [load]);

  return (
    <>
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontSize: '24px', color: T.text, margin: 0, fontWeight: 700 }}>Departments</h2>
        <p style={{ margin: '4px 0 0', color: T.textMuted, fontSize: '14px' }}>{departments.length} active</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {departments.map(dept => (
          <div key={dept.id} style={{ ...cardStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = T.shadowHover; e.currentTarget.style.borderColor = T.borderHover; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = T.border; }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                <h3 style={{ margin: 0, fontSize: '16px', color: T.text, fontWeight: 600 }}>{dept.name}</h3>
                <span style={pillBadge(T.surfaceAlt, T.textSoft)}>{dept.code}</span>
              </div>
              <p style={{ color: T.textMuted, fontSize: '13px', margin: '0 0 12px', lineHeight: 1.5 }}>{dept.description}</p>
              <div style={{ fontSize: '12px', color: T.textMuted }}>
                <span>Manager: <span style={{ color: T.text, fontWeight: 500 }}>{dept.manager_name || 'Unassigned'}</span></span>
                <span style={{ marginLeft: '20px' }}>Created: {new Date(dept.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
        {departments.length === 0 && <p style={{ color: T.textMuted, textAlign: 'center', padding: '48px 0' }}>No departments found.</p>}
      </div>
    </>
  );
}

/* ──────────────────── PROFILE PANEL ──────────────────── */
function ProfilePanel({ user }) {
  return (
    <>
      <h2 style={{ fontSize: '24px', color: T.text, marginBottom: '28px', fontWeight: 700 }}>My Profile</h2>
      <div style={{ ...cardStyle, maxWidth: 400 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{
            width: 52, height: 52, borderRadius: '50%', background: T.accentSoft,
            display: 'grid', placeItems: 'center', fontSize: '20px', fontWeight: 700, color: T.accent,
          }}>
            {user?.username?.[0]?.toUpperCase() || '?'}
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', color: T.text, fontWeight: 600 }}>{user?.username}</h3>
            <span style={pillBadge(T.accentSoft, T.accent)}>{user?.role}</span>
          </div>
        </div>
        <div style={{ fontSize: '14px', color: T.textMuted, lineHeight: 2.2 }}>
          <div>User ID <span style={{ color: T.text, fontWeight: 500, marginLeft: 8 }}>{user?.id}</span></div>
          <div>Username <span style={{ color: T.text, fontWeight: 500, marginLeft: 8 }}>{user?.username}</span></div>
          <div>Role <span style={{ color: T.text, fontWeight: 500, marginLeft: 8 }}>{user?.role}</span></div>
        </div>
      </div>
    </>
  );
}

/* ──────────────────── SIDEBAR NAV ──────────────────── */
const NAV_ITEMS = [
  { key: 'departments', label: 'Departments', icon: '🏢' },
  { key: 'profile', label: 'My Profile', icon: '👤' },
];

/* ──────────────────── MAIN DASHBOARD ──────────────────── */
export default function EmployeeDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('departments');

  useEffect(() => {
    document.body.removeAttribute('data-theme');
    (async () => {
      try {
        const token = getToken();
        if (!token) { navigate('/login'); return; }
        const d = await api('/api/auth/me/');
        setUser(d.data);
      } catch { navigate('/login'); }
    })();
  }, [navigate]);

  const handleLogout = () => { localStorage.removeItem('access_token'); navigate('/'); };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.font }}>
      {/* ── Sidebar ── */}
      <aside style={{
        width: 240, flexShrink: 0, background: T.surface,
        borderRight: `1px solid ${T.border}`,
        display: 'flex', flexDirection: 'column', padding: '20px 0',
      }}>
        <div style={{ padding: '0 20px 28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/mayalabs_logo.png" alt="MAYA LABS" style={{ height: '26px', borderRadius: '4px' }} />
        </div>

        <div style={{
          padding: '0 20px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em',
          color: T.textMuted, textTransform: 'uppercase', marginBottom: '8px',
        }}>
          Staff Portal
        </div>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px', padding: '0 10px' }}>
          {NAV_ITEMS.map(item => {
            const active = activeTab === item.key;
            return (
              <button key={item.key} onClick={() => setActiveTab(item.key)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '11px 14px', borderRadius: '8px', border: 'none',
                  background: active ? T.accentSoft : 'transparent',
                  color: active ? T.accent : T.textSoft,
                  cursor: 'pointer', fontSize: '14px', fontWeight: active ? 600 : 400,
                  transition: 'all 0.12s', textAlign: 'left', width: '100%',
                  fontFamily: T.font,
                }}>
                <span style={{ fontSize: '15px', opacity: 0.85 }}>{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </nav>

        <div style={{ padding: '16px 16px 8px', borderTop: `1px solid ${T.border}` }}>
          {user && (
            <div style={{ fontSize: '13px', color: T.textSoft, marginBottom: '10px', padding: '0 4px' }}>
              {user.username} <span style={{ color: T.textMuted }}>· {user.role}</span>
            </div>
          )}
          <button onClick={handleLogout}
            style={{
              width: '100%', padding: '9px', borderRadius: '8px',
              border: `1px solid ${T.border}`, background: 'transparent',
              color: T.textSoft, cursor: 'pointer', fontSize: '13px', fontFamily: T.font,
              transition: 'all 0.12s',
            }}>
            Sign out
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main style={{ flex: 1, padding: '40px 48px 64px', overflowY: 'auto', maxWidth: 1100 }}>
        {activeTab === 'departments' && <DepartmentsPanel />}
        {activeTab === 'profile' && <ProfilePanel user={user} />}
      </main>
    </div>
  );
}
