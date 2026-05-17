import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import LowerNavbar from "./LowerNavbar";

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="mx-auto shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <div className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              <span>Shopsy</span>
            </div>
          </div>
          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-50 bg-white sm:w-50 group-hover:w-75 transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="absolute text-gray-500 group-hover:text-primary top-1/2 -translate-y-1/2 right-3 text-2xl" />
            </div>
            {/* order button */}
            <button
              onClick={()=>handleOrderPopup()}
              className="bg-linear-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <div>
              <DarkMode></DarkMode>
            </div>
          </div>
        </div>
      </div>
      <LowerNavbar></LowerNavbar>
    </div>
  );
};

export default Navbar;
