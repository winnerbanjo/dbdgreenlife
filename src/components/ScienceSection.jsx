import React from 'react';
import { Check, PackageCheck, FileText, Award } from 'lucide-react';

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
        {/* Formulation Quality Panel */}
        <div className="quality-framework-panel">
          <div className="panel-text-side">
            <span className="section-eyebrow">CLINICAL VERIFICATION</span>
            <h2 className="panel-title">
              Pharmaceutical Rigor. <br />
              <span className="font-editorial">Everyday Nutrition.</span>
            </h2>
            <p className="panel-desc">
              At Day By Day, our formulations translate Greenlife's clinical standards into approachable daily habits. We focus on transparent labeling, exact nutrient amounts, and verified packaging formats for every life stage.
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

          <div className="panel-standards-side">
            <h3 className="standards-header">Formulation Framework</h3>
            <div className="standards-list">
              {standardsChecklist.map((item, idx) => (
                <div key={idx} className="standards-card">
                  <div className="standards-icon-box">
                    {idx === 0 && <PackageCheck size={18} />}
                    {idx === 1 && <FileText size={18} />}
                    {idx === 2 && <Award size={18} />}
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
          background-color: var(--color-bg-base);
          border-top: 1px solid var(--color-border);
        }

        .quality-framework-panel {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 60px;
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          padding: 50px;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }

        .panel-text-side {
          display: flex;
          flex-direction: column;
        }

        .panel-title {
          font-size: 2.3rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--color-text-dark);
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .panel-desc {
          font-size: 1rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 28px;
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
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-dark);
        }

        .bullet-check {
          width: 22px;
          height: 22px;
          border-radius: var(--radius-full);
          background-color: var(--color-text-dark);
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Standards Side */
        .panel-standards-side {
          display: flex;
          flex-direction: column;
        }

        .standards-header {
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--color-text-dark);
          margin-bottom: 20px;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 10px;
        }

        .standards-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .standards-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background-color: var(--color-bg-base);
          padding: 16px 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          transition: var(--transition-smooth);
        }

        .standards-card:hover {
          border-color: #C0B9AF;
          background-color: var(--color-bg-subtle);
        }

        .standards-icon-box {
          width: 36px;
          height: 36px;
          background-color: var(--color-white);
          color: var(--color-text-dark);
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .standards-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-dark);
          margin-bottom: 4px;
        }

        .standards-desc {
          font-size: 0.84rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        @media (max-width: 968px) {
          .quality-framework-panel {
            grid-template-columns: 1fr;
            padding: 30px;
            gap: 40px;
          }
          .panel-title {
            font-size: 1.9rem;
          }
        }
      `}</style>
    </section>
  );
}
