import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import {Launch , TransitEnterexit} from '@mui/icons-material';

const EditorContainer = ({ language, title, value, onChange }) => {
  const [open,  setOpen ] = useState(true);
 
  function handleChange(editor, data, value ){
    onChange(value)
  }

   return (
    <div className={`editor-container `}>
      <div className="editor-title">
        <h3>{title}</h3>
        <button onClick = {()=> setOpen((prev)=> !prev)}>
          {open ?<Launch/> : <TransitEnterexit/>}
        </button>
      </div>
      <Editor
        onChange={handleChange}
        value={value}
        className={`code-editor ${open && "collapsed"}`}
        width= "32vw"
        height="40vh"
        defaultLanguage={language}
        theme="vs-dark"
      />
    </div>
  );
};

export default EditorContainer;
