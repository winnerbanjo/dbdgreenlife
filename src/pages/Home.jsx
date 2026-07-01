import { useState, useEffect } from 'react';
import BenefitGrid from '../components/BenefitGrid';
import ScienceSection from '../components/ScienceSection';
import { Sparkles, ArrowRight, Pill, Sliders, CheckCircle2 } from 'lucide-react';

const productsData = [
  {
    id: 'pregnancy',
    title: 'Wellness Pregnancy',
    subtitle: '30 Softgels containing Multivitamins, Minerals, L-Lysine, L-Arginine & active Probiotics for prenatal care.',
    type: 'Pregnancy Care',
    image: '/assets/pregnancy-box.jpg',
    theme: 'purple',
    price: '₦12,500',
    size: '30 Softgels',
    benefitType: 'pregnancy',
    bullets: [
      'Supports baby\'s brain & spinal cord development',
      'Promotes healthy bone & skeletal formation',
      'Boosts mother\'s immune system & digestion',
      'Provides iron for red blood cell production'
    ]
  },
  {
    id: 'omg',
    title: 'OMG',
    subtitle: '30 Softgels of Virgin Coconut, Avocado, Grape Seed & Rice Bran Oils + Omega 3-5-6-7-9 and Vitamins A, D3, E.',
    type: 'Everyday Wellness',
    image: '/assets/omg-box.png',
    theme: 'green',
    price: '₦14,500',
    size: '30 Softgels',
    benefitType: 'daily-wellness',
    bullets: [
      'Omega-7 for Weight & Metabolism support',
      'Omega-3 & 9 for Heart & Brain health',
      'Omega-5 for Skin regeneration & Anti-aging',
      'Omega-6 for Daily Energy production'
    ]
  },
  {
    id: 'pregnancy-plus',
    title: 'Wellness Pregnancy Plus',
    subtitle: 'Dual Pack: 30 Multivitamin Softgels + 30 High-Potency Omega 3-6-9 Softgels for advanced prenatal care.',
    type: 'Maternal Health Plus',
    image: '/assets/pregnancy-plus-box.jpg',
    theme: 'orange',
    price: '₦18,500',
    size: '60 Softgels (Twin Pack)',
    benefitType: 'pregnancy-plus',
    bullets: [
      'Advanced baby cognitive & eye development',
      'Enriched with Omega-3 DHA, EPA & ALA',
      'Supports healthy birth weight & gestation length',
      'Provides Inositol for glycemic stability'
    ]
  },
  {
    id: 'proman',
    title: 'PROMAN',
    subtitle: 'Dual Pack: 30 Multivitamin Softgels + 30 High-Potency Omega 3-5-6-7-9 Softgels for men\'s health support.',
    type: 'Men\'s Vitality',
    image: '/assets/proman.png',
    theme: 'blue',
    price: '₦18,500',
    size: '60 Softgels (Twin Pack)',
    benefitType: 'mens-health',
    bullets: [
      'Boosts daily energy, stamina, and physical endurance',
      'Enhances mental focus, cognitive drive, and clarity',
      'Supports overall immune system and cardiovascular wellbeing'
    ]
  },
  {
    id: 'prowoman-young',
    title: 'PROWOMAN YOUNG',
    subtitle: 'Dual Pack: 30 Multivitamin Softgels + 30 High-Potency Omega 3-5-6-7-9 Softgels containing Safflower Oil.',
    type: 'Women\'s Wellness',
    image: '/assets/prowoman-young.png',
    theme: 'pink',
    price: '₦18,500',
    size: '60 Softgels (Twin Pack)',
    benefitType: 'womens-health',
    bullets: [
      'Supports vibrant skin glow, healthy hair, and nails',
      'Promotes balanced, comfortable menstrual cycles',
      'Optimizes daily energy, mood, and overall wellbeing'
    ]
  }
];

const HERO_SLIDES = [
  {
    id: 'pregnancy',
    theme: 'purple',
    bg: 'linear-gradient(135deg, var(--color-preg-dark) 0%, var(--color-preg-primary) 100%)',
    tagline: 'Prenatal Care Elevated',
    title: 'Complete Care For Mom & Baby',
    subtitle: 'Greenlife Wellness Pregnancy combines active probiotics, essential vitamins, and key minerals. The ultimate clinical formula for maternal vitality and early development.',
    image: '/assets/pregnancy-detail-view.png',
    actionText: 'Shop Pregnancy Care',
    quizText: 'Take the Bestie Quiz 💅'
  },
  {
    id: 'omg',
    theme: 'green',
    bg: 'linear-gradient(135deg, #1b5235 0%, var(--color-accent-green) 100%)',
    tagline: 'Botanical Oil & Vitamin Infusion',
    title: 'Oh My Glow! Skin & Energy Boost',
    subtitle: 'Cold-pressed Virgin Coconut, Avocado, Grape Seed, and Rice Bran Oils blended with vitamins A, D3, and E. The premium choice for weight management, skin glow, and cellular defense.',
    image: '/assets/omg-box.png',
    actionText: 'Shop OMG Glow',
    quizText: 'Take the Bestie Quiz 💅'
  },
  {
    id: 'pregnancy-plus',
    theme: 'orange',
    bg: 'linear-gradient(135deg, var(--color-pregplus-dark) 0%, var(--color-pregplus-primary) 100%)',
    tagline: 'Double-Action Maternal Support',
    title: 'Advanced Brain & Body Development',
    subtitle: 'Twin Pack: 30 Prenatal Multivitamins + 30 High-Potency Omega 3-6-9 fish oil softgels. Complete structural cognitive protection for baby, and glycemic stability for mom.',
    image: '/assets/pregnancy-plus-detail-view.png',
    actionText: 'Shop Pregnancy Plus',
    quizText: 'Take the Bestie Quiz 💅'
  },
  {
    id: 'proman',
    theme: 'blue',
    bg: 'linear-gradient(135deg, #1c3d5a 0%, var(--color-blue-primary) 100%)',
    tagline: 'Male Stamina & Vitality',
    title: 'Ultimate Men\'s Daily Energy Pack',
    subtitle: 'Twin Pack: 30 High-potency Multivitamin Softgels + 30 Omega 3-5-6-7-9 Softgels infused with CoQ10 & Ginseng. Boost stamina, heart function, and cognitive focus.',
    image: '/assets/proman.png',
    actionText: 'Shop PROMAN Vitality',
    quizText: 'Take the Bestie Quiz 💅'
  },
  {
    id: 'prowoman-young',
    theme: 'pink',
    bg: 'linear-gradient(135deg, #7c1a47 0%, var(--color-pink-primary) 100%)',
    tagline: 'Everyday Glow & Balance',
    title: 'Hormonal Balance & Active Glow',
    subtitle: 'Twin Pack: 30 Multivitamins + 30 High-Potency Omega 3-5-6-7-9 Softgels containing Safflower, Borage, and Evening Primrose oils. Lock in moisture, support hair & nails, and ease cycles.',
    image: '/assets/prowoman-young.png',
    actionText: 'Shop PROWOMAN',
    quizText: 'Take the Bestie Quiz 💅'
  }
];

export default function Home({ onProductClick, onShopRedirect, onOpenQuiz }) {
  const [activeBenefit, setActiveBenefit] = useState('all');
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

// Carousel no longer uses scroll‑based transforms; variables removed.
  // Softgel mixer states
  const [mixerGoals, setMixerGoals] = useState({
    brain: false,
    skin: false,
    energy: false,
    digestion: false,
    iron: false
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



  // Mixer logic
  const handleMixerToggle = (goal) => {
    const updated = { ...mixerGoals, [goal]: !mixerGoals[goal] };
    setMixerGoals(updated);

    // Determine recommendation
    const activeCount = Object.values(updated).filter(Boolean).length;
    if (activeCount === 0) {
      setMixResult(null);
      return;
    }

    if (updated.skin || updated.energy) {
      setMixResult({
        id: 'omg',
        name: 'OMG (Oh My Glow!) 💚',
        color: 'linear-gradient(135deg, #a3e4d7 0%, var(--color-accent-green) 100%)',
        badge: 'Everyday Glow & Metabolism',
        size: '30 Softgels'
      });
    } else if (updated.brain && updated.iron) {
      setMixResult({
        id: 'pregnancy-plus',
        name: 'Wellness Pregnancy Plus 🧡',
        color: 'linear-gradient(135deg, var(--color-pregplus-secondary) 0%, var(--color-pregplus-primary) 100%)',
        badge: 'Premium Prenatal Support + DHA',
        size: '60 Softgels (Twin Pack)'
      });
    } else {
      setMixResult({
        id: 'pregnancy',
        name: 'Wellness Pregnancy 💜',
        color: 'linear-gradient(135deg, var(--color-preg-secondary) 0%, var(--color-preg-primary) 100%)',
        badge: 'Complete Essential Prenatal Care',
        size: '30 Softgels'
      });
    }
  };

  const slide = HERO_SLIDES[currentHeroSlide];

  const carouselProducts = activeBenefit === 'all'
    ? productsData
    : productsData.filter(p => p.benefitType === activeBenefit);

  const getMarqueeItems = (products) => {
    if (products.length === 0) return [];
    let items = [...products];
    while (items.length < 8) {
      items = [...items, ...products];
    }
    return items;
  };

  const marqueeItems = getMarqueeItems(carouselProducts);

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
                onClick={() => onProductClick(slide.id)} 
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
                  justifyContent: 'center'
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
                  fontWeight: 600
                }}
              >
                {slide.quizText}
              </button>
            </div>
            
            <div className="hero-certs">
              <div className="cert-item">
                <CheckCircle2 size={18} className="cert-icon-white" />
                <span style={{ color: 'rgba(255, 255, 255, 0.95)' }}>NAFDAC Approved Formulas</span>
              </div>
              <div className="cert-item">
                <CheckCircle2 size={18} className="cert-icon-white" />
                <span style={{ color: 'rgba(255, 255, 255, 0.95)' }}>Purity Batch Tested</span>
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
            {slide.id === 'pregnancy' && <div className="floating-bubble bubble-1">🤰</div>}
            {slide.id === 'omg' && <div className="floating-bubble bubble-1">💚</div>}
            {slide.id === 'pregnancy-plus' && <div className="floating-bubble bubble-1">🧡</div>}
            {slide.id === 'proman' && <div className="floating-bubble bubble-1">⚡</div>}
            {slide.id === 'prowoman-young' && <div className="floating-bubble bubble-1">🌸</div>}
            <div className="floating-bubble bubble-2">✨</div>
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
        
        {/* Wavy Divider */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,1120,120C960,120,800,120,800,120C640,120,480,120,480,120C320,120,160,120,80,120L0,120Z" fill="var(--color-bg-base)"></path>
          </svg>
        </div>
      </section>

      {/* Benefit bubble selection */}
      <BenefitGrid 
        activeBenefit={activeBenefit} 
        onSelectBenefit={handleSelectBenefit} 
      />

      {/* Product Carousel Section (Moved up to replace Catalog Grid) */}
      <section id="products-section" className="dramatic-flyin-section">
        <h2 className="carousel-section-title">Our Launch Collection</h2>
        {activeBenefit !== 'all' && (
          <button className="btn-clear-filter" onClick={() => setActiveBenefit('all')} style={{ marginBottom: '24px' }}>
            Show All Products
          </button>
        )}
        <div className="carousel-container">
          <div className="product-carousel">
            {marqueeItems.map((product, index) => {
              const textThemeColor = product.theme === 'pregnancy' || product.theme === 'purple' ? 'var(--color-preg-dark)' :
                                     product.theme === 'omg' || product.theme === 'green' ? '#1b5235' :
                                     product.theme === 'pregnancy-plus' || product.theme === 'orange' ? 'var(--color-pregplus-dark)' :
                                     product.theme === 'proman' || product.theme === 'blue' ? '#1c3d5a' : '#7c1a47';
              const cardClass = `card-${product.id}`;

              return (
                <div 
                  key={`${product.id}-${index}`} 
                  className={`carousel-card ${cardClass}`}
                  onClick={() => onProductClick(product.id)}
                >
                  <span className="carousel-item-tag">{product.type}</span>
                  <div className="carousel-img-wrapper">
                    <div className="carousel-img-backdrop"></div>
                    <img src={product.image} alt={product.title} className="carousel-item-img" />
                  </div>
                  <h3 className="carousel-item-title">{product.title}</h3>
                  <p className="carousel-item-subtitle">{product.subtitle}</p>
                  
                  {/* Bullet benefits */}
                  <ul className="carousel-item-bullets">
                    {product.bullets.slice(0, 3).map((bullet, idx) => (
                      <li key={idx} className="carousel-item-bullet-item">
                        <Sparkles size={12} className="bullet-icon-sparkle" style={{ flexShrink: 0 }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="carousel-item-footer">
                    <span className="carousel-item-size">{product.size}</span>
                    <button 
                      className="btn-carousel-shop"
                      style={{ color: textThemeColor }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onShopRedirect(product.id, 'b2c');
                      }}
                    >
                      Shop Now
                      <ArrowRight size={12} style={{ marginLeft: '4px' }} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Midpage Promo Split Banner (Olly-style) */}
      <section className="promo-split-section">
        <div className="promo-split-grid">
          <div className="promo-text-side">
            <span className="promo-tagline-label">CLEAN WELLNESS</span>
            <h2 className="promo-heading-title">Daily Nutrition That Fits Your Vibe</h2>
            <p className="promo-desc-text">
              We believe that everyday health shouldn't feel like a chore. Day by Day combines clean, pharmaceutical-grade formulas from Greenlife with active botanical oils and probiotics. No oversized chalky pills, just easy daily softgels designed to look great on your shelf and feel amazing in your body.
            </p>
            <a href="#products-section" className="btn-round btn-promo-action">
              Explore Our Launch Collection
            </a>
          </div>
          <div className="promo-image-side promo-graphics-container">
            <div className="promo-graphics-glow"></div>
            <div className="promo-box-stack">
              <img src="/assets/pregnancy-nobg.png" alt="Wellness Pregnancy Box" className="promo-stack-img img-preg" />
              <img src="/assets/omg-nobg.png" alt="OMG Everyday Wellness Box" className="promo-stack-img img-omg" />
              <img src="/assets/proman.png" alt="PROMAN Men's Vitality Box" className="promo-stack-img img-men" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Supplement Mixer Section (Highly Animated) */}
      <section className="mixer-section">
        <div className="container mixer-container">
          <div className="mixer-info">
            <span className="mixer-badge">Interactive Mix Lab</span>
            <h2 className="mixer-title">Mix Your Vibe 🧪</h2>
            <p className="mixer-text">
              Toggle the wellness goals you want to focus on right now. Watch our virtual softgel adjust its molecular active ingredients and match you to a daily formula.
            </p>

            <div className="mixer-toggles">
              <button 
                className={`mixer-toggle-btn ${mixerGoals.brain ? 'active' : ''}`}
                onClick={() => handleMixerToggle('brain')}
              >
                Baby Brain & Spine 🧠
              </button>
              <button 
                className={`mixer-toggle-btn ${mixerGoals.skin ? 'active' : ''}`}
                onClick={() => handleMixerToggle('skin')}
              >
                Glowy Skin & Anti-aging ✨
              </button>
              <button 
                className={`mixer-toggle-btn ${mixerGoals.energy ? 'active' : ''}`}
                onClick={() => handleMixerToggle('energy')}
              >
                All-Day Energy Boost ⚡
              </button>
              <button 
                className={`mixer-toggle-btn ${mixerGoals.digestion ? 'active' : ''}`}
                onClick={() => handleMixerToggle('digestion')}
              >
                Gut & Digestive Comfort 🦠
              </button>
              <button 
                className={`mixer-toggle-btn ${mixerGoals.iron ? 'active' : ''}`}
                onClick={() => handleMixerToggle('iron')}
              >
                Blood Iron & Vitality 🩸
              </button>
            </div>
          </div>

          <div className="mixer-visualization">
            {/* Simulated Gel Capsule */}
            <div className="pill-mixer-wrapper">
              <div 
                className="liquid-pill animate-float"
                style={{ 
                  background: mixResult 
                    ? mixResult.color 
                    : 'linear-gradient(135deg, #e9e5ee 0%, #d4cedb 100%)' 
                }}
              >
                {/* Floating active molecules inside */}
                <div className="molecule mol-1"></div>
                <div className="molecule mol-2"></div>
                <div className="molecule mol-3"></div>
              </div>
            </div>

            {/* Recommendation block */}
            <div className="mixer-result-box">
              {mixResult ? (
                <div className="m-result animate-slide-up">
                  <span className="m-res-badge">{mixResult.badge}</span>
                  <h3 className="m-res-title">{mixResult.name}</h3>
                  <div className="m-res-footer">
                    <span className="m-res-size">{mixResult.size}</span>
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
                  <p>Toggle goals on the left to synthesize your perfect capsule match!</p>
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
            <h2 className="quiz-callout-title">Let's Find Your Vibe</h2>
            <p className="quiz-callout-text">
              Unsure about which formulation fits your lifestyle? Take our 1-minute Wellness Quiz to match with Pregnancy, Pregnancy Plus, or OMG.
            </p>
            <button className="btn-round btn-orange quiz-callout-btn" onClick={onOpenQuiz}>
              Start the 1-Minute Quiz 💅
              <Sparkles size={16} style={{ marginLeft: '6px' }} />
            </button>
          </div>
          <div className="quiz-callout-illustration">
            <div className="illus-box box-1 animate-float">🤰</div>
            <div className="illus-box box-2 animate-float-delayed">✨</div>
            <div className="illus-box box-3 animate-float">💊</div>
          </div>
        </div>
      </section>

      {/* Catalog grid replaced by carousel section above */}

      <ScienceSection />

      <style>{`
        .home-page {
          background-color: var(--color-bg-base);
          margin-top: 80px;
        }
        
        /* Hero Section */
        .hero-section {
          padding: 100px 0 160px;
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
          margin-bottom: 24px;
        }
        
        .hero-tag-icon {
          color: var(--color-white);
          margin-right: 6px;
        }
        
        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          color: var(--color-white);
          margin-bottom: 20px;
          font-family: var(--font-serif);
          font-weight: 700;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 36px;
          max-width: 580px;
        }
        
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
        }
        
        .hero-certs {
          display: flex;
          gap: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 24px;
        }
        
        .cert-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-white);
        }
        
        .cert-icon-white {
          color: var(--color-white);
        }
        
        /* Hero Graphics */
        .hero-graphics-side {
          position: relative;
          height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .graphics-circle-bg {
          position: absolute;
          border-radius: var(--radius-full);
          filter: blur(40px);
          opacity: 0.45;
          z-index: 1;
          transition: transform 0.2s ease-out;
        }
        
        .graphics-circle-bg.white-glow {
          width: 360px;
          height: 360px;
          background-color: var(--color-white);
          opacity: 0.15;
          filter: blur(50px);
          z-index: 1;
          animation: pulseGlow 6s ease-in-out infinite alternate;
        }
        
        .single-hero-img {
          max-height: 380px;
          object-fit: contain;
          z-index: 2;
          filter: drop-shadow(0 25px 45px rgba(0, 0, 0, 0.3));
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .single-hero-img:hover {
          transform: translateY(-8px) scale(1.03) rotate(1deg);
        }
        
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeInSlide 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .hero-indicators {
          position: absolute;
          bottom: 75px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 15;
        }
        
        .indicator-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background-color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator-dot.active {
          background-color: var(--color-white);
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
        
        .indicator-dot:hover {
          background-color: rgba(255, 255, 255, 0.8);
        }
        
        .floating-bubble {
          position: absolute;
          width: 46px;
          height: 46px;
          border-radius: var(--radius-full);
          background-color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          font-size: 1.4rem;
          z-index: 3;
          transition: transform 0.15s ease-out;
          user-select: none;
        }
        
        @keyframes bobUp {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .bubble-1 { top: 40px; right: 60px; animation: bobUp 4s ease-in-out infinite; }
        .bubble-2 { bottom: 140px; left: 40px; animation: bobUp 5s ease-in-out infinite 1s; }
        .bubble-3 { top: 220px; left: 140px; animation: bobUp 3.5s ease-in-out infinite 0.5s; }
        .bubble-4 { bottom: 30px; right: 160px; animation: bobUp 4.5s ease-in-out infinite 1.5s; }
        
        .hero-wave {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          z-index: 10;
          display: none; /* hidden on web */
        }
        
        .hero-wave svg {
          width: 100%;
          height: 60px;
          display: block;
        }
        
        .btn-clear-filter {
          font-weight: 700;
          color: var(--color-preg-primary);
          border-bottom: 2px dashed var(--color-preg-primary);
          font-size: 0.95rem;
          background: none;
          border: none;
          cursor: pointer;
        }
        
        /* Mixer Interactive Section */
        .mixer-section {
          background: linear-gradient(180deg, #f7faf9 0%, #ebf6f1 100%);
          padding: 80px 0;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        
        .mixer-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .mixer-info {
          display: flex;
          flex-direction: column;
        }
        
        .mixer-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-pregplus-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }
        
        .mixer-title {
          font-size: 2.25rem;
          color: var(--color-text-dark);
          margin-bottom: 12px;
          font-family: var(--font-serif);
          font-weight: 400;
        }
        
        .mixer-text {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 30px;
        }
        
        .mixer-toggles {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        
        .mixer-toggle-btn {
          font-family: var(--font-primary);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-dark);
          background-color: var(--color-bg-base);
          border: 2px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 10px 18px;
          transition: var(--transition-bounce);
        }
        
        .mixer-toggle-btn:hover {
          border-color: var(--color-preg-primary);
          transform: translateY(-2px);
        }
        
        .mixer-toggle-btn.active {
          background-color: var(--color-preg-primary);
          color: var(--color-white);
          border-color: var(--color-preg-primary);
          box-shadow: var(--shadow-sm);
        }
        
        /* Mixer Visuals side */
        .mixer-visualization {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }
        
        .pill-mixer-wrapper {
          width: 150px;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .liquid-pill {
          width: 100px;
          height: 180px;
          border-radius: 60px;
          border: 3px solid var(--color-white);
          box-shadow: 0 15px 35px rgba(110, 100, 120, 0.15);
          position: relative;
          transition: background 0.5s ease-in-out;
          overflow: hidden;
        }
        
        /* Molecule bubble animation */
        .molecule {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.45);
          border-radius: var(--radius-full);
          animation: floatMolecule 4s infinite linear;
        }
        
        .mol-1 { width: 14px; height: 14px; left: 30px; bottom: 10px; animation-duration: 3s; }
        .mol-2 { width: 8px; height: 8px; left: 60px; bottom: 30px; animation-duration: 4s; animation-delay: 1s; }
        .mol-3 { width: 12px; height: 12px; left: 45px; bottom: 50px; animation-duration: 3.5s; animation-delay: 1.5s; }
        
        @keyframes floatMolecule {
          0% { transform: translateY(0) scale(1); opacity: 0.1; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-160px) scale(0.6); opacity: 0; }
        }
        
        .mixer-result-box {
          width: 100%;
          min-height: 110px;
        }
        
        .m-result {
          background-color: var(--color-bg-base);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }
        
        .m-res-badge {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 4px;
        }
        
        .m-res-title {
          font-size: 1.35rem;
          color: var(--color-text-dark);
          margin-bottom: 12px;
        }
        
        .m-res-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .m-res-size {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }
        
        .btn-mixer-action {
          padding: 8px 16px;
          font-size: 0.85rem;
        }
        
        .m-res-placeholder {
          text-align: center;
          padding: 24px;
          color: var(--color-text-muted);
          font-size: 0.9rem;
          border: 2px dashed var(--color-border);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        
        .sliders-icon {
          color: var(--color-border);
          animation: spin 6s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        /* Quiz Callout Section */
        .quiz-callout-section {
          background: linear-gradient(135deg, var(--color-pregplus-light) 0%, var(--color-pregplus-secondary) 100%);
          padding: 60px 0;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        
        .quiz-callout-container {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 40px;
          align-items: center;
        }
        
        .quiz-callout-content {
          display: flex;
          flex-direction: column;
        }
        
        .quiz-callout-title {
          font-size: 2.25rem;
          color: var(--color-pregplus-dark);
          margin-bottom: 12px;
          font-family: var(--font-serif);
          font-weight: 400;
        }
        
        .quiz-callout-text {
          font-size: 1.1rem;
          color: var(--color-text-dark);
          line-height: 1.5;
          margin-bottom: 24px;
          max-width: 600px;
        }
        
        .quiz-callout-btn {
          width: fit-content;
          box-shadow: var(--shadow-md);
        }
        
        .quiz-callout-illustration {
          position: relative;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        
        .illus-box {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-md);
          background-color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          font-size: 1.8rem;
          border: 1px solid var(--color-border);
        }
        
        .illus-box.box-1 { transform: rotate(-8deg); }
        .illus-box.box-2 { transform: rotate(15deg); }
        .illus-box.box-3 { transform: rotate(-5deg); }

        /* Promo Split Section */
        .promo-split-section {
          background-color: #faf7fd;
          padding: 60px 0;
          overflow: hidden;
        }
        
        .promo-split-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          min-height: 520px;
          width: 100%;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        
        .promo-text-side {
          background-color: var(--color-preg-dark);
          padding: 60px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: var(--color-white);
        }
        
        .promo-tagline-label {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-preg-secondary);
          margin-bottom: 16px;
        }
        
        .promo-heading-title {
          font-size: 3rem;
          font-family: var(--font-serif);
          font-weight: 700;
          line-height: 1.1;
          color: var(--color-white);
          margin-bottom: 24px;
        }
        
        .promo-desc-text {
          font-size: 1.15rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 400;
          margin-bottom: 36px;
        }
        
        .btn-promo-action {
          background-color: var(--color-white);
          color: var(--color-preg-dark);
          font-weight: 700;
          padding: 14px 32px;
          box-shadow: var(--shadow-sm);
          width: fit-content;
          border: 2px solid var(--color-white);
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-bounce);
        }
        
        .btn-promo-action:hover {
          background-color: transparent;
          color: var(--color-white);
          border-color: var(--color-white);
          transform: translateY(-3px);
        }
        
        .promo-image-side {
          position: relative;
          overflow: hidden;
          background-color: #faf6ff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .promo-graphics-glow {
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background-color: var(--color-pregplus-secondary);
          filter: blur(50px);
          opacity: 0.3;
          z-index: 1;
          animation: pulseGlow 6s ease-in-out infinite alternate;
        }

        .promo-box-stack {
          position: relative;
          width: 100%;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .promo-stack-img {
          position: absolute;
          max-height: 220px;
          object-fit: contain;
          filter: drop-shadow(0 15px 25px rgba(110,100,120,0.15));
          transition: transform 0.4s ease;
        }

        .img-preg {
          left: 12%;
          transform: rotate(-10deg) translateY(-10px);
          z-index: 2;
          animation: bobUp 4s ease-in-out infinite;
        }

        .img-omg {
          z-index: 4;
          transform: translateY(15px);
          animation: bobUp 3.5s ease-in-out infinite 0.5s;
        }

        .img-men {
          right: 12%;
          transform: rotate(12deg) translateY(-5px);
          z-index: 3;
          animation: bobUp 4.5s ease-in-out infinite 1s;
        }

        .promo-box-stack:hover .img-preg {
          transform: rotate(-15deg) translateX(-15px) translateY(-10px);
        }

        .promo-box-stack:hover .img-omg {
          transform: scale(1.05) translateY(5px);
        }

        .promo-box-stack:hover .img-men {
          transform: rotate(18deg) translateX(15px) translateY(-5px);
        }

        /* Responsive Layouts */
        @media (max-width: 968px) {
          .promo-split-grid {
            grid-template-columns: 1fr;
          }
          .promo-text-side {
            padding: 48px 24px;
            text-align: center;
            align-items: center;
          }
          .promo-heading-title {
            font-size: 2.2rem;
          }
          .btn-promo-action {
            margin: 0 auto;
          }
          .promo-image-side {
            height: 360px;
          }
          .promo-box-stack {
            height: 320px;
          }
          .promo-stack-img {
            max-height: 170px;
          }
          .img-preg {
            left: 5%;
          }
          .img-plus {
            right: 5%;
          }
          .promo-floating-badge {
            width: 70px;
            height: 70px;
            font-size: 0.95rem;
            top: 20px;
            right: 20px;
          }
          .hero-container {
            grid-template-columns: 1fr;
            gap: 20px;
            text-align: center;
          }
          .hero-tag, .hero-actions, .hero-certs {
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-title {
            font-size: 2.8rem;
            line-height: 1.15;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
            font-size: 1rem;
            max-width: 95%;
            margin-bottom: 24px;
          }
          .hero-actions {
            flex-direction: column;
            gap: 12px;
            width: 100%;
            align-items: center;
          }
          .hero-actions a,
          .hero-actions button {
            width: 100%;
            max-width: 320px;
          }
          .hero-graphics-side {
            height: 250px;
            margin-top: 10px;
          }
          .graphics-circle-bg {
            display: none;
          }
          .floating-hero-img {
            max-height: 160px;
          }
          .img-purple {
            top: 10px;
            left: 15%;
            transform: rotate(-5deg) !important;
          }
          .img-orange {
            bottom: 10px;
            right: 15%;
            transform: rotate(8deg) !important;
          }
          .floating-bubble {
            width: 36px;
            height: 36px;
            font-size: 1.1rem;
          }
          .bubble-1 { top: 0px; right: 20%; }
          .bubble-2 { bottom: 40px; left: 10%; }
          .bubble-3 { display: none; }
          .bubble-4 { bottom: 10px; right: 20%; }
          
          .product-grid-3 {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .mixer-container {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }
          .mixer-toggles {
            justify-content: center;
          }
          .pill-mixer-wrapper {
            height: 160px;
          }
          .liquid-pill {
            width: 80px;
            height: 140px;
          }
          .quiz-callout-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .quiz-callout-btn {
            margin: 0 auto;
          }
          .quiz-callout-illustration {
            display: none;
          }
        }

        /* Lifestyle Gallery Section */
        .lifestyle-gallery-section {
          padding: 80px 0;
          background-color: var(--color-bg-base);
          border-bottom: 1px solid var(--color-border);
        }
        
        .text-center {
          text-align: center;
          margin-bottom: 48px;
        }
        
        .lifestyle-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
          background-color: var(--color-preg-secondary);
          padding: 4px 14px;
          border-radius: var(--radius-full);
        }
        
        .lifestyle-title {
          font-size: 2.5rem;
          color: var(--color-text-dark);
          margin-bottom: 12px;
        }
        
        .lifestyle-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }
        
        .lifestyle-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        
        .lifestyle-card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          transition: var(--transition-bounce);
        }
        
        .lifestyle-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-preg-accent);
        }
        
        .lifestyle-img-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
        }
        
        .lifestyle-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .lifestyle-card:hover .lifestyle-img {
          transform: scale(1.05);
        }
        
        .lifestyle-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(44, 37, 51, 0.9) 0%, rgba(44, 37, 51, 0.4) 60%, rgba(44, 37, 51, 0) 100%);
          padding: 24px;
          color: var(--color-white);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 100%;
          transition: var(--transition-smooth);
        }
        
        .overlay-tag {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-pregplus-secondary);
          margin-bottom: 6px;
        }
        
        .overlay-title {
          font-size: 1.25rem;
          color: var(--color-white);
          margin-bottom: 6px;
        }
        
        .overlay-desc {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.4;
          margin: 0;
        }

        @media (max-width: 968px) {
          .lifestyle-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .lifestyle-img-wrapper {
            height: 300px;
          }
        }

        @media (max-width: 580px) {
          .lifestyle-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 16px;
            padding: 0 24px 24px;
            margin: 0 -24px;
            scrollbar-width: none;
          }
          .lifestyle-grid::-webkit-scrollbar {
            display: none;
          }
          .lifestyle-card {
            flex: 0 0 280px;
            scroll-snap-align: start;
          }
          .lifestyle-img-wrapper {
            height: 340px;
          }
        }

        /* Dramatic Scroll-Driven Fly-in Section (Now Lemme-style 'current faves' carousel) */
        .dramatic-flyin-section {
          background: linear-gradient(135deg, #f3edf8 0%, #edf2f9 50%, #fcf5f8 100%);
          padding: 100px 0 120px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        
        .carousel-section-title {
          font-family: var(--font-serif);
          font-size: 3.75rem;
          font-weight: 400;
          color: var(--color-text-dark);
          margin-bottom: 50px;
          text-transform: lowercase;
          letter-spacing: -0.01em;
        }
        
        .carousel-container {
          width: 100%;
          overflow: hidden;
          padding: 10px 0;
        }
        
        .product-carousel {
          display: flex;
          gap: 60px;
          width: max-content;
          animation: scroll-carousel 25s linear infinite;
        }
        
        .product-carousel:hover {
          animation-play-state: paused;
        }
        
        .carousel-card {
          flex: 0 0 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          border-radius: 24px;
          padding: 30px 24px;
          transition: var(--transition-bounce);
          box-shadow: var(--shadow-sm);
          position: relative;
          overflow: hidden;
        }

        .carousel-card.card-omg { background: linear-gradient(135deg, #58d68d 0%, var(--color-accent-green) 100%); }
        .carousel-card.card-pregnancy { background: linear-gradient(135deg, #a569bd 0%, var(--color-preg-primary) 100%); }
        .carousel-card.card-pregnancy-plus { background: linear-gradient(135deg, #f5b041 0%, var(--color-pregplus-primary) 100%); }
        .carousel-card.card-proman { background: linear-gradient(135deg, #5dade2 0%, var(--color-blue-primary) 100%); }
        .carousel-card.card-prowoman-young { background: linear-gradient(135deg, #f48fb1 0%, var(--color-pink-primary) 100%); }
        
        .carousel-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: var(--shadow-hover);
        }
        
        .carousel-img-wrapper {
          position: relative;
          width: 180px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        
        .carousel-img-backdrop {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          z-index: 1;
          background-color: var(--color-white);
          opacity: 0.2;
          filter: blur(10px);
          transition: transform 0.4s ease, opacity 0.4s ease;
        }

        @keyframes pulseGlow {
          0% { transform: scale(1) translate(0px, 0px) rotate(0deg); opacity: 0.45; }
          50% { transform: scale(1.15) translate(15px, -15px) rotate(3deg); opacity: 0.65; }
          100% { transform: scale(1) translate(0px, 0px) rotate(0deg); opacity: 0.45; }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .carousel-item-img {
          position: relative;
          z-index: 2;
          max-height: 160px;
          object-fit: contain;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.25));
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .carousel-card:hover .carousel-item-img {
          transform: translateY(-8px) scale(1.04);
        }
        
        .carousel-card:hover .carousel-img-backdrop {
          transform: scale(1.1);
          opacity: 0.3;
        }
        
        .carousel-item-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.85);
          background-color: rgba(255, 255, 255, 0.15);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 12px;
        }

        .carousel-item-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--color-white);
          margin-bottom: 8px;
          text-transform: uppercase;
          max-width: 280px;
          line-height: 1.3;
        }
        
        .carousel-item-subtitle {
          font-family: var(--font-primary);
          font-size: 0.82rem;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 18px;
          font-weight: 400;
          max-width: 270px;
        }

        .carousel-item-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }
        
        .carousel-item-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.8rem;
          line-height: 1.3;
          color: rgba(255, 255, 255, 0.95);
        }
        
        .bullet-icon-sparkle {
          color: var(--color-white);
          opacity: 0.9;
          margin-top: 2px;
        }

        .carousel-item-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 18px;
        }
        
        .carousel-item-size {
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .btn-carousel-shop {
          background-color: var(--color-white);
          font-weight: 700;
          border: none;
          padding: 8px 18px;
          font-size: 0.8rem;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .btn-carousel-shop:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }
        
        @keyframes scroll-carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @media (max-width: 768px) {
          .hero-wave {
            display: block; /* shown on mobile */
          }
          .carousel-section-title {
            font-size: 2.8rem;
            margin-bottom: 30px;
          }
          .dramatic-flyin-section {
            padding: 60px 0;
          }
          .carousel-card {
            flex: 0 0 280px;
            padding: 24px 16px;
          }
          .carousel-img-wrapper {
            width: 150px;
            height: 150px;
            margin-bottom: 12px;
          }
          .carousel-img-backdrop {
            width: 120px;
            height: 120px;
          }
          .carousel-item-img {
            max-height: 120px;
          }
          .carousel-item-title {
            font-size: 1rem;
            max-width: 240px;
          }
          .carousel-item-subtitle {
            font-size: 0.78rem;
            margin-bottom: 12px;
          }
          .carousel-item-bullet-item {
            font-size: 0.75rem;
          }
          .carousel-item-bullets {
            margin-bottom: 16px;
            gap: 4px;
          }
        }
      `}</style>
    </div>
  );
}
