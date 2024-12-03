import Split from "react-split";
import Ide from "./Ide";
import Testcases from "./Testcases";
import { Questions } from "../../../utils/types/questionType";

type CodeEditorProps = {
    findQuestion: Questions;
};

export default function CodeEditor({ findQuestion }: CodeEditorProps) {
    return (
        <Split
            style={{ display: "flex", flexDirection: "column" }}
            sizes={[50, 50]}
            minSize={100}
            expandToMin={false}
            gutterSize={10}
            gutterAlign='center'
            snapOffset={30}
            dragInterval={1}
            direction='vertical'
            cursor='col-resize'
        >
            <Ide findQuestion={findQuestion} />
            <Testcases findQuestion={findQuestion} />
        </Split>
    );
}
