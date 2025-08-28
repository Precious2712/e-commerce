interface Product {
    id: number
    name: string
    price: number
    originalPrice?: number
    rating: number
    reviews: number
    image: string
    badge?: string
    isNew?: boolean
    quantity: number
}

export const bakery: Product[] = [
    {
        id: 193,
        name: "Wireless Headphones",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.8,
        reviews: 124,
        image: "https://www.supermart.ng/cdn/shop/files/sparxyz744.jpg?v=1688721730&width=320",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 194,
        name: "Smart Fitness Watch",
        price: 299.99,
        rating: 4.6,
        reviews: 89,
        image: "https://www.supermart.ng/cdn/shop/files/SPARNW310.jpg?v=1688721753&width=300",
        isNew: true,
        quantity: 1
    },
    {
        id: 195,
        name: "Minimalist Backpack",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.9,
        reviews: 156,
        image: "https://www.supermart.ng/cdn/shop/files/12copy.jpg?v=1690629572&width=460",
        badge: "Popular",
        quantity: 1
    },
    {
        id: 196,
        name: "Wireless Charging Pad",
        price: 49.99,
        rating: 4.4,
        reviews: 67,
        image: "https://www.supermart.ng/cdn/shop/files/sprnw1298..jpg?v=1689022681&width=320",
        quantity: 1
    },
    {
        id: 197,
        name: "Bluetooth Speaker",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.7,
        reviews: 203,
        image: "https://www.supermart.ng/cdn/shop/files/SPRSI100068.jpg?v=1688722975&width=239",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 198,
        name: "USB-C Hub",
        price: 89.99,
        rating: 4.5,
        reviews: 45,
        image: "https://www.supermart.ng/cdn/shop/files/rxpspy675.png?v=1689101670&width=233",
        isNew: true,
        quantity: 1
    },
    {
        id: 199,
        name: "Ergonomic Mouse Pad",
        price: 24.99,
        rating: 4.3,
        reviews: 78,
        image: "https://www.supermart.ng/cdn/shop/files/OkeA311.jpg?v=1756131892&width=460",
        quantity: 1
    },
    {
        id: 200,
        name: "Portable Power Bank",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        reviews: 134,
        image: "https://justriteonline.com/wp-content/uploads/2025/03/Checkers-3-in-1-Custard-400g.png",
        badge: "Sale",
        quantity: 1
    },
]