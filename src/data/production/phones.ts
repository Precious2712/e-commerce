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

export const phone: Product[] = [
    {
        id: 177,
        name: "Wireless Headphones",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.8,
        reviews: 124,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/6867973/1.jpg?9252",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 178,
        name: "Smart Fitness Watch",
        price: 299.99,
        rating: 4.6,
        reviews: 89,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/3618114/1.jpg?3730",
        isNew: true,
        quantity: 1
    },
    {
        id: 179,
        name: "Minimalist Backpack",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.9,
        reviews: 156,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/0138114/1.jpg?4038",
        badge: "Popular",
        quantity: 1
    },
    {
        id: 180,
        name: "Wireless Charging Pad",
        price: 49.99,
        rating: 4.4,
        reviews: 67,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/7645104/1.jpg?9786",
        quantity: 1
    },
    {
        id: 181,
        name: "Bluetooth Speaker",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.7,
        reviews: 203,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/0328883/1.jpg?8732",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 182,
        name: "USB-C Hub",
        price: 89.99,
        rating: 4.5,
        reviews: 45,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/8872814/1.jpg?6822",
        isNew: true,
        quantity: 1
    },
    {
        id: 183,
        name: "Ergonomic Mouse Pad",
        price: 24.99,
        rating: 4.3,
        reviews: 78,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/3901793/1.jpg?1701",
        quantity: 1
    },
    {
        id: 184,
        name: "Portable Power Bank",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        reviews: 134,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/8769893/1.jpg?3461",
        badge: "Sale",
        quantity: 1
    },
]