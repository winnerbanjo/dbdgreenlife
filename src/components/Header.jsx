import { useState, useEffect } from 'react';
import { ShoppingBag, ChevronDown, Menu, X, Search, Sparkles } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage, onOpenQuiz }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'About Our Science', page: 'about' },
  ];

  const handleBenefitClick = (benefit) => {
    setShopDropdownOpen(false);
    setMobileMenuOpen(false);
    setCurrentPage('home');
    setTimeout(() => {
      const section = document.getElementById('products-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Dispatch an event or trigger filter if needed
        window.dispatchEvent(new CustomEvent('filter-benefit', { detail: benefit }));
      }
    }, 100);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Alert Promo Bar */}
      {!isScrolled && (
        <div className="top-alert-bar">
          <div className="alert-bar-content animate-marquee">
            <span>✨ Code <strong>BESTIE10</strong> gets you 10% off!</span>
            <span className="divider">•</span>
            <span>🚚 Free shipping across Nigeria on orders over ₦30,000</span>
            <span className="divider">•</span>
            <span>🔬 Backed by Greenlife Pharmaceuticals clinical heritage</span>
            <span className="divider">•</span>
            <span>🇳🇬 100% NAFDAC certified formulas</span>
          </div>
        </div>
      )}

      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="logo-icon"></div>
          <span className="logo-text">day by day</span>
          <span className="logo-subtext">by Greenlife</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <div 
            className="nav-link dropdown-trigger"
            onMouseEnter={() => setShopDropdownOpen(true)}
            onMouseLeave={() => setShopDropdownOpen(false)}
          >
            <span>Shop by Benefit</span>
            <ChevronDown size={16} className={`chevron-icon ${shopDropdownOpen ? 'rotate' : ''}`} />
            
            {shopDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-grid">
                  <div className="dropdown-item purple" onClick={() => handleBenefitClick('pregnancy')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">Pregnancy Care</h4>
                      <p className="dropdown-item-desc">Comprehensive support for moms-to-be</p>
                    </div>
                  </div>
                  <div className="dropdown-item orange" onClick={() => handleBenefitClick('pregnancy-plus')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">Maternal Health Plus</h4>
                      <p className="dropdown-item-desc">Omega-3 enhanced formulation</p>
                    </div>
                  </div>
                  <div className="dropdown-item green" onClick={() => handleBenefitClick('daily-wellness')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">Everyday Wellness</h4>
                      <p className="dropdown-item-desc">Essential nutrients for overall health</p>
                    </div>
                  </div>
                  <div className="dropdown-item blue" onClick={() => handleBenefitClick('mens-health')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">Men's Vitality</h4>
                      <p className="dropdown-item-desc">Energy & stamina support for men</p>
                    </div>
                  </div>
                  <div className="dropdown-item pink" onClick={() => handleBenefitClick('womens-health')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">Women's Wellness</h4>
                      <p className="dropdown-item-desc">Hormonal balance & glow</p>
                    </div>
                  </div>
                  <div className="dropdown-item yellow" onClick={() => handleBenefitClick('immune')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">Immune Support</h4>
                      <p className="dropdown-item-desc">Defend your body naturally</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => { setCurrentPage(item.page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`nav-link ${currentPage === item.page ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="header-actions">
          <button className="btn-search-icon" aria-label="Search">
            <Search size={20} />
          </button>
          
          <button className="btn-round btn-quiz" onClick={onOpenQuiz}>
            <Sparkles size={16} style={{ marginRight: '6px' }} />
            Take the Quiz
          </button>
          
          <button className="cart-icon" aria-label="Cart" onClick={() => alert("Commerce Storefront integration: Redirecting to Greenlife purchase portal...")}>
            <ShoppingBag size={22} />
            <span className="cart-badge">2</span>
          </button>

          {/* Mobile Menu Open */}
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)} aria-label="Open Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="logo">
            <div className="logo-icon"></div>
            <span className="logo-text">day by day</span>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>
        <div className="drawer-body">
          <div className="drawer-section">
            <h3 className="drawer-section-title">Shop by Benefit</h3>
            <div className="mobile-dropdown-list">
              <div className="mobile-dropdown-item purple" onClick={() => handleBenefitClick('pregnancy')}>
                Pregnancy Care
              </div>
              <div className="mobile-dropdown-item orange" onClick={() => handleBenefitClick('pregnancy-plus')}>
                Maternal Health Plus
              </div>
              <div className="mobile-dropdown-item green" onClick={() => handleBenefitClick('daily-wellness')}>
                Everyday Wellness
              </div>
              <div className="mobile-dropdown-item blue" onClick={() => handleBenefitClick('mens-health')}>
                Men's Vitality
              </div>
              <div className="mobile-dropdown-item pink" onClick={() => handleBenefitClick('womens-health')}>
                Women's Wellness
              </div>
              <div className="mobile-dropdown-item yellow" onClick={() => handleBenefitClick('immune')}>
                Immune Support
              </div>
            </div>
          </div>
          
          <div className="drawer-links">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => { setCurrentPage(item.page); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`drawer-link ${currentPage === item.page ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            className="btn-round btn-orange mobile-drawer-btn" 
            onClick={() => { setMobileMenuOpen(false); onOpenQuiz(); }}
            style={{ width: '100%', marginTop: '30px' }}
          >
            <Sparkles size={16} style={{ marginRight: '6px' }} />
            Take the Quiz
          </button>
        </div>
      </div>
      
      {/* CSS styling for Header is injected directly or loaded via styled classes */}
      <style>{`
        /* Top Alert Bar */
        .top-alert-bar {
          background: linear-gradient(90deg, var(--color-preg-primary) 0%, var(--color-pregplus-primary) 100%);
          color: var(--color-white);
          font-size: 0.78rem;
          font-weight: 700;
          height: 32px;
          display: flex;
          align-items: center;
          overflow: hidden;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1001;
        }
        
        .alert-bar-content {
          display: flex;
          align-items: center;
          gap: 30px;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
          padding-left: 20px;
        }
        
        .divider {
          opacity: 0.6;
        }
        
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 112px;
          padding-top: 32px;
          z-index: 1000;
          background-color: var(--color-preg-dark);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: var(--transition-smooth);
          display: flex;
          align-items: center;
        }
        
        .header.scrolled {
          background-color: rgba(77, 30, 102, 0.95);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          height: 70px;
          padding-top: 0;
        }
        
        .header-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        /* Logo Styles */
        .logo {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          user-select: none;
        }
        
        .logo-icon {
          width: 12px;
          height: 12px;
          background-color: var(--color-pregplus-primary);
          border-radius: var(--radius-full);
          margin-bottom: -4px;
          margin-left: 2px;
          box-shadow: 0 0 10px var(--color-pregplus-accent);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.6rem;
          color: var(--color-white);
          line-height: 1;
        }
        
        .logo-subtext {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--color-preg-secondary);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: -2px;
        }
        
        /* Navigation Styles */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        
        .nav-link {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-white);
          padding: 8px 0;
          position: relative;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background-color: var(--color-pregplus-primary);
          border-radius: var(--radius-full);
          transition: var(--transition-smooth);
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .chevron-icon {
          transition: var(--transition-smooth);
        }
        
        .chevron-icon.rotate {
          transform: rotate(180deg);
        }
        
        /* Dropdown Menu Styles */
        .dropdown-trigger {
          position: relative;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          width: 320px;
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 16px;
          border: 1px solid var(--color-border);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(10px); }
        }
        
        .dropdown-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .dropdown-item:hover {
          background-color: var(--color-brand-primary-light);
        }
        
        .item-dot {
          width: 8px;
          height: 8px;
          border-radius: var(--radius-full);
          margin-top: 6px;
          flex-shrink: 0;
        }
        
        .dropdown-item.purple .item-dot { background-color: var(--color-preg-primary); }
        .dropdown-item.orange .item-dot { background-color: var(--color-pregplus-primary); }
        .dropdown-item.green .item-dot { background-color: var(--color-accent-green); }
        .dropdown-item.blue .item-dot { background-color: var(--color-blue-primary); }
        .dropdown-item.pink .item-dot { background-color: var(--color-pink-primary); }
        .dropdown-item.yellow .item-dot { background-color: var(--color-accent-yellow); }
        
        .dropdown-item-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-text-dark);
          margin-bottom: 2px;
        }
        
        .dropdown-item-desc {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          line-height: 1.3;
        }
        
        /* Header Actions Styles */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .btn-search-icon {
          color: var(--color-white);
          padding: 8px;
          border-radius: var(--radius-full);
        }
        
        .btn-search-icon:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .btn-quiz {
          font-size: 0.85rem;
          padding: 10px 20px;
          background-color: var(--color-white);
          color: var(--color-preg-dark);
          font-weight: 700;
          border-radius: var(--radius-full);
          border: 2px solid var(--color-white);
        }
        
        .btn-quiz:hover {
          background-color: transparent;
          color: var(--color-white);
        }
        
        .cart-icon {
          position: relative;
          color: var(--color-white);
          padding: 8px;
          border-radius: var(--radius-full);
        }
        
        .cart-icon:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .cart-badge {
          position: absolute;
          top: 0;
          right: 0;
          background-color: var(--color-pregplus-primary);
          color: var(--color-white);
          font-size: 0.65rem;
          font-weight: 700;
          width: 16px;
          height: 16px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid var(--color-white);
        }
        
        .mobile-toggle {
          display: none;
          color: var(--color-white);
        }
        
        /* Mobile Drawer Styles */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 380px;
          height: 100vh;
          background-color: var(--color-white);
          z-index: 1100;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
          padding: 24px;
          display: flex;
          flex-direction: column;
          transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .mobile-drawer.open {
          right: 0;
        }
        
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
        }
        
        .drawer-body {
          display: flex;
          flex-direction: column;
          gap: 32px;
          flex: 1;
        }
        
        .drawer-section-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .mobile-dropdown-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .mobile-dropdown-item {
          font-size: 1.05rem;
          font-weight: 600;
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          border-left: 4px solid transparent;
        }
        
        .mobile-dropdown-item.purple { border-left-color: var(--color-preg-primary); background-color: var(--color-preg-light); }
        .mobile-dropdown-item.orange { border-left-color: var(--color-pregplus-primary); background-color: var(--color-pregplus-light); }
        .mobile-dropdown-item.green { border-left-color: var(--color-accent-green); background-color: var(--color-accent-green-light); }
        .mobile-dropdown-item.blue { border-left-color: var(--color-blue-primary); background-color: var(--color-blue-light); }
        .mobile-dropdown-item.pink { border-left-color: var(--color-pink-primary); background-color: var(--color-pink-light); }
        .mobile-dropdown-item.yellow { border-left-color: var(--color-accent-yellow); background-color: var(--color-accent-yellow-light); }
        
        .drawer-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-top: 1px solid var(--color-border);
          padding-top: 24px;
        }
        
        .drawer-link {
          font-size: 1.25rem;
          font-weight: 700;
          text-align: left;
          color: var(--color-text-dark);
          padding: 8px 0;
        }
        
        .drawer-link.active {
          color: var(--color-preg-primary);
        }
        
        /* Media Queries */
        @media (max-width: 968px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .btn-quiz {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
