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

export const store: Product[] = [
    {
        id: 209,
        name: "Wireless Headphones",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.8,
        reviews: 124,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/0713393/1.jpg?8453",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 210,
        name: "Smart Fitness Watch",
        price: 299.99,
        rating: 4.6,
        reviews: 89,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/7315683/1.jpg?7350",
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
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/3184122/1.jpg?3833",
        badge: "Popular",
        quantity: 1
    },
    {
        id: 212,
        name: "Wireless Charging Pad",
        price: 49.99,
        rating: 4.4,
        reviews: 67,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/340767/1.jpg?6930",
        quantity: 1
    },
    {
        id: 213,
        name: "Bluetooth Speaker",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.7,
        reviews: 203,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/6800983/1.jpg?1605",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 214,
        name: "USB-C Hub",
        price: 89.99,
        rating: 4.5,
        reviews: 45,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/8898083/1.jpg?7539",
        isNew: true,
        quantity: 1
    },
    {
        id: 215,
        name: "Ergonomic Mouse Pad",
        price: 24.99,
        rating: 4.3,
        reviews: 78,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/4027283/1.jpg?1609",
        quantity: 1
    },
    {
        id: 216,
        name: "Portable Power Bank",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        reviews: 134,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/4855814/1.jpg?3624",
        badge: "Sale",
        quantity: 1
    },
]