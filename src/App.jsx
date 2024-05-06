import { useState } from "react";
import "./App.css";
import EditorContainer from "./components/EditorContainer";

function App() {
const [html, setHtml] = useState("");
const [css , setCss] = useState("");
const [js, setJs] = useState(""); 


  return (
    <>
      <div className="panel top-panel"></div>
      <div className="panel">
        <EditorContainer title={"HTML"} language={"html"} />
        <EditorContainer title={"CSS"} language={"css"} />
        <EditorContainer title={"JavaScript"} language={"javascript"} />
      </div>
                       
    </>
  );
}

export default App;
