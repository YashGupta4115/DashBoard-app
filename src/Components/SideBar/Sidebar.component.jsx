import { Link } from "react-router-dom";
import "./sidebar.styles.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { SideBarContext } from "../../Context/Sidebar.context";

const Sidebar = () => {
  const { isSideBarOpen, toggleSideBar } = useContext(SideBarContext);

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
          <Link className="sidebar-child-link" to="/pages/orders">
            Orders
          </Link>
          <Link className="sidebar-child-link" to="/pages/customers">
            Customers
          </Link>
          <Link className="sidebar-child-link" to="/pages/employees">
            Employees
          </Link>
        </div>

        <div className="apps-container  sidebar-child">
          <span className="sidebar-child-title">APPS</span>
          <Link className="sidebar-child-link" to="/apps/calendar">
            Calendar
          </Link>
          <Link className="sidebar-child-link" to="/apps/colorPicker">
            ColorPicker
          </Link>
          <Link className="sidebar-child-link" to="/apps/kanban">
            Kanban
          </Link>
          <Link className="sidebar-child-link" to="/apps/editor">
            Editor
          </Link>
        </div>

        <div className="charts-container sidebar-child ">
          <span className="sidebar-child-title">CHARTS</span>
          <Link className="sidebar-child-link" to="/charts/Area">
            Area
          </Link>
          <Link className="sidebar-child-link" to="/charts/line">
            Line
          </Link>
          <Link className="sidebar-child-link" to="/charts/color">
            Color
          </Link>
          <Link className="sidebar-child-link" to="/charts/pie">
            Pie
          </Link>
          <Link className="sidebar-child-link" to="/charts/finance">
            Finance
          </Link>
          <Link className="sidebar-child-link" to="/charts/pyramid">
            Pyramid
          </Link>
          <Link className="sidebar-child-link" to="/charts/bar">
            Bar
          </Link>
        </div>
      </div>
    )
  );
};

export default Sidebar;
