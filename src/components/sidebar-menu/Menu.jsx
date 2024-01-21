/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import ListItem from "../list-item/ListItem";
import IndustriesList from "../industries-list/IndustriesList";
import { useState } from "react";

function Menu(props) {
  const [showIndustriesList, setIndustriesList] = useState(false);
  function industriesListHandler() {
    setIndustriesList((prevState) => !prevState);
  }
  return (
    <aside
      className={`bg-[#1e2228] w-[300px] h-screen fixed left-0 top-0 transform transition-transform duration-500 ease-in-out ${
        props.showMenu ? "translate-x-0" : "translate-x-[-100%]"
      } py-6 z-20`}
    >
      <div className="w-3/4 mx-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-2xl font-semibold">AugmntX</h3>
          <div
            className="bg-[#303339] text-2xl text-white w-[36px] h-[36px] rounded-full flex items-center justify-center relative right-[-20px] cursor-pointer"
            onClick={() => props.showMenuHandler()}
          >
            <IoClose />
          </div>
        </div>
        <nav className="mt-6">
          <ul>
            <ListItem>Why</ListItem>
            <ListItem
              industriesListHandler={industriesListHandler}
            >
              <div className="flex items-center justify-between relative">
                Industries
                <IoMdArrowDropdown />
              </div>
              <IndustriesList showIndustriesList={showIndustriesList} />
            </ListItem>
            <ListItem>Find Dev</ListItem>
            <ListItem>Apply as Vendor</ListItem>
            <ListItem>Login</ListItem>
          </ul>
        </nav>
        <div className="mt-8 font-semibold text-white flex flex-col gap-1">
          <a href="https://augmntx.com/hire">Hire Dev</a>
          <a href="mailto:hello@augmntx.com">hello@augmntx.com</a>
          <a href="tel:+919820045154">+91 982 004 5154</a>
        </div>
        <div className="text-white flex items-center gap-4 mt-8">
          <BsLinkedin />
          <BsTwitter />
          <FaFacebookF />
          <BsInstagram />
        </div>
      </div>
    </aside>
  );
}

export default Menu;
