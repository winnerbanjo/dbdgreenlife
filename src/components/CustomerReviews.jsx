import React, { useRef } from 'react';
import { CheckCircle2, Heart, MessageCircle, Repeat, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS_ROW_1 = [
  {
    id: 1,
    name: "Dr. Chinwe Okeke",
    handle: "@chinwe_md",
    avatar: "CO",
    role: "Physician & Mom of 2",
    verified: true,
    rating: 5,
    product: "Wellness Pregnancy Plus",
    text: "Having the 300 mg DHA softgel packaged side-by-side with the 24-vitamin prenatal core is pure genius. No more buying separate omega bottles or guessing doses. Gentle on the stomach with zero nausea.",
    date: "2h ago",
    likes: 428,
    reposts: 64,
    location: "Lagos, NG"
  },
  {
    id: 2,
    name: "Amina Bello",
    handle: "@amina_bello",
    avatar: "AB",
    role: "Verified Purchaser",
    verified: true,
    rating: 5,
    product: "Day By Day OMG",
    text: "Been on Day By Day OMG for 3 weeks now. The cold-pressed virgin coconut, avocado, grape seed & rice bran oils have done wonders for my skin barrier and metabolic energy. Zero fishy burps!",
    date: "5h ago",
    likes: 319,
    reposts: 52,
    location: "Abuja, NG"
  },
  {
    id: 3,
    name: "Tunde Williams",
    handle: "@tunde_fit",
    avatar: "TW",
    role: "Fitness Coach",
    verified: true,
    rating: 5,
    product: "Day By Day PROMAN",
    text: "PROMAN twin pack has been my gym and focus staple for two months. CoQ10 + Ginseng + full-spectrum omegas give clean, steady stamina throughout 14-hour days without jitters or crashes.",
    date: "1d ago",
    likes: 582,
    reposts: 89,
    location: "Lekki, Lagos"
  },
  {
    id: 4,
    name: "Folashade K.",
    handle: "@folashade_k",
    avatar: "FK",
    role: "Verified Purchaser",
    verified: true,
    rating: 5,
    product: "Prowoman Young",
    text: "Finally a women's supplement that doesn't upset my stomach. Safflower oil + Dong Quai + Shatavari has done wonders for my monthly cycle fatigue and my nails are visibly stronger.",
    date: "2d ago",
    likes: 274,
    reposts: 38,
    location: "Ibadan, NG"
  }
];

const REVIEWS_ROW_2 = [
  {
    id: 5,
    name: "Emeka Nwachukwu",
    handle: "@emeka_nw",
    avatar: "EN",
    role: "Verified Purchaser",
    verified: true,
    rating: 5,
    product: "Day By Day Wellness",
    text: "34 active nutrients with full transparency. I love that Greenlife actually prints the exact mg and mcg values along with confirmed NAFDAC registration on the packaging. Unmatched standard.",
    date: "3d ago",
    likes: 390,
    reposts: 45,
    location: "Port Harcourt, NG"
  },
  {
    id: 6,
    name: "Mrs. Ngozi Adeleke",
    handle: "@ngozi_a",
    avatar: "NA",
    role: "Verified Purchaser",
    verified: true,
    rating: 5,
    product: "Prowoman 40+",
    text: "My daughter bought me Prowoman 40+ for joint comfort and daily energy. 50 active ingredients tailored for women over 40. I wake up feeling light and my bone mobility has genuinely improved.",
    date: "4d ago",
    likes: 611,
    reposts: 97,
    location: "Enugu, NG"
  },
  {
    id: 7,
    name: "Babatunde Alabi",
    handle: "@babatunde_a",
    avatar: "BA",
    role: "Verified Purchaser",
    verified: true,
    rating: 5,
    product: "Day By Day X-PROMAN",
    text: "Cleanest botanical formulation on the market. Maca, Tribulus, Citrulline, and pure botanical omegas without shady proprietary blends. High performance and real stamina throughout the day.",
    date: "5d ago",
    likes: 445,
    reposts: 71,
    location: "Ikeja, Lagos"
  },
  {
    id: 8,
    name: "Zainab Umar",
    handle: "@zainab_u",
    avatar: "ZU",
    role: "New Mom",
    verified: true,
    rating: 5,
    product: "Wellness Pregnancy",
    text: "Single softgel with 600 mcg Folic Acid and 18 mg gentle Iron. So smooth to swallow compared to the huge chalky tablets I was given at the clinic. 10/10 recommendation for expectant mothers.",
    date: "6d ago",
    likes: 520,
    reposts: 83,
    location: "Kano, NG"
  }
];

export default function CustomerReviews() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section className="reviews-carousel-section" id="reviews-section">
      <div className="container reviews-header-container">
        <div className="reviews-header-text">
          <span className="section-eyebrow">VERIFIED SOCIAL PROOF</span>
          <h2 className="reviews-main-title">
            Over 1,000,000+ Reviews <br />
            <span className="reviews-subtitle-italic">from Happy Customers.</span>
          </h2>
          <p className="reviews-header-sub">
            Real feedback from real people across Nigeria taking Day By Day formulations every morning.
          </p>
        </div>

        {/* Aggregate Review Score Pill */}
        <div className="reviews-score-card">
          <div className="score-stars-row">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#1A1A1A" color="#1A1A1A" />
            ))}
          </div>
          <span className="score-number">4.9 / 5.0</span>
          <span className="score-label">Based on 1,000,000+ verified customer experiences</span>
        </div>
      </div>

      {/* Sliding Tweets Carousel Tracks */}
      <div className="carousel-outer-wrapper">
        {/* Track 1: Gliding Left */}
        <div className="tweets-marquee-track track-left">
          <div className="tweets-track-inner">
            {[...REVIEWS_ROW_1, ...REVIEWS_ROW_1].map((review, idx) => (
              <div key={`row1-${review.id}-${idx}`} className="tweet-card">
                <div className="tweet-header">
                  <div className="tweet-author-group">
                    <div className="author-avatar">{review.avatar}</div>
                    <div className="author-meta">
                      <div className="author-name-row">
                        <span className="author-name">{review.name}</span>
                        {review.verified && (
                          <CheckCircle2 size={14} className="verified-check" />
                        )}
                      </div>
                      <span className="author-handle">{review.handle} • {review.date}</span>
                    </div>
                  </div>
                  <span className="tweet-product-badge">{review.product}</span>
                </div>

                <div className="tweet-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="#1A1A1A" color="#1A1A1A" />
                  ))}
                </div>

                <p className="tweet-body">
                  "{review.text}"
                </p>

                <div className="tweet-footer">
                  <div className="tweet-stats">
                    <span className="stat-item"><Heart size={13} className="stat-icon" /> {review.likes}</span>
                    <span className="stat-item"><Repeat size={13} className="stat-icon" /> {review.reposts}</span>
                    <span className="stat-item"><MessageCircle size={13} className="stat-icon" /></span>
                  </div>
                  <span className="tweet-location">{review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Gliding Right (Smooth Counter-Motion) */}
        <div className="tweets-marquee-track track-right">
          <div className="tweets-track-inner">
            {[...REVIEWS_ROW_2, ...REVIEWS_ROW_2].map((review, idx) => (
              <div key={`row2-${review.id}-${idx}`} className="tweet-card">
                <div className="tweet-header">
                  <div className="tweet-author-group">
                    <div className="author-avatar">{review.avatar}</div>
                    <div className="author-meta">
                      <div className="author-name-row">
                        <span className="author-name">{review.name}</span>
                        {review.verified && (
                          <CheckCircle2 size={14} className="verified-check" />
                        )}
                      </div>
                      <span className="author-handle">{review.handle} • {review.date}</span>
                    </div>
                  </div>
                  <span className="tweet-product-badge">{review.product}</span>
                </div>

                <div className="tweet-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="#1A1A1A" color="#1A1A1A" />
                  ))}
                </div>

                <p className="tweet-body">
                  "{review.text}"
                </p>

                <div className="tweet-footer">
                  <div className="tweet-stats">
                    <span className="stat-item"><Heart size={13} className="stat-icon" /> {review.likes}</span>
                    <span className="stat-item"><Repeat size={13} className="stat-icon" /> {review.reposts}</span>
                    <span className="stat-item"><MessageCircle size={13} className="stat-icon" /></span>
                  </div>
                  <span className="tweet-location">{review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .reviews-carousel-section {
          padding: 85px 0 95px;
          background-color: var(--color-bg-base);
          border-top: 1px solid var(--color-border);
          overflow: hidden;
          position: relative;
        }

        .reviews-header-container {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
        }

        .reviews-header-text {
          max-width: 620px;
        }

        .reviews-main-title {
          font-size: 2.8rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--color-text-dark);
          line-height: 1.14;
          margin-bottom: 12px;
        }

        .reviews-subtitle-italic {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          color: #38302C;
        }

        .reviews-header-sub {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .reviews-score-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: var(--shadow-sm);
        }

        .score-stars-row {
          display: flex;
          gap: 3px;
          margin-bottom: 6px;
        }

        .score-number {
          font-size: 1.45rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--color-text-dark);
        }

        .score-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-text-muted);
          max-width: 220px;
        }

        /* Marquee Tracks */
        .carousel-outer-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .tweets-marquee-track {
          width: 100%;
          overflow: hidden;
          position: relative;
          cursor: grab;
        }

        .tweets-marquee-track:hover .tweets-track-inner {
          animation-play-state: paused;
        }

        .tweets-track-inner {
          display: flex;
          gap: 20px;
          width: fit-content;
        }

        .track-left .tweets-track-inner {
          animation: slideTweetsLeft 45s linear infinite;
        }

        .track-right .tweets-track-inner {
          animation: slideTweetsRight 45s linear infinite;
        }

        @keyframes slideTweetsLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes slideTweetsRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Tweet Card */
        .tweet-card {
          width: 360px;
          flex-shrink: 0;
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 22px;
          box-shadow: 0 4px 16px rgba(26, 26, 26, 0.04);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .tweet-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(26, 26, 26, 0.08);
          border-color: #D6D0C7;
        }

        .tweet-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }

        .tweet-author-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .author-avatar {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-full);
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-text-dark);
          flex-shrink: 0;
        }

        .author-meta {
          display: flex;
          flex-direction: column;
        }

        .author-name-row {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .author-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-text-dark);
        }

        .verified-check {
          color: #2a6ab5;
        }

        .author-handle {
          font-size: 0.76rem;
          color: var(--color-text-muted);
        }

        .tweet-product-badge {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--color-text-muted);
          background-color: var(--color-bg-base);
          padding: 3px 8px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          white-space: nowrap;
          max-width: 130px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tweet-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 10px;
        }

        .tweet-body {
          font-size: 0.88rem;
          line-height: 1.55;
          color: var(--color-text-dark);
          margin-bottom: 16px;
          flex: 1;
        }

        .tweet-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid var(--color-border-subtle);
          font-size: 0.74rem;
          color: var(--color-text-muted);
        }

        .tweet-stats {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .stat-icon {
          color: var(--color-text-muted);
        }

        .tweet-location {
          font-weight: 500;
        }

        @media (max-width: 968px) {
          .reviews-header-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .reviews-main-title {
            font-size: 2.2rem;
          }
          .tweet-card {
            width: 310px;
          }
        }

        @media (max-width: 640px) {
          .reviews-carousel-section {
            padding: 50px 0 60px;
          }
          .reviews-header-container {
            margin-bottom: 28px;
            gap: 18px;
          }
          .reviews-main-title {
            font-size: 1.85rem;
            line-height: 1.15;
          }
          .reviews-header-sub {
            font-size: 0.92rem;
          }
          .reviews-score-card {
            width: 100%;
            padding: 16px;
          }
          .score-number {
            font-size: 1.25rem;
          }
          .tweet-card {
            width: 280px;
            padding: 16px 14px;
            border-radius: 14px;
          }
          .author-avatar {
            width: 32px;
            height: 32px;
            font-size: 0.74rem;
          }
          .author-name {
            font-size: 0.84rem;
          }
          .author-handle {
            font-size: 0.7rem;
          }
          .tweet-product-badge {
            font-size: 0.62rem;
            max-width: 105px;
            padding: 2px 6px;
          }
          .tweet-body {
            font-size: 0.82rem;
            line-height: 1.45;
            margin-bottom: 12px;
          }
          .carousel-outer-wrapper {
            gap: 14px;
          }
          .tweets-track-inner {
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
}
