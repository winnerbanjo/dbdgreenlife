import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="newsletter-content">
          <h3 className="newsletter-title">Join Our Wellness Community</h3>
          <p className="newsletter-text">Subscribe for health tips, early product launches, and science-backed supplement guides.</p>
        </div>
        <form onSubmit={handleSubscribe} className="newsletter-form">
          {subscribed ? (
            <div className="newsletter-success">
              <CheckCircle2 size={18} className="success-icon" />
              <span>You're in! Check your inbox soon.</span>
            </div>
          ) : (
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="newsletter-input"
              />
              <button type="submit" className="btn-round btn-newsletter">
                <Mail size={16} style={{ marginRight: '6px' }} />
                Subscribe
              </button>
            </div>
          )}
        </form>
      </div>

      <div className="footer-main container">
        <div className="footer-cols">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <span className="logo-text">day by day</span>
              <span className="logo-subtext">by Greenlife</span>
            </div>
            <p className="brand-pitch">
              Making everyday health simple, accessible, and scientifically sound. Formulation meets lifestyle for daily vitality.
            </p>
            <div className="certification-badge">
              <ShieldCheck size={20} className="badge-icon" />
              <span>Greenlife Certified Quality Standards</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Shop Benefits</h4>
            <ul className="footer-links">
              <li><a href="#products-section" onClick={() => setCurrentPage('home')}>Pregnancy Care</a></li>
              <li><a href="#products-section" onClick={() => setCurrentPage('home')}>Maternal Health Plus</a></li>
              <li><a href="#products-section" onClick={() => setCurrentPage('home')}>Everyday Wellness</a></li>
              <li><a href="#products-section" onClick={() => setCurrentPage('home')}>Immune Support</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Science & Story</h4>
            <ul className="footer-links">
              <li><button onClick={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-btn">Clinical Advisory Board</button></li>
              <li><button onClick={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-btn">Greenlife Heritage</button></li>
              <li><button onClick={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-btn">Ingredient Purity</button></li>
              <li><button onClick={() => alert("Redirecting to Greenlife Corporate platform...")} className="link-btn">B2B/B2C Partner Portal</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact & Support</h4>
            <p className="contact-info">Greenlife Pharmaceuticals Ltd.</p>
            <p className="contact-info">35A, Association Avenue Ilupeju,</p>
            <p className="contact-info">Lagos, Nigeria</p>
            <p className="contact-info email">info@daybydaywellness.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-container container">
          <p className="copyright">
            © {new Date().getFullYear()} Day by Day Wellness. All rights reserved. Backed by Greenlife Pharmaceuticals.
          </p>
          <p className="disclaimer">
            * These statements have not been evaluated by the National Agency for Food and Drug Administration and Control (NAFDAC) or other regulatory authorities. These products are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <div className="love-text">
            <span>Made with</span>
            <Heart size={14} className="heart-icon" />
            <span>for daily vitality.</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #f3f0f7;
          border-top: 1px solid var(--color-border);
          padding-top: 60px;
          margin-top: auto;
        }
        
        .footer-newsletter {
          background: linear-gradient(135deg, var(--color-preg-light) 0%, var(--color-pregplus-light) 100%);
          border-radius: var(--radius-xl);
          max-width: 1100px;
          margin: 0 auto 60px;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-white);
        }
        
        .newsletter-content {
          max-width: 500px;
        }
        
        .newsletter-title {
          font-size: 1.75rem;
          color: var(--color-preg-primary);
          margin-bottom: 8px;
        }
        
        .newsletter-text {
          font-size: 0.95rem;
          color: var(--color-text-muted);
        }
        
        .newsletter-form {
          flex: 1;
          max-width: 450px;
        }
        
        .input-group {
          display: flex;
          background-color: var(--color-white);
          border-radius: var(--radius-full);
          padding: 6px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
        }
        
        .newsletter-input {
          flex: 1;
          border: none;
          background: none;
          padding: 0 16px;
          font-size: 0.95rem;
          font-family: var(--font-primary);
          color: var(--color-text-dark);
          outline: none;
        }
        
        .btn-newsletter {
          background-color: var(--color-preg-primary);
          color: var(--color-white);
          padding: 10px 20px;
          font-size: 0.85rem;
        }
        
        .btn-newsletter:hover {
          background-color: var(--color-preg-dark);
        }
        
        .newsletter-success {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-accent-green);
          font-weight: 600;
          font-size: 1rem;
          background-color: var(--color-accent-green-light);
          padding: 12px 24px;
          border-radius: var(--radius-full);
        }
        
        .success-icon {
          flex-shrink: 0;
        }
        
        /* Main Footer Grid */
        .footer-main {
          padding-bottom: 40px;
        }
        
        .footer-cols {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 40px;
        }
        
        .brand-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .footer-logo {
          display: flex;
          flex-direction: column;
        }
        
        .footer-logo .logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.8rem;
          color: var(--color-preg-primary);
          line-height: 1;
        }
        
        .footer-logo .logo-subtext {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        
        .brand-pitch {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        
        .certification-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: var(--color-white);
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-preg-primary);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          width: fit-content;
        }
        
        .badge-icon {
          color: var(--color-accent-green);
        }
        
        .footer-col-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-dark);
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .footer-links a,
        .link-btn {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          text-align: left;
          font-family: var(--font-primary);
          transition: var(--transition-smooth);
        }
        
        .footer-links a:hover,
        .link-btn:hover {
          color: var(--color-preg-primary);
          padding-left: 4px;
        }
        
        .contact-info {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 6px;
        }
        
        .contact-info.email {
          color: var(--color-preg-primary);
          font-weight: 600;
          margin-top: 12px;
        }
        
        /* Footer Bottom */
        .footer-bottom {
          background-color: #ece7f2;
          padding: 30px 0;
          border-top: 1px solid var(--color-border);
        }
        
        .bottom-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }
        
        .copyright {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-dark);
        }
        
        .disclaimer {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          max-width: 900px;
          line-height: 1.4;
        }
        
        .love-text {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
        
        .heart-icon {
          color: var(--color-pregplus-primary);
          fill: var(--color-pregplus-primary);
        }
        
        /* Media Queries */
        @media (max-width: 968px) {
          .footer-newsletter {
            flex-direction: column;
            align-items: stretch;
            padding: 24px;
            margin: 0 24px 40px;
            gap: 20px;
          }
          
          .footer-cols {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .footer-col-title {
            margin-bottom: 12px;
          }
        }
      `}</style>
    </footer>
  );
}
