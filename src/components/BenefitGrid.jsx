import React from 'react';

const categoryFilters = [
  { id: 'all', label: 'All Formulations', count: 8 },
  { id: 'pregnancy-care', label: 'Pregnancy Care', count: 2 },
  { id: 'womens-daily', label: "Women's Daily", count: 2 },
  { id: 'mens-daily', label: "Men's Vitality", count: 2 },
  { id: 'weight-management', label: 'Metabolism & Glow', count: 1 },
  { id: 'brain-health', label: 'Brain & Cognitive', count: 1 },
  { id: 'heart-health', label: 'Cardiovascular', count: 1 },
  { id: 'anti-aging', label: 'Skin & Cellular', count: 1 },
  { id: 'general-daily', label: 'Everyday Wellness', count: 1 },
];

export default function BenefitGrid({ activeBenefit, onSelectBenefit }) {
  return (
    <section className="category-filter-section" id="filter-bar">
      <div className="container filter-container">
        <div className="filter-header">
          <span className="filter-eyebrow">CURATED COLLECTION</span>
          <h2 className="filter-title">Shop by Health Priority</h2>
          <p className="filter-subtitle">
            Explore our eight reconciled formulations. Clinically studied active panels, verified NAFDAC registrations, and targeted daily support.
          </p>
        </div>

        {/* Lemme-style Horizontal Category Pills */}
        <div className="pills-scroll-wrapper">
          <div className="pills-track">
            {categoryFilters.map((cat) => {
              const isActive = activeBenefit === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectBenefit(cat.id)}
                  className={`category-pill ${isActive ? 'active' : ''}`}
                >
                  <span className="pill-label">{cat.label}</span>
                  <span className="pill-count">{cat.count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .category-filter-section {
          padding: 50px 0 20px;
          background-color: var(--color-bg-base);
        }

        .filter-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .filter-header {
          max-width: 680px;
          margin-bottom: 28px;
        }

        .filter-eyebrow {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin-bottom: 8px;
        }

        .filter-title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--color-text-dark);
          margin-bottom: 10px;
        }

        .filter-subtitle {
          font-size: 0.98rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .pills-scroll-wrapper {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 6px 0 16px;
        }

        .pills-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }

        .pills-track {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .category-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: var(--color-text-dark);
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: var(--transition-smooth);
          cursor: pointer;
          white-space: nowrap;
        }

        .category-pill:hover {
          border-color: var(--color-text-dark);
          background-color: var(--color-bg-subtle);
        }

        .category-pill.active {
          background-color: var(--color-text-dark);
          color: var(--color-white);
          border-color: var(--color-text-dark);
          box-shadow: 0 4px 12px rgba(26, 26, 26, 0.15);
        }

        .pill-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 700;
          background-color: var(--color-bg-subtle);
          color: var(--color-text-dark);
          transition: var(--transition-smooth);
        }

        .category-pill.active .pill-count {
          background-color: rgba(255, 255, 255, 0.22);
          color: var(--color-white);
        }

        @media (max-width: 768px) {
          .pills-track {
            justify-content: flex-start;
            flex-wrap: nowrap;
            padding: 0 16px;
          }
          .filter-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
}
