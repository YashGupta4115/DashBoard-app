import { Link } from "react-router-dom";
import "./sidebar.styles.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext, useState } from "react";
import { SideBarContext } from "../../Context/contextProvider";
import { useTheme } from "../../Context/themeContext";

const Sidebar = () => {
  const sidebarItem = {
    DASHBOARD: [{ id: 1, name: "eCommerce", title: "Ecommerce", route: "/" }],
    PAGES: [
      { id: 1, name: "orders", title: "Orders", route: "/pages/orders" },
      {
        id: 2,
        name: "customers",
        title: "Customers",
        route: "/pages/customers",
      },
      {
        id: 3,
        name: "employees",
        title: "Employees",
        route: "/pages/employees",
      },
      {
        id: 4,
        name: "queries",
        title: "Queries",
        route: "/pages/queries",
      },
    ],
    APPS: [
      { id: 1, name: "Calendar", title: "Calendar", route: "/apps/calendar" },
      // {
      //   id: 2,
      //   name: "ColorPicker",
      //   title: "ColorPicker",
      //   route: "/apps/colorPicker",
      // },
      { id: 3, name: "Kanban", title: "Kanban", route: "/apps/kanban" },
      // { id: 4, name: "Editor", title: "Editor", route: "/apps/editor" },
    ],
    CHARTS: [
      { id: 1, name: "Bar", title: "Bar", route: "/charts/bar" },
      { id: 2, name: "Line", title: "Line", route: "/charts/line" },
      { id: 3, name: "Pie", title: "Pie", route: "/charts/pie" },
      // { id: 4, name: "Color", title: "Color", route: "/charts/color" },
      // { id: 5, name: "Finance", title: "Finance", route: "/charts/finance" },
      // { id: 6, name: "Pyramid", title: "Pyramid", route: "/charts/pyramid" },
    ],
  };

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
  const { displayMode, theme } = useTheme();

  const darkThemeBackground = "#33373E";
  const darkThemeColor = "#f0f0f0";

  return (
    isSideBarOpen && (
      <div
        className="sideBar-container "
        style={{
          backgroundColor: displayMode === "light" ? "" : darkThemeBackground,
          color: displayMode === "light" ? "" : darkThemeColor,
        }}
      >
        <div className="nameAndIcon">
          <div className="companyName">Vogue Variety</div>
          <IoIosCloseCircleOutline
            className="close-icon"
            onClick={toggleSideBar}
          />
        </div>

        {Object.keys(sidebarItem).map((key) => {
          return (
            <div key={key} className="item-container sidebar-child">
              <span className="sidebar-child-title">{key}</span>
              {sidebarItem[key].map((child) => {
                return (
                  <Link
                    key={child.id}
                    className={`sidebar-child-link ${
                      pageSelected[child.name] ? "pageSelected" : ""
                    }`}
                    to={child.route}
                    onClick={() => {
                      handleSideBar(child.name);
                    }}
                    style={{
                      color:
                        displayMode === "light" && !pageSelected[child.name]
                          ? "black"
                          : "white",
                      backgroundColor: pageSelected[child.name] ? theme : "",
                    }}
                  >
                    {child.title}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    )
  );
};

export default Sidebar;
