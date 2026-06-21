import React from 'react';
import { Pill, Sparkles, ArrowRight } from 'lucide-react';

export default function ProductCard({ product, onViewDetails, onShopNow }) {
  const isPurple = product.theme === 'purple';
  const themeClass = isPurple ? 'theme-purple' : 'theme-orange';
  
  return (
    <div className={`product-card ${themeClass}`}>
      {/* Product Card Top (Pill Badge) */}
      <div className="card-badge">
        <Pill size={14} style={{ marginRight: '4px' }} />
        <span>{product.type}</span>
      </div>

      {/* Product Image Area */}
      <div className="product-image-container" onClick={onViewDetails}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-image animate-float"
        />
        <div className="product-image-shadow"></div>
      </div>

      {/* Card Content */}
      <div className="card-info">
        <span className="brand-label">Day by Day Wellness</span>
        <h3 className="product-title" onClick={onViewDetails}>{product.title}</h3>
        <p className="product-subtitle">{product.subtitle}</p>

        {/* Highlight Bullets */}
        <div className="benefits-list">
          {product.bullets.slice(0, 3).map((bullet, idx) => (
            <div key={idx} className="benefit-bullet">
              <Sparkles size={12} className="bullet-icon" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* Price & Action Row */}
        <div className="card-action-row">
          <div className="price-tag">
            <span className="amount">{product.price}</span>
            <span className="pack-size">/ {product.size}</span>
          </div>

          <div className="card-buttons">
            <button 
              className="btn-round btn-detail-arrow" 
              onClick={onViewDetails} 
              aria-label="View Details"
            >
              <ArrowRight size={18} />
            </button>
            
            <button 
              className={`btn-round ${isPurple ? 'btn-purple' : 'btn-orange'} btn-card-shop`}
              onClick={onShopNow}
            >
              Shop
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .product-card {
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          padding: 24px;
          box-shadow: var(--shadow-sm);
          position: relative;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--color-border);
          transition: var(--transition-bounce);
          overflow: hidden;
        }
        
        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 10px;
          transition: var(--transition-smooth);
        }
        
        .product-card.theme-purple::before { background-color: var(--color-preg-primary); }
        .product-card.theme-orange::before { background-color: var(--color-pregplus-primary); }
        
        /* Card Badges */
        .card-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          display: inline-flex;
          align-items: center;
          background-color: var(--color-bg-base);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          border: 1px solid var(--color-border);
          z-index: 5;
        }
        
        /* Image Area */
        .product-image-container {
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-top: 20px;
          cursor: pointer;
        }
        
        .product-image {
          max-height: 220px;
          object-fit: contain;
          z-index: 2;
          transition: transform 0.3s ease;
        }
        
        .product-image-shadow {
          position: absolute;
          bottom: 10px;
          width: 70%;
          height: 20px;
          background: radial-gradient(ellipse at center, rgba(110,100,120,0.15) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          z-index: 1;
        }
        
        /* Hover Effects */
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-hover);
        }
        
        .product-card.theme-purple:hover {
          background-color: var(--color-preg-light);
          border-color: var(--color-preg-secondary);
        }
        
        .product-card.theme-orange:hover {
          background-color: var(--color-pregplus-light);
          border-color: var(--color-pregplus-secondary);
        }
        
        .product-card:hover .product-image {
          transform: scale(1.08) translateY(-5px);
        }
        
        /* Card Info */
        .card-info {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin-top: 16px;
        }
        
        .brand-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-preg-accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        
        .theme-orange .brand-label {
          color: var(--color-pregplus-accent);
        }
        
        .product-title {
          font-size: 1.5rem;
          color: var(--color-text-dark);
          margin-bottom: 6px;
          cursor: pointer;
        }
        
        .product-title:hover {
          color: var(--color-brand-primary);
        }
        
        .product-subtitle {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.4;
          margin-bottom: 16px;
          height: 40px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Benefits Bullet List */
        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 24px;
        }
        
        .benefit-bullet {
          display: flex;
          align-items: center;
          font-size: 0.82rem;
          color: var(--color-text-dark);
          font-weight: 500;
        }
        
        .bullet-icon {
          flex-shrink: 0;
          margin-right: 8px;
        }
        
        .theme-purple .bullet-icon { color: var(--color-preg-primary); }
        .theme-orange .bullet-icon { color: var(--color-pregplus-primary); }
        
        /* Action Row */
        .card-action-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--color-border);
        }
        
        .price-tag {
          display: flex;
          flex-direction: column;
        }
        
        .amount {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--color-text-dark);
          line-height: 1.1;
        }
        
        .pack-size {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }
        
        .card-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .btn-detail-arrow {
          background-color: var(--color-bg-base);
          border: 1.5px solid var(--color-border);
          color: var(--color-text-dark);
          width: 42px;
          height: 42px;
          padding: 0;
        }
        
        .btn-detail-arrow:hover {
          background-color: var(--color-text-dark);
          color: var(--color-white);
          border-color: var(--color-text-dark);
        }
        
        .btn-card-shop {
          padding: 10px 24px;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
