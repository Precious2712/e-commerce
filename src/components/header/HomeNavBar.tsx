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
import { dropDown } from "../../data/prod/categories";
import Link from "next/link";
import { CustomerCart } from "../user-cart/CustomerCart";
import { useAppContext } from "../useContext/AppContext";


export function HomeNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [fashion, setFashion] = useState(false);
  const [gadgets, setGadgets] = useState(false);
  const [grocery, setGrocery] = useState(false);
  const { handleLogout } = useAppContext();

  return (
    <div className="fixed top-0 w-full z-50 bg-white shadow-lg text-black">

      <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 lg:hidden">
        <Link href="/" className="flex items-center space-x-3 cursor-pointer">
          <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-[14px]">Daily Market</h1>
            <p className="text-blue-100 text-xs">Your shopping destination</p>
          </div>
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-800 transition-colors">
              <AlignRight className="w-6 h-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          <CustomerCart />

          <SheetContent side="right" className="w-80 p-0 ">
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
                        <Link key={item.id} href={`${item.path}`}>
                          <button
                            className="w-full flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors text-left group cursor-pointer"
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon className="w-4 h-4 text-gray-400 text-xs group-hover:text-blue-600 transition-colors" />
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

                <Link href="/items/home-appliances">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                    <p className="text-[12.5px]">Home-Appliances</p>
                  </div>
                </Link>

                <Link href="/items/tvAndAudio">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group mt-3">
                    <p className="text-[12.5px]">Tv & Audios</p>
                  </div>
                </Link>
              </div>

              <div className="p-4 border-t bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <Badge onClick={handleLogout} variant="secondary" className="bg-blue-100 text-blue-800">
                      Logout
                    </Badge>
                  </div>
                  <Link href='/auth'>
                    <Button className="cursor-pointer" variant="outline" size="sm" onClick={() => setIsOpen(false)}>
                      Signup
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:flex lg:justify-between py-3 px-2.5">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shadow-lg">
            <ShoppingBag className="w-5 h-5 " />
          </div>
          <div>
            <h1 className=" font-bold ">Daily Market</h1>
            <p className="text-blue-300 text-xs">Your shopping destination</p>
          </div>
        </div>

        <div>
          <ul className="flex gap-4 mt-3 text-[12px]">
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
                            Men&apos;s Clothing
                          </li>
                        </Link>
                        <Link href='/women-collection'>
                          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                            Women&apos;s Clothing
                          </li>
                        </Link>

                        <Link href='/Teen-boy-fashion'>
                          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                            Teen Boy Fashion
                          </li>
                        </Link>
                        <Link href='/Teen-girl-fashion'>
                          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                            Teen Girl Fashion
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
                        <Link href='/items/phones'>
                          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                            Smartphones
                          </li>
                        </Link>
                        <Link href='/items/laptop'>
                          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                            Laptops
                          </li>
                        </Link>
                        <Link href='/items'>
                          <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                            Accessories
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
                          Vegetables & Fruits
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer transition-colors">
                          Bakery Products
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

            <Link href="/items/home-appliances">
              <li className="relative">
                <p className="py-2 px-1">Home Appliances</p>
              </li>
            </Link>

            <Link href="/">
              <li className="relative cursor-pointer">
                <p className="py-2 px-1">Home</p>
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex gap-5 mt-1">
          <CustomerCart />
          <Link href='/auth'>
            <Button className="bg-blue-900 hover:bg-blue-800 text-[12px] cursor-pointer" variant="ghost">
              Signup
            </Button>
          </Link>
          <Button onClick={handleLogout} className="bg-red-400 hover:bg-red-500 text-[12px] cursor-pointer" variant="ghost">
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}