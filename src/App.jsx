import { useState, useEffect } from "react";
import ViewWeekSharpIcon from '@mui/icons-material/ViewWeekSharp';
import TableRowsSharpIcon from '@mui/icons-material/TableRowsSharp';
import EditorContainer from "./components/EditorContainer";

function App() {
  const [html, setHtml] = useState(""); 
  const [css, setCss] = useState(""); 
  const [js, setJs] = useState("");   
  const [srcDoc, setSrcDoc] = useState("");
  const [layoutView, setLayoutView] = useState(true); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <!DOCTYPE html>
        <html>
          <head> 
          <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}</script>
          </body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div>
      <div className="nav">
        <h3>Code-together</h3>
        <button onClick={() => setLayoutView((prev) => !prev)}>
          {layoutView ? <ViewWeekSharpIcon /> : <TableRowsSharpIcon />}
        </button>
      </div>
      <div className={`layout ${layoutView ? "layout-column" : "layout-row"}`}>
        <div className="panel">
          <EditorContainer 
            title={"HTML"} 
            language={"html"} 
            value={html} 
            onChange={(value) => setHtml(value)} 
          />
          <EditorContainer 
            title={"CSS"} 
            language={"css"} 
            value={css} 
            onChange={(value) => setCss(value)} 
          />
          <EditorContainer 
            title={"JavaScript"} 
            language={"javascript"} 
            value={js} 
            onChange={(value) => setJs(value)} 
          />
        </div>
        <div className="display-container">
          <iframe srcDoc={srcDoc}></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
