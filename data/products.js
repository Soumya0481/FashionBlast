const products = [

    // =========================
    // MEN
    // =========================

    {
        name: "Men's T-Shirt",
        brand: "Nike",
        price: 799,
        originalPrice: 999,
        discount: 20,
        rating: 4.5,
        reviews: 124,
        category: "Men",
        image: "/images/t-shirts.webp",
        description: "Premium cotton men's t-shirt.",
        stock: 20,
        featured: true
    },

    {
        name: "Men's Shirt",
        brand: "Roadster",
        price: 999,
        originalPrice: 1699,
        discount: 41,
        rating: 4.3,
        reviews: 98,
        category: "Men",
        image: "/images/mens-shirt.webp",
        description: "Comfortable and stylish casual shirt for men.",
        stock: 25
    },

    {
        name: "Men's Jeans",
        brand: "Levi's",
        price: 1299,
        originalPrice: 1999,
        discount: 35,
        rating: 4.3,
        reviews: 156,
        category: "Men",
        image: "/images/mens-jeans.webp",
        description: "Classic fit denim jeans for everyday wear.",
        stock: 22
    },

    {
        name: "Men's Hoodie",
        brand: "Puma",
        price: 1499,
        originalPrice: 2299,
        discount: 35,
        rating: 4.4,
        reviews: 112,
        category: "Men",
        image: "/images/mens-hoodie.webp",
        description: "Warm and comfortable hoodie for casual wear.",
        stock: 18
    },

    {
        name: "Men's Cargo Pants",
        brand: "Highlander",
        price: 1399,
        originalPrice: 2199,
        discount: 36,
        rating: 4.2,
        reviews: 87,
        category: "Men",
        image: "/images/mens-cargo.webp",
        description: "Stylish cargo pants with a comfortable fit.",
        stock: 20
    },


    // =========================
    // WOMEN
    // =========================

    {
        name: "Women's Dress",
        brand: "Zara",
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        rating: 4.7,
        reviews: 186,
        category: "Women",
        image: "/images/dress.webp",
        description: "Beautiful women's dress for casual and party wear.",
        stock: 15,
        featured: true
    },

    {
        name: "Women's Jeans",
        brand: "Roadster",
        price: 1199,
        originalPrice: 1699,
        discount: 29,
        rating: 4.3,
        reviews: 140,
        category: "Women",
        image: "/images/womens-jeans.webp",
        description: "Comfortable denim jeans designed for everyday fashion.",
        stock: 20
    },

    {
        name: "Women's Kurti",
        brand: "Biba",
        price: 899,
        originalPrice: 1499,
        discount: 40,
        rating: 4.4,
        reviews: 115,
        category: "Women",
        image: "/images/womens-kurti.webp",
        description: "Elegant printed kurti suitable for everyday wear.",
        stock: 24
    },

    {
        name: "Women's Maxi Dress",
        brand: "Mango",
        price: 1699,
        originalPrice: 2499,
        discount: 32,
        rating: 4.5,
        reviews: 132,
        category: "Women",
        image: "/images/womens-macys.webp",
        description: "Elegant maxi dress with a modern stylish design.",
        stock: 16
    },

    {
        name: "Women's Top",
        brand: "H&M",
        price: 799,
        originalPrice: 1299,
        discount: 38,
        rating: 4.4,
        reviews: 108,
        category: "Women",
        image: "/images/womens-top.webp",
        description: "Trendy women's top perfect for casual outfits.",
        stock: 28
    },


    // =========================
    // SHOES
    // =========================

    {
        name: "Running Shoes",
        brand: "Nike",
        price: 2499,
        originalPrice: 3499,
        discount: 29,
        rating: 4.8,
        reviews: 325,
        category: "Shoes",
        image: "/images/shoes.webp",
        description: "Comfortable running shoes designed for sports and everyday activities.",
        stock: 25,
        featured: true
    },

    {
        name: "Crocs",
        brand: "Crocs",
        price: 999,
        originalPrice: 1599,
        discount: 38,
        rating: 4.4,
        reviews: 145,
        category: "Shoes",
        image: "/images/crocs.webp",
        description: "Lightweight and comfortable casual footwear.",
        stock: 30
    },

    {
        name: "Ladies Sneakers",
        brand: "Puma",
        price: 1799,
        originalPrice: 2899,
        discount: 38,
        rating: 4.5,
        reviews: 180,
        category: "Shoes",
        image: "/images/ladies-sneakers.webp",
        description: "Stylish sneakers designed for comfortable everyday wear.",
        stock: 22
    },

    {
        name: "Men's Sandals",
        brand: "Bata",
        price: 899,
        originalPrice: 1399,
        discount: 36,
        rating: 4.2,
        reviews: 95,
        category: "Shoes",
        image: "/images/mens-sandals.webp",
        description: "Comfortable men's sandals for casual everyday use.",
        stock: 25
    },

    {
        name: "Women's Sandals",
        brand: "Metro",
        price: 799,
        originalPrice: 1299,
        discount: 38,
        rating: 4.3,
        reviews: 120,
        category: "Shoes",
        image: "/images/sandals-womens.webp",
        description: "Stylish women's sandals for casual and outdoor wear.",
        stock: 27
    },


    // =========================
    // JEWELLERY
    // =========================

    {
        name: "Gold Necklace",
        brand: "Tanishq",
        price: 3999,
        originalPrice: 4999,
        discount: 20,
        rating: 4.6,
        reviews: 95,
        category: "Jewellery",
        image: "/images/necklace.webp",
        description: "Elegant gold necklace for a sophisticated look.",
        stock: 10,
        featured: true
    },

    {
        name: "Gold Bangles",
        brand: "Mia",
        price: 2999,
        originalPrice: 4499,
        discount: 33,
        rating: 4.5,
        reviews: 120,
        category: "Jewellery",
        image: "/images/bangles.webp",
        description: "Beautiful traditional-style bangles for special occasions.",
        stock: 14
    },

    {
        name: "Diamond Necklace",
        brand: "Mia",
        price: 4999,
        originalPrice: 6999,
        discount: 29,
        rating: 4.7,
        reviews: 110,
        category: "Jewellery",
        image: "/images/daimond-necklace.webp",
        description: "Elegant statement necklace with a premium design.",
        stock: 8
    },

    {
        name: "Designer Bangles",
        brand: "Sukkhi",
        price: 2499,
        originalPrice: 3999,
        discount: 38,
        rating: 4.4,
        reviews: 92,
        category: "Jewellery",
        image: "/images/design-bangles.webp",
        description: "Designer bangles that add elegance to traditional outfits.",
        stock: 16
    },

    {
        name: "Traditional Earrings",
        brand: "Sukkhi",
        price: 1499,
        originalPrice: 2499,
        discount: 40,
        rating: 4.5,
        reviews: 135,
        category: "Jewellery",
        image: "/images/traditional%20earing.webp",
        description: "Traditional earrings with an elegant ethnic design.",
        stock: 20
    },


    // =========================
    // WATCHES
    // =========================

    {
        name: "Smart Watch",
        brand: "Noise",
        price: 2999,
        originalPrice: 3999,
        discount: 25,
        rating: 4.5,
        reviews: 210,
        category: "Watch",
        image: "/images/watch.webp",
        description: "Feature-rich smart watch for fitness and everyday use.",
        stock: 18,
        featured: true
    },

    {
        name: "Women's Smart Watch",
        brand: "Noise",
        price: 2499,
        originalPrice: 3999,
        discount: 38,
        rating: 4.4,
        reviews: 190,
        category: "Watch",
        image: "/images/noisefit-ladies.webp",
        description: "Stylish smart watch designed for women.",
        stock: 20
    },

    {
        name: "Noise Smart Watch",
        brand: "Noise",
        price: 2799,
        originalPrice: 4499,
        discount: 38,
        rating: 4.5,
        reviews: 175,
        category: "Watch",
        image: "/images/noise-smartwatch.webp",
        description: "Modern smartwatch with smart features and fitness tracking.",
        stock: 17
    },

    {
        name: "Sonata Women's Watch",
        brand: "Sonata",
        price: 1999,
        originalPrice: 3199,
        discount: 38,
        rating: 4.4,
        reviews: 160,
        category: "Watch",
        image: "/images/sonata-womenswatch.webp",
        description: "Elegant women's watch suitable for everyday fashion.",
        stock: 15
    },

    {
        name: "Swadeshi Men's Watch",
        brand: "Swadeshi",
        price: 2499,
        originalPrice: 3999,
        discount: 38,
        rating: 4.5,
        reviews: 145,
        category: "Watch",
        image: "/images/swadeshi-menswatch.webp",
        description: "Classic men's watch with a stylish premium appearance.",
        stock: 14
    },


    // =========================
    // BAGS
    // =========================

    {
        name: "Hand Bag",
        brand: "Lavie",
        price: 1799,
        originalPrice: 2299,
        discount: 22,
        rating: 4.4,
        reviews: 132,
        category: "Bag",
        image: "/images/bag.webp",
        description: "Stylish handbag suitable for everyday use.",
        stock: 30,
        featured: true
    },

    {
        name: "Women's Hand Bag",
        brand: "Lavie",
        price: 1999,
        originalPrice: 3299,
        discount: 39,
        rating: 4.5,
        reviews: 130,
        category: "Bag",
        image: "/images/hand-bag.webp",
        description: "Elegant handbag with a stylish modern design.",
        stock: 18
    },

    {
        name: "Men's Bag",
        brand: "Wildcraft",
        price: 1499,
        originalPrice: 2499,
        discount: 40,
        rating: 4.4,
        reviews: 105,
        category: "Bag",
        image: "/images/mens-bag.webp",
        description: "Practical and stylish bag designed for men.",
        stock: 20
    },

    {
        name: "Tourist Backpack",
        brand: "Wildcraft",
        price: 1899,
        originalPrice: 2999,
        discount: 37,
        rating: 4.5,
        reviews: 120,
        category: "Bag",
        image: "/images/tourist-bag.webp",
        description: "Spacious backpack suitable for travel and outdoor use.",
        stock: 15
    },

    {
        name: "Travel Bag",
        brand: "American Tourister",
        price: 2199,
        originalPrice: 3499,
        discount: 37,
        rating: 4.6,
        reviews: 140,
        category: "Bag",
        image: "/images/travel-bag.webp",
        description: "Spacious travel bag designed for convenient trips.",
        stock: 16
    },


    // =========================
    // ACCESSORIES
    // =========================

    {
        name: "Sports Cap",
        brand: "Puma",
        price: 499,
        originalPrice: 699,
        discount: 29,
        rating: 4.3,
        reviews: 88,
        category: "Accessories",
        image: "/images/cap.webp",
        description: "Comfortable sports cap for casual and outdoor activities.",
        stock: 40,
        featured: true
    },

    {
        name: "Sunglasses",
        brand: "Ray-Ban",
        price: 999,
        originalPrice: 1499,
        discount: 33,
        rating: 4.7,
        reviews: 245,
        category: "Accessories",
        image: "/images/sunglasses.webp",
        description: "Stylish sunglasses for a fashionable everyday look.",
        stock: 35,
        featured: true
    },

    {
        name: "Stylish Sunglasses",
        brand: "Fastrack",
        price: 799,
        originalPrice: 1299,
        discount: 38,
        rating: 4.5,
        reviews: 150,
        category: "Accessories",
        image: "/images/stylish-sunglasses.webp",
        description: "Trendy sunglasses with a modern stylish frame.",
        stock: 25
    },

    {
        name: "UV Protection Sunglasses",
        brand: "Fastrack",
        price: 899,
        originalPrice: 1399,
        discount: 36,
        rating: 4.4,
        reviews: 135,
        category: "Accessories",
        image: "/images/uv-sunglasses.webp",
        description: "Stylish sunglasses designed for everyday UV protection.",
        stock: 28
    },

    {
        name: "Leather Wallet",
        brand: "WildHorn",
        price: 699,
        originalPrice: 1199,
        discount: 42,
        rating: 4.4,
        reviews: 100,
        category: "Accessories",
        image: "/images/wallet.webp",
        description: "Compact and stylish wallet for everyday use.",
        stock: 30
    }

];

module.exports = products;