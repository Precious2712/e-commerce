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

export const laptops: Product[] = [
    {
        id: 169,
        name: "Wireless Headphones",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.8,
        reviews: 124,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/3940123/1.jpg?4420",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 170,
        name: "Smart Fitness Watch",
        price: 299.99,
        rating: 4.6,
        reviews: 89,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/9096104/1.jpg?9285",
        isNew: true,
        quantity: 1
    },
    {
        id: 171,
        name: "Minimalist Backpack",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.9,
        reviews: 156,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/8397592/1.jpg?9343",
        badge: "Popular",
        quantity: 1
    },
    {
        id: 172,
        name: "Wireless Charging Pad",
        price: 49.99,
        rating: 4.4,
        reviews: 67,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/2892263/1.jpg?2395",
        quantity: 1
    },
    {
        id: 173,
        name: "Bluetooth Speaker",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.7,
        reviews: 203,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/2136404/1.jpg?1923",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 174,
        name: "USB-C Hub",
        price: 89.99,
        rating: 4.5,
        reviews: 45,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/9747762/1.jpg?5229",
        isNew: true,
        quantity: 1
    },
    {
        id: 175,
        name: "Ergonomic Mouse Pad",
        price: 24.99,
        rating: 4.3,
        reviews: 78,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/4996404/1.jpg?4865",
        quantity: 1
    },
    {
        id: 176,
        name: "Portable Power Bank",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        reviews: 134,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/9023752/1.jpg?8030",
        badge: "Sale",
        quantity: 1
    },
]