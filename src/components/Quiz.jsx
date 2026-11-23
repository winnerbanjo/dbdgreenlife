import { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';
import { PRODUCTS_BY_ID } from '../data/products';

const questions = [
  {
    id: 1,
    title: "What is your main health priority right now?",
    subtitle: "Select the area that best describes your life stage or daily wellness focus.",
    options: [
      { label: "Healthy Pregnancy & Prenatal Nutrition", value: "pregnancy", icon: "🌸" },
      { label: "Women's Daily Cycle Balance & Skin (18–40)", value: "womens-young", icon: "✨" },
      { label: "Women's 40+ Menopause Comfort & Bone Mobility", value: "womens-40", icon: "💗" },
      { label: "Men's Everyday Stamina, Energy & Focus", value: "mens-proman", icon: "⚡" },
      { label: "Male Reproductive Vitality & Performance", value: "mens-xproman", icon: "💙" },
      { label: "Full-Spectrum Omega for Weight, Heart & Skin", value: "omg", icon: "💚" },
      { label: "Foundational Daily Wellness Multivitamin & Minerals", value: "wellness", icon: "🌿" }
    ]
  },
  {
    id: 2,
    title: "For prenatal care, do you prefer a single-softgel routine or a twin-pack with Omega-3 DHA?",
    subtitle: "DHA contributes to normal foetal brain and eye development.",
    options: [
      { label: "Single Softgel: Multivitamins, Iron, Folic Acid & Inositol (30 Softgels)", value: "pregnancy-single", icon: "💜" },
      { label: "Twin-Pack Duo: Prenatal Essentials + 300 mg DHA / 75 mg EPA (60 Softgels)", value: "pregnancy-plus", icon: "🧡" }
    ]
  },
  {
    id: 3,
    title: "What packaging format best matches your daily routine?",
    subtitle: "All Day by Day formulations are engineered for clean absorption without artificial fillers.",
    options: [
      { label: "Convenient monthly 30-day single supply", value: "single-pack", icon: "💊" },
      { label: "Comprehensive 60-count dual-action twin-pack (30 + 30)", value: "twin-pack", icon: "✨" },
      { label: "Show best formulation recommendation based on my health goals", value: "neutral", icon: "🔬" }
    ]
  }
];

export default function Quiz({ onClose, onProductClick, onShopRedirect }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (questionId === 1 && value !== 'pregnancy') {
      // Non-pregnancy priorities skip prenatal question 2 and go straight to question 3
      setCurrentStep(2);
    } else if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const getRecommendation = () => {
    const mainGoal = answers[1];
    const prenatalChoice = answers[2];

    if (mainGoal === 'pregnancy') {
      if (prenatalChoice === 'pregnancy-plus') {
        return {
          product: PRODUCTS_BY_ID['pregnancy-plus'],
          reason: 'Matches your priority for comprehensive prenatal care paired with 300 mg DHA and 75 mg EPA fish oil for foetal cognitive development.',
          compareWith: PRODUCTS_BY_ID['pregnancy']
        };
      }
      return {
        product: PRODUCTS_BY_ID['pregnancy'],
        reason: 'Matches your goal for complete foundational prenatal nutrition in a single daily softgel with 600 mcg Folic Acid, 18 mg Iron, and Inositol.',
        compareWith: PRODUCTS_BY_ID['pregnancy-plus']
      };
    }

    if (mainGoal === 'womens-young') {
      return {
        product: PRODUCTS_BY_ID['prowoman-young'],
        reason: 'Tailored for adult women (18–40) seeking cycle comfort, skin and hair radiance, and daily stamina with Dong Quai and Omega 3-5-6-7-9.',
        compareWith: PRODUCTS_BY_ID['prowoman-40-plus']
      };
    }

    if (mainGoal === 'womens-40') {
      return {
        product: PRODUCTS_BY_ID['prowoman-40-plus'],
        reason: 'Engineered specifically for women 40+ focusing on menopause comfort, bone health, mobility, and skin suppleness with 50 active nutrients.',
        compareWith: PRODUCTS_BY_ID['prowoman-young']
      };
    }

    if (mainGoal === 'mens-proman') {
      return {
        product: PRODUCTS_BY_ID['proman'],
        reason: 'Formulated for men seeking daily stamina, mental focus, and cardiovascular support with CoQ10, L-Carnitine, Ginseng, and Omega 3-5-6-7-9.',
        compareWith: PRODUCTS_BY_ID['x-proman']
      };
    }

    if (mainGoal === 'mens-xproman') {
      return {
        product: PRODUCTS_BY_ID['x-proman'],
        reason: 'Specialised male performance formula with 8 reproductive and libido actives (Maca, Tribulus, Citrulline, Horny Goat Weed) and full Omega.',
        compareWith: PRODUCTS_BY_ID['proman']
      };
    }

    if (mainGoal === 'omg') {
      return {
        product: PRODUCTS_BY_ID['omg'],
        reason: 'Full-spectrum Omega 3-5-6-7-9 with cold-pressed coconut, avocado, grape seed and rice bran oils for weight management, skin glow, and cellular defense.',
        compareWith: PRODUCTS_BY_ID['wellness']
      };
    }

    // Default to general daily wellness
    return {
      product: PRODUCTS_BY_ID['wellness'],
      reason: 'Delivers 34 vital micronutrients including vitamins, minerals, amino acids, and Ginseng for daily stress support and energy metabolism.',
      compareWith: PRODUCTS_BY_ID['omg']
    };
  };

  const recommendation = getRecommendation();
  const primaryProduct = recommendation.product || PRODUCTS_BY_ID['pregnancy'];
  const comparisonProduct = recommendation.compareWith;

  const totalSteps = answers[1] && answers[1] !== 'pregnancy' ? 2 : questions.length;
  const currentStepDisplay = currentStep === 2 && answers[1] && answers[1] !== 'pregnancy' ? 2 : currentStep + 1;
  const progressPercent = (currentStepDisplay / totalSteps) * 100;

  return (
    <div className="quiz-overlay" onClick={onClose}>
      <div className="quiz-modal animate-slide-up" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="quiz-close-btn" onClick={onClose} aria-label="Close Quiz">
          <X size={20} />
        </button>

        {/* Progress Bar */}
        <div className="quiz-progress-container">
          <div className="quiz-progress-bar" style={{ width: `${progressPercent}%` }}></div>
        </div>

        {!showResult ? (
          <div className="quiz-step-content">
            <div className="quiz-step-indicator-row">
              <span className="quiz-step-indicator">Question {currentStepDisplay} of {totalSteps}</span>
              {currentStep > 0 && (
                <button className="quiz-back-btn" onClick={() => setCurrentStep(0)}>
                  <ArrowLeft size={14} style={{ marginRight: '4px' }} />
                  Back
                </button>
              )}
            </div>
            
            <h2 className="quiz-question-title">{questions[currentStep].title}</h2>
            <p className="quiz-question-sub">{questions[currentStep].subtitle}</p>

            <div className="quiz-options-list">
              {questions[currentStep].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect(questions[currentStep].id, option.value)}
                  className="quiz-option-btn"
                >
                  <span className="option-icon">{option.icon}</span>
                  <span className="option-label">{option.label}</span>
                  <span className="option-checkmark">
                    <Check size={14} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="quiz-result-content">
            <div className="result-header">
              <Sparkles size={24} className="result-sparkle-icon" />
              <h2 className="result-headline">Your Recommended Formulation Match</h2>
              <p className="result-sub">Reconciled to match your specific health priorities and pack format</p>
            </div>

            <div className={`result-box theme-${primaryProduct.theme || 'purple'}`}>
              <div className="result-img-side">
                <img src={primaryProduct.image} alt={primaryProduct.title} className="result-product-img" />
              </div>
              <div className="result-info-side">
                <div className="result-badges-row">
                  <span className="result-badge">Top Match</span>
                  <span className="result-group-badge">{primaryProduct.group}</span>
                </div>

                <h3 className="result-product-title">{primaryProduct.title}</h3>
                <p className="result-product-diff">{primaryProduct.differentiator}</p>
                <p className="result-reason-text"><strong>Why this fits:</strong> {recommendation.reason}</p>
                
                <div className="result-meta">
                  <div className="result-size">{primaryProduct.packSize} • {primaryProduct.ingredientCount} Actives</div>
                  {primaryProduct.hasConfirmedPrice && (
                    <div className="result-price">{primaryProduct.price}</div>
                  )}
                </div>

                <div className="result-reg-line">
                  NAFDAC Reg. No.: <strong>{primaryProduct.nafdacDisplay}</strong>
                  {primaryProduct.isNafdacPending && ' (Confirmation Pending)'}
                </div>

                <div className="result-actions">
                  {primaryProduct.hasConfirmedPrice ? (
                    <button 
                      className="btn-round btn-result-buy"
                      onClick={() => onShopRedirect(primaryProduct.id)}
                    >
                      Purchase Formulation
                      <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                    </button>
                  ) : (
                    <button 
                      className="btn-round btn-result-buy"
                      onClick={() => {
                        onClose();
                        onProductClick(primaryProduct.id);
                      }}
                    >
                      View Full Specifications
                      <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                    </button>
                  )}
                  
                  <button 
                    className="btn-round btn-outline btn-result-detail"
                    onClick={() => {
                      onClose();
                      onProductClick(primaryProduct.id);
                    }}
                  >
                    View Ingredients Panel
                  </button>
                </div>
              </div>
            </div>

            {/* Compare With Alternate Variant Card */}
            {comparisonProduct && (
              <div className="result-comparison-block">
                <h4 className="compare-title">Also Consider Comparing:</h4>
                <div 
                  className="compare-card"
                  onClick={() => {
                    onClose();
                    onProductClick(comparisonProduct.id);
                  }}
                >
                  <img src={comparisonProduct.image} alt={comparisonProduct.title} className="compare-img" />
                  <div className="compare-info">
                    <span className="compare-name">{comparisonProduct.title}</span>
                    <span className="compare-diff">{comparisonProduct.differentiator}</span>
                  </div>
                  <button className="btn-compare-action">
                    Compare <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            <div className="result-footer">
              <p>Looking for a different wellness target? <button onClick={resetQuiz} className="btn-retake">Retake Quiz</button></p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .quiz-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(44, 37, 51, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .quiz-modal {
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 820px;
          box-shadow: var(--shadow-hover);
          overflow: hidden;
          position: relative;
          padding: 36px 40px;
          max-height: 90vh;
          overflow-y: auto;
        }

        .quiz-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          color: var(--color-text-muted);
          background: none;
          border: none;
          cursor: pointer;
        }

        .quiz-close-btn:hover {
          color: var(--color-text-dark);
        }

        .quiz-progress-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background-color: var(--color-bg-base);
        }

        .quiz-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--color-preg-primary) 0%, var(--color-pregplus-primary) 100%);
          transition: width 0.3s ease;
        }

        .quiz-step-indicator-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .quiz-step-indicator {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .quiz-back-btn {
          display: inline-flex;
          align-items: center;
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
        }
        .quiz-back-btn:hover {
          color: var(--color-text-dark);
        }

        .quiz-question-title {
          font-size: 1.65rem;
          color: var(--color-text-dark);
          margin-bottom: 8px;
          line-height: 1.25;
        }

        .quiz-question-sub {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          margin-bottom: 24px;
          line-height: 1.4;
        }

        .quiz-options-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .quiz-option-btn {
          display: flex;
          align-items: center;
          padding: 12px 18px;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          background-color: var(--color-bg-base);
          text-align: left;
          cursor: pointer;
          transition: var(--transition-smooth);
          gap: 14px;
        }

        .quiz-option-btn:hover {
          border-color: var(--color-preg-primary);
          background-color: var(--color-white);
          transform: translateX(4px);
        }

        .option-icon {
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .option-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-dark);
          flex: 1;
        }

        .option-checkmark {
          width: 22px;
          height: 22px;
          border-radius: var(--radius-full);
          border: 1.5px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: transparent;
          flex-shrink: 0;
        }

        .quiz-option-btn:hover .option-checkmark {
          border-color: var(--color-preg-primary);
          color: var(--color-preg-primary);
        }

        /* Result Content */
        .result-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .result-sparkle-icon {
          color: var(--color-pregplus-primary);
          margin-bottom: 8px;
        }

        .result-headline {
          font-size: 1.75rem;
          color: var(--color-text-dark);
          margin-bottom: 6px;
        }

        .result-sub {
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }

        .result-box {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 28px;
          background-color: var(--color-bg-base);
          border-radius: var(--radius-lg);
          padding: 24px;
          border: 1.5px solid var(--color-border);
          margin-bottom: 24px;
          align-items: center;
        }

        .result-img-side {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          padding: 16px;
          height: 220px;
        }

        .result-product-img {
          max-height: 190px;
          max-width: 100%;
          object-fit: contain;
        }

        .result-badges-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .result-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          background-color: var(--color-accent-green-light);
          color: var(--color-accent-green);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .result-group-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          color: var(--color-text-dark);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .result-product-title {
          font-size: 1.4rem;
          color: var(--color-text-dark);
          margin-bottom: 4px;
        }

        .result-product-diff {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          margin-bottom: 8px;
          font-weight: 500;
        }

        .result-reason-text {
          font-size: 0.84rem;
          color: var(--color-text-dark);
          background-color: var(--color-white);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--color-preg-primary);
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .result-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .result-size {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-text-dark);
        }

        .result-price {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-preg-primary);
        }

        .result-reg-line {
          font-size: 0.76rem;
          color: var(--color-text-muted);
          margin-bottom: 16px;
        }

        .result-actions {
          display: flex;
          gap: 10px;
        }

        .btn-result-buy {
          background-color: var(--color-preg-primary);
          color: var(--color-white);
          padding: 10px 18px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
        }

        .btn-result-detail {
          padding: 10px 18px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }

        /* Comparison block */
        .result-comparison-block {
          background-color: var(--color-white);
          border: 1px dashed var(--color-border);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          margin-bottom: 20px;
        }

        .compare-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .compare-card {
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
        }

        .compare-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .compare-info {
          flex: 1;
        }

        .compare-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--color-text-dark);
          display: block;
        }

        .compare-diff {
          font-size: 0.78rem;
          color: var(--color-text-muted);
        }

        .btn-compare-action {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          background: none;
          border: none;
          cursor: pointer;
        }

        .result-footer {
          text-align: center;
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .btn-retake {
          background: none;
          border: none;
          color: var(--color-preg-primary);
          font-weight: 700;
          cursor: pointer;
          text-decoration: underline;
        }

        @media (max-width: 680px) {
          .result-box {
            grid-template-columns: 1fr;
          }
          .result-img-side {
            height: 160px;
          }
          .result-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
