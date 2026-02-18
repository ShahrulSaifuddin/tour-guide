// Migrated from Supabase 'destinations' table
export const destinations = [
  {
    id: "eff915ad-1d09-415c-ad01-1093cc47e36e",
    name: "Kuala Lumpur City Tour",
    slug: "kuala-lumpur",
    description:
      "Discover the vibrant capital of Malaysia. From the iconic Petronas Twin Towers to the historic Batu Caves, experience the perfect blend of modern and traditional.",
    image_url:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070",
    price_start: 350,
    highlights: [
      "Petronas Twin Towers",
      "Batu Caves",
      "Merdeka Square",
      "Chinatown",
    ],
  },
  {
    id: "563610d9-4f47-460e-b294-295add8c5d54",
    name: "Penang Heritage & Food",
    slug: "penang",
    description:
      "Explore the streets of George Town, a UNESCO World Heritage site, and indulge in world-famous street food.",
    image_url: "/images/PenangHeritage&Food.jpg",
    price_start: 400,
    highlights: [
      "George Town Street Art",
      "Kek Lok Si Temple",
      "Penang Hill",
      "Char Kway Teow",
    ],
  },
  {
    id: "2d01e65e-a6a4-4153-9b79-1e03f11d0944",
    name: "Historical Melaka",
    slug: "melaka",
    description:
      "Step back in time in Malaysia's most historic city. Visit Dutch colonial buildings, walk Jonker Street, and cruise the Melaka River.",
    image_url: "/images/HistoricalMelaka.jpg",
    price_start: 450,
    highlights: ["Red Square", "Jonker Street", "A Famosa", "River Cruise"],
  },
  {
    id: "069b58c5-f4e0-43fe-a37c-c3272cf715a5",
    name: "Cameron Highlands Nature",
    slug: "cameron-highlands",
    description:
      "Escape the heat to the cool hills. Walk through tea plantations, visit strawberry farms, and enjoy the lush greenery.",
    image_url: "/images/CameronHighlandsNature.jpg",
    price_start: 500,
    highlights: [
      "BOH Tea Plantation",
      "Mossy Forest",
      "Strawberry Farm",
      "Butterfly Garden",
    ],
  },
  {
    id: "1ff6a5b1-cda0-4c69-9902-9fe84e3d66df",
    name: "Ipoh Cave & Culture",
    slug: "ipoh",
    description:
      "Famous for its white coffee, stunning limestone cave temples, and colonial architecture.",
    image_url: "/images/IpohCave&Culture.jpg",
    price_start: 350,
    highlights: [
      "Kellies Castle",
      "Kek Lok Tong Cave",
      "Concubine Lane",
      "Ipoh White Coffee",
    ],
  },
];

export const destinationsEditorial = {
  "kuala-lumpur": {
    vibe: "Metropolitan energy meets heritage charm",
    highlights: [
      "Petronas Twin Towers & KLCC Park",
      "Batu Caves limestone temples",
      "Street food in Jalan Alor",
    ],
    bestFor: ["City Lovers", "Foodies", "Shopping"],
    bestTime: "Year-round",
    stats: { tours: 12 },
  },
  penang: {
    vibe: "Heritage streets & legendary hawker food",
    highlights: [
      "George Town UNESCO World Heritage Site",
      "Penang Hill funicular ride",
      "Clan Jetties waterfront settlements",
    ],
    bestFor: ["Culture Vultures", "Foodies", "History"],
    bestTime: "Nov - Feb",
    stats: { tours: 8 },
  },
  melaka: {
    vibe: "Historical port city with colonial roots",
    highlights: [
      "Dutch Square (Red Square)",
      "Jonker Street Night Market",
      "A Famosa Fortress ruins",
    ],
    bestFor: ["History Buffs", "Couples", "Photography"],
    bestTime: "Weekdays",
    stats: { tours: 5 },
  },
  "cameron-highlands": {
    vibe: "Cool climate tea plantations & strawberry farms",
    highlights: [
      "Boh Tea Plantation views",
      "Mossy Forest hiking",
      "Fresh strawberry picking",
    ],
    bestFor: ["Nature Lovers", "Relaxation", "Families"],
    bestTime: "Feb - Apr",
    stats: { tours: 4 },
  },
  ipoh: {
    vibe: "Limestone cliffs & old town nostalgia",
    highlights: [
      "Kek Lok Tong Cave Temple",
      "Concubine Lane heritage walk",
      "Authentic White Coffee",
    ],
    bestFor: ["Explorers", "Foodies", "Nature"],
    bestTime: "Jan - May",
    stats: { tours: 3 },
  },
  // Default fallback
  default: {
    vibe: "Discover the beauty of Malaysia",
    highlights: [
      "Authentic local experiences",
      "Professional private guides",
      "Flexible itineraries",
    ],
    bestFor: ["Everyone"],
    bestTime: "Year-round",
    stats: { tours: 0 },
  },
};

export const collections = [
  {
    id: 1,
    title: "Weekend Escapes",
    image: "/images/WeekendEscapes.jpg",
    count: "5 Destinations",
  },
  {
    id: 2,
    title: "Heritage Routes",
    image: "/images/HeritageRoutes.jpg",
    count: "3 Destinations",
  },
  {
    id: 3,
    title: "Food Trails",
    image: "/images/FoodTrails.jpg",
    count: "4 Destinations",
  },
  {
    id: 4,
    title: "Nature Retreats",
    image: "/images/NatureRetreats.jpg",
    count: "6 Destinations",
  },
];
