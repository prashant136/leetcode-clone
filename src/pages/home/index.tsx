import React, { useState } from "react";
import ProblemTable from "./ProblemTable";
import "@styles/global.css";
import Navbar from "@components/Navbar/Navbar";

export default function Home() {
    const [loadingProblems, setLoadingProblems] = useState(false);
    return (
        <div className="bg-[#1a1a1a] h-screen">
            <Navbar />
            <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
                {/* {loadingProblems && (
						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
							{[...Array(10)].map((_, idx) => (
								<LoadingSkeleton key={idx} />
							))}
						</div>
					)} */}
                <table className='text-sm text-left text-gray-500 sm:w-3/4 w-full max-w-[1200px] mx-auto'>
                    {!loadingProblems && (
                        <thead className='uppercase border-b'>
                            <tr>
                                <th
                                    className='w-1/6 py-3 font-semibold'
                                >
                                    Status
                                </th>
                                <th
                                    className='w-1/4 py-3 font-semibold'
                                >
                                    Title
                                </th>
                                <th
                                    className='w-1/5 py-3 font-semibold'
                                >
                                    Difficulty
                                </th>

                                <th
                                    className='w-1/4 py-3 font-semibold'
                                >
                                    Category
                                </th>
                                <th
                                    className='w-1/5 py-3 font-semibold'
                                >
                                    Solution
                                </th>
                            </tr>
                        </thead>
                    )}
                    <ProblemTable />
                </table>
            </div>
        </div>
    );
}
