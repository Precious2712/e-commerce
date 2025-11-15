"use client"

import { Button } from "@/components/ui/button"
import { AlignRight, ShoppingBag, X, User, LogOut } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { menuItems } from "@/data/prod/items"
import { useAppContext } from "../useContext/AppContext"
import { DesktopMentFashionComp, MobileMenFashionComp } from "../Gender-Category/AllMenFashionComp"
import { CustomerCart } from "../user-cart/CustomerCart"

export function MenCollectionPage() {
  const { items, setItem, handleLogout } = useAppContext();
  const [mobile, setMobile] = useState(false);

  function handleShowItem(menu: string) {
    // alert(menu);
    setItem(menu);
    console.log('item-', items);
  }

  function handleSideBar() {
    setMobile(!mobile)
  }

  return (
    <div className="">
      <header className="w-full py-4 px-1.5 lg:px-5 fixed top-0 flex justify-between items-center bg-white backdrop-blur-md border-b border-slate-200/60 shadow-lg shadow-slate-900/5 z-50">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 transition-transform hover:scale-105">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-1xl text-slate-800">Daily Market</h1>
            <p className="text-sm text-slate-500">Your shopping destination</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link href='/auth'>
            <Button
              className=" bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer"
              size="sm"
            >
              <User className="w-4 h-4 mr-2" />
              Signup
            </Button>
          </Link>
          <Button
            onClick={handleLogout}
            className=" bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-xs shadow-lg shadow-red-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-0.5 cursor-pointer"
            size="sm"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
          <CustomerCart />
        </div>

        <div className="flex gap-3 lg:hidden">
          <Button
            onClick={handleSideBar}
            className="lg:hidden bg-slate-100 hover:bg-slate-200 text-slate-700 shadow-md transition-all duration-200 hover:shadow-lg cursor-pointer"
            size="sm"
          >
            {mobile ? <X className="w-5 h-5" /> : <AlignRight className="w-5 h-5" />}
          </Button>

          <CustomerCart />
        </div>
      </header>

      <div className="">
        <aside className="hidden lg:block fixed left-0 top-0 w-50 h-screen bg-black backdrop-blur-md shadow-2xl shadow-slate-900/10 z-40 overflow-y-auto scrollbar-hide">
          <div className="pt-24 px-6 pb-16">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white mb-2">Categories</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>

            <nav className="space-y-3">
              <Link href='/'>
                <button className="bg-blue-500 text-[13px] w-full h-7 text-left px-3.5 rounded-xl text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 hover:shadow-md hover:shadow-blue-500/10 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-50 cursor-pointer">
                  <span>Home</span>
                </button>
              </Link>
              <div className="mt-3 flex flex-col gap-3.5">
                {menuItems.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleShowItem(item)}
                    className="w-full mt-3 text-left px-3.5 rounded-xl text-xs text-white  transition-all duration-200 hover:shadow-md hover:shadow-blue-500/10 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-700 cursor-pointer"
                  >
                    <span className="font-medium hover:text-red-600">{item}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </aside>

        <div className="hidden lg:flex justify-center flex-1 pt-30 ml-[190px]">
          <div className="w-5xl mx-auto">
            <DesktopMentFashionComp />
          </div>
        </div>


        <div className="pt-24 w-[95%] m-auto lg:hidden">
          <MobileMenFashionComp />
        </div>

      </div>

      {mobile && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={handleSideBar}
          />

          <aside className="lg:hidden fixed left-0 top-0 w-[70%] h-screen bg-white shadow-2xl shadow-slate-900/20 z-50 transform transition-transform duration-300 ease-out overflow-y-auto scrollbar-hide">
            <div className="pt-7 px-6 pb-6">

              <div className="mb-8 space-y-3">
                {/* <Button
                  onClick={handleSideBar}
                  className="lg:hidden bg-slate-100 hover:bg-slate-200 text-slate-700 shadow-md transition-all duration-200 hover:shadow-lg cursor-pointer"
                  size="sm"
                >
                  {mobile ? <X className="w-5 h-5" /> : <AlignRight className="w-5 h-5" />}
                </Button> */}
                <Link href='/auth'>
                  <Button
                    className="w-full  bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer"
                    size="sm"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Signup
                  </Button>
                </Link>
                <Button
                  onClick={handleLogout}
                  className="w-full mt-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/25 transition-all duration-200"
                  size="sm"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-800 mb-2">Categories</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>

              <nav className="space-y-2">
                <Link href='/'>
                  <button className="bg-blue-500 w-full h-7 text-left px-3.5 rounded-xl text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 hover:shadow-md hover:shadow-blue-500/10 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-50 cursor-pointer">
                    <span className="text-[12px]">Home</span>
                  </button>
                </Link>
                <div className="mt-3 flex flex-col gap-5">
                  {menuItems.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleShowItem(item)}
                      className="w-full h-7 text-left px-4 rounded-xl text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 hover:shadow-md hover:shadow-blue-500/10 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-50 cursor-pointer"
                    >
                      <span className="font-medium text-[12px]">{item}</span>
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </aside>
        </>
      )}
    </div>
  )
}
