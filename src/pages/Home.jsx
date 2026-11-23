import React, { useState, useEffect } from 'react';
import BenefitGrid from '../components/BenefitGrid';
import ScienceSection from '../components/ScienceSection';
import ProductCard from '../components/ProductCard';
import CustomerReviews from '../components/CustomerReviews';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Compass, Droplets } from 'lucide-react';
import { PRODUCTS_DATA, getFilteredProducts } from '../data/products';

export default function Home({ onProductClick, onShopRedirect, onOpenQuiz }) {
  const [activeBenefit, setActiveBenefit] = useState('all');

  useEffect(() => {
    const handleFilterBenefit = (e) => {
      setActiveBenefit(e.detail);
    };
    window.addEventListener('filter-benefit', handleFilterBenefit);
    return () => window.removeEventListener('filter-benefit', handleFilterBenefit);
  }, []);

  const handleSelectBenefit = (benefitId) => {
    setActiveBenefit(activeBenefit === benefitId ? 'all' : benefitId);
  };

  const scrollToProducts = () => {
    const section = document.getElementById('products-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  // Filtered catalogue products
  const displayProducts = getFilteredProducts(activeBenefit);

  return (
    <div className="home-page">
      {/* Editorial Luxury Hero Section (Visually Dramatic & Lively) */}
      <section className="editorial-hero">
        <div className="container hero-container">
          {/* Left Text Column */}
          <div className="hero-text-col">
            <h1 className="hero-main-title">
              Targeted Daily Nutrition, <br />
              <span className="hero-title-italic">Clinically Formulated.</span>
            </h1>

            <p className="hero-description">
              Day By Day brings pharmaceutical-grade precision to everyday supplementation. Clean active nutrient panels, cold-pressed botanical oils, and maternal twin-packs crafted for real life across Nigeria.
            </p>

            <div className="hero-cta-group">
              <button onClick={scrollToProducts} className="btn-round btn-dark hero-btn-primary">
                Shop Launch Collection
                <ArrowRight size={16} className="btn-arrow-icon" />
              </button>

              <button onClick={onOpenQuiz} className="btn-round btn-outline hero-btn-quiz">
                Find Your Match
              </button>
            </div>

            {/* Editorial Trust Badges */}
            <div className="hero-trust-bar">
              <div className="trust-pill-item">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>NAFDAC Registered</span>
              </div>
              <div className="trust-sep">•</div>
              <div className="trust-pill-item">
                <ShieldCheck size={16} className="trust-icon" />
                <span>Assay-Verified Potency</span>
              </div>
              <div className="trust-sep">•</div>
              <div className="trust-pill-item">
                <Droplets size={16} className="trust-icon" />
                <span>Cold-Pressed Botanicals</span>
              </div>
            </div>
          </div>

          {/* Right Product Showcase (Visually Dramatic Stage) */}
          <div className="hero-visual-col">
            <div className="hero-stage-card">
              {/* Luminous Ambient Glow */}
              <div className="stage-ambient-glow"></div>
              <div className="stage-pedestal-light"></div>

              {/* Main Pack Showcase with Interactive Floating Badges */}
              <div className="stage-images-wrapper">
                {/* OMG Pack */}
                <div className="stage-pack pack-secondary left-pack" onClick={() => onProductClick('omg')}>
                  <div className="floating-badge badge-left">
                    <span>Full-Spectrum 3•5•6•7•9</span>
                  </div>
                  <img src="/assets/omg-box.png" alt="Day By Day OMG" className="pack-img" />
                  <span className="pack-label">OMG • Skin &amp; Energy</span>
                </div>

                {/* Center Pregnancy Plus Pack */}
                <div className="stage-pack pack-primary center-pack" onClick={() => onProductClick('pregnancy-plus')}>
                  <div className="floating-badge badge-center">
                    <span>300 mg DHA • Twin-Pack</span>
                  </div>
                  <img src="/assets/pregnancy-plus-detail-view.png" alt="Wellness Pregnancy Plus Twin-Pack" className="pack-img-primary" />
                  <span className="pack-label-primary">Pregnancy Plus • Twin Pack</span>
                </div>

                {/* PROMAN Pack */}
                <div className="stage-pack pack-secondary right-pack" onClick={() => onProductClick('proman')}>
                  <div className="floating-badge badge-right">
                    <span>CoQ10 &amp; Ginseng</span>
                  </div>
                  <img src="/assets/proman.png" alt="PROMAN Men's Vitality" className="pack-img" />
                  <span className="pack-label">PROMAN • Men's Vitality</span>
                </div>
              </div>

              {/* Bottom Stage Callout */}
              <div className="stage-caption">
                <span className="stage-caption-pill">Eight Reconciled Daily Formulations For Every Life Stage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visually Dramatic Infinite Scrolling Marquee Strip */}
      <div className="editorial-marquee-strip">
        <div className="marquee-inner">
          <div className="marquee-content">
            <span>CLINICAL ASSAYS</span>
            <span className="marquee-star">✦</span>
            <span>100% NAFDAC REGISTERED</span>
            <span className="marquee-star">✦</span>
            <span>COLD-PRESSED BOTANICAL OILS</span>
            <span className="marquee-star">✦</span>
            <span>ZERO ARTIFICIAL FILLERS</span>
            <span className="marquee-star">✦</span>
            <span>THERAPEUTIC DOSAGES</span>
            <span className="marquee-star">✦</span>
            <span>BACKED BY GREENLIFE HERITAGE</span>
            <span className="marquee-star">✦</span>
            <span>DESIGNED FOR NIGERIA</span>
            <span className="marquee-star">✦</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span>CLINICAL ASSAYS</span>
            <span className="marquee-star">✦</span>
            <span>100% NAFDAC REGISTERED</span>
            <span className="marquee-star">✦</span>
            <span>COLD-PRESSED BOTANICAL OILS</span>
            <span className="marquee-star">✦</span>
            <span>ZERO ARTIFICIAL FILLERS</span>
            <span className="marquee-star">✦</span>
            <span>THERAPEUTIC DOSAGES</span>
            <span className="marquee-star">✦</span>
            <span>BACKED BY GREENLIFE HERITAGE</span>
            <span className="marquee-star">✦</span>
            <span>DESIGNED FOR NIGERIA</span>
            <span className="marquee-star">✦</span>
          </div>
        </div>
      </div>

      {/* Lemme-style Horizontal Category Pill Filter Bar */}
      <BenefitGrid 
        activeBenefit={activeBenefit} 
        onSelectBenefit={handleSelectBenefit} 
      />

      {/* Product Collection Grid Section */}
      <section id="products-section" className="collection-section">
        <div className="container">
          <div className="collection-header-row">
            <div>
              <span className="section-eyebrow">RECONCILED CATALOGUE (8)</span>
              <h2 className="collection-title">The Launch Collection</h2>
              <p className="collection-sub">
                Explore individual active ingredients, pack formats, and clinical wellness targets across our complete product family.
              </p>
            </div>
            
            {activeBenefit !== 'all' && (
              <button className="btn-clear-filter" onClick={() => setActiveBenefit('all')}>
                Show All 8 Products
              </button>
            )}
          </div>

          {/* Clean 4-Column Responsive Grid */}
          <div className="products-grid">
            {displayProducts.map((product) => (
              <div key={product.id} className="grid-item">
                <ProductCard 
                  product={product} 
                  onViewDetails={() => onProductClick(product.id)}
                  onShopNow={() => onShopRedirect(product.id, 'b2c')}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Social Proof: Sliding Tweets Reviews Carousel */}
      <CustomerReviews />

      {/* Editorial Brand Pillars Section ("The Day By Day Standard") */}
      <section className="brand-philosophy-section">
        <div className="container">
          <div className="philosophy-header">
            <span className="section-eyebrow">THE DAY BY DAY STANDARD</span>
            <h2 className="philosophy-title">
              Formulated With Intention. <br />
              <span className="hero-title-italic">Rooted in Science.</span>
            </h2>
            <p className="philosophy-sub">
              Every Day By Day formulation is engineered to eliminate guesswork, combining clinical therapeutic dosages with pure cold-pressed botanicals.
            </p>
          </div>

          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="philosophy-icon-box">
                <Award size={24} />
              </div>
              <h3 className="card-heading">Clinical Assay Precision</h3>
              <p className="card-body-text">
                Every active nutrient is dosed to meet British and US Pharmacopeia standards, backed by Greenlife Pharmaceuticals’ laboratory assays for verified potency.
              </p>
            </div>

            <div className="philosophy-card">
              <div className="philosophy-icon-box">
                <Droplets size={24} />
              </div>
              <h3 className="card-heading">Cold-Pressed Botanicals</h3>
              <p className="card-body-text">
                Full-spectrum Omegas 3, 5, 6, 7, and 9 extracted from pure Virgin Coconut, Avocado, Grape Seed, and Rice Bran oils for superior cellular absorption.
              </p>
            </div>

            <div className="philosophy-card">
              <div className="philosophy-icon-box">
                <Compass size={24} />
              </div>
              <h3 className="card-heading">Zero Fillers, Full Transparency</h3>
              <p className="card-body-text">
                No unverified probiotic or digestive claims, no artificial fillers, and strictly registered with NAFDAC to guarantee authentic Nigerian consumer safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Practitioner Quote Strip (Lemme Style) */}
      <section className="quote-banner-section">
        <div className="container quote-container">
          <div className="quote-content">
            <p className="quote-text font-serif">
              "The twin-pack approach provides real maternal nutrition without needing multiple bottles. Clean, easy on the stomach, and backed by clinical assays."
            </p>
            <div className="quote-author">
              <span className="author-name">Dr. A. Adebayo, FWACS</span>
              <span className="author-role">Consultant Maternal Health &amp; Obstetrics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Minimalist Quiz Callout Card */}
      <section className="quiz-banner-section">
        <div className="container">
          <div className="quiz-banner-card">
            <div className="quiz-banner-inner">
              <span className="section-eyebrow">FORMULA MATCHER</span>
              <h2 className="quiz-banner-title">
                Find Your Daily Routine
              </h2>
              <p className="quiz-banner-desc">
                Unsure which formulation fits your lifestyle? Answer 4 quick questions about your daily nutrition, wellness priorities, and life stage.
              </p>
              <button className="btn-round btn-dark quiz-action-btn" onClick={onOpenQuiz}>
                Start The 1-Minute Quiz
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Science & Formulation Details */}
      <ScienceSection />

      <style>{`
        .home-page {
          background-color: var(--color-bg-base);
          margin-top: 80px;
        }

        /* Editorial Hero Section */
        .editorial-hero {
          padding: 80px 0 70px;
          background: linear-gradient(180deg, #FAF8F5 0%, #F5F1E8 100%);
          border-bottom: 1px solid var(--color-border);
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-main-title {
          font-size: 3.8rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--color-text-dark);
          line-height: 1.08;
          margin-bottom: 22px;
        }

        .hero-title-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: #2A2421;
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          max-width: 540px;
          margin-bottom: 36px;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 42px;
        }

        .hero-btn-primary {
          padding: 15px 36px;
          font-size: 0.98rem;
          gap: 8px;
        }

        .hero-btn-primary:hover .btn-arrow-icon {
          transform: translateX(4px);
        }

        .btn-arrow-icon {
          transition: transform 0.25s ease;
        }

        .hero-btn-quiz {
          padding: 15px 30px;
          font-size: 0.98rem;
          background-color: var(--color-white);
          border: 1.5px solid var(--color-border);
        }

        .hero-btn-quiz:hover {
          border-color: var(--color-text-dark);
        }

        .hero-trust-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 26px;
          border-top: 1px solid var(--color-border);
        }

        .trust-pill-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--color-text-dark);
        }

        .trust-icon {
          color: #2d8a5b;
          flex-shrink: 0;
        }

        .trust-sep {
          color: #C0B9AF;
          font-size: 0.8rem;
        }

        /* Hero Right Stage Visual */
        .hero-stage-card {
          position: relative;
          background: linear-gradient(145deg, #FFFFFF 0%, #FAF8F5 100%);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: 0 16px 40px rgba(26, 26, 26, 0.08);
          padding: 40px 24px 24px;
          overflow: hidden;
        }

        .stage-ambient-glow {
          position: absolute;
          top: -20%;
          left: 10%;
          width: 80%;
          height: 90%;
          background: radial-gradient(circle, rgba(244, 238, 248, 0.8) 0%, rgba(253, 241, 235, 0.6) 45%, transparent 75%);
          z-index: 1;
          filter: blur(20px);
          pointer-events: none;
        }

        .stage-pedestal-light {
          position: absolute;
          bottom: 40px;
          left: 15%;
          width: 70%;
          height: 40px;
          background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.06) 0%, transparent 70%);
          z-index: 1;
        }

        .stage-images-wrapper {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 16px;
          height: 350px;
          padding-bottom: 20px;
        }

        .stage-pack {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          position: relative;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stage-pack:hover {
          transform: translateY(-8px);
        }

        .floating-badge {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--color-text-dark);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          white-space: nowrap;
          z-index: 5;
          pointer-events: none;
          transition: transform 0.3s ease;
        }

        .badge-left {
          top: 10px;
          left: -10px;
        }

        .badge-center {
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
        }

        .badge-right {
          top: 16px;
          right: -10px;
        }

        .stage-pack:hover .floating-badge {
          transform: translateY(-3px) scale(1.02);
        }

        .badge-center:hover {
          transform: translateX(-50%) translateY(-3px) scale(1.02);
        }

        .pack-primary {
          z-index: 4;
        }

        .pack-img-primary {
          max-height: 280px;
          max-width: 180px;
          object-fit: contain;
          filter: drop-shadow(0 16px 28px rgba(26, 26, 26, 0.15));
          transition: transform 0.35s ease;
        }

        .pack-primary:hover .pack-img-primary {
          transform: scale(1.04);
        }

        .pack-secondary {
          z-index: 3;
          opacity: 0.96;
        }

        .pack-img {
          max-height: 215px;
          max-width: 140px;
          object-fit: contain;
          filter: drop-shadow(0 12px 20px rgba(26, 26, 26, 0.1));
          transition: transform 0.35s ease;
        }

        .pack-secondary:hover .pack-img {
          transform: scale(1.05);
        }

        .pack-label {
          margin-top: 12px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-text-muted);
          background-color: var(--color-bg-base);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          white-space: nowrap;
        }

        .pack-label-primary {
          margin-top: 12px;
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--color-text-dark);
          background-color: var(--color-white);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-text-dark);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          white-space: nowrap;
        }

        .stage-caption {
          position: relative;
          z-index: 2;
          text-align: center;
          padding-top: 16px;
          border-top: 1px solid var(--color-border-subtle);
        }

        .stage-caption-pill {
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--color-text-muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* High-Energy Editorial Marquee Strip */
        .editorial-marquee-strip {
          background-color: #1A1A1A;
          color: #FAF8F5;
          padding: 14px 0;
          overflow: hidden;
          white-space: nowrap;
          border-bottom: 1px solid #333333;
        }

        .marquee-inner {
          display: flex;
          width: fit-content;
          animation: marqueeScroll 28s linear infinite;
        }

        .marquee-content {
          display: flex;
          align-items: center;
          gap: 28px;
          padding-right: 28px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .marquee-star {
          color: #C2BAAF;
          font-size: 0.75rem;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Products Collection Section */
        .collection-section {
          padding: 60px 0 80px;
          background-color: var(--color-bg-base);
        }

        .collection-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 36px;
        }

        .section-eyebrow {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin-bottom: 6px;
        }

        .collection-title {
          font-size: 2.3rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--color-text-dark);
          margin-bottom: 6px;
        }

        .collection-sub {
          font-size: 0.98rem;
          color: var(--color-text-muted);
          max-width: 620px;
        }

        .btn-clear-filter {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-dark);
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          padding: 8px 18px;
          border-radius: var(--radius-full);
          transition: var(--transition-smooth);
        }

        .btn-clear-filter:hover {
          background-color: var(--color-bg-subtle);
          border-color: var(--color-text-dark);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* Brand Philosophy Section */
        .brand-philosophy-section {
          padding: 80px 0;
          background-color: var(--color-white);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }

        .philosophy-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 50px;
        }

        .philosophy-title {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.18;
          color: var(--color-text-dark);
          margin-bottom: 14px;
        }

        .philosophy-sub {
          font-size: 1.02rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .philosophy-card {
          padding: 34px;
          background-color: var(--color-bg-base);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          transition: var(--transition-bounce);
        }

        .philosophy-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
          border-color: #D6D0C7;
        }

        .philosophy-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-dark);
          margin-bottom: 20px;
        }

        .card-heading {
          font-size: 1.22rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--color-text-dark);
          margin-bottom: 10px;
        }

        .card-body-text {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* Practitioner Quote Banner */
        .quote-banner-section {
          padding: 70px 0;
          background-color: var(--color-bg-subtle);
          border-bottom: 1px solid var(--color-border);
        }

        .quote-container {
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .quote-content {
          max-width: 800px;
        }

        .quote-text {
          font-size: 1.85rem;
          font-style: italic;
          color: var(--color-text-dark);
          line-height: 1.45;
          margin-bottom: 20px;
        }

        .quote-author {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .author-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-dark);
        }

        .author-role {
          font-size: 0.82rem;
          color: var(--color-text-muted);
        }

        /* Luxury Quiz Banner Card */
        .quiz-banner-section {
          padding: 80px 0;
          background-color: var(--color-bg-base);
        }

        .quiz-banner-card {
          background: linear-gradient(135deg, #FAF8F5 0%, #F4F0E8 100%);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          padding: 60px 40px;
          text-align: center;
          box-shadow: var(--shadow-sm);
        }

        .quiz-banner-inner {
          max-width: 580px;
          margin: 0 auto;
        }

        .quiz-banner-title {
          font-size: 2.3rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--color-text-dark);
          margin-bottom: 12px;
        }

        .quiz-banner-desc {
          font-size: 1.02rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .quiz-action-btn {
          padding: 14px 34px;
          font-size: 0.95rem;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-main-title {
            font-size: 3rem;
          }
          .philosophy-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          .hero-main-title {
            font-size: 2.3rem;
          }
          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-trust-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .trust-sep {
            display: none;
          }
          .stage-images-wrapper {
            height: 290px;
          }
          .quote-text {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div>
  );
}
