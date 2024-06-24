import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import "./Navbar.styles.css";
import { useContext, useEffect } from "react";
import { SideBarContext } from "../../Context/contextProvider";
import Chat from "../ChartsItems/Chat/Chat.jsx";
import UserProfile from "../ChartsItems/UserProfile/UserProfile.jsx";
import Cart from "../ChartsItems/Cart/Cart.jsx";
import Notifications from "../ChartsItems/Notifications/Notifications.jsx";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { useTheme } from "../../Context/themeContext.jsx";
import NavBarItem from "./NavBar.item.jsx";
import navItems from "../../Assests/navBar.json";

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

  const { displayMode, theme } = useTheme();

  return (
    <div
      className="navbar-container"
      style={{
        backgroundColor: displayMode === "light" ? "white" : "#20232A",
        color: theme,
      }}
    >
      <div className="left-navbar-container">
        {!isSideBarOpen && (
          <>
            <RxHamburgerMenu className="navBar-icons" onClick={toggleSideBar} />
            <Link style={{ color: "black", textDecoration: "none" }} to="/">
              <span style={{ color: theme }} className="navBar-company-title">
                VougeVariety
              </span>
            </Link>
          </>
        )}
        <IoSearch className="navBar-icons" />
      </div>

      <div className="right-navbar-container">
        {navItems.navBar.map((item) => {
          return <NavBarItem item={item} handleClick={handleClick} />;
        })}

        {/* user-Profile section will remain at constant position */}
        <div className="navBar-icons-container">
          <AiOutlineUser
            className="navBar-icons"
            onClick={() => handleClick("userProfile")}
          />
        </div>
        {/* user-profile section ends */}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notifications />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.cart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
