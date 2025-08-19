"use client"

import { ShoppingCart, Heart, Star, Badge } from "lucide-react"
import { Card, CardFooter } from "../ui/card"
import { Button } from "../ui/button"

interface JeansItem {
  id: number
  name: string
  price: string
  originalPrice?: string
  image: string
  tag?: string
  rating?: number
}

export function MenJeansCollection() {
  const jeansItems: JeansItem[] = [
    {
      id: 1,
      name: "Classic Skinny Fit",
      price: "$89.99",
      originalPrice: "$120.00",
      tag: "Best Seller",
      rating: 4.8,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/4617352/1.jpg?3019",
    },
    {
      id: 2,
      name: "Straight Leg Dark Wash",
      price: "$79.99",
      rating: 4.6,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/4185204/1.jpg?8823",
    },
    {
      id: 3,
      name: "Bootcut Light Wash",
      price: "$69.99",
      rating: 4.5,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/0696752/1.jpg?2143",
    },
    {
      id: 4,
      name: "Premium Selvedge Raw",
      price: "$199.99",
      tag: "Premium",
      rating: 4.9,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/4217352/1.jpg?2140",
    },
    {
      id: 5,
      name: "Vintage Acid Wash",
      price: "$94.99",
      tag: "Trending",
      rating: 4.7,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/6619152/1.jpg?2381",
    },
    {
      id: 6,
      name: "Slim Fit Black",
      price: "$84.99",
      rating: 4.4,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/3922722/1.jpg?5963",
    },
    {
      id: 7,
      name: "Distressed Ripped",
      price: "$109.99",
      tag: "New",
      rating: 4.3,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/397507/1.jpg?7865",
    },
    {
      id: 8,
      name: "Relaxed Comfort Fit",
      price: "$74.99",
      rating: 4.6,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/4317352/1.jpg?2098",
    },
  ]

  const getTagStyles = (tag: string) => {
    switch (tag) {
      case "Premium":
        return "bg-gradient-to-r from-amber-400 to-yellow-500 text-black"
      case "Best Seller":
        return "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
      case "Trending":
        return "bg-gradient-to-r from-red-500 to-pink-500 text-white"
      case "New":
        return "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
      default:
        return "bg-gray-900 text-white"
    }
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-xs">
      {jeansItems.map((product) => (
        <Card
          key={product.id}
          className="group border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20 p-0"
        >
          <div className="relative h-48 lg:h-56 overflow-hidden bg-muted">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 h-8 w-8 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Heart className="h-4 w-4" />
            </Button>

            {/* Product Image */}
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <CardFooter className="p-3 lg:p-4 flex flex-col items-start gap-2 text-xs">
            {/* Product Name */}
            <h3 className="font-medium  lg:line-clamp-2 text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <Star className="h-3 w-3 lg:h-4 lg:w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-xs lg:text-sm font-medium ml-1">{product.rating}</span>
              </div>
              {/* <span className="text-xs text-muted-foreground">({product.reviews})</span> */}
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 w-full">
              <span className="font-bold lg:text-foreground">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xs lg:text-sm text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Add to Cart Button */}
            <Button className="w-full mt-2 h-8 lg:h-9 text-xs lg:text-sm  bg-blue-500 hover:bg-blue-800" variant="outline">
              <ShoppingCart className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}