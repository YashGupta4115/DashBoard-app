import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import "./Navbar.styles.css";
import { useContext, useEffect } from "react";
import { SideBarContext } from "../../Context/contextProvider";
import Chat from "../Chat/Chat.jsx";
import UserProfile from "../UserProfile/UserProfile.jsx";
import Cart from "../Cart/Cart.jsx";
import Notifications from "../Notifications/Notifications.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {
    isSideBarOpen,
    setIsSideBarOpen,
    toggleSideBar,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useContext(SideBarContext);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    }; // to track the width of the screen initial render
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (screenSize < 900) {
      setIsSideBarOpen(false);
    } else {
      setIsSideBarOpen(true);
    }
  }, [screenSize, setIsSideBarOpen]); // to handle sidebar toggle when screen is wide enough

  return (
    <div className="navbar-container">
      <div className="left-navbar-container">
        {!isSideBarOpen && (
          <>
            <RxHamburgerMenu className="navBar-icons" onClick={toggleSideBar} />
            <Link style={{ color: "black", textDecoration: "none" }} to="/">
              <span className="navBar-company-title">VougeVariety</span>
            </Link>
          </>
        )}
        <IoSearch className="navBar-icons" />
      </div>
      <div className="right-navbar-container">
        <div className="navBar-icons-container">
          <LuShoppingCart
            className="navBar-icons"
            onClick={() => handleClick("cart")}
          />
          <span className="navBar-icon-value">10</span>
        </div>
        <div className="navBar-icons-container">
          <FiMessageSquare
            className="navBar-icons"
            onClick={() => handleClick("chat")}
          />
          <span className="navBar-icon-value">10</span>
        </div>

        <div className="navBar-icons-container">
          <LuBell
            className="navBar-icons"
            onClick={() => handleClick("notifcation")}
          />
          <span className="navBar-icon-value">10</span>
        </div>

        <div className="navBar-icons-container">
          <FaRegCircle
            className="navBar-icons"
            onClick={() => handleClick("userProfile")}
          />
        </div>

        {isClicked.chat && <Chat />}
        {isClicked.notifcation && <Notifications />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.cart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
