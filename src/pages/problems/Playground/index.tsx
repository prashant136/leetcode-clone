import React from "react";
import Split from "react-split";
import CodeEditor from "./components/CodeEditor";
import TestCases from "./components/TestCases";

export default function Playground() {
    return (
        <Split
            sizes={[60, 40]} // Initial sizes of the splits (percentages)
            direction='vertical'
        >
            <CodeEditor />
            <TestCases />
        </Split>
    );
}
