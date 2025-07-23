'use client'

import products from "@/data/prod/product";
import Image from "next/image";
import Link from "next/link";


const ProductList = () => {

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <h2 className="text-2xl font-bold text-center mb-6">Product List</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
                {products.map((el) => (
                    <div
                        key={el.id}
                        className=" p-3.5 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >

                        <div className="relative w-full h-52">
                            <Image
                                src={el.image}
                                alt={el.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-900">${el.price}</h3>
                            <p className="text-sm text-gray-600 mt-1">{el.description.slice(0, 62)}...</p>

                            <Link href={`/product/${el.id}`}>
                                <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default ProductList;
