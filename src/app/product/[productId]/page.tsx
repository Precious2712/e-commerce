'use client'

import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import products from "@/data/prod/product"

export default function ProductPage() {
  const {productId} = useParams()
  console.log(productId);
  
  const product = products.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/product">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-4xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            <div className="prose max-w-none">
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="space-y-4 pt-6">
              <Button className="w-full" size="lg">
                Add to Cart
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}