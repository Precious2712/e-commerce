'use client';

import { HomeNavBar } from "@/components/header/HomeNavBar";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { useAppContext } from "@/components/useContext/AppContext";
import { bakery } from "@/data/production/bakery";
import { Badge, Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

export default function Accessories() {
    const { handleAddToCart } = useAppContext();
    
    return (
        <div className="bg-black pb-24">
            <HomeNavBar />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-24 w-[95%] m-auto">
                {bakery.map((product) => (
                    <Card
                        key={product.id}
                        className="group border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20 p-0 bg-black overflow-hidden"
                    >
                        <div className="relative h-48 lg:h-56 overflow-hidden bg-muted">
                            {(product.badge || product.isNew) && (
                                <Badge
                                    fontVariant={product.badge === "Sale" ? "destructive" : "secondary"}
                                    className="absolute top-2 left-2 z-10 text-xs"
                                >
                                    {product.badge || "New"}
                                </Badge>
                            )}

                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-2 right-2 z-10 h-8 w-8 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Heart className="h-4 w-4" />
                            </Button>

                            <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <CardFooter className="p-3 lg:p-4 flex flex-col items-start gap-2">
                            <p className="font-medium text-[10.5px] lg:text-sm line-clamp-2 text-white group-hover:text-white transition-colors">
                                {product.name}
                            </p>

                            <div className="flex items-center gap-1">
                                <div className="flex items-center">
                                    <Star className="h-3 w-3 lg:h-4 lg:w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs lg:text-sm font-medium ml-1">{product.rating}</span>
                                </div>
                                <span className="text-xs text-muted-foreground">({product.reviews})</span>
                            </div>

                            <div className="flex items-center gap-2 w-full">
                                <span className="font-bold text-sm lg:text-sm text-white">${product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-xs lg:text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                                )}
                            </div>

                            <Button onClick={() => handleAddToCart(product)} className="w-full mt-2 h-8 lg:h-9 text-xs lg:text-sm text-white bg-black hover:bg-blue-900" variant="outline">
                                <ShoppingCart className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                                Add to Cart
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>


        </div>
    )
}