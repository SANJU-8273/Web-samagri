const products= [
  {
	id: 1,
	name: "Complete Diwali Puja Kit",
	price: 599,
	discount: 20,
	category: "Festival Kits",
	image:
	  "https://images.unsplash.com/photo-1605368504600-f2cca6ea012a?auto=format&fit=crop&w=1080&q=80",
	description: `
• A fully curated, traditional Diwali Puja Kit designed for Laxmi–Ganesh rituals  
• Includes all essential, high-quality items needed for a complete Diwali ceremony  
• Ideal for both beginners and experienced devotees  
• Simplifies the entire festive setup with ready-to-use components  
• Ensures a sacred, authentic and spiritually enriched Diwali experience  
`,
	rating: 4.8,
	ecoFriendly: true,
	madeInIndia: true,
	whatsInside: [
	  "Clay Diyas (12 pcs)",
	  "Incense Sticks",
	  "Kumkum",
	  "Haldi",
	  "Camphor",
	  "Cotton Wicks",
	  "Puja Bell",
	],
  },

  {
	id: 2,
	name: "Premium Brass Puja Thali Set",
	price: 899,
	discount: 15,
	category: "Daily Puja Items",
	image:
	  "https://images.unsplash.com/photo-1616435577207-ca90abc6b732?auto=format&fit=crop&w=1080&q=80",
	description: `
• Premium-grade pure brass thali set designed for daily rituals  
• Hand-polished surface with a timeless, traditional aesthetic  
• Highly durable construction suitable for long-term daily use  
• Enhances the spiritual ambience of your home temple  
• A thoughtful and elegant gift for all religious occasions  
`,
	rating: 4.9,
	ecoFriendly: false,
	madeInIndia: true,
	whatsInside: [
	  "Brass Thali",
	  "Small Brass Bowls (5)",
	  "Diya Holder",
	  "Incense Holder",
	  "Temple Bell",
	],
  },

  {
	id: 3,
	name: "Sandalwood Incense Sticks",
	price: 149,
	discount: 10,
	category: "Daily Puja Items",
	image:
	  "https://images.unsplash.com/photo-1627827886264-4483d7a0704c?auto=format&fit=crop&w=1080&q=80",
	description: `
• Premium incense sticks infused with pure sandalwood essence  
• Slow-burning design ensures a long-lasting, calming fragrance  
• Perfect for meditation, yoga sessions, and daily puja  
• Creates a peaceful and positive spiritual atmosphere  
• Crafted using natural, eco-friendly ingredients  
`,
	rating: 4.7,
	ecoFriendly: true,
	madeInIndia: true,
  },

  {
	id: 4,
	name: "Navratri Special Puja Combo",
	price: 799,
	discount: 25,
	category: "Festival Kits",
	image:
	  "https://images.unsplash.com/photo-1652960018678-1f19799996c5?auto=format&fit=crop&w=1080&q=80",
	description: `
• Complete Navratri-ready puja combo packed with traditional essentials  
• Suitable for all 9 days of Durga Puja rituals  
• Creates a serene, devotional, and spiritually uplifting atmosphere  
• Handpicked items to ensure authenticity and purity  
• Perfect for families who want a complete festive setup without hassle  
`,
	rating: 4.9,
	ecoFriendly: true,
	madeInIndia: true,
	whatsInside: [
	  "Kalash",
	  "Coconut",
	  "Fresh Mango Leaves",
	  "Sacred Thread",
	  "Kumkum",
	  "Turmeric",
	  "Decorative Flowers",
	],
  },

  {
	id: 5,
	name: "Lotus Flower Offering Set",
	price: 249,
	discount: 12,
	category: "Daily Puja Items",
	image:
	  "https://images.unsplash.com/photo-1616435577207-ca90abc6b732?auto=format&fit=crop&w=1080&q=80",
	description: `
• Realistic handcrafted lotus flowers ideal for daily offerings  
• Long-lasting, color-preserved and water-resistant design  
• Perfect for temple décor, gifting and festive arrangements  
• Symbolizes purity, devotion, and spiritual harmony  
• Reusable premium-quality artificial blooms  
`,
	rating: 4.6,
	ecoFriendly: true,
	madeInIndia: true,
  },

  {
	id: 6,
	name: "Marigold Decorative Garland Pack",
	price: 199,
	discount: 18,
	category: "Daily Puja Items",
	image:
	  "https://images.unsplash.com/photo-1678372283341-d0e48d21615d?auto=format&fit=crop&w=1080&q=80",
	description: `
• Vibrant synthetic marigold garlands for decoration & puja rituals  
• Lightweight, durable and easy-to-hang design  
• Reusable alternative to real flowers – ideal for festivals & events  
• Adds a traditional, festive charm to your home or temple décor  
• Perfect for doorways, walls, altars and stage setups  
`,
	rating: 4.5,
	ecoFriendly: true,
	madeInIndia: true,
  },

  {
	id: 7,
	name: "Brass Pooja Essentials Combo",
	price: 1299,
	discount: 22,
	category: "Custom Combos",
	image:
	  "https://images.unsplash.com/photo-1652960018678-1f19799996c5?auto=format&fit=crop&w=1080&q=80",
	description: `
• Premium handcrafted brass combo designed for a complete puja setup  
• Heavy-duty craftsmanship with an elegant traditional finish  
• Includes all essential brass items for daily and festive rituals  
• Enhances the divine aura of your home temple  
• A perfect premium gifting choice for auspicious occasions  
`,
	rating: 5.0,
	ecoFriendly: false,
	madeInIndia: true,
	whatsInside: [
	  "Brass Kalash",
	  "Brass Diya",
	  "Brass Temple Bell",
	  "Brass Plate",
	  "Incense Holder",
	],
  },

  {
	id: 8,
	name: "Eco-Friendly Clay Diya Set",
	price: 99,
	discount: 30,
	category: "Eco-friendly Products",
	image:
	  "https://images.unsplash.com/photo-1605368504600-f2cca6ea012a?auto=format&fit=crop&w=1080&q=80",
	description: `
• Handcrafted natural clay diyas made using traditional methods  
• 100% eco-friendly, biodegradable and chemical-free  
• Produces a clean, smokeless flame ideal for pooja and décor  
• Perfect for Diwali, Navratri, temples and daily lighting rituals  
• A sustainable and authentic alternative to electric or plastic diyas  
`,
	rating: 4.8,
	ecoFriendly: true,
	madeInIndia: true,
  },
  // ----------- More Products 9 to 18 --------------

{
  id: 9,
  name: "Ganesh Chaturthi Puja Kit",
  price: 699,
  discount: 22,
  category: "Festival Kits",
  image:
	"https://images.unsplash.com/photo-1600671184900-96ebed27b8b1?auto=format&fit=crop&w=1080&q=80",
  description: `
• Complete Ganesh Puja kit for home rituals  
• Includes eco-friendly Ganpati idol, modak mix & puja samagri  
• Best for 1 to 5 day pooja setup  
• Ensures a pure and devotional atmosphere  
• Suitable for beginners and traditional households  
`,
  rating: 4.8,
  ecoFriendly: true,
  madeInIndia: true,
  whatsInside: [
	"Eco-Friendly Ganpati Idol",
	"Modak Mix",
	"Haldi & Kumkum",
	"Flower Garland",
	"Incense Sticks",
  ],  
},

{
  id: 10,
  name: "Holy Tulsi Mala Pack",
  price: 129,
  discount: 10,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1583512603862-1d7eccd02394?auto=format&fit=crop&w=1080&q=80",
  description: `
• Pure and natural Tulsi mala beads  
• Ideal for chanting, meditation and daily prayers  
• Lightweight, durable craftsmanship  
• Enhances concentration and inner peace  
• Suitable for all age groups  
`,
  rating: 4.6,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 11,
  name: "Lakshmi Charan Paduka Set",
  price: 199,
  discount: 12,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1603899124529-73307039c89f?auto=format&fit=crop&w=1080&q=80",
  description: `
• Auspicious Paduka pair for welcoming prosperity  
• Symbolizes positivity, blessings and divine grace  
• Ideal for festivals, Diwali and temple entrances  
• Long-lasting and easy to clean  
• Perfect gift for auspicious occasions  
`,
  rating: 4.7,
  ecoFriendly: false,
  madeInIndia: true,
},

{
  id: 12,
  name: "Premium Rose Incense Pack",
  price: 179,
  discount: 20,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1612014890610-0e7863c79b08?auto=format&fit=crop&w=1080&q=80",
  description: `
• Slow-burning incense sticks infused with natural rose fragrance  
• Creates a soothing & divine atmosphere  
• Best for meditation & regular puja rituals  
• Chemical-free organic fragrance blend  
• Long-lasting calming aroma  
`,
  rating: 4.5,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 13,
  name: "Eco-Friendly Ghee Diya Pack",
  price: 149,
  discount: 18,
  category: "Eco-friendly Products",
  image:
	"https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1080&q=80",
  description: `
• Natural ghee diya with long-lasting flame  
• 100% organic and biodegradable wick cups  
• Ideal for daily evening aarti and meditation  
• Smokeless, clean burning design  
• Safe for children and elders  
`,
  rating: 4.9,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 14,
  name: "Durga Puja Premium Combo",
  price: 999,
  discount: 20,
  category: "Festival Kits",
  image:
	"https://images.unsplash.com/photo-1600671184900-21701d9fef85?auto=format&fit=crop&w=1080&q=80",
  description: `
• Complete premium combo for Durga Pooja  
• Includes chunri, sindoor, incense, diya & ghee  
• Ideal for 9-day celebrations  
• Handpicked pure-quality items  
• Ensures devotional and spiritual ambience  
`,
  rating: 5.0,
  ecoFriendly: false,
  madeInIndia: true,
  whatsInside: [
	"Durga Chunri",
	"Sindoor",
	"Camphor",
	"Ghee Diya",
	"Incense Sticks",
  ],
},

{
  id: 15,
  name: "Temple Hanging Bells Set",
  price: 349,
  discount: 15,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1543163521-1bf4466941bc?auto=format&fit=crop&w=1080&q=80",
  description: `
• Beautiful brass temple bells with crisp sound  
• Ideal for home temples and festive decorations  
• Strong and durable metal body  
• Brings positivity & divine vibrations  
• Perfect gift for spiritual occasions  
`,
  rating: 4.6,
  ecoFriendly: false,
  madeInIndia: true,
},

{
  id: 16,
  name: "Handcrafted Clay Idol Set",
  price: 299,
  discount: 25,
  category: "Eco-friendly Products",
  image:
	"https://images.unsplash.com/photo-1600671184900-cc33e700d457?auto=format&fit=crop&w=1080&q=80",
  description: `
• Natural handcrafted eco-friendly clay idols  
• 100% chemical-free colors  
• Perfect for daily puja and spiritual altar  
• Promotes sustainability and tradition  
• Safe for children and elders  
`,
  rating: 4.8,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 17,
  name: "Puja Samagri Custom Combo Pack",
  price: 499,
  discount: 20,
  category: "Custom Combos",
  image:
	"https://images.unsplash.com/photo-1612014890610-455c148d464b?auto=format&fit=crop&w=1080&q=80",
  description: `
• Fully customizable puja samagri pack  
• Select items as per your ritual needs  
• Ideal for all major Hindu rituals  
• High-quality pure products included  
• Perfect for gifting  
`,
  rating: 4.8,
  ecoFriendly: false,
  madeInIndia: true,
  whatsInside: [
	"Haldi",
	"Kumkum",
	"Camphor",
	"Agarbatti",
	"Ganga Jal",
  ],
},

{
  id: 18,
  name: "Eco-Friendly Puja Plate Set",
  price: 249,
  discount: 15,
  category: "Eco-friendly Products",
  image:
	"https://images.unsplash.com/photo-1612014890610-a6bfc1cc7e23?auto=format&fit=crop&w=1080&q=80",
  description: `
• Natural biodegradable leaf-based puja plates  
• Lightweight and environment-safe  
• Perfect for festivals and daily rituals  
• Adds traditional elegance  
• Chemical-free and compostable design  
`,
  rating: 4.4,
  ecoFriendly: true,
  madeInIndia: true,
},
// ----------- More Products 19 to 28 --------------

{
  id: 19,
  name: "Diwali Lantern Decoration Combo",
  price: 299,
  discount: 20,
  category: "Festival Kits",
  image:
	"https://images.unsplash.com/photo-1574783164433-4f23a4823dd2?auto=format&fit=crop&w=1080&q=80",
  description: `
• Traditional lanterns perfect for Diwali décor  
• Bright colors with premium quality material  
• Lightweight and easy to hang  
• Adds festive elegance to any space  
• Reusable and durable design  
`,
  rating: 4.6,
  ecoFriendly: false,
  madeInIndia: true,
},

{
  id: 20,
  name: "Pure Ganga Jal Pack",
  price: 79,
  discount: 10,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1603899124529-b80316bf5673?auto=format&fit=crop&w=1080&q=80",
  description: `
• 100% pure and natural Ganga Jal  
• Ideal for all puja rituals and ceremonies  
• Hygienically packed and sealed  
• Symbol of purity and divine blessings  
• Long shelf-life  
`,
  rating: 4.7,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 21,
  name: "Saffron Tilak Pack",
  price: 199,
  discount: 15,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1628083588763-6d0a73e7f24a?auto=format&fit=crop&w=1080&q=80",
  description: `
• Pure saffron tilak for puja & rituals  
• Natural color and pleasant fragrance  
• Long-lasting and easy to apply  
• Ideal for festivals and daily worship  
• Boosts spiritual positivity  
`,
  rating: 4.8,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 22,
  name: "Custom Brass Gift Combo",
  price: 1499,
  discount: 22,
  category: "Custom Combos",
  image:
	"https://images.unsplash.com/photo-1612014890610-b1bbfcb4b64b?auto=format&fit=crop&w=1080&q=80",
  description: `
• Premium brass combo curated for gifting  
• Includes diya, bell, thali and incense holder  
• Heavy-duty, long-lasting metal finish  
• Ideal for weddings, housewarming & festivals  
• Luxurious and traditional look  
`,
  rating: 5.0,
  ecoFriendly: false,
  madeInIndia: true,
  whatsInside: ["Brass Diya", "Brass Thali", "Temple Bell", "Agarbatti Stand"],
},

{
  id: 23,
  name: "Eco-Friendly Bamboo Agarbatti",
  price: 99,
  discount: 12,
  category: "Eco-friendly Products",
  image:
	"https://images.unsplash.com/photo-1628083588763-1c5f2d8b27ef?auto=format&fit=crop&w=1080&q=80",
  description: `
• Bamboo-based incense sticks with natural oils  
• Chemical-free & carbon-neutral production  
• Long-lasting fragrance ideal for meditation  
• Eco-conscious and sustainable  
• Compostable packaging  
`,
  rating: 4.6,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 24,
  name: "Karwa Chauth Puja Thali Combo",
  price: 499,
  discount: 20,
  category: "Festival Kits",
  image:
	"https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1080&q=80",
  description: `
• Complete thali set designed for Karwa Chauth rituals  
• Includes sieve, diya, kumkum and decorative thali  
• Beautiful traditional design  
• Perfect for gifting couples  
• Long-lasting premium quality items  
`,
  rating: 4.9,
  ecoFriendly: false,
  madeInIndia: true,
  whatsInside: [
	"Decorative Thali",
	"Karwa Chauth Sieve",
	"Kumkum",
	"Decorative Diya",
  ],
},

{
  id: 25,
  name: "Lotus Copper Kalash",
  price: 399,
  discount: 18,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1563897539633-7377adb35a0d?auto=format&fit=crop&w=1080&q=80",
  description: `
• Premium copper kalash with lotus engraving  
• Symbol of purity and auspiciousness  
• Ideal for daily puja rituals  
• Highly durable material  
• Easy to clean and maintain  
`,
  rating: 4.7,
  ecoFriendly: false,
  madeInIndia: true,
},

{
  id: 26,
  name: "Eco-Friendly Festival Decoration Pack",
  price: 249,
  discount: 25,
  category: "Eco-friendly Products",
  image:
	"https://images.unsplash.com/photo-1605368504600-2988cd7631c8?auto=format&fit=crop&w=1080&q=80",
  description: `
• Natural fiber-based festival décor items  
• Biodegradable, reusable and safe for home  
• Includes toran, diya, small flags & flowers  
• Perfect for eco Diwali themes  
• Colorful and traditional look  
`,
  rating: 4.8,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 27,
  name: "Rudraksha Bracelet Premium",
  price: 299,
  discount: 12,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1504196606672-6d58fb947bf2?auto=format&fit=crop&w=1080&q=80",
  description: `
• Authentic Rudraksha beads crafted into a bracelet  
• Ideal for meditation, peace and concentration  
• Long-lasting elastic and durable beads  
• Enhances spiritual energy  
• Suitable for gifting  
`,
  rating: 4.8,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 28,
  name: "Shubh Labh Toran Set",
  price: 199,
  discount: 15,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1580137189272-4c836cd1d1f8?auto=format&fit=crop&w=1080&q=80",
  description: `
• Traditional Shubh Labh door hanging toran  
• Perfect for festivals and auspicious events  
• Vibrant colors with premium finishing  
• Reusable and durable design  
• Brings positivity and prosperity  
`,
  rating: 4.5,
  ecoFriendly: false,
  madeInIndia: true,
},
// ----------- More Products 29 to 38 --------------

{
  id: 29,
  name: "Pongal Festival Puja Kit",
  price: 549,
  discount: 18,
  category: "Festival Kits",
  image:
	"https://images.unsplash.com/photo-1574783164433-7f1a5e0ed1e4?auto=format&fit=crop&w=1080&q=80",
  description: `
• Complete Pongal puja setup kit  
• Includes turmeric, rice grains, jaggery & coconut  
• Ideal for South Indian festive rituals  
• Pure and traditional ingredients  
• Best for home celebrations  
`,
  rating: 4.8,
  ecoFriendly: true,
  madeInIndia: true,
  whatsInside: [
	"Rice Grains",
	"Turmeric",
	"Jaggery",
	"Coconut",
	"Agarbatti",
  ],
},

{
  id: 30,
  name: "Pure Cow Ghee Diya Wicks",
  price: 129,
  discount: 10,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1612014890610-e4060c3aabec?auto=format&fit=crop&w=1080&q=80",
  description: `
• Ready-to-use ghee wick cups  
• Clean and smokeless flame  
• Best for daily aarti and meditation  
• Made using pure cow ghee  
• Safe for indoor use  
`,
  rating: 4.6,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 31,
  name: "Chandan Tilak Premium Pack",
  price: 149,
  discount: 12,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1603899124529-a51067c1d561?auto=format&fit=crop&w=1080&q=80",
  description: `
• Pure sandalwood tilak paste  
• Divine fragrance and cooling effect  
• Ideal for daily rituals and festivals  
• Made from natural sandal extracts  
• Long shelf life  
`,
  rating: 4.7,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 32,
  name: "Customized Puja Hamper Gift Box",
  price: 899,
  discount: 18,
  category: "Custom Combos",
  image:
	"https://images.unsplash.com/photo-1612014890610-d0ff4e5588f6?auto=format&fit=crop&w=1080&q=80",
  description: `
• Fully customizable spiritual gift hamper  
• Ideal for weddings, pujas & festive gifting  
• Includes incense, diya, kumkum & more  
• Premium packaging with eco-friendly materials  
• Perfect festive gift  
`,
  rating: 4.8,
  ecoFriendly: false,
  madeInIndia: true,
  whatsInside: [
	"Decorative Diya",
	"Incense Pack",
	"Kumkum",
	"Camphor",
	"Chunri",
  ],
},

{
  id: 33,
  name: "Eco Bamboo Puja Thali Set",
  price: 349,
  discount: 20,
  category: "Eco-friendly Products",
  image:
	"https://images.unsplash.com/photo-1605368504600-44fb2732a8f1?auto=format&fit=crop&w=1080&q=80",
  description: `
• Natural bamboo thali ideal for puja setup  
• Strong, chemical-free and biodegradable  
• Elegant handmade craftsmanship  
• Lightweight and reusable  
• Perfect for traditional décor  
`,
  rating: 4.6,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 34,
  name: "Maha Shivratri Puja Kit",
  price: 599,
  discount: 22,
  category: "Festival Kits",
  image:
	"https://images.unsplash.com/photo-1580137189272-9af57a32673e?auto=format&fit=crop&w=1080&q=80",
  description: `
• Complete Maha Shivratri pooja essentials  
• Includes belpatra, gangajal, rudraksha & incense  
• Best for devotees performing traditional rituals  
• Pure and sacred components  
• Suitable for home & temple use  
`,
  rating: 5.0,
  ecoFriendly: true,
  madeInIndia: true,
  whatsInside: [
	"Belpatra",
	"Ganga Jal",
	"Rudraksha",
	"Chandan",
	"Incense Sticks",
  ],
},

{
  id: 35,
  name: "Brass Hanging Oil Lamp",
  price: 799,
  discount: 15,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1563897539633-4b999fdd9dbf?auto=format&fit=crop&w=1080&q=80",
  description: `
• Beautiful brass hanging diya  
• Traditional temple-style design  
• Ideal for home mandir & festival décor  
• Long-lasting premium brass quality  
• Bright glowing flame  
`,
  rating: 4.7,
  ecoFriendly: false,
  madeInIndia: true,
},

{
  id: 36,
  name: "Recycled Paper Toran Set",
  price: 179,
  discount: 20,
  category: "Eco-friendly Products",
  image:
	"https://images.unsplash.com/photo-1580137189272-4c8629e8c3bb?auto=format&fit=crop&w=1080&q=80",
  description: `
• Handmade toran made using recycled paper  
• Biodegradable and sustainable décor  
• Vibrant traditional colors  
• Ideal for festivals & ceremonies  
• Lightweight and reusable  
`,
  rating: 4.4,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 37,
  name: "Deluxe Home Temple Combo",
  price: 1699,
  discount: 25,
  category: "Custom Combos",
  image:
	"https://images.unsplash.com/photo-1616435577207-f24d6090f962?auto=format&fit=crop&w=1080&q=80",
  description: `
• Premium wooden temple + puja items combo  
• Includes diya, incense, bell & kalash  
• Ideal for gifting & home installation  
• High-quality craftsmanship  
• Adds divine beauty to your home  
`,
  rating: 5.0,
  ecoFriendly: false,
  madeInIndia: true,
  whatsInside: [
	"Small Wooden Temple",
	"Brass Bell",
	"Brass Diya",
	"Kalash",
	"Agarbatti Stand",
  ],
},

{
  id: 38,
  name: "Festival Flower Garland Set",
  price: 229,
  discount: 14,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1678372283341-98827fe5b944?auto=format&fit=crop&w=1080&q=80",
  description: `
• Artificial flower garlands for puja & events  
• Long-lasting & reusable décor  
• Bright, festive colors  
• Perfect for temples, homes & functions  
• Easy to hang and maintain  
`,
  rating: 4.5,
  ecoFriendly: true,
  madeInIndia: true,
},
// ----------- More Products 39 to 48 --------------

{
  id: 39,
  name: "Govardhan Puja Essentials Kit",
  price: 449,
  discount: 18,
  category: "Festival Kits",
  image:
	"https://images.unsplash.com/photo-1603899124529-7150bfc35b83?auto=format&fit=crop&w=1080&q=80",
  description: `
• Complete Govardhan Puja samagri set  
• Includes cow dung cakes, roli, chawal & diya  
• Ideal for post-Diwali rituals  
• Pure, traditional & sacred components  
• Easy to use for home puja  
`,
  rating: 4.8,
  ecoFriendly: true,
  madeInIndia: true,
  whatsInside: [
	"Cow Dung Cakes",
	"Roli",
	"Chawal",
	"Clay Diya",
	"Agarbatti",
  ],
},

{
  id: 40,
  name: "Camphor Cone Air Purifier",
  price: 199,
  discount: 20,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1628083588763-569dbe3bbf75?auto=format&fit=crop&w=1080&q=80",
  description: `
• Natural camphor cone for fragrance & purifying air  
• Long-lasting soothing aroma  
• Removes negativity and bad odor  
• 100% organic camphor  
• Safe for indoor use  
`,
  rating: 4.7,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 41,
  name: "Rose Water Spiritual Spray",
  price: 149,
  discount: 15,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1612014890610-8dfb5cec2c8b?auto=format&fit=crop&w=1080&q=80",
  description: `
• Pure rose water for divine fragrance  
• Ideal for idols, rooms & temple sanctums  
• Cooling, refreshing and spiritually uplifting  
• 100% natural rose extract  
• Reusable spray bottle  
`,
  rating: 4.6,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 42,
  name: "Puja Essentials Custom Basket",
  price: 599,
  discount: 18,
  category: "Custom Combos",
  image:
	"https://images.unsplash.com/photo-1612014890610-a66e95315d44?auto=format&fit=crop&w=1080&q=80",
  description: `
• Create your own puja basket  
• Select from diya, incense, tilak & holy water  
• Beautiful handwoven basket included  
• Premium quality products  
• Best for gifting and rituals  
`,
  rating: 4.8,
  ecoFriendly: false,
  madeInIndia: true,
  whatsInside: [
	"Handwoven Basket",
	"Incense Pack",
	"Tilak",
	"Camphor",
	"Clay Diya",
  ],
},

{
  id: 43,
  name: "Eco-Friendly Banana Leaf Plates",
  price: 129,
  discount: 10,
  category: "Eco-friendly Products",
  image:
	"https://images.unsplash.com/photo-1605368504600-cc34aa1dea2b?auto=format&fit=crop&w=1080&q=80",
  description: `
• Natural banana leaf plates for rituals & festivals  
• 100% biodegradable and chemical-free  
• Ideal for prasad & offerings  
• Strong and eco-conscious  
• Traditional and elegant look  
`,
  rating: 4.5,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 44,
  name: "Bhai Dooj Puja Kit",
  price: 299,
  discount: 22,
  category: "Festival Kits",
  image:
	"https://images.unsplash.com/photo-1574783164433-399a0ce4c2df?auto=format&fit=crop&w=1080&q=80",
  description: `
• Complete ritual kit for Bhai Dooj ceremony  
• Includes tilak, roli, chawal & aarti thali  
• Traditional festival essentials  
• Ideal for gifting brothers & sisters  
• Beautiful festive packaging  
`,
  rating: 4.9,
  ecoFriendly: false,
  madeInIndia: true,
  whatsInside: [
	"Tilak Roli",
	"Chawal",
	"Decorative Thali",
	"Diya",
	"Moli",
  ],
},

{
  id: 45,
  name: "Brass Peacock Diya",
  price: 499,
  discount: 15,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1563897539633-872361cf6f9e?auto=format&fit=crop&w=1080&q=80",
  description: `
• Beautiful handcrafted peacock-style brass diya  
• Premium golden finish  
• Ideal for home temple, gifting & festivals  
• Heavy-duty brass ensures long life  
• Bright and glowing flame  
`,
  rating: 4.8,
  ecoFriendly: false,
  madeInIndia: true,
},

{
  id: 46,
  name: "Organic Turmeric Powder for Puja",
  price: 89,
  discount: 10,
  category: "Daily Puja Items",
  image:
	"https://images.unsplash.com/photo-1628083588763-6a81f0c0d4b8?auto=format&fit=crop&w=1080&q=80",
  description: `
• Pure yellow turmeric powder for rituals  
• 100% natural and chemical-free  
• Ideal for havan, puja & offerings  
• Fresh aroma and long shelf life  
• Smooth fine texture  
`,
  rating: 4.6,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 47,
  name: "Eco-Friendly Floral Rangoli Kit",
  price: 249,
  discount: 15,
  category: "Eco-friendly Products",
  image:
	"https://images.unsplash.com/photo-1605368504600-1fb39df5e6d2?auto=format&fit=crop&w=1080&q=80",
  description: `
• Natural floral rangoli using dried petals  
• 100% biodegradable & chemical-free  
• Vibrant festive colors  
• Easy to arrange & long-lasting  
• Perfect for Diwali & puja décor  
`,
  rating: 4.7,
  ecoFriendly: true,
  madeInIndia: true,
},

{
  id: 48,
  name: "Ram Navami Puja Samagri Kit",
  price: 399,
  discount: 18,
  category: "Festival Kits",
  image:
	"https://images.unsplash.com/photo-1580137189272-7ecb5a2278ce?auto=format&fit=crop&w=1080&q=80",
  description: `
• Complete Ram Navami rituals kit  
• Includes holy water, agarbatti, tilak & flowers  
• Perfect for temple and home celebrations  
• Pure and traditional ingredients  
• Easy-to-use packaged items  
`,
  rating: 4.9,
  ecoFriendly: true,
  madeInIndia: true,
  whatsInside: [
	"Ganga Jal",
	"Incense",
	"Tilak",
	"Flower Garland",
	"Camphor",
  ],
},


];


export default products;