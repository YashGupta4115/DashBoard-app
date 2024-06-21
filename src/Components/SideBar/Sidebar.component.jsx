import { Link } from "react-router-dom";
import "./sidebar.styles.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext, useState } from "react";
import { SideBarContext } from "../../Context/contextProvider";
import { ThemeProvider, useTheme } from "../../Context/themeContext";

const Sidebar = () => {
  const { isSideBarOpen, setIsSideBarOpen, toggleSideBar, screenSize } =
    useContext(SideBarContext);

  const defaultPage = {
    eCommerce: false,
    orders: false,
    customers: false,
    employees: false,
    Line: false,
    Area: false,
    Pie: false,
    Pyramid: false,
    Bar: false,
    ColoraMap: false,
    ColorPicker: false,
    Kanban: false,
    Calendar: false,
    Editor: false,
    finance: false,
  };

  const [pageSelected, setPageSelected] = useState(defaultPage);

  const handleSideBar = (page) => {
    if (isSideBarOpen && screenSize <= 900) {
      setIsSideBarOpen(false);
    }
    setPageSelected({
      ...defaultPage,
      [page]: true,
    });
  };
  const { theme, toggleTheme } = useTheme();

  const darkThemeBackground = "#33373E";
  const darkThemeColor = "#f0f0f0";

  return (
    isSideBarOpen && (
      <div
        className="sideBar-container "
        style={{
          backgroundColor: theme === "light" ? "" : darkThemeBackground,
          color: theme === "light" ? "" : darkThemeColor,
        }}
      >
        <div className="nameAndIcon">
          <div className="companyName">Vogue Variety</div>
          <IoIosCloseCircleOutline
            className="close-icon"
            onClick={toggleSideBar}
          />
        </div>
        <div className="dashBoard-continer sidebar-child">
          <span className="sidebar-child-title">DASHBOARD</span>
          <Link
            className={`sidebar-child-link ${
              pageSelected["eCommerce"] ? "pageSelected" : ""
            }`}
            to="/"
            onClick={() => {
              handleSideBar("eCommerce");
            }}
          >
            E-commerce
          </Link>
        </div>
        <div className="pages-container  sidebar-child">
          <span className="sidebar-child-title">PAGES</span>
          <Link
            className={`sidebar-child-link ${
              pageSelected["orders"] ? "pageSelected" : ""
            }`}
            to="/pages/orders"
            onClick={() => handleSideBar("orders")}
          >
            Orders
          </Link>
          <Link
            className={`sidebar-child-link ${
              pageSelected["customers"] ? "pageSelected" : ""
            }`}
            to="/pages/customers"
            onClick={() => handleSideBar("customers")}
          >
            Customers
          </Link>
          <Link
            className={`sidebar-child-link ${
              pageSelected["employees"] ? "pageSelected" : ""
            }`}
            to="/pages/employees"
            onClick={() => handleSideBar("employees")}
          >
            Employees
          </Link>
        </div>

        <div className="apps-container  sidebar-child">
          <span className="sidebar-child-title">APPS</span>
          <Link
            className={`sidebar-child-link ${
              pageSelected["Calendar"] ? "pageSelected" : ""
            }`}
            to="/apps/calendar"
            onClick={() => handleSideBar("Calendar")}
          >
            Calendar
          </Link>
          <Link
            className={`sidebar-child-link ${
              pageSelected["ColorPicker"] ? "pageSelected" : ""
            }`}
            to="/apps/colorPicker"
            onClick={() => handleSideBar("ColorPicker")}
          >
            ColorPicker
          </Link>
          <Link
            className={`sidebar-child-link ${
              pageSelected["Kanban"] ? "pageSelected" : ""
            }`}
            to="/apps/kanban"
            onClick={() => handleSideBar("Kanban")}
          >
            Kanban
          </Link>
          <Link
            className={`sidebar-child-link ${
              pageSelected["Editor"] ? "pageSelected" : ""
            }`}
            to="/apps/editor"
            onClick={() => handleSideBar("Editor")}
          >
            Editor
          </Link>
        </div>

        <div className="charts-container sidebar-child ">
          <span className="sidebar-child-title">CHARTS</span>
          <Link
            className={`sidebar-child-link ${
              pageSelected["Area"] ? "pageSelected" : ""
            }`}
            to="/charts/Area"
            onClick={() => handleSideBar("Area")}
          >
            Area
          </Link>
          <Link
            className={`sidebar-child-link ${
              pageSelected["Line"] ? "pageSelected" : ""
            }`}
            to="/charts/line"
            onClick={() => handleSideBar("Line")}
          >
            Line
          </Link>
          <Link
            className={`sidebar-child-link ${
              pageSelected["Color"] ? "pageSelected" : ""
            }`}
            to="/charts/color"
            onClick={() => handleSideBar("Color")}
          >
            Color
          </Link>
          <Link
            className={`sidebar-child-link ${
              pageSelected["Pie"] ? "pageSelected" : ""
            }`}
            to="/charts/pie"
            onClick={() => handleSideBar("Pie")}
          >
            Pie
          </Link>
          <Link
            className={`sidebar-child-link ${
              pageSelected["Fianance"] ? "pageSelected" : ""
            }`}
            to="/charts/finance"
            onClick={() => handleSideBar("Finance")}
          >
            Finance
          </Link>
          <Link
            className={`sidebar-child-link ${
              pageSelected["Pyramid"] ? "pageSelected" : ""
            }`}
            to="/charts/pyramid"
            onClick={() => handleSideBar("Pyramid")}
          >
            Pyramid
          </Link>
          <Link
            className={`sidebar-child-link ${
              pageSelected["Bar"] ? "pageSelected" : ""
            }`}
            to="/charts/bar"
            onClick={() => handleSideBar("Bar")}
          >
            Bar
          </Link>
        </div>
      </div>
    )
  );
};

export default Sidebar;
