const products = [
  {
    name: "Airpods Wireless Bluetooth Headphones",
    image: "/images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "iPhone 13 Pro 256GB Memory",
    image: "/images/phone.jpg",
    description:
      "Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Cannon EOS 80D DSLR Camera",
    image: "/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "Sony Playstation 5",
    image: "/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "Logitech G-Series Gaming Mouse",
    image: "/images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "Amazon Echo Dot 3rd Generation",
    image: "/images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "Minimalist Oak Desk",
    image:
      "https://images.unsplash.com/photo-1683582411325-b87240c5b530?w=640&h=510&fit=crop&q=80",
    description:
      "Crafted from solid sustainable oak, this minimalist writing desk features integrated cable management and clean, modern geometric lines.",
    brand: "NordicHome",
    category: "Office Furniture",
    price: 299.0,
    countInStock: 6,
    rating: 4.7,
    numReviews: 38,
  },
  {
    name: "Leather Heritage Backpack",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=640&h=510&fit=crop&q=80",
    description:
      "Handcrafted premium top-grain leather backpack featuring a padded 15-inch laptop sleeve, water-resistant lining, and solid brass hardware.",
    brand: "Heritage Goods",
    category: "Accessories",
    price: 185.0,
    countInStock: 14,
    rating: 4.8,
    numReviews: 89,
  },
  {
    name: "Stainless Steel Water Bottle",
    image:
      "https://images.unsplash.com/photo-1530711654140-23ef9ad45094?w=640&h=510&fit=crop&q=80",
    description:
      "Double-wall vacuum insulated flask that keeps beverages cold for up to 24 hours or hot for 12 hours. BPA-free powder coat finish.",
    brand: "HydroFlow",
    category: "Fitness & Outdoor",
    price: 34.95,
    countInStock: 45,
    rating: 4.6,
    numReviews: 310,
  },
  {
    name: "Pro Ceramic Espresso Machine",
    image:
      "https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?w=640&h=510&fit=crop&q=80",
    description:
      "Bring the cafe home with precision extraction, a built-in conical burr grinder, and a powerful commercial-style steam wand.",
    brand: "BaristaPro",
    category: "Kitchen Appliances",
    price: 649.99,
    countInStock: 5,
    rating: 4.5,
    numReviews: 42,
  },
  {
    name: "Smart Fitness Watch",
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=640&h=510&fit=crop&q=80",
    description:
      "Track workouts, heart rate, sleep quality, and GPS routes with an dynamic, always-on AMOLED display and 7-day battery life.",
    brand: "FitTrack",
    category: "Electronics",
    price: 199.0,
    countInStock: 20,
    rating: 4.3,
    numReviews: 154,
  },
  {
    name: "Matte Black Ceramic Coffee Mug",
    image:
      "https://images.unsplash.com/photo-1478793923361-0a82106deaa3?w=640&h=510&fit=crop&q=80",
    description:
      "Ergonomically designed, heavy-duty ceramic mug finished in a gorgeous raw matte black glaze. Dishwasher and microwave safe.",
    brand: "Clay & Co",
    category: "Kitchenware",
    price: 24.0,
    countInStock: 50,
    rating: 4.7,
    numReviews: 78,
  },
  {
    name: "Natural Cork Yoga Mat",
    image:
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=640&h=510&fit=crop&q=80",
    description:
      "Eco-friendly, non-slip yoga mat made from organic cork and natural tree rubber. Provides premium cushioning and natural antimicrobial properties.",
    brand: "ZenEarth",
    category: "Fitness & Outdoor",
    price: 78.0,
    countInStock: 18,
    rating: 4.8,
    numReviews: 63,
  },
  {
    name: "Wireless Charging Desk Pad",
    image:
      "https://images.unsplash.com/photo-1587749091716-f7b291a87f87?w=640&h=510&fit=crop&q=80",
    description:
      "Premium felt desk mat integrating a fast 15W Qi wireless charging zone, keeping your phone powered and your workspace pristine.",
    brand: "SleekDesk",
    category: "Office Furniture",
    price: 65.0,
    countInStock: 25,
    rating: 4.4,
    numReviews: 81,
  },
  {
    name: "Noise-Isolating Studio Microphone",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=640&h=510&fit=crop&q=80",
    description:
      "Professional cardioid dynamic microphone optimized for streaming, podcasting, and vocal recordings, featuring a built-in pop filter.",
    brand: "AudioVoice",
    category: "Electronics",
    price: 219.0,
    countInStock: 11,
    rating: 4.7,
    numReviews: 99,
  },
  {
    name: "Minimalist Leather Wallet",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=640&h=510&fit=crop&q=80",
    description:
      "Ultra-slim RFID blocking wallet crafted from full-grain pull-up leather. Holds up to 8 cards and folded cash comfortably.",
    brand: "Hide & Seek",
    category: "Accessories",
    price: 45.0,
    countInStock: 33,
    rating: 4.6,
    numReviews: 142,
  },
  {
    name: "Portable Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=640&h=510&fit=crop&q=80",
    description:
      "IP67 waterproof and dustproof portable speaker delivering deep, punchy 360-degree bass. Up to 15 hours of continuous playtime.",
    brand: "SonicWave",
    category: "Electronics",
    price: 129.99,
    countInStock: 16,
    rating: 4.5,
    numReviews: 188,
  },
  {
    name: "Soy Wax Amber Candle",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=640&h=510&fit=crop&q=80",
    description:
      "Hand-poured 100% natural soy wax candle infused with notes of sandalwood, amber, and rich vanilla. Burns cleanly for 50 hours.",
    brand: "AromaCo",
    category: "Home Decor",
    price: 28.0,
    countInStock: 40,
    rating: 4.9,
    numReviews: 75,
  },
  {
    name: "Adjustable Dumbbell Set",
    image:
      "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=640&h=510&fit=crop&q=80",
    description:
      "All-in-one selectorized dumbbells adjustable from 5 to 52.5 lbs. Eliminates the need for multiple clunky free-weight sets.",
    brand: "IronForge",
    category: "Fitness & Outdoor",
    price: 379.0,
    countInStock: 6,
    rating: 4.6,
    numReviews: 52,
  },
  {
    name: "Anodized Aluminum Mechanical Pencil",
    image:
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=640&h=510&fit=crop&q=80",
    description:
      "Precision engineered 0.5mm draftsperson mechanical pencil with a knurled grip and an indestructible lightweight aluminum body.",
    brand: "DraftLine",
    category: "Accessories",
    price: 32.0,
    countInStock: 30,
    rating: 4.8,
    numReviews: 41,
  },
];

export default products;
