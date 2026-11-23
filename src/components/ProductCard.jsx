import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const THEME_TINTS = {
  purple: '#F4EEF8',
  orange: '#FDF1EB',
  blue: '#EEF3F8',
  pink: '#FBF0F4',
  green: '#EFF6F1',
  teal: '#EEF5F4',
  stone: '#F6F4EE'
};

export default function ProductCard({ product, onViewDetails, onShopNow }) {
  const themeTint = THEME_TINTS[product.theme] || '#F7F5F0';

  return (
    <div className="product-card">
      {/* Product Image Container with Soft Pastel Tint (Lemme Style) */}
      <div 
        className="product-image-box" 
        style={{ backgroundColor: themeTint }}
        onClick={onViewDetails}
      >
        <div className="product-badge-pill">
          <span>{product.group || product.type}</span>
        </div>

        <div className="image-wrapper">
          <img 
            src={product.image} 
            alt={product.title} 
            className="product-pack-img"
            loading="lazy"
          />
        </div>
      </div>

      {/* Product Content Details */}
      <div className="product-card-body">
        {/* Star Rating Row */}
        <div className="product-rating-row">
          <div className="stars-group">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="#1A1A1A" color="#1A1A1A" />
            ))}
          </div>
          <span className="rating-score">4.9 (120+)</span>
        </div>

        {/* Title & Tagline */}
        <h3 className="product-card-title" onClick={onViewDetails}>
          {product.title}
        </h3>
        
        <p className="product-card-tagline">
          {product.differentiator || product.subtitle}
        </p>

        {/* Pack & Ingredient Specs */}
        <div className="product-specs-chip">
          <span>{product.packSize}</span>
          <span className="dot-sep">•</span>
          <span>{product.ingredientCount} Active Nutrients</span>
        </div>

        {/* Price & Action Button Footer */}
        <div className="product-card-footer">
          <div className="price-container">
            {product.hasConfirmedPrice ? (
              <span className="price-val">{product.price}</span>
            ) : (
              <span className="price-pending">Storefront Pending</span>
            )}
          </div>

          <div className="action-buttons-group">
            <button 
              className="btn-round btn-card-action"
              onClick={product.hasConfirmedPrice ? onShopNow : onViewDetails}
            >
              {product.hasConfirmedPrice ? 'Shop' : 'Details'}
              <ArrowRight size={13} style={{ marginLeft: '4px' }} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .product-card {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          padding: 16px;
          border: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: var(--transition-bounce);
          height: 100%;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: #D6D0C7;
        }

        .product-image-box {
          position: relative;
          width: 100%;
          height: 260px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .product-badge-pill {
          position: absolute;
          top: 14px;
          left: 14px;
          background-color: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(4px);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-text-dark);
          border: 1px solid rgba(0, 0, 0, 0.05);
          z-index: 2;
        }

        .image-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .product-pack-img {
          max-height: 200px;
          max-width: 90%;
          object-fit: contain;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .product-card:hover .product-pack-img {
          transform: scale(1.05);
        }

        .product-card-body {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 18px 6px 4px;
        }

        .product-rating-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
        }

        .stars-group {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .rating-score {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }

        .product-card-title {
          font-family: var(--font-heading);
          font-size: 1.18rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--color-text-dark);
          margin-bottom: 6px;
          cursor: pointer;
          transition: var(--transition-smooth);
          line-height: 1.3;
        }

        .product-card-title:hover {
          color: #555555;
        }

        .product-card-tagline {
          font-size: 0.86rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 40px;
        }

        .product-specs-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background-color: var(--color-bg-base);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          width: fit-content;
          margin-bottom: 16px;
        }

        .dot-sep {
          color: #B5AEA4;
        }

        .product-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--color-border-subtle);
        }

        .price-container {
          display: flex;
          flex-direction: column;
        }

        .price-val {
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--color-text-dark);
        }

        .price-pending {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-text-muted);
          font-style: italic;
        }

        .btn-card-action {
          padding: 8px 18px;
          font-size: 0.84rem;
          font-weight: 600;
          background-color: var(--color-text-dark);
          color: var(--color-white);
          border: 1px solid var(--color-text-dark);
          border-radius: var(--radius-full);
          transition: var(--transition-bounce);
        }

        .btn-card-action:hover {
          background-color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </div>
  );
}
