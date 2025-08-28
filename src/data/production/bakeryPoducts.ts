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

export const bakeryProducts: Product[] = [
    {
        id: 201,
        name: "Wireless Headphones",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.8,
        reviews: 124,
        image: "https://www.supermart.ng/cdn/shop/files/brcn32.jpg?v=1689900185&width=320",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 202,
        name: "Smart Fitness Watch",
        price: 299.99,
        rating: 4.6,
        reviews: 89,
        image: "https://www.supermart.ng/cdn/shop/files/brcn32.jpg?v=1689900185&width=320",
        isNew: true,
        quantity: 1
    },
    {
        id: 203,
        name: "Minimalist Backpack",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.9,
        reviews: 156,
        image: "https://www.supermart.ng/cdn/shop/files/rspwxyz38.jpg?v=1689904271&width=320",
        badge: "Popular",
        quantity: 1
    },
    {
        id: 204,
        name: "Wireless Charging Pad",
        price: 49.99,
        rating: 4.4,
        reviews: 67,
        image: "https://www.supermart.ng/cdn/shop/files/brcn13.jpg?v=1696927828&width=460",
        quantity: 1
    },
    {
        id: 205,
        name: "Bluetooth Speaker",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.7,
        reviews: 203,
        image: "https://www.supermart.ng/cdn/shop/files/spwxyz875_7d2fa5b2-c9c2-48ef-a0db-e3953ccf6029.jpg?v=1756132063&width=460",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 206,
        name: "USB-C Hub",
        price: 89.99,
        rating: 4.5,
        reviews: 45,
        image: "https://www.supermart.ng/cdn/shop/products/Apples-Green-x10-Supermart-ng-7755.jpg?v=1690960206&width=309",
        isNew: true,
        quantity: 1
    },
    {
        id: 207,
        name: "Ergonomic Mouse Pad",
        price: 24.99,
        rating: 4.3,
        reviews: 78,
        image: "https://www.supermart.ng/cdn/shop/files/spcsct1956_elle___vire_yoghurt_apricot_125_g_4_pieces.png?v=1689142509&width=245",
        quantity: 1
    },
    {
        id: 208,
        name: "Portable Power Bank",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        reviews: 134,
        image: "https://www.supermart.ng/cdn/shop/files/dbk4115.png?v=1691144951&width=320",
        badge: "Sale",
        quantity: 1
    },
]