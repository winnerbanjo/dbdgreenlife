import React, { useState, useEffect } from 'react';
import BenefitGrid from '../components/BenefitGrid';
import ProductCard from '../components/ProductCard';
import ScienceSection from '../components/ScienceSection';
import { Sparkles, ArrowRight, Pill, Award, Sliders, CheckCircle2 } from 'lucide-react';

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
  }
];

export default function Home({ onProductClick, onShopRedirect, onOpenQuiz }) {
  const [activeBenefit, setActiveBenefit] = useState('all');
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

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

  const filteredProducts = activeBenefit === 'all' 
    ? productsData 
    : productsData.filter(p => p.benefitType === activeBenefit);

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
        price: '₦14,500'
      });
    } else if (updated.brain && updated.iron) {
      setMixResult({
        id: 'pregnancy-plus',
        name: 'Wellness Pregnancy Plus 🧡',
        color: 'linear-gradient(135deg, var(--color-pregplus-secondary) 0%, var(--color-pregplus-primary) 100%)',
        badge: 'Premium Prenatal Support + DHA',
        price: '₦18,500'
      });
    } else {
      setMixResult({
        id: 'pregnancy',
        name: 'Wellness Pregnancy 💜',
        color: 'linear-gradient(135deg, var(--color-preg-secondary) 0%, var(--color-preg-primary) 100%)',
        badge: 'Complete Essential Prenatal Care',
        price: '₦12,500'
      });
    }
  };

  return (
    <div className="home-page" onMouseMove={handleMouseMove}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container container">
          <div className="hero-text-side">
            <div className="hero-tag">
              <Pill size={14} className="hero-tag-icon" />
              <span>Greenlife Premium Formulas</span>
            </div>
            <h1 className="hero-title">
              Wellness in Every <span className="highlight">Softgel.</span>
            </h1>
            <p className="hero-subtitle">
              Day by Day Wellness combines bold lifestyle aesthetics with the clinical authority of Greenlife Pharmaceuticals. Interactive, bioavailable, and NAFDAC certified.
            </p>
            <div className="hero-actions">
              <a href="#products-section" className="btn-round btn-purple">
                Shop Our Launch Trio
                <ArrowRight size={16} style={{ marginLeft: '6px' }} />
              </a>
              <button className="btn-round btn-outline btn-hero-quiz" onClick={onOpenQuiz}>
                Take the Bestie Quiz 💅
              </button>
            </div>
            
            <div className="hero-certs">
              <div className="cert-item">
                <CheckCircle2 size={18} className="cert-icon" />
                <span>NAFDAC Approved Formulas</span>
              </div>
              <div className="cert-item">
                <CheckCircle2 size={18} className="cert-icon" />
                <span>Purity Batch Tested</span>
              </div>
            </div>
          </div>

          <div className="hero-graphics-side">
            <div className="graphics-circle-bg purple" style={{ transform: `translate(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px)` }}></div>
            <div className="graphics-circle-bg orange" style={{ transform: `translate(${parallaxOffset.x * -0.3}px, ${parallaxOffset.y * -0.3}px)` }}></div>
            
            {/* Parallax Floating Boxes */}
            <img 
              src="/assets/omg-hero.png" 
              alt="OMG Softgels" 
              className="floating-hero-img img-purple"
              style={{ transform: `translate(${parallaxOffset.x * 0.8}px, ${parallaxOffset.y * 0.8}px) rotate(${-10 + parallaxOffset.x * 0.2}deg)` }}
            />
            <img 
              src="/assets/pregnancy-plus-hero.png" 
              alt="Pregnancy Plus Softgels" 
              className="floating-hero-img img-orange"
              style={{ transform: `translate(${parallaxOffset.x * -0.6}px, ${parallaxOffset.y * -0.6}px) rotate(${12 + parallaxOffset.y * -0.2}deg)` }}
            />

            {/* Parallax Emojis */}
            <div className="floating-bubble bubble-1" style={{ transform: `translate(${parallaxOffset.x * 1.2}px, ${parallaxOffset.y * 1.2}px)` }}>🤰</div>
            <div className="floating-bubble bubble-2" style={{ transform: `translate(${parallaxOffset.x * -1.5}px, ${parallaxOffset.y * -1.5}px)` }}>✨</div>
            <div className="floating-bubble bubble-3" style={{ transform: `translate(${parallaxOffset.x * 0.9}px, ${parallaxOffset.y * -0.9}px)` }}>💊</div>
            <div className="floating-bubble bubble-4" style={{ transform: `translate(${parallaxOffset.x * -1.1}px, ${parallaxOffset.y * 1.1}px)` }}>💚</div>
          </div>
        </div>
        
        {/* Wavy Divider */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,1120,120C960,120,800,120,800,120C640,120,480,120,480,120C320,120,160,120,80,120L0,120Z" fill="#fafaf9"></path>
          </svg>
        </div>
      </section>

      {/* Benefit bubble selection */}
      <BenefitGrid 
        activeBenefit={activeBenefit} 
        onSelectBenefit={handleSelectBenefit} 
      />

      {/* Product Display Section */}
      <section id="products-section" className="products-section container">
        <div className="products-section-header">
          <h2 className="products-title">Our Launch Trio</h2>
          {activeBenefit !== 'all' && (
            <button className="btn-clear-filter" onClick={() => setActiveBenefit('all')}>
              Show All Trio
            </button>
          )}
        </div>

        <div className="product-grid-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={() => onProductClick(product.id)}
              onShopNow={() => onShopRedirect(product.id)}
            />
          ))}
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
              Explore Our Launch Trio
            </a>
          </div>
          <div className="promo-image-side">
            <img src="/assets/lifestyle-hands.jpg" alt="Day by Day Launch Trio in Hands" className="promo-split-img" />
            <div className="promo-floating-badge animate-float">
              <span>NEW</span>
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
                    <span className="m-res-price">{mixResult.price}</span>
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

      {/* Lifestyle / Human Element Gallery */}
      <section className="lifestyle-gallery-section">
        <div className="container">
          <div className="text-center">
            <span className="lifestyle-badge">Day by Day Vibes</span>
            <h2 className="lifestyle-title">Real People. Real Results. 💖</h2>
            <p className="lifestyle-subtitle">
              See how the Day by Day community integrates clean wellness into active gym routines, prenatal journeys, and daily travels.
            </p>
          </div>

          <div className="lifestyle-grid">
            <div className="lifestyle-card">
              <div className="lifestyle-img-wrapper">
                <img src="/assets/lifestyle-models.jpg" alt="Glow Besties" className="lifestyle-img" />
                <div className="lifestyle-overlay">
                  <span className="overlay-tag">Community</span>
                  <h3 className="overlay-title">Glow Besties 💅</h3>
                  <p className="overlay-desc">Sharing the wellness love and daily glow with your favorites.</p>
                </div>
              </div>
            </div>

            <div className="lifestyle-card">
              <div className="lifestyle-img-wrapper">
                <img src="/assets/lifestyle-gym.jpg" alt="Active Recovery" className="lifestyle-img" />
                <div className="lifestyle-overlay">
                  <span className="overlay-tag">Active</span>
                  <h3 className="overlay-title">Active Energy ⚡</h3>
                  <p className="overlay-desc">Keeping OMG softgels close for post-workout metabolic fuel.</p>
                </div>
              </div>
            </div>

            <div className="lifestyle-card">
              <div className="lifestyle-img-wrapper">
                <img src="/assets/lifestyle-hands.jpg" alt="Everyday Rituals" className="lifestyle-img" />
                <div className="lifestyle-overlay">
                  <span className="overlay-tag">Daily Ritual</span>
                  <h3 className="overlay-title">Everyday Support 🤲</h3>
                  <p className="overlay-desc">Premium formulations made to sit beautifully in your hands.</p>
                </div>
              </div>
            </div>

            <div className="lifestyle-card">
              <div className="lifestyle-img-wrapper">
                <img src="/assets/lifestyle-travel.jpg" alt="Ready to Jetset" className="lifestyle-img" />
                <div className="lifestyle-overlay">
                  <span className="overlay-tag">Travel</span>
                  <h3 className="overlay-title">Ready to Jetset ✈️</h3>
                  <p className="overlay-desc">Your ultimate wellness companions, packed and ready for the go.</p>
                </div>
              </div>
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

      <ScienceSection />

      <style>{`
        .home-page {
          background-color: var(--color-bg-base);
          margin-top: 80px;
        }
        
        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #f3edf8 0%, #fcf7f4 100%);
          padding: 80px 0 140px;
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
          background-color: var(--color-white);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          box-shadow: var(--shadow-sm);
          width: fit-content;
          margin-bottom: 24px;
          border: 1px solid var(--color-border);
        }
        
        .hero-tag-icon {
          color: var(--color-pregplus-primary);
          margin-right: 6px;
        }
        
        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          color: var(--color-text-dark);
          margin-bottom: 20px;
        }
        
        .hero-title .highlight {
          color: var(--color-preg-primary);
          position: relative;
          display: inline-block;
        }
        
        .hero-title .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 12px;
          background-color: var(--color-preg-secondary);
          z-index: -1;
          border-radius: var(--radius-full);
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-muted);
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
          border-top: 1px solid var(--color-border);
          padding-top: 24px;
        }
        
        .cert-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-dark);
        }
        
        .cert-icon {
          color: var(--color-accent-green);
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
        
        .graphics-circle-bg.purple {
          width: 320px;
          height: 320px;
          background-color: var(--color-preg-secondary);
          top: 30px;
          left: 20px;
        }
        
        .graphics-circle-bg.orange {
          width: 280px;
          height: 280px;
          background-color: var(--color-pregplus-secondary);
          bottom: 40px;
          right: 20px;
        }
        
        .floating-hero-img {
          position: absolute;
          max-height: 300px;
          object-fit: contain;
          z-index: 2;
          filter: drop-shadow(0 20px 30px rgba(110,100,120,0.25));
          transition: transform 0.2s ease-out;
          cursor: pointer;
        }
        
        .img-purple {
          top: 30px;
          left: 20px;
        }
        
        .img-orange {
          bottom: 50px;
          right: 20px;
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
        
        .bubble-1 { top: 40px; right: 60px; }
        .bubble-2 { bottom: 140px; left: 40px; }
        .bubble-3 { top: 220px; left: 140px; }
        .bubble-4 { bottom: 30px; right: 160px; }
        
        .hero-wave {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          z-index: 10;
        }
        
        .hero-wave svg {
          width: 100%;
          height: 60px;
          display: block;
        }
        
        /* Products Catalog Section */
        .products-section {
          padding: 40px 24px 80px;
        }
        
        .products-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
          border-bottom: 2px solid var(--color-border);
          padding-bottom: 16px;
        }
        
        .products-title {
          font-size: 2rem;
          color: var(--color-text-dark);
        }
        
        .btn-clear-filter {
          font-weight: 700;
          color: var(--color-preg-primary);
          border-bottom: 2px dashed var(--color-preg-primary);
          font-size: 0.95rem;
        }
        
        .product-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        
        /* Mixer Interactive Section */
        .mixer-section {
          background-color: var(--color-white);
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
        
        .m-res-price {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--color-text-dark);
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
          background-color: var(--color-bg-base);
          padding: 40px 0;
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
          background-color: #8c42b5;
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
          color: var(--color-pregplus-secondary);
          margin-bottom: 16px;
        }
        
        .promo-heading-title {
          font-size: 3rem;
          font-family: var(--font-heading);
          font-weight: 800;
          line-height: 1.1;
          color: var(--color-white);
          margin-bottom: 24px;
        }
        
        .promo-desc-text {
          font-size: 1.15rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 36px;
        }
        
        .btn-promo-action {
          background-color: var(--color-white);
          color: #8c42b5;
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
        }
        
        .promo-split-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .promo-split-grid:hover .promo-split-img {
          transform: scale(1.03);
        }
        
        .promo-floating-badge {
          position: absolute;
          top: 30px;
          right: 40px;
          width: 80px;
          height: 80px;
          border-radius: var(--radius-full);
          background-color: #d8562a;
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: 0.05em;
          box-shadow: var(--shadow-md);
          border: 2px solid var(--color-white);
          z-index: 5;
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
            font-size: 2.2rem;
            line-height: 1.2;
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
      `}</style>
    </div>
  );
}
