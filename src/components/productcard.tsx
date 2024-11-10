import Image from "next/image";
import React from "react";
interface ProductCardProps{
    title:string
    price: string
    image:string
}
 export default function ProductCard({title,price,image}:ProductCardProps){
    return(
        <div className="overflow-hidden text-center shadow-lg">
        <header>
            <Image 
            src={image}
            width={500}
            height={500}
            alt={title}
            className="w-72 h-72 object-cover cursor-pointer"/>
        </header>
        <blockquote className="p-9">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-black font-semibold">{price}</p>
        </blockquote>
        <footer>
            <button className="text-black hero-bg rounded-3xl hover:bg-yellow-100 p-4 mb-5">Add to Bag</button>
        </footer>
        </div>
    )
}