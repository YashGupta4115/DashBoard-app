import React from "react";
import "./Editor.css";
import Header from "../../../Components/Header/Header";

import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { useTheme } from "../../../Context/themeContext";
const Editor = () => {
  const iframeSetting: object = { enable: true };
  const { displayMode } = useTheme();
  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category="Apps" title="Editor" />
      <RichTextEditorComponent iframeSettings={iframeSetting} height="30rem">
        Type Something
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
