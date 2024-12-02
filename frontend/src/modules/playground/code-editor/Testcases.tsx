// import React, { useState, useEffect, useContext } from "react";
// import Tab from "../../../components/Tabs";
// import BorderedDiv from "../../../components/BorderedDiv";
// import { BsFillClipboard2CheckFill } from "react-icons/bs";
// import { FiMaximize } from "react-icons/fi";
// import { Problem } from "../../../utils/types/problem";

// export default function Testcases({ problem }: { problem: Problem }) {
//     const [currentIndex, setIndex] = useState(0);

//     const handleChange = (newIndex: number) => {
//         setIndex(newIndex);
//     };

//     return (
//         <div className='w-full flex flex-col relative'>
//             {/* ----- test-case navbar ------- */}
//             <div className='w-full absolute top-0 justify-between flex bg-[#333] h-10 px-4'>
//                 <div
//                     className={`flex items-center text-[#adadad] gap-x-2 cursor-pointer`}
//                 >
//                     <BsFillClipboard2CheckFill className='text-[#2ac245]' />
//                     <span className='text-[14px]'>Test Cases</span>
//                 </div>
//                 <div className='flex items-center gap-x-3 text-[#adadad]'>
//                     <FiMaximize className='cursor-pointer hover:text-white' />
//                 </div>
//             </div>

//             {/* ----- test-case body ------ */}
//             <div className='w-full absolute top-12'>
//                 <Tab value={currentIndex} onChange={handleChange}>
//                     <Tab.Heads>
//                         <div className='flex gap-x-3 px-2 py-1 overflow-x-scroll'>
//                             {[0, 1, 2].map((x) => {
//                                 return (
//                                     <Tab.Item index={x} key={x}>
//                                         <div
//                                             className={`text-sm cursor-pointer px-2 py-1 hover:backdrop-brightness-50 hover:rounded-md 
//                                             ${
//                                                 currentIndex === x
//                                                     ? "text-white backdrop-brightness-50 rounded-md"
//                                                     : "text-[#adadad]"
//                                             }`}
//                                         >
//                                             Case {x + 1}
//                                         </div>
//                                     </Tab.Item>
//                                 );
//                             })}
//                         </div>
//                     </Tab.Heads>
//                     <Tab.ContentWrapper>
//                         <Tab.Content index={0}>
//                             <BorderedDiv style={{ color: 'red' }}>
//                                 Hello Prashant!
//                             </BorderedDiv>
//                         </Tab.Content>
//                         <Tab.Content index={1}>
//                             {/* <Editorial /> */}
//                             prashnt ✅
//                         </Tab.Content>
//                         <Tab.Content index={2}>
//                             {/* <Submissions /> */}
//                         </Tab.Content>
//                     </Tab.ContentWrapper>
//                 </Tab>
//             </div>
//         </div>
//     );
// }

import React from 'react'

export default function Testcases() {
  return (
    <div>Testcases</div>
  )
}
