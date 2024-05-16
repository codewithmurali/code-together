import React from "react";
import Editor from "@monaco-editor/react";

const EditorContainer = ({ language, title, value, onChange }) => {
  const options = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
   
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
  }; 
   return (
    <div className="editor-container">
      <div className="editor-title">
        <h3>{title}</h3>
        <button>O&C</button>
      </div>
      <Editor
        options={options}
        className="code-editor"
        width= "32vw"
        height="50vh"
        defaultLanguage={language}
        theme="vs-dark"
      />
    </div>
  );
};

export default EditorContainer;
