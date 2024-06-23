import React from "react";
import "./ColorPicker.css";
import Header from "../../../Components/Header/Header";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { useTheme } from "../../../Context/themeContext";

const Colorpicker = () => {
  // let ddb;
  // let cp;
  // function onChange(args) {
  //   ddb.element.children[0].style.backgroundColor = args.currentValue.rgba;
  //   closePopup();
  // }
  // function closePopup() {
  //   ddb.toggle();
  // }
  const { displayMode } = useTheme();
  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="App" title="Color Picker" />
      <h4 style={{ marginLeft: "3rem" }}>Choose Color</h4>
      <div className="wrap">
        <ColorPickerComponent
          id="colorpicker"
          mode="Palette"
          inline={true}
          showButtons={false}
          modeSwitcher={false}
          // change={onChange}
        />
        <ColorPickerComponent
          id="colorpicker"
          inline={true}
          showButtons={false}
          modeSwitcher={false}
          // change={onChange}
        />
      </div>
    </div>
  );
};

export default Colorpicker;
