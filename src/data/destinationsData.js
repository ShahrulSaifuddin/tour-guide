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
    caseStudy: {
      title: "Why Kuala Lumpur is Special",
      body: "Kuala Lumpur isn't just a capital; it's a collision of cultures. You'll find steel-clad skyscrapers reflecting 100-year-old mosques, and the smell of roasting satay wafting through high-end shopping districts.",
      insights: [
        { label: "Best Time", value: "May - July" },
        { label: "Vibe", value: "Urban Jungle" },
        { label: "Ideal Trip", value: "3 Days" },
      ],
      story: {
        morning: "Start with local kopi and kaya toast in Chinatown.",
        afternoon: "Escape the heat in the futuristic KLCC district.",
        night: "Watch the city sparkle from a rooftop bar in Bukit Bintang.",
      },
    },
    history: {
      text: "Founded in 1857 at the confluence of the Gombak and Klang rivers, KL began as a muddy tin-mining settlement. It survived fires, floods, and wars to become the alpha world city it is today.",
      fact: "The name Kuala Lumpur literally translates to 'muddy confluence'.",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "Petronas Towers",
        captionTitle: "Iconic Skyline",
        captionText: "The twin towers dominate the city view.",
        tags: ["Landmark"],
      },
      {
        src: "https://images.unsplash.com/photo-1565618544485-c89658dbdb9a?q=80&w=1000",
        alt: "Batu Caves",
        captionTitle: "Batu Caves",
        captionText: "Limestone caves guarding Hindu shrines.",
        tags: ["Culture"],
      },
      {
        src: "https://images.unsplash.com/photo-1627488974558-8120c822709d?q=80&w=1000",
        alt: "Jalan Alor",
        captionTitle: "Street Food",
        captionText: "The heart of KL's night food scene.",
        tags: ["Food"],
      },
      {
        src: "https://images.unsplash.com/photo-1510425275810-770cf08fc46a?q=80&w=1000",
        alt: "Thean Hou Temple",
        captionTitle: "Thean Hou Temple",
        captionText: "One of the oldest and largest temples in SEA.",
        tags: ["Culture"],
      },
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
    caseStudy: {
      title: "Pearl of the Orient",
      body: "Penang is a kaleidoscope of cultures, where ancient shophouses stand shoulder-to-shoulder with modern street art. It's a sensory overload of sights, sounds, and most importantly, tastes.",
      insights: [
        { label: "Best Time", value: "Nov - Feb" },
        { label: "Vibe", value: "Heritage & Food" },
        { label: "Ideal Trip", value: "3 Days" },
      ],
      story: {
        morning: "Hunt for murals in the maze of George Town's alleys.",
        afternoon: "Cool off with Cendol on Penang Road.",
        night: "Watch the sunset from the Clan Jetties.",
      },
    },
    history: {
      text: "Establish by Francis Light in 1786, Penang became a key trading post for the British East India Company. Its strategic location attracted merchants from China, India, and the Middle East, creating a unique melting pot of cultures.",
      fact: "George Town was awarded UNESCO World Heritage status in 2008.",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "George Town Street Art",
        captionTitle: "Living Walls",
        captionText: "Interactive murals that tell local stories.",
        tags: ["Art"],
      },
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "Kek Lok Si Temple",
        captionTitle: "Kek Lok Si",
        captionText: "The largest Buddhist temple in Malaysia.",
        tags: ["Culture"],
      },
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "Cheong Fatt Tze Mansion",
        captionTitle: "Blue Mansion",
        captionText: "An indigo-blue architectural masterpiece.",
        tags: ["Architecture"],
      },
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "Penang Hill",
        captionTitle: "Penang Hill",
        captionText: "Panoramic views from the funicular train.",
        tags: ["Nature"],
      },
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
    caseStudy: {
      title: "Where It All Began",
      body: "Melaka is the birthplace of Malaysian history. From the Sultanate to colonial rule by the Portuguese, Dutch, and British, every street corner tells a story of conquest and trade.",
      insights: [
        { label: "Best Time", value: "Weekdays" },
        { label: "Vibe", value: "Historic" },
        { label: "Ideal Trip", value: "2 Days" },
      ],
      story: {
        morning: "Walk through the red buildings of Dutch Square.",
        afternoon: "Cruise down the Melaka River past painted shophouses.",
        night: "Hunt for antiques and street food at Jonker Walk.",
      },
    },
    history: {
      text: "Once one of the world's most important trading ports, Melaka controlled the spice trade between the East and West. Its strategic importance led to centuries of colonial battles and a rich architectural legacy.",
      fact: "Parameswara, a Sumatran prince, founded Melaka after seeing a mouse deer outwit his hunting dogs.",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "Christ Church Melaka",
        captionTitle: "Red Square",
        captionText: "The iconic Dutch colonial center of town.",
        tags: ["History"],
      },
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "A Famosa",
        captionTitle: "A Famosa",
        captionText: "Remains of the Portuguese fortress.",
        tags: ["History"],
      },
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "Melaka River",
        captionTitle: "River Cruise",
        captionText: "The Venice of the East.",
        tags: ["Relaxation"],
      },
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "Jonker Street",
        captionTitle: "Jonker Walk",
        captionText: "Bustling night market and antique shops.",
        tags: ["Culture"],
      },
    ],
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
    caseStudy: {
      title: "The Cool Highlands",
      body: "Escape the tropical heat to a land of rolling tea plantations and mist-covered hills. Cameron Highlands is Malaysia's green bowl, offering a refreshing retreat into nature.",
      insights: [
        { label: "Best Time", value: "Feb - Apr" },
        { label: "Vibe", value: "Relaxing/Nature" },
        { label: "Ideal Trip", value: "2 Days" },
      ],
      story: {
        morning: "Watch the sunrise over the emerald tea fields.",
        afternoon: "Trek through the ancient, misty Mossy Forest.",
        night: "Enjoy a warm steamboat dinner in the cool air.",
      },
    },
    history: {
      text: "Discovered by William Cameron in 1885, this hill station was developed by the British as a respite from the lowland heat. It remains the center of Malaysia's tea production.",
      fact: "The Mossy Forest is one of the oldest rainforests in Malaysia, dating back 200 million years.",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "BOH Tea Plantation",
        captionTitle: "Tea Fields",
        captionText: "Endless green carpets of tea leaves.",
        tags: ["Nature"],
      },
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "Mossy Forest",
        captionTitle: "Enchanted Forest",
        captionText: "A fairy-tale landscape of moss and mist.",
        tags: ["Nature"],
      },
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "Strawberry Farm",
        captionTitle: "Fresh Strawberries",
        captionText: "Pick your own sweet highland strawberries.",
        tags: ["Activity"],
      },
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "English Cottage",
        captionTitle: "Colonial Charm",
        captionText: "Tudor-style architecture amidst the hills.",
        tags: ["Architecture"],
      },
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
    caseStudy: {
      title: "The Hipster Heritage",
      body: "Ipoh has transformed from a sleepy tin-mining town into a vibrant travel destination. With its stunning limestone cave temples and a coffee culture that rivals any in the world, it's a hidden gem waiting to be explored.",
      insights: [
        { label: "Best Time", value: "Jan - May" },
        { label: "Vibe", value: "Nostalgic" },
        { label: "Ideal Trip", value: "2 Days" },
      ],
      story: {
        morning: "Start with a cup of rich, frothy Ipoh White Coffee.",
        afternoon: "Explore the mysterious corridors of Kellie's Castle.",
        night: "Stroll through Concubine Lane for snacks and souvenirs.",
      },
    },
    history: {
      text: "Ipoh boomed in the 19th century due to the rich tin deposits in the Kinta Valley. The wealth of the era left behind grand colonial buildings and a unique culinary heritage.",
      fact: "Ipoh was known as the 'City of Millionaires' during the tin mining boom.",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "Kek Lok Tong",
        captionTitle: "Cave Temples",
        captionText: "Serenity carved into limestone cliffs.",
        tags: ["Culture"],
      },
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "Concubine Lane",
        captionTitle: "Heritage Lanes",
        captionText: "Restored shophouses bustling with life.",
        tags: ["Culture"],
      },
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "Kellies Castle",
        captionTitle: "Kellie's Castle",
        captionText: "An unfinished mansion with a tragic story.",
        tags: ["History"],
      },
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "White Coffee",
        captionTitle: "White Coffee",
        captionText: "The original brew that put Ipoh on the map.",
        tags: ["Food"],
      },
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
