import { useState, useEffect, useMemo } from 'react';
import { ShoppingBag, ChevronDown, Menu, X, Search, Sparkles, ArrowRight, Check } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';

export default function Header({ currentPage, setCurrentPage, onOpenQuiz, onProductClick, onShopRedirect }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleBenefitClick = (benefitId) => {
    setShopDropdownOpen(false);
    setMobileMenuOpen(false);
    setCurrentPage('home');
    setTimeout(() => {
      const section = document.getElementById('products-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        window.dispatchEvent(new CustomEvent('filter-benefit', { detail: benefitId }));
      }
    }, 100);
  };

  // Live search filtering across all 8 products
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return PRODUCTS_DATA;
    const q = searchQuery.toLowerCase().trim();
    return PRODUCTS_DATA.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.shortName.toLowerCase().includes(q) ||
        p.differentiator.toLowerCase().includes(q) ||
        p.group.toLowerCase().includes(q) ||
        p.packSize.toLowerCase().includes(q) ||
        p.benefits.some(b => b.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  const handleSelectSearchResult = (productId) => {
    setSearchOpen(false);
    setSearchQuery('');
    if (onProductClick) {
      onProductClick(productId);
    }
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
            <span>🇳🇬 NAFDAC Registered Formulations</span>
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
                  <div className="dropdown-item purple" onClick={() => handleBenefitClick('pregnancy-care')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">Pregnancy Care (2)</h4>
                      <p className="dropdown-item-desc">Wellness Pregnancy &amp; Pregnancy Plus</p>
                    </div>
                  </div>
                  <div className="dropdown-item pink" onClick={() => handleBenefitClick('womens-daily')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">Women's Daily (2)</h4>
                      <p className="dropdown-item-desc">Prowoman Young &amp; Prowoman 40+</p>
                    </div>
                  </div>
                  <div className="dropdown-item blue" onClick={() => handleBenefitClick('mens-daily')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">Men's Daily (2)</h4>
                      <p className="dropdown-item-desc">PROMAN &amp; X-PROMAN Vitality</p>
                    </div>
                  </div>
                  <div className="dropdown-item teal" onClick={() => handleBenefitClick('general-daily')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">General Daily (1)</h4>
                      <p className="dropdown-item-desc">Day By Day Wellness (34 Nutrients)</p>
                    </div>
                  </div>
                  <div className="dropdown-item green" onClick={() => handleBenefitClick('weight-management')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">Weight Management</h4>
                      <p className="dropdown-item-desc">Day By Day OMG (Omega-7 Blend)</p>
                    </div>
                  </div>
                  <div className="dropdown-item green" onClick={() => handleBenefitClick('brain-health')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">Brain Health</h4>
                      <p className="dropdown-item-desc">Day By Day OMG (Omega-3 &amp; 9)</p>
                    </div>
                  </div>
                  <div className="dropdown-item green" onClick={() => handleBenefitClick('heart-health')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">Heart Health</h4>
                      <p className="dropdown-item-desc">Day By Day OMG (Omega-3 &amp; 9)</p>
                    </div>
                  </div>
                  <div className="dropdown-item green" onClick={() => handleBenefitClick('anti-aging')}>
                    <div className="item-dot"></div>
                    <div>
                      <h4 className="dropdown-item-title">Anti-aging &amp; Skin</h4>
                      <p className="dropdown-item-desc">Day By Day OMG (Omega-5 Punicic)</p>
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
          <button 
            className="btn-search-icon" 
            aria-label="Search Catalogue"
            onClick={() => setSearchOpen(true)}
          >
            <Search size={20} />
          </button>
          
          <button className="btn-round btn-quiz" onClick={onOpenQuiz}>
            <Sparkles size={16} style={{ marginRight: '6px' }} />
            Take the Quiz
          </button>
          
          <button 
            className="cart-icon" 
            aria-label="Cart" 
            onClick={() => onShopRedirect ? onShopRedirect('pregnancy') : null}
          >
            <ShoppingBag size={22} />
            <span className="cart-badge">1</span>
          </button>

          {/* Mobile Menu Open */}
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)} aria-label="Open Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Interactive Search Modal */}
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-modal animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <div className="search-header">
              <div className="search-input-wrap">
                <Search size={20} className="search-input-icon" />
                <input
                  type="text"
                  placeholder="Search catalogue (e.g. Young, 40+, Proman, Pregnancy, OMG, Wellness)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="search-field"
                />
                {searchQuery && (
                  <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                    <X size={16} />
                  </button>
                )}
              </div>
              <button className="search-close-btn" onClick={() => setSearchOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="search-results-container">
              <div className="search-results-count">
                <span>{searchResults.length} {searchResults.length === 1 ? 'product' : 'products'} found</span>
                <span className="search-hint">Click any card to inspect full formulation</span>
              </div>

              <div className="search-results-list">
                {searchResults.map((product) => (
                  <div 
                    key={product.id} 
                    className="search-result-card"
                    onClick={() => handleSelectSearchResult(product.id)}
                  >
                    <div className="search-result-img-box">
                      <img src={product.image} alt={product.title} className="search-result-img" />
                    </div>
                    <div className="search-result-details">
                      <div className="search-result-top">
                        <span className="search-result-group">{product.group}</span>
                        <span className="search-result-size">{product.packSize}</span>
                      </div>
                      <h4 className="search-result-title">{product.title}</h4>
                      <p className="search-result-diff">{product.differentiator}</p>
                      <div className="search-result-bottom">
                        <span className="search-result-count-tag">{product.ingredientCount} Actives</span>
                        {product.hasConfirmedPrice ? (
                          <span className="search-result-price">{product.price}</span>
                        ) : (
                          <span className="search-result-pending">Details Only</span>
                        )}
                      </div>
                    </div>
                    <button className="search-result-arrow" aria-label="Open Product">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                ))}

                {searchResults.length === 0 && (
                  <div className="search-no-results">
                    <p>No products match "{searchQuery}".</p>
                    <button className="btn-round btn-outline" onClick={() => setSearchQuery('')}>
                      Show All 8 Products
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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
              <div className="mobile-dropdown-item purple" onClick={() => handleBenefitClick('pregnancy-care')}>
                Pregnancy Care (2 Variants)
              </div>
              <div className="mobile-dropdown-item pink" onClick={() => handleBenefitClick('womens-daily')}>
                Women's Daily (Young &amp; 40+)
              </div>
              <div className="mobile-dropdown-item blue" onClick={() => handleBenefitClick('mens-daily')}>
                Men's Daily (PROMAN &amp; X-PROMAN)
              </div>
              <div className="mobile-dropdown-item teal" onClick={() => handleBenefitClick('general-daily')}>
                General Daily (Day By Day Wellness)
              </div>
              <div className="mobile-dropdown-item green" onClick={() => handleBenefitClick('weight-management')}>
                Weight Management (OMG)
              </div>
              <div className="mobile-dropdown-item green" onClick={() => handleBenefitClick('brain-health')}>
                Brain Health (OMG)
              </div>
              <div className="mobile-dropdown-item green" onClick={() => handleBenefitClick('heart-health')}>
                Heart Health (OMG)
              </div>
              <div className="mobile-dropdown-item green" onClick={() => handleBenefitClick('anti-aging')}>
                Anti-aging &amp; Skin (OMG)
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
          width: 340px;
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 16px;
          border: 1px solid var(--color-border);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          max-height: 480px;
          overflow-y: auto;
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(10px); }
        }
        
        .dropdown-grid {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 8px 12px;
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
        .dropdown-item.pink .item-dot { background-color: var(--color-pink-primary); }
        .dropdown-item.blue .item-dot { background-color: var(--color-blue-primary); }
        .dropdown-item.teal .item-dot { background-color: #0f5a47; }
        .dropdown-item.green .item-dot { background-color: var(--color-accent-green); }
        
        .dropdown-item-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-text-dark);
          margin-bottom: 2px;
        }
        
        .dropdown-item-desc {
          font-size: 0.72rem;
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
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
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
          cursor: pointer;
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

        /* Search Overlay & Modal */
        .search-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(30, 20, 40, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2100;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 60px 20px 20px;
        }

        .search-modal {
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 680px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          max-height: 80vh;
        }

        .search-header {
          display: flex;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid var(--color-border);
          gap: 12px;
          background-color: var(--color-bg-base);
        }

        .search-input-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 8px 16px;
          gap: 10px;
        }

        .search-input-icon {
          color: var(--color-text-muted);
          flex-shrink: 0;
        }

        .search-field {
          flex: 1;
          border: none;
          background: none;
          outline: none;
          font-size: 0.95rem;
          color: var(--color-text-dark);
          font-family: var(--font-primary);
        }

        .search-clear-btn {
          color: var(--color-text-muted);
          padding: 4px;
          cursor: pointer;
        }

        .search-close-btn {
          color: var(--color-text-dark);
          padding: 8px;
          border-radius: var(--radius-full);
          cursor: pointer;
        }

        .search-results-container {
          padding: 16px 20px 24px;
          overflow-y: auto;
          flex: 1;
        }

        .search-results-count {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-bottom: 12px;
          font-weight: 600;
        }

        .search-results-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .search-result-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          background-color: var(--color-white);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .search-result-card:hover {
          background-color: var(--color-bg-base);
          border-color: var(--color-preg-primary);
          transform: translateX(4px);
        }

        .search-result-img-box {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-sm);
          background-color: var(--color-bg-base);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
        }

        .search-result-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .search-result-details {
          flex: 1;
          min-width: 0;
        }

        .search-result-top {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .search-result-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-text-dark);
          margin-bottom: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .search-result-diff {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          line-height: 1.3;
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .search-result-bottom {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .search-result-count-tag {
          font-size: 0.7rem;
          font-weight: 700;
          background-color: var(--color-preg-light);
          color: var(--color-preg-primary);
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .search-result-price {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-dark);
        }

        .search-result-pending {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-muted);
          font-style: italic;
        }

        .search-result-arrow {
          color: var(--color-text-muted);
          padding: 8px;
        }

        .search-result-card:hover .search-result-arrow {
          color: var(--color-preg-primary);
        }

        .search-no-results {
          text-align: center;
          padding: 40px 20px;
          color: var(--color-text-muted);
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
          overflow-y: auto;
        }
        
        .mobile-drawer.open {
          right: 0;
        }
        
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        
        .drawer-body {
          display: flex;
          flex-direction: column;
          gap: 24px;
          flex: 1;
        }
        
        .drawer-section-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .mobile-dropdown-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .mobile-dropdown-item {
          font-size: 0.95rem;
          font-weight: 600;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          border-left: 4px solid transparent;
        }
        
        .mobile-dropdown-item.purple { border-left-color: var(--color-preg-primary); background-color: var(--color-preg-light); }
        .mobile-dropdown-item.pink { border-left-color: var(--color-pink-primary); background-color: var(--color-pink-light); }
        .mobile-dropdown-item.blue { border-left-color: var(--color-blue-primary); background-color: var(--color-blue-light); }
        .mobile-dropdown-item.teal { border-left-color: #0f5a47; background-color: #edf7f4; }
        .mobile-dropdown-item.green { border-left-color: var(--color-accent-green); background-color: var(--color-accent-green-light); }
        
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
