/**
 * Canonical product data repository for Day By Day by Greenlife.
 * Reconciled against "DP Basic Day By Day (1) - DBD Basic Details.csv".
 */

export const BENEFIT_FILTERS = [
  { id: 'all', label: 'All Products', count: 8 },
  { id: 'pregnancy-care', label: 'Pregnancy Care', count: 2, group: 'Pregnancy Care' },
  { id: 'womens-daily', label: "Women's Daily", count: 2, group: "Women's Daily" },
  { id: 'mens-daily', label: "Men's Daily", count: 2, group: "Men's Daily" },
  { id: 'general-daily', label: 'General Daily', count: 1, group: 'General Daily' },
  { id: 'weight-management', label: 'Weight Management', count: 1, group: 'Weight Management' },
  { id: 'brain-health', label: 'Brain Health', count: 1, group: 'Brain Health' },
  { id: 'heart-health', label: 'Heart Health', count: 1, group: 'Heart Health' },
  { id: 'anti-aging', label: 'Anti-aging', count: 1, group: 'Anti-aging' }
];

export const PRODUCTS_DATA = [
  {
    id: 'prowoman-young',
    title: 'Day By Day Prowoman Young',
    shortName: 'Prowoman Young',
    group: "Women's Daily",
    benefitCategories: ['womens-daily'],
    subtitle: '60 Softgels (30 + 30). Dual-pack with Dong Quai, Black Cohosh & Shatavari paired with Omega 3-5-6-7-9.',
    differentiator: 'Balanced cycles, vibrant skin & hair, and active everyday energy.',
    type: "Women's Daily",
    image: '/assets/prowoman-young.png',
    theme: 'pink',
    price: '₦18,500',
    hasConfirmedPrice: true,
    hasConfirmedImage: true,
    packSize: '60 Softgels (30 + 30)',
    ingredientCount: 41,
    nafdacReg: 'A7-102813',
    nafdacDisplay: 'A7-102813',
    isNafdacPending: false,
    targetAudience: 'Adult women (18–40 years).',
    description: 'Twin-pack: 30 black softgels of Multivitamin, Minerals, Amino Acids, Natural Extracts & Safflower Oil plus 30 transparent green softgels of Omega 3-5-6-7-9 with Vitamins, Avocado Oil, Rice Bran Oil & Grape Seed Oil.',
    benefits: [
      'Vibrant skin and hair',
      'Balanced and comfortable cycles',
      'Optimise overall wellbeing'
    ],
    bullets: [
      'Supports vibrant skin and hair vitality',
      'Promotes balanced and comfortable cycles',
      'Dual-pack with full-spectrum 3-5-6-7-9 Omega'
    ],
    usp: 'THE ONLY TWIN-PACK BUILT WITH FULL SPECTRUM OMEGA FOR YOUNG WOMEN | 41 actives with Dong Quai, Black Cohosh and Shatavari for balanced cycles and skin/hair vitality, paired with a 3-5-6-7-9 omega',
    ingredientsPanel: [
      {
        section: 'A: Multivitamin, Minerals, Amino Acids, Natural Extracts & Safflower Oil (30 Black Softgels)',
        items: [
          'Beta Carotene (10% Dispersion)', 'Vitamin B1', 'Vitamin B2', 'Vitamin B6', 'Niacinamide (B3)',
          'Calcium Pantothenate (B5)', 'Vitamin B12', 'Vitamin K', 'Vitamin C', 'Vitamin E',
          'Vitamin D3', 'Folic Acid (B9)', 'Choline Bitartrate', 'Inositol', 'Biotin (Vitamin H)',
          'Calcium', 'Iron (15 mg)', 'Magnesium Oxide', 'Potassium', 'Copper',
          'Manganese', 'Zinc (22.5 mg)', 'Sodium Molybdate', 'Sodium Selenite', 'Chromium Picolinate',
          'Cysteine Hydrochloride', 'Lysine Hydrochloride', 'Aloe Vera (Barbados Aloes)', 'Angelica Sinensis (Dong Quai)', 'Safflower Oil (50 mg)',
          'Citrus Lemon Bioflavonoids', 'Black Cohosh (Actaea racemosa)', 'Shatavari (Asparagus racemosus)'
        ]
      },
      {
        section: 'B: Omega 3-5-6-7-9 with Supporting Oils & Vitamins (30 Transparent Green Softgels)',
        items: [
          'Virgin Coconut Oil', 'Vitamin E', 'Vitamin D3', 'Vitamin A',
          'Avocado Oil', 'Grape Seed Oil', 'Rice Bran Oil', 'Omega 3-5-6-7-9 Blend (705 mg)'
        ]
      }
    ],
    howToUse: 'Take 2 softgels daily (1 black multivitamin softgel + 1 green Omega softgel) with a meal. Swallow whole with a full glass of water.',
    faqs: [
      { q: 'What makes Prowoman Young unique?', a: 'It pairs 41 active nutrients including Dong Quai, Black Cohosh, and Shatavari with a full-spectrum 3-5-6-7-9 botanical Omega softgel for menstrual comfort, hair, skin, and daily vitality.' },
      { q: 'Who is Prowoman Young formulated for?', a: 'It is tailored for young adult women seeking daily hormonal comfort, radiant skin, and sustained energy.' },
      { q: 'Is Prowoman Young registered with NAFDAC?', a: 'Yes. NAFDAC Reg. No. A7-102813.' }
    ]
  },

  {
    id: 'prowoman-40-plus',
    title: 'Day By Day Prowoman 40+',
    shortName: 'Prowoman 40+',
    group: "Women's Daily",
    benefitCategories: ['womens-daily'],
    subtitle: '60 Capsules (30 + 30). Formulated for menopause comfort, bone health & mobility, and cellular vitality.',
    differentiator: 'Specialised for women 40+ with Evening Primrose Oil, Dong Quai, Shatavari & full Omega.',
    type: "Women's Daily",
    image: '/assets/placeholder-prowoman-40.svg',
    theme: 'pink',
    price: null,
    hasConfirmedPrice: false,
    hasConfirmedImage: false,
    packSize: '60 Capsules (30 + 30)',
    ingredientCount: 50,
    nafdacReg: 'A7-102817',
    nafdacDisplay: 'A7-102817',
    isNafdacPending: false,
    targetAudience: 'Women aged 40 and above.',
    description: 'Twin-pack: 30 black softgels of Multivitamin, Minerals, Amino Acids, Natural Extracts, Safflower Oil & Evening Primrose Oil plus 30 transparent green softgels of Omega 3-5-6-7-9 with Vitamins, Avocado Oil, Rice Bran Oil & Grape Seed Oil.',
    benefits: [
      'Menopause Comfort',
      'Boosted Energy',
      'Bone Health and Mobility',
      'Smooth and Supple Skin'
    ],
    bullets: [
      'Menopause comfort and hormonal equilibrium',
      'Supports bone health, mobility and daily energy',
      '50 active nutrients with Evening Primrose Oil'
    ],
    usp: 'THE ONLY COMBO PACK SPECIALLY FORMULATED FOR NIGERIAN WOMEN 40+ | Twin-pack for menopause comfort, bone health, energy and skin vitality in one daily duo',
    ingredientsPanel: [
      {
        section: 'A: Multivitamin, Minerals, Amino Acids & Natural Extracts (30 Black Capsules/Softgels)',
        items: [
          'Beta Carotene (10% Dispersion) 3000 mcg', 'Vitamin B1 (Thiamine Mononitrate) 1.5 mg', 'Vitamin B2 (Riboflavin) 1.5 mg', 'Vitamin B6 (Pyridoxine HCl) 2 mg',
          'Niacinamide (Vitamin B3) 20 mg', 'Vitamin B12 (Cyanocobalamin) 6 mcg', 'Vitamin C (Ascorbic Acid) 30 mg', 'Vitamin E (As DL-Alpha Tocopherol Acetate) 10 mg',
          'Vitamin D3 (Cholecalciferol) 400 IU', 'Folic Acid (Vitamin B9) 300 mcg', 'Choline Bitartrate 2500 mcg', 'Inositol 1250 mcg',
          'Biotin (Vitamin H) 30 mcg', 'Calcium Pantothenate (Vitamin B5) 5 mg', 'Vitamin K 30 mcg', 'Calcium (From Dibasic Calcium Phosphate) 72 mg',
          'Iron (From Ferrous Fumarate) 5 mg', 'Magnesium (From Magnesium Oxide) 30 mg', 'Potassium (From Potassium Sulphate) 2 mg', 'Copper (From Copper Sulphate) 500 mcg',
          'Manganese (From Manganese Sulphate) 1.5 mg', 'Zinc Sulphate 22.5 mg', 'Sodium Molybdate 250 mcg', 'Sodium Selenite 70 mcg',
          'Chromium Picolinate 45 mcg', 'Cysteine Hydrochloride 5 mg', 'Lysine Hydrochloride 10 mg', 'Aloe Vera (Barbados Aloes) 1250 mcg',
          'Angelica Sinensis (Dong Quai) 5 mg', 'Safflower Oil 50 mg', 'Citrus Lemon Bioflavonoids 5000 mcg', 'Black Cohosh (Actaea racemosa) 5 mg',
          'Shatavari (Asparagus racemosus) 10 mg'
        ]
      },
      {
        section: 'B: Omega 3-5-6-7-9 with Supporting Oils & Vitamins (30 Transparent Green Softgels)',
        items: [
          'Virgin Coconut Oil 30 mg', 'Vitamin E (As DL-Alpha Tocopherol Acetate) 5 IU', 'Vitamin D3 (Cholecalciferol) 400 IU',
          'Vitamin A (As Palmitate) 600 IU', 'Avocado Oil 10 mg', 'Grape Seed Oil 10 mg',
          'Rice Bran Oil 30 mg', 'Omega 3-5-6-7-9 Blend 705 mg'
        ]
      }
    ],
    notes: 'Description explicitly lists Evening Primrose Oil. Pack size column designates "60 Capsules (30 + 30)". Exact itemised breakdown awaiting packaging artwork confirmation.',
    howToUse: 'Take 2 units daily (1 black multivitamin + 1 green Omega) with a meal. Swallow whole with water.',
    faqs: [
      { q: 'How does Prowoman 40+ differ from Prowoman Young?', a: 'Prowoman 40+ provides 50 active nutrients calibrated specifically for mature women, focusing on menopause comfort, bone density and mobility, energy metabolism, and skin elasticity with Evening Primrose Oil.' },
      { q: 'Is Prowoman 40+ available for purchase right now?', a: 'Online checkout details and pack photography are currently being finalized with Greenlife commerce nodes. Full formula specifications are accessible on this page.' },
      { q: 'What is the NAFDAC registration for Prowoman 40+?', a: 'NAFDAC Reg. No. A7-102817.' }
    ]
  },

  {
    id: 'pregnancy',
    title: 'Day By Day Wellness Pregnancy',
    shortName: 'Wellness Pregnancy',
    group: 'Pregnancy Care',
    benefitCategories: ['pregnancy-care'],
    subtitle: '30 Softgels (3x10). Complete prenatal nutrition in one daily softgel with 600 mcg Folic Acid, 18 mg Iron & Inositol.',
    differentiator: 'Single daily prenatal softgel covering maternal health, neural tube & skeletal formation.',
    type: 'Pregnancy Care',
    image: '/assets/pregnancy-clean.png',
    theme: 'purple',
    price: '₦12,500',
    hasConfirmedPrice: true,
    hasConfirmedImage: true,
    packSize: '30 Softgels (3x10)',
    ingredientCount: 24,
    nafdacReg: 'A7-102912',
    nafdacDisplay: 'A7-102912',
    isNafdacPending: false,
    targetAudience: 'Pregnant women.',
    description: '30 Softgels of Multivitamins, Multiminerals, Mixed Carotenoids, L-Lysine, L-Arginine & Inositol. Nutritional supplement for pregnant women.',
    benefits: [
      "Supports baby's brain & spinal cord development",
      'Healthy bone & skeletal formation',
      'Strong immune system',
      'Red blood cell production',
      'Organ development',
      'Healthy birth weight'
    ],
    bullets: [
      '600 mcg Folic Acid for brain & spinal development',
      '18 mg Iron & Inositol for maternal vitality',
      'Convenient 30-softgel monthly supply (3x10 blister)'
    ],
    usp: 'COMPLETE PRENATAL NUTRITION IN ONE CAPSULE | 600 mcg folic acid + 18 mg Iron + L-Lysine, L-Arginine and Inositol for foetal brain and neural development',
    ingredientsPanel: [
      {
        section: 'Nutritional Supplement for Pregnant Women (30 Softgels)',
        items: [
          'Vitamin D3 (Cholecalciferol)', 'Vitamin E (As DL-Alpha Tocopherol Acetate)', 'Vitamin C (Ascorbic Acid)',
          'Thiamine Mononitrate (Vitamin B1)', 'Riboflavin (Vitamin B2)', 'Niacinamide (Vitamin B3)',
          'Vitamin B6 (Pyridoxine HCl)', 'Folic Acid (Vitamin B9) 600 mcg', 'Vitamin B12 (Cyanocobalamin)',
          'Biotin (Vitamin H)', 'Calcium Pantothenate (Vitamin B5)', 'Magnesium Oxide',
          'Iron (As Ferrous Fumarate) 18 mg', 'Zinc Sulphate Monohydrate', 'Copper (As Copper Sulphate Pentahydrate)',
          'Selenium (From Sodium Selenite)', 'Iodine (As Potassium Iodide)', 'L-Lysine Hydrochloride',
          'L-Arginine', 'Inositol', 'Chromium (From Chromium Picolinate)',
          'Choline Bitartrate', 'Natural Mixed Carotenoids (15% Dispersion)', 'Excipients q.s.'
        ]
      }
    ],
    howToUse: 'Take 1 softgel daily with your main meal. Swallow whole with a full glass of water. Do not chew.',
    faqs: [
      { q: 'When should I take Wellness Pregnancy?', a: 'Take 1 softgel daily with your main meal. It provides essential 600 mcg Folic Acid, 18 mg Iron, L-Lysine, L-Arginine, and Inositol.' },
      { q: 'Does this product contain fish oil?', a: 'No. Wellness Pregnancy is a single-softgel prenatal vitamin/mineral complex. For an added Omega-3 DHA/EPA softgel, choose Wellness Pregnancy Plus.' },
      { q: 'What is the NAFDAC registration?', a: 'NAFDAC Reg. No. A7-102912.' }
    ]
  },

  {
    id: 'pregnancy-plus',
    title: 'Day By Day Wellness Pregnancy Plus',
    shortName: 'Wellness Pregnancy Plus',
    group: 'Pregnancy Care',
    benefitCategories: ['pregnancy-care'],
    subtitle: '60 Softgels (30 + 30). Twin-pack: 30 prenatal softgels + 30 Omega 3-6-9 softgels delivering 300 mg DHA & 75 mg EPA.',
    differentiator: 'Dual-pack delivering DHA 300 mg + 600 mcg Folic Acid + 18 mg Iron across conception to nursing.',
    type: 'Pregnancy Care',
    image: '/assets/pregnancy-plus-detail-view.png',
    theme: 'orange',
    price: '₦18,500',
    hasConfirmedPrice: true,
    hasConfirmedImage: true,
    packSize: '60 Softgels (30 + 30)',
    ingredientCount: 31,
    nafdacReg: 'A7-102896',
    nafdacDisplay: 'A7-102896',
    isNafdacPending: false,
    targetAudience: 'Pre-pregnant, pregnant, and post-pregnant women.',
    description: 'Twin-pack: 30 black softgels of Multivitamins, Multiminerals, Mixed Carotenoids, L-Lysine, L-Arginine & Inositol plus 30 natural transparent softgels of Omega 3-6-9 blend.',
    benefits: [
      "Supports baby's cognitive development",
      'Healthy bone & skeletal development',
      'Healthy birth weight',
      'Organ development',
      'Strong immune system'
    ],
    bullets: [
      'Twin-pack: 30 prenatal softgels + 30 Omega 3-6-9 softgels',
      'Provides 300 mg DHA & 75 mg EPA for foetal brain & eye growth',
      'Comprehensive prenatal & postnatal nutrition'
    ],
    usp: 'ONLY PRENATAL TWIN-PACK IN NIGERIA DELIVERING 300 MG DHA + 600 MCG FOLIC ACID + 18 MG IRON IN ONE DAILY DUO | Spans conception, pregnancy and post-pregnancy in a single regimen',
    ingredientsPanel: [
      {
        section: 'A: Multivitamins, Multiminerals, Carotenoids & Amino Acids (30 Black Softgels)',
        items: [
          'Vitamin D3', 'Vitamin E', 'Vitamin C', 'Thiamine Mononitrate (B1)',
          'Riboflavin (B2)', 'Niacinamide (B3)', 'Vitamin B6', 'Folic Acid (B9) 600 mcg',
          'Vitamin B12', 'Biotin (Vitamin H)', 'Calcium Pantothenate (B5)', 'Magnesium Oxide',
          'Iron (As Ferrous Fumarate)', 'Zinc Sulphate Monohydrate', 'Copper', 'Selenium',
          'Iodine', 'Natural Mixed Carotenoids (15% Dispersion)', 'L-Lysine Hydrochloride', 'L-Arginine',
          'Inositol', 'Chromium Picolinate', 'Choline Bitartrate', 'Excipients q.s.'
        ]
      },
      {
        section: 'B: Omega 3-6-9 High-Potency Blend (30 Natural Transparent Softgels)',
        items: [
          'Omega 3-6-9 Blend (850 mg)', 'DHA (Docosahexaenoic Acid) 300 mg', 'EPA (Eicosapentaenoic Acid) 75 mg',
          'ALA (Alpha Linolenic Acid) 25 mg', 'LA (Linoleic Acid) 12 mg', 'Oleic Acid 18 mg'
        ]
      }
    ],
    howToUse: 'Take 2 softgels daily (1 black multivitamin softgel + 1 transparent Omega softgel) with a meal. Swallow whole with water.',
    faqs: [
      { q: 'How does Pregnancy Plus differ from Wellness Pregnancy?', a: 'Wellness Pregnancy is a single 30-softgel pack of vitamins and minerals. Pregnancy Plus is a 60-softgel twin-pack (30 + 30) featuring a second softgel of 850 mg Omega 3-6-9 providing 300 mg DHA and 75 mg EPA.' },
      { q: 'When can I start taking Pregnancy Plus?', a: 'Pregnancy Plus is designed for pre-conception, throughout pregnancy, and during breastfeeding.' },
      { q: 'What is the NAFDAC registration?', a: 'NAFDAC Reg. No. A7-102896.' }
    ]
  },

  {
    id: 'proman',
    title: 'Day By Day PROMAN',
    shortName: 'PROMAN',
    group: "Men's Daily",
    benefitCategories: ['mens-daily'],
    subtitle: '60 Softgels (30 + 30). Twin-pack with CoQ10, L-Carnitine, Ginseng & Graviola matched with Omega 3-5-6-7-9.',
    differentiator: 'Daily stamina, mental focus and overall wellbeing for active men.',
    type: "Men's Daily",
    image: '/assets/proman.png',
    theme: 'blue',
    price: '₦18,500',
    hasConfirmedPrice: true,
    hasConfirmedImage: true,
    packSize: '60 Softgels (30 + 30)',
    ingredientCount: 40,
    nafdacReg: 'A7-102814',
    nafdacDisplay: 'A7-102814',
    isNafdacPending: false,
    targetAudience: 'Adult men seeking daily energy, stamina, and focus.',
    description: 'Twin-pack: 30 black softgels of Multivitamin, Minerals, Amino Acids & Natural Extracts plus 30 transparent green softgels of Omega 3-5-6-7-9 with Vitamins, Avocado Oil, Rice Bran Oil & Grape Seed Oil.',
    benefits: [
      'Energy and stamina',
      'Focus and drive',
      'Overall wellbeing'
    ],
    bullets: [
      'CoQ10, L-Carnitine & Ginseng for physical stamina',
      'Botanical Graviola & Citrus Lemon Bioflavonoids',
      'Complete 3-5-6-7-9 Omega twin-pack'
    ],
    usp: "THE ONLY NIGERIAN MEN'S TWIN-PACK CLOSING THE 'ONE KIT, ONE ROUTINE' GAP | 40 actives including CoQ10, L-Carnitine, Ginseng and Graviola in capsule A, matched with a full 3-5-6-7-9 Omega.",
    ingredientsPanel: [
      {
        section: 'A: Multivitamin, Minerals, Amino Acids & Natural Extracts (30 Black Softgels)',
        items: [
          'Ubidecarenone (Coenzyme Q10)', 'Vitamin A', 'Vitamin B1', 'Vitamin B2', 'Vitamin B6',
          'Niacinamide (B3)', 'Calcium Pantothenate (B5)', 'Vitamin B12', 'Vitamin C', 'Vitamin E',
          'Vitamin D3', 'Folic Acid (B9)', 'Choline Bitartrate', 'Inositol', 'Biotin (Vitamin H)',
          'Calcium', 'Iron', 'Magnesium', 'Potassium', 'Copper',
          'Manganese', 'Zinc', 'Sodium Molybdate', 'Sodium Selenite', 'Chromium Picolinate',
          'Arginine Hydrochloride', 'Ginseng Extract', 'Fish Oil rich in Omega-3', 'Lecithin', 'L-Carnitine Fumarate',
          'Graviola (Annona Muricata)', 'Citrus Lemon Bioflavonoids'
        ]
      },
      {
        section: 'B: Omega 3-5-6-7-9 with Botanical Oils & Vitamins (30 Transparent Green Softgels)',
        items: [
          'Virgin Coconut Oil', 'Vitamin E', 'Vitamin D3', 'Vitamin A',
          'Avocado Oil', 'Grape Seed Oil', 'Rice Bran Oil', 'Omega 3-5-6-7-9 Blend (705 mg)'
        ]
      }
    ],
    howToUse: 'Take 2 softgels daily (1 black multivitamin softgel + 1 green Omega softgel) with a meal. Swallow whole with water.',
    faqs: [
      { q: 'What is the focus of Day By Day PROMAN?', a: 'PROMAN provides 40 active nutrients engineered for all-day physical stamina, cognitive drive, and general health.' },
      { q: 'How is it different from X-PROMAN?', a: 'PROMAN is formulated for daily men\'s stamina and focus (with CoQ10, Ginseng, Graviola, and L-Carnitine). X-PROMAN is an 8-active performance formula targeting male reproductive health.' },
      { q: 'What is the NAFDAC registration?', a: 'NAFDAC Reg. No. A7-102814.' }
    ]
  },

  {
    id: 'x-proman',
    title: 'Day By Day X-PROMAN',
    shortName: 'X-PROMAN',
    group: "Men's Daily",
    benefitCategories: ['mens-daily'],
    subtitle: '60 Softgels (30 + 30). Twin-pack targeting male reproductive health, desire & confidence, and vitality.',
    differentiator: 'Performance formula with L-Citrulline, Maca, Tribulus, Horny Goat Weed & full Omega.',
    type: "Men's Daily",
    image: '/assets/placeholder-x-proman.svg',
    theme: 'blue',
    price: null,
    hasConfirmedPrice: false,
    hasConfirmedImage: false,
    packSize: '60 Softgels (30 + 30)',
    ingredientCount: 46,
    nafdacReg: 'A7-102816',
    nafdacDisplay: 'Confirmation Pending',
    isNafdacPending: true,
    targetAudience: 'Adult men seeking reproductive health, vitality, and performance.',
    description: 'Twin-pack: 30 softgels of Multivitamin and Minerals with L-Citrulline, Arginine, Maca Extract, Tribulus terrestris, Mucuna pruriens, Ginger, Horny Goat Weed and Celastrus Paniculatus Oil, plus 30 softgels containing Omega 3-5-6-7-9.',
    benefits: [
      'Male reproductive health',
      'Desire and lasting confidence',
      'Boosts vitality and energy'
    ],
    bullets: [
      '8 targeted reproductive & libido botanical actives',
      'Maca, Tribulus, Horny Goat Weed & Celastrus Paniculatus Oil',
      'Twin-pack with full-spectrum 3-5-6-7-9 Omega'
    ],
    usp: "NIGERIA'S MOST COMPLETE MALE PERFORMANCE & VITALITY FORMULA | 8 reproductive and libido actives (L-Citrulline, Arginine, Maca, Tribulus, Mucuna pruriens, Ginger, Horny Goat Weed, Celastrus Paniculatus Oil) with a 3-5-6-7-9 Omega blend for daily performance.",
    ingredientsPanel: [
      {
        section: 'A: Key Actives in Multivitamin & Mineral Base (30 Softgels)',
        items: [
          'L-Citrulline', 'Arginine', 'Maca Extract', 'Tribulus terrestris',
          'Mucuna pruriens', 'Ginger', 'Horny Goat Weed', 'Celastrus Paniculatus Oil',
          'Multivitamin and Minerals Base (Full panel awaiting high-resolution pack artwork confirmation)'
        ]
      },
      {
        section: 'B: Omega 3-5-6-7-9 Botanical Blend (30 Softgels)',
        items: [
          'Virgin Coconut Oil', 'Vitamin E', 'Vitamin D3', 'Vitamin A',
          'Avocado Oil', 'Grape Seed Oil', 'Rice Bran Oil', 'Omega 3-5-6-7-9 Blend'
        ]
      }
    ],
    notes: 'The full multivitamin/mineral panel was illegible in the source pack design PDF. Key active ingredients are displayed as verified. Registration number verification is underway with Greenlife regulatory teams.',
    howToUse: 'Take 2 softgels daily with a meal and water.',
    faqs: [
      { q: 'What is X-PROMAN designed for?', a: 'X-PROMAN is an adult male vitality formula combining 8 reproductive and libido botanical actives with a comprehensive 3-5-6-7-9 Omega blend.' },
      { q: 'Why is the registration number listed as pending?', a: 'The supplied sheet records A7-102816 for both X-PROMAN and OMG. The public registration display is held pending confirmation from Greenlife regulatory affairs.' },
      { q: 'Can I purchase X-PROMAN right now?', a: 'Product specifications are detailed here; commercial inventory and storefront purchase links are awaiting Greenlife activation.' }
    ]
  },

  {
    id: 'omg',
    title: 'Day By Day OMG',
    shortName: 'OMG',
    group: 'Full-Spectrum Omega',
    benefitCategories: ['weight-management', 'brain-health', 'heart-health', 'anti-aging'],
    subtitle: '30 Softgels (3x10). Full-spectrum Omega 3-5-6-7-9 with cold-pressed Coconut, Avocado, Grape Seed & Rice Bran Oils.',
    differentiator: 'Standalone multi-benefit Omega supporting weight, brain, heart, and skin anti-aging.',
    type: 'Full-Spectrum Omega',
    image: '/assets/omg-box.png',
    theme: 'green',
    price: '₦14,500',
    hasConfirmedPrice: true,
    hasConfirmedImage: true,
    packSize: '30 Softgels (3x10)',
    ingredientCount: 8,
    nafdacReg: 'A7-102816',
    nafdacDisplay: 'Confirmation Pending',
    isNafdacPending: true,
    targetAudience: 'Adults of both sexes seeking metabolic, cognitive, cardiovascular, and skin rejuvenation.',
    description: '30 Softgels containing Omega 3-5-6-7-9 blend with Virgin Coconut Oil, Vitamin E, Vitamin D3, Vitamin A, Avocado Oil, Grape Seed Oil, Rice Bran Oil.',
    benefits: [
      'Omega-7 for Weight Management',
      'Omega-3 & 9 for Heart & Brain Health',
      'Omega-5 for Skin Regeneration & Anti-aging',
      'Omega-6 for Energy Production'
    ],
    bullets: [
      'Full spectrum Omegas 3, 5, 6, 7, and 9',
      'Cold-pressed Virgin Coconut, Avocado & Rice Bran Oils',
      'Enriched with Vitamins A, D3, and E'
    ],
    usp: "NIGERIA'S FIRST FULL-SPECTRUM 3-5-6-7-9 OMEGA | Omega 3-5-6-7-9 delivered in a single softgel, backed by four supporting oils and vitamins A, D3 & E",
    ingredientsPanel: [
      {
        section: 'Full Botanical & Full-Spectrum Omega Formula (30 Softgels)',
        items: [
          'Virgin Coconut Oil',
          'Vitamin E (As DL-Alpha Tocopherol Acetate)',
          'Vitamin D3 (Cholecalciferol)',
          'Vitamin A (As Palmitate)',
          'Avocado Oil',
          'Grape Seed Oil',
          'Rice Bran Oil',
          'Omega 3-5-6-7-9 Blend (from Omega-3 Fish Oil, Flaxseed Oil, Olive Oil, Sea Buckthorn Oil, Moringa Oil, Borage Oil & Pomegranate Oil) providing Omega-3 (ALA, EPA, DHA), Omega-5 (Punicic Acid), Omega-6 (LA, GLA), Omega-7 (Palmitoleic Acid) and Omega-9 (Oleic Acid)',
          'Excipients q.s.'
        ]
      }
    ],
    notes: 'Registration number verification is currently being confirmed with Greenlife regulatory teams due to a shared listing with X-PROMAN in source records.',
    howToUse: 'Take 1 softgel daily, preferably in the morning with breakfast and water.',
    faqs: [
      { q: 'What does OMG stand for?', a: 'OMG stands for Oh My Glow! It is our full-spectrum Omega 3-5-6-7-9 softgel infused with four nutrient-dense carrier oils.' },
      { q: 'Which benefit filters does OMG cover?', a: 'OMG is discoverable through Weight Management (Omega-7), Brain Health (Omega-3), Heart Health (Omega-3 & 9), and Anti-aging / Skin Rejuvenation (Omega-5).' },
      { q: 'Is OMG the same as Day By Day Wellness?', a: 'No. OMG is a specialized 8-ingredient Omega 3-5-6-7-9 botanical oil softgel. Day By Day Wellness is a distinct 34-ingredient daily multivitamin and mineral formulation.' }
    ]
  },

  {
    id: 'wellness',
    title: 'Day By Day Wellness',
    shortName: 'Wellness',
    group: 'General Daily',
    benefitCategories: ['general-daily'],
    subtitle: '30 Capsules. Comprehensive daily multivitamin, minerals, Omega-3 and Ginseng for everyday vitality.',
    differentiator: '34 vital nutrients for daily energy, stress support and peak performance.',
    type: 'General Daily',
    image: '/assets/placeholder-wellness.svg',
    theme: 'teal',
    price: null,
    hasConfirmedPrice: false,
    hasConfirmedImage: false,
    packSize: '30 Capsules',
    ingredientCount: 34,
    nafdacReg: 'A7-100492',
    nafdacDisplay: 'A7-100492',
    isNafdacPending: false,
    targetAudience: 'Adult men and women seeking general daily wellness.',
    description: '30 capsules: Multivitamins, Minerals, Amino Acids, Natural Extracts with Vital Nutrients for Omega 3-5-6-7-9, Vitamins and Botanical Oils for all-day energy and overall wellness.',
    benefits: [
      'More Energy',
      'Less Stress',
      'Better Performance',
      'Overall Daily Wellness'
    ],
    bullets: [
      '34 vital nutrients with Omega-3 and Ginseng Extract',
      'Covers daily micronutrient gaps and stress support',
      'Formulated for adults seeking all-day energy'
    ],
    usp: 'COMPREHENSIVE DAILY WELLNESS | 34 vital nutrients with Omega-3, Ginseng and Rutin for energy, stress support and better performance in one capsule',
    ingredientsPanel: [
      {
        section: 'A: Multivitamins, Minerals, Amino Acids & Natural Extracts',
        items: [
          'Beta Carotene (10% Dispersion) 3000 mcg', 'Vitamin B1 (Thiamine Mononitrate) 1.5 mg', 'Vitamin B2 (Riboflavin) 2 mg', 'Vitamin B6 (Pyridoxine HCl) 1.5 mg',
          'Niacinamide (Vitamin B3) 20 mg', 'Calcium Pantothenate (Vitamin B5) 5 mg', 'Vitamin B12 (Cyanocobalamin) 6 mcg', 'Vitamin K 30 mcg',
          'Vitamin C (Ascorbic Acid) 30 mg', 'Vitamin E (As DL-Alpha Tocopherol Acetate) 10 mg', 'Vitamin D3 (Cholecalciferol) 400 IU', 'Folic Acid (Vitamin B9) 300 mcg',
          'Choline Bitartrate 2500 mcg', 'Inositol 1250 mcg', 'Biotin (Vitamin H) 30 mcg', 'Calcium (From Dibasic Calcium Phosphate) 72 mg',
          'Iron (From Ferrous Fumarate) 5 mg', 'Magnesium (From Magnesium Oxide) 30 mg', 'Potassium (From Potassium Sulphate) 2 mg', 'Copper (From Copper Sulphate) 500 mcg',
          'Manganese (From Manganese Sulphate) 1.5 mg', 'Zinc Sulphate 15 mg', 'Sodium Molybdate 250 mcg', 'Sodium Selenite 70 mcg',
          'Chromium Picolinate 45 mcg', 'Arginine Hydrochloride 10 mg', 'Ginseng Extract 1250 mcg', 'Fish Oil Rich in Omega-3 Acids 75 mg',
          'Lecithin 30 mg', 'L-Carnitine Fumarate 5000 mcg', 'Graviola (Annona Muricata) 10 mg', 'Citrus Lemon Bioflavonoids 5000 mcg'
        ]
      },
      {
        section: 'B: Vital Nutrients for Omega 3-5-6-7-9, Botanical Oils & Vitamins',
        items: [
          'Virgin Coconut Oil 30 mg', 'Vitamin E 5 IU', 'Vitamin D3 400 IU',
          'Vitamin A (As Palmitate) 600 IU', 'Avocado Oil 10 mg', 'Grape Seed Oil 10 mg',
          'Rice Bran Oil 30 mg', 'Omega 3-5-6-7-9 Blend 705 mg'
        ]
      }
    ],
    notes: 'Pack size column indicates "30 Capsules". Serving instructions, capsule split, and Rutin claim are held pending Greenlife packaging confirmation.',
    howToUse: 'Take as directed on packaging with water and a meal.',
    faqs: [
      { q: 'What is Day By Day Wellness?', a: 'Day By Day Wellness is a comprehensive 34-nutrient daily foundational supplement featuring vitamins, minerals, amino acids, Ginseng, and Omega-3 for stress support and daily energy.' },
      { q: 'How does it differ from Day By Day OMG?', a: 'Day By Day Wellness is a full multivitamin/mineral wellness product (30 capsules, NAFDAC Reg. No. A7-100492). OMG is a specialized 8-active botanical Omega 3-5-6-7-9 product.' },
      { q: 'What is the NAFDAC registration?', a: 'NAFDAC Reg. No. A7-100492.' }
    ]
  }
];

export const PRODUCTS_BY_ID = PRODUCTS_DATA.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});

export function getFilteredProducts(filterId) {
  if (!filterId || filterId === 'all') return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter((p) => p.benefitCategories.includes(filterId));
}
