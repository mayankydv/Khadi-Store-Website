// ==========================================================================
// PRE-POPULATED INVENTORY & MOCK DATA (Khadi Store Ratlam)
// ==========================================================================

const INITIAL_PRODUCTS = [
  // READY TO WEAR
  {
    id: "rtw-01",
    name: "Classic Handspun White Khadi Kurta",
    category: "Ready to Wear",
    subcategory: "Kurta",
    price: 1299,
    originalPrice: 1899,
    rating: 4.8,
    reviewsCount: 34,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "Tailored from 100% hand-spun and hand-woven cotton, this classic short-length white Kurta offers absolute comfort. Featuring a refined mandarin collar and breathable texture, it stands as a testament to traditional Indian craftsmanship.",
    benefits: [
      "Extremely breathable fabric, ideal for hot Indian summers",
      "Softens with every wash, promoting comfort",
      "Eco-friendly production supporting rural weavers",
      "Versatile design suitable for casual or festive wear"
    ],
    ingredients: "100% Hand-woven Cotton Thread",
    usage: "Gentle hand wash separately in cold water. Use mild detergent. Dry in shade.",
    concerns: ["Summer Wear"],
    inventory: 45,
    weight: 250, // grams
    dimensions: { length_cm: 30, width_cm: 24, height_cm: 2 },
    sku: "KSR-RTW-KUR-WH-L",
    hsn: "62052000",
    gst: 5 // 5% GST on clothes below 1000 or above 1000 is 12% in some rules, let's keep 5% simple
  },
  {
    id: "rtw-02",
    name: "Pure Silk Embroidered Stole",
    category: "Ready to Wear",
    subcategory: "Stoles & Scarves",
    price: 890,
    originalPrice: 1450,
    rating: 4.9,
    reviewsCount: 18,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "Add a splash of premium luxury to your outfits. Handcrafted in Madhya Pradesh, this Mulberry Silk stole exhibits exquisite floral embroidery work on the borders, highlighting timeless elegance.",
    benefits: [
      "100% premium Mulberry Silk with soft, glossy touch",
      "Lightweight yet adds structural warmth",
      "Handcrafted embroidery by local women artisans",
      "Comes in an eco-friendly gift box wrap"
    ],
    ingredients: "100% Mulberry Silk, Zari Embroidery Thread",
    usage: "Dry clean recommended. Alternatively, hand wash in ice-cold water with silk detergent. Do not wring.",
    concerns: ["Winter Wear", "Summer Wear"],
    inventory: 15,
    weight: 120,
    dimensions: { length_cm: 25, width_cm: 18, height_cm: 1.5 },
    sku: "KSR-RTW-STL-SLK-RED",
    hsn: "62141010",
    gst: 12
  },
  {
    id: "rtw-03",
    name: "Handwoven Khadi Cotton Bedsheet Set",
    category: "Ready to Wear",
    subcategory: "Bedsheets",
    price: 1850,
    originalPrice: 2499,
    rating: 4.7,
    reviewsCount: 42,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "Experience organic living with our double bedsheets woven from coarse organic cotton. Features breathable pores that regulate body heat for deep, therapeutic sleep. Includes two matching pillowcases.",
    benefits: [
      "Stays cool in summers and cozy in winters",
      "Highly durable, thick-weave structure",
      "Hypoallergenic organic fibers prevent skin rashes",
      "Beautiful earthy beige natural tone matches any decor"
    ],
    ingredients: "100% Organic Handspun Cotton Yarn",
    usage: "Machine wash on gentle cycle. Tumble dry low or hang in shade. Warm iron if required.",
    concerns: ["Summer Wear", "Winter Wear"],
    inventory: 30,
    weight: 1200,
    dimensions: { length_cm: 35, width_cm: 30, height_cm: 8 },
    sku: "KSR-RTW-BDS-DBL-BG",
    hsn: "63041920",
    gst: 12
  },

  // FABRICS
  {
    id: "fab-01",
    name: "Premium Raw Mulberry Silk Fabric",
    category: "Fabrics",
    subcategory: "Silk",
    price: 950, // Per meter
    originalPrice: 1200,
    rating: 4.9,
    reviewsCount: 22,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "Pure Raw Mulberry Silk fabric direct from handlooms. Features a beautiful slub texture with rich natural sheen. Perfect for stitching high-end suits, sherwanis, jackets, and luxury wedding garments.",
    benefits: [
      "Authentic handloom silk with rich texture",
      "Shimmers beautifully in warm lighting",
      "Extremely gentle on skin and naturally hypoallergenic",
      "Sold per meter so you get exactly what you need"
    ],
    ingredients: "100% Raw Mulberry Silk Thread",
    usage: "Dry clean only. Store in a clean muslin cloth away from direct sunlight.",
    concerns: ["Winter Wear"],
    inventory: 120, // meters
    weight: 150, // per meter
    dimensions: { length_cm: 30, width_cm: 20, height_cm: 1 },
    sku: "KSR-FAB-SLK-RAW",
    hsn: "50072010",
    gst: 5
  },
  {
    id: "fab-02",
    name: "Natural Indigo Khadi Denim",
    category: "Fabrics",
    subcategory: "Khadi Denim",
    price: 490, // Per meter
    originalPrice: 650,
    rating: 4.8,
    reviewsCount: 15,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "Revolutionary handloom denim fabric dyed with organic natural indigo. Thick yet remarkably soft and breathable, unlike synthetic machine denims. Ideal for custom shirts, trousers, jackets, and bags.",
    benefits: [
      "Stitched garments age beautifully with a unique faded patina",
      "Much softer and more breathable than standard denim",
      "Dyed with 100% organic indigo plant extracts",
      "Durable structure that lasts a lifetime"
    ],
    ingredients: "Organic Indigo Dye, Handspun Coarse Cotton Threads",
    usage: "Wash separately for first few times as natural indigo tends to bleed slightly. Wash in cold water.",
    concerns: ["Winter Wear", "Summer Wear"],
    inventory: 200,
    weight: 350,
    dimensions: { length_cm: 32, width_cm: 22, height_cm: 2 },
    sku: "KSR-FAB-DNM-IND",
    hsn: "52094200",
    gst: 5
  },

  // SKIN CARE
  {
    id: "skn-01",
    name: "Saffron & Almond Deep Nourishing Body Lotion",
    category: "Skin",
    subcategory: "Lotion",
    price: 420,
    originalPrice: 550,
    rating: 4.7,
    reviewsCount: 56,
    image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "An Ayurvedic moisture-boosting blend of cold-pressed sweet almond oil, pure Kashmiri saffron extracts, and organic shea butter. Melts into dry skin layers to restore natural glow, elasticity, and suppleness.",
    benefits: [
      "Intensely hydrates dry skin without feeling greasy",
      "Brightens skin tone and reduces dullness using Saffron",
      "Protects skin from dryness and scaling during winters",
      "100% free from parabens, mineral oils, and silicones"
    ],
    ingredients: "Kashmiri Saffron extract, Cold-pressed Sweet Almond Oil, Organic Shea Butter, Aloe Vera Gel, Wheat Germ Oil",
    usage: "Apply generously all over body after bathing. Massage gently in upward circular motions.",
    concerns: ["Dry Skin", "Body Pain"],
    inventory: 80,
    weight: 280, // ml plus packaging
    dimensions: { length_cm: 18, width_cm: 6, height_cm: 6 },
    sku: "KSR-SKN-LOT-SAF-200ML",
    hsn: "33049910",
    gst: 18
  },
  {
    id: "skn-02",
    name: "Red Sandalwood & Honey Body Scrub",
    category: "Skin",
    subcategory: "Scrub",
    price: 360,
    originalPrice: 480,
    rating: 4.6,
    reviewsCount: 29,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "Exfoliate naturally with organic red sandalwood powder, apricot kernels, and honey. Removes dead skin cells, sun tan, and impurities from body pores while honey ensures skin stays moisturized.",
    benefits: [
      "Gently exfoliates dead skin layers, promoting cell renewal",
      "Helps clear skin pigmentation, dark spots, and tan lines",
      "Honey moisturizes and leaves skin feeling baby soft",
      "Sandalwood fragrance provides a calming aromatherapy effect"
    ],
    ingredients: "Red Sandalwood Powder, Wild Forest Honey, Apricot Kernel Granules, Almond Oil, Vegetable Glycerine",
    usage: "Dampen skin. Apply scrub and massage gently in circular motions for 2-3 minutes. Rinse thoroughly with warm water.",
    concerns: ["Dry Skin", "Pigmentation"],
    inventory: 60,
    weight: 150,
    dimensions: { length_cm: 8, width_cm: 8, height_cm: 6 },
    sku: "KSR-SKN-SCR-SND-100G",
    hsn: "33049910",
    gst: 18
  },

  // HAIR CARE
  {
    id: "har-01",
    name: "Bhringraj & Amla Hair Growth Oil",
    category: "Hair",
    subcategory: "Hair oil",
    price: 495,
    originalPrice: 650,
    rating: 4.9,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "A clinically inspired ancient Ayurvedic recipe. Pure sesame and coconut oils slow-cooked with fresh Bhringraj herbs, Amla, Shikakai, and Brahmi. Revitalizes hair follicles, prevents hair fall, and stops premature greying.",
    benefits: [
      "Reduces hair fall dramatically within 3 weeks of usage",
      "Stimulates hair roots for healthy, thicker new hair growth",
      "Deeply conditions dry scalp, eliminating dandruff",
      "Induces a relaxed state of mind and improves sleep quality"
    ],
    ingredients: "Bhringraj (Eclipta Alba), Amla (Emblica Officinalis), Shikakai, Brahmi, Sesame Seed Oil, Virgin Coconut Oil",
    usage: "Warm a small amount of oil. Apply to scalp and massage gently. Leave on overnight or for at least 2 hours before washing.",
    concerns: ["Hair Fall", "Dandruff", "Grey Hair", "Dry Hair"],
    inventory: 110,
    weight: 250,
    dimensions: { length_cm: 16, width_cm: 5, height_cm: 5 },
    sku: "KSR-HAR-OIL-BHR-200ML",
    hsn: "33059011",
    gst: 18
  },
  {
    id: "har-02",
    name: "Neem & Tea Tree Anti-Dandruff Shampoo",
    category: "Hair",
    subcategory: "Shampoo",
    price: 380,
    originalPrice: 499,
    rating: 4.7,
    reviewsCount: 64,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "A gentle sulfate-free cleanser. Formulated with fresh Neem leaves, tea tree essential oil, and soapnut (Reetha) extracts. Purifies the scalp of fungal infections, reduces itchiness, and keeps hair healthy.",
    benefits: [
      "Clears dandruff flakes and scales from the very first wash",
      "Soothes itchy and irritated scalps with Neem's cooling effect",
      "SLS/SLES & Paraben free; does not strip natural scalp oils",
      "Maintains scalp pH balance"
    ],
    ingredients: "Neem Leaf Extract, Tea Tree Oil, Reetha (Soapnut) Extract, Aloe Vera Leaf Juice, Glycerin",
    usage: "Apply to wet hair and scalp. Massage into a rich lather. Rinse thoroughly with cold water. Repeat if necessary.",
    concerns: ["Dandruff", "Hair Fall", "Dry Hair"],
    inventory: 90,
    weight: 270,
    dimensions: { length_cm: 18, width_cm: 5.5, height_cm: 5.5 },
    sku: "KSR-HAR-SHM-NEM-250ML",
    hsn: "33051090",
    gst: 18
  },

  // FACE CARE
  {
    id: "fac-01",
    name: "Pure Kannauj Rose Water (Steam Distilled)",
    category: "Face",
    subcategory: "Rose water",
    price: 240,
    originalPrice: 320,
    rating: 4.9,
    reviewsCount: 125,
    image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "Our rose water is produced through traditional steam distillation of white Desi Gulab petals in Kannauj, Uttar Pradesh. It functions as a natural skin toner, makeup setting spray, and cooling mist.",
    benefits: [
      "Distilled using traditional copper clay pots (Degs)",
      "Hydrates, balances, and tones skin instantly",
      "Helps tighten open pores and restore pH balance",
      "Provides relief to tired eyes and sunburst skin"
    ],
    ingredients: "100% Pure Steam Distilled Rose Water (No alcohol, no artificial fragrance)",
    usage: "Spray directly onto face and neck as a toner or refresher. Mix with face packs for added benefits.",
    concerns: ["Dry Skin", "Sun Damage", "Acne"],
    inventory: 150,
    weight: 220,
    dimensions: { length_cm: 15, width_cm: 4.5, height_cm: 4.5 },
    sku: "KSR-FAC-RSE-100ML",
    hsn: "33030090",
    gst: 18
  },
  {
    id: "fac-02",
    name: "Teatree & Salicylic Neem Face Wash",
    category: "Face",
    subcategory: "Face wash",
    price: 280,
    originalPrice: 380,
    rating: 4.7,
    reviewsCount: 78,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "Designed specifically for acne-prone oily skin. Combines therapeutic properties of Neem leaf extracts and Tea Tree oil with mild willowbark salicylic acid. Fights acne bacteria and unclogs pores.",
    benefits: [
      "Cleanses deep pores and controls excessive sebum production",
      "Reduces active acne pimples and prevents new breakouts",
      "Soothes redness and inflammation with aloe extracts",
      "Does not leave face dry or stretchy after washing"
    ],
    ingredients: "Fresh Neem Extract, Tea Tree Oil, Willow Bark Extract (Natural Salicylic Acid), Basil Extract, Organic Aloe Vera",
    usage: "Squeeze a coin-sized amount onto wet palms. Massage on face in upward circles. Wash off with cold water.",
    concerns: ["Acne", "Dark Spots", "Pigmentation"],
    inventory: 95,
    weight: 120,
    dimensions: { length_cm: 14, width_cm: 4, height_cm: 4 },
    sku: "KSR-FAC-FWS-NEE-100ML",
    hsn: "33049990",
    gst: 18
  },
  {
    id: "fac-03",
    name: "Kumkumadi Miracle Radiance Face Cream",
    category: "Face",
    subcategory: "Face creams",
    price: 699,
    originalPrice: 950,
    rating: 4.8,
    reviewsCount: 46,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "Infused with pure Kumkumadi Tailam oil containing 26 Himalayan herbs like saffron, sandalwood, and lotus. This luxury face cream reduces fine lines, fades dark circles, and gives a golden radiance to the face.",
    benefits: [
      "Visibly reduces pigmentation, dark spots, and age lines",
      "Brightens skin texture, evening out blotchy skin tones",
      "Provides rich overnight nourishment for glowing skin",
      "Fights sun damage and atmospheric pollutant effects"
    ],
    ingredients: "Kumkumadi Tailam (Saffron Oil), Lotus Extract, Sandalwood Oil, Almond Oil, Licorice Extract, Kokum Butter",
    usage: "Wash face thoroughly. Take a pea-sized amount, dot it across face and neck. Massage in gentle upward strokes until absorbed.",
    concerns: ["Dark Spots", "Anti Aging", "Pigmentation", "Sun Damage", "Dry Skin"],
    inventory: 50,
    weight: 80,
    dimensions: { length_cm: 6, width_cm: 6, height_cm: 5 },
    sku: "KSR-FAC-CRM-KUM-50G",
    hsn: "33049910",
    gst: 18
  },

  // HEALTH & FOODS
  {
    id: "fod-01",
    name: "Organic Wild Forest Raw Honey",
    category: "Health & Foods",
    subcategory: "Honey",
    price: 340,
    originalPrice: 420,
    rating: 4.9,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "100% pure, unfiltered, unpasteurized honey collected by tribal bee-keepers from deep forest reserves. Retains all natural pollens, enzymes, and medicinal properties. Excellent immunity booster.",
    benefits: [
      "Never heated or ultra-filtered, preserving natural vitamins",
      "Rich source of antioxidants that boost immunity naturally",
      "Acts as a natural cough suppressant and digestive aid",
      "Zero added sugar or synthetic syrups"
    ],
    ingredients: "100% Pure Wild Forest Honey",
    usage: "Consume 1 teaspoon with warm water every morning, or use as a natural sweetener in teas and cereals.",
    concerns: ["Immunity"],
    inventory: 150,
    weight: 500, // 500g bottle
    dimensions: { length_cm: 14, width_cm: 8, height_cm: 8 },
    sku: "KSR-FOD-HON-500G",
    hsn: "04090000",
    gst: 5
  },
  {
    id: "fod-02",
    name: "Ayurvedic Amla & Herb Chyawanprash",
    category: "Health & Foods",
    subcategory: "Wellness",
    price: 450,
    originalPrice: 550,
    rating: 4.8,
    reviewsCount: 53,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "A traditional immunity booster cooked with fresh Amla fruit pulp and 40+ rejuvenating herbs like Giloy, Ashwagandha, Shatavari, and Pippali. Sweetened with organic jaggery and pure cow ghee.",
    benefits: [
      "Strengthens the respiratory system and wards off seasonal flu",
      "Boosts energy, concentration, and physical stamina",
      "Aids in digestion and elimination of toxins from body",
      "Made with organic jaggery; completely sugar-free"
    ],
    ingredients: "Fresh Amla, Ashwagandha, Giloy, Shatavari, Pippali, Pure Cow Ghee, Organic Jaggery, Cardamom, Honey",
    usage: "Adults: 1 tablespoon twice a day with warm milk/water. Children: 1/2 tablespoon.",
    concerns: ["Immunity", "Body Pain"],
    inventory: 70,
    weight: 600,
    dimensions: { length_cm: 15, width_cm: 9, height_cm: 9 },
    sku: "KSR-FOD-CHP-500G",
    hsn: "30049011",
    gst: 12
  },

  // POOJA
  {
    id: "pja-01",
    name: "Sandalwood Natural Dhoop Batti (Charcoal Free)",
    category: "Pooja",
    subcategory: "Dhoop",
    price: 180,
    originalPrice: 240,
    rating: 4.8,
    reviewsCount: 45,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=600",
    video: "",
    description: "Premium charcoal-free dhoop sticks handcrafted from temple flower waste, natural sandalwood powder, and aromatic resins. Emits a clean, non-toxic sweet woodsy aroma that cleanses the home aura.",
    benefits: [
      "100% charcoal-free and sulfur-free; does not cause breathing irritation",
      "Made from recycled temple flowers, promoting environmental care",
      "Calming sandalwood fragrance is perfect for meditation and prayers",
      "Each box contains a mini ceramic stand hold"
    ],
    ingredients: "Recycled Flowers, Sandalwood Resin, Natural Herbs, Aromatic Essential Oils",
    usage: "Light the tip of the stick, blow out the flame after a few seconds, and place it in the holder.",
    concerns: [],
    inventory: 200,
    weight: 150,
    dimensions: { length_cm: 12, width_cm: 6, height_cm: 3 },
    sku: "KSR-PJA-DHP-SND",
    hsn: "33074100",
    gst: 18
  }
];

const INITIAL_CONCERNS = {
  "Hair": [
    { id: "hair-fall", name: "Hair Fall" },
    { id: "dandruff", name: "Dandruff" },
    { id: "grey-hair", name: "Grey Hair" },
    { id: "dry-hair", name: "Dry Hair" }
  ],
  "Face": [
    { id: "dry-skin", name: "Dry Skin" },
    { id: "acne", name: "Acne" },
    { id: "dark-spots", name: "Dark Spots" },
    { id: "anti-aging", name: "Anti Aging" },
    { id: "sun-damage", name: "Sun Damage" },
    { id: "pigmentation", name: "Pigmentation" }
  ],
  "Skin": [
    { id: "dry-skin", name: "Dry Skin" },
    { id: "pigmentation", name: "Pigmentation" },
    { id: "body-pain", name: "Body Pain" }
  ],
  "Health & Foods": [
    { id: "immunity", name: "Immunity" },
    { id: "body-pain", name: "Body Pain" }
  ],
  "Ready to Wear": [
    { id: "summer-wear", name: "Summer Wear" },
    { id: "winter-wear", name: "Winter Wear" }
  ],
  "Fabrics": [
    { id: "summer-wear", name: "Summer Wear" },
    { id: "winter-wear", name: "Winter Wear" }
  ]
};

const INITIAL_COUPONS = [
  { code: "KHADI10", discountPercent: 10, minCartValue: 500, description: "10% off on purchase above ₹500" },
  { code: "FESTIVAL20", discountPercent: 20, minCartValue: 1500, description: "Festive special 20% off above ₹1500" },
  { code: "FIRSTORDER", discountPercent: 15, minCartValue: 0, description: "15% off for first-time shoppers" },
  { code: "BULK30", discountPercent: 30, minCartValue: 5000, description: "Super Wholesale discount of 30% above ₹5000" }
];

const INITIAL_BLOGS = [
  {
    id: "blog-01",
    title: "Best Khadi Fabric for Hot Indian Summer",
    slug: "best-khadi-fabric-for-summer",
    author: "Khadi Expert Team",
    date: "May 15, 2026",
    excerpt: "Discover why handspun cotton Khadi is the absolute best fabric to beat the heat this summer, keeping your skin cool and dry.",
    content: `
      <p>Summer in India can be intense, with temperatures scaling above 40°C in places like Ratlam. During this time, synthetic fabrics like polyester and nylon trap heat against the skin, causing sweat rashes and discomfort. That is where hand-spun Khadi cotton comes in as a lifesaver.</p>
      
      <h3>The Science of Breathability</h3>
      <p>Khadi is woven by hand. This manual weaving process creates microscopic air gaps within the fabric structure. These tiny pores allow fresh air to pass through to your skin while absorbing moisture and letting it evaporate rapidly. This behaves like a natural cooling system for the body.</p>
      
      <h3>Natural, Eco-friendly, and Chemical Free</h3>
      <p>Unlike factory-produced cotton, handloom Khadi is created without toxic chemical treatments or intensive heavy electricity. It is naturally organic, hypo-allergenic, and incredibly gentle on sensitive skin. If you are prone to heat rashes, transitioning to Khadi is one of the best choices you can make.</p>
      
      <h3>How to Style Khadi in Summers</h3>
      <p>Opt for loose, short-length kurtas, lightweight stoles, and cotton pyjamas. Soft tones like white, ivory, beige, and light indigo reflect the sun’s rays, keeping you cool all day long.</p>
    `,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-02",
    title: "The Magic Benefits of Rose Water in Ayurveda",
    slug: "benefits-of-rose-water",
    author: "Ayurvedic Doctor",
    date: "April 28, 2026",
    excerpt: "Learn how steam-distilled rose water (Gulab Jal) acts as a cooling elixir to balance the Pitta dosha and clarify skin pores.",
    content: `
      <p>Rose water, or <i>Gulab Jal</i>, has been a key pillar of Indian skincare for thousands of years. But not all rose water is made equal. Standard commercial rose water often contains synthetic perfumes, alcohol, and parabens. True Ayurvedic benefits only come from steam-distilled rose water.</p>
      
      <h3>Balancing the Pitta Dosha</h3>
      <p>Ayurveda states that skin inflammation, acne, and hot flushes are caused by an aggravated Pitta (heat) dosha. Rose petals have a cooling, soothing nature (Sheeta Veerya). Spraying pure steam-distilled rose water instantly pacifies this heat, lowering skin temperature and easing redness.</p>
      
      <h3>Natural Skin Toner</h3>
      <p>Pure rose water acts as a mild astringent. It tightens loose pores, removes dust and excess oil without stripping moisture, and restores the skin’s natural acidic pH level. Use it immediately after cleansing and before applying facial oils or creams.</p>
      
      <h3>How to Use Daily</h3>
      <p>Keep your bottle of Rose Water in the refrigerator. Spray a chilled mist onto your face throughout the day, especially after returning from hot sun exposure. You can also mix it into herbal powder face packs for enhanced radiance.</p>
    `,
    image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-03",
    title: "Ayurvedic Hair Care: Why Bhringraj is Called King of Hair",
    slug: "ayurvedic-hair-care-bhringraj",
    author: "Vaidya Mayank Kumar",
    date: "March 10, 2026",
    excerpt: "An in-depth look at how Bhringraj (Eclipta Alba) penetrates scalp tissues to halt hair fall and stimulate dark, thick hair roots.",
    content: `
      <p>Hair loss, premature greying, and dandruff have become common due to modern lifestyles, stress, and hard water. While modern shampoos promise instant fixes, they are loaded with chemicals that weaken roots over time. Ayurveda suggests a time-tested king: <b>Bhringraj</b>.</p>
      
      <h3>Why the King of Herbs?</h3>
      <p>In Sanskrit, Bhringraj literally translates to 'King of Hair'. It has unique therapeutic properties that target the roots of hair shafts. The herb is naturally cooling, which neutralizes the excess heat (Pitta) in the scalp that often leads to hair follicle death and subsequent thinning.</p>
      
      <h3>Proven Benefits of Bhringraj</h3>
      <ul>
        <li><b>Halts Hair Fall:</b> Massaging Bhringraj oil stimulates blood circulation in the scalp, delivering oxygen and nutrients to dormant hair follicles.</li>
        <li><b>Prevents Premature Greying:</b> It helps maintain the natural melanin pigment of hair, preventing early grey strands.</li>
        <li><b>Eliminates Dandruff:</b> Its antimicrobial properties fight fungal growth on dry scalps, curing dandruff and itchiness.</li>
      </ul>
      
      <h3>How to Apply</h3>
      <p>For best results, warm Bhringraj oil slightly before application. Massage into your scalp using your fingertips in small circular motions for 10-15 minutes. Leave it on overnight and wash next morning with a gentle SLS-free cleanser like Shikakai or Neem shampoo.</p>
    `,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800"
  }
];

const INITIAL_B2B_PRODUCTS = [
  { id: "b2b-01", name: "Premium Handloom Cotton Fabric (Bulk)", moq: "50 Meters", category: "Fabrics" },
  { id: "b2b-02", name: "Pure Mulberry Zari Silk (Bulk)", moq: "20 Meters", category: "Fabrics" },
  { id: "b2b-03", name: "Organic Ayurvedic Hand Washes (Private Label)", moq: "100 Units", category: "Skin" },
  { id: "b2b-04", name: "Herbal Cold-Pressed Soaps (Private Label)", moq: "200 Units", category: "Skin" },
  { id: "b2b-05", name: "Organic Forest Honey (Bulk Jars)", moq: "50 Kilograms", category: "Foods" }
];
