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

export const appliances: Product[] = [
    {
        id: 9,
        name: "Wireless Headphones",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.8,
        reviews: 124,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/4203591/1.jpg?4039",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 10,
        name: "Smart Fitness Watch",
        price: 299.99,
        rating: 4.6,
        reviews: 89,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/1332231/1.jpg?6301",
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
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0913104/1.jpg?3819",
        badge: "Popular",
        quantity: 1
    },
    {
        id: 12,
        name: "Wireless Charging Pad",
        price: 49.99,
        rating: 4.4,
        reviews: 67,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/0913104/1.jpg?8883",
        quantity: 1
    },
    {
        id: 13,
        name: "Bluetooth Speaker",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.7,
        reviews: 203,
        image: "https://ng.jumia.is/cms/0-1-category-pages/appliances/300x400/humidifiers_300x400.png",
        badge: "Sale",
        quantity: 1
    },
    {
        id: 14,
        name: "USB-C Hub",
        price: 89.99,
        rating: 4.5,
        reviews: 45,
        image: "https://ng.jumia.is/cms/0-1-category-pages/appliances/300x400/fans_300x400.png",
        isNew: true,
        quantity: 1
    },
    {
        id: 15,
        name: "Ergonomic Mouse Pad",
        price: 24.99,
        rating: 4.3,
        reviews: 78,
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/9994214/1.jpg?8488",
        quantity: 1
    },
    {
        id: 16,
        name: "Portable Power Bank",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        reviews: 134,
        image: "https://ng.jumia.is/cms/0-1-category-pages/appliances/300x400/mixers_300x400.png",
        badge: "Sale",
        quantity: 1
    },
]