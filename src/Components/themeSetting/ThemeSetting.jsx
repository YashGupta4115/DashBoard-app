import { IoIosCloseCircleOutline } from "react-icons/io";
import "./ThemeSetting.css";
import { useTheme } from "../../Context/themeContext";

const ThemeSetting = () => {
  const { displayMode, toggleDisplayMode, setTheme, setIsSettingOpen } =
    useTheme();
  return (
    <div className="themeSetting-container">
      <div className="themeSetting-header">
        <div className="themeSetting-title">Setting</div>
        <IoIosCloseCircleOutline
          style={{ cursor: "pointer" }}
          onClick={() => setIsSettingOpen(false)}
        />
      </div>
      <div className="themeSetting-body1">
        <div className="themeBody1-title">ThemeOptions</div>
        <div>
          <input
            type="radio"
            name="displayMode"
            defaultChecked={displayMode === "light"}
            onClick={toggleDisplayMode}
          />{" "}
          Light
          <input
            type="radio"
            name="displayMode"
            defaultChecked={displayMode === "dark"}
            onClick={toggleDisplayMode}
          />{" "}
          Dark
        </div>
      </div>

      <div className="themeSetting-body2">
        <div className="themeBody2-title">ThemeColors</div>
        <div>
          <button
            style={{ backgroundColor: "#FB9678" }}
            className="themeColors"
            onClick={() => setTheme("#FB9678")}
          ></button>
          <button
            style={{ backgroundColor: "#5A666F" }}
            className="themeColors"
            onClick={() => setTheme("#5A666F")}
          ></button>
          <button
            style={{ backgroundColor: "#03C9D7" }}
            className="themeColors"
            onClick={() => setTheme("#03C9D7")}
          ></button>
          <button
            style={{ backgroundColor: "#7352FF" }}
            className="themeColors"
            onClick={() => setTheme("#7352FF")}
          ></button>
          <button
            style={{ backgroundColor: "#FF5C8E" }}
            className="themeColors"
            onClick={() => setTheme("#FF5C8E")}
          ></button>
          <button
            style={{ backgroundColor: "#706663" }}
            className="themeColors"
            onClick={() => setTheme("#706663")}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSetting;
