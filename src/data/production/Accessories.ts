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

export const accessories: Product[] = [
    {
        id: 9,
        name: "Wireless Headphones",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.8,
        reviews: 124,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/6100883/1.jpg?2148",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 10,
        name: "Smart Fitness Watch",
        price: 299.99,
        rating: 4.6,
        reviews: 89,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/2422542/1.jpg?6641",
        isNew: true,
        quantity: 1
    },
    {
        id: 11,
        name: "Minimalist Backpack",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.9,
        reviews: 156,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/0116172/1.jpg?2100",
        badge: "Popular",
        quantity: 1
    },
    {
        id: 12,
        name: "Wireless Charging Pad",
        price: 49.99,
        rating: 4.4,
        reviews: 67,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/749175/1.jpg?3259",
        quantity: 1
    },
    {
        id: 13,
        name: "Bluetooth Speaker",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.7,
        reviews: 203,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/5451804/1.jpg?3626",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 14,
        name: "USB-C Hub",
        price: 89.99,
        rating: 4.5,
        reviews: 45,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/389669/1.jpg?3090",
        isNew: true,
        quantity: 1
    },
    {
        id: 15,
        name: "Ergonomic Mouse Pad",
        price: 24.99,
        rating: 4.3,
        reviews: 78,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/036099/1.jpg?6992",
        quantity: 1
    },
    {
        id: 16,
        name: "Portable Power Bank",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        reviews: 134,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/1133722/1.jpg?2482",
        badge: "Sale",
        quantity: 1
    },
]