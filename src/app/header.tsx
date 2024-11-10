import Link from "next/link"

export default function Header(){
    return(
    <main >
        <header className="header-bg h-[70px] ">
            <div className="flex mb-3  items-center">
            <div className="header-font ml-3 text-3xl">RAYS</div>
        
            <nav className="text-xl  ml-80 custom-nav-font">
                <ul className="flex my-5 gap-12  ">
                <li><Link href='/Shop tote' className="hover:underline">Shop</Link></li>
                <li><Link href='/collection' className="hover:underline">Collection</Link></li>
                <li><Link href='/about' className="hover:underline">About</Link></li>
                <li><Link href='/lookbook' className="hover:underline">Lookbook</Link></li>
                </ul>
            </nav>
            </div>
            
        </header>
        {/* <section className=" flex gap-x-3 justify-between" >
            <Image
                    // src={"/RAYS3.jpg"} 
                    // src={"/RAYS.jpg"}
                    src={"/RAYS2.jpg"}
                    width={700}
                    height={70}
                    alt="Logo"
                    quality={100}
                    />
            <div className="border-2 m-20 mt-44 h-[300px] w-[600px] header-bg shadow-xl ">
                <h1 className="text-4xl  font-bold p-3  ">Wrap Your Loved Ones in</h1>
                <h1 className="text-4xl  font-bold p-3 ml-9 "> Tote-ally Great Gifts!</h1>
                <p className="text-xl mt-5 p-3 ">Elevate your gifting with<span className="font-semibold"> RAY’S</span> trendy totes! Perfect for every personality, these tote-ally amazing gifts are sure to impress.</p>
            </div>
        </section>
        <div className="border-t border-black my-3 ml-2  w-[1250px]"></div>
        <section className="flex justify-between">
         <Image
        //  src={"/printify 1 (totebag).jpeg"}
        src={"/tote22.jpg"}
         alt=""
         width={400}
         height={500}
         />
         <Image
         src={"/tote2.jpg"}
         alt=""
         width={425}
         height={500}
         />
         <Image
         src={"/tote2back.jpg"}
         alt=""
         width={425}
         height={500}
         />
        </section>
        <div className="border-t border-black my-3 ml-2  w-[1250px]"></div>
        <section>
                <h1  className="flex justify-center mt-7 items-center text-3xl font-bold">Hot Selling Totes</h1>
        </section> */}
    </main>
    )
}