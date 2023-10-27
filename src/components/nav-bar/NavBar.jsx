import { BiSolidChevronDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8 cursor-pointer">
        <li className="text-base text-[#343f52] font-bold hover:text-[#5271FF]">
          Why
        </li>
        <li className="text-base text-[#343f52] font-bold hover:text-[#5271FF] flex items-center gap-2 group/item">
          Industries
          <BiSolidChevronDown />
          <ul className="group-hover/item:translate-y-[170px] group-hover/item:visible invisible shadow-listShadow bg-white py-4 pl-6 min-w-[200px] text-[#343f52] rounded-lg absolute translate-x-[-10%] translate-y-[190px] transform transition-transform duration-500 ease-in-out">
            <li className="mb-2.5 cursor-pointer hover:text-[#5271FF]">
              Travel
            </li>
            <li className="mb-2.5 cursor-pointer hover:text-[#5271FF]">
              Automotive
            </li>
            <li className="mb-2.5 cursor-pointer hover:text-[#5271FF]">
              Banking
            </li>
            <li className="mb-2.5 cursor-pointer hover:text-[#5271FF]">
              Capital Markets
            </li>
            <li className="mb-2.5 cursor-pointer hover:text-[#5271FF]">
              Healthcare
            </li>
            <li className="mb-2.5 cursor-pointer hover:text-[#5271FF]">
              Digital
            </li>
            <li>View all</li>
          </ul>
        </li>
        <li className="text-base text-[#343f52] font-bold hover:text-[#5271FF]">
          Find Dev
        </li>
        <li className="text-base text-[#343f52] font-bold hover:text-[#5271FF]">
          Apply as Vendor
        </li>
        <li className="transform transition-transform duration-500 ease-in-out hover:translate-y-[-0.35rem] hover:shadow-btnShadow text-sm text-white font-bold py-3 px-6 rounded-full bg-[#5271FF]">
          <NavLink to="/hire">Hire Dev</NavLink>
        </li>
        <li className="text-base text-[#343f52] font-bold hover:text-[#5271FF]">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
