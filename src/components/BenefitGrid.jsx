import { Sparkles, Activity, ShieldAlert, Heart } from 'lucide-react';

const benefits = [
  {
    id: 'pregnancy',
    label: 'Pregnancy Care',
    color: 'purple',
    desc: 'Prenatal Vitamins & Probiotics',
    icon: Sparkles,
  },
  {
    id: 'pregnancy-plus',
    label: 'Maternal Health Plus',
    color: 'orange',
    desc: 'Omega-3 Double Pack',
    icon: Heart,
  },
  {
    id: 'daily-wellness',
    label: 'Everyday Wellness',
    color: 'green',
    desc: 'Daily Essential Nutrients',
    icon: Activity,
  },
  {
    id: 'mens-health',
    label: "Men's Vitality",
    color: 'blue',
    desc: 'Energy & Focus Support',
    icon: Activity,
  },
  {
    id: 'womens-health',
    label: "Women's Wellness",
    color: 'pink',
    desc: 'Balance & Skin Glow',
    icon: Sparkles,
  },
  {
    id: 'immune',
    label: 'Immune Support',
    color: 'yellow',
    desc: 'Purity-Tested Defenses',
    icon: ShieldAlert,
  },
];

export default function BenefitGrid({ activeBenefit, onSelectBenefit }) {
  return (
    <section className="benefit-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Shop by Benefit</span>
          <h2 className="section-title">Designed for Your Life Stage</h2>
          <p className="section-subtitle">
            Find the perfect wellness formulation tailored to support your body's specific daily needs.
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
                  <IconComponent size={28} className="benefit-icon" />
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
          padding: 80px 0 40px;
          background-color: var(--color-white);
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 48px;
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
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Benefit Grid */
        .benefit-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }
        
        .benefit-card {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          padding: 30px 20px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          border: 2px solid transparent;
          transition: var(--transition-bounce);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .benefit-icon-wrapper {
          width: 70px;
          height: 70px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: var(--transition-bounce);
        }
        
        .benefit-label {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 6px;
          color: var(--color-text-dark);
        }
        
        .benefit-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.4;
        }
        
        /* Hover and Colors */
        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
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
        
        .benefit-card.orange .benefit-icon-wrapper {
          background-color: var(--color-pregplus-light);
          color: var(--color-pregplus-primary);
        }
        .benefit-card.orange:hover, .benefit-card.orange.active {
          border-color: var(--color-pregplus-primary);
        }
        .benefit-card.orange.active .benefit-icon-wrapper {
          background-color: var(--color-pregplus-primary);
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
        
        .benefit-card.yellow .benefit-icon-wrapper {
          background-color: var(--color-accent-yellow-light);
          color: var(--color-accent-yellow);
        }
        .benefit-card.yellow:hover, .benefit-card.yellow.active {
          border-color: var(--color-accent-yellow);
        }
        .benefit-card.yellow.active .benefit-icon-wrapper {
          background-color: var(--color-accent-yellow);
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
        
        /* Media Queries */
        @media (max-width: 768px) {
          .benefit-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 16px;
            padding: 10px 10px 20px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .benefit-grid::-webkit-scrollbar {
            display: none;
          }
          .benefit-card {
            flex: 0 0 250px;
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  );
}
