"use client"

import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"

export function Nav() {
  const [showFashion, setShowFashion] = useState(false)
  const [showMenWear, setShowMenWear] = useState(false)
  const [showWomenWear, setShowWomenWear] = useState(false)
  const [showBeverages, setShowBeverages] = useState(false)
  const [showCereals, setShowCereals] = useState(false)
  const [showTea, setShowTea] = useState(false)
  const [showGadgets, setShowGadgets] = useState(false)
  const [showPhones, setShowPhones] = useState(false)
  const [showAppliances, setShowAppliances] = useState(false)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (setter: (value: boolean) => void) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setter(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowFashion(false)
      setShowMenWear(false)
      setShowWomenWear(false)
      setShowBeverages(false)
      setShowCereals(false)
      setShowTea(false)
      setShowGadgets(false)
      setShowPhones(false)
      setShowAppliances(false)
    }, 150)
  }

  return (
    <div className="flex justify-between items-center bg-black text-white py-2.5 px-4 relative">
      <div className="flex items-center gap-2">
        <div className="w-[37px] h-9 bg-blue-800 rounded-full"></div>
        <p>Daily-market</p>
      </div>

      <div>
        <ul className="flex gap-8">
          <li
            className="relative cursor-pointer hover:text-gray-300"
            onMouseEnter={() => handleMouseEnter(setShowFashion)}
            onMouseLeave={handleMouseLeave}
          >
            Fashion
            {showFashion && (
              <div
                className="absolute top-6 left-0 w-[200px] z-50"
                onMouseEnter={() => handleMouseEnter(setShowFashion)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="h-14 w-full"></div>
                <div className="bg-white text-black shadow-lg rounded-md w-full">
                  <ul className="py-2">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative"
                      onMouseEnter={() => handleMouseEnter(setShowMenWear)}
                      onMouseLeave={handleMouseLeave}
                    >
                      Men wears
                      {showMenWear && (
                        <div
                          className="absolute top-0 left-full bg-white shadow-lg rounded-md min-w-[150px] ml-1"
                          onMouseEnter={() => handleMouseEnter(setShowMenWear)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <ul className="py-2">
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Trouser</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Sweat pants</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Boxers</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Jeans</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Cap</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Wrist watch</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Hoodie</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Shoes</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Sneakers</li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative"
                      onMouseEnter={() => handleMouseEnter(setShowWomenWear)}
                      onMouseLeave={handleMouseLeave}
                    >
                      Women wears
                      {showWomenWear && (
                        <div
                          className="absolute top-0 left-full bg-white shadow-lg rounded-md min-w-[150px] ml-1"
                          onMouseEnter={() => handleMouseEnter(setShowWomenWear)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <ul className="py-2">
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Pants</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Bra</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Pads</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Jewellery</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Ear-ring</li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li
            className="relative cursor-pointer hover:text-gray-300"
            onMouseEnter={() => handleMouseEnter(setShowBeverages)}
            onMouseLeave={handleMouseLeave}
          >
            Beverages
            {showBeverages && (
              <div
                className="absolute top-6 left-0 w-[200px] z-50"
                onMouseEnter={() => handleMouseEnter(setShowBeverages)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="h-14 w-full"></div>
                <div className="bg-white text-black shadow-lg rounded-md">
                  <ul className="py-2">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative"
                      onMouseEnter={() => handleMouseEnter(setShowCereals)}
                      onMouseLeave={handleMouseLeave}
                    >
                      Cereals
                      {showCereals && (
                        <div
                          className="absolute top-0 left-full bg-white shadow-lg rounded-md min-w-[150px] ml-1"
                          onMouseEnter={() => handleMouseEnter(setShowCereals)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <ul className="py-2">
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Milk</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Corn-flakes</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Golden-morn</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Nescafe</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Indomie</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Butter</li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative"
                      onMouseEnter={() => handleMouseEnter(setShowTea)}
                      onMouseLeave={handleMouseLeave}
                    >
                      Tea
                      {showTea && (
                        <div
                          className="absolute top-0 left-full bg-white shadow-lg rounded-md min-w-[150px] ml-1"
                          onMouseEnter={() => handleMouseEnter(setShowTea)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <ul className="py-2">
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Choco</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Cowbell</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">3-crown</li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li
            className="relative cursor-pointer hover:text-gray-300"
            onMouseEnter={() => handleMouseEnter(setShowGadgets)}
            onMouseLeave={handleMouseLeave}
          >
            Gadgets
            {showGadgets && (
              <div
                className="absolute top-6 left-0 w-[200px] z-50"
                onMouseEnter={() => handleMouseEnter(setShowGadgets)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="h-14 w-full"></div>
                <div className="bg-white text-black shadow-lg rounded-md">
                  <ul className="py-2">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative"
                      onMouseEnter={() => handleMouseEnter(setShowPhones)}
                      onMouseLeave={handleMouseLeave}
                    >
                      Phones
                      {showPhones && (
                        <div
                          className="absolute top-0 left-full bg-white shadow-lg rounded-md min-w-[150px] ml-1"
                          onMouseEnter={() => handleMouseEnter(setShowPhones)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <ul className="py-2">
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">iPhone</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Android</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Samsung Galaxy Tab</li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative"
                      onMouseEnter={() => handleMouseEnter(setShowAppliances)}
                      onMouseLeave={handleMouseLeave}
                    >
                      Home appliances
                      {showAppliances && (
                        <div
                          className="absolute top-0 left-full bg-white shadow-lg rounded-md min-w-[150px] ml-1"
                          onMouseEnter={() => handleMouseEnter(setShowAppliances)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <ul className="py-2">
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">TV appliances</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Cooker</li>
                            <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">TV</li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className="flex gap-2">
        <Button className="h-7 bg-red-700 hover:bg-red-800" variant="ghost">
          Logout
        </Button>
        <Button className="h-7 bg-blue-800 hover:bg-blue-900" variant="ghost">
          Sign in
        </Button>
      </div>
    </div>
  )
}
