/* eslint-disable react/prop-types */
import Logo from "../../assets/AugmntX-Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Container from "../container/Container";
import Menu from "../sidebar-menu/Menu";
import NavBar from "../nav-bar/NavBar";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function showMenuHandler() {
    setShowMenu((prevState) => !prevState);
  }
  return (
    <>
      {showMenu && (
        <div
          className="bg-[#808080ad] w-full h-screen top-0 fixed"
          onClick={showMenuHandler}
        ></div>
      )}
      <header className="py-5 bg-[#f3fafe]">
        <Menu showMenu={showMenu} showMenuHandler={showMenuHandler} />
        <Container className="flex items-center justify-between">
          <div className="w-[115px]">
            <img src={Logo} alt="Augmntx-logo" className="max-w-full" />
          </div>
          <NavBar />
          <div className="text-[24px] z-10 flex items-center gap-2 lg:hidden">
            <a
              href="https://augmntx.com/hire"
              className="hidden md:block text-sm text-white font-bold py-4 px-6 rounded-full bg-[#5271FF]"
            >
              Hire Talent
            </a>
            <RxHamburgerMenu className="cursor-pointer" onClick={() => showMenuHandler()} />
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
