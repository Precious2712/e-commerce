import { Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"

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
}

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 124,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/6020222/1.jpg?3630",
    badge: "Sale",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 299.99,
    rating: 4.6,
    reviews: 89,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/7691463/1.jpg?2767",
    isNew: true,
  },
  {
    id: 3,
    name: "Minimalist Backpack",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviews: 156,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/1746833/1.jpg?1825",
    badge: "Popular",
  },
  {
    id: 4,
    name: "Wireless Charging Pad",
    price: 49.99,
    rating: 4.4,
    reviews: 67,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/3413943/1.jpg?4126",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.7,
    reviews: 203,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/2248872/1.jpg?4658",
    badge: "Sale",
  },
  {
    id: 6,
    name: "USB-C Hub",
    price: 89.99,
    rating: 4.5,
    reviews: 45,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/9621533/1.jpg?9464",
    isNew: true,
  },
  {
    id: 7,
    name: "Ergonomic Mouse Pad",
    price: 24.99,
    rating: 4.3,
    reviews: 78,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/5801351/1.jpg?9191",
  },
  {
    id: 8,
    name: "Portable Power Bank",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 134,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/8289953/1.jpg?2217",
    badge: "Sale",
  },
  {
    id: 9,
    name: "Portable Power Bank",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 134,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/1499112/1.jpg?9703",
    badge: "Sale",
  },
  {
    id: 10,
    name: "Portable Power Bank",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 134,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/1214663/1.jpg?1898",
    badge: "Sale",
  },
  {
    id: 11,
    name: "Portable Power Bank",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 134,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/4322502/1.jpg?5575",
    badge: "Sale",
  },
  {
    id: 12,
    name: "Portable Power Bank",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 134,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/7785762/1.jpg?8007",
    badge: "Sale",
  },
]

export function MenShoeCollections() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20 p-0"
        >
          <div className="relative h-48 lg:h-56 overflow-hidden bg-muted">
            {(product.badge || product.isNew) && (
              <Badge
                variant={product.badge === "Sale" ? "destructive" : "secondary"}
                className="absolute top-2 left-2 z-10 text-xs"
              >
                {product.badge || "New"}
              </Badge>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 h-8 w-8 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Heart className="h-4 w-4" />
            </Button>

            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <CardFooter className="p-3 lg:p-4 flex flex-col items-start gap-2">
            <h3 className="font-medium text-sm lg:text-sm line-clamp-2 text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <Star className="h-3 w-3 lg:h-4 lg:w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-xs lg:text-sm font-medium ml-1">{product.rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>

            <div className="flex items-center gap-2 w-full">
              <span className="font-bold text-sm lg:text-sm text-foreground">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xs lg:text-sm text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>

            <Button className="w-full mt-2 h-8 lg:h-9 text-xs lg:text-sm bg-blue-700 hover:bg-blue-500" variant="outline">
              <ShoppingCart className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}