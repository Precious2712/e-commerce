"use client"

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  AlignRight,
  ShoppingBag,
  ChevronRight
} from "lucide-react"
import { useState } from "react"
import { dropDown } from "../prod/categories";
import Link from "next/link";


export function HomeNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [fashion, setFashion] = useState(false);
  const [gadgets, setGadgets] = useState(false);
  const [grocery, setGrocery] = useState(false);
  const [home, setHome] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50 bg-black shadow-lg text-white">

      <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 lg:hidden">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">Daily Market</h1>
            <p className="text-blue-100 text-xs">Your shopping destination</p>
          </div>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-800 transition-colors">
              <AlignRight className="w-6 h-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-80 p-0">
            <SheetHeader className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              {/* <SheetTitle className="text-white text-left">Browse Categories</SheetTitle> */}
            </SheetHeader>

            <div className="flex flex-col h-full pb-24">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {dropDown.map((category, index) => (
                  <div key={category.title} className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <category.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{category.title}</h3>
                        <p className="text-sm text-gray-500">{category.items.length} items</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>

                    <div className="ml-4 space-y-1">
                      {category.items.map((item) => (
                        <Link href={`${item.path}`}>
                          <button
                            key={item.name}
                            className="w-full flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors text-left group"
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                              {item.name}
                            </span>
                          </button>
                        </Link>
                      ))}
                    </div>

                    {index < dropDown.length - 1 && <Separator className="my-4" />}
                  </div>
                ))}
              </div>

              <div className="p-4 border-t bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      New
                    </Badge>
                    <span className="text-sm text-gray-600">Special Offers</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
                    View All
                  </Button>
                </div>
              </div>

            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:flex lg:justify-between py-3 px-2.5">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">Daily Market</h1>
            <p className="text-blue-100 text-xs">Your shopping destination</p>
          </div>
        </div>

        <div>
          <ul className="flex gap-4 mt-3 text-[14px] text-white">
            <li className="relative">
              <div
                onMouseEnter={() => setFashion(true)}
                onMouseLeave={() => setFashion(false)}
                className="cursor-pointer hover:text-blue-200 transition-colors"
              >
                <div className="py-2 px-1">Fashion</div>
                {fashion && (
                  <div className="absolute top-2 left-0 w-[180px] z-50">
                    <div className="h-14 w-full"></div>
                    <div className="py-2.5 px-3.5 bg-white text-black shadow-2xl rounded-md">
                      <ul className="flex flex-col gap-2">
                        <Link href='/men-collection'>
                          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                            Men's Clothing
                          </li>
                        </Link>
                        <Link href='/women-collection'>
                          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                            Women's Clothing
                          </li>
                        </Link>
                        <Link href='/baby-boy-cloths'>
                          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                            Baby Boy Wear
                          </li>
                        </Link>
                        <Link href='/baby-girl-cloths'>
                          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                            Baby Girl Wear
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </li>

            <li className="relative">
              <div
                onMouseEnter={() => setGadgets(true)}
                onMouseLeave={() => setGadgets(false)}
                className="cursor-pointer hover:text-blue-200 transition-colors"
              >
                <div className="py-2 px-1">Gadgets</div>
                {gadgets && (
                  <div className="absolute top-2 left-0 w-[180px] z-50">
                    <div className="h-14 w-full"></div>
                    <div className="py-2.5 px-3.5 bg-white text-black shadow-2xl rounded-md">
                      <ul className="flex flex-col gap-2">
                        <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                          Smartphones
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                          Laptops
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                          Accessories
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </li>

            <li className="relative">
              <div
                onMouseEnter={() => setGrocery(true)}
                onMouseLeave={() => setGrocery(false)}
                className="cursor-pointer hover:text-blue-200 transition-colors"
              >
                <div className="py-2 px-1">Grocery</div>
                {grocery && (
                  <div className="absolute top-2 left-0 w-[180px] z-50">
                    <div className="h-14 w-full"></div>
                    <div className="py-2.5 px-3.5 bg-white text-black shadow-2xl rounded-md">
                      <ul className="flex flex-col gap-2">
                        <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                          Fresh Produce
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                          Dairy Products
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                          Beverages
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </li>

            <li className="relative">
              <div
                onMouseEnter={() => setHome(true)}
                onMouseLeave={() => setHome(false)}
                className="cursor-pointer hover:text-blue-200 transition-colors"
              >
                <div className="py-2 px-1">Home Appliances</div>
                {home && (
                  <div className="absolute top-2 left-0 w-[180px] z-50">
                    <div className="h-14 w-full"></div>
                    <div className="py-2.5 px-3.5 bg-white text-black shadow-2xl rounded-md">
                      <ul className="flex flex-col gap-2">
                        <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                          Kitchen Appliances
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                          Cleaning Equipment
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                          Electronics
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>

        <div className="flex gap-2.5 mt-1">
          <Button className="bg-blue-900 hover:bg-blue-800" variant="ghost">
            Signup
          </Button>
          <Button className="bg-red-400 hover:bg-red-500" variant="ghost">
            Logout
          </Button>
        </div>
      </div>

    </div>
  )
}