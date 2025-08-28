'use client';

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
    id: 113,
    name: "Body-con dress",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 124,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/6742772/1.jpg?6532",
    badge: "Sale",
    quantity: 1
  },
  {
    id: 114,
    name: "Sleeveless Stretchy Gown",
    price: 299.99,
    rating: 4.6,
    reviews: 89,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/7365814/1.jpg?0304",
    isNew: true,
    quantity: 1
  },
  {
    id: 115,
    name: "Corporate Gown",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviews: 156,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/2100603/1.jpg?5294",
    badge: "Popular",
    quantity: 1
  },
  {
    id: 116,
    name: "Ladies Short Gown",
    price: 49.99,
    rating: 4.4,
    reviews: 67,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/9858373/1.jpg?8055",
    quantity: 1
  },
  {
    id: 117,
    name: "Style Elegant Floral V-neck",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.7,
    reviews: 203,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/105597/1.jpg?3010",
    badge: "Sale",
    quantity: 1
  },
  {
    id: 118,
    name: "Crop Top for Ladies",
    price: 89.99,
    rating: 4.5,
    reviews: 45,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/0717514/1.jpg?3550",
    isNew: true,
    quantity: 1
  },
  {
    id: 119,
    name: "Ladies Party Gown",
    price: 24.99,
    rating: 4.3,
    reviews: 78,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/8504973/1.jpg?2268",
    quantity: 1
  },
  {
    id: 120,
    name: "Classy Gown",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 134,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/0748952/1.jpg?3546",
    badge: "Sale",
    quantity: 1
  },
]

export function LadiesWears() {
  const { handleAddToCart } = useAppContext()
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="bg-black text-white group border-border hover:transition-all duration-300 p-0 overflow-hidden"
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
            <h3 className="font-medium text-white text-sm lg:text-sm line-clamp-1 min-h-[1.35rem] leading-tight overflow-hidden">
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
              <span className="font-bold text-sm lg:text-sm">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xs lg:text-sm text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>

            <Button onClick={() => handleAddToCart(product)} className="w-full mt-2 h-8 lg:h-9 text-xs lg:text-sm bg-black hover:bg-blue-500" variant="outline">
              <ShoppingCart className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}