import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import Quiz from './components/Quiz';
import LiveChat from './components/LiveChat';
import { ShoppingBag, ShieldCheck, ArrowRight, X, AlertCircle } from 'lucide-react';
import { PRODUCTS_BY_ID } from './data/products';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState('pregnancy');
  const [quizOpen, setQuizOpen] = useState(false);
  const [showRedirectModal, setShowRedirectModal] = useState(false);
  const [redirectType, setRedirectType] = useState('b2c'); // 'b2b' or 'b2c'
  const [activeRedirectProduct, setActiveRedirectProduct] = useState(null);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShopRedirect = (productId, type = 'b2c') => {
    const prod = PRODUCTS_BY_ID[productId] || PRODUCTS_BY_ID['pregnancy'];
    setActiveRedirectProduct(prod);
    setRedirectType(type);
    setQuizOpen(false);
    setShowRedirectModal(true);
  };

  const executeRedirect = () => {
    setShowRedirectModal(false);
    alert(`Transferring session to Greenlife Pharmaceuticals ${redirectType.toUpperCase()} commerce node for ${activeRedirectProduct?.title}... Checkout load complete!`);
  };

  return (
    <>
      {/* Header Navigation with Live Search & Reconciled Benefit Filters */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onOpenQuiz={() => setQuizOpen(true)} 
        onProductClick={handleProductClick}
        onShopRedirect={(id) => handleShopRedirect(id, 'b2c')}
      />

      {/* Main Pages Router */}
      <main style={{ flex: 1 }}>
        {currentPage === 'home' && (
          <div className="animate-page-entry">
            <Home 
              onProductClick={handleProductClick} 
              onShopRedirect={(id) => handleShopRedirect(id, 'b2c')} 
              onOpenQuiz={() => setQuizOpen(true)} 
            />
          </div>
        )}
        
        {currentPage === 'about' && (
          <div className="animate-page-entry">
            <About 
              onExploreProducts={() => {
                setCurrentPage('home');
                setTimeout(() => {
                  const section = document.getElementById('products-section');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} 
            />
          </div>
        )}

        {currentPage === 'product-detail' && (
          <div className="animate-page-entry" key={selectedProductId}>
            <ProductDetail 
              productId={selectedProductId} 
              onBack={() => {
                setCurrentPage('home');
                setTimeout(() => {
                  const section = document.getElementById('products-section');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              onShopRedirect={(id) => handleShopRedirect(id, 'b2c')}
            />
          </div>
        )}
      </main>

      {/* Footer Branding */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Global Interactive Quiz Modal */}
      {quizOpen && (
        <Quiz 
          onClose={() => setQuizOpen(false)} 
          onProductClick={handleProductClick}
          onShopRedirect={(id) => handleShopRedirect(id, 'b2c')}
        />
      )}

      {/* B2B/B2C Commerce Integration Transfer Modal */}
      {showRedirectModal && activeRedirectProduct && (
        <div className="redirect-overlay" onClick={() => setShowRedirectModal(false)}>
          <div className="redirect-modal animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <button className="redirect-close" onClick={() => setShowRedirectModal(false)} aria-label="Close">
              <X size={20} />
            </button>
            
            <div className="redirect-header-icon">
              <ShoppingBag size={32} className="shopping-icon animate-float" />
            </div>

            {activeRedirectProduct.hasConfirmedPrice ? (
              <>
                <h2 className="redirect-title">Connecting to Greenlife Storefront</h2>
                <p className="redirect-desc">
                  You are now syncing your cart session to Greenlife Pharmaceuticals commerce core to purchase <strong>{activeRedirectProduct.title}</strong>.
                </p>

                <div className="sync-progress">
                  <div className="sync-bar"></div>
                </div>

                <div className="checkout-preview-card">
                  <div className="preview-top">
                    <span className="p-badge">{activeRedirectProduct.group}</span>
                    <span className="p-qty">Qty: 1</span>
                  </div>
                  <div className="preview-details">
                    <div>
                      <h4 className="preview-name">{activeRedirectProduct.title}</h4>
                      <p className="preview-pack">{activeRedirectProduct.packSize}</p>
                    </div>
                    <span className="preview-price">{activeRedirectProduct.price}</span>
                  </div>
                </div>

                <div className="redirect-actions">
                  <button className="btn-round btn-purple btn-sync-proceed" onClick={executeRedirect}>
                    Confirm and Proceed to Checkout
                    <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                  </button>
                  <button className="btn-round btn-outline" onClick={() => setShowRedirectModal(false)}>
                    Cancel Transfer
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="redirect-title">Storefront Activation Pending</h2>
                <p className="redirect-desc">
                  Commercial inventory, pricing schedules, and direct purchase channels for <strong>{activeRedirectProduct.title}</strong> are currently awaiting finalization with Greenlife distribution networks.
                </p>

                <div className="pending-preview-card">
                  <AlertCircle size={24} className="pending-icon" />
                  <div>
                    <h4 className="pending-name">{activeRedirectProduct.title}</h4>
                    <p className="pending-note">Full <strong>{activeRedirectProduct.ingredientCount} active ingredient</strong> specification is available in our catalogue detail view.</p>
                  </div>
                </div>

                <div className="redirect-actions">
                  <button 
                    className="btn-round btn-purple btn-sync-proceed" 
                    onClick={() => {
                      setShowRedirectModal(false);
                      handleProductClick(activeRedirectProduct.id);
                    }}
                  >
                    View Formulation Details
                    <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                  </button>
                  <button className="btn-round btn-outline" onClick={() => setShowRedirectModal(false)}>
                    Return to Catalogue
                  </button>
                </div>
              </>
            )}

            <div className="security-guarantee">
              <ShieldCheck size={16} className="security-icon-green" />
              <span>Session encrypted. Powered by Greenlife B2B/B2C commerce networks.</span>
            </div>
          </div>
        </div>
      )}

      {/* Live Chat Widget */}
      <LiveChat 
        onOpenQuiz={() => setQuizOpen(true)}
        onViewProduct={handleProductClick}
        onShopProduct={(id) => handleShopRedirect(id, 'b2c')}
        setCurrentPage={setCurrentPage}
      />

      <style>{`
        /* Global Transfer Modal Styling */
        .redirect-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(44, 37, 51, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .redirect-modal {
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 550px;
          padding: 40px;
          text-align: center;
          box-shadow: var(--shadow-hover);
          position: relative;
        }
        
        .redirect-close {
          position: absolute;
          top: 24px;
          right: 24px;
          color: var(--color-text-muted);
          background: none;
          border: none;
          cursor: pointer;
        }
        
        .redirect-close:hover {
          color: var(--color-text-dark);
        }
        
        .redirect-header-icon {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-full);
          background-color: var(--color-preg-light);
          color: var(--color-preg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        
        .redirect-title {
          font-size: 1.75rem;
          color: var(--color-text-dark);
          margin-bottom: 8px;
        }
        
        .redirect-desc {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 24px;
        }
        
        /* Sync Progress bar animation */
        .sync-progress {
          width: 100%;
          height: 4px;
          background-color: var(--color-border);
          border-radius: var(--radius-full);
          overflow: hidden;
          margin-bottom: 24px;
        }
        
        .sync-bar {
          height: 100%;
          width: 70%;
          background: linear-gradient(90deg, var(--color-preg-primary) 0%, var(--color-pregplus-primary) 100%);
          border-radius: var(--radius-full);
          animation: syncPulse 2s infinite ease-in-out;
        }
        
        @keyframes syncPulse {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(50%); }
          100% { transform: translateX(100%); }
        }
        
        .checkout-preview-card {
          background-color: var(--color-bg-base);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          border: 1px solid var(--color-border);
          text-align: left;
          margin-bottom: 30px;
        }

        .pending-preview-card {
          background-color: #fff9ed;
          border-radius: var(--radius-md);
          padding: 16px 20px;
          border: 1px solid #ffd880;
          text-align: left;
          margin-bottom: 30px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .pending-icon {
          color: #d97706;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pending-name {
          font-size: 1.05rem;
          color: #92400e;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .pending-note {
          font-size: 0.85rem;
          color: #78350f;
          line-height: 1.4;
        }
        
        .preview-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 6px;
        }
        
        .p-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-preg-primary);
          letter-spacing: 0.05em;
        }
        
        .p-qty {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }
        
        .preview-details {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        
        .preview-name {
          font-size: 1.05rem;
          color: var(--color-text-dark);
          margin-bottom: 2px;
        }

        .preview-pack {
          font-size: 0.78rem;
          color: var(--color-text-muted);
        }
        
        .preview-price {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-text-dark);
        }
        
        .redirect-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        
        .btn-sync-proceed {
          padding: 12px;
          font-size: 1rem;
          background-color: var(--color-preg-primary);
          color: var(--color-white);
          cursor: pointer;
        }
        
        .btn-sync-proceed:hover {
          background-color: var(--color-preg-dark);
        }
        
        .security-guarantee {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }
        
        .security-icon-green {
          color: var(--color-accent-green);
        }
      `}</style>
    </>
  );
}

export default App;
