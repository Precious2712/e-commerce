'use client';

import { Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { useAppContext } from "../useContext/AppContext"
import Image from "next/image";

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

const products: Product[] = [
  {
    id: 89,
    name: "Sleeve Dress-Multi",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 124,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/3809033/1.jpg?9423",
    badge: "Sale",
    quantity: 1
  },
  {
    id: 90,
    name: "Casual Hot Dress",
    price: 299.99,
    rating: 4.6,
    reviews: 89,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/6345413/1.jpg?5188",
    isNew: true,
    quantity: 1
  },
  {
    id: 91,
    name: "Vintage Gown",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviews: 156,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/159583/1.jpg?2733",
    badge: "Popular",
    quantity: 1
  },
  {
    id: 92,
    name: "Lace Panties",
    price: 49.99,
    rating: 4.4,
    reviews: 67,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/0010763/1.jpg?6156",
    quantity: 1
  },
  {
    id: 93,
    name: "G-string panties",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.7,
    reviews: 203,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/2835553/1.jpg?6201",
    badge: "Sale",
    quantity: 1
  },
  {
    id: 94,
    name: "Top Tee T-shirt",
    price: 89.99,
    rating: 4.5,
    reviews: 45,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/4457811/1.jpg?0524",
    isNew: true,
    quantity: 1
  },
  {
    id: 95,
    name: "Night-Gown",
    price: 24.99,
    rating: 4.3,
    reviews: 78,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/2706873/1.jpg?1938",
    quantity: 1
  },
  {
    id: 96,
    name: "Flowered bra 1piece",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 134,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/8256953/1.jpg?0625",
    badge: "Sale",
    quantity: 1
  },
]

export function AllLadiesCollection() {
  const { handleAddToCart } = useAppContext();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group border-border hover:shadow-lg transition-all duration-300 bg-black text-white hover:border-primary/20 p-0 overflow-hidden"
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
            <h3 className="font-medium text-sm lg:text-sm line-clamp-2 group-hover:transition-colors">
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