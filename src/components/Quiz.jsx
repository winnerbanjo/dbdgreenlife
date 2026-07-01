import { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

const questions = [
  {
    id: 1,
    title: "What is your main health focus right now?",
    subtitle: "Select the option that matches your current health priority.",
    options: [
      { label: "Healthy Pregnancy & Prenatal Care", value: "pregnancy", icon: "🌸" },
      { label: "General Daily Vitality & Skin Glow", value: "general", icon: "✨" },
      { label: "Weight Management & Energy", value: "weight", icon: "⚡" },
      { label: "Men's Daily Energy & Stamina", value: "mens", icon: "💙" },
      { label: "Women's Daily Balance & Glow (Non-Prenatal)", value: "womens-young", icon: "💗" }
    ]
  },
  {
    id: 2,
    title: "Are you looking for standard prenatal support, or premium double-pack support with Omega-3 DHA/EPA?",
    subtitle: "DHA supports the baby's cognitive, brain, and eye development.",
    options: [
      { label: "Standard Prenatal Support (Multivitamin, Multimineral + Probiotics)", value: "standard", icon: "💜" },
      { label: "Premium Plus Support (Multivitamin + Omega-3 Twin Pack)", value: "plus", icon: "🧡" }
    ]
  },
  {
    id: 3,
    title: "Do you have any dietary preferences or specific needs?",
    subtitle: "All our formulations feature clinical-grade softgels designed for easy absorption.",
    options: [
      { label: "Easy-to-swallow softgels", value: "softgel", icon: "💊" },
      { label: "Clinically backed and purity tested by Greenlife", value: "purity", icon: "🔬" },
      { label: "No preferences, just show my recommendation", value: "none", icon: "✨" }
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

    if (questionId === 1 && (value === 'general' || value === 'weight' || value === 'mens' || value === 'womens-young')) {
      // Skip question 2 (pregnancy standard/plus) and go directly to question 3
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

  // Determine recommendation based on answers
  const getRecommendation = () => {
    if (answers[1] === 'mens') {
      return {
        id: 'proman',
        title: "PROMAN",
        subtitle: "Men's Vitality & Peak Performance",
        desc: "A high-performance formulation designed specifically for men. Combines daily essential multivitamins with a high-potency Omega 3-5-6-7-9 softgel to support physical endurance, daily stamina, heart health, and sharp cognitive focus.",
        color: "blue",
        theme: "blue",
        image: "/assets/proman.png",
        price: "₦18,500",
        size: "60 Softgels (Twin Pack)"
      };
    }

    if (answers[1] === 'womens-young') {
      return {
        id: 'prowoman-young',
        title: "PROWOMAN YOUNG",
        subtitle: "Women's Wellness & Hormonal Balance",
        desc: "Designed for young women looking for everyday support. Features essential daily multivitamins paired with active Safflower Oil and Omegas 3-5-6-7-9 to optimize energy, clear skin glow, hair health, and comfortable cycles.",
        color: "pink",
        theme: "pink",
        image: "/assets/prowoman-young.png",
        price: "₦18,500",
        size: "60 Softgels (Twin Pack)"
      };
    }

    if (answers[1] === 'general' || answers[1] === 'weight') {
      return {
        id: 'omg',
        title: "OMG",
        subtitle: "Complete Spectrum Omega & Botanical Glow",
        desc: "A premium botanical blend of cold-pressed virgin coconut, avocado, grape seed, and rice bran oils containing Omegas 3, 5, 6, 7, and 9 + key vitamins. Synthesized for skin glow, energy metabolism, and weight management.",
        color: "green",
        theme: "green",
        image: "/assets/omg-box.png",
        price: "₦14,500",
        size: "30 Softgels"
      };
    }

    if (answers[2] === 'plus') {
      return {
        id: 'pregnancy-plus',
        title: "Wellness Pregnancy Plus",
        subtitle: "Advanced Prenatal & Omega Twin Pack",
        desc: "The ultimate dual-capsule formulation containing 30 prenatal softgels plus 30 high-potency Omega 3-6-9 softgels. Specially designed for advanced cognitive, brain, and healthy birth weight support.",
        color: "orange",
        theme: "orange",
        image: "/assets/pregnancy-plus-detail-view.png",
        price: "₦18,500",
        size: "60 Softgels (Twin Pack)"
      };
    } else {
      return {
        id: 'pregnancy',
        title: "Wellness Pregnancy",
        subtitle: "Comprehensive Prenatal Care",
        desc: "A premium formulation of 30 softgels containing essential multivitamins, minerals, L-Lysine, L-Arginine, and active Probiotics. Supports brain development, skeletal formation, and digestive health.",
        color: "purple",
        theme: "purple",
        image: "/assets/pregnancy-detail-view.png",
        price: "₦12,500",
        size: "30 Softgels"
      };
    }
  };

  const recommendation = getRecommendation();
  const progressPercent = ((currentStep + (showResult ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="quiz-overlay">
      <div className="quiz-modal animate-slide-up">
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
            <span className="quiz-step-indicator">Question {currentStep === 2 && (answers[1] === 'general' || answers[1] === 'weight' || answers[1] === 'mens' || answers[1] === 'womens-young') ? 2 : currentStep + 1} of {answers[1] === 'general' || answers[1] === 'weight' || answers[1] === 'mens' || answers[1] === 'womens-young' ? 2 : questions.length}</span>
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
              <h2 className="result-headline">Your Personalized Supplement Match</h2>
              <p className="result-sub">Formulated by Greenlife Clinical Advisory Board</p>
            </div>

            <div className={`result-box ${recommendation.theme}`}>
              <div className="result-img-side">
                <img src={recommendation.image} alt={recommendation.title} className="result-product-img" />
              </div>
              <div className="result-info-side">
                <span className="result-badge">Perfect Match</span>
                <h3 className="result-product-title">{recommendation.title}</h3>
                <h4 className="result-product-subtitle">{recommendation.subtitle}</h4>
                <p className="result-product-desc">{recommendation.desc}</p>
                
                <div className="result-meta">
                  <div className="result-size" style={{ fontSize: '1rem', fontWeight: 700 }}>{recommendation.size}</div>
                </div>

                <div className="discount-box">
                  <ShieldCheck size={18} className="discount-icon" />
                  <span>Use code <strong>DAYBYDAY10</strong> for 10% off your purchase.</span>
                </div>

                <div className="result-actions">
                  <button 
                    className={`btn-round btn-result-buy`}
                    onClick={() => onShopRedirect(recommendation.id)}
                  >
                    Get it Now
                    <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                  </button>
                  
                  <button 
                    className="btn-round btn-outline btn-result-detail"
                    onClick={() => onProductClick(recommendation.id)}
                  >
                    View Formula Science
                  </button>
                </div>
              </div>
            </div>

            <div className="result-footer">
              <p>Not what you were looking for? <button onClick={resetQuiz} className="btn-retake">Retake the Quiz</button></p>
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
          max-width: 800px;
          box-shadow: var(--shadow-hover);
          overflow: hidden;
          position: relative;
          padding: 40px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }
        
        .quiz-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          color: var(--color-text-muted);
          background-color: var(--color-bg-base);
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border);
          z-index: 10;
        }
        
        .quiz-close-btn:hover {
          background-color: var(--color-text-dark);
          color: var(--color-white);
        }
        
        /* Progress Bar */
        .quiz-progress-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background-color: var(--color-border);
        }
        
        .quiz-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--color-preg-primary) 0%, var(--color-pregplus-primary) 100%);
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Steps Content */
        .quiz-step-content {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        
        .quiz-step-indicator {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }
        
        .quiz-question-title {
          font-size: 1.85rem;
          color: var(--color-text-dark);
          margin-bottom: 8px;
        }
        
        .quiz-question-sub {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          margin-bottom: 30px;
        }
        
        .quiz-options-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .quiz-option-btn {
          display: flex;
          align-items: center;
          background-color: var(--color-bg-base);
          border: 2px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 18px 24px;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-text-dark);
          text-align: left;
          transition: var(--transition-bounce);
          position: relative;
        }
        
        .option-icon {
          font-size: 1.5rem;
          margin-right: 16px;
        }
        
        .option-label {
          flex: 1;
        }
        
        .option-checkmark {
          width: 24px;
          height: 24px;
          border-radius: var(--radius-full);
          border: 2px solid var(--color-border);
          background-color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          color: transparent;
          transition: var(--transition-smooth);
        }
        
        .quiz-option-btn:hover {
          border-color: var(--color-preg-primary);
          background-color: var(--color-preg-light);
          transform: translateX(5px);
        }
        
        .quiz-option-btn:active {
          transform: translateX(2px);
        }
        
        /* Result Screen Styles */
        .quiz-result-content {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }
        
        .result-header {
          text-align: center;
          margin-bottom: 24px;
        }
        
        .result-sparkle-icon {
          color: var(--color-accent-yellow);
          margin-bottom: 8px;
          animation: pulse 1.5s infinite;
        }
        
        .result-headline {
          font-size: 1.85rem;
          color: var(--color-text-dark);
        }
        
        .result-sub {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }
        
        .result-box {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 32px;
          background-color: var(--color-bg-base);
          border-radius: var(--radius-lg);
          padding: 30px;
          border: 2px solid transparent;
        }
        
        .result-box.purple {
          background-color: var(--color-preg-light);
          border-color: var(--color-preg-secondary);
        }
        
        .result-box.orange {
          background-color: var(--color-pregplus-light);
          border-color: var(--color-pregplus-secondary);
        }
        
        .result-box.green {
          background-color: var(--color-accent-green-light);
          border-color: var(--color-border);
        }
        
        .result-box.blue {
          background-color: var(--color-blue-light);
          border-color: var(--color-blue-secondary);
        }
        
        .result-box.pink {
          background-color: var(--color-pink-light);
          border-color: var(--color-pink-secondary);
        }
        
        .result-img-side {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          padding: 10px;
          box-shadow: var(--shadow-sm);
        }
        
        .result-product-img {
          max-height: 240px;
          object-fit: contain;
        }
        
        .result-info-side {
          display: flex;
          flex-direction: column;
        }
        
        .result-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background-color: var(--color-white);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          width: fit-content;
          margin-bottom: 12px;
          box-shadow: var(--shadow-sm);
        }
        
        .purple .result-badge { color: var(--color-preg-primary); }
        .orange .result-badge { color: var(--color-pregplus-primary); }
        .green .result-badge { color: var(--color-accent-green); }
        .blue .result-badge { color: var(--color-blue-primary); }
        .pink .result-badge { color: var(--color-pink-primary); }
        
        .result-product-title {
          font-size: 1.65rem;
          color: var(--color-text-dark);
          line-height: 1.2;
        }
        
        .result-product-subtitle {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text-muted);
          margin-bottom: 12px;
        }
        
        .result-product-desc {
          font-size: 0.88rem;
          color: var(--color-text-dark);
          line-height: 1.4;
          margin-bottom: 16px;
        }
        
        .result-meta {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 16px;
        }
        
        .result-price {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-text-dark);
        }
        
        .result-size {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }
        
        .discount-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--color-white);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          font-size: 0.82rem;
          color: var(--color-text-dark);
          border: 1px solid var(--color-border);
          margin-bottom: 20px;
        }
        
        .discount-icon {
          color: var(--color-accent-green);
          flex-shrink: 0;
        }
        
        .result-actions {
          display: flex;
          gap: 12px;
        }
        
        .btn-result-buy {
          flex: 1.2;
          padding: 12px 20px;
          color: var(--color-white);
        }
        
        .purple .btn-result-buy { background-color: var(--color-preg-primary); }
        .purple .btn-result-buy:hover { background-color: var(--color-preg-dark); }
        .orange .btn-result-buy { background-color: var(--color-pregplus-primary); }
        .orange .btn-result-buy:hover { background-color: var(--color-pregplus-dark); }
        .green .btn-result-buy { background-color: var(--color-accent-green); }
        .green .btn-result-buy:hover { background-color: #2c855a; }
        .blue .btn-result-buy { background-color: var(--color-blue-primary); }
        .blue .btn-result-buy:hover { background-color: var(--color-blue-dark); }
        .pink .btn-result-buy { background-color: var(--color-pink-primary); }
        .pink .btn-result-buy:hover { background-color: var(--color-pink-dark); }
        
        .btn-result-detail {
          flex: 1;
          font-size: 0.85rem;
          padding: 12px 16px;
          border-color: var(--color-border);
          background-color: var(--color-white);
        }
        
        .btn-result-detail:hover {
          background-color: var(--color-bg-base);
          border-color: var(--color-text-dark);
        }
        
        .result-footer {
          text-align: center;
          margin-top: 24px;
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }
        
        .btn-retake {
          font-weight: 700;
          color: var(--color-preg-primary);
          text-decoration: underline;
        }
        
        /* Animations */
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-slide-up {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .quiz-modal {
            padding: 24px;
          }
          .result-box {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px;
          }
          .result-actions {
            flex-direction: column;
          }
          .quiz-question-title {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div>
  );
}
