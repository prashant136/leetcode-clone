import React, { useState, useEffect } from "react";
import { problems } from "../../mockProblems/problem";
import { AiFillYoutube } from "react-icons/ai";
import YouTube from "react-youtube";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";
import "./ProblemTable.scss";

export default function ProblemTable() {
    const [youtubePlayer, setYoutubePlayer] = useState({
        isOpen: false,
        videoId: "",
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
                            className={`problem-row ${
                                idx % 2 === 1 ? "alternate-row" : ""
                            }`}
                        >
                            <td>✅</td>
                            <td>
                                <Link
                                    to={{ pathname: `problem/${problem.id}` }}
                                    className="problem-link"
                                    target="_blank"
                                >
                                    {problem.title.length > 15
                                        ? problem.title.substring(0, 15) + "..."
                                        : problem.title}
                                </Link>
                            </td>
                            <td
                                className={`difficulty ${
                                    problem.difficulty === "Easy"
                                        ? "easy"
                                        : problem.difficulty === "Medium"
                                        ? "medium"
                                        : "hard"
                                }`}
                            >
                                {problem.difficulty}
                            </td>
                            <td>{problem.category}</td>
                            <td>
                                {problem.videoId ? (
                                    <AiFillYoutube
                                        fontSize={"28"}
                                        className="youtube-icon"
                                        onClick={() =>
                                            setYoutubePlayer({
                                                isOpen: true,
                                                videoId:
                                                    problem.videoId as string,
                                            })
                                        }
                                    />
                                ) : (
                                    <p className="coming-soon">Coming soon</p>
                                )}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            {youtubePlayer.isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <IoClose
                            fontSize={"35"}
                            className="close-icon"
                            onClick={closeModal}
                        />
                        <YouTube
                            videoId={youtubePlayer.videoId}
                            loading="lazy"
                            iframeClassName="youtube-frame"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
