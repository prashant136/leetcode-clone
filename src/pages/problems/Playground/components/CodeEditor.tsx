import React from "react";

import { FaCode } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FiMaximize } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";

export default function CodeEditor() {
    return (
        <div className='flex flex-col'>
            {/* Editor nav */}
            <div className='flex justify-between bg-[#333] h-10 px-4'>
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
            {/* editor */}
        </div>
    );
}
