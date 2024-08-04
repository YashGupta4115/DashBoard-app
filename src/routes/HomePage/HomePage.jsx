import React from "react";
import Sidebar from "../../Components/SideBar/Sidebar.component.jsx";
import Navbar from "../../Components/NavBar/Navbar.component";
import { Route, Routes } from "react-router-dom";
import CalendarApp from "../Apps/Calendar/Calendar";
// import Editor from "../Apps/Editor/Editor";
// import Colorpicker from "../Apps/ColorPicker/Colorpicker";
import Kanban from "../Apps/Kanban/Kanban";
import Orders from "../pages/Orders/Orders";
import Customers from "../pages/Customers/Customers";
import Employees from "../pages/Employees/Employees";
import BarCharts from "../Charts/Bar/Bar";
// import Line from "../Charts/Line/Line";
import Pie from "../Charts/Pie/Pie";
// import Color from "../Charts/Color/Color";
// import Finance from "../Charts/Finance/Finance";
// import Pyramid from "../Charts/Pyramid/Pyramid";
// import Bar from "../Charts/Bar/Bar";
import { useContext } from "react";
import { SideBarContext } from "../../Context/contextProvider.jsx";
import ECommerce from "../dashboard/E-commerce/ECommerce.jsx";
import { useTheme } from "../../Context/themeContext.jsx";
import ThemeSetting from "../../Components/themeSetting/ThemeSetting.jsx";
import { CiSettings } from "react-icons/ci";
import LineCharts from "../Charts/Line/Line.jsx";
import "../../App.css";
import SignIn from "../../Components/Auth/SignIn.jsx";
import Queries from "../pages/Queries/Queries.jsx";
import { UserContext } from "../../Context/UserContext.jsx";

const HomePage = () => {
  const { currentUser } = useContext(UserContext);

  const { displayMode, isSettingOpen, setIsSettingOpen, theme } = useTheme();

  const darkThemeBackground = "#20232A";
  const darkThemeColor = "#E5FAFB";
  const { isSideBarOpen, screenSize } = useContext(SideBarContext);

  return !currentUser ? (
    <SignIn />
  ) : (
    <div
      className="page-container"
      style={{
        backgroundColor: displayMode === "light" ? "" : darkThemeBackground,
        color: displayMode === "light" ? "" : darkThemeColor,
        height: "100%",
      }}
    >
      <Sidebar />
      <div
        className={
          isSideBarOpen && screenSize > 900
            ? "main-page-container-partial"
            : "main-page-container-full"
        }
      >
        <Navbar />

        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route index element={<ECommerce />} />
          <Route path="/apps">
            <Route path="/apps/calendar" element={<CalendarApp />} />
            {/* <Route path="/apps/editor" element={<Editor />} />
            <Route path="/apps/colorPicker" element={<Colorpicker />} />*/}
            <Route path="/apps/kanban" element={<Kanban />} />
          </Route>

          <Route path="/pages">
            <Route path="/pages/orders" element={<Orders />} />
            <Route path="/pages/customers" element={<Customers />} />
            <Route path="/pages/employees" element={<Employees />} />
            <Route path="/pages/queries" element={<Queries />} />
          </Route>

          <Route path="/charts">
            <Route path="/charts/bar" element={<BarCharts />} />
            <Route path="/charts/line" element={<LineCharts />} />
            <Route path="/charts/pie" element={<Pie />} />
            {/*<Route path="/charts/color" element={<Color />} />
            <Route path="/charts/finance" element={<Finance />} />
            <Route path="/charts/pyramid" element={<Pyramid />} />
            <Route path="/charts/bar" element={<Bar />} /> */}
          </Route>
        </Routes>
      </div>

      {isSettingOpen ? (
        <ThemeSetting />
      ) : (
        <CiSettings
          className="themeSettingButton"
          style={{ backgroundColor: theme }}
          onClick={() => setIsSettingOpen(true)}
        />
      )}
    </div>
  );
};

export default HomePage;
