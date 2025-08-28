import { Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { useAppContext } from "../useContext/AppContext";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  isNew?: boolean;
  quantity: number;
}

const products: Product[] = [
  {
    id: 77,
    name: "Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 124,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/2514732/1.jpg?3287",
    badge: "Sale",
    quantity: 1
  },
  {
    id: 78,
    name: "Smart Fitness Watch",
    price: 299.99,
    rating: 4.6,
    reviews: 89,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/5128901/1.jpg?1572",
    isNew: true,
    quantity: 1
  },
  {
    id: 79,
    name: "Minimalist Backpack",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviews: 156,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/8520604/1.jpg?9471",
    badge: "Popular",
    quantity: 1
  },
  {
    id: 80,
    name: "Wireless Charging Pad",
    price: 49.99,
    rating: 4.4,
    reviews: 67,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/4846893/1.jpg?1781",
    quantity: 1
  },
  {
    id: 81,
    name: "Bluetooth Speaker",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.7,
    reviews: 203,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/7609514/1.jpg?3781",
    badge: "Sale",
    quantity: 1
  },
  {
    id: 82,
    name: "USB-C Hub",
    price: 89.99,
    rating: 4.5,
    reviews: 45,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/023152/1.jpg?5052",
    isNew: true,
    quantity: 1
  },
  {
    id: 83,
    name: "Ergonomic Mouse Pad",
    price: 24.99,
    rating: 4.3,
    reviews: 78,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/5746893/1.jpg?7996",
    quantity: 1
  },
  {
    id: 84,
    name: "Portable Power Bank",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 134,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/424317/1.jpg?0636",
    badge: "Sale",
    quantity: 1
  },
  {
    id: 85,
    name: "Portable Power Bank",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 134,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/0243572/1.jpg?7455",
    badge: "Sale",
    quantity: 1
  },
  {
    id: 86,
    name: "Portable Power Bank",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 134,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/4846893/1.jpg?1781",
    badge: "Sale",
    quantity: 1
  },
  {
    id: 87,
    name: "Portable Power Bank",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 134,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0939453/1.jpg?8636",
    badge: "Sale",
    quantity: 1
  },
  {
    id: 88,
    name: "Portable Power Bank",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 134,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/5776704/1.jpg?1575",
    badge: "Sale",
    quantity: 1
  },
]

export function MenWristWatch() {
  const { handleAddToCart } = useAppContext();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20 p-0 bg-black overflow-hidden"
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

            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <CardFooter className="p-3 lg:p-4 flex flex-col items-start gap-2">
            <h3 className="font-medium text-[10.2px] lg:text-sm line-clamp-2 text-white group-hover:text-white transition-colors">
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
              <span className="font-bold text-sm lg:text-sm text-white">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xs lg:text-sm text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>

            <Button onClick={() => handleAddToCart(product)} className="w-full mt-2 h-8 lg:h-9 text-xs lg:text-sm  bg-black hover:bg-blue-800 text-white" variant="outline">
              <ShoppingCart className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}