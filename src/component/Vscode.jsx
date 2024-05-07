import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";

const vscode = () => {
  const [isopen, setisopen] = useState(true);
  const [code, setcode] = useState({
    html: "<!-- write your HTML code here -->\n<div>output</div>",
    css: "/* write your CSS code here */ \n div {\n color: white \n}\n",
    js: "// write your JS code here",
  });

  const handlerclickeditor = (e) => {
    setisopen(!isopen);
  }

  const src = `
  <!DOCTYPE html>
  <html style="height:100%">
  <head>
      <meta charset="UTF-8" />
      <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body style="height:100%">${code.html}</body>
  <style>${code.css}</style>
  <script>${code.js}</script>
</html>
  `;

  return (
    <div className=" w-full  text-white ">
      <div className="flex gap-1 p-5">
        <div className="h-full">
          <button onClick={handlerclickeditor}  className=" bg-zinc-700  border-none outline-none px-3 py-1 mb-1">
            Html
          </button>
         {isopen && <Editor
            width="32vw"
            height="50vh"
            language="html"
            defaultValue={code.html}
            theme="vs-dark"
            loading="Thanks for wait"
            onChange={(newValue, e) => {
              setcode({ ...code, html: newValue });
            }}
          />}

        </div>
        <div>
          <button onClick={handlerclickeditor} className=" bg-zinc-700  border-none outline-none px-3 py-1 mb-1">
            Css
          </button>
         {isopen && <Editor
            width="32vw"
            height="50vh"
            language="css"
            defaultValue={code.css}
            theme="vs-dark"
            loading="Thanks for wait"
            onChange={(newcode, e) => {
              setcode({ ...code, css: newcode });
            }}
          />}
        </div>
        <div>
          <button onClick={handlerclickeditor} className=" bg-zinc-700  border-none outline-none px-3 py-1 mb-1">
            Javascript
          </button>
         { isopen && <Editor
            width="32vw"
            height="50vh"
            language="javascript"
            defaultValue={code.js}
            theme="vs-dark"
            loading="Thanks for wait"
            onChange={(newcode, e) => {
              setcode({ ...code, js: newcode });
            }}
          />}
        </div>
      </div>
      <div className="flex-1 max-w-screen-md w-auto h-[30vh] bg-zinc-700 p-5 m-5 text-white">
        <h1 className="text-gray-400">//output</h1>
        {/* <div dangerouslySetInnerHTML={{__html: code.html}}></div> */}
        <iframe
          className="flex-1 w-full h-full text-white"
          aria-label="Preview"
          sandbox="allow-scripts"
          srcDoc={src}
        ></iframe>
      </div>
    </div>
  );
};

export default vscode;
