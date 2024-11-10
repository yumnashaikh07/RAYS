import { FaEnvelope, FaPhone, FaLinkedin ,FaInstagram} from "react-icons/fa";
const ContactIcons = () => {
    return (
      <main>
      <section className=" mx-9 my-3 hero-bg flex space-x-16">
        <a
          href="mailto:your-email@example.com"
          aria-label="Email"
          className="rounded-full border-2 p-3 hover:text-white"
        >
          <FaEnvelope size={27} />
        </a>
        <a
          href="tel:+1234567890"
          aria-label="Phone"
          className=" rounded-full border-2 p-3 hover:text-white"
        >
          <FaPhone size={27} />
         
        </a>
        
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="rounded-full border-2 p-3 hover:text-white"
        >
          <FaInstagram size={30} />
        </a>
        {/* <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label=""
          className="rounded-full border-2 p-7 hover:text-white">
        </a>
          <FaInstagram size={30} /> */}
        </section>
        <section className=" ml-9 font-semibold text-black flex space-x-[73px]">
        <div className="m-2">Email</div>
        <div className="m-2 ">Phone</div>
        <div className=" m-2">LinkedIn</div>
        {/* <div className="mr-16">Instagram</div> */}
        </section>
      </main>
    );
  };
  
  export default ContactIcons;
  