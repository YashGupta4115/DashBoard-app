import React from "react";
import "./ColorPicker.css";
import Header from "../../../Components/Header/Header";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

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
  return (
    <div className="colorPicker-container">
      <Header Category="App" title="Color Picker" />
      <h4>Choose Color</h4>
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
