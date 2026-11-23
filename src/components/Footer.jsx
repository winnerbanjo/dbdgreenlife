import { useState } from 'react';
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

  const handleFooterBenefitClick = (benefitId) => {
    setCurrentPage('home');
    setTimeout(() => {
      const section = document.getElementById('products-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        window.dispatchEvent(new CustomEvent('filter-benefit', { detail: benefitId }));
      }
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="newsletter-content">
          <h3 className="newsletter-title">Join Our Wellness Community</h3>
          <p className="newsletter-text">Subscribe for formulation updates, health insights, and science-backed supplementation tips.</p>
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
              Making everyday health simple, accessible, and scientifically sound. Formulation meets lifestyle for daily vitality across Nigeria.
            </p>
            <div className="certification-badge">
              <ShieldCheck size={20} className="badge-icon" />
              <span>Greenlife Quality Standards</span>
            </div>
          </div>

          {/* Navigation Links Aligned to Catalogue */}
          <div className="footer-col">
            <h4 className="footer-col-title">Shop by Benefit</h4>
            <ul className="footer-links">
              <li>
                <button type="button" onClick={() => handleFooterBenefitClick('pregnancy-care')} className="link-btn">
                  Pregnancy Care (2)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleFooterBenefitClick('womens-daily')} className="link-btn">
                  Women's Daily (2)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleFooterBenefitClick('mens-daily')} className="link-btn">
                  Men's Daily (2)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleFooterBenefitClick('general-daily')} className="link-btn">
                  General Daily (Wellness)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleFooterBenefitClick('weight-management')} className="link-btn">
                  OMG Omega 3-5-6-7-9
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Formulation &amp; Heritage</h4>
            <ul className="footer-links">
              <li><button onClick={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-btn">Greenlife Heritage</button></li>
              <li><button onClick={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-btn">Quality &amp; Safety Standards</button></li>
              <li><button onClick={() => { setCurrentPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="link-btn">Dosage &amp; Encapsulation</button></li>
              <li><button onClick={() => alert("Connecting to Greenlife Corporate platform...")} className="link-btn">B2B/B2C Partner Inquiries</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact &amp; Support</h4>
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
            © {new Date().getFullYear()} Day by Day Wellness. All rights reserved. Marketed by Greenlife Pharmaceuticals Ltd.
          </p>
          <p className="disclaimer">
            * Food supplements must not replace a varied and balanced diet and a healthy lifestyle. Individual registration numbers are recorded on pack details. As with other food supplements, seek professional advice if you are under medical supervision or suffer from food allergies.
          </p>
          <div className="love-text">
            <span>Formulated for daily vitality</span>
            <Heart size={14} className="heart-icon" />
            <span>by Greenlife.</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--color-bg-base);
          border-top: 1px solid var(--color-border);
          padding-top: 60px;
          margin-top: auto;
        }
        
        .footer-newsletter {
          background: linear-gradient(135deg, #FAF8F5 0%, #F4F0E8 100%);
          border-radius: var(--radius-xl);
          max-width: 1100px;
          margin: 0 auto 60px;
          padding: 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
        }
        
        .newsletter-content {
          max-width: 500px;
        }
        
        .newsletter-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-text-dark);
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        
        .newsletter-text {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.5;
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
          font-size: 0.92rem;
          font-family: var(--font-primary);
          color: var(--color-text-dark);
          outline: none;
        }
        
        .btn-newsletter {
          background-color: var(--color-text-dark);
          color: var(--color-white);
          padding: 10px 22px;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          transition: var(--transition-smooth);
        }
        
        .btn-newsletter:hover {
          background-color: #000000;
        }
        
        .newsletter-success {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-accent-green);
          font-weight: 600;
          font-size: 0.95rem;
          background-color: var(--color-accent-green-light);
          padding: 12px 24px;
          border-radius: var(--radius-full);
        }
        
        .success-icon {
          flex-shrink: 0;
        }
        
        /* Main Footer Grid */
        .footer-main {
          padding-bottom: 50px;
        }
        
        .footer-cols {
          display: grid;
          grid-template-columns: 1.5fr 1.1fr 1.1fr 1.1fr;
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
          font-size: 1.7rem;
          letter-spacing: -0.02em;
          color: var(--color-text-dark);
          line-height: 1;
        }
        
        .footer-logo .logo-subtext {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-text-muted);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 2px;
        }
        
        .brand-pitch {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        
        .certification-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: var(--color-white);
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-text-dark);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          width: fit-content;
        }
        
        .badge-icon {
          color: #2d8a5b;
        }
        
        .footer-col-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-dark);
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .link-btn {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          text-align: left;
          font-family: var(--font-primary);
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .link-btn:hover {
          color: var(--color-text-dark);
          padding-left: 3px;
        }
        
        .contact-info {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          margin-bottom: 6px;
          line-height: 1.5;
        }
        
        .contact-info.email {
          color: var(--color-text-dark);
          font-weight: 600;
          margin-top: 10px;
        }
        
        /* Footer Bottom */
        .footer-bottom {
          background-color: var(--color-bg-subtle);
          padding: 26px 0;
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
            padding: 30px;
            margin: 0 16px 40px;
            gap: 20px;
          }
          
          .footer-cols {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
          
          .footer-col-title {
            margin-bottom: 12px;
          }
        }

        @media (max-width: 640px) {
          .footer {
            padding-top: 40px;
          }
          .footer-newsletter {
            padding: 22px 16px;
            margin: 0 12px 32px;
            border-radius: 18px;
            gap: 16px;
          }
          .newsletter-title {
            font-size: 1.4rem;
          }
          .newsletter-text {
            font-size: 0.88rem;
          }
          .input-group {
            flex-direction: column;
            background: none;
            border: none;
            padding: 0;
            gap: 10px;
          }
          .newsletter-input {
            background-color: var(--color-white);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-full);
            padding: 12px 18px;
            font-size: 0.9rem;
          }
          .btn-newsletter {
            width: 100%;
            padding: 12px;
          }
          .footer-cols {
            grid-template-columns: 1fr;
            gap: 26px;
          }
          .brand-col {
            gap: 12px;
          }
          .footer-logo .logo-text {
            font-size: 1.5rem;
          }
          .footer-bottom {
            padding: 20px 0;
          }
          .copyright {
            font-size: 0.8rem;
          }
          .disclaimer {
            font-size: 0.72rem;
          }
        }
      `}</style>
    </footer>
  );
}
