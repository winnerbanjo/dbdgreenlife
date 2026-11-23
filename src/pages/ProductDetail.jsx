import { useState } from 'react';
import { ShieldCheck, Award, ArrowLeft, Check, ChevronDown, ChevronUp, ShoppingCart, Info, AlertCircle } from 'lucide-react';
import { PRODUCTS_BY_ID } from '../data/products';

export default function ProductDetail({ productId, onBack, onShopRedirect }) {
  const product = PRODUCTS_BY_ID[productId] || PRODUCTS_BY_ID['pregnancy'];
  const [ingredientsExpanded, setIngredientsExpanded] = useState(true);
  const [absorptionStep, setAbsorptionStep] = useState(0);

  const handleBuyClick = () => {
    if (product.hasConfirmedPrice) {
      onShopRedirect(product.id);
    } else {
      alert(`Commerce status for ${product.title}: Greenlife B2B/B2C storefront purchase links are awaiting inventory and price schedule activation.`);
    }
  };

  return (
    <div className={`detail-page theme-${product.theme || 'purple'}`}>
      {/* Top Navigation Row */}
      <div className="container nav-row">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} style={{ marginRight: '6px' }} />
          Back to Catalogue
        </button>
      </div>

      {/* Hero Detail Section */}
      <section className="detail-hero">
        <div className="detail-hero-container container">
          {/* Product Image Panel */}
          <div className="detail-img-panel">
            <img 
              src={product.image} 
              alt={product.title} 
              className="detail-product-image animate-float"
            />
            <div className="detail-image-shadow"></div>
          </div>

          {/* Product Info Panel */}
          <div className="detail-info-panel">
            <div className="detail-header-tags">
              <span className="detail-type-badge">{product.group}</span>
              <span className="detail-count-badge">{product.ingredientCount} Actives</span>
            </div>
            
            <h1 className="detail-title">{product.title}</h1>
            <p className="detail-tagline">"{product.differentiator}"</p>
            <p className="detail-subtitle">{product.description}</p>

            {/* Target Audience */}
            <div className="detail-audience-card">
              <Info size={16} className="audience-icon" />
              <span><strong>Intended Audience:</strong> {product.targetAudience}</span>
            </div>

            {/* Benefits List */}
            <div className="detail-benefits-header">Key Health Benefits:</div>
            <div className="detail-bullets-list">
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="detail-bullet-item">
                  <div className="bullet-check-icon"><Check size={12} /></div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Size & Purchasing Row */}
            <div className="detail-purchase-row">
              <div className="detail-price-box">
                <span className="detail-size-label">Pack Specification</span>
                <span className="detail-size-val">{product.packSize}</span>
                {product.hasConfirmedPrice ? (
                  <span className="detail-price-val">{product.price}</span>
                ) : (
                  <span className="detail-price-pending">Storefront Price Confirmation Pending</span>
                )}
              </div>

              <div className="detail-actions">
                {product.hasConfirmedPrice ? (
                  <button 
                    className="btn-round btn-buy-now"
                    onClick={handleBuyClick}
                  >
                    <ShoppingCart size={18} style={{ marginRight: '8px' }} />
                    Purchase Formulation
                  </button>
                ) : (
                  <button 
                    className="btn-round btn-details-pending"
                    onClick={handleBuyClick}
                  >
                    <Info size={18} style={{ marginRight: '8px' }} />
                    Awaiting Storefront
                  </button>
                )}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="detail-trust-badges">
              <div className="trust-badge">
                <ShieldCheck size={18} className="trust-icon-green" />
                <span>
                  NAFDAC Reg. No.: <strong>{product.nafdacDisplay}</strong>
                  {product.isNafdacPending && ' (Confirmation Pending)'}
                </span>
              </div>
              <div className="trust-badge">
                <Award size={18} className="trust-icon-purple" />
                <span>Greenlife Pharma Quality Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Ingredients Panel Section */}
      <section className="ingredients-section">
        <div className="container">
          <div className="ingredients-header-row">
            <div>
              <span className="section-badge">Formulation Breakdown</span>
              <h2 className="section-title">Reconciled Ingredients &amp; Actives</h2>
              <p className="section-subtitle">
                Total itemised actives: <strong>{product.ingredientCount}</strong>. Values transcribed verbatim from Greenlife formulation records.
              </p>
            </div>
            <button 
              className="btn-toggle-ingredients"
              onClick={() => setIngredientsExpanded(!ingredientsExpanded)}
            >
              {ingredientsExpanded ? (
                <>Collapse Panel <ChevronUp size={16} /></>
              ) : (
                <>Expand Full Panel ({product.ingredientCount}) <ChevronDown size={16} /></>
              )}
            </button>
          </div>

          {ingredientsExpanded && (
            <div className="ingredients-panels-container animate-fade-in">
              {product.ingredientsPanel.map((panel, pIdx) => (
                <div key={pIdx} className="ingredient-section-card">
                  <h3 className="ingredient-section-title">
                    <Award size={16} className="sparkle-icon" />
                    {panel.section}
                  </h3>
                  <div className="ingredients-chip-grid">
                    {panel.items.map((item, iIdx) => (
                      <div key={iIdx} className="ingredient-chip">
                        <span className="chip-bullet">•</span>
                        <span className="chip-text">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {product.notes && (
                <div className="formulation-note-banner">
                  <AlertCircle size={20} className="note-banner-icon" />
                  <div>
                    <h4 className="note-banner-title">Internal Formulation &amp; Regulatory Note</h4>
                    <p className="note-banner-desc">{product.notes}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Supplement Facts & Disintegration Timeline */}
      <section className="facts-timeline-section">
        <div className="container facts-timeline-grid">
          {/* Official Specification Box */}
          <div className="supplement-facts-box">
            <h3 className="facts-header-title">Product Specification Summary</h3>
            <p className="facts-servings">Format &amp; Count: {product.packSize}</p>
            <p className="facts-servings border-bottom">NAFDAC Reg. No.: {product.nafdacDisplay}</p>
            
            <div className="facts-row header-row">
              <span>Characteristic</span>
              <span>Verification</span>
            </div>

            <div className="facts-row">
              <span>Total Ingredient Count</span>
              <span><strong>{product.ingredientCount} Actives</strong></span>
            </div>
            <div className="facts-row">
              <span>Target Consumer Group</span>
              <span>{product.targetAudience}</span>
            </div>
            <div className="facts-row">
              <span>Category / Benefit Filter</span>
              <span>{product.group}</span>
            </div>
            <div className="facts-row">
              <span>Quality Control Assays</span>
              <span>Greenlife Quality Standard</span>
            </div>
            <div className="facts-row last-row">
              <span>Manufacture &amp; Marketing</span>
              <span>Greenlife Pharmaceuticals Ltd.</span>
            </div>

            <p className="facts-disclaimer">* Dietary supplements must not replace a varied, balanced diet and a healthy lifestyle.</p>
            <div className="facts-nafdac-stamp">
              <span>NAFDAC Reg. No.: {product.nafdacDisplay}</span>
            </div>
          </div>

          {/* Stomach-friendly Disintegration Timeline */}
          <div className="digest-timeline-box">
            <span className="timeline-badge">Nutrient Delivery</span>
            <h3 className="timeline-title">Softgel Disintegration Timeline</h3>
            <p className="timeline-desc">
              Day By Day formulations utilize premium encapsulation designed for smooth transit and efficient dispersion without synthetic binders or chalky aftertaste:
            </p>

            <div className="timeline-steps">
              <button 
                className={`timeline-step-btn ${absorptionStep === 0 ? 'active' : ''}`}
                onClick={() => setAbsorptionStep(0)}
              >
                <div className="t-step-num">0m</div>
                <span>Ingestion</span>
              </button>
              <button 
                className={`timeline-step-btn ${absorptionStep === 1 ? 'active' : ''}`}
                onClick={() => setAbsorptionStep(1)}
              >
                <div className="t-step-num">15m</div>
                <span>Disintegration</span>
              </button>
              <button 
                className={`timeline-step-btn ${absorptionStep === 2 ? 'active' : ''}`}
                onClick={() => setAbsorptionStep(2)}
              >
                <div className="t-step-num">45m</div>
                <span>Transit</span>
              </button>
              <button 
                className={`timeline-step-btn ${absorptionStep === 3 ? 'active' : ''}`}
                onClick={() => setAbsorptionStep(3)}
              >
                <div className="t-step-num">2h</div>
                <span>Dispersion</span>
              </button>
            </div>

            <div className="timeline-step-display animate-slide-up">
              {absorptionStep === 0 && (
                <>
                  <h4 className="t-step-title">Stage 1: Softgel Ingestion (0 minutes)</h4>
                  <p className="t-step-text">The softgel enters the stomach. Its smooth gelatin casing is designed for effortless swallowing without the throat irritation or chemical smell typical of compressed tablets.</p>
                </>
              )}
              {absorptionStep === 1 && (
                <>
                  <h4 className="t-step-title">Stage 2: Outer Shell Disintegration (15–20 minutes)</h4>
                  <p className="t-step-text">Gastric temperature and natural digestive juices gently dissolve the shell. The inner nutrient matrix—comprising standardized vitamins, minerals, and lipid carrier oils—is released evenly.</p>
                </>
              )}
              {absorptionStep === 2 && (
                <>
                  <h4 className="t-step-title">Stage 3: Intestinal Transit (45 minutes)</h4>
                  <p className="t-step-text">The micronutrients transition into the duodenum. Essential water-soluble nutrients and minerals pass naturally across the mucosal boundary into systemic circulation.</p>
                </>
              )}
              {absorptionStep === 3 && (
                <>
                  <h4 className="t-step-title">Stage 4: Systemic Cellular Dispersion (2 hours)</h4>
                  <p className="t-step-text">Fat-soluble vitamins and botanical omega fatty acids (DHA, EPA, Omegas 3-5-6-7-9) disperse through cellular pathways to nourish vital maternal, neurological, or vitality functions.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Usage Directions & FAQ */}
      <section className="usage-faq-section container">
        <div className="grid-2">
          {/* Usage card */}
          <div className="usage-card">
            <h3 className="section-title-small">Directions for Use</h3>
            <p className="usage-desc">{product.howToUse}</p>
            <div className="usage-features">
              <div className="use-feat">
                <Check size={16} className="feat-check" />
                <span>Swallow whole with a full glass of water or cool beverage</span>
              </div>
              <div className="use-feat">
                <Check size={16} className="feat-check" />
                <span>Best taken with or immediately after a main meal</span>
              </div>
              <div className="use-feat">
                <Check size={16} className="feat-check" />
                <span>Do not chew or exceed recommended daily intake</span>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="faq-card">
            <h3 className="section-title-small">Frequently Asked Questions</h3>
            <div className="faq-list">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <h4 className="faq-q">{faq.q}</h4>
                  <p className="faq-a">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .detail-page {
          background-color: var(--color-bg-base);
          margin-top: 80px;
          padding-bottom: 80px;
        }

        .nav-row {
          padding: 24px 20px 0;
        }

        .btn-back {
          display: inline-flex;
          align-items: center;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-text-dark);
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          transition: var(--transition-smooth);
        }

        .btn-back:hover {
          background-color: var(--color-white);
          transform: translateX(-3px);
        }

        /* Detail Hero */
        .detail-hero {
          padding: 30px 0 60px;
        }

        .detail-hero-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }

        .detail-img-panel {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-white) 0%, rgba(255, 255, 255, 0.6) 100%);
          border-radius: var(--radius-xl);
          padding: 40px;
          border: 1px solid var(--color-white);
          box-shadow: var(--shadow-md);
          min-height: 480px;
        }

        .detail-product-image {
          max-height: 380px;
          max-width: 90%;
          object-fit: contain;
          z-index: 2;
        }

        .detail-image-shadow {
          position: absolute;
          bottom: 24px;
          width: 65%;
          height: 24px;
          background: radial-gradient(ellipse at center, rgba(80, 60, 100, 0.2) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          z-index: 1;
        }

        .detail-header-tags {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .detail-type-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background-color: var(--color-preg-light);
          padding: 6px 14px;
          border-radius: var(--radius-full);
        }

        .detail-count-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-dark);
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          padding: 6px 12px;
          border-radius: var(--radius-full);
        }

        .detail-title {
          font-size: 2.5rem;
          color: var(--color-text-dark);
          line-height: 1.15;
          margin-bottom: 10px;
        }

        .detail-tagline {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-preg-primary);
          margin-bottom: 12px;
        }

        .detail-subtitle {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .detail-audience-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          padding: 10px 16px;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
          color: var(--color-text-dark);
          margin-bottom: 24px;
        }

        .audience-icon {
          color: var(--color-preg-primary);
          flex-shrink: 0;
        }

        .detail-benefits-header {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 10px;
        }

        .detail-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 28px;
        }

        .detail-bullet-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--color-text-dark);
          font-weight: 500;
        }

        .bullet-check-icon {
          width: 20px;
          height: 20px;
          border-radius: var(--radius-full);
          background-color: var(--color-accent-green-light);
          color: var(--color-accent-green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Purchase Row */
        .detail-purchase-row {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          box-shadow: var(--shadow-sm);
        }

        .detail-price-box {
          display: flex;
          flex-direction: column;
        }

        .detail-size-label {
          font-size: 0.72rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .detail-size-val {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-text-dark);
        }

        .detail-price-val {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-preg-primary);
          margin-top: 2px;
        }

        .detail-price-pending {
          font-size: 0.82rem;
          color: var(--color-text-muted);
          font-style: italic;
          margin-top: 4px;
          font-weight: 600;
        }

        .btn-buy-now {
          background-color: var(--color-preg-primary);
          color: var(--color-white);
          padding: 14px 28px;
          font-size: 0.95rem;
          font-weight: 700;
        }

        .btn-buy-now:hover {
          background-color: var(--color-preg-dark);
        }

        .btn-details-pending {
          background-color: var(--color-bg-base);
          color: var(--color-text-muted);
          border: 1px solid var(--color-border);
          padding: 14px 24px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .detail-trust-badges {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .trust-icon-green { color: var(--color-accent-green); flex-shrink: 0; }
        .trust-icon-purple { color: var(--color-preg-primary); flex-shrink: 0; }

        /* Ingredients Panels Section */
        .ingredients-section {
          padding: 60px 0;
          background-color: var(--color-white);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }

        .ingredients-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 32px;
        }

        .btn-toggle-ingredients {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: var(--color-bg-base);
          border: 1px solid var(--color-border);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-dark);
          cursor: pointer;
        }

        .ingredients-panels-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .ingredient-section-card {
          background-color: var(--color-bg-base);
          border-radius: var(--radius-lg);
          padding: 24px;
          border: 1px solid var(--color-border);
        }

        .ingredient-section-title {
          font-size: 1.1rem;
          color: var(--color-text-dark);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sparkle-icon {
          color: var(--color-preg-primary);
        }

        .ingredients-chip-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .ingredient-chip {
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--color-text-dark);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          line-height: 1.3;
        }

        .chip-bullet {
          color: var(--color-preg-primary);
          font-size: 1rem;
        }

        .formulation-note-banner {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background-color: #fff9ed;
          border: 1px solid #ffd880;
          padding: 16px 20px;
          border-radius: var(--radius-md);
        }

        .note-banner-icon {
          color: #d97706;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .note-banner-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #92400e;
          margin-bottom: 4px;
        }

        .note-banner-desc {
          font-size: 0.85rem;
          color: #78350f;
          line-height: 1.45;
        }

        /* Facts Timeline Section */
        .facts-timeline-section {
          padding: 80px 0;
        }

        .facts-timeline-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 50px;
        }

        .supplement-facts-box {
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          padding: 30px;
          border: 2px solid var(--color-text-dark);
          box-shadow: var(--shadow-sm);
        }

        .facts-header-title {
          font-size: 1.4rem;
          color: var(--color-text-dark);
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .facts-servings {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 4px;
        }

        .facts-servings.border-bottom {
          border-bottom: 4px solid var(--color-text-dark);
          padding-bottom: 8px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .facts-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          font-size: 0.88rem;
          border-bottom: 1px solid var(--color-border);
          color: var(--color-text-dark);
        }

        .facts-row.header-row {
          font-weight: 800;
          border-bottom: 2px solid var(--color-text-dark);
          text-transform: uppercase;
          font-size: 0.78rem;
        }

        .facts-row.last-row {
          border-bottom: 4px solid var(--color-text-dark);
          margin-bottom: 12px;
        }

        .facts-disclaimer {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .facts-nafdac-stamp {
          background-color: var(--color-bg-base);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-text-dark);
          display: inline-block;
          border: 1px solid var(--color-border);
        }

        /* Digest Timeline Box */
        .digest-timeline-box {
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          padding: 36px;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        .timeline-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background-color: var(--color-preg-light);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 10px;
        }

        .timeline-title {
          font-size: 1.75rem;
          color: var(--color-text-dark);
          margin-bottom: 10px;
        }

        .timeline-desc {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 28px;
        }

        .timeline-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .timeline-step-btn {
          background-color: var(--color-bg-base);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 12px 8px;
          text-align: center;
          cursor: pointer;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .timeline-step-btn.active {
          border-color: var(--color-preg-primary);
          background-color: var(--color-preg-light);
        }

        .t-step-num {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--color-preg-primary);
        }

        .timeline-step-btn span {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-dark);
        }

        .timeline-step-display {
          background-color: var(--color-bg-base);
          border-radius: var(--radius-md);
          padding: 20px;
          border-left: 4px solid var(--color-preg-primary);
        }

        .t-step-title {
          font-size: 1.05rem;
          color: var(--color-text-dark);
          margin-bottom: 6px;
        }

        .t-step-text {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        /* Usage & FAQ */
        .usage-faq-section {
          padding-bottom: 40px;
        }

        .usage-card, .faq-card {
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          padding: 36px;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        .section-title-small {
          font-size: 1.4rem;
          color: var(--color-text-dark);
          margin-bottom: 12px;
        }

        .usage-desc {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .usage-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .use-feat {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--color-text-dark);
          font-weight: 600;
        }

        .feat-check {
          color: var(--color-accent-green);
          flex-shrink: 0;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 12px;
        }

        .faq-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .faq-q {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-dark);
          margin-bottom: 4px;
        }

        .faq-a {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .detail-hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .facts-timeline-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </div>
  );
}
