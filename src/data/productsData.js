export const CATEGORIES = [
  { id: "all", label: "All Collections", count: 20 },
  { id: "goblets", label: "Goblets & Stemware", count: 6, stockist: "Pougine & Compass" },
  { id: "crystal", label: "Crystal Decanters & Tumblers", count: 4, stockist: "Green Apple & Diamonds" },
  { id: "bone-china", label: "Bone China Crockery", count: 4, stockist: "Sam International" },
  { id: "platters", label: "Candy Pots & Platters", count: 5, stockist: "Compass & Diamonds" },
  { id: "borosilicate", label: "Borosilicate Jars & Glass", count: 3, stockist: "Blink Max" },
  { id: "cutlery", label: "Luxury Cutlery", count: 2, stockist: "Addox Royale" }
];

export const STOCKIST_BRANDS = [
  { name: "Blink Max", logo: "/assets/stockist/blinkmax.png", specialty: "Borosilicate Canisters & Tumblers" },
  { name: "Compass", logo: "/assets/stockist/compass.png", specialty: "Engraved Cups & Candy Pots" },
  { name: "Diamonds", logo: "/assets/stockist/diamonds.png", specialty: "Faceted Decanters & Crystalware" },
  { name: "Green Apple", logo: "/assets/stockist/green-apple.png", specialty: "Glacier Rocks & Tumblers" },
  { name: "King Jade", logo: "/assets/stockist/king-jade.png", specialty: "Opal Glass & Jade Series" },
  { name: "Pougine", logo: "/assets/stockist/pougine.png", specialty: "European Goblets & Stemware" },
  { name: "Red Cherry", logo: "/assets/stockist/red-cherry.png", specialty: "Artisan Ceramic & Tea Sets" },
  { name: "Yujing", logo: "/assets/stockist/yujing.png", specialty: "Pressure Cup & Dishware" }
];

export const PRODUCTS = [
  {
    id: "pougine-wine-gold",
    name: "Pougine Gold-Stemmed Burgundy Goblet Collection",
    subtitle: "Golden crystal-filled slender stems with modern trapezoidal bowls",
    category: "goblets",
    categoryLabel: "Goblets & Stemware",
    stockist: "Pougine",
    price: 4600,
    originalPrice: 5800,
    wholesalePrice: 2850,
    badge: "Haute Luxury",
    badgeType: "gold",
    rating: 4.9,
    reviewsCount: 118,
    capacity: "620 ml (Pack of 2 Luxury Flutes)",
    material: "Lead-Free Barium Crystal with 24K Gold Crystal Filled Stem",
    thermalResistance: "Annealed Stemware Crystal",
    moq: "6 Pairs (Wholesale)",
    image: "/assets/products/Luxury-Glassware-Burgundy-Wine-Glass-Concave-Cup-Glass-Cup.avif",
    gallery: [
      "/assets/products/Luxury-Glassware-Burgundy-Wine-Glass-Concave-Cup-Glass-Cup.avif",
      "/assets/products/empty-crystal-glasses-with-marble-background_23-2148722488.avif"
    ],
    features: [
      "Stems filled with shimmering golden crystal beads",
      "Laser-sheared 0.8mm ultra-thin sipping rim",
      "Wide concave base for accelerated vintage aeration",
      "Arrives in Addox silk-lined presentation gift chest"
    ],
    description: "The pinnacle of Pougine Paris European glassware. Hand-blown lead-free crystal with floating golden crystals inside the stem. The showpiece of high-end wedding banquets and VIP lounges."
  },
  {
    id: "pougine-stemware-suite",
    name: "Pougine European Grand Cru Crystal Stemware Suite",
    subtitle: "Complete banquet suite including gold-rimmed flutes, martini & rocks glasses",
    category: "goblets",
    categoryLabel: "Goblets & Stemware",
    stockist: "Pougine",
    price: 6800,
    originalPrice: 8500,
    wholesalePrice: 4200,
    badge: "Banquets Choice",
    badgeType: "gold",
    rating: 5.0,
    reviewsCount: 84,
    capacity: "Curated 8-Piece Stemware Suite",
    material: "100% Lead-Free Barium Optical Crystal with Gold Rim",
    thermalResistance: "Commercial Dishwasher Tested (2000 Cycles)",
    moq: "4 Suites (Master Crate)",
    image: "/assets/products/empty-crystal-glasses-with-marble-background_23-2148722488.avif",
    gallery: [
      "/assets/products/empty-crystal-glasses-with-marble-background_23-2148722488.avif",
      "/assets/products/images.jpg"
    ],
    features: [
      "Includes 2 Greek key gold-rimmed wine goblets, 2 martini flutes, 2 champagne flutes, 2 diamond rocks glasses",
      "Pulled seamless stems without joint seams",
      "Prismatic optical brilliance reflecting candlelight",
      "Heirloom hospitality collection"
    ],
    description: "A complete five-star banquet glassware suite imported by Sam International. Designed to cater every beverage course from aperitif to digestif with synchronized elegance."
  },
  {
    id: "compass-engraved-goblets",
    name: "Compass Royal Engraved Vintage Wine Goblets",
    subtitle: "Intricate Baroque embossed relief with beaded stem and wide footplate",
    category: "goblets",
    categoryLabel: "Goblets & Stemware",
    stockist: "Compass",
    price: 2800,
    originalPrice: 3600,
    wholesalePrice: 1750,
    badge: "Vintage Edit",
    badgeType: "blue",
    rating: 4.8,
    reviewsCount: 96,
    capacity: "340 ml (Pack of 6 Goblets)",
    material: "Heavy Gauge Embossed Soda-Lime Glass",
    thermalResistance: "Annealed Mechanical Strength",
    moq: "8 Sets (Wholesale)",
    image: "/assets/products/images (7).jpg",
    gallery: [
      "/assets/products/images (7).jpg",
      "/assets/products/images (6).jpg"
    ],
    features: [
      "Classical fleur-de-lis and beaded vintage relief",
      "Substantial 380g weighted balance in hand",
      "Thick durable rim resistant to banquet chipping",
      "Perfect for sparkling water, wine, cocktails, and iced beverages"
    ],
    description: "Inspired by antique Victorian crystalware. Compass series engraved goblets bring tactile grandeur to banquet dining tables, resisting chipping and cloudiness over years of heavy use."
  },
  {
    id: "pougine-jewel-goblets",
    name: "Pougine Imperial Jewel-Toned Goblet & Decanter Suite",
    subtitle: "Vibrant jewel glass collection in Cobalt, Emerald, Amethyst, and Ruby",
    category: "goblets",
    categoryLabel: "Goblets & Stemware",
    stockist: "Pougine",
    price: 4900,
    originalPrice: 6200,
    wholesalePrice: 3100,
    badge: "Designer Pick",
    badgeType: "amber",
    rating: 4.9,
    reviewsCount: 67,
    capacity: "Set of 6 Jewel Glasses + Decanter Vase",
    material: "Solid Colored Glass (Color Kiln-Infused, Never Fades)",
    thermalResistance: "Dishwasher Safe & Fade Proof",
    moq: "4 Sets (Wholesale)",
    image: "/assets/products/images (6).jpg",
    gallery: [
      "/assets/products/images (6).jpg",
      "/assets/products/images (7).jpg"
    ],
    features: [
      "Solid pigment glass—color will never peel, wash off, or fade",
      "Stunning daylight optical dispersion in 4 rich jewel shades",
      "Includes matching decorative glass decanter vase",
      "Bespoke table aesthetic for boutique cafes and luxury catering"
    ],
    description: "Infuse festive celebrations with theatrical brilliance. Each goblet is molded with vintage starburst and sunburst embossing in saturated gem tones."
  },
  {
    id: "pougine-concave-stems",
    name: "Pougine Haute Elegance Concave Stemware Collection",
    subtitle: "Avant-garde angular bowls with contrasting black & ruby stems",
    category: "goblets",
    categoryLabel: "Goblets & Stemware",
    stockist: "Pougine",
    price: 3900,
    originalPrice: 4800,
    wholesalePrice: 2400,
    badge: "Modern Minimal",
    badgeType: "blue",
    rating: 4.8,
    reviewsCount: 52,
    capacity: "550 ml (Pack of 3 Tasting Glasses)",
    material: "European Lead-Free Crystal with Vitrified Stem Base",
    thermalResistance: "Annealed Tasting Stemware",
    moq: "6 Sets (Wholesale)",
    image: "/assets/products/images (9).jpg",
    gallery: [
      "/assets/products/images (9).jpg",
      "/assets/products/images.jpg"
    ],
    features: [
      "Architectural flat-bottom aeration bowl",
      "Sleek obsidian black and ruby red needle stems",
      "Polished brass-finish stabilizing base",
      "Laser cold-cut edge for smooth sommelier delivery"
    ],
    description: "A triumph of contemporary European stemware architecture. The expansive flat-bottom chamber provides maximized surface area to open up complex wine aromatics."
  },
  {
    id: "pougine-sommelier-rack",
    name: "Pougine Sommelier Crystal Wine Goblet Set (Pack of 6)",
    subtitle: "Commercial grade crystal stemware designed for overhead rack hanging",
    category: "goblets",
    categoryLabel: "Goblets & Stemware",
    stockist: "Pougine",
    price: 3400,
    originalPrice: 4200,
    wholesalePrice: 2100,
    badge: "Bar & Lounge",
    badgeType: "gold",
    rating: 4.9,
    reviewsCount: 142,
    capacity: "480 ml (Pack of 6)",
    material: "Lead-Free Barium Crystal",
    thermalResistance: "Commercial Dishwasher Safe",
    moq: "12 Packs (Wholesale)",
    image: "/assets/products/images.jpg",
    gallery: [
      "/assets/products/images.jpg",
      "/assets/products/empty-crystal-glasses-with-marble-background_23-2148722488.avif"
    ],
    features: [
      "Uniform footplate fits standard overhead bar glass racks",
      "High acoustic resonance on toast clinking",
      "Tapered chimney to concentrate aromatic bouquets",
      "Reinforced stem-to-bowl transition"
    ],
    description: "The preferred workhorse stemware for luxury hotel bars and cocktail lounges. Combines breathtaking crystal optical clarity with commercial mechanical durability."
  },

  // CRYSTAL DECANTERS & TUMBLERS
  {
    id: "diamonds-decanter-glacier",
    name: "Green Apple Glacier Cut Crystal Decanter & Rocks Set",
    subtitle: "Heavy geometric ice-facet crystalline decanter with 4 matching rock glasses",
    category: "crystal",
    categoryLabel: "Crystal Decanters & Tumblers",
    stockist: "Green Apple",
    price: 5200,
    originalPrice: 6800,
    wholesalePrice: 3250,
    badge: "Executive Choice",
    badgeType: "gold",
    rating: 5.0,
    reviewsCount: 134,
    capacity: "Decanter 900ml + 4 Tumblers (320ml)",
    material: "Heavy Gauge Optical Crystalline Glass",
    thermalResistance: "Mechanical Annealed Crystal",
    moq: "6 Sets (Wholesale)",
    image: "/assets/products/images (10).jpg",
    gallery: [
      "/assets/products/images (10).jpg",
      "/assets/products/images (8).jpg"
    ],
    features: [
      "Deep prism multi-facet cut reflects light like crushed ice",
      "Airtight ground-glass diamond cut stopper",
      "Heavy 450g weighted tumbler base prevents tipping",
      "Accommodates oversized 2-inch artisanal ice spheres"
    ],
    description: "Crafted for executive suites, boardroom bars, and luxury gifting. The glacier facets produce dramatic light refraction across whisky, scotch, or bourbon."
  },
  {
    id: "diamonds-art-deco-decanter",
    name: "Diamonds Art-Deco Sculpted Crystal Decanter & Tumbler",
    subtitle: "Twisted fluid silhouette with precision diamond facet stopper",
    category: "crystal",
    categoryLabel: "Crystal Decanters & Tumblers",
    stockist: "Diamonds",
    price: 4400,
    originalPrice: 5600,
    wholesalePrice: 2750,
    badge: "Masterpiece",
    badgeType: "gold",
    rating: 4.9,
    reviewsCount: 89,
    capacity: "Decanter 850ml + Rocks Tumbler 310ml",
    material: "Hand-Finished Optical Crystal",
    thermalResistance: "Lead-Safe Certified",
    moq: "8 Sets (Wholesale)",
    image: "/assets/products/images (8).jpg",
    gallery: [
      "/assets/products/images (8).jpg",
      "/assets/products/beautiful-black-white-minimal-design.jpg"
    ],
    features: [
      "Dynamic twisting flame silhouette that fits the hand naturally",
      "Precision cut diamond stopper with hermetic ground seal",
      "Flawless optical clarity free of bubbles or waves",
      "Packaged in satin-lined luxury presentation box"
    ],
    description: "From the Diamonds premium collection. The sculptural twist captures movement and ambient candlelight, transforming spirit pouring into an art form."
  },
  {
    id: "compass-handcut-decanter",
    name: "Compass Vintage Hand-Cut Crystal Wine Decanter",
    subtitle: "Floral relief engraving with fluted neck and cut crystal stemware",
    category: "crystal",
    categoryLabel: "Crystal Decanters & Tumblers",
    stockist: "Compass",
    price: 3800,
    originalPrice: 4900,
    wholesalePrice: 2350,
    badge: "Heritage Cut",
    badgeType: "blue",
    rating: 4.8,
    reviewsCount: 45,
    capacity: "1000 ml (Large Carafe)",
    material: "Engraved Optical Crystal Glass",
    thermalResistance: "Annealed Glassware",
    moq: "6 Units (Wholesale)",
    image: "/assets/products/beautiful-black-white-minimal-design.jpg",
    gallery: [
      "/assets/products/beautiful-black-white-minimal-design.jpg",
      "/assets/products/images (8).jpg"
    ],
    features: [
      "Intricate botanical vine and wheat engraving",
      "Ergonomic fluted pouring collar with drip-free lip",
      "Substantial heavy crystal base",
      "Timeless European salon aesthetic"
    ],
    description: "An homage to 19th-century salon entertaining. Intricate intaglio carving catches the light and adds antique distinction to decanted wines and cordials."
  },
  {
    id: "addox-obsidian-decanters",
    name: "Addox Signature Obsidian Glass Decanter & Vase Collection",
    subtitle: "Set of 4 minimalist deep emerald and obsidian apothecary vessels",
    category: "crystal",
    categoryLabel: "Crystal Decanters & Tumblers",
    stockist: "Addox Royale",
    price: 3600,
    originalPrice: 4700,
    wholesalePrice: 2200,
    badge: "Architectural",
    badgeType: "amber",
    rating: 4.8,
    reviewsCount: 39,
    capacity: "Set of 4 Assorted Vessels (500ml - 1200ml)",
    material: "Heavy Pigmented Tinted Glass",
    thermalResistance: "Room Temperature Decor & Pouring",
    moq: "6 Sets (Wholesale)",
    image: "/assets/products/empty-black-vase_74190-3856.avif",
    gallery: [
      "/assets/products/empty-black-vase_74190-3856.avif"
    ],
    features: [
      "Dark mirror gloss that protects light-sensitive infusions and liqueurs",
      "Rolled lip for smooth drip-free pouring",
      "Versatile as premium carafes or high-concept floral centerpieces",
      "Stately architectural proportions"
    ],
    description: "A dramatic design statement for high-end dining buffets and modern bars. These deep obsidian glass carafes lend a moody, sophisticated aesthetic to table settings."
  },

  // BONE CHINA CROCKERY
  {
    id: "royal-botanical-32pc",
    name: "Royal Botanical 32-Piece Fine Bone China Dinner Set",
    subtitle: "24K Gold electroplated rims with warm autumn floral motifs and 45% bone ash",
    category: "bone-china",
    categoryLabel: "Bone China Crockery",
    stockist: "Sam International",
    price: 16800,
    originalPrice: 21500,
    wholesalePrice: 11400,
    badge: "Royal Banquet",
    badgeType: "gold",
    rating: 5.0,
    reviewsCount: 162,
    capacity: "Complete 6-Person Service (32 Pieces)",
    material: "Grade-A Fine Bone China (45% Bone Ash)",
    thermalResistance: "High Glaze Vitrified & Scratch Resistant",
    moq: "2 Master Crates (Wholesale)",
    image: "/assets/products/images (11).jpg",
    gallery: [
      "/assets/products/images (11).jpg",
      "/assets/products/images (12).jpg",
      "/assets/products/images (13).jpg"
    ],
    features: [
      "Includes 6 dinner plates, 6 side plates, 6 soup bowls, 6 dessert bowls, 4 mugs, serving spoons and napkin ring",
      "Warm ivory translucence when held to light",
      "Triple-fired vitreous glaze impervious to turmeric and curry stains",
      "24K burnished gold edging that retains luster"
    ],
    description: "The crown jewel of Sam International's Bone China division since 2000. Delicate floral artwork framed by hand-painted gold rings, offering lightweight elegance with superior chip-resistant strength."
  },
  {
    id: "imperial-white-gold-stack",
    name: "Imperial Translucent White & Gold Bone China Banquet Service",
    subtitle: "Minimalist pure ivory bone china with hand-painted 24K gold filigree rim",
    category: "bone-china",
    categoryLabel: "Bone China Crockery",
    stockist: "Sam International",
    price: 18900,
    originalPrice: 24500,
    wholesalePrice: 12800,
    badge: "5-Star Standard",
    badgeType: "gold",
    rating: 4.9,
    reviewsCount: 94,
    capacity: "Full Banquet Service (40 Pieces)",
    material: "High Translucence Vitrified Bone China (45% Bone Ash)",
    thermalResistance: "Dishwasher Safe Vitreous Enamel",
    moq: "2 Crates (Wholesale)",
    image: "/assets/products/images (12).jpg",
    gallery: [
      "/assets/products/images (12).jpg",
      "/assets/products/images (13).jpg"
    ],
    features: [
      "Towering service includes dinner plates, salad plates, soup tureens, tea cups & saucers, and rice platters",
      "Resonant musical chime when lightly tapped",
      "Featherlight density: 40% lighter than ceramic stoneware",
      "Rolled edge rim engineered for high-turnover hospitality dining"
    ],
    description: "Specially imported by Sam International for premium hotels and banquet properties. Crisp, unblemished ivory fine china that elevates food plating into edible art."
  },
  {
    id: "sovereign-plate-goblet-combo",
    name: "Sam International Sovereign Gold Rim Crockery & Glassware Suite",
    subtitle: "Harmonized fine bone china dinner plates paired with gold-rimmed crystal wine goblets",
    category: "bone-china",
    categoryLabel: "Bone China Crockery",
    stockist: "Sam International",
    price: 8500,
    originalPrice: 11000,
    wholesalePrice: 5600,
    badge: "Harmonized Set",
    badgeType: "gold",
    rating: 4.9,
    reviewsCount: 57,
    capacity: "4-Person Fine Dining Cover (12 Pieces)",
    material: "Fine Bone China & Barium Crystal with 24K Gold Embellishment",
    thermalResistance: "Food Contact Safe & Annealed",
    moq: "4 Sets (Wholesale)",
    image: "/assets/products/images (13).jpg",
    gallery: [
      "/assets/products/images (13).jpg",
      "/assets/products/images (11).jpg"
    ],
    features: [
      "Perfect color and gold-gauge match between plate rims and goblet lips",
      "Includes 4 dinner plates, 4 salad bowls, and 4 gold-trimmed wine goblets",
      "Instant luxury table setting for VIP dinners and milestone celebrations",
      "Custom hospitality crest printing available"
    ],
    description: "Designed for seamless aesthetic synergy. Eliminates the guesswork of table styling by matching bone china plate gilding with crystal stemware gold accents."
  },
  {
    id: "high-tea-pastry-ensemble",
    name: "Sam International High Tea & Pastry Centerpiece Ensemble",
    subtitle: "Crystal footed pedestal dish, glass cake stand platter, and fine porcelain creamer",
    category: "bone-china",
    categoryLabel: "Bone China Crockery",
    stockist: "Sam International",
    price: 4200,
    originalPrice: 5500,
    wholesalePrice: 2700,
    badge: "Patisserie Suite",
    badgeType: "amber",
    rating: 4.8,
    reviewsCount: 71,
    capacity: "5-Piece Artisanal Dessert & Tea Service",
    material: "Hand-Cut Crystal Glass & Fine Glazed Porcelain",
    thermalResistance: "Room Temperature & Warm Milk Serving",
    moq: "6 Sets (Wholesale)",
    image: "/assets/products/ordered-composition-baking-tools_23-2150096568.avif",
    gallery: [
      "/assets/products/ordered-composition-baking-tools_23-2150096568.avif",
      "/assets/products/images (3).jpg"
    ],
    features: [
      "Footed crystal candy dish with facet lid for macarons and mints",
      "Heavy pedestal glass cake and dessert platter",
      "Porcelain creamer pitcher with 24K gold accented handle",
      "Fluted porcelain ramekin and dessert bowls"
    ],
    description: "The quintessential afternoon high tea ensemble. Brings five-star hotel patisserie presentation to private dining rooms and bakery display cases."
  },

  // CANDY POTS & PLATTERS
  {
    id: "compass-candy-pot-set",
    name: "Compass Diamond-Cut Glass Candy Pot Set with Fluted Lids",
    subtitle: "Beaded fluted crystal candy pots with matching saucers on reflective glass",
    category: "platters",
    categoryLabel: "Candy Pots & Platters",
    stockist: "Compass",
    price: 2400,
    originalPrice: 3200,
    wholesalePrice: 1550,
    badge: "Bestseller",
    badgeType: "gold",
    rating: 4.9,
    reviewsCount: 188,
    capacity: "Twin Set (2 Covered Pots + 2 Saucers)",
    material: "High-Compression Pressed Crystal Glass",
    thermalResistance: "Food Safe Annealed Glass",
    moq: "12 Sets (Wholesale)",
    image: "/assets/products/61KIvxJ8SDL._AC_UF1000,1000_QL80_.jpg",
    gallery: [
      "/assets/products/61KIvxJ8SDL._AC_UF1000,1000_QL80_.jpg",
      "/assets/products/images (4).jpg"
    ],
    features: [
      "Intricate hobnail and fluted beaded body",
      "Tactile tear-drop glass finial lid handle",
      "Protects dry fruits, chocolates, and sweets from dust and humidity",
      "Includes matching scalloped glass saucers"
    ],
    description: "A signature Addox best seller. Features scintillating diamond hobnail patterns that sparkle under chandelier light. Essential for festive Indian entertaining."
  },
  {
    id: "compass-beaded-platter",
    name: "Compass Beaded Glass Serving Platter & Butter Dish Set",
    subtitle: "Oval beaded platter with lidded crystal butter/candy pot and silver spoon",
    category: "platters",
    categoryLabel: "Candy Pots & Platters",
    stockist: "Compass",
    price: 2100,
    originalPrice: 2800,
    wholesalePrice: 1350,
    badge: "Table Accent",
    badgeType: "blue",
    rating: 4.8,
    reviewsCount: 65,
    capacity: "3-Piece Breakfast / Condiment Serving Set",
    material: "High-Clarity Beaded Rim Pressed Glass",
    thermalResistance: "Dishwasher Safe Non-Porous",
    moq: "12 Sets (Wholesale)",
    image: "/assets/products/images (3).jpg",
    gallery: [
      "/assets/products/images (3).jpg",
      "/assets/products/61KIvxJ8SDL._AC_UF1000,1000_QL80_.jpg"
    ],
    features: [
      "Perimeter pearl bead embossing on oval serving tray",
      "Dome-lidded butter and preserve dish with crystal finial",
      "Includes textured matching tea glass and teaspoon",
      "Wipes clean instantly without staining"
    ],
    description: "Elevate morning continental breakfast or afternoon tea service. The beaded oval tray comfortably holds preserves, clotted cream, or festive confectioneries."
  },
  {
    id: "diamond-candy-jars-collection",
    name: "Diamond Cut Covered Candy Pot & Centerpiece Urn Collection",
    subtitle: "Set of 5 assorted faceted crystal jars and footed bonbonnières with ornate finials",
    category: "platters",
    categoryLabel: "Candy Pots & Platters",
    stockist: "Diamonds",
    price: 3800,
    originalPrice: 4900,
    wholesalePrice: 2350,
    badge: "Festive Suite",
    badgeType: "gold",
    rating: 5.0,
    reviewsCount: 112,
    capacity: "Set of 5 Assorted Crystal Urns (350ml - 750ml)",
    material: "Lead-Free Decorative Pressed Crystal",
    thermalResistance: "Airtight Fit Lids",
    moq: "6 Sets (Wholesale)",
    image: "/assets/products/images (4).jpg",
    gallery: [
      "/assets/products/images (4).jpg",
      "/assets/products/images (5).jpg"
    ],
    features: [
      "5 distinct geometric relief cuts: Diamond, Ribbed, Baroque, Facet, and Starburst",
      "Pedestal footed designs elevate buffet table visual depth",
      "Ideal for dry fruit assortments, candies, cookies, and potpourri",
      "Crystal-clear transparency showing off contents vividly"
    ],
    description: "An opulent 5-piece crystal centerpiece collection from the Diamonds series. Stagger them along dining consoles, coffee tables, or dessert stations for maximum festive grandeur."
  },
  {
    id: "crown-jewel-footed-urn",
    name: "Crown Jewel 3-Footed Crystal Candy & Dry Fruit Urn",
    subtitle: "Carved crystal bonbonnière with 3 curved glass scroll feet and tall finial lid",
    category: "platters",
    categoryLabel: "Candy Pots & Platters",
    stockist: "Compass",
    price: 1950,
    originalPrice: 2600,
    wholesalePrice: 1250,
    badge: "Showstopper",
    badgeType: "amber",
    rating: 4.9,
    reviewsCount: 88,
    capacity: "850 ml Large Serving Urn",
    material: "Hand-Molded Pressed Crystal Glass",
    thermalResistance: "Room Temperature Serving",
    moq: "12 Pieces (Wholesale)",
    image: "/assets/products/images (5).jpg",
    gallery: [
      "/assets/products/images (5).jpg",
      "/assets/products/61KIvxJ8SDL._AC_UF1000,1000_QL80_.jpg"
    ],
    features: [
      "Three gracefully curved scroll feet elevate the dish off the table",
      "Intricately carved sunburst medallions catch light from every angle",
      "Tight fitting lid keeps dates, nuts, and confections crisp",
      "Substantial heavy gauge glass with weighted stability"
    ],
    description: "A timeless centerpiece urn imported by Addox. Perfect for wedding gifting, VIP conference tables, and festive dry fruit presentations."
  },

  // BOROSILICATE & STORAGE GLASS
  {
    id: "blinkmax-fluted-canisters",
    name: "Blink Max Fluted Borosilicate Canister & Storage Jar Set",
    subtitle: "Vertical ribbed heat resistant glass jars with natural acacia wood & crystal knob lids",
    category: "borosilicate",
    categoryLabel: "Borosilicate Jars & Glass",
    stockist: "Blink Max",
    price: 2600,
    originalPrice: 3400,
    wholesalePrice: 1650,
    badge: "Kitchen Edit",
    badgeType: "gold",
    rating: 4.9,
    reviewsCount: 147,
    capacity: "Trio Set (650ml, 950ml, 1300ml)",
    material: "High-Borosilicate 3.3 Glass with Food-Grade Silicone & Acacia Wood",
    thermalResistance: "-20°C to +150°C",
    moq: "8 Sets (Wholesale)",
    image: "/assets/products/images (1).jpg",
    gallery: [
      "/assets/products/images (1).jpg",
      "/assets/products/images (2).jpg"
    ],
    features: [
      "Borosilicate thermal shock proof: safe for boiling water wash",
      "Airtight silicone gasket locks in aroma of coffee beans, tea leaves, spices",
      "Ribbed fluted optical body resists slip in wet hands",
      "Crowned with a sparkling crystal finial knob on natural wood lid"
    ],
    description: "Blink Max's signature countertop canister collection. High-borosilicate 3.3 glass provides laboratory-grade hygiene that never absorbs odors, stains, or residues."
  },
  {
    id: "addox-gold-pantry-jars",
    name: "Addox Kitchenware Glass Pantry Jars with Airtight Gold Caps",
    subtitle: "Set of 6 ultra-clear cylindrical glass storage jars with leakproof gold twist lids",
    category: "borosilicate",
    categoryLabel: "Borosilicate Jars & Glass",
    stockist: "Addox Royale",
    price: 1850,
    originalPrice: 2400,
    wholesalePrice: 1150,
    badge: "Pantry Organiser",
    badgeType: "blue",
    rating: 4.8,
    reviewsCount: 203,
    capacity: "Pack of 6 (500ml each)",
    material: "Pure Soda Lime Glass with Rust-Proof Gold Lacquered Metal Lids",
    thermalResistance: "Dishwasher Safe Jars",
    moq: "12 Packs (Wholesale)",
    image: "/assets/products/images (2).jpg",
    gallery: [
      "/assets/products/images (2).jpg",
      "/assets/products/images (1).jpg"
    ],
    features: [
      "Airtight plastisol liner prevents moisture entry",
      "Gleaming gold lacquered metal caps resist kitchen humidity and corrosion",
      "Crystal clear transparency for immediate pantry inventory checks",
      "Ideal for honey, preserves, dry fruits, spices, and pasta"
    ],
    description: "The gold standard of kitchen and pantry organization. Heavy gauge glass jars with airtight gold metal lids that bring upscale boutique grocery charm to home shelves."
  },
  {
    id: "yujing-espresso-service",
    name: "Yujing Commercial Pressure Cup & Espresso Saucer Service",
    subtitle: "High-density thermal tempered glass cups and saucers for high-volume coffee service",
    category: "borosilicate",
    categoryLabel: "Borosilicate Jars & Glass",
    stockist: "Yujing",
    price: 1950,
    originalPrice: 2600,
    wholesalePrice: 1200,
    badge: "Café Workhorse",
    badgeType: "blue",
    rating: 4.7,
    reviewsCount: 175,
    capacity: "Pack of 6 Cups + 6 Saucers (180ml)",
    material: "High-Pressure Tempered Glass",
    thermalResistance: "Thermal Shock Resistant (Hot Espresso directly from machine)",
    moq: "16 Sets (Master Carton)",
    image: "/assets/products/empty-coffee-cup-coffee-machine.jpg",
    gallery: [
      "/assets/products/empty-coffee-cup-coffee-machine.jpg"
    ],
    features: [
      "Engineered to sit directly beneath commercial espresso group heads",
      "Reinforced heavy bottom retains beverage temperature longer",
      "Non-porous glass prevents coffee oil staining and bitter rancid build-up",
      "Stackable design saves precious espresso counter space"
    ],
    description: "From Yujing's legendary Pressure Cup series. Developed specifically for commercial cafes, hotel breakfast buffets, and high-turnover dining rooms."
  },

  // LUXURY CUTLERY
  {
    id: "monarch-gold-cutlery-24pc",
    name: "Monarch 24-Piece PVD Titanium Gold Cutlery Set",
    subtitle: "Heavy gauge 18/10 stainless steel with mirror titanium ion plating",
    category: "cutlery",
    categoryLabel: "Luxury Cutlery",
    stockist: "Addox Royale",
    price: 6800,
    originalPrice: 8900,
    wholesalePrice: 4200,
    badge: "Luxury Dining",
    badgeType: "gold",
    rating: 5.0,
    reviewsCount: 88,
    capacity: "Service for 6 (24 Pieces + Wooden Chest)",
    material: "Grade 304 (18/10) Forged Stainless Steel",
    thermalResistance: "Corrosion Proof & PVD Wear Resistant",
    moq: "4 Sets (Wholesale)",
    image: "/assets/banners/cat-1.jpg",
    gallery: [
      "/assets/banners/cat-1.jpg"
    ],
    features: [
      "Includes 6 dinner knives, 6 dinner forks, 6 table spoons, 6 dessert teaspoons",
      "Physical Vapor Deposition (PVD) titanium coating will not peel or fade",
      "Ergonomic arched teardrop handles with calibrated center-of-gravity",
      "Precision serrated knife edges that slice steaks cleanly"
    ],
    description: "Forged from marine-grade 18/10 stainless steel with high-vacuum titanium gilding. Designed to complement Addox's Bone China and crystal tableware suites."
  },
  {
    id: "nordic-obsidian-flatware",
    name: "Nordic Matte Obsidian Flatware Suite",
    subtitle: "Black PVD satin finish with minimalist slender profile",
    category: "cutlery",
    categoryLabel: "Luxury Cutlery",
    stockist: "Addox Royale",
    price: 5900,
    originalPrice: 7500,
    wholesalePrice: 3800,
    badge: "Minimalist Edit",
    badgeType: "blue",
    rating: 4.8,
    reviewsCount: 61,
    capacity: "Service for 6 (24 Pieces)",
    material: "18/10 Stainless Steel Matte Black Finish",
    thermalResistance: "Rust Free & Food Contact Certified",
    moq: "6 Sets (Wholesale)",
    image: "/assets/banners/cat-2.jpg",
    gallery: [
      "/assets/banners/cat-2.jpg"
    ],
    features: [
      "Tactile velvet-matte grip that resists water spotting",
      "Modern Scandinavian proportions with rounded soup spoon bowl",
      "Laser engraved Addox authenticity crest on knife blade",
      "Dishwasher safe with non-abrasive detergent"
    ],
    description: "For the contemporary home and avant-garde dining spaces. The Nordic Obsidian set marries dark theatrical flair with surgical-grade dining performance."
  }
];

export const COMPANY_DETAILS = {
  name: "Addox",
  tagline: "An Exotic Home Maker",
  parentCompany: "Sam International",
  establishedYear: "2000",
  experienceYears: "25+",
  phone: "+91-9899-460-840",
  phoneDisplay: "+91 9899 460 840",
  landline: "(011) 25943670",
  email: "deepakairan88@yahoo.com",
  showroom: {
    addressLine1: "4/63, Krishna Plaza, Basement",
    addressLine2: "W.E.A., Padam Singh Road, Near Tip Top Market",
    city: "Karol Bagh, Delhi",
    pin: "110005",
    country: "India"
  },
  socials: {
    facebook: "https://www.facebook.com/importedglassware.stockist.7",
    whatsapp: "https://wa.me/919899460840?text=Hello%20Addox,%20I%20am%20interested%20in%20your%20tableware%20and%20crockery%20catalogue."
  }
};
