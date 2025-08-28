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
    id: 129,
    name: "Scandal heel slippers",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 124,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/2130651/1.jpg?0145",
    badge: "Sale",
    quantity: 1
  },
  {
    id: 130,
    name: "Casual shoe",
    price: 299.99,
    rating: 4.6,
    reviews: 89,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/8265531/1.jpg?2050",
    isNew: true,
    quantity: 1
  },
  {
    id: 131,
    name: "Mateamoda heels",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviews: 156,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/5142201/1.jpg?6895",
    badge: "Popular",
    quantity: 1
  },
  {
    id: 132,
    name: "Outdoor special shoes",
    price: 49.99,
    rating: 4.4,
    reviews: 67,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/3893972/1.jpg?0316",
    quantity: 1
  },
  {
    id: 133,
    name: "Gladiator sandals heel",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.7,
    reviews: 203,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/0015953/1.jpg?9295",
    badge: "Sale",
    quantity: 1
  },
  {
    id: 134,
    name: "Women sandal",
    price: 89.99,
    rating: 4.5,
    reviews: 45,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/9817223/1.jpg?9216",
    isNew: true,
    quantity: 1
  },
  {
    id: 135,
    name: "Flat fashion sandal",
    price: 24.99,
    rating: 4.3,
    reviews: 78,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/7589304/1.jpg?9566",
    quantity: 1
  },
  {
    id: 136,
    name: "Heel slippers",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 134,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/3087963/1.jpg?0900",
    badge: "Sale",
    quantity: 1
  },
]

export function Shoes() {
  const { handleAddToCart } = useAppContext()
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group border-border hover:shadow-lg transition-all duration-300 hover:border p-0 bg-black overflow-hidden"
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

          <CardFooter className="p-3 lg:p-4 flex flex-col items-start gap-2 text-white">
            <h3 className="font-medium text-sm lg:text-sm line-clamp-2 ">
              {product.name}
            </h3>

            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <Star className="h-3 w-3 lg:h-4 lg:w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-xs lg:text-sm font-medium ml-1">{product.rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>

            <div className="flex items-center gap-2 w-full text-white">
              <span className="font-bold text-sm lg:text-sm">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xs lg:text-sm text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>

            <Button onClick={() => handleAddToCart(product)} className="w-full mt-2 h-8 lg:h-9 text-xs lg:text-sm text-white bg-black hover:bg-blue-800" variant="outline">
              <ShoppingCart className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}