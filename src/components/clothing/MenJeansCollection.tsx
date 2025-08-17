"use client"

import { ShoppingCart, Heart, Star } from "lucide-react"

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
    <div className="max-w-7xl mx-auto px-4 py-8 text-xs ">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-xs">
        {jeansItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gray-50">
              {item.tag && (
                <div className="absolute top-3 left-3 z-10">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getTagStyles(item.tag)}`}>
                    {item.tag}
                  </span>
                </div>
              )}

              {/* Wishlist Button */}
              <button className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors duration-200 opacity-0 group-hover:opacity-100">
                <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
              </button>

              <div className="aspect-[] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Quick Add Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full bg-white text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Quick Add
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5 text-xs">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                {item.name}
              </h3>

              {/* Rating */}
              {item.rating && (
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating!) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">({item.rating})</span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-center gap-2 mb-4 text-xs">
                <span className="text-xs font-bold text-gray-900">{item.price}</span>
                
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}