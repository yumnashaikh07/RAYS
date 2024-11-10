import { FaTruck ,FaCheckCircle,FaPhoneAlt ,FaStar ,FaShieldAlt } from "react-icons/fa";
import React from "react";
import ProductCard from "../components/productcard"
import Image from "next/image"


const products =[
  {
      title:'Eco',
      price:'RS: 500',
      image:"/tote01.jpeg",
  },
  {
      title:'Lemonade',
      price:'RS: 500',
      image:'/tote44.jpg',
  },
  {
      title:'Slay',
      price:'RS: 500',
      image:'/tote55.jpg',
  },
  {
      title:'Joy',
      price:'RS500',
      image:"/tote2.jpg",
  },
];


export default function Homepg(){
  return(
    <main>  
      <section className=" flex gap-x-3  md:flew-row  justify-between" >
    <Image
            // src={"/RAYS3.jpg"} 
            // src={"/RAYS.jpg"}
            src={"/RAYS2.jpg"}
            width={700}
            height={70}
            alt="Logo"
            quality={100}
            />
    <div className="border-2  m-5 mt-10 md:m-20 md:mt-44 h-auto md:h-[350px] w-full md:w-[600px] header-bg shadow-xl ">
        <h1 className="text-3xl md:text-4xl  font-bold p-3  ">Wrap Your Loved Ones in</h1>
        <h1 className="text-3xl md:text-4xl  font-bold p-3 ml-2 md:ml-9 "> Tote-ally Great Gifts!</h1>
        <p className=" text-lg md:text-xl mt-5 p-3 ">Elevate your gifting with<span className="font-semibold"> RAY’S</span> trendy totes! Perfect for every personality, these tote-ally amazing gifts are sure to impress.</p>
    <button className="bg-white rounded-sm text-black ml-0  md:ml-44 font-semibold p-3 px-5 md:px-7 text-lg md:text-xl">Shop Now</button>
    </div>

</section>
<div className="border-t border-black mb-16 ml-2   w-[1250px]"></div>
<section className="flex justify-between  mx-40">
  {/* <div> className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2"> */}
  <div>
<Image
//  src={"/printify 1 (totebag).jpeg"}
 src={"/tote555.jpg"}
 alt=""
 width={600}
 height={500}
 className="w-full"
 />
 <h1 className="text-2xl font-semibold hero-font ml-48 my-3">BACK</h1>
 </div>
 <div>
  <Image
 src={"/tote55.jpg"}
 alt=""
 width={600}
 height={500}
 className="w-full"
 />
 <h1 className="text-2xl font-semibold hero-font ml-48 my-3">FRONT</h1>
 </div>
</section>
 {/* <Image
 src={"/tote2.jpg"}
 alt=""
 width={225}
 height={500}
 className="w-full"
 />
 <Image
 src={"/tote2back.jpg"}
 alt=""
 width={225}
 height={500}
 className="w-full"
 /> */}
 
<div className="border-t border-black mt-9 ml-2  w-[1250px]"></div>
<section className="container mx-auto p-20">
  <h1  className="flex justify-center mb-20 items-center text-5xl font-bold">Hot Selling Totes</h1>    
<div className="gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  {products.map((product ,index) =>(
    <ProductCard
    key={index}
    title={product.title}
    price={product.price}
    image={product.image}/>
  ))}
</div>
</section>

<section>
<h1 className="flex justify-center mb-24 items-center text-5xl font-bold">Glimpse Of Our LookBook</h1> 
  
<div className=" my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
<div>
  <Image 
  src={"/tote4mockup.jpg"}
  height={100}
  width={300}
  alt="category"/>
  
  </div>
  <div>
    <Image 
  src={"/tote5.jpg"}
  height={100}
  width={300}
  alt="category"/>
  </div>
  <div>
    <Image 
  src={"/tote22.jpg"}
  height={100}
  width={300}
  alt="category"/>
  </div>
  </div>
  
</section>
{/* <div className="border-t border-black mt-11 ml-2  w-[1250px]"></div>
<section className="my-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20" >
  <div className="header-bg rounded-full ml-32 p-5  w-16 h-16 font-semibold text-xl ">01</div>
  <div className="header-bg rounded-full ml-[100px] p-5  w-16 h-16 font-semibold text-xl " >02</div>
  <div className="header-bg rounded-full ml-[100px] p-5  w-16 h-16 font-semibold text-xl ">03</div>
</section> */}

{/* <div className="border-t border-black  mb-11 ml-2 w-[1250px]"></div> */}

<section className="header-bg w-full h-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
<div className="border-2 flex justify-between ml-9 my-6 items-center font-semibold text-xl border-black py-3 px-16">
  <FaTruck size={50}/>Nationwide Delivery</div>

<div className="border-2 flex justify-between ml-9 my-6 items-center font-semibold text-xl border-black py-3 px-16">
  <FaPhoneAlt size={30}/>24/7 Support</div>
<div className="border-2  flex justify-between ml-9 mr-9 items-center font-semibold text-xl my-6 border-black py-3 px-16">
  <FaCheckCircle size={30}/>Quality Guaranteed</div>
</section>

</main>
  );
}