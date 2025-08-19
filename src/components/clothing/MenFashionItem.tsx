"use client"

import { Button } from "../ui/button"

interface MenFashionItem {
  id: number
  name: string
  price: string
  image: string
}

export function MenFashionItem() {
  const menFashionItems: MenFashionItem[] = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: "$29.99",
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/986649/1.jpg?6662",
    },
    {
      id: 2,
      name: "Denim Jeans",
      price: "$79.99",
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/403087/1.jpg?5294",
    },
    {
      id: 3,
      name: "Leather Watch",
      price: "$149.99",
      image: "https://ng.jumia.is/cms/0-0-0-sandbox/freelinks/watches-sunglasses_300x300.png",
    },
    {
      id: 4,
      name: "Casual Sneakers",
      price: "$89.99",
      image: "https://ng.jumia.is/cms/0-0-0-sandbox/freelinks/sneakers_300x300.png",
    },
    {
      id: 5,
      name: "Dress Shirt",
      price: "$59.99",
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/0887663/1.jpg?6841",
    },
    {
      id: 6,
      name: "Leather Belt",
      price: "$39.99",
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/1887663/1.jpg?7020",
    },
    {
      id: 7,
      name: "Hoodie",
      price: "$49.99",
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/3012041/1.jpg?6275",
    },
    {
      id: 8,
      name: "Chino Pants",
      price: "$69.99",
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/183227/1.jpg?2091",
    },
    {
      id: 9,
      name: "Polo Shirt",
      price: "$44.99",
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/5826004/1.jpg?7244",
    },
    {
      id: 10,
      name: "Bomber Jacket",
      price: "$119.99",
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/2428883/1.jpg?6315",
    },
    {
      id: 11,
      name: "Canvas Shoes",
      price: "$65.99",
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/9937104/1.jpg?2246",
    },
    {
      id: 12,
      name: "Baseball Cap",
      price: "$24.99",
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/7262204/1.jpg?9943",
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {menFashionItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" /> */}
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">{item.name}</h3>
            <div className="flex flex-wrap gap-5 lg:flex lg:justify-between items-center">
              <span className="text-xs font-bold text-blue-600">{item.price}</span>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-xs font-medium transition-colors duration-200">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
