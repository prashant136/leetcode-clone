import React from "react";
import Split from "react-split";
import CodeEditor from "./components/CodeEditor";
import TestCases from "./components/TestCases";
import { Problem } from "@utils/types/problem";

export default function Playground({ problem }: { problem: Problem }) {
    return (
        <Split
            sizes={[60, 40]} // Initial sizes of the splits (percentages)
            direction='vertical'
        >
            <CodeEditor problem={problem} />
            <TestCases problem={problem} />
        </Split>
    );
}
