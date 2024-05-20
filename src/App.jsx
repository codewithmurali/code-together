import { useState } from "react";
import "./App.css";
import EditorContainer from "./components/EditorContainer";

function App() {
  const [html, setHtml]  = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <>
      <div className="panel top-panel"></div>
      <div className="panel">
        <EditorContainer title={"HTML"} language={"html"} value = {html} onChange={setHtml} />
        <EditorContainer title={"CSS"} language={"css"} value={css} onChange={setCss}/>
        <EditorContainer title={"JavaScript"} language={"javascript"} value={js} onChange={setJs} />
      </div>
                       
    </>
  );
}

export default App;
