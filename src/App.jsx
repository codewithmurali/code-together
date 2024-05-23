import { useState,useEffect } from "react";
import "./App.css";
import EditorContainer from "./components/EditorContainer";

function App() {
  const [html, setHtml]  = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc]  = useState("");
  useEffect(()=>{
    setSrcDoc(
      `<html>
        <head></head>
        <body>
          ${html}
        </body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`
    )
  }, [html, css, js])

  return (
    <div>
      <div className="nav">
        <h3>Code-together</h3>
      </div>
      <div className="panel">
        <EditorContainer title={"HTML"} language={"html"} value = {html} onChange={setHtml} />
        <EditorContainer title={"CSS"} language={"css"} value={css} onChange={setCss}/>
        <EditorContainer title={"JavaScript"} language={"javascript"} value={js} onChange={setJs} />
      </div>
      <div className="display-container">
        <iframe src={srcDoc}></iframe>
      </div>
                       
    </div>
  );
}

export default App;
