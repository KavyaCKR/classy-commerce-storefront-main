import { Product } from "@/types/product";

// Currency conversion rate (approx. 1 USD = 75 INR)
export const USD_TO_INR = 75;

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    description: "A comfortable and versatile white t-shirt made from 100% organic cotton. Perfect for casual everyday wear.",
    price: 1875, // ₹1,875 (was $24.99)
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "men",
    tags: ["tshirt", "casual", "cotton"],
    rating: 4.5,
    stock: 50,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    featured: true,
  },
  {
    id: "2",
    name: "Slim Fit Denim Jeans",
    description: "Modern slim fit jeans with a comfortable stretch. Made with premium denim for durability and style.",
    price: 4499, // ₹4,499 (was $59.99)
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "men",
    tags: ["jeans", "denim", "slim fit"],
    rating: 4.8,
    stock: 35,
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black", "Gray"],
    bestSeller: true,
  },
  {
    id: "3",
    name: "Summer Floral Dress",
    description: "Lightweight floral dress perfect for summer. Features a flattering A-line silhouette and adjustable straps.",
    price: 5999, // ₹5,999 (was $79.99)
    salePrice: 4499, // ₹4,499 (was $59.99)
    images: [
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "women",
    tags: ["dress", "summer", "floral"],
    rating: 4.7,
    stock: 20,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue", "Pink"],
    featured: true,
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    description: "Stylish and functional crossbody bag made from genuine leather. Features multiple compartments and adjustable strap.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df41a097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "accessories",
    tags: ["bag", "leather", "accessories"],
    rating: 4.9,
    stock: 15,
    colors: ["Brown", "Black", "Tan"],
    bestSeller: true,
  },
  {
    id: "5",
    name: "Striped Button-Up Shirt",
    description: "Classic striped button-up shirt perfect for casual or semi-formal occasions. Made from breathable cotton blend.",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "men",
    tags: ["shirt", "button-up", "striped"],
    rating: 4.3,
    stock: 40,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue/White", "Black/White"],
    newArrival: true,
  },
  {
    id: "6",
    name: "High Waist Yoga Leggings",
    description: "Comfortable high waist leggings perfect for yoga or everyday wear. Features four-way stretch fabric and hidden pocket.",
    price: 54.99,
    salePrice: 44.99,
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "women",
    tags: ["leggings", "activewear", "yoga"],
    rating: 4.6,
    stock: 30,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray"],
    featured: true,
  },
  {
    id: "7",
    name: "Minimalist Watch",
    description: "Elegant minimalist watch with genuine leather strap. Features Japanese movement and water resistance up to 30 meters.",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "accessories",
    tags: ["watch", "accessories", "minimalist"],
    rating: 4.4,
    stock: 25,
    colors: ["Black/Brown", "Silver/Black"],
    newArrival: true,
  },
  {
    id: "8",
    name: "Oversized Knit Sweater",
    description: "Cozy oversized knit sweater for cooler weather. Made from soft cotton-wool blend for comfort and warmth.",
    price: 64.99,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "women",
    tags: ["sweater", "knit", "winter"],
    rating: 4.7,
    stock: 18,
    sizes: ["S", "M", "L"],
    colors: ["Beige", "Gray", "Burgundy"],
    bestSeller: true,
  },
  {
    id: "9",
    name: "Wireless Bluetooth Earbuds",
    description: "High-quality wireless earbuds with noise cancellation and long battery life. Includes charging case and multiple ear tip sizes.",
    price: 129.99,
    salePrice: 99.99,
    images: [
      "https://images.unsplash.com/photo-1606741965429-02e23a7352b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "accessories",
    tags: ["earbuds", "wireless", "electronics", "audio"],
    rating: 4.6,
    stock: 45,
    colors: ["Black", "White", "Blue"],
    bestSeller: true,
  },
  {
    id: "10",
    name: "Premium Leather Wallet",
    description: "Handcrafted genuine leather wallet with multiple card slots, bill compartments and RFID blocking technology.",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581344947731-b02031b5a653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "accessories",
    tags: ["wallet", "leather", "accessories"],
    rating: 4.7,
    stock: 30,
    colors: ["Brown", "Black", "Tan"],
  },
  {
    id: "11",
    name: "Smart Fitness Tracker",
    description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and smartphone notifications. Water resistant up to 50m.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1510017683484-182d120e1343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "accessories",
    tags: ["fitness", "electronics", "smartwatch"],
    rating: 4.5,
    stock: 25,
    colors: ["Black", "Blue", "Pink"],
    newArrival: true,
  },
  {
    id: "12",
    name: "Casual Linen Button-Down",
    description: "Relaxed fit linen button-down shirt, perfect for warm weather. Features breathable fabric and a modern silhouette.",
    price: 45.99,
    images: [
      "https://images.unsplash.com/photo-1602810316693-3667c854239a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "men",
    tags: ["shirt", "linen", "casual", "summer"],
    rating: 4.3,
    stock: 40,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Beige"],
  },
  {
    id: "13",
    name: "Professional Makeup Brush Set",
    description: "Complete set of 12 professional makeup brushes with synthetic bristles. Includes storage case and cleaning solution.",
    price: 39.99,
    salePrice: 29.99,
    images: [
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599063403647-900a404a19d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "accessories",
    tags: ["makeup", "beauty", "brushes"],
    rating: 4.8,
    stock: 20,
    featured: true,
  },
  {
    id: "14",
    name: "Designer Sunglasses",
    description: "Stylish polarized sunglasses with UV protection. Features durable metal frame and comes with protective case.",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "accessories",
    tags: ["sunglasses", "eyewear", "summer"],
    rating: 4.5,
    stock: 15,
    colors: ["Black", "Brown", "Blue"],
  },
  {
    id: "15",
    name: "Cozy Knit Cardigan",
    description: "Soft, medium-weight knit cardigan with button closure and side pockets. Perfect for layering in cooler weather.",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "women",
    tags: ["cardigan", "knitwear", "layering"],
    rating: 4.6,
    stock: 25,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Gray", "Navy"],
    bestSeller: true,
  },
  {
    id: "16",
    name: "Lightweight Running Shoes",
    description: "Ultra-lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for comfort and performance.",
    price: 95.99,
    salePrice: 79.99,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ],
    category: "accessories",
    tags: ["shoes", "running", "athletic"],
    rating: 4.7,
    stock: 30,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black/White", "Blue/Gray", "Red/Black"],
    featured: true,
  },
  {
    id: "17",
    name: "4K Smart LED TV",
    description: "Ultra HD 4K Smart TV with built-in streaming apps and voice control. Features stunning picture quality and immersive sound.",
    price: 42999,
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069533cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "electronics",
    tags: ["tv", "4k", "smart tv", "electronics"],
    rating: 4.6,
    stock: 15,
    colors: ["Black"],
    featured: true
  },
  {
    id: "18",
    name: "High-Performance Gaming Laptop",
    description: "Powerful gaming laptop with dedicated graphics, high-refresh display, and RGB keyboard. Perfect for gaming and content creation.",
    price: 89999,
    salePrice: 79999,
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "electronics",
    tags: ["laptop", "gaming", "computer", "electronics"],
    rating: 4.8,
    stock: 10,
    bestSeller: true
  },
  {
    id: "19",
    name: "Smart Wi-Fi Speaker",
    description: "Voice-controlled smart speaker with premium sound quality and smart home integration. Stream music, control devices, and more.",
    price: 6999,
    salePrice: 5499,
    images: [
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "electronics",
    tags: ["speaker", "smart home", "audio", "electronics"],
    rating: 4.4,
    stock: 25,
    colors: ["Black", "White", "Gray"],
    newArrival: true
  },
  {
    id: "20",
    name: "DSLR Camera with Lens Kit",
    description: "Professional DSLR camera with multiple lenses, high resolution sensor, and 4K video recording capabilities.",
    price: 54999,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "electronics",
    tags: ["camera", "photography", "dslr", "electronics"],
    rating: 4.9,
    stock: 8,
    bestSeller: true
  },
  {
    id: "21",
    name: "Stainless Steel Cookware Set",
    description: "Premium 10-piece stainless steel cookware set including pots, pans, and lids. Dishwasher safe and suitable for all cooking surfaces.",
    price: 8499,
    salePrice: 6999,
    images: [
      "https://images.unsplash.com/photo-1584947897558-4e06f5077e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069533cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "home_kitchen",
    tags: ["cookware", "kitchen", "cooking", "home"],
    rating: 4.7,
    stock: 20,
    featured: true
  },
  {
    id: "22",
    name: "Automatic Coffee Maker",
    description: "Programmable coffee maker with built-in grinder, timer, and multiple brewing options. Makes up to 12 cups of coffee.",
    price: 7499,
    images: [
      "https://images.unsplash.com/photo-1520178040362-1b823273c9f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521302200778-33500795e128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "home_kitchen",
    tags: ["coffee", "appliance", "kitchen", "home"],
    rating: 4.5,
    stock: 15,
    colors: ["Black", "Silver", "White"],
    bestSeller: true
  },
  {
    id: "23",
    name: "Memory Foam Mattress",
    description: "Queen size memory foam mattress that adapts to your body shape for superior comfort. Includes cooling gel and hypoallergenic cover.",
    price: 24999,
    salePrice: 19999,
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "home_kitchen",
    tags: ["mattress", "bedroom", "furniture", "home"],
    rating: 4.8,
    stock: 10,
    sizes: ["Twin", "Full", "Queen", "King"],
    newArrival: true
  },
  {
    id: "24",
    name: "Air Purifier with HEPA Filter",
    description: "Advanced air purifier with true HEPA filter that removes 99.97% of allergens, dust, and pollutants. Features quiet operation and air quality sensor.",
    price: 9999,
    images: [
      "https://images.unsplash.com/photo-1585771273272-6ab0f1128422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585771273459-7d8f86d23a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "home_kitchen",
    tags: ["appliance", "air purifier", "home", "health"],
    rating: 4.6,
    stock: 18,
    colors: ["White", "Gray"],
    featured: true
  },
  {
    id: "25",
    name: "Formal Business Suit",
    description: "Classic tailored business suit with modern fit. Includes jacket and trousers made from premium wool blend fabric.",
    price: 14999,
    images: [
      "https://images.unsplash.com/photo-1617137968427-85924c800b22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "men",
    tags: ["suit", "formal", "business", "clothing"],
    rating: 4.7,
    stock: 12,
    sizes: ["38", "40", "42", "44", "46"],
    colors: ["Navy", "Black", "Gray"],
    featured: true
  },
  {
    id: "26",
    name: "Athletic Running Shoes",
    description: "Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for performance and comfort.",
    price: 6499,
    salePrice: 5499,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "men",
    tags: ["shoes", "running", "athletic", "footwear"],
    rating: 4.5,
    stock: 25,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black/White", "Blue/Gray", "Red/Black"],
    bestSeller: true
  },
  {
    id: "27",
    name: "Designer Handbag",
    description: "Elegant designer handbag with spacious interior, multiple compartments, and adjustable shoulder strap. Made from premium vegan leather.",
    price: 7999,
    images: [
      "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df41a097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "women",
    tags: ["bag", "handbag", "accessories", "designer"],
    rating: 4.8,
    stock: 15,
    colors: ["Black", "Brown", "Red"],
    featured: true
  },
  {
    id: "28",
    name: "Casual Maxi Dress",
    description: "Comfortable and stylish maxi dress for casual occasions. Features soft, flowing fabric and adjustable waist tie.",
    price: 3999,
    salePrice: 2999,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "women",
    tags: ["dress", "maxi", "casual", "clothing"],
    rating: 4.6,
    stock: 18,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue", "Green", "Black"],
    newArrival: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestSellerProducts = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getNewArrivalProducts = (): Product[] => {
  return products.filter(product => product.newArrival);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: string, limit = 4): Product[] => {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];
  
  return products
    .filter(product => 
      product.id !== productId && 
      (product.category === currentProduct.category || 
        product.tags.some(tag => currentProduct.tags.includes(tag)))
    )
    .slice(0, limit);
};

export const getProductsOnSale = (): Product[] => {
  return products.filter(product => product.salePrice !== undefined);
};

export const formatPriceINR = (price: number): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};
