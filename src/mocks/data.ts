import type { Product, Category } from "@/types/product";

// ===========================================
// Mock Categories (from DummyJSON API)
// ===========================================
export const mockCategories: Category[] = [
  {
    slug: "beauty",
    name: "Beauty",
    url: "https://dummyjson.com/products/category/beauty",
  },
  {
    slug: "fragrances",
    name: "Fragrances",
    url: "https://dummyjson.com/products/category/fragrances",
  },
  {
    slug: "furniture",
    name: "Furniture",
    url: "https://dummyjson.com/products/category/furniture",
  },
  {
    slug: "groceries",
    name: "Groceries",
    url: "https://dummyjson.com/products/category/groceries",
  },
  {
    slug: "home-decoration",
    name: "Home Decoration",
    url: "https://dummyjson.com/products/category/home-decoration",
  },
  {
    slug: "kitchen-accessories",
    name: "Kitchen Accessories",
    url: "https://dummyjson.com/products/category/kitchen-accessories",
  },
  {
    slug: "laptops",
    name: "Laptops",
    url: "https://dummyjson.com/products/category/laptops",
  },
  {
    slug: "mens-shirts",
    name: "Mens Shirts",
    url: "https://dummyjson.com/products/category/mens-shirts",
  },
  {
    slug: "mens-shoes",
    name: "Mens Shoes",
    url: "https://dummyjson.com/products/category/mens-shoes",
  },
  {
    slug: "mens-watches",
    name: "Mens Watches",
    url: "https://dummyjson.com/products/category/mens-watches",
  },
  {
    slug: "mobile-accessories",
    name: "Mobile Accessories",
    url: "https://dummyjson.com/products/category/mobile-accessories",
  },
  {
    slug: "motorcycle",
    name: "Motorcycle",
    url: "https://dummyjson.com/products/category/motorcycle",
  },
  {
    slug: "skin-care",
    name: "Skin Care",
    url: "https://dummyjson.com/products/category/skin-care",
  },
  {
    slug: "smartphones",
    name: "Smartphones",
    url: "https://dummyjson.com/products/category/smartphones",
  },
  {
    slug: "sports-accessories",
    name: "Sports Accessories",
    url: "https://dummyjson.com/products/category/sports-accessories",
  },
  {
    slug: "sunglasses",
    name: "Sunglasses",
    url: "https://dummyjson.com/products/category/sunglasses",
  },
  {
    slug: "tablets",
    name: "Tablets",
    url: "https://dummyjson.com/products/category/tablets",
  },
  {
    slug: "tops",
    name: "Tops",
    url: "https://dummyjson.com/products/category/tops",
  },
  {
    slug: "vehicle",
    name: "Vehicle",
    url: "https://dummyjson.com/products/category/vehicle",
  },
  {
    slug: "womens-bags",
    name: "Womens Bags",
    url: "https://dummyjson.com/products/category/womens-bags",
  },
  {
    slug: "womens-dresses",
    name: "Womens Dresses",
    url: "https://dummyjson.com/products/category/womens-dresses",
  },
  {
    slug: "womens-jewellery",
    name: "Womens Jewellery",
    url: "https://dummyjson.com/products/category/womens-jewellery",
  },
  {
    slug: "womens-shoes",
    name: "Womens Shoes",
    url: "https://dummyjson.com/products/category/womens-shoes",
  },
  {
    slug: "womens-watches",
    name: "Womens Watches",
    url: "https://dummyjson.com/products/category/womens-watches",
  },
];

// ===========================================
// Mock Products (from DummyJSON API)
// ===========================================
export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    price: 9.99,
    discountPercentage: 10.48,
    stock: 99,
    sku: "BEA-ESS-ESS-001",
    category: "beauty",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5784719087687",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    price: 19.99,
    discountPercentage: 18.19,
    stock: 34,
    sku: "BEA-GLA-EYE-002",
    category: "beauty",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9170275171413",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 3,
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    price: 14.99,
    discountPercentage: 9.84,
    stock: 89,
    sku: "BEA-VEL-POW-003",
    category: "beauty",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8418883906837",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 4,
    title: "Red Lipstick",
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    price: 12.99,
    discountPercentage: 12.16,
    stock: 91,
    sku: "BEA-CHI-LIP-004",
    category: "beauty",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9467746727219",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 5,
    title: "Red Nail Polish",
    description:
      "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    price: 8.99,
    discountPercentage: 11.44,
    stock: 79,
    sku: "BEA-NAI-NAI-005",
    category: "beauty",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "4063010628104",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    price: 49.99,
    discountPercentage: 1.89,
    stock: 29,
    sku: "FRA-CAL-CAL-006",
    category: "fragrances",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2451534060749",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    description:
      "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    price: 129.99,
    discountPercentage: 16.51,
    stock: 58,
    sku: "FRA-CHA-CHA-007",
    category: "fragrances",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "4091737746820",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 8,
    title: "Dior J'adore",
    description:
      "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    price: 89.99,
    discountPercentage: 14.72,
    stock: 98,
    sku: "FRA-DIO-DIO-008",
    category: "fragrances",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1445086097250",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 9,
    title: "Dolce Shine Eau de",
    description:
      "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    price: 69.99,
    discountPercentage: 0.62,
    stock: 4,
    sku: "FRA-DOL-DOL-009",
    category: "fragrances",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "3023868210708",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 10,
    title: "Gucci Bloom Eau de",
    description:
      "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    price: 79.99,
    discountPercentage: 14.39,
    stock: 91,
    sku: "FRA-GUC-GUC-010",
    category: "fragrances",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "3170832177880",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 11,
    title: "Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    price: 1899.99,
    discountPercentage: 8.57,
    stock: 88,
    sku: "FUR-ANN-ANN-011",
    category: "furniture",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "3610757456581",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 12,
    title: "Annibale Colombo Sofa",
    description:
      "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    price: 2499.99,
    discountPercentage: 14.4,
    stock: 60,
    sku: "FUR-ANN-ANN-012",
    category: "furniture",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1777662847736",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 13,
    title: "Bedside Table African Cherry",
    description:
      "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    price: 299.99,
    discountPercentage: 19.09,
    stock: 64,
    sku: "FUR-FUR-BED-013",
    category: "furniture",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "6441287925979",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 14,
    title: "Knoll Saarinen Executive Conference Chair",
    description:
      "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    price: 499.99,
    discountPercentage: 2.01,
    stock: 26,
    sku: "FUR-KNO-KNO-014",
    category: "furniture",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8919386859966",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 15,
    title: "Wooden Bathroom Sink With Mirror",
    description:
      "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    price: 799.99,
    discountPercentage: 8.8,
    stock: 7,
    sku: "FUR-BAT-WOO-015",
    category: "furniture",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1958104402873",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 16,
    title: "Apple",
    description:
      "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    price: 1.99,
    discountPercentage: 12.62,
    stock: 8,
    sku: "GRO-BRD-APP-016",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7962803553314",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 17,
    title: "Beef Steak",
    description:
      "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    price: 12.99,
    discountPercentage: 9.61,
    stock: 86,
    sku: "GRO-BRD-BEE-017",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5640063409695",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 18,
    title: "Cat Food",
    description:
      "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    price: 8.99,
    discountPercentage: 9.58,
    stock: 46,
    sku: "GRO-BRD-FOO-018",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1483991328610",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 19,
    title: "Chicken Meat",
    description:
      "Fresh and tender chicken meat, suitable for various culinary preparations.",
    price: 9.99,
    discountPercentage: 13.7,
    stock: 97,
    sku: "GRO-BRD-CHI-019",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
      "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8829514594521",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 20,
    title: "Cooking Oil",
    description:
      "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    price: 4.99,
    discountPercentage: 9.33,
    stock: 10,
    sku: "GRO-BRD-COO-020",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "4874727824518",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 21,
    title: "Cucumber",
    description:
      "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    price: 1.49,
    discountPercentage: 0.16,
    stock: 84,
    sku: "GRO-BRD-CUC-021",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5300066378225",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 22,
    title: "Dog Food",
    description:
      "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    price: 10.99,
    discountPercentage: 10.27,
    stock: 71,
    sku: "GRO-BRD-FOO-022",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5906686116469",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 23,
    title: "Eggs",
    description:
      "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
    price: 2.99,
    discountPercentage: 11.05,
    stock: 9,
    sku: "GRO-BRD-EGG-023",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp"],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "3478638588469",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 24,
    title: "Fish Steak",
    description:
      "Quality fish steak, suitable for grilling, baking, or pan-searing.",
    price: 14.99,
    discountPercentage: 4.23,
    stock: 74,
    sku: "GRO-BRD-FIS-024",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9595036192098",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 25,
    title: "Green Bell Pepper",
    description:
      "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
    price: 1.29,
    discountPercentage: 0.16,
    stock: 33,
    sku: "GRO-BRD-GRE-025",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2365227493323",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 26,
    title: "Green Chili Pepper",
    description:
      "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
    price: 0.99,
    discountPercentage: 1,
    stock: 3,
    sku: "GRO-BRD-GRE-026",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9335000538563",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 27,
    title: "Honey Jar",
    description:
      "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    price: 6.99,
    discountPercentage: 14.4,
    stock: 34,
    sku: "GRO-BRD-HON-027",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "6354306346329",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 28,
    title: "Ice Cream",
    description:
      "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    price: 5.49,
    discountPercentage: 8.69,
    stock: 27,
    sku: "GRO-BRD-CRE-028",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "0788954559076",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 29,
    title: "Juice",
    description:
      "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    price: 3.99,
    discountPercentage: 12.06,
    stock: 50,
    sku: "GRO-BRD-JUI-029",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "6936112580956",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 30,
    title: "Kiwi",
    description:
      "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    price: 2.49,
    discountPercentage: 15.22,
    stock: 99,
    sku: "GRO-BRD-KIW-030",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2530169917252",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 31,
    title: "Lemon",
    description:
      "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
    price: 0.79,
    discountPercentage: 9.7,
    stock: 31,
    sku: "GRO-BRD-LEM-031",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/lemon/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/lemon/1.webp"],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "4871812433378",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 32,
    title: "Milk",
    description:
      "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
    price: 3.49,
    discountPercentage: 13.74,
    stock: 27,
    sku: "GRO-BRD-MIL-032",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/milk/1.webp"],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9835034508303",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 33,
    title: "Mulberry",
    description:
      "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
    price: 4.99,
    discountPercentage: 12.87,
    stock: 99,
    sku: "GRO-BRD-MUL-033",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/mulberry/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/mulberry/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2206629068605",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 34,
    title: "Nescafe Coffee",
    description:
      "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
    price: 7.99,
    discountPercentage: 1.59,
    stock: 57,
    sku: "GRO-BRD-NES-034",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8572637994159",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 35,
    title: "Potatoes",
    description:
      "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
    price: 2.29,
    discountPercentage: 5.38,
    stock: 13,
    sku: "GRO-BRD-POT-035",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/potatoes/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/potatoes/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "3590399655074",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 36,
    title: "Protein Powder",
    description:
      "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
    price: 19.99,
    discountPercentage: 7.59,
    stock: 80,
    sku: "GRO-BRD-PRO-036",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/protein-powder/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/protein-powder/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "0435397154434",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 37,
    title: "Red Onions",
    description:
      "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
    price: 1.99,
    discountPercentage: 9.9,
    stock: 82,
    sku: "GRO-BRD-ONI-037",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/red-onions/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/red-onions/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "4716374115631",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 38,
    title: "Rice",
    description:
      "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
    price: 5.99,
    discountPercentage: 9.29,
    stock: 59,
    sku: "GRO-BRD-RIC-038",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/rice/1.webp"],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7339757397015",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 39,
    title: "Soft Drinks",
    description:
      "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
    price: 1.99,
    discountPercentage: 17.48,
    stock: 53,
    sku: "GRO-BRD-SOF-039",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2991169581178",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 40,
    title: "Strawberry",
    description:
      "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
    price: 3.99,
    discountPercentage: 1.12,
    stock: 46,
    sku: "GRO-BRD-STR-040",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/strawberry/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/strawberry/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "0792647462295",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 41,
    title: "Tissue Paper Box",
    description:
      "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
    price: 2.49,
    discountPercentage: 13.28,
    stock: 86,
    sku: "GRO-BRD-TIS-041",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/1.webp",
      "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/2.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9446468291745",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 42,
    title: "Water",
    description:
      "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
    price: 0.99,
    discountPercentage: 14.92,
    stock: 53,
    sku: "GRO-BRD-WAT-042",
    category: "groceries",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/water/1.webp"],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2409829645213",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 43,
    title: "Decoration Swing",
    description:
      "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
    price: 59.99,
    discountPercentage: 10.41,
    stock: 47,
    sku: "HOM-BRD-DEC-043",
    category: "home-decoration",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/1.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/2.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9646971048759",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 44,
    title: "Family Tree Photo Frame",
    description:
      "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
    price: 29.99,
    discountPercentage: 14.87,
    stock: 77,
    sku: "HOM-BRD-FAM-044",
    category: "home-decoration",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5398738320864",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 45,
    title: "House Showpiece Plant",
    description:
      "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
    price: 39.99,
    discountPercentage: 7.46,
    stock: 28,
    sku: "HOM-BRD-HOU-045",
    category: "home-decoration",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/1.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/2.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8433795204995",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 46,
    title: "Plant Pot",
    description:
      "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
    price: 14.99,
    discountPercentage: 6.84,
    stock: 59,
    sku: "HOM-BRD-PLA-046",
    category: "home-decoration",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/1.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/2.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/3.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8477070578398",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 47,
    title: "Table Lamp",
    description:
      "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
    price: 49.99,
    discountPercentage: 7.09,
    stock: 9,
    sku: "HOM-BRD-TAB-047",
    category: "home-decoration",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8806138916048",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 48,
    title: "Bamboo Spatula",
    description:
      "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
    price: 7.99,
    discountPercentage: 2.84,
    stock: 37,
    sku: "KIT-BRD-BAM-048",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "3988181417733",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 49,
    title: "Black Aluminium Cup",
    description:
      "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
    price: 5.99,
    discountPercentage: 15.65,
    stock: 75,
    sku: "KIT-BRD-BLA-049",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/2.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5606164195748",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 50,
    title: "Black Whisk",
    description:
      "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
    price: 9.99,
    discountPercentage: 10.24,
    stock: 73,
    sku: "KIT-BRD-BLA-050",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "3112495795209",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 51,
    title: "Boxed Blender",
    description:
      "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
    price: 39.99,
    discountPercentage: 7.26,
    stock: 9,
    sku: "KIT-BRD-BOX-051",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/2.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/3.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "4823087836817",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 52,
    title: "Carbon Steel Wok",
    description:
      "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
    price: 29.99,
    discountPercentage: 6.53,
    stock: 40,
    sku: "KIT-BRD-CAR-052",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1810862118199",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 53,
    title: "Chopping Board",
    description:
      "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
    price: 12.99,
    discountPercentage: 8.03,
    stock: 14,
    sku: "KIT-BRD-CHO-053",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "0085585730728",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 54,
    title: "Citrus Squeezer Yellow",
    description:
      "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
    price: 8.99,
    discountPercentage: 12.1,
    stock: 22,
    sku: "KIT-BRD-CIT-054",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2231952604189",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 55,
    title: "Egg Slicer",
    description:
      "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
    price: 6.99,
    discountPercentage: 14.76,
    stock: 40,
    sku: "KIT-BRD-SLI-055",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "6456249953517",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 56,
    title: "Electric Stove",
    description:
      "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
    price: 49.99,
    discountPercentage: 14.04,
    stock: 21,
    sku: "KIT-BRD-ELE-056",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/2.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/3.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7534096777716",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 57,
    title: "Fine Mesh Strainer",
    description:
      "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
    price: 9.99,
    discountPercentage: 3.5,
    stock: 85,
    sku: "KIT-BRD-FIN-057",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8181672477425",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 58,
    title: "Fork",
    description:
      "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
    price: 3.99,
    discountPercentage: 8.07,
    stock: 7,
    sku: "KIT-BRD-FOR-058",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2851192866410",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 59,
    title: "Glass",
    description:
      "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
    price: 4.99,
    discountPercentage: 7.92,
    stock: 46,
    sku: "KIT-BRD-GLA-059",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "4900880403720",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 60,
    title: "Grater Black",
    description:
      "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
    price: 10.99,
    discountPercentage: 3.56,
    stock: 84,
    sku: "KIT-BRD-GRA-060",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2542647841284",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 61,
    title: "Hand Blender",
    description:
      "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
    price: 34.99,
    discountPercentage: 17.02,
    stock: 84,
    sku: "KIT-BRD-HAN-061",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1980575898457",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 62,
    title: "Ice Cube Tray",
    description:
      "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
    price: 5.99,
    discountPercentage: 0.63,
    stock: 13,
    sku: "KIT-BRD-CUB-062",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9123541111825",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 63,
    title: "Kitchen Sieve",
    description:
      "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
    price: 7.99,
    discountPercentage: 18.91,
    stock: 68,
    sku: "KIT-BRD-KIT-063",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7119606190291",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 64,
    title: "Knife",
    description:
      "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
    price: 14.99,
    discountPercentage: 18.86,
    stock: 7,
    sku: "KIT-BRD-KNI-064",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2258278927819",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 65,
    title: "Lunch Box",
    description:
      "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
    price: 12.99,
    discountPercentage: 10.34,
    stock: 94,
    sku: "KIT-BRD-LUN-065",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "3287134465440",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 66,
    title: "Microwave Oven",
    description:
      "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
    price: 89.99,
    discountPercentage: 12.13,
    stock: 59,
    sku: "KIT-BRD-MIC-066",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/2.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/3.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7578271198951",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 67,
    title: "Mug Tree Stand",
    description:
      "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
    price: 15.99,
    discountPercentage: 9.25,
    stock: 88,
    sku: "KIT-BRD-TRE-067",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/1.webp",
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/2.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "4136081478055",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 68,
    title: "Pan",
    description:
      "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
    price: 24.99,
    discountPercentage: 3,
    stock: 90,
    sku: "KIT-BRD-PRD-068",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5159803862015",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 69,
    title: "Plate",
    description:
      "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
    price: 3.99,
    discountPercentage: 7.31,
    stock: 66,
    sku: "KIT-BRD-PLA-069",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8084753475328",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 70,
    title: "Red Tongs",
    description:
      "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
    price: 6.99,
    discountPercentage: 14.52,
    stock: 82,
    sku: "KIT-BRD-TON-070",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1919888449594",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 71,
    title: "Silver Pot With Glass Cap",
    description:
      "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
    price: 39.99,
    discountPercentage: 5.7,
    stock: 40,
    sku: "KIT-BRD-SIL-071",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9757232943842",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 72,
    title: "Slotted Turner",
    description:
      "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
    price: 8.99,
    discountPercentage: 13.35,
    stock: 88,
    sku: "KIT-BRD-SLO-072",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "4396291569672",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 73,
    title: "Spice Rack",
    description:
      "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
    price: 19.99,
    discountPercentage: 12.09,
    stock: 79,
    sku: "KIT-BRD-SPI-073",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "6149284465708",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 74,
    title: "Spoon",
    description:
      "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
    price: 4.99,
    discountPercentage: 1.53,
    stock: 59,
    sku: "KIT-BRD-SPO-074",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7769627934740",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 75,
    title: "Tray",
    description:
      "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
    price: 16.99,
    discountPercentage: 7.48,
    stock: 71,
    sku: "KIT-BRD-TRA-075",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5239514403214",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 76,
    title: "Wooden Rolling Pin",
    description:
      "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
    price: 11.99,
    discountPercentage: 9.75,
    stock: 80,
    sku: "KIT-BRD-WOO-076",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "6934305212813",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 77,
    title: "Yellow Peeler",
    description:
      "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
    price: 5.99,
    discountPercentage: 12.48,
    stock: 35,
    sku: "KIT-BRD-YEL-077",
    category: "kitchen-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8946155386929",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 78,
    title: "Apple MacBook Pro 14 Inch Space Grey",
    description:
      "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    price: 1999.99,
    discountPercentage: 4.69,
    stock: 24,
    sku: "LAP-APP-APP-078",
    category: "laptops",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5275211560367",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 79,
    title: "Asus Zenbook Pro Dual Screen Laptop",
    description:
      "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
    price: 1799.99,
    discountPercentage: 11.14,
    stock: 45,
    sku: "LAP-ASU-ASU-079",
    category: "laptops",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7392988535158",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 80,
    title: "Huawei Matebook X Pro",
    description:
      "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
    price: 1399.99,
    discountPercentage: 9.38,
    stock: 75,
    sku: "LAP-HUA-HUA-080",
    category: "laptops",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "0592296671061",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 81,
    title: "Lenovo Yoga 920",
    description:
      "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
    price: 1099.99,
    discountPercentage: 6.55,
    stock: 40,
    sku: "LAP-LEN-LEN-081",
    category: "laptops",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5506742916764",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 82,
    title: "New DELL XPS 13 9300 Laptop",
    description:
      "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
    price: 1499.99,
    discountPercentage: 11.89,
    stock: 74,
    sku: "LAP-DEL-DEL-082",
    category: "laptops",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/1.webp",
      "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/2.webp",
      "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5963805976904",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 83,
    title: "Blue & Black Check Shirt",
    description:
      "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    price: 29.99,
    discountPercentage: 15.35,
    stock: 38,
    sku: "MEN-FAS-BLU-083",
    category: "mens-shirts",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7148674604957",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 84,
    title: "Gigabyte Aorus Men Tshirt",
    description:
      "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
    price: 24.99,
    discountPercentage: 0.94,
    stock: 90,
    sku: "MEN-GIG-GIG-084",
    category: "mens-shirts",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1654388837068",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 85,
    title: "Man Plaid Shirt",
    description:
      "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
    price: 34.99,
    discountPercentage: 19.5,
    stock: 82,
    sku: "MEN-CLA-PLA-085",
    category: "mens-shirts",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2821496314023",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 86,
    title: "Man Short Sleeve Shirt",
    description:
      "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
    price: 19.99,
    discountPercentage: 6.83,
    stock: 2,
    sku: "MEN-CAS-SHO-086",
    category: "mens-shirts",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9995865660204",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 87,
    title: "Men Check Shirt",
    description:
      "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
    price: 27.99,
    discountPercentage: 11.38,
    stock: 95,
    sku: "MEN-URB-CHE-087",
    category: "mens-shirts",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9680331363394",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 88,
    title: "Nike Air Jordan 1 Red And Black",
    description:
      "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
    price: 149.99,
    discountPercentage: 4.12,
    stock: 7,
    sku: "MEN-NIK-NIK-088",
    category: "mens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7631625812393",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 89,
    title: "Nike Baseball Cleats",
    description:
      "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
    price: 79.99,
    discountPercentage: 18.04,
    stock: 12,
    sku: "MEN-NIK-NIK-089",
    category: "mens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2449851358796",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 90,
    title: "Puma Future Rider Trainers",
    description:
      "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
    price: 89.99,
    discountPercentage: 4.2,
    stock: 90,
    sku: "MEN-PUM-PUM-090",
    category: "mens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9715091831404",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 91,
    title: "Sports Sneakers Off White & Red",
    description:
      "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
    price: 119.99,
    discountPercentage: 4.97,
    stock: 17,
    sku: "MEN-OFF-SPO-091",
    category: "mens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "6740319943645",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 92,
    title: "Sports Sneakers Off White Red",
    description:
      "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
    price: 109.99,
    discountPercentage: 0.04,
    stock: 62,
    sku: "MEN-OFF-SPO-092",
    category: "mens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "0430266023617",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 93,
    title: "Brown Leather Belt Watch",
    description:
      "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
    price: 89.99,
    discountPercentage: 5.99,
    stock: 32,
    sku: "MEN-FAS-BRO-093",
    category: "mens-watches",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "4027206714862",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 94,
    title: "Longines Master Collection",
    description:
      "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
    price: 1499.99,
    discountPercentage: 17.24,
    stock: 100,
    sku: "MEN-LON-LON-094",
    category: "mens-watches",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5984080925625",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 95,
    title: "Rolex Cellini Date Black Dial",
    description:
      "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
    price: 8999.99,
    discountPercentage: 8.88,
    stock: 40,
    sku: "MEN-ROL-ROL-095",
    category: "mens-watches",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9663455783895",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 96,
    title: "Rolex Cellini Moonphase",
    description:
      "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
    price: 12999.99,
    discountPercentage: 17.52,
    stock: 36,
    sku: "MEN-ROL-ROL-096",
    category: "mens-watches",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1957304538726",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 97,
    title: "Rolex Datejust",
    description:
      "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
    price: 10999.99,
    discountPercentage: 3.73,
    stock: 86,
    sku: "MEN-ROL-ROL-097",
    category: "mens-watches",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8893788734644",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 98,
    title: "Rolex Submariner Watch",
    description:
      "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
    price: 13999.99,
    discountPercentage: 5.05,
    stock: 55,
    sku: "MEN-ROL-ROL-098",
    category: "mens-watches",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7133320173118",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 99,
    title: "Amazon Echo Plus",
    description:
      "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
    price: 99.99,
    discountPercentage: 12.07,
    stock: 61,
    sku: "MOB-AMA-AMA-099",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/2.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2256117192038",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 100,
    title: "Apple Airpods",
    description:
      "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
    price: 129.99,
    discountPercentage: 15.54,
    stock: 67,
    sku: "MOB-APP-APP-100",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1104115683955",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 101,
    title: "Apple AirPods Max Silver",
    description:
      "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
    price: 549.99,
    discountPercentage: 13.67,
    stock: 59,
    sku: "MOB-APP-APP-101",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "4062176053732",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 102,
    title: "Apple Airpower Wireless Charger",
    description:
      "The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
    price: 79.99,
    discountPercentage: 4.48,
    stock: 1,
    sku: "MOB-APP-APP-102",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "3323662242939",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 103,
    title: "Apple HomePod Mini Cosmic Grey",
    description:
      "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
    price: 99.99,
    discountPercentage: 18.1,
    stock: 27,
    sku: "MOB-APP-APP-103",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "6135642608024",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 104,
    title: "Apple iPhone Charger",
    description:
      "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
    price: 19.99,
    discountPercentage: 18.52,
    stock: 31,
    sku: "MOB-APP-APP-104",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/2.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "0879776541417",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 105,
    title: "Apple MagSafe Battery Pack",
    description:
      "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
    price: 99.99,
    discountPercentage: 17.17,
    stock: 1,
    sku: "MOB-APP-APP-105",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/2.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5157424897794",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 106,
    title: "Apple Watch Series 4 Gold",
    description:
      "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
    price: 349.99,
    discountPercentage: 12.02,
    stock: 33,
    sku: "MOB-APP-APP-106",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "3921248718888",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 107,
    title: "Beats Flex Wireless Earphones",
    description:
      "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
    price: 49.99,
    discountPercentage: 5.73,
    stock: 50,
    sku: "MOB-BEA-BEA-107",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1741271692174",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 108,
    title: "iPhone 12 Silicone Case with MagSafe Plum",
    description:
      "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
    price: 29.99,
    discountPercentage: 13.85,
    stock: 69,
    sku: "MOB-APP-IPH-108",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/3.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8156838251449",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 109,
    title: "Monopod",
    description:
      "The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.",
    price: 19.99,
    discountPercentage: 8.58,
    stock: 48,
    sku: "MOB-TEC-MON-109",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/2.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2915346477518",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 110,
    title: "Selfie Lamp with iPhone",
    description:
      "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
    price: 14.99,
    discountPercentage: 19.4,
    stock: 58,
    sku: "MOB-GAD-SEL-110",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "4372781189895",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 111,
    title: "Selfie Stick Monopod",
    description:
      "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
    price: 12.99,
    discountPercentage: 19.12,
    stock: 11,
    sku: "MOB-SNA-SEL-111",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7063982050226",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 112,
    title: "TV Studio Camera Pedestal",
    description:
      "The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.",
    price: 499.99,
    discountPercentage: 8.31,
    stock: 15,
    sku: "MOB-PRO-STU-112",
    category: "mobile-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1488782082307",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 113,
    title: "Generic Motorcycle",
    description:
      "The Generic Motorcycle is a versatile and reliable bike suitable for various riding preferences. With a balanced design, it provides a comfortable and efficient riding experience.",
    price: 3999.99,
    discountPercentage: 12.1,
    stock: 34,
    sku: "MOT-GEN-GEN-113",
    category: "motorcycle",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/1.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/2.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/3.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "2304118422941",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 114,
    title: "Kawasaki Z800",
    description:
      "The Kawasaki Z800 is a powerful and agile sportbike known for its striking design and performance. It's equipped with advanced features, making it a favorite among motorcycle enthusiasts.",
    price: 8999.99,
    discountPercentage: 9.77,
    stock: 52,
    sku: "MOT-KAW-KAW-114",
    category: "motorcycle",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/1.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/2.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/3.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "7320871299196",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 115,
    title: "MotoGP CI.H1",
    description:
      "The MotoGP CI.H1 is a high-performance motorcycle inspired by MotoGP racing technology. It offers cutting-edge features and precision engineering for an exhilarating riding experience.",
    price: 14999.99,
    discountPercentage: 6.92,
    stock: 10,
    sku: "MOT-MOT-MOT-115",
    category: "motorcycle",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/1.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/2.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/3.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "1635178066049",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 116,
    title: "Scooter Motorcycle",
    description:
      "The Scooter Motorcycle is a practical and fuel-efficient bike ideal for urban commuting. It features a step-through design and user-friendly controls for easy maneuverability.",
    price: 2999.99,
    discountPercentage: 6.27,
    stock: 84,
    sku: "MOT-SCO-SCO-116",
    category: "motorcycle",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/1.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/2.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/3.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "6595209798181",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 117,
    title: "Sportbike Motorcycle",
    description:
      "The Sportbike Motorcycle is designed for speed and agility, with a sleek and aerodynamic profile. It's suitable for riders looking for a dynamic and thrilling riding experience.",
    price: 7499.99,
    discountPercentage: 11.58,
    stock: 0,
    sku: "MOT-SPE-SPO-117",
    category: "motorcycle",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/1.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/2.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/3.webp",
      "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "8451323904420",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 118,
    title: "Attitude Super Leaves Hand Soap",
    description:
      "Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.",
    price: 8.99,
    discountPercentage: 18.49,
    stock: 94,
    sku: "SKI-ATT-ATT-118",
    category: "skin-care",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/1.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/2.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "3566048905322",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 119,
    title: "Olay Ultra Moisture Shea Butter Body Wash",
    description:
      "Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.",
    price: 12.99,
    discountPercentage: 16.39,
    stock: 34,
    sku: "SKI-OLA-OLA-119",
    category: "skin-care",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/1.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/2.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "6532659691643",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 120,
    title: "Vaseline Men Body and Face Lotion",
    description:
      "Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.",
    price: 9.99,
    discountPercentage: 13.39,
    stock: 95,
    sku: "SKI-VAS-VAS-120",
    category: "skin-care",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/1.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/2.webp",
      "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "8483207319090",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 121,
    title: "iPhone 5s",
    description:
      "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
    price: 199.99,
    discountPercentage: 12.91,
    stock: 25,
    sku: "SMA-APP-IPH-121",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "8814683940853",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 122,
    title: "iPhone 6",
    description:
      "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
    price: 299.99,
    discountPercentage: 6.69,
    stock: 60,
    sku: "SMA-APP-IPH-122",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "9922357685013",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 123,
    title: "iPhone 13 Pro",
    description:
      "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
    price: 1099.99,
    discountPercentage: 9.37,
    stock: 56,
    sku: "SMA-APP-IPH-123",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "4998438802308",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 124,
    title: "iPhone X",
    description:
      "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
    price: 899.99,
    discountPercentage: 19.59,
    stock: 37,
    sku: "SMA-APP-IPH-124",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "3034949322264",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 125,
    title: "Oppo A57",
    description:
      "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
    price: 249.99,
    discountPercentage: 2.43,
    stock: 19,
    sku: "SMA-OPP-OPP-125",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "0651223722522",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 126,
    title: "Oppo F19 Pro Plus",
    description:
      "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
    price: 399.99,
    discountPercentage: 18.64,
    stock: 78,
    sku: "SMA-OPP-OPP-126",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "8576893968169",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 127,
    title: "Oppo K1",
    description:
      "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
    price: 299.99,
    discountPercentage: 18.29,
    stock: 55,
    sku: "SMA-OPP-OPP-127",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/3.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "3106827888743",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 128,
    title: "Realme C35",
    description:
      "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
    price: 149.99,
    discountPercentage: 15.3,
    stock: 48,
    sku: "SMA-REA-REA-128",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "7825844344364",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 129,
    title: "Realme X",
    description:
      "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
    price: 299.99,
    discountPercentage: 6.95,
    stock: 12,
    sku: "SMA-REA-REA-129",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/realme-x/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-x/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-x/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "4948452391831",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 130,
    title: "Realme XT",
    description:
      "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
    price: 349.99,
    discountPercentage: 11.51,
    stock: 80,
    sku: "SMA-REA-REA-130",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "6151817227632",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 131,
    title: "Samsung Galaxy S7",
    description:
      "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
    price: 299.99,
    discountPercentage: 19.55,
    stock: 67,
    sku: "SMA-SAM-SAM-131",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "7557912146622",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 132,
    title: "Samsung Galaxy S8",
    description:
      "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
    price: 499.99,
    discountPercentage: 19.45,
    stock: 0,
    sku: "SMA-SAM-SAM-132",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "5995499013336",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 133,
    title: "Samsung Galaxy S10",
    description:
      "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
    price: 699.99,
    discountPercentage: 5.59,
    stock: 19,
    sku: "SMA-SAM-SAM-133",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "4676898229465",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 134,
    title: "Vivo S1",
    description:
      "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
    price: 249.99,
    discountPercentage: 10.17,
    stock: 50,
    sku: "SMA-VIV-VIV-134",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "8575699153333",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 135,
    title: "Vivo V9",
    description:
      "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.",
    price: 299.99,
    discountPercentage: 17.67,
    stock: 82,
    sku: "SMA-VIV-VIV-135",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "4295398764784",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 136,
    title: "Vivo X21",
    description:
      "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.",
    price: 499.99,
    discountPercentage: 17.41,
    stock: 7,
    sku: "SMA-VIV-VIV-136",
    category: "smartphones",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "9944308291810",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 137,
    title: "American Football",
    description:
      "The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.",
    price: 19.99,
    discountPercentage: 4.93,
    stock: 53,
    sku: "SPO-BRD-AME-137",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/american-football/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/american-football/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "0984311727547",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 138,
    title: "Baseball Ball",
    description:
      "The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.",
    price: 8.99,
    discountPercentage: 1.71,
    stock: 100,
    sku: "SPO-BRD-BAS-138",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "8981184448425",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 139,
    title: "Baseball Glove",
    description:
      "The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.",
    price: 24.99,
    discountPercentage: 2.9,
    stock: 22,
    sku: "SPO-BRD-BAS-139",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/1.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/2.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "1607433635330",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 140,
    title: "Basketball",
    description:
      "The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.",
    price: 14.99,
    discountPercentage: 7.44,
    stock: 75,
    sku: "SPO-BRD-BAS-140",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "3219724919696",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 141,
    title: "Basketball Rim",
    description:
      "The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.",
    price: 39.99,
    discountPercentage: 7.74,
    stock: 43,
    sku: "SPO-BRD-BAS-141",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "6916173283925",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 142,
    title: "Cricket Ball",
    description:
      "The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.",
    price: 12.99,
    discountPercentage: 8.63,
    stock: 30,
    sku: "SPO-BRD-CRI-142",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "0027512125380",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 143,
    title: "Cricket Bat",
    description:
      "The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.",
    price: 29.99,
    discountPercentage: 3.29,
    stock: 98,
    sku: "SPO-BRD-CRI-143",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "1225217575490",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 144,
    title: "Cricket Helmet",
    description:
      "The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.",
    price: 44.99,
    discountPercentage: 9.64,
    stock: 10,
    sku: "SPO-BRD-CRI-144",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/1.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/2.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/3.webp",
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "2192738034162",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 145,
    title: "Cricket Wicket",
    description:
      "The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.",
    price: 29.99,
    discountPercentage: 16.93,
    stock: 25,
    sku: "SPO-BRD-CRI-145",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "9514466946651",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 146,
    title: "Feather Shuttlecock",
    description:
      "The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.",
    price: 5.99,
    discountPercentage: 2.95,
    stock: 95,
    sku: "SPO-BRD-FEA-146",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "5360325610488",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 147,
    title: "Football",
    description:
      "The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.",
    price: 17.99,
    discountPercentage: 5.15,
    stock: 96,
    sku: "SPO-BRD-FOO-147",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/football/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/football/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "7605305555987",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 148,
    title: "Golf Ball",
    description:
      "The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.",
    price: 9.99,
    discountPercentage: 17.37,
    stock: 84,
    sku: "SPO-BRD-GOL-148",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "6940117186155",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 149,
    title: "Iron Golf",
    description:
      "The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.",
    price: 49.99,
    discountPercentage: 6.53,
    stock: 90,
    sku: "SPO-BRD-IRO-149",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "4196059523236",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 150,
    title: "Metal Baseball Bat",
    description:
      "The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.",
    price: 29.99,
    discountPercentage: 19.51,
    stock: 16,
    sku: "SPO-BRD-MET-150",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "7296388268295",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 151,
    title: "Tennis Ball",
    description:
      "The Tennis Ball is a standard ball used in the sport of tennis. It is designed for bouncing and hitting with tennis rackets during matches or practice sessions.",
    price: 6.99,
    discountPercentage: 11.76,
    stock: 28,
    sku: "SPO-BRD-TEN-151",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "2793132647969",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 152,
    title: "Tennis Racket",
    description:
      "The Tennis Racket is an essential piece of equipment used in the sport of tennis. It features a frame with strings and a grip, allowing players to hit the tennis ball.",
    price: 49.99,
    discountPercentage: 19.61,
    stock: 6,
    sku: "SPO-BRD-TEN-152",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-racket/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-racket/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "5611498376196",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 153,
    title: "Volleyball",
    description:
      "The Volleyball is a standard ball used in the sport of volleyball. It is designed for passing, setting, and spiking over the net during volleyball matches.",
    price: 11.99,
    discountPercentage: 12.25,
    stock: 0,
    sku: "SPO-BRD-VOL-153",
    category: "sports-accessories",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/1.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "6348576170594",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 154,
    title: "Black Sun Glasses",
    description:
      "The Black Sun Glasses are a classic and stylish choice, featuring a sleek black frame and tinted lenses. They provide both UV protection and a fashionable look.",
    price: 29.99,
    discountPercentage: 4.94,
    stock: 60,
    sku: "SUN-FAS-BLA-154",
    category: "sunglasses",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/1.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/2.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "1045032983803",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 155,
    title: "Classic Sun Glasses",
    description:
      "The Classic Sun Glasses offer a timeless design with a neutral frame and UV-protected lenses. These sunglasses are versatile and suitable for various occasions.",
    price: 24.99,
    discountPercentage: 4.94,
    stock: 1,
    sku: "SUN-FAS-CLA-155",
    category: "sunglasses",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/1.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/2.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "5771263118885",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 156,
    title: "Green and Black Glasses",
    description:
      "The Green and Black Glasses feature a bold combination of green and black colors, adding a touch of vibrancy to your eyewear collection. They are both stylish and eye-catching.",
    price: 34.99,
    discountPercentage: 1.01,
    stock: 24,
    sku: "SUN-FAS-GRE-156",
    category: "sunglasses",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/1.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/2.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "0635466237296",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 157,
    title: "Party Glasses",
    description:
      "The Party Glasses are designed to add flair to your party outfit. With unique shapes or colorful frames, they're perfect for adding a playful touch to your look during celebrations.",
    price: 19.99,
    discountPercentage: 11.22,
    stock: 86,
    sku: "SUN-FAS-PAR-157",
    category: "sunglasses",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/1.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/2.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "8806276971112",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 158,
    title: "Sunglasses",
    description:
      "The Sunglasses offer a classic and simple design with a focus on functionality. These sunglasses provide essential UV protection while maintaining a timeless look.",
    price: 22.99,
    discountPercentage: 1.51,
    stock: 27,
    sku: "SUN-FAS-SUN-158",
    category: "sunglasses",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/1.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/2.webp",
      "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "8850931201716",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 159,
    title: "iPad Mini 2021 Starlight",
    description:
      "The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.",
    price: 499.99,
    discountPercentage: 3.64,
    stock: 47,
    sku: "TAB-APP-IPA-159",
    category: "tablets",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "6267995330420",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 160,
    title: "Samsung Galaxy Tab S8 Plus Grey",
    description:
      "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
    price: 599.99,
    discountPercentage: 13.31,
    stock: 62,
    sku: "TAB-SAM-SAM-160",
    category: "tablets",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "5021907981204",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 161,
    title: "Samsung Galaxy Tab White",
    description:
      "The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.",
    price: 349.99,
    discountPercentage: 18.2,
    stock: 92,
    sku: "TAB-SAM-SAM-161",
    category: "tablets",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "3477850755498",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 162,
    title: "Blue Frock",
    description:
      "The Blue Frock is a charming and stylish dress for various occasions. With a vibrant blue color and a comfortable design, it adds a touch of elegance to your wardrobe.",
    price: 29.99,
    discountPercentage: 12.13,
    stock: 52,
    sku: "TOP-BRD-BLU-162",
    category: "tops",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tops/blue-frock/1.webp",
      "https://cdn.dummyjson.com/product-images/tops/blue-frock/2.webp",
      "https://cdn.dummyjson.com/product-images/tops/blue-frock/3.webp",
      "https://cdn.dummyjson.com/product-images/tops/blue-frock/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "6410441827139",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 163,
    title: "Girl Summer Dress",
    description:
      "The Girl Summer Dress is a cute and breezy dress designed for warm weather. With playful patterns and lightweight fabric, it's perfect for keeping cool and stylish during the summer.",
    price: 19.99,
    discountPercentage: 19.2,
    stock: 43,
    sku: "TOP-BRD-GIR-163",
    category: "tops",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/1.webp",
      "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/2.webp",
      "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/3.webp",
      "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "6273976484433",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 164,
    title: "Gray Dress",
    description:
      "The Gray Dress is a versatile and chic option for various occasions. With a neutral gray color, it can be dressed up or down, making it a wardrobe staple for any fashion-forward individual.",
    price: 34.99,
    discountPercentage: 14.28,
    stock: 55,
    sku: "TOP-BRD-GRA-164",
    category: "tops",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/tops/gray-dress/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tops/gray-dress/1.webp",
      "https://cdn.dummyjson.com/product-images/tops/gray-dress/2.webp",
      "https://cdn.dummyjson.com/product-images/tops/gray-dress/3.webp",
      "https://cdn.dummyjson.com/product-images/tops/gray-dress/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "5201099489825",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 165,
    title: "Short Frock",
    description:
      "The Short Frock is a playful and trendy dress with a shorter length. Ideal for casual outings or special occasions, it combines style and comfort for a fashionable look.",
    price: 24.99,
    discountPercentage: 13.45,
    stock: 22,
    sku: "TOP-BRD-SHO-165",
    category: "tops",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/tops/short-frock/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tops/short-frock/1.webp",
      "https://cdn.dummyjson.com/product-images/tops/short-frock/2.webp",
      "https://cdn.dummyjson.com/product-images/tops/short-frock/3.webp",
      "https://cdn.dummyjson.com/product-images/tops/short-frock/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "2022014761829",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 166,
    title: "Tartan Dress",
    description:
      "The Tartan Dress features a classic tartan pattern, bringing a timeless and sophisticated touch to your wardrobe. Perfect for fall and winter, it adds a hint of traditional charm.",
    price: 39.99,
    discountPercentage: 12.95,
    stock: 73,
    sku: "TOP-BRD-TAR-166",
    category: "tops",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/tops/tartan-dress/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tops/tartan-dress/1.webp",
      "https://cdn.dummyjson.com/product-images/tops/tartan-dress/2.webp",
      "https://cdn.dummyjson.com/product-images/tops/tartan-dress/3.webp",
      "https://cdn.dummyjson.com/product-images/tops/tartan-dress/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "3383823083995",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 167,
    title: "300 Touring",
    description:
      "The 300 Touring is a stylish and comfortable sedan, known for its luxurious features and smooth performance.",
    price: 28999.99,
    discountPercentage: 3.98,
    stock: 54,
    sku: "VEH-CHR-TOU-167",
    category: "vehicle",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/vehicle/300-touring/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/vehicle/300-touring/1.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/300-touring/2.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/300-touring/3.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/300-touring/4.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/300-touring/5.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/300-touring/6.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "6337799339397",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 168,
    title: "Charger SXT RWD",
    description:
      "The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.",
    price: 32999.99,
    discountPercentage: 8.23,
    stock: 57,
    sku: "VEH-DOD-CHA-168",
    category: "vehicle",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/1.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/2.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/3.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/4.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/5.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/6.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "0376498933302",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 169,
    title: "Dodge Hornet GT Plus",
    description:
      "The Dodge Hornet GT Plus is a compact and agile hatchback, perfect for urban driving with a touch of sportiness.",
    price: 24999.99,
    discountPercentage: 2.63,
    stock: 82,
    sku: "VEH-DOD-DOD-169",
    category: "vehicle",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/1.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/2.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/3.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/4.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/5.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/6.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "8578515136594",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 170,
    title: "Durango SXT RWD",
    description:
      "The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.",
    price: 36999.99,
    discountPercentage: 16.44,
    stock: 95,
    sku: "VEH-DOD-DUR-170",
    category: "vehicle",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/1.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/2.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/3.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/4.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/5.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/6.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "7539220768239",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 171,
    title: "Pacifica Touring",
    description:
      "The Pacifica Touring is a stylish and well-equipped minivan, offering comfort and convenience for family journeys.",
    price: 31999.99,
    discountPercentage: 14.76,
    stock: 53,
    sku: "VEH-CHR-PAC-171",
    category: "vehicle",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/1.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/2.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/3.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/4.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/5.webp",
      "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/6.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "2500742117107",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 172,
    title: "Blue Women's Handbag",
    description:
      "The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.",
    price: 49.99,
    discountPercentage: 17.88,
    stock: 76,
    sku: "WOM-FAS-BLU-172",
    category: "womens-bags",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "0558998280008",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 173,
    title: "Heshe Women's Leather Bag",
    description:
      "The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.",
    price: 129.99,
    discountPercentage: 3.87,
    stock: 99,
    sku: "WOM-HES-HES-173",
    category: "womens-bags",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "4616258239513",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 174,
    title: "Prada Women Bag",
    description:
      "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
    price: 599.99,
    discountPercentage: 14.09,
    stock: 75,
    sku: "WOM-PRA-PRA-174",
    category: "womens-bags",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "9614237439330",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 175,
    title: "White Faux Leather Backpack",
    description:
      "The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.",
    price: 39.99,
    discountPercentage: 15.2,
    stock: 39,
    sku: "WOM-URB-WHI-175",
    category: "womens-bags",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "8983558170212",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 176,
    title: "Women Handbag Black",
    description:
      "The Women Handbag in Black is a classic and versatile accessory that complements various outfits. With a timeless black color and functional design, it's a must-have in every woman's wardrobe.",
    price: 59.99,
    discountPercentage: 11.63,
    stock: 11,
    sku: "WOM-ELE-WOM-176",
    category: "womens-bags",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "4283648448769",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 177,
    title: "Black Women's Gown",
    description:
      "The Black Women's Gown is an elegant and timeless evening gown. With a sleek black design, it's perfect for formal events and special occasions, exuding sophistication and style.",
    price: 129.99,
    discountPercentage: 10.48,
    stock: 25,
    sku: "WOM-BRD-BLA-177",
    category: "womens-dresses",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "0630346013554",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 178,
    title: "Corset Leather With Skirt",
    description:
      "The Corset Leather With Skirt is a bold and edgy ensemble that combines a stylish corset with a matching skirt. Ideal for fashion-forward individuals, it makes a statement at any event.",
    price: 89.99,
    discountPercentage: 16.26,
    stock: 30,
    sku: "WOM-BRD-COR-178",
    category: "womens-dresses",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "2931500162745",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 179,
    title: "Corset With Black Skirt",
    description:
      "The Corset With Black Skirt is a chic and versatile outfit that pairs a fashionable corset with a classic black skirt. It offers a trendy and coordinated look for various occasions.",
    price: 79.99,
    discountPercentage: 15.06,
    stock: 33,
    sku: "WOM-BRD-COR-179",
    category: "womens-dresses",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "9336695899390",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 180,
    title: "Dress Pea",
    description:
      "The Dress Pea is a stylish and comfortable dress with a pea pattern. Perfect for casual outings, it adds a playful and fun element to your wardrobe, making it a great choice for day-to-day wear.",
    price: 49.99,
    discountPercentage: 17.68,
    stock: 6,
    sku: "WOM-BRD-DRE-180",
    category: "womens-dresses",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "8142375980193",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 181,
    title: "Marni Red & Black Suit",
    description:
      "The Marni Red & Black Suit is a sophisticated and fashion-forward suit ensemble. With a combination of red and black tones, it showcases a modern design for a bold and confident look.",
    price: 179.99,
    discountPercentage: 19.02,
    stock: 62,
    sku: "WOM-BRD-MAR-181",
    category: "womens-dresses",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "7479689140965",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 182,
    title: "Green Crystal Earring",
    description:
      "The Green Crystal Earring is a dazzling accessory that features a vibrant green crystal. With a classic design, it adds a touch of elegance to your ensemble, perfect for formal or special occasions.",
    price: 29.99,
    discountPercentage: 15.24,
    stock: 54,
    sku: "WOM-BRD-GRE-182",
    category: "womens-jewellery",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "1680580323411",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 183,
    title: "Green Oval Earring",
    description:
      "The Green Oval Earring is a stylish and versatile accessory with a unique oval shape. Whether for casual or dressy occasions, its green hue and contemporary design make it a standout piece.",
    price: 24.99,
    discountPercentage: 15.18,
    stock: 73,
    sku: "WOM-BRD-GRE-183",
    category: "womens-jewellery",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "4782555577213",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 184,
    title: "Tropical Earring",
    description:
      "The Tropical Earring is a fun and playful accessory inspired by tropical elements. Featuring vibrant colors and a lively design, it's perfect for adding a touch of summer to your look.",
    price: 19.99,
    discountPercentage: 0.76,
    stock: 1,
    sku: "WOM-BRD-TRO-184",
    category: "womens-jewellery",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "7759380216135",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 185,
    title: "Black & Brown Slipper",
    description:
      "The Black & Brown Slipper is a comfortable and stylish choice for casual wear. Featuring a blend of black and brown colors, it adds a touch of sophistication to your relaxation.",
    price: 19.99,
    discountPercentage: 3.33,
    stock: 3,
    sku: "WOM-COM-BLA-185",
    category: "womens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "5732146194724",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 186,
    title: "Calvin Klein Heel Shoes",
    description:
      "Calvin Klein Heel Shoes are elegant and sophisticated, designed for formal occasions. With a classic design and high-quality materials, they complement your stylish ensemble.",
    price: 79.99,
    discountPercentage: 3.19,
    stock: 93,
    sku: "WOM-CAL-CAL-186",
    category: "womens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "0196443645959",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 187,
    title: "Golden Shoes Woman",
    description:
      "The Golden Shoes for Women are a glamorous choice for special occasions. Featuring a golden hue and stylish design, they add a touch of luxury to your outfit.",
    price: 49.99,
    discountPercentage: 13.93,
    stock: 88,
    sku: "WOM-FAS-GOL-187",
    category: "womens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "0365072601388",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 188,
    title: "Pampi Shoes",
    description:
      "Pampi Shoes offer a blend of comfort and style for everyday use. With a versatile design, they are suitable for various casual occasions, providing a trendy and relaxed look.",
    price: 29.99,
    discountPercentage: 14.14,
    stock: 49,
    sku: "WOM-PAM-PAM-188",
    category: "womens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "9686058230535",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 189,
    title: "Red Shoes",
    description:
      "The Red Shoes make a bold statement with their vibrant red color. Whether for a party or a casual outing, these shoes add a pop of color and style to your wardrobe.",
    price: 34.99,
    discountPercentage: 17.69,
    stock: 7,
    sku: "WOM-FAS-SHO-189",
    category: "womens-shoes",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/4.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "5817762883655",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 190,
    title: "IWC Ingenieur Automatic Steel",
    description:
      "The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.",
    price: 4999.99,
    discountPercentage: 9.45,
    stock: 90,
    sku: "WOM-IWC-ING-190",
    category: "womens-watches",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "7438522857639",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 191,
    title: "Rolex Cellini Moonphase",
    description:
      "The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.",
    price: 15999.99,
    discountPercentage: 4.11,
    stock: 52,
    sku: "WOM-ROL-ROL-191",
    category: "womens-watches",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "4608359670564",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 192,
    title: "Rolex Datejust Women",
    description:
      "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
    price: 10999.99,
    discountPercentage: 15.94,
    stock: 4,
    sku: "WOM-ROL-ROL-192",
    category: "womens-watches",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "1265605585958",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 193,
    title: "Watch Gold for Women",
    description:
      "The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
    price: 799.99,
    discountPercentage: 18.34,
    stock: 0,
    sku: "WOM-FAS-WAT-193",
    category: "womens-watches",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "8333241081413",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
  {
    id: 194,
    title: "Women's Wrist Watch",
    description:
      "The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.",
    price: 129.99,
    discountPercentage: 12.6,
    stock: 12,
    sku: "WOM-FAS-WOM-194",
    category: "womens-watches",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/3.webp",
    ],
    meta: {
      createdAt: "2025-04-30T09:41:02.054Z",
      updatedAt: "2025-04-30T09:41:02.054Z",
      barcode: "2093537854573",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
  },
];

// ===========================================
// In-memory database for mutations
// ===========================================
let productsDb = [...mockProducts];
let nextId = Math.max(...mockProducts.map((p) => p.id)) + 1;

export const db = {
  products: {
    getAll: () => [...productsDb],
    getById: (id: number) => productsDb.find((p) => p.id === id),
    create: (data: Omit<Product, "id" | "meta" | "images" | "thumbnail">) => {
      const newProduct: Product = {
        ...data,
        id: nextId++,
        thumbnail: `https://cdn.dummyjson.com/products/images/${data.category}/thumbnail.png`,
        images: [
          `https://cdn.dummyjson.com/products/images/${data.category}/1.png`,
        ],
        meta: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      };
      productsDb.push(newProduct);
      return newProduct;
    },
    update: (id: number, data: Partial<Product>) => {
      const index = productsDb.findIndex((p) => p.id === id);
      if (index === -1) return null;
      productsDb[index] = {
        ...productsDb[index],
        ...data,
        meta: {
          ...productsDb[index].meta,
          updatedAt: new Date().toISOString(),
        },
      };
      return productsDb[index];
    },
    delete: (id: number) => {
      const product = productsDb.find((p) => p.id === id);
      if (!product) return null;
      productsDb = productsDb.filter((p) => p.id !== id);
      return product;
    },
    search: (query: string) => {
      const q = query.toLowerCase();
      return productsDb.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q),
      );
    },
    getByCategory: (category: string) =>
      productsDb.filter((p) => p.category === category),
    reset: () => {
      productsDb = [...mockProducts];
      nextId = Math.max(...mockProducts.map((p) => p.id)) + 1;
    },
  },
  categories: {
    getAll: () => [...mockCategories],
  },
};
