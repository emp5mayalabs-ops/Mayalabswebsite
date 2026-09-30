import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://92dx2j0s-8000.inc1.devtunnels.ms';

/* ──────────────────── DESIGN TOKENS ──────────────────── */
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
  danger: '#E53935',
  dangerSoft: 'rgba(229,57,53,0.06)',
  success: '#2E7D32',
  successSoft: 'rgba(46,125,50,0.07)',
  warn: '#E65100',
  warnSoft: 'rgba(230,81,0,0.07)',
  radius: '10px',
  radiusSm: '6px',
  shadow: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
  shadowHover: '0 4px 16px rgba(0,0,0,0.06)',
  font: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
  mono: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
};

const inputStyle = {
  background: T.surface, color: T.text, border: `1px solid ${T.border}`,
  borderRadius: T.radiusSm, padding: '11px 14px', fontSize: '14px',
  fontFamily: T.font, outline: 'none', width: '100%',
  transition: 'border-color 0.15s, box-shadow 0.15s',
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
const btnBase = {
  padding: '8px 18px', borderRadius: T.radiusSm, cursor: 'pointer', fontSize: '13px',
  fontWeight: 500, fontFamily: T.font, transition: 'all 0.15s', border: 'none',
};
const btnGhost = { ...btnBase, background: T.surfaceAlt, color: T.text, border: `1px solid ${T.border}` };
const btnDanger = { ...btnBase, background: T.dangerSoft, color: T.danger, border: `1px solid rgba(229,57,53,0.12)` };
const btnSuccess = { ...btnBase, background: T.successSoft, color: T.success, border: `1px solid rgba(46,125,50,0.12)` };
const btnPrimary = {
  ...btnBase, background: T.accent, color: '#FFF', border: 'none',
  padding: '10px 24px', borderRadius: '50px', fontWeight: 600,
};
const selectStyle = {
  ...inputStyle, appearance: 'auto', padding: '10px 14px',
};

function getToken() { return localStorage.getItem('access_token'); }

async function api(path, opts = {}) {
  const token = getToken();
  const res = await fetch(`${BASE_URL}${path}`, {
    ...opts,
    headers: {
      'Authorization': `Bearer ${token}`,
      ...(opts.body ? { 'Content-Type': 'application/json' } : {}),
      ...opts.headers,
    },
  });
  if (!res.ok) throw new Error(`${res.status}`);
  if (res.status === 204) return {};
  return res.json();
}

/* ──────────────────── DEPARTMENTS PANEL ──────────────────── */
function DepartmentsPanel() {
  const [departments, setDepartments] = useState([]);
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: '', code: '', description: '' });

  const load = useCallback(async () => {
    try { const d = await api('/api/admin/departments/'); setDepartments(d.data || []); } catch (e) { console.error(e); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const save = async (e) => {
    e.preventDefault();
    try {
      await api(editId ? `/api/admin/departments/${editId}/` : '/api/admin/departments/', {
        method: editId ? 'PATCH' : 'POST', body: JSON.stringify(form),
      });
      setModal(false); setEditId(null); setForm({ name: '', code: '', description: '' }); load();
    } catch (e) { console.error(e); }
  };

  const edit = (d) => { setEditId(d.id); setForm({ name: d.name, code: d.code, description: d.description }); setModal(true); };
  const deactivate = async (id) => {
    if (!confirm('Deactivate this department?')) return;
    try { await api(`/api/admin/departments/${id}/`, { method: 'DELETE' }); load(); } catch (e) { console.error(e); }
  };
  const activate = async (id) => {
    if (!confirm('Activate this department?')) return;
    try { await api(`/api/admin/departments/${id}/`, { method: 'PATCH', body: JSON.stringify({ is_active: true }) }); load(); } catch (e) { console.error(e); }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
        <div>
          <h2 style={{ fontSize: '24px', color: T.text, margin: 0, fontWeight: 700 }}>Departments</h2>
          <p style={{ margin: '4px 0 0', color: T.textMuted, fontSize: '14px' }}>{departments.length} total</p>
        </div>
        <button style={btnPrimary} onClick={() => { setEditId(null); setForm({ name: '', code: '', description: '' }); setModal(true); }}>
          + New Department
        </button>
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
                {!dept.is_active && <span style={pillBadge(T.dangerSoft, T.danger)}>INACTIVE</span>}
              </div>
              <p style={{ color: T.textMuted, fontSize: '13px', margin: 0, lineHeight: 1.5 }}>{dept.description}</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => edit(dept)} style={btnGhost}>Edit</button>
              {dept.is_active
                ? <button onClick={() => deactivate(dept.id)} style={btnDanger}>Deactivate</button>
                : <button onClick={() => activate(dept.id)} style={btnSuccess}>Activate</button>}
            </div>
          </div>
        ))}
        {departments.length === 0 && <p style={{ color: T.textMuted, textAlign: 'center', padding: '48px 0' }}>No departments found.</p>}
      </div>

      {modal && (
        <Modal title={editId ? 'Edit Department' : 'New Department'} onClose={() => setModal(false)}>
          <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <label style={labelStyle}>Name<input className="form-input" style={inputStyle} value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} required /></label>
            <label style={labelStyle}>Code<input className="form-input" style={inputStyle} value={form.code}
              onChange={e => setForm({ ...form, code: e.target.value })} required /></label>
            <label style={labelStyle}>Description<textarea style={{ ...inputStyle, resize: 'vertical' }} rows={3} value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })} /></label>
            <ModalFooter onClose={() => setModal(false)} />
          </form>
        </Modal>
      )}
    </>
  );
}

/* ──────────────────── EMPLOYEES PANEL ──────────────────── */
function EmployeesPanel() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterDept, setFilterDept] = useState('');
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({ count: 0, next: null, previous: null });
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const emptyForm = {
    username: '', password: '', employee_id: '', first_name: '', last_name: '',
    email: '', phone: '', department: '', designation: '', joining_date: '',
    employment_type: 'Full Time', work_location: 'Office',
  };
  const [form, setForm] = useState(emptyForm);

  const load = useCallback(async () => {
    try {
      const p = new URLSearchParams();
      if (search) p.set('search', search);
      if (filterStatus) p.set('status', filterStatus);
      if (filterDept) p.set('department', filterDept);
      p.set('page', page); p.set('page_size', 20);
      const d = await api(`/api/admin/employees/?${p}`);
      const data = d.data || {};
      setEmployees(data.results || []);
      setMeta({ count: data.count || 0, next: data.next, previous: data.previous });
    } catch (e) { console.error(e); }
  }, [search, filterStatus, filterDept, page]);

  const loadDepts = useCallback(async () => {
    try { const d = await api('/api/admin/departments/'); setDepartments(d.data || []); } catch (e) { console.error(e); }
  }, []);
  useEffect(() => { loadDepts(); }, [loadDepts]);
  useEffect(() => { load(); }, [load]);

  const save = async (e) => {
    e.preventDefault();
    try {
      const body = { ...form };
      if (body.department) body.department = Number(body.department);
      if (body.designation) body.designation = Number(body.designation);
      if (editId && !body.password) delete body.password;
      if (editId) delete body.username;
      await api(editId ? `/api/admin/employees/${editId}/` : '/api/admin/employees/', {
        method: editId ? 'PATCH' : 'POST', body: JSON.stringify(body),
      });
      setModal(false); setEditId(null); setForm(emptyForm); load();
    } catch (e) { console.error(e); }
  };

  const edit = (emp) => {
    setEditId(emp.id);
    setForm({
      username: emp.username || '', password: '', employee_id: emp.employee_id || '',
      first_name: emp.first_name || '', last_name: emp.last_name || '',
      email: emp.email || '', phone: emp.phone || '',
      department: emp.department || '', designation: emp.designation || '',
      joining_date: emp.joining_date || '', employment_type: emp.employment_type || 'Full Time',
      work_location: emp.work_location || 'Office',
    });
    setModal(true);
  };

  const toggleStatus = async (emp) => {
    const action = emp.status === 'Active' ? 'Deactivate' : 'Activate';
    if (!confirm(`${action} ${emp.first_name} ${emp.last_name}?`)) return;
    try {
      if (emp.status === 'Active') {
        await api(`/api/admin/employees/${emp.id}/`, { method: 'DELETE' });
      } else {
        await api(`/api/admin/employees/${emp.id}/`, { method: 'PATCH', body: JSON.stringify({ status: 'Active' }) });
      }
      load();
    } catch (e) { console.error(e); }
  };

  const statusBadge = (s) => {
    if (s === 'Active') return pillBadge(T.successSoft, T.success);
    if (s === 'Inactive') return pillBadge(T.dangerSoft, T.danger);
    if (s === 'Resigned') return pillBadge(T.warnSoft, T.warn);
    if (s === 'Terminated') return pillBadge('rgba(180,0,0,0.08)', '#B71C1C');
    return pillBadge(T.surfaceAlt, T.textSoft);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '24px', color: T.text, margin: 0, fontWeight: 700 }}>Employees</h2>
          <p style={{ margin: '4px 0 0', color: T.textMuted, fontSize: '14px' }}>{meta.count} total</p>
        </div>
        <button style={btnPrimary} onClick={() => { setEditId(null); setForm(emptyForm); setModal(true); }}>
          + New Employee
        </button>
      </div>

      {/* ── Filters ── */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <input style={{ ...inputStyle, flex: '1 1 220px', minWidth: 180 }} placeholder="Search name, ID, email…" value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }} />
        <select value={filterStatus} onChange={e => { setFilterStatus(e.target.value); setPage(1); }} style={selectStyle}>
          <option value="">All Statuses</option>
          <option>Active</option><option>Inactive</option><option>Resigned</option><option>Terminated</option>
        </select>
        <select value={filterDept} onChange={e => { setFilterDept(e.target.value); setPage(1); }} style={selectStyle}>
          <option value="">All Departments</option>
          {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
        </select>
      </div>

      {/* ── Table-like list ── */}
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: T.radius, overflow: 'hidden' }}>
        {/* Header row */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 1fr 120px', gap: '12px', padding: '12px 24px',
          background: T.surfaceAlt, fontSize: '11px', fontWeight: 600, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <span>Employee</span><span>Department</span><span>Type</span><span>Status</span><span style={{ textAlign: 'right' }}>Actions</span>
        </div>

        {employees.map((emp, i) => (
          <div key={emp.id} style={{
            display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 1fr 120px', gap: '12px',
            padding: '16px 24px', alignItems: 'center',
            borderTop: i > 0 ? `1px solid ${T.border}` : 'none',
            transition: 'background 0.12s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = T.surfaceAlt}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '14px', color: T.text }}>{emp.first_name} {emp.last_name}</span>
                <span style={{ fontSize: '12px', color: T.textMuted }}>{emp.employee_id}</span>
              </div>
              <div style={{ fontSize: '12px', color: T.textMuted, marginTop: '2px' }}>{emp.email}</div>
            </div>
            <span style={{ fontSize: '13px', color: T.textSoft }}>{emp.department_name || '—'}</span>
            <span style={{ fontSize: '13px', color: T.textSoft }}>{emp.employment_type}</span>
            <span style={statusBadge(emp.status)}>{emp.status}</span>
            <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
              <button onClick={() => edit(emp)} style={{ ...btnGhost, padding: '6px 12px', fontSize: '12px' }}>Edit</button>
              <button onClick={() => toggleStatus(emp)}
                style={{ ...(emp.status === 'Active' ? btnDanger : btnSuccess), padding: '6px 12px', fontSize: '12px' }}>
                {emp.status === 'Active' ? 'Deactivate' : 'Activate'}
              </button>
            </div>
          </div>
        ))}
        {employees.length === 0 && (
          <div style={{ padding: '48px', textAlign: 'center', color: T.textMuted, fontSize: '14px' }}>No employees found.</div>
        )}
      </div>

      {/* ── Pagination ── */}
      {meta.count > 20 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '28px', alignItems: 'center' }}>
          <button disabled={!meta.previous} onClick={() => setPage(p => Math.max(1, p - 1))}
            style={{ ...btnGhost, opacity: meta.previous ? 1 : 0.4 }}>← Prev</button>
          <span style={{ color: T.textMuted, fontSize: '13px' }}>Page {page} · {meta.count} records</span>
          <button disabled={!meta.next} onClick={() => setPage(p => p + 1)}
            style={{ ...btnGhost, opacity: meta.next ? 1 : 0.4 }}>Next →</button>
        </div>
      )}

      {/* ── Modal ── */}
      {modal && (
        <Modal title={editId ? 'Edit Employee' : 'New Employee'} onClose={() => setModal(false)} wide>
          <form onSubmit={save} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {!editId && <label style={labelStyle}>Username<input style={inputStyle} value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })} required /></label>}
            {!editId && <label style={labelStyle}>Password<input style={inputStyle} type="password" value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })} required /></label>}
            <label style={labelStyle}>Employee ID<input style={inputStyle} value={form.employee_id}
              onChange={e => setForm({ ...form, employee_id: e.target.value })} required /></label>
            <label style={labelStyle}>First Name<input style={inputStyle} value={form.first_name}
              onChange={e => setForm({ ...form, first_name: e.target.value })} required /></label>
            <label style={labelStyle}>Last Name<input style={inputStyle} value={form.last_name}
              onChange={e => setForm({ ...form, last_name: e.target.value })} required /></label>
            <label style={labelStyle}>Email<input style={inputStyle} type="email" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} required /></label>
            <label style={labelStyle}>Phone<input style={inputStyle} value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })} /></label>
            <label style={labelStyle}>Department
              <select style={selectStyle} value={form.department}
                onChange={e => setForm({ ...form, department: e.target.value })}>
                <option value="">Select…</option>
                {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select></label>
            <label style={labelStyle}>Designation ID<input style={inputStyle} value={form.designation}
              onChange={e => setForm({ ...form, designation: e.target.value })} /></label>
            <label style={labelStyle}>Joining Date<input style={inputStyle} type="date" value={form.joining_date}
              onChange={e => setForm({ ...form, joining_date: e.target.value })} /></label>
            <label style={labelStyle}>Employment Type
              <select style={selectStyle} value={form.employment_type}
                onChange={e => setForm({ ...form, employment_type: e.target.value })}>
                <option>Full Time</option><option>Part Time</option><option>Intern</option>
                <option>Contract</option><option>Consultant</option>
              </select></label>
            <label style={labelStyle}>Work Location
              <select style={selectStyle} value={form.work_location}
                onChange={e => setForm({ ...form, work_location: e.target.value })}>
                <option>Office</option><option>Remote</option><option>Hybrid</option>
              </select></label>
            <div style={{ gridColumn: '1 / -1' }}><ModalFooter onClose={() => setModal(false)} /></div>
          </form>
        </Modal>
      )}
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

/* ──────────────────── SHARED COMPONENTS ──────────────────── */
const labelStyle = {
  display: 'flex', flexDirection: 'column', gap: '5px',
  fontSize: '12px', fontWeight: 600, color: T.textSoft, letterSpacing: '0.02em',
};

function ModalFooter({ onClose }) {
  return (
    <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
      <button type="submit" style={{ ...btnPrimary, flex: 1, justifyContent: 'center', borderRadius: T.radiusSm }}>Save</button>
      <button type="button" onClick={onClose}
        style={{ ...btnGhost, flex: 1, textAlign: 'center' }}>Cancel</button>
    </div>
  );
}

function Modal({ title, onClose, children, wide }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }} onClick={onClose}>
      <div style={{
        background: T.surface, padding: '32px', borderRadius: '14px',
        width: '100%', maxWidth: wide ? '640px' : '460px',
        border: `1px solid ${T.border}`, boxShadow: '0 24px 80px rgba(0,0,0,0.12)',
        maxHeight: '90vh', overflowY: 'auto',
      }} onClick={e => e.stopPropagation()}>
        <h3 style={{ fontSize: '20px', color: T.text, marginBottom: '20px', fontWeight: 700 }}>{title}</h3>
        {children}
      </div>
    </div>
  );
}

/* ──────────────────── SIDEBAR ──────────────────── */
const NAV_ITEMS = [
  { key: 'departments', label: 'Departments', icon: '🏢' },
  { key: 'employees', label: 'Employees', icon: '👥' },
  { key: 'profile', label: 'My Profile', icon: '👤' },
];

/* ──────────────────── MAIN DASHBOARD ──────────────────── */
export default function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('departments');

  useEffect(() => {
    // Remove dark theme for dashboard
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
        {/* Logo */}
        <div style={{ padding: '0 20px 28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/mayalabs_logo.png" alt="MAYA LABS" style={{ height: '26px', borderRadius: '4px' }} />
        </div>

        {/* Section label */}
        <div style={{
          padding: '0 20px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em',
          color: T.textMuted, textTransform: 'uppercase', marginBottom: '8px',
        }}>
          Administration
        </div>

        {/* Nav */}
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

        {/* User + Logout */}
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
        {activeTab === 'employees' && <EmployeesPanel />}
        {activeTab === 'profile' && <ProfilePanel user={user} />}
      </main>
    </div>
  );
}
