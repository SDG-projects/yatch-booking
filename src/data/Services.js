export function getServices(params) {
  const Services = [
    {
      name: "Romantic Private Dinner",
      description:
        "the private Chef will alote to prepare foods for your party ",
      info: { Name: "Dote", rating: 4, price: 1000 },
      timing: 1,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Roses/Flower decorations",
      description:
        "Designer and planners will decurate our Yacht to your party",
      info: { Name: "Yacht Designers", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Private chef",
      description:
        "the private Chef will alote to prepare foods for your party ",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 3,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Yacht Catering",
      description:
        "the private catering will alote to prepare foods for your party ",
      info: { Name: "Yacht catering", rating: 4, price: 1000 },
      timing: 4,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Live BBQ with private chef",
      description:
        "the private Chef will alote to prepare foods for your party ",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 5,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Private Fishing",
      description: "Catch the Moment, Reel in the Experience ",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Luxury Video and Photoshoot",
      description: "Capture the Elegance, Relive the Moments. ",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Private Artist Singer",
      description: "A Personal Performance, Just for You",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Private Saxophone Artist",
      description: "Smooth Melodies, Tailored for You",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Private Dancers",
      description: "Feel the Rhythm, Embrace the Dance",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Private Bartender",
      description: "Crafted Cocktails, Just the Way You Like.",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Private Magician",
      description: "Magical Moments, Customized for You.",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Private Professional Massage Therapists",
      description: "Relaxation Delivered, Exclusively to You.",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Private Tour Guide",
      description: "Discover the Hidden Gems, Your Way.",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Private Hostesses",
      description: "Elegance and Grace, Tailored to You.",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Private Waiters",
      description: "Service Beyond Expectations, Just for You",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Professional Hospitality Crew",
      description: "Dedicated to Your Comfort and Style.",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Live Seafood BBQ and Private Chef",
      description: "Fresh Catch, Grilled to Perfection.",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Sushi Menus and a Private Chef",
      description: "Savor the Flavors, Experience the Craft",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Vegetarian Menus Crafted by a Private Chef",
      description: "Healthy, Fresh, and Full of Flavor",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Premium Alcoholic Drinks",
      description: "Sip in Style, Indulge in Luxury",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Exclusive Champagnes",
      description: "Celebrate with the Best, Toast with the Finest",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Open Bar",
      description: "Unlimited Cheers, Unforgettable Moments.",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Yacht Decorations",
      description: "Set the Scene, Sail in Style.",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Birthday Decorations",
      description: "Make Your Day Shine, Your Way",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "Proposal and Anniversary Decorations",
      description: "Create the Perfect Moment, Set the Perfect Stage.",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
    {
      name: "VIP Transport",
      description: "Arrive in Style, Travel with Prestige. ",
      info: { Name: "Yacht chef", rating: 4, price: 1000 },
      timing: 2,
      price: { rate: 3000, discountRate: 2000, type: "negosiable" },
    },
  ];
  return Services;
}
export function getProducts(id) {
  const Products = [
    {
      id: 1,
      name: "Seashell Luxury Yacht ",
      images: ["/img/yatch/luxury-yatch-dubai-1_4.webp", "/img/yatch/luxury-yatch-dubai-1_3.webp", "/img/yatch/lxuury-yatch-dubai-1_5.webp","/img/yatch/luxury-yatch-dubai-1_2.webp","/img/yatch/luxury-yatch-dubai-1_1.webp","/img/yatch/luxury-yatch-dubai-1_6.webp"
      ],
      price:"550",
      feet: "42ft ",
      capacity: "10 People",
    },
    {
      id: 2,
      name: "As Marine Luxury Yatch ",
      images: ["/img/yatch/P2/luxury-yatch-dubai-2_1.jpg", "/img/yatch/P2/luxury-yatch-dubai-2_2.jpg", "/img/yatch/P2/luxury-yatch-dubai-2_3.jpg","/img/yatch/P2/luxury-yatch-dubai-2_4.jpg","/img/yatch/P2/luxury-yatch-dubai-2_5.jpg","/img/yatch/P2/luxury-yatch-dubai-2_6.jpg","/img/yatch/P2/luxury-yatch-dubai-2_7.jpg","/img/yatch/P2/luxury-yatch-dubai-2_8.jpg","/img/yatch/P2/luxury-yatch-dubai-2_9.jpg","/img/yatch/P2/luxury-yatch-dubai-2_10.jpg"
      ],
      price:"850",
      feet: "50ft ",
      capacity: "15 People",
      Extras:"Water / SoftDrinks / Chips / Nuts"
    },
    {
      id: 3,
      name: "Trignity Luxury Yatch ",
      images: ["/img/yatch/P3/luxury-yatch-dubai-3_1.jpg", "/img/yatch/P3/luxury-yatch-dubai-3_2.jpg", "/img/yatch/P3/luxury-yatch-dubai-3_3.jpg","/img/yatch/P3/luxury-yatch-dubai-3_4.jpg","/img/yatch/P3/luxury-yatch-dubai-3_5.jpg","/img/yatch/P3/luxury-yatch-dubai-3_6.jpg","/img/yatch/P3/luxury-yatch-dubai-3_7.jpg"
      ],
      price:"4699",
      feet: "135ft ",
      capacity: "120 People",
    },
    {
      id: 4,
      name: "Rich Boss Luxury Yatch",
      images: ["/img/yatch/P4/luxury-yatch-dubai-4_1.jpg", "/img/yatch/P4/luxury-yatch-dubai-4_2.jpg", "/img/yatch/P4/luxury-yatch-dubai-4_3.jpg","/img/yatch/P4/luxury-yatch-dubai-4_4.jpg","/img/yatch/P4/luxury-yatch-dubai-4_5.jpg","/img/yatch/P4/luxury-yatch-dubai-4_6.jpg"
      ],
      price:"1799",
      feet: "90ft ",
      capacity: "55 People",
      Extras:"Water / SoftDrinks / Chips / Nuts"
    },  
    {
      id: 5,
      name: "Jetsky ",
      images: ["/img/yatch/P5/luxury-yatch-dubai-5_1.jpg", "/img/yatch/P5/luxury-yatch-dubai-5_2.jpg", "/img/yatch/P5/luxury-yatch-dubai-5_3.webp"
      ],
      price:"750",
      feet: "16ft ",
      capacity: "2 Person",
      Extras:"Water / SoftDrinks / Chips / Nuts"
    },
  
    {
      id: 6,
      name: "Jetcar ",
      images: ["/img/yatch/P6/Luxury-yatch-dubai-6_1.jpg", "/img/yatch/P6/Luxury-yatch-dubai-6_2.jpg"],
      price:"1550",
      feet: "20ft ",
      capacity: "3 People",
      Extras:"Water / SoftDrinks / Chips / Nuts"
    },
  
    {
      id: 3,
      name: "As Marine Luxury Yatch ",
      images: ["/img/yatch/Luxury-yatch-dubai-2_1.jpg", "/img/yatch/Luxury-yatch-dubai-2_2.jpg", "/img/yatch/Luxury-yatch-dubai-2_3.jpg","/img/yatch/Luxury-yatch-dubai-2_4.jpg","/img/yatch/Luxury-yatch-dubai-2_5.jpg","/img/yatch/Luxury-yatch-dubai-2_6.jpg"
      ],
      price:"850",
      feet: "50ft ",
      capacity: "20 People",
      Extras:"Water / SoftDrinks / Chips / Nuts"
    },
  
    {
      id: 3,
      name: "As Marine Luxury Yatch ",
      images: ["/img/yatch/Luxury-yatch-dubai-2_1.jpg", "/img/yatch/Luxury-yatch-dubai-2_2.jpg", "/img/yatch/Luxury-yatch-dubai-2_3.jpg","/img/yatch/Luxury-yatch-dubai-2_4.jpg","/img/yatch/Luxury-yatch-dubai-2_5.jpg","/img/yatch/Luxury-yatch-dubai-2_6.jpg"
      ],
      price:"850",
      feet: "50ft ",
      capacity: "20 People",
      Extras:"Water / SoftDrinks / Chips / Nuts"
    },
  
    {
      id: 3,
      name: "As Marine Luxury Yatch ",
      images: ["/img/yatch/Luxury-yatch-dubai-2_1.jpg", "/img/yatch/Luxury-yatch-dubai-2_2.jpg", "/img/yatch/Luxury-yatch-dubai-2_3.jpg","/img/yatch/Luxury-yatch-dubai-2_4.jpg","/img/yatch/Luxury-yatch-dubai-2_5.jpg","/img/yatch/Luxury-yatch-dubai-2_6.jpg"
      ],
      price:"850",
      feet: "50ft ",
      capacity: "20 People",
      Extras:"Water / SoftDrinks / Chips / Nuts"
    },
  
    {
      id: 3,
      name: "As Marine Luxury Yatch ",
      images: ["/img/yatch/Luxury-yatch-dubai-2_1.jpg", "/img/yatch/Luxury-yatch-dubai-2_2.jpg", "/img/yatch/Luxury-yatch-dubai-2_3.jpg","/img/yatch/Luxury-yatch-dubai-2_4.jpg","/img/yatch/Luxury-yatch-dubai-2_5.jpg","/img/yatch/Luxury-yatch-dubai-2_6.jpg"
      ],
      price:"850",
      feet: "50ft ",
      capacity: "20 People",
      Extras:"Water / SoftDrinks / Chips / Nuts"
    },
  
    {
      id: 3,
      name: "As Marine Luxury Yatch ",
      images: ["/img/yatch/Luxury-yatch-dubai-2_1.jpg", "/img/yatch/Luxury-yatch-dubai-2_2.jpg", "/img/yatch/Luxury-yatch-dubai-2_3.jpg","/img/yatch/Luxury-yatch-dubai-2_4.jpg","/img/yatch/Luxury-yatch-dubai-2_5.jpg","/img/yatch/Luxury-yatch-dubai-2_6.jpg"
      ],
      price:"850",
      feet: "50ft ",
      capacity: "20 People",
      Extras:"Water / SoftDrinks / Chips / Nuts"
    },
  
  
    
  ];
  const Data = !id ? Products : Products.filter((product) => product.id == id);
  return Data;
}
export function getPackages(id) {
  const Packages = [
    {
      id: 1,
      name: "Birthday Pack",
      imgs: "/img/yacht.png",
      description: `
            Birthday pack so enought to celebrate your Birthday its inculdes the
            followings :
            `,

      services: [getServices(1)[0], getServices(2)[0], getServices(3)[0]],
      //{
      //      name: "Private DJ",
      //       description: "the private DJ will alote to your birthday party ",
      //       info: { Name: "Ditto", rating: 3, price: 1000 },
      //       timing: 2,
      //       price: { rate: 3000, discountRate: 2000, type: "negosiable" },
      //     },
      //     {
      //       name: "Romantic Private Dinner",
      //       description:
      //         "the private Chef will alote to prepare foods for your party ",
      //       info: { Name: "Dote", rating: 4, price: 1000 },
      //       timing: 2,
      //       price: { rate: 3000, discountRate: 2000, type: "negosiable" },
      //     },
      //     {
      //       name: "Roses/Flower decorations",
      //       description:
      //         "Designer and planners will decurate our Yacht to your party",
      //       info: { Name: "Yacht Designers", rating: 4, price: 1000 },
      //       timing: 2,
      //       price: { rate: 3000, discountRate: 2000, type: "negosiable" },
      //     },
      //   ],
      price: { rate: 10000, discountRate: 9000, type: "negosiable" },
    },
  ];
  const Data = !id ? Packages : Packages.filter((pack) => pack.id == id);
  return Data;
}