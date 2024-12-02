import React from "react";

import { FaCode } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FiMaximize } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import { FaPlay } from "react-icons/fa6";
import { TiCloudStorage } from "react-icons/ti";

// ----- code editor import
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { Problem } from "../../../utils/types/problem";
// import "@uiw/react-codemirror/dist/cjs/style.css";
// import "@uiw/codemirror-theme-vscode/style.css";

export default function Ide({ problem }: { problem: Problem }) {
    const options = {
        mode: "javascript", // Set the language mode to JavaScript
        theme: "vscode-dark", // Set the theme (you can change it to other available themes)
        lineNumbers: true // Show line numbers
    };

    const code = `// Your JavaScript code here
    function greet(name) {
        return 'Hello, ' + name + '!';
    }
    greet("your name...");
    `;

    const handleChange = (editor, data, value) => {
        // Handle code changes here
        console.log(value);
    };

    return (
        <div className='w-full flex flex-col relative'>
            {/* ----- Editor nav ------- */}
            <div className='w-full absolute top-0 justify-between flex bg-[#333] h-10 px-4'>
                <div
                    className={`flex items-center text-[#adadad] gap-x-2 cursor-pointer`}
                >
                    <FaCode className='text-[#2ac245]' />
                    <span className='text-[14px]'>JavaScript</span>
                </div>
                <div className='flex items-center gap-x-3 text-[#adadad]'>
                    <GrPowerReset className='cursor-pointer hover:text-white' />
                    <FiMaximize className='cursor-pointer hover:text-white' />
                    <IoSettingsSharp className='cursor-pointer hover:text-white' />
                </div>
            </div>
            {/* ----- Editor ------ */}
            <CodeMirror
                className='w-full h-[calc(100%-40px)] absolute top-10 text-[16px] overflow-y-scroll bg-[#1e1e1e]'
                value={problem.starterCode}
                // options={options}
                extensions={[javascript()]}
                theme={vscodeDark}
                onChange={handleChange}
            />
            {/* ----- Editor footer ------ */}
            <div className='w-full absolute bottom-0 flex justify-end gap-x-3 text-sm px-4'>
                <button className='flex items-center gap-x-2 rounded-md px-2 py-1 bg-[#3c3c3c] text-white'>
                    <FaPlay /> Run
                </button>
                <button className='flex items-center gap-x-2 rounded-md px-2 py-1 text-white bg-[#2ac245]'>
                    <TiCloudStorage className='text-lg' />
                    Submit
                </button>
            </div>
        </div>
    );
}