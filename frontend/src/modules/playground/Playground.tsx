// import React from "react";
// import { questionList } from "../../mockProblems/questionList";
import CodeEditor from "./code-editor";
import ProblemInsights from "./problem-part";
import { problems } from "../../utils/questions";
// import { Questions } from "../../utils/types/questionType";
import Split from "react-split";
import { useLocation } from "react-router";
import { PlaygroundProvider } from "./playgroudContext";

export default function Playground() {
    const location = useLocation();

    const match = location.pathname.match(/\/problem\/([^/]+)/);
    // console.log("match", match);
    let findQuestion;

    if (match) {
        // console.log(match[1]); // Output: "two-sum"
        findQuestion = problems[match[1]];
    }

    return (
        <PlaygroundProvider>
            <div style={{ width: "100vw", height: "100vh" }}>
                <Split
                    style={{ display: "flex" }}
                    sizes={[50, 50]}
                    minSize={100}
                    expandToMin={false}
                    gutterSize={10}
                    gutterAlign='center'
                    snapOffset={30}
                    dragInterval={1}
                    direction='horizontal'
                    cursor='col-resize'
                >
                    <ProblemInsights findQuestion={findQuestion} />
                    <CodeEditor findQuestion={findQuestion} />
                </Split>
            </div>
        </PlaygroundProvider>
    );
}
