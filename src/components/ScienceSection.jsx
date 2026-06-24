import React from 'react';
import { ShieldCheck, Flame, HeartHandshake, Check } from 'lucide-react';

const clinicalAdvisors = [
  {
    name: "Dr. Amina Bello",
    role: "Lead OB-GYN & Maternal Health Specialist",
    bio: "Over 15 years of clinical practice in prenatal nutrition and maternal wellness counseling.",
    initials: "AB"
  },
  {
    name: "Prof. Kolawole Davies",
    role: "Senior Pharmacologist & Formulation Lead",
    bio: "Specializes in bioavailability and high-assimilation active nutrient formulations.",
    initials: "KD"
  },
  {
    name: "Tariq Ibrahim, RD",
    role: "Prenatal Dietitian & Wellness Consultant",
    bio: "Focuses on everyday dietary supplementation, gut absorption, and micro-nutrient balances.",
    initials: "TI"
  }
];

const certificationPillars = [
  {
    title: "Pharmaceutical Heritage",
    desc: "Formulated by Greenlife Pharmaceuticals, bringing over 20 years of clinical experience to daily wellness.",
    icon: ShieldCheck
  },
  {
    title: "Bioavailable Softgels",
    desc: "Softgel encapsulation allows immediate absorption and is easier on sensitive prenatal stomachs.",
    icon: Flame
  },
  {
    title: "NAFDAC & Quality Approved",
    desc: "Manufactured in state-of-the-art facilities with absolute batch testing for safety and compliance.",
    icon: HeartHandshake
  }
];

export default function ScienceSection() {
  return (
    <section className="science-section">
      <div className="container">
        {/* Core Pillars */}
        <div className="science-pillars-grid">
          {certificationPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-wrapper">
                  <Icon size={24} className="pillar-icon" />
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Clinical Advisory Board */}
        <div className="advisory-panel">
          <div className="panel-text-side">
            <span className="panel-badge">Clinical Credibility</span>
            <h2 className="panel-title">Formulated by Experts. Trusted by Moms.</h2>
            <p className="panel-desc">
              At Day by Day, we believe health is a science. Our clinical advisory board collaborates with researchers and pharmacists at Greenlife to ensure each softgel delivers safe, effective, and science-backed dosages.
            </p>

            <ul className="safety-bullets">
              <li className="safety-bullet">
                <div className="bullet-check"><Check size={14} /></div>
                <span>Zero artificial fillers, binders, or synthetic coatings</span>
              </li>
              <li className="safety-bullet">
                <div className="bullet-check"><Check size={14} /></div>
                <span>Purity tested for heavy metals and active concentrations</span>
              </li>
              <li className="safety-bullet">
                <div className="bullet-check"><Check size={14} /></div>
                <span>Gentle digestive formulations with integrated probiotics</span>
              </li>
            </ul>
          </div>

          <div className="panel-advisors-side">
            <h3 className="advisors-header">Clinical Advisory Board</h3>
            <div className="advisors-list">
              {clinicalAdvisors.map((advisor, idx) => (
                <div key={idx} className="advisor-card">
                  <div className="advisor-avatar">{advisor.initials}</div>
                  <div className="advisor-info">
                    <h4 className="advisor-name">{advisor.name}</h4>
                    <span className="advisor-role">{advisor.role}</span>
                    <p className="advisor-bio">{advisor.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .science-section {
          padding: 80px 0;
          background: linear-gradient(180deg, #ffffff 0%, #f4f7fa 100%);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        
        /* Pillars Grid */
        .science-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 80px;
        }
        
        .pillar-card {
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          padding: 32px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
          transition: var(--transition-bounce);
        }
        
        .pillar-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        
        .pillar-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-full);
          background-color: var(--color-preg-light);
          color: var(--color-preg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .pillar-title {
          font-size: 1.25rem;
          color: var(--color-text-dark);
          margin-bottom: 8px;
        }
        
        .pillar-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        
        /* Advisory Panel */
        .advisory-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          padding: 60px;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-white);
        }
        
        .panel-text-side {
          display: flex;
          flex-direction: column;
        }
        
        .panel-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-pregplus-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }
        
        .panel-title {
          font-size: 2.25rem;
          color: var(--color-text-dark);
          margin-bottom: 16px;
        }
        
        .panel-desc {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 30px;
        }
        
        /* Safety Bullets */
        .safety-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .safety-bullet {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-dark);
        }
        
        .bullet-check {
          width: 24px;
          height: 24px;
          border-radius: var(--radius-full);
          background-color: var(--color-accent-green-light);
          color: var(--color-accent-green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        /* Advisors Side */
        .panel-advisors-side {
          display: flex;
          flex-direction: column;
        }
        
        .advisors-header {
          font-size: 1.3rem;
          color: var(--color-text-dark);
          margin-bottom: 24px;
          border-bottom: 2px solid var(--color-border);
          padding-bottom: 12px;
        }
        
        .advisors-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .advisor-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        
        .advisor-avatar {
          width: 46px;
          height: 46px;
          background-color: var(--color-pregplus-light);
          color: var(--color-pregplus-primary);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          flex-shrink: 0;
          box-shadow: var(--shadow-sm);
        }
        
        .advisor-name {
          font-size: 1.05rem;
          color: var(--color-text-dark);
        }
        
        .advisor-role {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-preg-primary);
          display: block;
          margin-bottom: 4px;
        }
        
        .advisor-bio {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.4;
        }
        
        /* Responsive design */
        @media (max-width: 968px) {
          .advisory-panel {
            grid-template-columns: 1fr;
            padding: 30px;
            gap: 40px;
          }
          .science-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
