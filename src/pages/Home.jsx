import { useState, useEffect } from 'react';
import BenefitGrid from '../components/BenefitGrid';
import ScienceSection from '../components/ScienceSection';
import ProductCard from '../components/ProductCard';
import { Sparkles, ArrowRight, Pill, Sliders, CheckCircle2, ChevronDown } from 'lucide-react';
import { PRODUCTS_DATA, PRODUCTS_BY_ID, getFilteredProducts } from '../data/products';

const HERO_SLIDES = [
  {
    id: 'pregnancy',
    theme: 'purple',
    bg: 'linear-gradient(135deg, var(--color-preg-dark) 0%, var(--color-preg-primary) 100%)',
    tagline: 'Prenatal Care Elevated',
    title: 'Complete Care For Mom & Baby',
    subtitle: 'Day By Day Wellness Pregnancy delivers 24 vital nutrients including 600 mcg Folic Acid, 18 mg Iron, L-Lysine, L-Arginine & Inositol for prenatal vitality and foetal neural development.',
    image: '/assets/pregnancy-clean.png',
    actionText: 'Shop Pregnancy Care',
    actionType: 'filter',
    filterTarget: 'pregnancy-care',
    quizText: 'Take the Wellness Quiz'
  },
  {
    id: 'omg',
    theme: 'green',
    bg: 'linear-gradient(135deg, #1b5235 0%, var(--color-accent-green) 100%)',
    tagline: 'Full-Spectrum 3-5-6-7-9 Omega',
    title: 'Oh My Glow! Skin & Energy Boost',
    subtitle: 'Cold-pressed Virgin Coconut, Avocado, Grape Seed, and Rice Bran Oils blended with Vitamins A, D3, and E. Targeted for weight management, skin regeneration, and heart & brain support.',
    image: '/assets/omg-box.png',
    actionText: 'Explore Day By Day OMG',
    actionType: 'product',
    productId: 'omg',
    quizText: 'Take the Wellness Quiz'
  },
  {
    id: 'pregnancy-plus',
    theme: 'orange',
    bg: 'linear-gradient(135deg, var(--color-pregplus-dark) 0%, var(--color-pregplus-primary) 100%)',
    tagline: 'Double-Action Maternal Twin-Pack',
    title: 'Advanced Cognitive & Foetal Growth',
    subtitle: 'Twin Pack: 30 Prenatal Multivitamins + 30 High-Potency Omega 3-6-9 softgels delivering 300 mg DHA & 75 mg EPA. Comprehensive nutritional support from conception through nursing.',
    image: '/assets/pregnancy-plus-detail-view.png',
    actionText: 'Explore Pregnancy Plus',
    actionType: 'product',
    productId: 'pregnancy-plus',
    quizText: 'Take the Wellness Quiz'
  },
  {
    id: 'proman',
    theme: 'blue',
    bg: 'linear-gradient(135deg, #1c3d5a 0%, var(--color-blue-primary) 100%)',
    tagline: 'Men\'s Stamina & Drive',
    title: 'Men\'s Daily Energy & Focus Pack',
    subtitle: 'Twin Pack: 30 Multivitamin Softgels with CoQ10, L-Carnitine, Ginseng & Graviola + 30 Omega 3-5-6-7-9 Softgels. Engineered for physical stamina and mental focus.',
    image: '/assets/proman.png',
    actionText: 'Explore PROMAN',
    actionType: 'product',
    productId: 'proman',
    quizText: 'Take the Wellness Quiz'
  },
  {
    id: 'prowoman-young',
    theme: 'pink',
    bg: 'linear-gradient(135deg, #7c1a47 0%, var(--color-pink-primary) 100%)',
    tagline: 'Young Women\'s Daily Balance',
    title: 'Hormonal Balance & Active Glow',
    subtitle: 'Twin Pack: 30 Multivitamins with Safflower Oil, Dong Quai, Black Cohosh & Shatavari + 30 Omega 3-5-6-7-9 Softgels for balanced cycles and vibrant skin & hair.',
    image: '/assets/prowoman-young.png',
    actionText: 'Explore Prowoman Young',
    actionType: 'product',
    productId: 'prowoman-young',
    quizText: 'Take the Wellness Quiz'
  }
];

export default function Home({ onProductClick, onShopRedirect, onOpenQuiz }) {
  const [activeBenefit, setActiveBenefit] = useState('all');
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(slideTimer);
  }, []);

  // Softgel Mix Lab states (exploring existing formulas)
  const [mixerGoals, setMixerGoals] = useState({
    prenatal: false,
    dha: false,
    skin: false,
    energy: false,
    mens: false,
    menopause: false
  });
  const [mixResult, setMixResult] = useState(null);

  // Parallax Hero Effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 35;
    const y = (clientY - window.innerHeight / 2) / 35;
    setParallaxOffset({ x, y });
  };

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

  // Mix Lab exploration logic
  const handleMixerToggle = (goal) => {
    const updated = { ...mixerGoals, [goal]: !mixerGoals[goal] };
    setMixerGoals(updated);

    const activeCount = Object.values(updated).filter(Boolean).length;
    if (activeCount === 0) {
      setMixResult(null);
      return;
    }

    if (updated.menopause) {
      setMixResult(PRODUCTS_BY_ID['prowoman-40-plus']);
    } else if (updated.prenatal && updated.dha) {
      setMixResult(PRODUCTS_BY_ID['pregnancy-plus']);
    } else if (updated.prenatal) {
      setMixResult(PRODUCTS_BY_ID['pregnancy']);
    } else if (updated.mens) {
      setMixResult(PRODUCTS_BY_ID['proman']);
    } else if (updated.skin && updated.energy) {
      setMixResult(PRODUCTS_BY_ID['omg']);
    } else if (updated.skin) {
      setMixResult(PRODUCTS_BY_ID['prowoman-young']);
    } else {
      setMixResult(PRODUCTS_BY_ID['wellness']);
    }
  };

  const slide = HERO_SLIDES[currentHeroSlide];

  const handleHeroAction = (currentSlide) => {
    if (currentSlide.actionType === 'filter') {
      setActiveBenefit(currentSlide.filterTarget);
      const section = document.getElementById('products-section');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else if (currentSlide.actionType === 'product') {
      onProductClick(currentSlide.productId);
    }
  };

  // Filtered catalogue products
  const displayProducts = getFilteredProducts(activeBenefit);

  return (
    <div className="home-page" onMouseMove={handleMouseMove}>
      {/* Hero Section */}
      <section className="hero-section" style={{ background: slide.bg, transition: 'background 0.8s ease' }}>
        <div className="hero-container container">
          <div className="hero-text-side animate-fade-in" key={currentHeroSlide}>
            <div className="hero-tag">
              <Pill size={14} className="hero-tag-icon" />
              <span>{slide.tagline}</span>
            </div>
            <h1 className="hero-title">
              {slide.title}
            </h1>
            <p className="hero-subtitle">
              {slide.subtitle}
            </p>
            <div className="hero-actions">
              <button 
                onClick={() => handleHeroAction(slide)} 
                className="btn-round"
                style={{ 
                  backgroundColor: 'var(--color-white)', 
                  color: slide.id === 'pregnancy' ? 'var(--color-preg-dark)' :
                         slide.id === 'omg' ? '#1b5235' :
                         slide.id === 'pregnancy-plus' ? 'var(--color-pregplus-dark)' :
                         slide.id === 'proman' ? '#1c3d5a' : '#7c1a47',
                  border: '2px solid var(--color-white)',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                {slide.actionText}
                <ArrowRight size={16} style={{ marginLeft: '6px' }} />
              </button>
              <button 
                className="btn-round btn-hero-quiz" 
                onClick={onOpenQuiz}
                style={{
                  border: '2px solid var(--color-white)',
                  color: 'var(--color-white)',
                  backgroundColor: 'transparent',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {slide.quizText}
              </button>
            </div>
            
            <div className="hero-certs">
              <div className="cert-item">
                <CheckCircle2 size={18} className="cert-icon-white" />
                <span style={{ color: 'rgba(255, 255, 255, 0.95)' }}>NAFDAC Registered Formulations</span>
              </div>
              <div className="cert-item">
                <CheckCircle2 size={18} className="cert-icon-white" />
                <span style={{ color: 'rgba(255, 255, 255, 0.95)' }}>Greenlife Quality Standard Assays</span>
              </div>
            </div>
          </div>

          <div className="hero-graphics-side" key={`img-${currentHeroSlide}`}>
            <div className="graphics-circle-bg white-glow" style={{ transform: `translate(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px)` }}></div>
            
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="single-hero-img animate-float"
              style={{ transform: `translate(${parallaxOffset.x * 0.6}px, ${parallaxOffset.y * 0.6}px) rotate(${-2 + parallaxOffset.x * 0.1}deg)` }}
            />

            {/* Parallax Emojis */}
            {slide.id === 'pregnancy' && <div className="floating-bubble bubble-1">🌸</div>}
            {slide.id === 'omg' && <div className="floating-bubble bubble-1">💚</div>}
            {slide.id === 'pregnancy-plus' && <div className="floating-bubble bubble-1">🧡</div>}
            {slide.id === 'proman' && <div className="floating-bubble bubble-1">⚡</div>}
            {slide.id === 'prowoman-young' && <div className="floating-bubble bubble-1">✨</div>}
            <div className="floating-bubble bubble-2">🔬</div>
            <div className="floating-bubble bubble-3">💊</div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="hero-indicators">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              className={`indicator-dot ${idx === currentHeroSlide ? 'active' : ''}`}
              onClick={() => setCurrentHeroSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="hero-scroll-indicator" onClick={() => {
          const section = document.getElementById('products-section');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }}>
          <ChevronDown size={28} className="scroll-arrow-icon" />
        </div>

        {/* Wavy Divider */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,1120,120C960,120,800,120,800,120C640,120,480,120,480,120C320,120,160,120,80,120L0,120Z" fill="var(--color-bg-base)"></path>
          </svg>
        </div>
      </section>

      {/* Benefit selection grid */}
      <BenefitGrid 
        activeBenefit={activeBenefit} 
        onSelectBenefit={handleSelectBenefit} 
      />

      {/* Product Launch Collection Section */}
      <section id="products-section" className="dramatic-flyin-section container">
        <div className="collection-header-row">
          <div>
            <span className="collection-badge">Reconciled Catalogue (8)</span>
            <h2 className="carousel-section-title">Our Launch Collection</h2>
            <p className="carousel-section-sub">
              Compare active ingredient counts, pack sizes, and specific wellness targets across our complete product family.
            </p>
          </div>
          {activeBenefit !== 'all' && (
            <button className="btn-clear-filter" onClick={() => setActiveBenefit('all')}>
              Show All 8 Products
            </button>
          )}
        </div>

        {/* Underlying Catalogue Grid: Exposes each product exactly once */}
        <div className="catalog-grid">
          {displayProducts.map((product) => (
            <div key={product.id} className="catalog-item">
              <ProductCard 
                product={product} 
                onViewDetails={() => onProductClick(product.id)}
                onShopNow={() => onShopRedirect(product.id, 'b2c')}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Midpage Promo Split Banner */}
      <section className="promo-split-section">
        <div className="promo-split-grid">
          <div className="promo-text-side">
            <span className="promo-tagline-label">CLEAN WELLNESS</span>
            <h2 className="promo-heading-title">Daily Nutrition That Fits Your Routine</h2>
            <p className="promo-desc-text">
              We believe everyday health shouldn't feel like a chore. Day by Day combines clean, pharmaceutical-grade formulations from Greenlife with botanical oils, vital minerals, and multivitamins. No oversized chalky tablets—just easy daily softgels designed to look great on your shelf and feel amazing in your body.
            </p>
            <a href="#products-section" className="btn-round btn-promo-action">
              Explore Our Launch Collection
            </a>
          </div>
          <div className="promo-image-side promo-graphics-container">
            <div className="promo-graphics-glow"></div>
            <div className="promo-box-stack">
              <img src="/assets/pregnancy-clean.png" alt="Wellness Pregnancy Box" className="promo-stack-img img-preg" />
              <img src="/assets/omg-box.png" alt="Day By Day OMG Box" className="promo-stack-img img-omg" />
              <img src="/assets/proman.png" alt="PROMAN Men's Vitality Box" className="promo-stack-img img-men" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Mix Lab Section (Explores Existing Formulations) */}
      <section className="mixer-section">
        <div className="container mixer-container">
          <div className="mixer-info">
            <span className="mixer-badge">Interactive Mix Lab</span>
            <h2 className="mixer-title">Explore Your Formula Match 🧪</h2>
            <p className="mixer-text">
              Toggle your current health priorities below. Our Mix Lab matches your daily wellness goals to the appropriate Day By Day formulation and pack format.
            </p>

            <div className="mixer-toggles">
              <button 
                className={`mixer-toggle-btn ${mixerGoals.prenatal ? 'active' : ''}`}
                onClick={() => handleMixerToggle('prenatal')}
              >
                Prenatal Foundation 🌸
              </button>
              <button 
                className={`mixer-toggle-btn ${mixerGoals.dha ? 'active' : ''}`}
                onClick={() => handleMixerToggle('dha')}
              >
                Baby Brain &amp; DHA (300 mg) 🧠
              </button>
              <button 
                className={`mixer-toggle-btn ${mixerGoals.skin ? 'active' : ''}`}
                onClick={() => handleMixerToggle('skin')}
              >
                Skin Rejuvenation &amp; Anti-aging ✨
              </button>
              <button 
                className={`mixer-toggle-btn ${mixerGoals.energy ? 'active' : ''}`}
                onClick={() => handleMixerToggle('energy')}
              >
                Metabolic Energy &amp; Weight Support ⚡
              </button>
              <button 
                className={`mixer-toggle-btn ${mixerGoals.mens ? 'active' : ''}`}
                onClick={() => handleMixerToggle('mens')}
              >
                Men's Stamina &amp; Focus 💙
              </button>
              <button 
                className={`mixer-toggle-btn ${mixerGoals.menopause ? 'active' : ''}`}
                onClick={() => handleMixerToggle('menopause')}
              >
                Women's 40+ Menopause Comfort 💗
              </button>
            </div>
          </div>

          <div className="mixer-visualization">
            {/* Visual Softgel Illustration */}
            <div className="pill-mixer-wrapper">
              <div 
                className="liquid-pill animate-float"
                style={{ 
                  background: mixResult 
                    ? mixResult.theme === 'purple' ? 'linear-gradient(135deg, var(--color-preg-secondary) 0%, var(--color-preg-primary) 100%)' :
                      mixResult.theme === 'orange' ? 'linear-gradient(135deg, var(--color-pregplus-secondary) 0%, var(--color-pregplus-primary) 100%)' :
                      mixResult.theme === 'blue' ? 'linear-gradient(135deg, #a3c4f3 0%, var(--color-blue-primary) 100%)' :
                      mixResult.theme === 'pink' ? 'linear-gradient(135deg, #f8bbd0 0%, var(--color-pink-primary) 100%)' :
                      mixResult.theme === 'green' ? 'linear-gradient(135deg, #a3e4d7 0%, var(--color-accent-green) 100%)' :
                      'linear-gradient(135deg, #c3e8dc 0%, #0f5a47 100%)'
                    : 'linear-gradient(135deg, #e9e5ee 0%, #d4cedb 100%)' 
                }}
              >
                <div className="molecule mol-1"></div>
                <div className="molecule mol-2"></div>
                <div className="molecule mol-3"></div>
              </div>
            </div>

            {/* Recommendation block */}
            <div className="mixer-result-box">
              {mixResult ? (
                <div className="m-result animate-slide-up">
                  <span className="m-res-badge">{mixResult.group}</span>
                  <h3 className="m-res-title">{mixResult.title}</h3>
                  <p className="m-res-desc">{mixResult.differentiator}</p>
                  <div className="m-res-footer">
                    <span className="m-res-size">{mixResult.packSize} • {mixResult.ingredientCount} Actives</span>
                    <button 
                      className="btn-round btn-purple btn-mixer-action"
                      onClick={() => onProductClick(mixResult.id)}
                    >
                      Explore Formula
                      <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="m-res-placeholder">
                  <Sliders size={24} className="sliders-icon" />
                  <p>Toggle your wellness priorities on the left to see recommended formulations.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quiz Callout */}
      <section className="quiz-callout-section">
        <div className="quiz-callout-container container">
          <div className="quiz-callout-content">
            <h2 className="quiz-callout-title">Let's Find Your Formulation</h2>
            <p className="quiz-callout-text">
              Unsure which formulation fits your lifestyle? Take our 1-minute Wellness Quiz to match your goals with our eight daily formulations.
            </p>
            <button className="btn-round btn-orange quiz-callout-btn" onClick={onOpenQuiz}>
              Start the 1-Minute Quiz
              <Sparkles size={16} style={{ marginLeft: '6px' }} />
            </button>
          </div>
          <div className="quiz-callout-illustration">
            <div className="illus-box box-1 animate-float">🌸</div>
            <div className="illus-box box-2 animate-float-delayed">✨</div>
            <div className="illus-box box-3 animate-float">💊</div>
          </div>
        </div>
      </section>

      <ScienceSection />

      <style>{`
        .home-page {
          background-color: var(--color-bg-base);
          margin-top: 80px;
        }
        
        /* Hero Section */
        .hero-section {
          padding: 60px 0 110px;
          position: relative;
          overflow: hidden;
        }
        
        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .hero-tag {
          display: inline-flex;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.15);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-white);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(4px);
          width: fit-content;
          margin-bottom: 20px;
        }
        
        .hero-tag-icon {
          margin-right: 6px;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--color-white);
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 540px;
        }
        
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }
        
        .btn-hero-quiz:hover {
          background-color: rgba(255, 255, 255, 0.15) !important;
        }
        
        .hero-certs {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        
        .cert-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        
        .cert-icon-white {
          color: var(--color-white);
        }
        
        /* Hero Graphics */
        .hero-graphics-side {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 480px;
        }
        
        .graphics-circle-bg {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: var(--radius-full);
          background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 70%, transparent 100%);
          z-index: 1;
        }
        
        .single-hero-img {
          max-height: 420px;
          max-width: 90%;
          object-fit: contain;
          z-index: 2;
          filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.25));
        }
        
        .floating-bubble {
          position: absolute;
          width: 48px;
          height: 48px;
          background-color: var(--color-white);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          box-shadow: var(--shadow-md);
          z-index: 3;
        }
        
        .bubble-1 { top: 40px; right: 40px; animation: float 3s ease-in-out infinite; }
        .bubble-2 { bottom: 80px; left: 30px; animation: float 4s ease-in-out infinite 1s; }
        .bubble-3 { bottom: 40px; right: 60px; animation: float 3.5s ease-in-out infinite 0.5s; }
        
        .hero-indicators {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }
        
        .indicator-dot {
          width: 12px;
          height: 12px;
          border-radius: var(--radius-full);
          background-color: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .indicator-dot.active {
          width: 32px;
          background-color: var(--color-white);
        }
        
        .hero-scroll-indicator {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--color-white);
          cursor: pointer;
          animation: bounce 2s infinite;
          z-index: 10;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-10px) translateX(-50%); }
          60% { transform: translateY(-5px) translateX(-50%); }
        }
        
        .hero-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          line-height: 0;
          z-index: 4;
        }
        
        /* Collection Section */
        .dramatic-flyin-section {
          padding: 60px 24px 80px;
        }

        .collection-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 40px;
        }

        .collection-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background-color: var(--color-preg-light);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }
        
        .carousel-section-title {
          font-size: 2.5rem;
          color: var(--color-text-dark);
          margin-bottom: 8px;
        }

        .carousel-section-sub {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          max-width: 600px;
        }

        .btn-clear-filter {
          background-color: var(--color-white);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 8px 18px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .btn-clear-filter:hover {
          background-color: var(--color-preg-light);
        }

        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .catalog-item {
          display: flex;
        }

        /* Promo Split Section */
        .promo-split-section {
          padding: 80px 24px;
          background-color: var(--color-white);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        
        .promo-split-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .promo-tagline-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-pregplus-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 8px;
        }
        
        .promo-heading-title {
          font-size: 2.5rem;
          color: var(--color-text-dark);
          line-height: 1.2;
          margin-bottom: 16px;
        }
        
        .promo-desc-text {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .btn-promo-action {
          background-color: var(--color-preg-primary);
          color: var(--color-white);
          padding: 12px 28px;
          font-weight: 700;
          display: inline-block;
          text-decoration: none;
        }
        
        .btn-promo-action:hover {
          background-color: var(--color-preg-dark);
        }
        
        .promo-graphics-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 380px;
        }
        
        .promo-graphics-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: var(--radius-full);
          background: radial-gradient(circle, var(--color-preg-light) 0%, rgba(240, 230, 248, 0) 70%);
        }
        
        .promo-box-stack {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
        }
        
        .promo-stack-img {
          position: absolute;
          max-height: 300px;
          object-fit: contain;
          filter: drop-shadow(0 15px 20px rgba(0, 0, 0, 0.15));
          transition: transform 0.3s ease;
        }
        
        .img-preg { transform: translateX(-90px) rotate(-6deg) scale(0.9); z-index: 1; }
        .img-omg { transform: translateX(0px) scale(1); z-index: 2; }
        .img-men { transform: translateX(90px) rotate(6deg) scale(0.9); z-index: 1; }
        
        .promo-box-stack:hover .img-preg { transform: translateX(-120px) rotate(-10deg) scale(0.95); }
        .promo-box-stack:hover .img-men { transform: translateX(120px) rotate(10deg) scale(0.95); }

        /* Mixer Section */
        .mixer-section {
          padding: 80px 24px;
          background: linear-gradient(180deg, var(--color-bg-base) 0%, #ffffff 100%);
        }
        
        .mixer-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .mixer-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background-color: var(--color-preg-light);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 12px;
        }
        
        .mixer-title {
          font-size: 2.5rem;
          color: var(--color-text-dark);
          margin-bottom: 16px;
        }
        
        .mixer-text {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 30px;
        }
        
        .mixer-toggles {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        
        .mixer-toggle-btn {
          background-color: var(--color-white);
          border: 1.5px solid var(--color-border);
          padding: 10px 18px;
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-dark);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .mixer-toggle-btn:hover {
          border-color: var(--color-preg-primary);
        }
        
        .mixer-toggle-btn.active {
          background-color: var(--color-preg-primary);
          border-color: var(--color-preg-primary);
          color: var(--color-white);
        }
        
        .mixer-visualization {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }
        
        .pill-mixer-wrapper {
          width: 220px;
          height: 100px;
          position: relative;
        }
        
        .liquid-pill {
          width: 100%;
          height: 100%;
          border-radius: 50px;
          position: relative;
          box-shadow: var(--shadow-md);
          overflow: hidden;
          transition: background 0.6s ease;
          border: 3px solid rgba(255, 255, 255, 0.8);
        }
        
        .molecule {
          position: absolute;
          border-radius: var(--radius-full);
          background-color: rgba(255, 255, 255, 0.6);
        }
        
        .mol-1 { width: 24px; height: 24px; top: 20px; left: 30px; animation: float 3s infinite ease-in-out; }
        .mol-2 { width: 16px; height: 16px; bottom: 25px; left: 100px; animation: float 4s infinite ease-in-out 1s; }
        .mol-3 { width: 20px; height: 20px; top: 35px; right: 40px; animation: float 3.5s infinite ease-in-out 0.5s; }
        
        .mixer-result-box {
          width: 100%;
          max-width: 440px;
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          padding: 24px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
          min-height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .m-res-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          text-transform: uppercase;
          background-color: var(--color-preg-light);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
        }

        .m-res-title {
          font-size: 1.3rem;
          color: var(--color-text-dark);
          margin-bottom: 4px;
        }

        .m-res-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .m-res-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--color-border);
          padding-top: 14px;
        }

        .m-res-size {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-text-dark);
        }

        .btn-mixer-action {
          padding: 8px 16px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
        }

        .m-res-placeholder {
          text-align: center;
          color: var(--color-text-muted);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .sliders-icon {
          color: var(--color-preg-primary);
        }

        /* Quiz Callout Section */
        .quiz-callout-section {
          padding: 80px 24px;
          background: linear-gradient(135deg, var(--color-pregplus-primary) 0%, #e05d26 100%);
          color: var(--color-white);
          position: relative;
          overflow: hidden;
        }

        .quiz-callout-container {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .quiz-callout-title {
          font-size: 2.75rem;
          margin-bottom: 16px;
          color: var(--color-white);
        }

        .quiz-callout-text {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 560px;
        }

        .quiz-callout-btn {
          background-color: var(--color-white);
          color: var(--color-pregplus-primary);
          padding: 14px 32px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
        }

        .quiz-callout-btn:hover {
          background-color: var(--color-bg-base);
        }

        .quiz-callout-illustration {
          position: relative;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .illus-box {
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: var(--radius-xl);
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
        }

        .box-1 { top: 20px; left: 40px; }
        .box-2 { top: 60px; right: 60px; }
        .box-3 { bottom: 20px; left: 160px; }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .catalog-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-certs {
            justify-content: center;
          }
          .catalog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .promo-split-grid {
            grid-template-columns: 1fr;
          }
          .mixer-container {
            grid-template-columns: 1fr;
          }
          .quiz-callout-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .quiz-callout-text {
            margin: 0 auto 28px;
          }
          .collection-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.25rem;
          }
          .catalog-grid {
            grid-template-columns: 1fr;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
