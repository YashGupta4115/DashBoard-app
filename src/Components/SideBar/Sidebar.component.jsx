import { Link } from "react-router-dom";
import "./sidebar.styles.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { SideBarContext } from "../../Context/contextProvider";

const Sidebar = () => {
  const { isSideBarOpen, setIsSideBarOpen, toggleSideBar, screenSize } =
    useContext(SideBarContext);

  const handleCloseSideBar = () => {
    if (isSideBarOpen && screenSize <= 900) {
      setIsSideBarOpen(false);
    }
  };

  return (
    isSideBarOpen && (
      <div className="sideBar-container ">
        <div className="nameAndIcon">
          <div className="companyName">Vogue Variety</div>
          <IoIosCloseCircleOutline
            className="close-icon"
            onClick={toggleSideBar}
          />
        </div>
        <div className="dashBoard-continer sidebar-child">
          <span className="sidebar-child-title">DASHBOARD</span>
          <Link className="sidebar-child-link">E-commerce</Link>
        </div>

        <div className="pages-container  sidebar-child">
          <span className="sidebar-child-title">PAGES</span>
          <Link
            className="sidebar-child-link"
            to="/pages/orders"
            onClick={handleCloseSideBar}
          >
            Orders
          </Link>
          <Link
            className="sidebar-child-link"
            to="/pages/customers"
            onClick={handleCloseSideBar}
          >
            Customers
          </Link>
          <Link
            className="sidebar-child-link"
            to="/pages/employees"
            onClick={handleCloseSideBar}
          >
            Employees
          </Link>
        </div>

        <div className="apps-container  sidebar-child">
          <span className="sidebar-child-title">APPS</span>
          <Link
            className="sidebar-child-link"
            to="/apps/calendar"
            onClick={handleCloseSideBar}
          >
            Calendar
          </Link>
          <Link
            className="sidebar-child-link"
            to="/apps/colorPicker"
            onClick={handleCloseSideBar}
          >
            ColorPicker
          </Link>
          <Link
            className="sidebar-child-link"
            to="/apps/kanban"
            onClick={handleCloseSideBar}
          >
            Kanban
          </Link>
          <Link
            className="sidebar-child-link"
            to="/apps/editor"
            onClick={handleCloseSideBar}
          >
            Editor
          </Link>
        </div>

        <div className="charts-container sidebar-child ">
          <span className="sidebar-child-title">CHARTS</span>
          <Link
            className="sidebar-child-link"
            to="/charts/Area"
            onClick={handleCloseSideBar}
          >
            Area
          </Link>
          <Link
            className="sidebar-child-link"
            to="/charts/line"
            onClick={handleCloseSideBar}
          >
            Line
          </Link>
          <Link
            className="sidebar-child-link"
            to="/charts/color"
            onClick={handleCloseSideBar}
          >
            Color
          </Link>
          <Link
            className="sidebar-child-link"
            to="/charts/pie"
            onClick={handleCloseSideBar}
          >
            Pie
          </Link>
          <Link
            className="sidebar-child-link"
            to="/charts/finance"
            onClick={handleCloseSideBar}
          >
            Finance
          </Link>
          <Link
            className="sidebar-child-link"
            to="/charts/pyramid"
            onClick={handleCloseSideBar}
          >
            Pyramid
          </Link>
          <Link
            className="sidebar-child-link"
            to="/charts/bar"
            onClick={handleCloseSideBar}
          >
            Bar
          </Link>
        </div>
      </div>
    )
  );
};

export default Sidebar;
