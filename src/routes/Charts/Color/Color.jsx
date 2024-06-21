import world_map from "../../../Assests/custom.geo.json";
import * as React from "react";
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
} from "@syncfusion/ej2-react-maps";

import "./Color.css";

import Header from "../../../Components/Header/Header";
const Color = () => {
  const population_density = [
    { name: "China", density: 153 },
    { name: "India", density: 464 },
    { name: "Indonesia", density: 151 },
    { name: "Pakistan", density: 286 },
    { name: "Bangladesh", density: 1238 },
    { name: "Japan", density: 347 },
    { name: "Philippines", density: 368 },
    { name: "Vietnam", density: 314 },
    { name: "Turkey", density: 110 },
    { name: "Iran", density: 52 },
    { name: "Thailand", density: 137 },
    { name: "Myanmar", density: 83 },
    { name: "South Korea", density: 527 },
    { name: "Iraq", density: 94 },
    { name: "Afghanistan", density: 60 },
    { name: "Saudi Arabia", density: 16 },
    { name: "Uzbekistan", density: 76 },
    { name: "Malaysia", density: 97 },
    { name: "Yemen", density: 54 },
    { name: "Nepal", density: 203 },
    { name: "North Korea", density: 214 },
    { name: "Sri Lanka", density: 341 },
    { name: "Kazakhstan", density: 7 },
    { name: "Syria", density: 95 },
    { name: "Cambodia", density: 95 },
    { name: "Jordan", density: 115 },
    { name: "Azerbaijan", density: 123 },
    { name: "United Arab Emirates", density: 118 },
    { name: "Tajikistan", density: 69 },
    { name: "Israel", density: 400 },
    { name: "Laos", density: 32 },
    { name: "Lebanon", density: 667 },
    { name: "Kyrgyzstan", density: 34 },
    { name: "Turkmenistan", density: 13 },
    { name: "Singapore", density: 8358 },
    { name: "Oman", density: 16 },
    { name: "State of Palestine", density: 759 },
    { name: "Kuwait", density: 239 },
    { name: "Georgia", density: 57 },
    { name: "Mongolia", density: 2 },
    { name: "Armenia", density: 104 },
    { name: "Qatar", density: 248 },
    { name: "Bahrain", density: 2239 },
    { name: "Timor-Leste", density: 87 },
    { name: "Cyprus", density: 130 },
    { name: "Bhutan", density: 20 },
    { name: "Maldives", density: 1719 },
    { name: "Brunei", density: 83 },
  ];

  return (
    <div className="colorMap-container">
      <Header Category="Chart" title="Color Map" />
      <MapsComponent title="Population Density of Asian Countries">
        <LayersDirective>
          <LayerDirective
            shapeData={world_map}
            shapeDataPath="name"
            shapePropertyPath="name"
            dataSource={population_density}
            shapeSettings={{
              colorValuePath: "density",
              fill: "#E5E5E5",
              colorMapping: [
                {
                  from: 0.00001,
                  to: 100,
                  color: "rgb(153,174,214)",
                },
                {
                  from: 100,
                  to: 200,
                  color: "rgb(115,143,199)",
                },
                {
                  from: 200,
                  to: 300,
                  color: "rgb(77,112,184)",
                },
                {
                  from: 300,
                  to: 500,
                  color: "rgb(38,82,168)",
                },
                {
                  from: 500,
                  to: 19000,
                  color: "rgb(0,51,153)",
                },
              ],
            }}
          ></LayerDirective>
        </LayersDirective>
      </MapsComponent>
    </div>
  );
};

export default Color;
