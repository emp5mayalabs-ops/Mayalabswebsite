import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-layout reveal visible">
          <div>
            <div className="eyebrow">Partnership &amp; Engagement</div>
            <h2>Let's build what <span className="text-accent">comes next.</span></h2>
            <p style={{ marginBottom: '36px' }}>
              Seeking an indigenous deep-tech R&amp;D partner, aerospace collaboration, tactical robotics co-design, or strategic defense capability? Connect directly with our engineering leadership.
            </p>

            {submitted ? (
              <div className="form-success">
                ✓ SECURE TRANSMISSION RECEIVED. Our technical team will reach out within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-field">
                <div className="form-grid">
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input 
                    type="email" 
                    className="form-input"
                    placeholder="Your Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Subject / Organization / Domain"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />

                <textarea 
                  className="form-textarea"
                  placeholder="Mission requirements, technical scope, or partnership proposal details... *"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <div>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ marginTop: '8px' }}
                  >
                    Send Secure Inquiry <span className="arrow">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="contact-sidebar">
            <a href="tel:+9179078523335" className="contact-item">
              <small>DIRECT TELEPHONE</small>
              +91-79078523335
            </a>
            <a href="mailto:info@mayalabs.in" className="contact-item">
              <small>GENERAL &amp; DEFENSE INQUIRIES</small>
              info@mayalabs.in
            </a>
            <a href="mailto:admin@mayalabs.in" className="contact-item">
              <small>ADMINISTRATION &amp; CAREERS</small>
              admin@mayalabs.in
            </a>
            <div className="contact-item-plain">
              <small>R&amp;D HEADQUARTERS</small>
              Technopark, Trivandrum, Kerala, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
