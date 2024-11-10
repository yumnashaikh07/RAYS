import Image from 'next/image';
import ContactIcons from './icon';
export default function Footer(){
    return(

<footer className="hero-bg h-[400px]">
        <section className="flex justify-between gap-9 w-full h-[386px]">
          <div className=" w-1/2 ml-24 mt-11 justify-center items-center ">
            <h1 className=" text-white mb-5 font-bold text-3xl">Join the RAYS Revolution</h1>
            <p className=" text-lg text-white font-extralight mt-3 ">
            Unleash your unique style with our trendy tote bags.
            </p>
            <p className=" text-lg text-white font-extralight ">
            Designed each bag with a blend of  fashion and function.
            </p>
            <p className=" text-lg text-white font-extralight">
            Be part of a movement that celebrates individuality and sustainability!
            </p>
            <h1 className=" text-3xl text-white font-bold mt-5 ">Follow us</h1>
            <ContactIcons/>
          </div>
          <div className="flex-col">
            <div className="text-white mt-16 text-2xl font-bold ">
              <h2>Our Instagram Shop</h2>
            </div>
            <div className="flex gap-3 mr-24 mt-5 items-center">
              <div>
                <Image
                  src="/tote44.jpg"
                  alt="footer"
                  width={175}
                  height={185}
                  quality={100}
                />
              </div>
              <div>
                <Image
                  src="/tote01.jpeg"
                  alt="footer"
                  width={175}
                  height={185}
                  quality={100}
                />
              </div>
              <div>
                <Image
                  src="/tote55.jpg"
                  alt="footer"
                  width={175}
                  height={185}
                  quality={100}
                />
              </div>
              <div>
                <Image
                  src="/tote2.jpg"
                  alt="footer"
                  width={175}
                  height={185}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </section>
      </footer>
              
    )
}