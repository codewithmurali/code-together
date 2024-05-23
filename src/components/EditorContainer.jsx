import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import {Launch , TransitEnterexit} from '@mui/icons-material';

const EditorContainer = ({ language, title, value, onChange }) => {
  const [open,  setOpen ] = useState(false);
 
  function handleChange(editor, data, value ){
    onChange(value)
  }

   return (
    <div className={`editor-container `}>
      <div className="editor-title" >
        <h4>{title}</h4>
        <button onClick = {()=> setOpen((prev)=> !prev)}>
          {open ?<Launch/> : <TransitEnterexit/>}
        </button>
      </div>
      <div className={`code-editor ${open && "collapsed"}`}>
      <Editor
        onChange={handleChange}
        value={value}
        width= "32vw"
        height="40vh"
        defaultLanguage={language}
        theme="vs-dark"
      />
      </div>
      
    </div>
  );
};

export default EditorContainer;
