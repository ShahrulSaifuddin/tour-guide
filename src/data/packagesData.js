export const packages = [
  {
    id: "dc1708ad-7490-4026-b648-52fc06caeb73",
    title: "KL City Half-Day Tour",
    slug: "kl-city-half-day",
    description:
      "A quick but comprehensive tour of Kuala Lumpur's must-see landmarks including the Twin Towers, King's Palace, and National Mosque.",
    price: 250,
    duration: "4 Hours",
    image_url:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070",
    destination_id: "eff915ad-1d09-415c-ad01-1093cc47e36e",
    inclusions: ["Hotel Pickup", "English Speaking Guide", "Transport"],
    is_featured: true,
    itinerary: [
      {
        time: "09:00 AM",
        title: "Pickup from Hotel",
        description: "Meet your guide and driver.",
      },
      {
        time: "09:30 AM",
        title: "Petronas Twin Towers",
        description: "Photo stop and walk through KLCC park.",
      },
      {
        time: "11:00 AM",
        title: "Batu Caves",
        description: "Climb the 272 steps to the temple cave.",
      },
      {
        time: "01:00 PM",
        title: "Drop off",
      },
    ],
    caseStudy: {
      title: "Inside the Experience",
      body: "This isn't just a sightseeing drive; it's a crash course in Malaysian identity. We minimize driving time to maximize your time at the sites that matter.",
      insights: [
        { label: "Pace", value: "Easy" },
        { label: "Crowds", value: "Moderate" },
        { label: "Transport", value: "Private AC Van" },
      ],
      story: {
        see: "The contrast between the Colonial District and modern KLCC.",
        taste: "Technicolor Indian sweets at Batu Caves.",
        takeaway: "Understanding how three cultures exist in harmony.",
      },
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "KL Tour Highlights",
        captionTitle: "City Icons",
        captionText: "See the best of KL in half a day.",
        tags: ["Tour"],
      },
      {
        src: "https://images.unsplash.com/photo-1574227492706-f6cac3141854?q=80&w=1000",
        alt: "National Mosque",
        captionTitle: "National Mosque",
        captionText: "Modernist architecture meeting tradition.",
        tags: ["Culture"],
      },
      {
        src: "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?q=80&w=1000",
        alt: "King's Palace",
        captionTitle: "Istana Negara",
        captionText: "The official residence of the Monarch.",
        tags: ["Culture"],
      },
      {
        src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000",
        alt: "Petronas Towers",
        captionTitle: "Twin Towers",
        captionText: "The world's tallest twin structures.",
        tags: ["Landmark"],
      },
    ],
  },
  {
    id: "9164cebc-991d-4084-96f6-cb3940165eea",
    title: "Hidden Gems Food Tour",
    slug: "kl-food-tour",
    description:
      "Taste the best of Malaysia! We take you to hidden stalls and local favorites for an authentic culinary adventure.",
    price: 300,
    duration: "4 Hours",
    image_url: "/images/HiddenGemsFoodTour.jpg",
    destination_id: "eff915ad-1d09-415c-ad01-1093cc47e36e",
    inclusions: ["Food Tasting (5+ stops)", "Transport", "Guide"],
    is_featured: true,
    itinerary: [
      {
        time: "05:00 PM",
        title: "Pickup",
        description: "Start with a light snack.",
      },
      {
        time: "06:00 PM",
        title: "Chinatown Food Walk",
        description: "Try Hokkien Mee and Satay.",
      },
      {
        time: "08:00 PM",
        title: "Kampung Baru",
        description: "Authentic Malay dishes like Nasi Lemak.",
      },
      {
        time: "09:30 PM",
        title: "Dessert & Drop off",
        description: "Cendol to finish the night.",
      },
    ],
  },
  {
    id: "b317c9ca-3f2a-4edb-bc4c-d766046f1eb1",
    title: "George Town Heritage Walk",
    slug: "penang-heritage-walk",
    description:
      "Dive deep into the history of George Town. Visit clan jetties, temples, and famous street art locations.",
    price: 200,
    duration: "3 Hours",
    image_url: "/images/GeorgeTownHeritageWalk.jpg",
    destination_id: "563610d9-4f47-460e-b294-295add8c5d54",
    inclusions: ["Walking Guide", "Heritage Snacks", "Map"],
    is_featured: false,
    itinerary: [
      {
        time: "08:30 AM",
        title: "Meeting Point",
        description: "Meet at Fort Cornwallis.",
      },
      {
        time: "09:00 AM",
        title: "Street Art Hunt",
        description: "Discover famous murals.",
      },
      {
        time: "10:30 AM",
        title: "Clan Jetties",
        description: "Walk the wooden piers.",
      },
      {
        time: "11:30 AM",
        title: "Khoo Kongsi",
        description: "Visit the grandest clan house.",
      },
    ],
  },
  {
    id: "7a18405a-1df4-4bb7-8c56-6771b0118c87",
    title: "Melaka Historical Full Day",
    slug: "melaka-history-full-day",
    description:
      "Explore the UNESCO World Heritage city of Melaka. Visit A Famosa, St. Paul's Hill, and enjoy a Nyonya launch.",
    price: 450,
    duration: "8 Hours",
    image_url: "/images/MelakaHistoricalFullDay.jpg",
    destination_id: "2d01e65e-a6a4-4153-9b79-1e03f11d0944",
    inclusions: ["Transport from KL", "Lunch", "Entrance Fees", "River Cruise"],
    is_featured: true,
    itinerary: [
      {
        time: "08:00 AM",
        title: "Depart KL",
        description: "2 hour scenic drive.",
      },
      {
        time: "10:30 AM",
        title: "Red Square",
        description: "Visit Christ Church and Stadthuys.",
      },
      {
        time: "12:30 PM",
        title: "Nyonya Lunch",
        description: "Authentic Peranakan cuisine.",
      },
      {
        time: "03:00 PM",
        title: "River Cruise",
        description: "Relaxing boat ride.",
      },
      {
        time: "05:00 PM",
        title: "Return",
        description: "Head back to Kuala Lumpur.",
      },
    ],
  },
  {
    id: "63b24921-7f9b-407f-9030-52cfe6018a73",
    title: "Cameron Highlands Nature Discovery",
    slug: "cameron-highlands-nature",
    description:
      "Breathe in the cool air of the highlands. Visit tea plantations, mossy forest, and strawberry farms.",
    price: 500,
    duration: "Full Day",
    image_url: "/images/CameronHighlandsNatureDiscovery.jpg",
    destination_id: "069b58c5-f4e0-43fe-a37c-c3272cf715a5",
    inclusions: ["Transport", "Tea Factory Tour", "Strawberry Picking"],
    is_featured: false,
    itinerary: [
      {
        time: "07:30 AM",
        title: "Depart KL",
        description: "3 hour drive up the hills.",
      },
      {
        time: "11:00 AM",
        title: "BOH Tea Plantation",
        description: "Tour and tea tasting with views.",
      },
      {
        time: "01:00 PM",
        title: "Mossy Forest",
        description: "Boardwalk through ancient forest.",
      },
      {
        time: "03:00 PM",
        title: "Strawberry Farm",
        description: "Pick your own strawberries.",
      },
    ],
  },
];
