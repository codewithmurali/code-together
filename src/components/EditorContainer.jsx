import React from "react";
import Editor from "@monaco-editor/react";

const EditorContainer = ({ language, title }) => {
  return (
    <div className="editor-container">
      <div className="editor-title">
        <h3>{title}</h3>
        <button>O/C</button>
      </div>
      <Editor
        className="editor-container"
        width="70vw"
        height="90vh"
        defaultLanguage={language}
        theme="vs-dark"
      />
    </div>
  );
};

export default EditorContainer;
