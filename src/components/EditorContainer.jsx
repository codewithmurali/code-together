import React, { useReducer } from "react";
import Editor from "@monaco-editor/react";

const EditorContainer = ({ language, title, value, onChange }) => {



  function handleChange(editor, data, value ){
    onChange(value)
  }

   return (
    <div className="editor-container">
      <div className="editor-title">
        <h3>{title}</h3>
        <button onClick = {()=> setOpen((prev)=> !prev)}></button>
      </div>
      <Editor
      onChange={handleChange}
  value={value}
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
