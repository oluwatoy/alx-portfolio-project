const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/big-original-and-small-original.png",
    name: "500ml and 1,100ml Original Dishwashing Liquid",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 110000,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/big-original-big-passion-fruit.png",
    name: "1,100ml Original and Passion Fruit Dishwashing Liquid",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 140000,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/one-big-original.png",
    name: "1,100ml Original Dishwashing Liquid",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 69999,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/one-big-original-one-multipurpose-one-big-passion-fruit.png",
    name: "1,100ml Original Dishwashing Liquid, passion Fruit Dishwashing Liquid and Vanilla Multipurpose Wash",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 199998,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/multipurpose.png",
    name: "Vanilla Multipurpose Wash",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 60000,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/one-big-original-one-multipurpose-one-big-passion-fruit-one-toilet-cleaner.png",
    name: "2 Dishwash, 1 multipurpose wash and 1 toilet cleaner",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 268333,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/one-big-original-one-multipurpose-one-small-passion-fruit.png",
    name: "1,100ml and 500ml dishwash with multipurpose wash,",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 170000,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3499999,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 288999,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/one-carton-toilet-cleaner.png",
    name: "Carton of toilet cleaner",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 820000,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/one-litre-passion-fruit.png",
    name: "1,100ml Passion Fruit Dishwashing Liquid",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 69999,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/one-of-all-product.png",
    name: "Sidi soaps - All types and sizes",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 339999,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/one-original-one-passionfruit.png",
    name: "500ml Original and Passion fruit dishwash",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 80000,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4599999,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/one-original-one-passionfruit-one-toilet-cleaner.png",
    name: "500ml Original and Passion fruit dishwash and toilet cleaner",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 139999,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/one-small-original-one-multipurpose-one-small-passion-fruit-one-toilet-cleaner.png",
    name: "500ml Original and Passion fruit dishwash, toilet cleaner and vanilla multipurpose wash",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 199999,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/toilet-cleaner.png",
    name: "Toilet Cleaner",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 68333,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2374000,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/one-toilet-cleaner-big-passion-fruit.png",
    name: "Toilet Cleaner and 1,100ml passion fruit dishwash",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 138333,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/small-and-big-passion-fruit.png",
    name: "500ml and 1,100ml passion fruit Dishwash",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 109999,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/small-original-big-passion-fruit.png",
    name: "500ml Original and 1,100ml passion fruit Dishwash",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 109999,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/three-small-dishwash-two-toilet-cleaner.png",
    name: "Dishwah and toilet cleaner - 5 pieces",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 256666,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 5799999,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/two-big-original.png",
    name: "1,100ml Original Dishwashing Liquid - 2 pieces",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 139999,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/two-big-original-two-big-passion-fruit.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/two-litre-passion-fruit.png",
    name: "1,100ml Passion Fruit Dishwashing Liquid - 2 pieces",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 139999,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/two-litre-passion-fruit.png",
    name: "1,100ml Passion Fruit Dishwashing Liquid - 2 pieces",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 139999,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2110000,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/two-original.png",
    name: "500ml Original Dishwashing Liquid - 2 pieces",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 80000,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/two-original-one-passionfruit.png",
    name: "Original and passion Fruit Dishwash - 3 pieces",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 120000,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/two-toilet-clener.png",
    name: "Toilet Cleaners - 2 pieces",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 136666,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/one-carton-big.png",
    name: "Carton of 1,100ml Dishwash",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 840000,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3099000,
    keywords: [
      "bedroom",
      "home"
    ]
  }
];