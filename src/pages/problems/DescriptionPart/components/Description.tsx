import React from "react";
import { FaRegLightbulb, FaBuilding } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";

export default function Description() {
    return (
        <div className='flex flex-col gap-y-4 p-5 text-white overflow-x-scroll'>
            {/* ---- problem heading ---- */}
            <span className='font-[600] text-2xl'>1. Two Sum</span>
            <div className='flex items-center gap-x-4 text-[13px]'>
                <div className='bg-[#3c3c3c] rounded-2xl px-2 py-1 text-yellow-400'>
                    Easy
                </div>
                <div className='bg-[#3c3c3c] rounded-2xl px-2 py-1 flex items-center gap-x-1.5'>
                    <FaPen /> Topics
                </div>
                <div className='bg-[#3c3c3c] rounded-2xl px-2 py-1 flex items-center gap-x-1.5'>
                    <FaBuilding /> Companies
                </div>
                <div className='bg-[#3c3c3c] rounded-2xl px-2 py-1 flex items-center gap-x-1.5'>
                    <FaRegLightbulb /> Hint
                </div>
            </div>

            {/* ---- problem description (paragraph) ---- */}
            <div className='my-3 text-[15px]'>
                Given an array of integers nums and an integer target, return
                indices of the two numbers such that they add up to target. You
                may assume that each input would have exactly one solution, and
                you may not use the same element twice. You can return the
                answer in any order.
            </div>

            {/* ---- Examples ---- */}
            {/* <div className='mt-4'>
                {problem.examples.map((example, index) => (
                    <div key={example.id}>
                        <p className='font-medium text-white '>
                            Example {index + 1}:{" "}
                        </p>
                        {example.img && (
                            <img src={example.img} alt='' className='mt-3' />
                        )}
                        <div className='example-card'>
                            <pre>
                                <strong className='text-white'>Input: </strong>{" "}
                                {example.inputText}
                                <br />
                                <strong>Output:</strong>
                                {example.outputText} <br />
                                {example.explanation && (
                                    <>
                                        <strong>Explanation:</strong>{" "}
                                        {example.explanation}
                                    </>
                                )}
                            </pre>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
}
