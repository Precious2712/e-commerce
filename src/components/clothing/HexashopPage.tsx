"use client"

import { Button } from "@/components/ui/button"
import { motion, Easing } from "framer-motion"

export function HexashopPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const, // Add type assertion
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const, // Add type assertion
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 bg-black/20 backdrop-blur-sm min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            {/* Hero Section - Reduced Height */}
            <motion.div className="relative overflow-hidden rounded-lg h-[300px] shadow-xl" variants={itemVariants}>
              <img
                src="https://sdmntprukwest.oaiusercontent.com/files/00000000-c484-6243-9e5c-6bf821e11f35/raw?se=2025-08-14T11%3A54%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=739dfb17-cc6c-5bf8-81d1-4c150fd87c5c&skoid=d9a3f0e9-8380-4267-a144-3f27388a5c5d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-13T19%3A41%3A07Z&ske=2025-08-14T19%3A41%3A07Z&sks=b&skv=2024-08-04&sig=VcIVLCafOCZCfonqJS10QD6MXkixMJGCR6gVrfUwraM%3D"
                alt="Fashion model"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex items-center justify-center">
                <motion.div
                  className="text-center text-white px-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <motion.h1
                    className="text-3xl lg:text-4xl font-bold mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    We Are Hexashop
                  </motion.h1>
                  <motion.p
                    className="text-base mb-4 max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    Lorem ipsum is simply dummy text of the printing and typesetting industry.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Smart Phone Category */}
            <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-4" variants={containerVariants}>
              <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <img
                  src="https://ng.jumia.is/cms/0-1-category-pages/phones-tablets/2025/300x400/Phones_Tablet/iphone-300X400.png"
                  alt="Smart phones"
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent flex flex-col items-center justify-center text-white">
                  <h2 className="text-xl font-bold mb-2">Smart Phone</h2>
                  <p className="text-xs mb-3 text-center px-2">Latest technology</p>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent text-xs transition-all duration-300"
                    >
                      Discover More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Laptop Category */}
              <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <img
                  src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/7614062/1.jpg?2251"
                  alt="Laptops"
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-600/40 to-transparent flex flex-col items-center justify-center text-white">
                  <h2 className="text-xl font-bold mb-2">Laptop</h2>
                  <p className="text-xs mb-3 text-center px-2">High performance</p>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-purple-900 bg-transparent text-xs transition-all duration-300"
                    >
                      Discover More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Fresh Product Category */}
              <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <img
                  src="/placeholder.svg?height=250&width=300"
                  alt="Fresh products"
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-600/40 to-transparent flex flex-col items-center justify-center text-white">
                  <h2 className="text-xl font-bold mb-2">Fresh Product</h2>
                  <p className="text-xs mb-3 text-center px-2">Organic & healthy</p>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent text-xs transition-all duration-300"
                    >
                      Discover More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Dairy Product Category */}
              <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <img
                  src="/placeholder.svg?height=250&width=300"
                  alt="Dairy products"
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-600/40 to-transparent flex flex-col items-center justify-center text-white">
                  <h2 className="text-xl font-bold mb-2">Dairy Product</h2>
                  <p className="text-xs mb-3 text-center px-2">Fresh & natural</p>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-orange-900 bg-transparent text-xs transition-all duration-300"
                    >
                      Discover More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Original Fashion Categories */}
            <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-4" variants={containerVariants}>
              {/* Women Category */}
              <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <img
                  src="/placeholder.svg?height=250&width=300"
                  alt="Women's fashion"
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-600/40 to-transparent flex flex-col items-center justify-center text-white">
                  <h2 className="text-xl font-bold mb-2">Women</h2>
                  <p className="text-xs mb-3 text-center px-2">Latest trends</p>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-pink-900 bg-transparent text-xs transition-all duration-300"
                    >
                      Discover More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Men Category */}
              <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <img
                  src="/placeholder.svg?height=250&width=300"
                  alt="Men's fashion"
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-600/40 to-transparent flex flex-col items-center justify-center text-white">
                  <h2 className="text-xl font-bold mb-2">Men</h2>
                  <p className="text-xs mb-3 text-center px-2">Style & comfort</p>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent text-xs transition-all duration-300"
                    >
                      Discover More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Kids Category */}
              <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <img
                  src="/placeholder.svg?height=250&width=300"
                  alt="Kids fashion"
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-600/40 to-transparent flex flex-col items-center justify-center text-white">
                  <h2 className="text-xl font-bold mb-2">Kids</h2>
                  <p className="text-xs mb-3 text-center px-2">Fun & colorful</p>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-cyan-900 bg-transparent text-xs transition-all duration-300"
                    >
                      Discover More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Accessories Category */}
              <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <img
                  src="/placeholder.svg?height=250&width=300"
                  alt="Fashion accessories"
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-600/40 to-transparent flex flex-col items-center justify-center text-white">
                  <h2 className="text-xl font-bold mb-2">Accessories</h2>
                  <p className="text-xs mb-3 text-center px-2">Complete your look</p>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-amber-900 bg-transparent text-xs transition-all duration-300"
                    >
                      Discover More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}