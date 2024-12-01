import React, { useEffect, useState } from "react";
import Navbar from "@components/Navbar";
import DescriptionPart from "./description";
import Playground from "./Playground";
import Split from "react-split";
import "@styles/global.css";
import { problems } from "@utils/problems";
import { Problem } from "@utils/types/problem";

export default function Workspace({ problem }: { problem: Problem }) {
    return (
        <>
            <Navbar problemPage={true} />
            <Split className='split h-[calc(100vh-50px)] bg-[#262626]'>
                <DescriptionPart problem={problem} />
                <Playground problem={problem} />
            </Split>
        </>
    );
}

// 👉 If a page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated (getStaticPaths).
// how many varieties of [workid].tsx, how many pages need to generate for this.
// getStaticPaths => it create the dynamic routes
export async function getStaticPaths() {
    const paths = Object.keys(problems).map((name) => {
        return { params: { workid: name } };
    });

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({
    params
}: {
    params: { workid: string };
}) {

    const { workid } = params;
    const problem = problems[workid];

    // if (!problem) {
    //     return {
    //         notFound: true
    //     };
    // }
    // convert handlerFunction into string in order to pass into props as object
    problem.handlerFunction = problem.handlerFunction.toString();
    return {
        props: {
            problem
        }
    };
}