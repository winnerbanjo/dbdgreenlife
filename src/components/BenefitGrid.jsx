import { Sparkles, Activity, Heart, Shield, Brain, Zap, Scale } from 'lucide-react';

const benefits = [
  {
    id: 'pregnancy-care',
    label: 'Pregnancy Care',
    color: 'purple',
    desc: 'Wellness Pregnancy & Pregnancy Plus (2)',
    icon: Sparkles,
  },
  {
    id: 'womens-daily',
    label: "Women's Daily",
    color: 'pink',
    desc: 'Prowoman Young & Prowoman 40+ (2)',
    icon: Sparkles,
  },
  {
    id: 'mens-daily',
    label: "Men's Daily",
    color: 'blue',
    desc: 'PROMAN & X-PROMAN Vitality (2)',
    icon: Zap,
  },
  {
    id: 'general-daily',
    label: 'General Daily',
    color: 'teal',
    desc: 'Day By Day Wellness (34 Nutrients)',
    icon: Activity,
  },
  {
    id: 'weight-management',
    label: 'Weight Management',
    color: 'green',
    desc: 'Day By Day OMG (Omega-7)',
    icon: Scale,
  },
  {
    id: 'brain-health',
    label: 'Brain Health',
    color: 'green',
    desc: 'Day By Day OMG (Omega-3 & 9)',
    icon: Brain,
  },
  {
    id: 'heart-health',
    label: 'Heart Health',
    color: 'green',
    desc: 'Day By Day OMG (Cardiovascular Support)',
    icon: Heart,
  },
  {
    id: 'anti-aging',
    label: 'Anti-aging & Skin',
    color: 'green',
    desc: 'Day By Day OMG (Omega-5 Punicic)',
    icon: Shield,
  },
];

export default function BenefitGrid({ activeBenefit, onSelectBenefit }) {
  return (
    <section className="benefit-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Shop by Benefit</span>
          <h2 className="section-title">Formulations For Every Life Stage</h2>
          <p className="section-subtitle">
            Explore our eight reconciled formulations. Filter by health priority to compare active nutrient panels and pack sizes.
          </p>
        </div>

        <div className="benefit-grid">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            const isActive = activeBenefit === benefit.id;
            return (
              <button
                key={benefit.id}
                onClick={() => onSelectBenefit(benefit.id)}
                className={`benefit-card ${benefit.color} ${isActive ? 'active' : ''}`}
              >
                <div className="benefit-icon-wrapper">
                  <IconComponent size={26} className="benefit-icon" />
                </div>
                <h3 className="benefit-label">{benefit.label}</h3>
                <p className="benefit-desc">{benefit.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        .benefit-section {
          padding: 70px 0 30px;
          background-color: var(--color-white);
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .section-badge {
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
        
        .section-title {
          font-size: 2.25rem;
          color: var(--color-text-dark);
          margin-bottom: 12px;
        }
        
        .section-subtitle {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          max-width: 640px;
          margin: 0 auto;
        }
        
        /* Benefit Grid */
        .benefit-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        
        .benefit-card {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          padding: 24px 18px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          border: 2px solid transparent;
          transition: var(--transition-bounce);
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
        }
        
        .benefit-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          transition: var(--transition-bounce);
        }
        
        .benefit-label {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 6px;
          color: var(--color-text-dark);
        }
        
        .benefit-desc {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.35;
        }
        
        /* Hover and Colors */
        .benefit-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
        }
        
        .benefit-card.active {
          box-shadow: var(--shadow-md);
        }
        
        /* Theme specific card styles */
        .benefit-card.purple .benefit-icon-wrapper {
          background-color: var(--color-preg-light);
          color: var(--color-preg-primary);
        }
        .benefit-card.purple:hover, .benefit-card.purple.active {
          border-color: var(--color-preg-primary);
        }
        .benefit-card.purple.active .benefit-icon-wrapper {
          background-color: var(--color-preg-primary);
          color: var(--color-white);
        }
        
        .benefit-card.pink .benefit-icon-wrapper {
          background-color: var(--color-pink-light);
          color: var(--color-pink-primary);
        }
        .benefit-card.pink:hover, .benefit-card.pink.active {
          border-color: var(--color-pink-primary);
        }
        .benefit-card.pink.active .benefit-icon-wrapper {
          background-color: var(--color-pink-primary);
          color: var(--color-white);
        }

        .benefit-card.blue .benefit-icon-wrapper {
          background-color: var(--color-blue-light);
          color: var(--color-blue-primary);
        }
        .benefit-card.blue:hover, .benefit-card.blue.active {
          border-color: var(--color-blue-primary);
        }
        .benefit-card.blue.active .benefit-icon-wrapper {
          background-color: var(--color-blue-primary);
          color: var(--color-white);
        }

        .benefit-card.teal .benefit-icon-wrapper {
          background-color: #edf7f4;
          color: #0f5a47;
        }
        .benefit-card.teal:hover, .benefit-card.teal.active {
          border-color: #0f5a47;
        }
        .benefit-card.teal.active .benefit-icon-wrapper {
          background-color: #0f5a47;
          color: var(--color-white);
        }
        
        .benefit-card.green .benefit-icon-wrapper {
          background-color: var(--color-accent-green-light);
          color: var(--color-accent-green);
        }
        .benefit-card.green:hover, .benefit-card.green.active {
          border-color: var(--color-accent-green);
        }
        .benefit-card.green.active .benefit-icon-wrapper {
          background-color: var(--color-accent-green);
          color: var(--color-white);
        }
        
        /* Media Queries */
        @media (max-width: 1024px) {
          .benefit-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .benefit-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 16px;
            padding: 10px 4px 20px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .benefit-grid::-webkit-scrollbar {
            display: none;
          }
          .benefit-card {
            flex: 0 0 240px;
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  );
}
