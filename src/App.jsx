import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import Quiz from './components/Quiz';
import LiveChat from './components/LiveChat';
import { ShoppingBag, ShieldCheck, ArrowRight, X } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [showRedirectModal, setShowRedirectModal] = useState(false);
  const [redirectType, setRedirectType] = useState('b2c'); // 'b2b' or 'b2c'
  const [activeRedirectProduct, setActiveRedirectProduct] = useState('');

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShopRedirect = (productId, type = 'b2c') => {
    setActiveRedirectProduct(productId === 'pregnancy' ? 'Wellness Pregnancy' : 'Wellness Pregnancy Plus');
    setRedirectType(type);
    setQuizOpen(false);
    setShowRedirectModal(true);
  };

  const executeRedirect = () => {
    setShowRedirectModal(false);
    alert(`Transferring session to Greenlife Pharmaceuticals ${redirectType.toUpperCase()} commerce node... Checkout load complete!`);
  };

  return (
    <>
      {/* Header Navigation */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onOpenQuiz={() => setQuizOpen(true)} 
      />

      {/* Main Pages Router */}
      <main style={{ flex: 1 }}>
        {currentPage === 'home' && (
          <Home 
            onProductClick={handleProductClick} 
            onShopRedirect={(id) => handleShopRedirect(id, 'b2c')} 
            onOpenQuiz={() => setQuizOpen(true)} 
          />
        )}
        
        {currentPage === 'about' && (
          <About 
            onExploreProducts={() => {
              setCurrentPage('home');
              setTimeout(() => {
                const section = document.getElementById('products-section');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }} 
          />
        )}

        {currentPage === 'product-detail' && (
          <ProductDetail 
            productId={selectedProductId} 
            onBack={() => setCurrentPage('home')}
            onShopRedirect={(id) => handleShopRedirect(id, 'b2c')}
          />
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
      {showRedirectModal && (
        <div className="redirect-overlay">
          <div className="redirect-modal animate-slide-up">
            <button className="redirect-close" onClick={() => setShowRedirectModal(false)} aria-label="Close">
              <X size={20} />
            </button>
            
            <div className="redirect-header-icon">
              <ShoppingBag size={32} className="shopping-icon animate-float" />
            </div>

            <h2 className="redirect-title">Connecting to Greenlife Storefront</h2>
            <p className="redirect-desc">
              You are now leaving the brand website. We are securely syncing your cart session to Greenlife's commerce core to purchase <strong>{activeRedirectProduct}</strong>.
            </p>

            <div className="sync-progress">
              <div className="sync-bar"></div>
            </div>

            <div className="checkout-preview-card">
              <div className="preview-top">
                <span className="p-badge">Pre-loaded Cart Item</span>
                <span className="p-qty">Qty: 1</span>
              </div>
              <div className="preview-details">
                <h4 className="preview-name">{activeRedirectProduct}</h4>
                <span className="preview-price">{activeRedirectProduct === 'Wellness Pregnancy' ? '₦12,500' : '₦18,500'}</span>
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
          font-size: 1.1rem;
          color: var(--color-text-dark);
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
