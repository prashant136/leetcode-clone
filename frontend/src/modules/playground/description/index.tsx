import React, { useState } from "react";
import Tab from "@components/Tabs";
import { TbFileDescription } from "react-icons/tb";
import { BsBook } from "react-icons/bs";
import { IoTimerOutline } from "react-icons/io5";
import Description from "./components/Description";
import Editorial from "./components/Editorial";
import Submissions from "./components/Submissions";
import { Problem } from "@utils/types/problem";


export default function DescriptionPart({ problem }: { problem: Problem }) {
    const [currentIndex, setIndex] = useState(0);

    const handleChange = (newIndex: number) => {
        setIndex(newIndex);
    };
    return (
        <div className=''>
            <Tab value={currentIndex} onChange={handleChange}>
                <Tab.Heads>
                    <div className='flex gap-x-1 bg-[#333] px-2 py-1 overflow-x-scroll'>
                        <Tab.Item index={0}>
                            <div className={`flex items-center gap-x-1.5 cursor-pointer px-2 py-1 hover:backdrop-brightness-50 hover:rounded-md ${currentIndex === 0 ? 'text-white': 'text-[#adadad]'}`}>
                                <TbFileDescription className='text-blue-500' />
                                Description
                            </div>
                        </Tab.Item>
                        <Tab.Item index={1}>
                            <div className={`flex items-center gap-x-1.5 cursor-pointer px-2 py-1 hover:backdrop-brightness-50 hover:rounded-md ${currentIndex === 1 ? 'text-white': 'text-[#adadad]'}`}>
                                <BsBook className='text-orange-400' />
                                Editorial
                            </div>
                        </Tab.Item>
                        <Tab.Item index={2}>
                            <div className={`flex items-center gap-x-1.5 cursor-pointer px-2 py-1 hover:backdrop-brightness-50 hover:rounded-md ${currentIndex === 2 ? 'text-white': 'text-[#adadad]'}`}>
                                <IoTimerOutline className='text-green-500' />
                                Submissions
                            </div>
                        </Tab.Item>
                    </div>
                </Tab.Heads>
                <Tab.ContentWrapper>
                    <Tab.Content index={0}>
                        <Description problem={problem} />
                    </Tab.Content>
                    <Tab.Content index={1}>
                        <Editorial />
                    </Tab.Content>
                    <Tab.Content index={2}>
                        <Submissions />
                    </Tab.Content>
                </Tab.ContentWrapper>
            </Tab>
        </div>
    );
}
