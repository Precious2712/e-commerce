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

export const tvAndAudios: Product[] = [
    {
        id: 9,
        name: "Wireless Headphones",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.8,
        reviews: 124,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/491417/1.jpg?0785",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 10,
        name: "Smart Fitness Watch",
        price: 299.99,
        rating: 4.6,
        reviews: 89,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/3352371/1.jpg?2525",
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
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/6501304/1.jpg?5445",
        badge: "Popular",
        quantity: 1
    },
    {
        id: 12,
        name: "Wireless Charging Pad",
        price: 49.99,
        rating: 4.4,
        reviews: 67,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/2640553/1.jpg?6994",
        quantity: 1
    },
    {
        id: 13,
        name: "Bluetooth Speaker",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.7,
        reviews: 203,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/7115302/1.jpg?5136",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 14,
        name: "USB-C Hub",
        price: 89.99,
        rating: 4.5,
        reviews: 45,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/8462362/1.jpg?4898",
        isNew: true,
        quantity: 1
    },
    {
        id: 15,
        name: "Ergonomic Mouse Pad",
        price: 24.99,
        rating: 4.3,
        reviews: 78,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/6508372/1.jpg?8659",
        quantity: 1
    },
    {
        id: 16,
        name: "Portable Power Bank",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        reviews: 134,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/2442793/1.jpg?4089",
        badge: "Sale",
        quantity: 1
    },
]