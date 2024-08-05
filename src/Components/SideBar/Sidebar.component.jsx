import { Link } from "react-router-dom";
import "./sidebar.styles.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext, useState, useEffect } from "react";
import { SideBarContext } from "../../Context/contextProvider";
import { useTheme } from "../../Context/themeContext";
import { UserContext } from "../../Context/UserContext";
import { getAuthDoc } from "../../Firebase/firebase";

const Sidebar = () => {
  const { currentUser, userDoc, setUserDoc } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const sidebarItem = {
    DASHBOARD: [
      {
        id: 1,
        name: "eCommerce",
        title: "Ecommerce",
        route: "/",
        accessableByAll: true,
        accessableByAdmin: true,
      },
    ],
    PAGES: [
      {
        id: 1,
        name: "orders",
        title: "Orders",
        route: "/pages/orders",
        accessableByAll: true,
        accessableByAdmin: true,
      },
      {
        id: 2,
        name: "customers",
        title: "Customers",
        route: "/pages/customers",
        accessableByAll: true,
        accessableByAdmin: true,
      },
      {
        id: 3,
        name: "employees",
        title: "Employees",
        route: "/pages/employees",
        accessableByAll: false,
        accessableByAdmin: true,
      },
      {
        id: 4,
        name: "queries",
        title: "Queries",
        route: "/pages/queries",
        accessableByAll: false,
        accessableByAdmin: true,
      },
      {
        id: 5,
        name: "assignedQueries",
        title: "AssignedQueries",
        route: "/pages/assignedQueries",
        accessableByAll: true,
        accessableByAdmin: true,
      },
    ],
    APPS: [
      {
        id: 1,
        name: "Calendar",
        title: "Calendar",
        route: "/apps/calendar",
        accessableByAll: true,
        accessableByAdmin: true,
      },
      {
        id: 3,
        name: "Kanban",
        title: "Kanban",
        route: "/apps/kanban",
        accessableByAll: true,
        accessableByAdmin: true,
      },
    ],
    CHARTS: [
      {
        id: 1,
        name: "Bar",
        title: "Bar",
        route: "/charts/bar",
        accessableByAll: false,
        accessableByAdmin: true,
      },
      {
        id: 2,
        name: "Line",
        title: "Line",
        route: "/charts/line",
        accessableByAll: false,
        accessableByAdmin: true,
      },
      {
        id: 3,
        name: "Pie",
        title: "Pie",
        route: "/charts/pie",
        accessableByAll: false,
        accessableByAdmin: true,
      },
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

  useEffect(() => {
    if (!userDoc && currentUser) {
      const fetchData = async () => {
        setIsLoading(true);
        const userDocument = await getAuthDoc(currentUser);
        setUserDoc(userDocument);
        setIsLoading(false);
      };
      fetchData();
    }
  }, [userDoc, currentUser, setUserDoc]);

  if (isLoading || !userDoc) {
    return <div>Loading...</div>; // or some loading indicator
  }

  return (
    isSideBarOpen && (
      <div
        className="sideBar-container"
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

        {Object.keys(sidebarItem).map((key) => (
          <div key={key} className="item-container sidebar-child">
            <span className="sidebar-child-title">{key}</span>
            {sidebarItem[key].map((child) => {
              if (
                child.accessableByAll ||
                (child.accessableByAdmin && userDoc.isManager) ||
                (!child.accessableByAll &&
                  !child.accessableByAdmin &&
                  userDoc.isEmployee)
              ) {
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
              }
              return null;
            })}
          </div>
        ))}
      </div>
    )
  );
};

export default Sidebar;
