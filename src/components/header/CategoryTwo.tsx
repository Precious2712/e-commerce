'use client';

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image";

export function CategoryTwo() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
                ease: "easeOut" as const,
            },
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: "easeInOut" as const,
            },
        },
    }

    return (
        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-4" variants={containerVariants}>
            <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
            >
                <Image
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/658597/1.jpg?9713"
                    alt="Smart phones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-600/40 to-transparent flex flex-col items-center justify-center text-white">
                    <h2 className="text-xs lg:text-xl font-bold mb-2">Women</h2>
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

            <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
            >
                <Image
                    src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/fashion.png"
                    alt="Smart phones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-600/40 to-transparent flex flex-col items-center justify-center text-white">
                    <h2 className="text-xs lg:text-xl font-bold mb-2">Men</h2>
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

            <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
            >
                <Image
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/5601763/1.jpg?0306"
                    alt="Smart phones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-600/40 to-transparent flex flex-col items-center justify-center text-white">
                    <h2 className="text-xs lg:text-xl font-bold mb-2">Teen-boy-fashion</h2>
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

            <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
            >
                <Image
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/0274463/1.jpg?4409"
                    alt="Smart phones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-600/40 to-transparent flex flex-col items-center justify-center text-white">
                    <h2 className="text-xs lg:text-xl font-bold mb-2">Teen-girl-fashion</h2>
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

            <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
            >
                <Image
                    src="https://ng.jumia.is/cms/0-0-0-sandbox/freelinks/mobile-accessories_300x300.png"
                    alt="Smart phones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <Image
                    src="https://ng.jumia.is/cms/0-0-0-sandbox/freelinks/mobile-accessories_300x300.png"
                    alt="Smart phones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-600/40 to-transparent flex flex-col items-center justify-center text-white">
                    <h2 className="text-xs lg:text-xl font-bold mb-2">Accessories</h2>
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

            <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
            >
                <Image
                    src="https://shoprite.ng/wp-content/uploads/2023/06/Milk-Powder-Peak-400G-Pack-2799.99-300x300.jpg"
                    alt="Smart phones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-600/40 to-transparent flex flex-col items-center justify-center text-white">
                    <h2 className="text-xs lg:text-xl font-bold mb-2">Beverages</h2>
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

            <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
            >
                <Image
                    src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/appliances.png"
                    alt="Smart phones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />

                <Image
                    src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/appliances.png"
                    alt="Smart phones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-600/40 to-transparent flex flex-col items-center justify-center text-white">
                    <h2 className="text-xs lg:text-xl font-bold mb-2">Home-Appliances</h2>
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

            <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
            >
                <Image
                    src="https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/electronics.png"
                    alt="Smart phones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-600/40 to-transparent flex flex-col items-center justify-center text-white">
                    <h2 className="text-xs lg:text-xl font-bold mb-2">Tv & Audio</h2>
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
    )
}