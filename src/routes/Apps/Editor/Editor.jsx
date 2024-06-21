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

import { EditorData } from "../../../Assests/data/dummy";

const Editor = () => {
  const iframeSetting: object = { enable: true };
  return (
    <div className="editor-container">
      <Header Category="Apps" title="Editor" />
      <RichTextEditorComponent iframeSettings={iframeSetting}>
        Type Something
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
