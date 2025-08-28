"use client"

import { motion } from "framer-motion"
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";


export function CategoryOne() {
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
                    src="https://ng.jumia.is/cms/0-1-category-pages/phones-tablets/2025/300x400/Phones_Tablet/iphone-300X400.png"
                    alt="Smart phones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent flex flex-col items-center justify-center text-white">
                    <h2 className="text-xs lg:text-xl font-bold mb-2">Smart Phone</h2>
                    <p className="text-xs mb-3 text-center px-2">Latest technology</p>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link href='/items/phones'>
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent text-xs transition-all duration-300 cursor-pointer"
                            >
                                Discover More
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
            >
                <Image
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/7614062/1.jpg?2251"
                    alt="Smart phones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-600/40 to-transparent flex flex-col items-center justify-center text-white">
                    <h2 className="text-xs lg:text-xl font-bold mb-2">Laptop</h2>
                    <p className="text-xs mb-3 text-center px-2">High performance</p>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link href='/items/laptop'>
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-white text-white hover:bg-white hover:text-purple-900 bg-transparent text-xs transition-all duration-300 cursor-pointer"
                            >
                                Discover More
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[250px] shadow-lg"
                variants={cardVariants}
                whileHover="hover"
            >
                <Image
                    src="https://shoprite.ng/wp-content/uploads/2023/03/fng.jpg"
                    alt="Smart phones"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-600/40 to-transparent flex flex-col items-center justify-center text-white">
                    <h2 className="text-xs lg:text-xl font-bold mb-2">Vegetables & Fruits</h2>
                    <p className="text-xs mb-3 text-center px-2">Organic & healthy</p>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link href='/items/accessories-store'>
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent text-xs transition-all duration-300 cursor-pointer"
                            >
                                Discover More
                            </Button>
                        </Link>
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

                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-600/40 to-transparent flex flex-col items-center justify-center text-white">
                    <h2 className="text-xs lg:text-xl font-bold mb-2">Bakery Product</h2>
                    <p className="text-xs mb-3 text-center px-2">Fresh & natural</p>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link href='/items/bakery-products'>
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-white text-white hover:bg-white hover:text-orange-900 bg-transparent text-xs transition-all duration-300 cursor-pointer"
                            >
                                Discover More
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )

}
