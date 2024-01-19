import React, { useState } from "react";
import Navbar from "@components/Navbar/Navbar";
import Description from "./components/Description";
import Split from "react-split";
import "@styles/global.css";

export default function Workspace() {
    return (
        <>
            <Navbar problemPage={true} />
            <Split className='split h-[calc(100vh-50px)]'>
                <Description />
                <div>code editor</div>
            </Split>
        </>
    );
}
