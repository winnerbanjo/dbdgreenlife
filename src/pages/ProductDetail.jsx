import { useState } from 'react';
import { ShieldCheck, Award, ArrowLeft, Check, HelpCircle, Star, ShoppingCart } from 'lucide-react';

const productsDetailData = {
  pregnancy: {
    id: 'pregnancy',
    title: 'Wellness Pregnancy',
    subtitle: 'Everyday prenatal supplementation containing essential vitamins, key minerals, specific amino acids, and active probiotics for complete maternal care.',
    type: 'Prenatal Care',
    image: '/assets/pregnancy-detail-view.png',
    theme: 'purple',
    price: '₦12,500',
    size: '30 Softgels',
    tagline: 'Complete 5-in-1 prenatal development support.',
    bullets: [
      'Supports baby\'s brain & spinal cord development (Folic Acid)',
      'Promotes healthy bone & skeletal formation (Vitamin D3 & Calcium)',
      'Boosts mother\'s immune system & vitality',
      'Provides iron for maternal blood volume support',
      'Active probiotics to maintain gut digestive health'
    ],
    ingredients: [
      { name: 'Folic Acid', dose: '600 mcg', desc: 'Critical for early neural tube development. Prevents major birth defects of the baby\'s brain and spine.' },
      { name: 'Vitamin D3 (Cholecalciferol)', dose: '600 IU', desc: 'Helps your body absorb calcium, promoting the development of baby\'s bones, teeth, and immune function.' },
      { name: 'Iron (as Ferrous Fumarate)', dose: '15 mg', desc: 'Essential for producing hemoglobin, which carries oxygen throughout your body and to the baby.' },
      { name: 'L-Lysine Hydrochloride', dose: '5 mg', desc: 'An essential amino acid that supports protein synthesis and tissue repair during rapid fetal growth.' },
      { name: 'L-Arginine', dose: '5 mg', desc: 'Supports vascular health, healthy placental circulation, and blood flow.' },
      { name: 'Probiotics (Streptococcus Faecalis)', dose: '1.6 Billion CFU', desc: 'Promotes healthy maternal gut flora, aiding nutrient absorption and reducing common prenatal digestive discomfort.' }
    ],
    howToUse: 'Take 1 softgel daily, preferably with a main meal. Swallow whole with a full glass of water. Do not chew.',
    faqs: [
      { q: 'When should I start taking Wellness Pregnancy?', a: 'We recommend starting as soon as you plan to conceive, or as soon as you find out you are pregnant. Folic acid is most critical in the first 12 weeks of pregnancy.' },
      { q: 'Why does this formula contain Probiotics?', a: 'Hormonal changes during pregnancy can slow digestion. Our clinical probiotics help balance the gut, easing gas and bloating while boosting nutrient uptake.' },
      { q: 'Is this product NAFDAC registered?', a: 'Yes. All Greenlife Day by Day products are registered and approved by NAFDAC under standard clinical regulations.' }
    ],
    reviews: [
      { author: 'Chidinma O.', rating: 5, date: '2 weeks ago', title: 'Gentle on my stomach!', content: 'I tried other prenatal vitamins but they made me nauseous. This softgel version is so easy to swallow and the probiotics really helped with my digestion. Highly recommend!' },
      { author: 'Fatima A.', rating: 5, date: '1 month ago', title: 'Excellent ingredients list', content: 'As a pharmacist myself, I love the addition of L-Lysine and L-Arginine. Very thoughtful formula, backed by Greenlife quality.' }
    ]
  },
  omg: {
    id: 'omg',
    title: 'OMG',
    subtitle: 'Oh My Glow! An advanced spectrum of Omegas 3, 5, 6, 7, and 9 sourced from cold-pressed Virgin Coconut, Avocado, Grape Seed, and Rice Bran Oils, enriched with vitamins A, D3, and E for daily energy, weight management, and skin health.',
    type: 'Everyday Wellness',
    image: '/assets/omg-box.png',
    theme: 'green',
    price: '₦14,500',
    size: '30 Softgels',
    tagline: 'The ultimate botanical Omega and skin glow blend.',
    bullets: [
      'Omega-7 for Weight Management & metabolic optimization',
      'Omega-3 & 9 for Heart & Brain cellular protection',
      'Omega-5 for Skin cell regeneration & active anti-aging',
      'Omega-6 for vital daily energy conversion and nerve health',
      'Virgin Coconut Oil & Avocado Oil for fast micro-absorption'
    ],
    ingredients: [
      { name: 'Virgin Coconut Oil', dose: 'Premium Raw', desc: 'Provides medium-chain triglycerides (MCTs) for immediate cellular energy and metabolic support.' },
      { name: 'Avocado & Grape Seed Oils', dose: 'Cold-Pressed', desc: 'Rich in vitamin E, oleic acids, and antioxidants that promote skin elasticity, glow, and hair health.' },
      { name: 'Omega 3-5-6-7-9 Complex', dose: 'Active Blend', desc: 'Comprehensive spectrum of fatty acids that supports cardiovascular strength, cognitive function, and cellular healing.' },
      { name: 'Vitamin E (Tocopheryl)', dose: '15 IU', desc: 'A potent antioxidant that protects cells from free radical damage and promotes glowing skin.' },
      { name: 'Vitamin D3 & Vitamin A', dose: 'Daily Balance', desc: 'Enhances calcium absorption, bone strength, cell division, and immune defenses.' },
      { name: 'Rice Bran & Grape Seed Oils', dose: 'Infusion', desc: 'Rich in phytosterols that assist in cholesterol management and heart protection.' }
    ],
    howToUse: 'Take 1 softgel daily, preferably in the morning with breakfast and a glass of water.',
    faqs: [
      { q: 'What does OMG stand for?', a: 'It stands for Oh My Glow! It is our specialized complete spectrum Omega (3-5-6-7-9) softgel combined with cold-pressed botanical oils and vitamins to promote healthy skin, metabolic energy, and weight management.' },
      { q: 'What makes OMG different from ordinary fish oil?', a: 'Standard fish oil only contains Omega-3. OMG contains the full spectrum of Omegas (3, 5, 6, 7, and 9) sourced from clinical grade botanical oils (Grape Seed, Avocado, Coconut, Rice Bran) + active vitamins, giving you a full body glow and energy boost without the fishy aftertaste.' },
      { q: 'Is OMG suitable for men and women?', a: 'Yes! OMG is formulated as a daily, high-potency wellness and skin support supplement for all adults looking to boost their overall vitality.' }
    ],
    reviews: [
      { author: 'Kemi O.', rating: 5, date: '1 week ago', title: 'Literally glowing! ✨', content: 'OMG is a game changer! My skin has this natural glow now, and my nails are stronger. I love the green box, it looks so good on my nightstand. Gen Z approved!' },
      { author: 'Tunde B.', rating: 5, date: '3 weeks ago', title: 'Great energy booster', content: 'Switched my standard fish oil for this. The combination of coconut and avocado oil gives me clean energy in the morning without any digestive heaviness.' }
    ]
  },
  'pregnancy-plus': {
    id: 'pregnancy-plus',
    title: 'Wellness Pregnancy Plus',
    subtitle: 'Our advanced dual-capsule formulation providing 30 prenatal multivitamin softgels plus 30 high-potency clinical Omega 3-6-9 softgels for comprehensive maternal and cognitive support.',
    type: 'Maternal Health Plus',
    image: '/assets/pregnancy-plus-detail-view.png',
    theme: 'orange',
    price: '₦18,500',
    size: '60 Softgels (Twin Pack)',
    tagline: 'Premium dual-action prenatal & brain development pack.',
    bullets: [
      'Advanced baby cognitive & eye development (DHA/EPA)',
      'Dual-pack: 30 Multivitamins + 30 Premium Omega 3-6-9 softgels',
      'Supports healthy birth weight & gestation longevity',
      'Protects organs and cellular development',
      'Provides Inositol for glycemic and insulin metabolic stability'
    ],
    ingredients: [
      { name: 'Omega-3 Fish Oil (DHA/EPA)', dose: '375 mg (300mg DHA)', desc: 'High-purity micro-filtered fish oil. DHA is a major structural fat in the baby\'s brain and retina.' },
      { name: 'Inositol', dose: '5 mg', desc: 'Supports healthy cell membranes and insulin sensitivity, helping manage gestational glycemic responses.' },
      { name: 'Folic Acid', dose: '600 mcg', desc: 'Critical for the baby\'s early spinal cord and neurological pathways development.' },
      { name: 'Flaxseed & Olive Oil (Omega 6-9)', dose: 'Premium Blend', desc: 'Provides alpha-linolenic and oleic acids to support cell division and maternal vascular flexibility.' },
      { name: 'L-Lysine & L-Arginine', dose: '10 mg Complex', desc: 'Essential amino acids that assist in placenta growth, vascular dilation, and skeletal protein synthesis.' },
      { name: 'Vitamin B-Complex (B1, B2, B3, B6, B12)', dose: 'Clinical Dose', desc: 'Maintains nervous system health, red blood cells, and maternal energy conversion pathways.' }
    ],
    howToUse: 'Take 2 softgels daily (1 purple multivitamin softgel + 1 amber Omega softgel) with a meal. Swallow whole with water.',
    faqs: [
      { q: 'What is the main difference between Pregnancy and Pregnancy Plus?', a: 'Pregnancy Plus contains an additional daily softgel of pure Omega 3-6-9 fish oil (rich in DHA & EPA), which is crucial for advanced baby brain and visual development. It also includes Inositol.' },
      { q: 'Where is the fish oil sourced from?', a: 'Our fish oil is sourced from sustainably caught deep-sea fish, molecularly distilled and tested to ensure it is free from heavy metals, mercury, and contaminants.' },
      { q: 'Can I take this alongside other supplements?', a: 'Since Wellness Pregnancy Plus is highly comprehensive, you generally do not need other multivitamins. Always consult your healthcare provider or OB-GYN.' }
    ],
    reviews: [
      { author: 'Ngozi E.', rating: 5, date: '3 days ago', title: 'Amazing for my baby\'s growth', content: 'My OB-GYN recommended I take DHA, and this twin pack makes it so convenient. I don\'t have to buy separate fish oil bottles. No fishy aftertaste!' },
      { author: 'Amara K.', rating: 5, date: '3 weeks ago', title: 'Premium quality!', content: 'Love the sunset orange branding and the dual capsule concept. Feel energetic and my skin looks great too. Greenlife never disappoints.' }
    ]
  },
  proman: {
    id: 'proman',
    title: 'PROMAN',
    subtitle: 'Dual Pack: 30 Multivitamin Softgels + 30 High-Potency Omega 3-5-6-7-9 Softgels for men\'s health support.',
    type: 'Men\'s Vitality',
    image: '/assets/proman.png',
    theme: 'blue',
    size: '60 Softgels (Twin Pack)',
    tagline: 'High-potency multivitamin + Omega 3-5-6-7-9 twin pack for men.',
    bullets: [
      'Boosts daily energy, stamina, and physical endurance',
      'Enhances mental focus, cognitive drive, and clarity',
      'Supports overall immune system and cardiovascular wellbeing'
    ],
    ingredients: [
      { name: 'Coenzyme Q10', dose: '15 mg', desc: 'Critical for cellular energy production, mitochondrial health, and cardiovascular stamina.' },
      { name: 'Ginseng Extract', dose: '20 mg', desc: 'A legendary botanical adaptogen that boosts physical endurance, focus, and reduces daily fatigue.' },
      { name: 'Amino Acid Complex', dose: '25 mg', desc: 'Supports muscular recovery, nitric oxide synthesis, healthy circulation, and cellular energy.' },
      { name: 'Active Omega Blend', dose: '350 mg', desc: 'Comprehensive fatty acid spectrum to protect heart function, brain cells, and lower cellular inflammation.' },
      { name: 'Immune & Vitality Minerals', dose: '12 mg', desc: 'Crucial trace elements for male reproductive health, testosterone synthesis, and antioxidant defenses.' },
      { name: 'Complete Vitamin B-Complex', dose: 'Clinical Dose', desc: 'Essential for metabolic energy conversion, nerve conduction, and cognitive focus.' }
    ],
    howToUse: 'Take 2 softgels daily (1 black multivitamin softgel + 1 yellow Omega softgel) with a meal. Swallow whole with a full glass of water.',
    faqs: [
      { q: 'What is the benefit of the PROMAN Twin Pack?', a: 'PROMAN is a complete male vitality solution combining a premium multivitamin with a high-potency Omega 3-5-6-7-9 softgel. Instead of buying multiple bottles, you get full-spectrum energy, immune, and cognitive support in one box.' },
      { q: 'Why does PROMAN contain CoQ10 and Ginseng?', a: 'CoQ10 is essential for mitochondrial energy and heart health, while Ginseng is a natural adaptogen that helps the body adapt to stress and enhances stamina and cognitive drive.' },
      { q: 'Are these softgels easy to digest?', a: 'Yes! Sourced under Greenlife standards, our softgels are designed with premium carrier oils (including Lecithin and Omegas) for stomach-friendly, rapid absorption without nausea.' }
    ],
    reviews: [
      { author: 'Emeka O.', rating: 5, date: '1 week ago', title: 'Excellent daily stamina!', content: 'I\'ve been taking the PROMAN twin pack for a month. The difference in my midday energy and mental focus is noticeable. No more afternoon slumps, and it\'s easy on the stomach.' },
      { author: 'Kabir Y.', rating: 5, date: '2 weeks ago', title: 'Very premium packaging and results', content: 'Having the multivitamins and Omega softgels in one twin pack is super convenient. Sourced from Greenlife, so I trust the quality.' }
    ]
  },
  'prowoman-young': {
    id: 'prowoman-young',
    title: 'PROWOMAN YOUNG',
    subtitle: 'Dual Pack: 30 Multivitamin Softgels + 30 High-Potency Omega 3-5-6-7-9 Softgels containing Safflower Oil.',
    type: 'Women\'s Wellness',
    image: '/assets/prowoman-young.png',
    theme: 'pink',
    size: '60 Softgels (Twin Pack)',
    tagline: 'Advanced multivitamin + Omega 3-5-6-7-9 twin pack for active women.',
    bullets: [
      'Supports vibrant skin glow, healthy hair, and nails',
      'Promotes balanced, comfortable menstrual cycles',
      'Optimizes daily energy, mood, and overall wellbeing'
    ],
    ingredients: [
      { name: 'Evening Primrose & Borage Oils', dose: '150 mg', desc: 'Rich in GLA (Gamma-Linolenic Acid) to support hormonal balance, skin elasticity, and ease menstrual cycles.' },
      { name: 'Safflower Oil', dose: '100 mg', desc: 'Rich in linoleic acid to help lock in skin moisture, promote hair vitality, and maintain healthy metabolism.' },
      { name: 'Glow & Hair Complex', dose: '30 mg', desc: 'Amino acids (like L-Cysteine) and Aloe Vera extract that promote keratin production for stronger hair, nails, and a radiant complexion.' },
      { name: 'Active Omega Blend', dose: '350 mg', desc: 'Comprehensive fatty acid spectrum (Omegas 3-5-6-7-9) to support heart health, mental wellbeing, and cellular skin glow.' },
      { name: 'Essential Blood & Cell Care', dose: '600 mcg', desc: 'Folic acid and Iron blend that maintains healthy red blood cell production, cellular oxygenation, and supports female reproductive wellness.' },
      { name: 'Energy & Mood Support', dose: 'Clinical Dose', desc: 'A full spectrum of B-vitamins to help combat fatigue, support nervous health, and keep mood balanced.' }
    ],
    howToUse: 'Take 2 softgels daily (1 pink multivitamin softgel + 1 yellow Omega softgel) with a meal. Swallow whole with a full glass of water.',
    faqs: [
      { q: 'What makes PROWOMAN YOUNG unique?', a: 'It combines a highly targeted young women\'s multivitamin (with Safflower Oil, Evening Primrose, and Aloe Vera) with a full-spectrum Omega 3-5-6-7-9 softgel. It specifically targets hormonal balance, skin glow, and active vitality.' },
      { q: 'How does it help with menstrual cycles?', a: 'The inclusion of Evening Primrose Oil and Borage Oil provides high levels of Gamma-Linolenic Acid (GLA), which plays a critical role in managing hormonal balance and reducing cyclical bloating or cramps.' },
      { q: 'Is it NAFDAC registered?', a: 'Yes! Like all Greenlife Day by Day products, it is fully registered and approved by NAFDAC, ensuring highest clinical safety standards.' }
    ],
    reviews: [
      { author: 'Zainab A.', rating: 5, date: '5 days ago', title: 'My skin is glowing!', content: 'I\'ve tried many multivitamins, but the Safflower and Evening Primrose oils in this one make it stand out. My cycles have been smoother, and my skin has a beautiful natural glow!' },
      { author: 'Chiamaka U.', rating: 5, date: '3 weeks ago', title: 'Highly recommend this twin pack!', content: 'I love the pink packaging and the dual-capsule format. It\'s so easy to take and has helped me feel active and balanced all month long.' }
    ]
  }
};

export default function ProductDetail({ productId, onBack, onShopRedirect }) {
  const product = productsDetailData[productId] || productsDetailData.pregnancy;
  
  let themeName = `theme-${product.theme || 'purple'}`;

  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [absorptionStep, setAbsorptionStep] = useState(0);

  const handleBuyClick = () => {
    onShopRedirect(product.id);
  };

  // Determine lifestyle image and details dynamically based on product type
  let routineImage = '/assets/lifestyle-hands.jpg';
  let routineTitle = 'Made for Daily Rituals';
  let routineDesc = 'Designed to fit cleanly into your daily life. No chemical smell, no giant chalky pills—just simple daily wellness that fits in the palm of your hand.';
  let routineTag = 'Daily Ritual';

  if (productId === 'omg') {
    routineImage = '/assets/lifestyle-gym.jpg';
    routineTitle = 'Elevate Your Active Vibe';
    routineDesc = 'Pack OMG in your gym bag. Sourced from cold-pressed botanical oils, our softgels support your post-workout metabolic fuel and active cellular skin glow.';
    routineTag = 'Active Vibe';
  } else if (productId === 'pregnancy-plus') {
    routineImage = '/assets/lifestyle-travel.jpg';
    routineTitle = 'Your Premium Travel Companion';
    routineDesc = 'Never miss a day of cognitive prenatal care. The Pregnancy Plus twin pack is ready to slide into your handbag or carry-on, keeping you and your baby supported wherever you go.';
    routineTag = 'On the Go';
  } else if (productId === 'proman') {
    routineImage = '/assets/lifestyle-gym.jpg';
    routineTitle = 'Fuel Your Daily Performance';
    routineDesc = 'Engineered for men on the move. Pair your daily PROMAN multivitamin and Omega softgels with your morning routine or post-workout fuel to sustain focus and drive all day.';
    routineTag = 'Male Vitality';
  } else if (productId === 'prowoman-young') {
    routineImage = '/assets/lifestyle-models.jpg';
    routineTitle = 'Share the Daily Glow';
    routineDesc = 'Formulated for active, modern women. Safflower Oil and Evening Primrose Oil keep your skin hydrated and hair vibrant, helping you feel balanced and glowing, inside and out.';
    routineTag = 'Skin & Balance';
  }

  return (
    <div className={`detail-page ${themeName}`}>
      
      {/* Top Navigation Row */}
      <div className="container nav-row">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={16} style={{ marginRight: '6px' }} />
          Back to Products
        </button>
      </div>

      {/* Hero Detail Section */}
      <section className="detail-hero">
        <div className="detail-hero-container container">
          {/* Product Image Panel */}
          <div className="detail-img-panel">
            <img 
              src={product.image} 
              alt={product.title} 
              className="detail-product-image animate-float"
            />
            <div className="detail-image-shadow"></div>
          </div>

          {/* Product Info Panel */}
          <div className="detail-info-panel">
            <span className="detail-type-badge">{product.type}</span>
            <h1 className="detail-title">{product.title}</h1>
            <p className="detail-tagline">"{product.tagline}"</p>
            <p className="detail-subtitle">{product.subtitle}</p>

            {/* Bullet List */}
            <div className="detail-bullets-list">
              {product.bullets.map((bullet, idx) => (
                <div key={idx} className="detail-bullet-item">
                  <div className="bullet-check-icon"><Check size={12} /></div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Size & Checkout */}
            <div className="detail-purchase-row">
              <div className="detail-price-box">
                <span className="detail-size" style={{ fontSize: '1.4rem', fontWeight: 800 }}>{product.size}</span>
              </div>

              <div className="detail-actions">
                <button 
                  className={`btn-round btn-buy-now`}
                  onClick={handleBuyClick}
                >
                  <ShoppingCart size={18} style={{ marginRight: '8px' }} />
                  Buy Now
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="detail-trust-badges">
              <div className="trust-badge">
                <ShieldCheck size={18} className="trust-icon-green" />
                <span>NAFDAC Reg. Certified</span>
              </div>
              <div className="trust-badge">
                <Award size={18} className="trust-icon-purple" />
                <span>Greenlife Pharma Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Ingredient Section */}
      <section className="ingredients-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Nutrient Science</span>
            <h2 className="section-title">What's Inside Matters</h2>
            <p className="section-subtitle">
              Click on any active nutrient below to discover the scientific role it plays in everyday health.
            </p>
          </div>

          <div className="ingredients-grid">
            {product.ingredients.map((ing, idx) => (
              <button 
                key={idx}
                className={`ingredient-card ${selectedIngredient === ing.name ? 'active' : ''}`}
                onClick={() => setSelectedIngredient(selectedIngredient === ing.name ? null : ing.name)}
              >
                <div className="ingredient-top">
                  <h3 className="ing-name">{ing.name}</h3>
                  <span className="ing-dose">{ing.dose}</span>
                </div>
                <p className="ing-short-desc">{ing.desc}</p>
                <div className="ing-learn-more">
                  <span>{selectedIngredient === ing.name ? 'Show less' : 'View scientific benefit'}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active explanation panel */}
          {selectedIngredient && (
            <div className="ingredient-detail-panel animate-slide-up">
              <div className="detail-panel-icon">🔬</div>
              <div>
                <h4 className="detail-panel-title">The Science behind {selectedIngredient}</h4>
                <p className="detail-panel-text">
                  {product.ingredients.find(i => i.name === selectedIngredient)?.desc} Formulated in precise clinical ratios in our softgels, ensuring maximum bioavailability and bio-absorption under pharmaceutical grade quality control.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Magnificent Supplement Facts & Digestibility Timeline */}
      <section className="facts-timeline-section">
        <div className="container facts-timeline-grid">
          {/* Supplement Facts Box */}
          <div className="supplement-facts-box">
            <h3 className="facts-header-title">Supplement Facts</h3>
            <p className="facts-servings">Serving Size: {['pregnancy-plus', 'proman', 'prowoman-young'].includes(productId) ? '2 Softgels Daily' : '1 Softgel Daily'}</p>
            <p className="facts-servings border-bottom">Servings Per Container: 30</p>
            
            <div className="facts-row header-row">
              <span>Amount Per Serving</span>
              <span>% Daily Value (DV)*</span>
            </div>

            {productId === 'pregnancy' && (
              <>
                <div className="facts-row"><span>Folic Acid</span><span>600 mcg (150%)</span></div>
                <div className="facts-row"><span>Vitamin D3 (Cholecalciferol)</span><span>600 IU (150%)</span></div>
                <div className="facts-row"><span>Vitamin E (Tocopheryl Acetate)</span><span>5 mg (33%)</span></div>
                <div className="facts-row"><span>Vitamin C (Ascorbic Acid)</span><span>30 mg (50%)</span></div>
                <div className="facts-row"><span>Iron (as Ferrous Fumarate)</span><span>15 mg (83%)</span></div>
                <div className="facts-row"><span>L-Lysine Hydrochloride</span><span>5 mg (†)</span></div>
                <div className="facts-row"><span>L-Arginine</span><span>5 mg (†)</span></div>
                <div className="facts-row last-row"><span>Probiotics (S. Faecalis)</span><span>1.6 Billion CFU (†)</span></div>
              </>
            )}

            {productId === 'omg' && (
              <>
                <div className="facts-row"><span>Virgin Coconut Oil</span><span>500 mg (†)</span></div>
                <div className="facts-row"><span>Avocado & Grape Seed Oils</span><span>250 mg (†)</span></div>
                <div className="facts-row"><span>Omega 3-5-6-7-9 Complex</span><span>400 mg (†)</span></div>
                <div className="facts-row"><span>Vitamin E (Tocopheryl)</span><span>15 IU (50%)</span></div>
                <div className="facts-row"><span>Vitamin D3 (Cholecalciferol)</span><span>400 IU (100%)</span></div>
                <div className="facts-row"><span>Vitamin A (Retinol)</span><span>1500 IU (30%)</span></div>
                <div className="facts-row last-row"><span>Rice Bran Oil Infusion</span><span>100 mg (†)</span></div>
              </>
            )}

            {productId === 'pregnancy-plus' && (
              <>
                <div className="facts-row"><span>Folic Acid</span><span>600 mcg (150%)</span></div>
                <div className="facts-row"><span>Vitamin D3 (Cholecalciferol)</span><span>600 IU (150%)</span></div>
                <div className="facts-row"><span>Vitamin E (Tocopheryl Acetate)</span><span>5 mg (33%)</span></div>
                <div className="facts-row"><span>Vitamin C (Ascorbic Acid)</span><span>30 mg (50%)</span></div>
                <div className="facts-row"><span>Iron (as Ferrous Fumarate)</span><span>15 mg (83%)</span></div>
                <div className="facts-row"><span>Omega-3 Fish Oil (300mg DHA / 75mg EPA)</span><span>375 mg (†)</span></div>
                <div className="facts-row"><span>Flaxseed & Olive Oil (Omega 6-9)</span><span>150 mg (†)</span></div>
                <div className="facts-row"><span>L-Lysine & L-Arginine Complex</span><span>10 mg (†)</span></div>
                <div className="facts-row last-row"><span>Inositol</span><span>5 mg (†)</span></div>
              </>
            )}

            {productId === 'proman' && (
              <>
                <div className="facts-row"><span>Coenzyme Q10</span><span>15 mg (†)</span></div>
                <div className="facts-row"><span>Ginseng Extract</span><span>20 mg (†)</span></div>
                <div className="facts-row"><span>L-Arginine & L-Carnitine Complex</span><span>25 mg (†)</span></div>
                <div className="facts-row"><span>Omega 3-5-6-7-9 Complex</span><span>350 mg (†)</span></div>
                <div className="facts-row"><span>Zinc & Selenium</span><span>12 mg (100%)</span></div>
                <div className="facts-row"><span>Vitamin B-Complex (B1-B12)</span><span>Clinical Dose (100%)</span></div>
                <div className="facts-row last-row"><span>Vitamin A, C, D3, E</span><span>Daily Balance (100%)</span></div>
              </>
            )}

            {productId === 'prowoman-young' && (
              <>
                <div className="facts-row"><span>Evening Primrose & Borage Oils</span><span>150 mg (†)</span></div>
                <div className="facts-row"><span>Safflower Oil</span><span>100 mg (†)</span></div>
                <div className="facts-row"><span>L-Cysteine & Aloe Vera Complex</span><span>30 mg (†)</span></div>
                <div className="facts-row"><span>Omega 3-5-6-7-9 Complex</span><span>350 mg (†)</span></div>
                <div className="facts-row"><span>Folic Acid & Iron</span><span>600 mcg / 18 mg (150% / 100%)</span></div>
                <div className="facts-row"><span>Complete Vitamin B-Complex</span><span>Clinical Dose (100%)</span></div>
                <div className="facts-row last-row"><span>Vitamin A, C, D3, E, K</span><span>Daily Balance (100%)</span></div>
              </>
            )}

            <p className="facts-disclaimer">* Percent Daily Values are based on a 2,000 calorie diet.</p>
            <p className="facts-disclaimer">† Daily Value (DV) not established.</p>
            <div className="facts-nafdac-stamp">
              <span>NAFDAC Reg No: A7-102826</span>
            </div>
          </div>

          {/* Digestibility Absorption Timeline */}
          <div className="digest-timeline-box">
            <span className="timeline-badge">Clinical Absorption</span>
            <h3 className="timeline-title">Softgel Release Timeline</h3>
            <p className="timeline-desc">
              Our softgel shell is engineered to disintegrate rapidly, facilitating stomach-friendly absorption without nausea. Click a stage to see the molecular breakdown:
            </p>

            <div className="timeline-steps">
              <button 
                className={`timeline-step-btn ${absorptionStep === 0 ? 'active' : ''}`}
                onClick={() => setAbsorptionStep(0)}
              >
                <div className="t-step-num">0m</div>
                <span>Ingestion</span>
              </button>
              <button 
                className={`timeline-step-btn ${absorptionStep === 1 ? 'active' : ''}`}
                onClick={() => setAbsorptionStep(1)}
              >
                <div className="t-step-num">15m</div>
                <span>Dissolution</span>
              </button>
              <button 
                className={`timeline-step-btn ${absorptionStep === 2 ? 'active' : ''}`}
                onClick={() => setAbsorptionStep(2)}
              >
                <div className="t-step-num">45m</div>
                <span>Duodenum</span>
              </button>
              <button 
                className={`timeline-step-btn ${absorptionStep === 3 ? 'active' : ''}`}
                onClick={() => setAbsorptionStep(3)}
              >
                <div className="t-step-num">2h</div>
                <span>Assimilation</span>
              </button>
            </div>

            <div className="timeline-step-display animate-slide-up">
              {absorptionStep === 0 && (
                <>
                  <h4 className="t-step-title">Stage 1: Softgel is Swallowed (0 minutes)</h4>
                  <p className="t-step-text">The softgel enters the stomach. Its gelatin shell remains intact initially, protecting the inner botanical and active vitamins from early acidic break-down, preventing aftertaste.</p>
                </>
              )}
              {absorptionStep === 1 && (
                <>
                  <h4 className="t-step-title">Stage 2: Outer Shell Dissolves (15 minutes)</h4>
                  <p className="t-step-text">Stomach warmth and enzymes dissolve the gelatin casing. The coconut carrier oil (in OMG) or active probiotics are released. Probiotics buffer the stomach, preventing standard prenatal nausea.</p>
                </>
              )}
              {absorptionStep === 2 && (
                <>
                  <h4 className="t-step-title">Stage 3: Intestinal Transport (45 minutes)</h4>
                  <p className="t-step-text">The mixture enters the small intestine (duodenum). Highly bioavailable active elements—like Folic Acid, L-Lysine, L-Arginine, and Vitamins—cross the mucosal lining into the bloodstream.</p>
                </>
              )}
              {absorptionStep === 3 && (
                <>
                  <h4 className="t-step-title">Stage 4: Target Cellular Assimilation (2 hours)</h4>
                  <p className="t-step-text">The full spectrum Omegas (3-5-6-7-9), DHA, and fat-soluble vitamins (A, D3, E) settle into maternal vascular systems, target fetal brain tissues, and skin cell lining, producing the signature daily glow.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How to Take & FAQ */}
      <section className="usage-faq-section container">
        <div className="grid-2">
          {/* How to take card */}
          <div className="usage-card">
            <h3 className="section-title-small">How to Take Your Softgel</h3>
            <p className="usage-desc">{product.howToUse}</p>
            <div className="usage-features">
              <div className="use-feat">
                <div className="use-feat-bullet">1</div>
                <span>Easy-to-swallow clinical softgel</span>
              </div>
              <div className="use-feat">
                <div className="use-feat-bullet">2</div>
                <span>Gentle formula (with coconut & botanical oils)</span>
              </div>
              <div className="use-feat">
                <div className="use-feat-bullet">3</div>
                <span>Purity tested, zero synthetic colorings</span>
              </div>
            </div>
          </div>

          {/* FAQ Accordions */}
          <div className="faqs-container">
            <h3 className="section-title-small">Frequently Asked Questions</h3>
            <div className="faqs-list">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <h4 className="faq-question">
                    <HelpCircle size={16} className="faq-icon" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="faq-answer">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Routine Lifestyle Banner */}
      <section className="routine-lifestyle-section container">
        <div className="routine-grid">
          <div className="routine-content">
            <span className="routine-badge-tag">{routineTag}</span>
            <h2 className="routine-title-large">{routineTitle}</h2>
            <p className="routine-text-desc">{routineDesc}</p>
            <div className="routine-bullet-points">
              <div className="routine-bullet-pt">
                <span className="bullet-dot">•</span>
                <span>100% Bioavailable Formulas</span>
              </div>
              <div className="routine-bullet-pt">
                <span className="bullet-dot">•</span>
                <span>Aesthetic Box fits anywhere</span>
              </div>
              <div className="routine-bullet-pt">
                <span className="bullet-dot">•</span>
                <span>NAFDAC Approved Quality</span>
              </div>
            </div>
          </div>
          <div className="routine-image-wrapper">
            <img src={routineImage} alt={routineTitle} className="routine-img" />
          </div>
        </div>
      </section>

      {/* Product Reviews */}
      <section className="reviews-section container">
        <div className="reviews-header">
          <h3 className="section-title-small">Verified Customer Reviews</h3>
          <div className="rating-summary">
            <div className="stars">
              <Star size={16} fill="var(--color-accent-yellow)" color="var(--color-accent-yellow)" />
              <Star size={16} fill="var(--color-accent-yellow)" color="var(--color-accent-yellow)" />
              <Star size={16} fill="var(--color-accent-yellow)" color="var(--color-accent-yellow)" />
              <Star size={16} fill="var(--color-accent-yellow)" color="var(--color-accent-yellow)" />
              <Star size={16} fill="var(--color-accent-yellow)" color="var(--color-accent-yellow)" />
            </div>
            <span>5.0 out of 5 stars (based on 12 verified reviews)</span>
          </div>
        </div>

        <div className="reviews-list">
          {product.reviews.map((rev, idx) => (
            <div key={idx} className="review-card">
              <div className="review-card-top">
                <div className="review-author-side">
                  <div className="author-avatar">{rev.author.substring(0,1)}</div>
                  <div>
                    <h4 className="review-author">{rev.author}</h4>
                    <span className="verified-badge">Verified Buyer</span>
                  </div>
                </div>
                <span className="review-date">{rev.date}</span>
              </div>
              <div className="review-stars">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--color-accent-yellow)" color="var(--color-accent-yellow)" />
                ))}
              </div>
              <h5 className="review-title">{rev.title}</h5>
              <p className="review-content">"{rev.content}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal removed to bypass B2B price calculator */}

      <style>{`
        .detail-page {
          background-color: var(--color-bg-base);
          margin-top: 80px;
          padding-bottom: 60px;
        }
        
        .nav-row {
          padding: 24px;
        }
        
        .btn-back {
          display: inline-flex;
          align-items: center;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-muted);
        }
        
        .btn-back:hover {
          color: var(--color-preg-primary);
        }
        
        /* Hero Section */
        .detail-hero {
          padding: 20px 0 60px;
        }
        
        .detail-hero-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }
        
        /* Image Panel */
        .detail-img-panel {
          position: relative;
          height: 480px;
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
        }
        
        .detail-product-image {
          max-height: 400px;
          object-fit: contain;
          z-index: 2;
        }
        
        .detail-image-shadow {
          position: absolute;
          bottom: 20px;
          width: 80%;
          height: 25px;
          background: radial-gradient(ellipse at center, rgba(110,100,120,0.18) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          z-index: 1;
        }
        
        /* Info Panel */
        .detail-info-panel {
          display: flex;
          flex-direction: column;
        }
        
        .detail-type-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          width: fit-content;
          margin-bottom: 12px;
        }
        
        .theme-purple .detail-type-badge { background-color: var(--color-preg-light); color: var(--color-preg-primary); }
        .theme-orange .detail-type-badge { background-color: var(--color-pregplus-light); color: var(--color-pregplus-primary); }
        .theme-green .detail-type-badge { background-color: var(--color-accent-green-light); color: var(--color-accent-green); }
        .theme-blue .detail-type-badge { background-color: var(--color-blue-light); color: var(--color-blue-primary); }
        .theme-pink .detail-type-badge { background-color: var(--color-pink-light); color: var(--color-pink-primary); }
        
        .detail-title {
          font-size: 3rem;
          color: var(--color-text-dark);
          line-height: 1.1;
          margin-bottom: 8px;
          font-family: var(--font-serif);
          font-weight: 400;
        }
        
        .detail-tagline {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 16px;
        }
        
        .theme-purple .detail-tagline { color: var(--color-preg-primary); }
        .theme-orange .detail-tagline { color: var(--color-pregplus-primary); }
        .theme-green .detail-tagline { color: var(--color-accent-green); }
        .theme-blue .detail-tagline { color: var(--color-blue-accent); }
        .theme-pink .detail-tagline { color: var(--color-pink-accent); }
        
        .detail-subtitle {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        /* Bullet list */
        .detail-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 30px;
        }
        
        .detail-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text-dark);
        }
        
        .bullet-check-icon {
          width: 20px;
          height: 20px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .theme-purple .bullet-check-icon { background-color: var(--color-preg-light); color: var(--color-preg-primary); }
        .theme-orange .bullet-check-icon { background-color: var(--color-pregplus-light); color: var(--color-pregplus-primary); }
        .theme-green .bullet-check-icon { background-color: var(--color-accent-green-light); color: var(--color-accent-green); }
        .theme-blue .bullet-check-icon { background-color: var(--color-blue-light); color: var(--color-blue-primary); }
        .theme-pink .bullet-check-icon { background-color: var(--color-pink-light); color: var(--color-pink-primary); }
        
        /* Purchase Area */
        .detail-purchase-row {
          display: flex;
          align-items: center;
          gap: 30px;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          padding: 20px 0;
          margin-bottom: 24px;
        }
        
        .detail-price-box {
          display: flex;
          flex-direction: column;
        }
        
        .detail-price {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-text-dark);
          line-height: 1.1;
        }
        
        .detail-size {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }
        
        .btn-buy-now {
          padding: 14px 40px;
          font-size: 1.05rem;
        }
        
        .theme-purple .btn-buy-now { background-color: var(--color-preg-primary); color: var(--color-white); }
        .theme-purple .btn-buy-now:hover { background-color: var(--color-preg-dark); }
        .theme-orange .btn-buy-now { background-color: var(--color-pregplus-primary); color: var(--color-white); }
        .theme-orange .btn-buy-now:hover { background-color: var(--color-pregplus-dark); }
        .theme-green .btn-buy-now { background-color: var(--color-accent-green); color: var(--color-white); }
        .theme-green .btn-buy-now:hover { background-color: #2c855a; }
        .theme-blue .btn-buy-now { background-color: var(--color-blue-primary); color: var(--color-white); }
        .theme-blue .btn-buy-now:hover { background-color: var(--color-blue-dark); }
        .theme-pink .btn-buy-now { background-color: var(--color-pink-primary); color: var(--color-white); }
        .theme-pink .btn-buy-now:hover { background-color: var(--color-pink-dark); }
        
        .detail-trust-badges {
          display: flex;
          gap: 20px;
        }
        
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }
        
        .trust-icon-green { color: var(--color-accent-green); }
        .trust-icon-purple { color: var(--color-preg-primary); }
        
        /* Ingredients Section */
        .ingredients-section {
          padding: 60px 0;
          background-color: var(--color-white);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        
        .ingredients-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 30px;
        }
        
        .ingredient-card {
          background-color: var(--color-bg-base);
          border: 2px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 24px;
          text-align: left;
          transition: var(--transition-bounce);
          display: flex;
          flex-direction: column;
        }
        
        .ingredient-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 8px;
        }
        
        .ing-name {
          font-size: 1.1rem;
          color: var(--color-text-dark);
        }
        
        .ing-dose {
          font-size: 0.85rem;
          font-weight: 700;
        }
        
        .theme-purple .ing-dose { color: var(--color-preg-primary); }
        .theme-orange .ing-dose { color: var(--color-pregplus-primary); }
        .theme-green .ing-dose { color: var(--color-accent-green); }
        .theme-blue .ing-dose { color: var(--color-blue-primary); }
        .theme-pink .ing-dose { color: var(--color-pink-primary); }
        
        .ing-short-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.4;
          margin-bottom: 16px;
        }
        
        .ing-learn-more {
          margin-top: auto;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .theme-purple .ing-learn-more { color: var(--color-preg-primary); }
        .theme-orange .ing-learn-more { color: var(--color-pregplus-primary); }
        .theme-green .ing-learn-more { color: var(--color-accent-green); }
        .theme-blue .ing-learn-more { color: var(--color-blue-primary); }
        .theme-pink .ing-learn-more { color: var(--color-pink-primary); }
        
        .ingredient-card:hover, .ingredient-card.active {
          transform: translateY(-5px);
        }
        
        .theme-purple .ingredient-card:hover, .theme-purple .ingredient-card.active {
          background-color: var(--color-preg-light);
          border-color: var(--color-preg-primary);
        }
        
        .theme-orange .ingredient-card:hover, .theme-orange .ingredient-card.active {
          background-color: var(--color-pregplus-light);
          border-color: var(--color-pregplus-primary);
        }
        
        .theme-green .ingredient-card:hover, .theme-green .ingredient-card.active {
          background-color: var(--color-accent-green-light);
          border-color: var(--color-accent-green);
        }
        
        .theme-blue .ingredient-card:hover, .theme-blue .ingredient-card.active {
          background-color: var(--color-blue-light);
          border-color: var(--color-blue-primary);
        }
        
        .theme-pink .ingredient-card:hover, .theme-pink .ingredient-card.active {
          background-color: var(--color-pink-light);
          border-color: var(--color-pink-primary);
        }
        
        /* Ingredient detail panel */
        .ingredient-detail-panel {
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          border: 1px solid var(--color-border);
        }
        
        .theme-purple .ingredient-detail-panel { background-color: var(--color-preg-light); border-color: var(--color-preg-secondary); }
        .theme-orange .ingredient-detail-panel { background-color: var(--color-pregplus-light); border-color: var(--color-pregplus-secondary); }
        .theme-green .ingredient-detail-panel { background-color: var(--color-accent-green-light); border-color: var(--color-border); }
        .theme-blue .ingredient-detail-panel { background-color: var(--color-blue-light); border-color: var(--color-blue-secondary); }
        .theme-pink .ingredient-detail-panel { background-color: var(--color-pink-light); border-color: var(--color-pink-secondary); }

        .section-title, .timeline-title {
          font-family: var(--font-serif);
          font-weight: 400;
        }
        
        .detail-panel-icon {
          font-size: 1.8rem;
          line-height: 1;
        }
        
        .detail-panel-title {
          font-size: 1.1rem;
          color: var(--color-text-dark);
          margin-bottom: 6px;
        }
        
        .detail-panel-text {
          font-size: 0.92rem;
          color: var(--color-text-dark);
          line-height: 1.5;
        }
        
        /* Usage & FAQ Section */
        .usage-faq-section {
          padding: 60px 24px;
        }
        
        .section-title-small {
          font-size: 1.5rem;
          color: var(--color-text-dark);
          margin-bottom: 24px;
          border-bottom: 2px solid var(--color-border);
          padding-bottom: 10px;
          font-family: var(--font-serif);
          font-weight: 400;
        }
        
        .usage-card {
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          padding: 40px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
        }
        
        .usage-desc {
          font-size: 1.05rem;
          color: var(--color-text-dark);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .usage-features {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        
        .use-feat {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          font-weight: 600;
        }
        
        .use-feat-bullet {
          width: 24px;
          height: 24px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
        }
        
        .theme-purple .use-feat-bullet { background-color: var(--color-preg-light); color: var(--color-preg-primary); }
        .theme-orange .use-feat-bullet { background-color: var(--color-pregplus-light); color: var(--color-pregplus-primary); }
        .theme-green .use-feat-bullet { background-color: var(--color-accent-green-light); color: var(--color-accent-green); }
        .theme-blue .use-feat-bullet { background-color: var(--color-blue-light); color: var(--color-blue-primary); }
        .theme-pink .use-feat-bullet { background-color: var(--color-pink-light); color: var(--color-pink-primary); }
        
        .faq-item {
          margin-bottom: 16px;
          background-color: var(--color-white);
          padding: 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
        }
        
        .faq-question {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: var(--color-text-dark);
          margin-bottom: 8px;
        }
        
        .faq-icon {
          flex-shrink: 0;
        }
        
        .theme-purple .faq-icon { color: var(--color-preg-primary); }
        .theme-orange .faq-icon { color: var(--color-pregplus-primary); }
        .theme-green .faq-icon { color: var(--color-accent-green); }
        .theme-blue .faq-icon { color: var(--color-blue-primary); }
        .theme-pink .faq-icon { color: var(--color-pink-primary); }
        
        .faq-answer {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.4;
          padding-left: 26px;
        }
        
        /* Reviews Section */
        .reviews-section {
          padding: 40px 24px 80px;
        }
        
        .reviews-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 30px;
          border-bottom: 2px solid var(--color-border);
          padding-bottom: 16px;
        }
        
        .rating-summary {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }
        
        .reviews-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        
        .review-card {
          background-color: var(--color-white);
          border-radius: var(--radius-md);
          padding: 24px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
        }
        
        .review-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        
        .review-author-side {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .author-avatar {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        
        .theme-purple .author-avatar { background-color: var(--color-preg-light); color: var(--color-preg-primary); }
        .theme-orange .author-avatar { background-color: var(--color-pregplus-light); color: var(--color-pregplus-primary); }
        .theme-green .author-avatar { background-color: var(--color-accent-green-light); color: var(--color-accent-green); }
        .theme-blue .author-avatar { background-color: var(--color-blue-light); color: var(--color-blue-primary); }
        .theme-pink .author-avatar { background-color: var(--color-pink-light); color: var(--color-pink-primary); }
        
        .review-author {
          font-size: 0.95rem;
          color: var(--color-text-dark);
          line-height: 1.1;
        }
        
        .verified-badge {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-accent-green);
        }
        
        .review-date {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
        
        .review-stars {
          margin-bottom: 8px;
        }
        
        .review-title {
          font-size: 1rem;
          color: var(--color-text-dark);
          margin-bottom: 6px;
        }
        
        .review-content {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.4;
        }
        
        /* Commerce Portal Modal */
        .portal-overlay {
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
        
        .portal-modal {
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 650px;
          padding: 40px;
          text-align: center;
          box-shadow: var(--shadow-hover);
          position: relative;
        }
        
        .portal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          font-weight: 700;
          color: var(--color-text-muted);
        }
        
        .portal-close:hover {
          color: var(--color-text-dark);
        }
        
        .portal-icon {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }
        
        .portal-title {
          font-size: 1.85rem;
          color: var(--color-text-dark);
          margin-bottom: 8px;
        }
        
        .portal-desc {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          margin-bottom: 30px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .portal-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .portal-card-btn {
          background-color: var(--color-bg-base);
          border: 2px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 24px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: var(--transition-bounce);
        }
        
        .portal-card-btn:hover {
          border-color: var(--color-preg-primary);
          background-color: var(--color-preg-light);
          transform: translateY(-5px);
        }
        
        .portal-card-btn.b2b:hover {
          border-color: var(--color-pregplus-primary);
          background-color: var(--color-pregplus-light);
        }
        
        .p-option-title {
          font-size: 1.05rem;
          color: var(--color-text-dark);
          margin-bottom: 8px;
        }
        
        .p-option-desc {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.4;
          margin-bottom: 20px;
          flex: 1;
        }
        
        .portal-security-notice {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }
        
        /* Contextual Routine Lifestyle Banner */
        .routine-lifestyle-section {
          padding: 60px 24px;
        }
        
        .routine-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          padding: 48px;
          box-shadow: var(--shadow-sm);
        }
        
        .routine-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .routine-badge-tag {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
          color: var(--color-preg-primary);
        }
        
        .theme-orange .routine-badge-tag {
          color: var(--color-pregplus-primary);
        }
        
        .theme-green .routine-badge-tag {
          color: var(--color-accent-green);
        }
        
        .theme-blue .routine-badge-tag {
          color: var(--color-blue-primary);
        }
        
        .theme-pink .routine-badge-tag {
          color: var(--color-pink-primary);
        }
        
        .routine-title-large {
          font-size: 2.25rem;
          color: var(--color-text-dark);
          margin-bottom: 20px;
          line-height: 1.2;
          font-family: var(--font-serif);
          font-weight: 400;
        }
        
        .routine-text-desc {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .routine-bullet-points {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .routine-bullet-pt {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-dark);
        }
        
        .routine-bullet-pt .bullet-dot {
          color: var(--color-preg-primary);
          font-size: 1.5rem;
          line-height: 1;
        }
        
        .theme-orange .routine-bullet-pt .bullet-dot {
          color: var(--color-pregplus-primary);
        }
        
        .theme-green .routine-bullet-pt .bullet-dot {
          color: var(--color-accent-green);
        }
        
        .theme-blue .routine-bullet-pt .bullet-dot {
          color: var(--color-blue-primary);
        }
        
        .theme-pink .routine-bullet-pt .bullet-dot {
          color: var(--color-pink-primary);
        }
        
        .routine-image-wrapper {
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 380px;
          box-shadow: var(--shadow-md);
        }
        
        .routine-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-bounce);
        }
        
        .routine-grid:hover .routine-img {
          transform: scale(1.03);
        }

        /* Responsive design */
        @media (max-width: 968px) {
          .detail-hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .detail-img-panel {
            height: 360px;
          }
          .detail-product-image {
            max-height: 320px;
          }
          .ingredients-grid {
            grid-template-columns: 1fr;
          }
          .reviews-list {
            grid-template-columns: 1fr;
          }
          .portal-options {
            grid-template-columns: 1fr;
          }
          .routine-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 24px;
          }
          .routine-image-wrapper {
            height: 280px;
            order: -1;
          }
        }
      `}</style>
    </div>
  );
}
