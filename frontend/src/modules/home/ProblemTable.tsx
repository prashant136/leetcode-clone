import React, { useState, useContext, useEffect } from "react";
import { problems } from "@mockProblems/problem";
import { AiFillYoutube } from "react-icons/ai";
import YouTube from "react-youtube";
import { IoClose } from "react-icons/io5";
// import Link from "next/link";

type ProblemTableProps = {};

export default function ProblemTable() {
    const [youtubePlayer, setYoutubePlayer] = useState({
        isOpen: false,
        videoId: ""
    });

    const closeModal = () => {
        setYoutubePlayer({ isOpen: false, videoId: "" });
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);

        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <>
            <tbody>
                {problems.map((problem, idx) => {
                    return (
                        <tr
                            key={problem.id}
                            className={`${
                                idx % 2 === 1 ? "bg-[#2a2a2a]" : ""
                            } text-white`}
                        >
                            <td className='py-3'>✅</td>
                            <td className='py-3'>
                                <Link
                                    href={problem.link}
                                    className='hover:text-blue-600 cursor-pointer'
                                    target='_blank'
                                >
                                    {problem.title.length > 15
                                        ? problem.title.substring(0, 15) + "..."
                                        : problem.title}
                                </Link>
                            </td>
                            <td
                                className={`${
                                    problem.difficulty === "Easy"
                                        ? "text-[#00b8a3]"
                                        : problem.difficulty === "Medium"
                                        ? "text-[#ffc11d]"
                                        : "text-[#ff375f]"
                                } py-3`}
                            >
                                {problem.difficulty}
                            </td>
                            <td className='py-3'>{problem.category}</td>
                            <td className='py-3'>
                                {problem.videoId ? (
                                    <AiFillYoutube
                                        fontSize={"28"}
                                        className='cursor-pointer text-red-600'
                                        onClick={() =>
                                            setYoutubePlayer({
                                                isOpen: true,
                                                videoId:
                                                    problem.videoId as string
                                            })
                                        }
                                    />
                                ) : (
                                    <p className='text-gray-400'>Coming soon</p>
                                )}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            {youtubePlayer.isOpen && (
                <tfoot className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center'>
                    <div
                        className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute'
                        onClick={closeModal}
                    ></div>
                    <div className='w-full z-50 h-full px-6 relative max-w-4xl'>
                        <div className='w-full h-full flex items-center justify-center relative'>
                            <div className='w-full relative'>
                                <IoClose
                                    fontSize={"35"}
                                    className='cursor-pointer absolute -top-16 right-0'
                                    onClick={closeModal}
                                />
                                <YouTube
                                    videoId={youtubePlayer.videoId}
                                    loading='lazy'
                                    iframeClassName='w-full min-h-[500px]'
                                />
                            </div>
                        </div>
                    </div>
                </tfoot>
            )}
        </>
    );
}
