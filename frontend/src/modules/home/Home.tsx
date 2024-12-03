import React, { useEffect, useState } from "react";
import ProblemTable from "./ProblemTable";
import "./Home.scss";

export default function Home() {
    const [loadingProblems, setLoadingProblems] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingProblems(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className='home'>
            <div className='home-nav'>Leetcode</div>
            <div className='problems-table-wrapper'>
                {loadingProblems && (
                    <div className='loading-skeletons'>
                        {[...Array(10)].map((_, idx) => (
                            <div className='loading-skeleton' key={idx} />
                        ))}
                    </div>
                )}
                <table className='problems-table'>
                    {!loadingProblems && (
                        <>
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Title</th>
                                    <th>Difficulty</th>
                                    <th>Category</th>
                                    <th>Solution</th>
                                </tr>
                            </thead>
                            <ProblemTable />
                        </>
                    )}
                </table>
            </div>
        </div>
    );
}
