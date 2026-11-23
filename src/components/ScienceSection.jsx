import { ShieldCheck, Flame, HeartHandshake, Check, PackageCheck, Award, FileText } from 'lucide-react';

const qualityPillars = [
  {
    title: "Pharmaceutical Heritage",
    desc: "Formulated under the quality oversight of Greenlife Pharmaceuticals, bringing over 20 years of clinical experience in Nigeria.",
    icon: ShieldCheck
  },
  {
    title: "Standardized Encapsulation",
    desc: "Targeted softgel and capsule formats designed for smooth transit and protected dispersion of active nutrients.",
    icon: Flame
  },
  {
    title: "NAFDAC Registrations",
    desc: "Each product record carries an official NAFDAC registration number as transcribed from packaging documentation.",
    icon: HeartHandshake
  }
];

const standardsChecklist = [
  {
    title: "Standardized Active Assays",
    detail: "Every batch adheres to itemised ingredient counts (ranging from 8 in full-spectrum Omega to 50 in comprehensive mature women's formulas)."
  },
  {
    title: "Verifiable Pack Traceability",
    detail: "Products are labeled with specific registration numbers, batch codes, manufacture dates, and tamper-evident twin-pack or blister configurations."
  },
  {
    title: "Balanced Nutritional Forms",
    detail: "Preserves exact mineral salts, amino acid forms, and cold-pressed botanical oil blends (including Safflower, Avocado, and Rice Bran)."
  }
];

export default function ScienceSection() {
  return (
    <section className="science-section">
      <div className="container">
        {/* Core Pillars */}
        <div className="science-pillars-grid">
          {qualityPillars.map((pillar, idx) => {
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

        {/* Formulation Quality Panel */}
        <div className="advisory-panel">
          <div className="panel-text-side">
            <span className="panel-badge">Quality Standards</span>
            <h2 className="panel-title">Pharmaceutical Discipline. Everyday Nutrition.</h2>
            <p className="panel-desc">
              At Day by Day, our formulations translate Greenlife's clinical standards into approachable daily habits. We focus on transparent labeling, exact nutrient amounts, and verified packaging formats for every life stage.
            </p>

            <ul className="safety-bullets">
              <li className="safety-bullet">
                <div className="bullet-check"><Check size={14} /></div>
                <span>Standardized units across milligrams (mg), micrograms (mcg), and International Units (IU)</span>
              </li>
              <li className="safety-bullet">
                <div className="bullet-check"><Check size={14} /></div>
                <span>Itemised dual-pack divisions separating multivitamin cores from botanical Omega blends</span>
              </li>
              <li className="safety-bullet">
                <div className="bullet-check"><Check size={14} /></div>
                <span>Clear packaging documentation with confirmed NAFDAC registration details</span>
              </li>
            </ul>
          </div>

          <div className="panel-advisors-side">
            <h3 className="advisors-header">Formulation Quality Framework</h3>
            <div className="advisors-list">
              {standardsChecklist.map((item, idx) => (
                <div key={idx} className="standards-card">
                  <div className="standards-icon-box">
                    {idx === 0 && <PackageCheck size={20} />}
                    {idx === 1 && <FileText size={20} />}
                    {idx === 2 && <Award size={20} />}
                  </div>
                  <div className="standards-info">
                    <h4 className="standards-title">{item.title}</h4>
                    <p className="standards-desc">{item.detail}</p>
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
        
        /* Advisory/Quality Panel */
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
          font-size: 0.92rem;
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
        
        /* Standards Side */
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
          gap: 20px;
        }
        
        .standards-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background-color: var(--color-bg-base);
          padding: 16px 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
        }
        
        .standards-icon-box {
          width: 40px;
          height: 40px;
          background-color: var(--color-white);
          color: var(--color-preg-primary);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: var(--shadow-sm);
        }
        
        .standards-title {
          font-size: 1rem;
          color: var(--color-text-dark);
          margin-bottom: 4px;
        }
        
        .standards-desc {
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
