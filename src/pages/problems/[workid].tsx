import React, { useState } from "react";
import Navbar from "@components/Navbar";
import DescriptionPart from "./description-part";
import Playground from "./playground";
import Split from "react-split";
import "@styles/global.css";

export default function Workspace() {
    return (
        <>
            <Navbar problemPage={true} />
            <Split className='split h-[calc(100vh-50px)] bg-[#262626]'>
                <DescriptionPart />
                <Playground />
            </Split>
        </>
    );
}
