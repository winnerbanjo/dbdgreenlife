import { Award, ShieldCheck, Users, Target, Activity } from 'lucide-react';

const values = [
  {
    title: "Wellness-Driven Innovation",
    desc: "Constantly researching and developing new formulations to address modern everyday health goals.",
    icon: Activity
  },
  {
    title: "Quality & Safety First",
    desc: "Rigorous clinical testing standards, raw material assays, and batch verification under GMP standards.",
    icon: ShieldCheck
  },
  {
    title: "Simplicity & Accessibility",
    desc: "No confusing medical jargon or oversized pills. Just clean softgels that fit perfectly into your daily habits.",
    icon: Target
  },
  {
    title: "Science-Backed Formulations",
    desc: "Dosages and ingredients selected based on active clinical trials, not marketing hype.",
    icon: Award
  },
  {
    title: "Trust & Transparency",
    desc: "Clear labeling of all components, direct access to chemical analyses, and open NAFDAC registrations.",
    icon: Users
  }
];

export default function About({ onExploreProducts }) {
  return (
    <div className="about-page">
      {/* Story Hero */}
      <section className="about-hero">
        <div className="container about-hero-container">
          <span className="about-badge">Our Story</span>
          <h1 className="about-hero-title">Clinical Science. <br />Everyday Lifestyle.</h1>
          <p className="about-hero-desc">
            Day by Day Wellness was founded to bridge the gap between heavy clinical pharmaceutical credibility and modern, accessible wellness habits.
          </p>
        </div>
      </section>

      {/* Brand Partnership Narrative */}
      <section className="narrative-section container">
        <div className="grid-2">
          <div className="narrative-text">
            <h2 className="narrative-title">Backed by Greenlife Heritage</h2>
            <p className="narrative-p">
              Greenlife Pharmaceuticals has been a cornerstone of clinical health and therapeutics for over two decades. Day by Day Wellness is Greenlife's nutraceutical and wellness brand, focusing on preventive health and science-backed supplementation.
            </p>
            <p className="narrative-p font-bold">
              "We believe that everyday health shouldn't be complicated or clinical. It should be a joyful daily habit."
            </p>
            <p className="narrative-p">
              By combining Greenlife's strict pharmaceutical quality standards with friendly, easy-to-understand product formats (like our easy-to-swallow softgels), we give consumers supplement routines they can trust and actually look forward to taking.
            </p>
          </div>

          <div className="narrative-stats">
            <div className="stat-card">
              <span className="stat-number">20+</span>
              <span className="stat-label">Years of Pharma Experience</span>
            </div>
            <div className="stat-card purple">
              <span className="stat-number">100%</span>
              <span className="stat-label">NAFDAC Registered Formulas</span>
            </div>
            <div className="stat-card orange">
              <span className="stat-number">0%</span>
              <span className="stat-label">Artificial Colors or Fillers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Core Values</span>
            <h2 className="section-title">What Guides Us Daily</h2>
            <p className="section-subtitle">
              These pillars define how we formulate our supplements, test our ingredients, and support our community.
            </p>
          </div>

          <div className="values-grid">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="value-card">
                  <div className="value-icon-wrapper">
                    <Icon size={24} className="value-icon" />
                  </div>
                  <h3 className="value-title">{val.title}</h3>
                  <p className="value-desc">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community / Vibe Split Section */}
      <section className="about-community-section container">
        <div className="about-community-grid">
          <div className="about-community-image">
            <img src="/assets/lifestyle-models.jpg" alt="Day by Day community" className="community-img" />
          </div>
          <div className="about-community-content">
            <span className="community-badge">Designed for You</span>
            <h2 className="community-title">Supplements That Match Your Vibe</h2>
            <p className="community-p">
              Wellness isn't a chore; it's a celebration. Day by Day is crafted to fit seamlessly into your lifestyle, whether you're building a family, crushing gym goals, or heading out on a trip.
            </p>
            <p className="community-p">
              Our formulas look great on your shelf and feel even better in your body. Clean, effective, and made to share with your besties.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section container">
        <div className="about-cta-box">
          <h2 className="about-cta-title">Start Your Wellness Journey Today</h2>
          <p className="about-cta-text">
            Explore our launch range of prenatal and maternal softgels, designed to support you and your baby day by day.
          </p>
          <button className="btn-round btn-purple btn-cta" onClick={onExploreProducts}>
            View Supplements
            <Activity size={16} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </section>

      <style>{`
        .about-page {
          background-color: var(--color-bg-base);
          margin-top: 80px;
          padding-bottom: 60px;
        }
        
        /* Story Hero */
        .about-hero {
          background: linear-gradient(135deg, var(--color-preg-light) 0%, var(--color-pregplus-light) 100%);
          padding: 100px 0 80px;
          text-align: center;
          border-bottom: 1px solid var(--color-border);
        }
        
        .about-hero-container {
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .about-badge {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background-color: var(--color-white);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 20px;
          box-shadow: var(--shadow-sm);
        }
        
        .about-hero-title {
          font-size: 3.5rem;
          color: var(--color-text-dark);
          line-height: 1.1;
          margin-bottom: 20px;
        }
        
        .about-hero-desc {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        
        /* Narrative */
        .narrative-section {
          padding: 80px 24px;
        }
        
        .narrative-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .narrative-title {
          font-size: 2.25rem;
          color: var(--color-text-dark);
          margin-bottom: 20px;
        }
        
        .narrative-p {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 16px;
        }
        
        .narrative-p.font-bold {
          font-weight: 700;
          color: var(--color-preg-primary);
          font-size: 1.2rem;
          border-left: 4px solid var(--color-preg-primary);
          padding-left: 16px;
          margin: 24px 0;
        }
        
        .narrative-stats {
          display: flex;
          flex-direction: column;
          gap: 20px;
          justify-content: center;
        }
        
        .stat-card {
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          padding: 24px 30px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          gap: 24px;
          transition: var(--transition-bounce);
        }
        
        .stat-card:hover {
          transform: translateX(5px);
          box-shadow: var(--shadow-md);
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-accent-green);
        }
        
        .stat-card.purple .stat-number { color: var(--color-preg-primary); }
        .stat-card.orange .stat-number { color: var(--color-pregplus-primary); }
        
        .stat-label {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text-dark);
        }
        
        /* Values Section */
        .values-section {
          padding: 80px 0;
          background-color: var(--color-white);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 48px;
        }
        
        .value-card {
          background-color: var(--color-bg-base);
          border-radius: var(--radius-md);
          padding: 32px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
          transition: var(--transition-bounce);
        }
        
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        
        .value-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-full);
          background-color: var(--color-white);
          color: var(--color-preg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: var(--shadow-sm);
        }
        
        .value-title {
          font-size: 1.2rem;
          color: var(--color-text-dark);
          margin-bottom: 8px;
        }
        
        .value-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        
        /* CTA Section */
        .about-cta-section {
          padding: 80px 24px 40px;
        }
        
        .about-cta-box {
          background: linear-gradient(135deg, var(--color-preg-gradient) 0%, var(--color-preg-dark) 100%);
          border-radius: var(--radius-xl);
          padding: 60px;
          text-align: center;
          box-shadow: var(--shadow-lg);
          color: var(--color-white);
        }
        
        .about-cta-title {
          font-size: 2.25rem;
          color: var(--color-white);
          margin-bottom: 12px;
        }
        
        .about-cta-text {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .btn-cta {
          background-color: var(--color-white);
          color: var(--color-preg-primary);
          font-size: 1.05rem;
          padding: 14px 40px;
        }
        
        .btn-cta:hover {
          background-color: var(--color-preg-light);
          color: var(--color-preg-primary);
        }

        /* Community Section */
        .about-community-section {
          padding: 60px 24px;
        }
        
        .about-community-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: center;
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          padding: 40px;
          box-shadow: var(--shadow-sm);
        }
        
        .about-community-image {
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 440px;
          box-shadow: var(--shadow-md);
        }
        
        .community-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-bounce);
        }
        
        .about-community-grid:hover .community-img {
          transform: scale(1.02);
        }
        
        .about-community-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .community-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-pregplus-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }
        
        .community-title {
          font-size: 2.25rem;
          color: var(--color-text-dark);
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .community-p {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 16px;
        }
        
        .community-p:last-of-type {
          margin-bottom: 0;
        }
        
        /* Responsive design */
        @media (max-width: 968px) {
          .about-hero-title {
            font-size: 2.5rem;
          }
          .narrative-p.font-bold {
            margin: 16px 0;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
          .about-cta-box {
            padding: 30px;
          }
          .about-community-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 24px;
          }
          .about-community-image {
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
