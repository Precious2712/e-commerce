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

export const vegetables: Product[] = [
    {
        id: 209,
        name: "Wireless Headphones",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.8,
        reviews: 124,
        image: "https://www.supermart.ng/cdn/shop/files/nsparb550_plein_soleil_mixed_vegetables_400_g.jpg?v=1689068123&width=307",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 210,
        name: "Smart Fitness Watch",
        price: 299.99,
        rating: 4.6,
        reviews: 89,
        image: "https://freshtodommot.com/cdn/shop/products/lemon_800x.jpg?v=1596785038",
        isNew: true,
        quantity: 1
    },
    {
        id: 211,
        name: "Minimalist Backpack",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.9,
        reviews: 156,
        image: "https://freshtodommot.com/cdn/shop/products/red-grapes_05c7ccd4-3503-4e0f-af8b-64549b8b0861_800x.jpg?v=1594376751",
        badge: "Popular",
        quantity: 1
    },
    {
        id: 212,
        name: "Wireless Charging Pad",
        price: 49.99,
        rating: 4.4,
        reviews: 67,
        image: "https://freshtodommot.com/cdn/shop/products/strawberries_800x.jpg?v=1603153350",
        quantity: 1
    },
    {
        id: 213,
        name: "Bluetooth Speaker",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.7,
        reviews: 203,
        image: "https://freshtodommot.com/cdn/shop/products/pineapple_7da52848-c075-47cd-b080-e28e0381a7a1_1200x.jpg?v=1739448158",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 214,
        name: "USB-C Hub",
        price: 89.99,
        rating: 4.5,
        reviews: 45,
        image: "https://vegetalfoods.com/wp-content/uploads/2021/04/4P8A0691.jpg",
        isNew: true,
        quantity: 1
    },
    {
        id: 215,
        name: "Ergonomic Mouse Pad",
        price: 24.99,
        rating: 4.3,
        reviews: 78,
        image: "https://vegetalfoods.com/wp-content/uploads/2022/07/Best-Way-to-Store-Fruits-and-Vegetables--768x480.jpg",
        quantity: 1
    },
    {
        id: 216,
        name: "Portable Power Bank",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        reviews: 134,
        image: "https://vegetalfoods.com/wp-content/uploads/2018/02/IMG_8448.jpg",
        badge: "Sale",
        quantity: 1
    },
]