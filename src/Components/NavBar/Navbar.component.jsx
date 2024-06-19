import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import "./navBar.styles.css";
import { useContext } from "react";
import { SideBarContext } from "../context/sideBarContext";

const Navbar = () => {
  const { isSideBarOpen, toggleSideBar } = useContext(SideBarContext);

  return (
    <div className="navbar-container">
      <div className="left-navbar-container">
        {!isSideBarOpen && (
          <>
            <RxHamburgerMenu className="navBar-icons" onClick={toggleSideBar} />
            <span className="navBar-company-title">VougeVariety</span>
          </>
        )}
        <IoSearch className="navBar-icons" />
      </div>
      <div className="right-navbar-container">
        <LuShoppingCart className="navBar-icons" />
        <FiMessageSquare className="navBar-icons" />
        <LuBell className="navBar-icons" />
        <FaRegCircle className="navBar-icons" />
      </div>
    </div>
  );
};

export default Navbar;
