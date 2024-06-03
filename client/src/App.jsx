import { useState, useEffect, useRef } from "react";
import ViewWeekSharpIcon from "@mui/icons-material/ViewWeekSharp";
import TableRowsSharpIcon from "@mui/icons-material/TableRowsSharp";
import EditorContainer from "./components/EditorContainer";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:4000");

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [layoutView, setLayoutView] = useState(true);
  const iframeRef = useRef(null);

  useEffect(() => {
    socket.on("update", (data) => {
      setHtml(data.html);
      setCss(data.css);
      setJs(data.js);
    });

    return () => {
      socket.off("update");
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const doc = `
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
      `;

      if (iframeRef.current) {
        const iframeDoc = iframeRef.current.contentDocument;
        iframeDoc.open();
        iframeDoc.write(doc);
        iframeDoc.close();
      }

      socket.emit("codeChange", { html, css, js });
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
          <iframe
            ref={iframeRef}
            title="output"
            onLoad={() => console.log("iframe loaded")}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
