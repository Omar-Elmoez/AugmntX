import { BiMessage } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

function Contact() {
  const [showContact, setShowContact] = useState(false);
  const [current, setCurrent] = useState(0);
  function showContactHandler() {
    setShowContact((prevState) => !prevState);
  }
  return (
    <div className="fixed z-20 bottom-[10%] right-[17px] grid gap-2">
      {showContact && (
        <div
          className="w-[40px] h-[40px] text-2xl bg-gradient-to-r from-[#4ECDC4] to-[#556270] text-white rounded-[40%] flex justify-center items-center cursor-pointer hover:text-[#5271FF]"
          onMouseEnter={() => setCurrent(3)}
          onMouseLeave={() => setCurrent(0)}
        >
          <HiOutlineMail />
          {current === 3 && (
            <span className="absolute right-full mr-2 font-Roboto rounded-xl text-sm py-0.5 px-1.5 text-black w-max bg-[#E5E5E5]">
              Send details on Email
            </span>
          )}
        </div>
      )}
      {showContact && (
        <div
          className="w-[40px] h-[40px] text-2xl text-white rounded-[40%] flex justify-center items-center bg-gradient-to-r from-[#25D366] to-[#25D366] cursor-pointer hover:text-[#5271FF]"
          onMouseEnter={() => setCurrent(2)}
          onMouseLeave={() => setCurrent(0)}
        >
          <IoLogoWhatsapp />
          {current === 2 && (
            <span className="absolute right-full mr-2 font-Roboto rounded-xl text-sm py-0.5 px-1.5 text-black w-max bg-[#E5E5E5]">
              Quick Chat on WhatsApp
            </span>
          )}
        </div>
      )}
      <div
        className="relative w-[40px] h-[40px] text-2xl text-[#5271ff] bg-transparent rounded-[40%] flex justify-center items-center shadow-messageShadow cursor-pointer"
        onClick={showContactHandler}
        onMouseEnter={() => setCurrent(1)}
        onMouseLeave={() => setCurrent(0)}
      >
        <BiMessage />
        {current === 1 && (
          <span className="absolute right-full mr-2 font-Roboto rounded-xl text-sm py-0.5 px-1.5 text-black w-max bg-[#E5E5E5]">
            Need help with finding developers? Lets Talk
          </span>
        )}
      </div>
    </div>
  );
}

export default Contact;
