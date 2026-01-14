import { IMAGES } from "./links";

// Helper to get multiple images (cycling if needed to get 5)
const getImages = (categoryImages: string[], startIndex: number) => {
    const selectedImages = [];
    for (let i = 0; i < 5; i++) {
        selectedImages.push(categoryImages[(startIndex + i) % categoryImages.length]);
    }
    return selectedImages;
};

export const PRODUCTS = [
    // MEN
    {
        id: 1,
        category: "MEN",
        title: "Classic Beige Knit Sweater",
        description: "Soft, premium knitted wool sweater perfect for winter layering.",
        price: "₹ 990.00",
        originalPrice: "₹ 1490.00",
        images: getImages(IMAGES.MEN, 0)
    },
    {
        id: 2,
        category: "MEN",
        title: "Urban Streetwear Hoodie",
        description: "Heavyweight cotton hoodie with a relaxed oversized fit.",
        price: "₹ 2450.00",
        originalPrice: "₹ 3100.00",
        images: getImages(IMAGES.MEN, 1)
    },
    {
        id: 3,
        category: "MEN",
        title: "Tailored Linen Shirt",
        description: "Breathable linen fabric for a sharp, casual summer look.",
        price: "₹ 1850.00",
        originalPrice: "₹ 2500.00",
        images: getImages(IMAGES.MEN, 2)
    },
    {
        id: 4,
        category: "MEN",
        title: "Vintage Denim Jacket",
        description: "Classic rugged denim jacket with a timeless washed finish.",
        price: "₹ 3200.00",
        originalPrice: "₹ 4500.00",
        images: getImages(IMAGES.MEN, 3)
    },
    {
        id: 5,
        category: "MEN",
        title: "Smart Casual Blazer",
        description: "Versatile blazer that transitions effortlessly from work to evening.",
        price: "₹ 5500.00",
        originalPrice: "₹ 7999.00",
        images: getImages(IMAGES.MEN, 4)
    },

    // WOMEN
    {
        id: 6,
        category: "WOMEN",
        title: "Elegant Silk Evening Dress",
        description: "Flowing silk dress designed for sophistication and grace.",
        price: "₹ 4200.00",
        originalPrice: "₹ 5600.00",
        images: getImages(IMAGES.WOMEN, 0)
    },
    {
        id: 7,
        category: "WOMEN",
        title: "Chic Summer Floral Top",
        description: "Lightweight and airy floral print top, perfect for sunny days.",
        price: "₹ 1150.00",
        originalPrice: "₹ 1800.00",
        images: getImages(IMAGES.WOMEN, 1)
    },
    {
        id: 8,
        category: "WOMEN",
        title: "High-Waist Wide Leg Trousers",
        description: "Comfortable and stylish wide-leg trousers for a modern silhouette.",
        price: "₹ 2100.00",
        originalPrice: "₹ 2990.00",
        images: getImages(IMAGES.WOMEN, 2)
    },
    {
        id: 9,
        category: "WOMEN",
        title: "Cozy Oversized Cardigan",
        description: "Warm and soft cardigan for those chilly office days or evenings.",
        price: "₹ 1650.00",
        originalPrice: "₹ 2200.00",
        images: getImages(IMAGES.WOMEN, 3)
    },
    {
        id: 10,
        category: "WOMEN",
        title: "Statement Leather Handbag",
        description: "A bold accessory to complete any outfit with elegance.",
        price: "₹ 3800.00",
        originalPrice: "₹ 5000.00",
        images: getImages(IMAGES.WOMEN, 4)
    },

    // KIDS
    {
        id: 11,
        category: "KIDS",
        title: "Playful Graphic T-Shirt",
        description: "Soft cotton tee with fun prints that kids will love.",
        price: "₹ 590.00",
        originalPrice: "₹ 899.00",
        images: getImages(IMAGES.KIDS, 0)
    },
    {
        id: 12,
        category: "KIDS",
        title: "Durable Denim Overalls",
        description: "Sturdy and cute overalls built for active playtime adventures.",
        price: "₹ 1450.00",
        originalPrice: "₹ 1999.00",
        images: getImages(IMAGES.KIDS, 1)
    },
    {
        id: 13,
        category: "KIDS",
        title: "Warm Puffer Jacket",
        description: "Insulated jacket to keep your little ones warm and cozy.",
        price: "₹ 2100.00",
        originalPrice: "₹ 2800.00",
        images: getImages(IMAGES.KIDS, 2)
    },
    {
        id: 14,
        category: "KIDS",
        title: "Summer Party Dress",
        description: "Beautiful dress for birthdays and special family gatherings.",
        price: "₹ 1850.00",
        originalPrice: "₹ 2400.00",
        images: getImages(IMAGES.KIDS, 3)
    },
    {
        id: 15,
        category: "KIDS",
        title: "Casual Sneakers",
        description: "Comfortable sneakers for running, jumping, and playing.",
        price: "₹ 1200.00",
        originalPrice: "₹ 1600.00",
        images: getImages(IMAGES.KIDS, 4)
    }
];
