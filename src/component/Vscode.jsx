import React, { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import Navbar from "./Navbar";

const navItems = [
  {
    name: "undefined",
    id: 1,
  },
  {
    name: "html",
    id: 2,
  },
  {
    name: "undefined",
    id: 3,
  },
];

const vscode = () => {
  const [isopen, setisopen] = useState(true);
  const [navitems,setnavitems] =useState(navItems)

  const [code, setcode] = useState({
    html: "<!-- write your HTML code here -->\n<div>output</div>",
    css: "/* write your CSS code here */ \n div {\n color: white \n}\n",
    js: "// write your JS code here",
  });

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


  const handleclick = (id) => {
    setnavitems(navitems.filter((itemsid) => itemsid.id !== id))
  };

  return (
    <div>
      <div className=" w-screen h-screen text-white flex  overflow-hidden ">
        <div className="w-[15%]  bg-zinc-800 border-r-[1px] border-zinc-600">
          <Navbar />
        </div>
        <div className="bg-black-50 w-[70%] flex flex-col justify-start items-start relative">
          <div className="flex py-2 px-3">
            {navitems.map((items) => (
              <div
                key={items.id}
                className="flex items-center  border-r-2 border-zinc-600 bg-zinc-800"
                
              >
                <h1 className="border-none outline-none px-3 py-1">
                  {items.name}
                </h1>
                <span
                  className="w-10 text-[14px] cursor-pointer"
                  onClick={() => handleclick(items.id)}
                >
                  ❌
                </span>
              </div>
            ))}
          </div>
          {isopen && (
            <Editor
              width="70vw"
              height="100vh"
              language="html"
              defaultValue={code.html}
              theme="vs-dark"
              loading="Thanks for wait"
              onChange={(newValue) => {
                setcode({ ...code, html: newValue });
              }}
            />
          )}
        </div>
        <div className="flex-1 w-[10vw] h-[100vh] bg-zinc-700 py-2  text-white">
          <h1 className="text-gray-400">//output</h1>
          <iframe
            className="flex-1 w-full h-full text-white"
            aria-label="Preview"
            sandbox="allow-scripts"
            srcDoc={src}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default vscode;
