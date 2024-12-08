import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { FaCode } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import { FiMaximize } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";
import { TiCloudStorage } from "react-icons/ti";
import styles from "./Ide.module.scss";
import { Questions } from "../../../utils/types/questionType";
import { inputOutputConfig } from "../../../config/config";
import { usePlaygroundContext } from "../playgroudContext";

type IdeProps = {
    findQuestion: Questions;
};

export default function Ide({ findQuestion }: IdeProps) {
    const { input, output } = usePlaygroundContext();
    const [code, setCode] = useState(findQuestion.starterCode);

    const handleCodeChange = (value: string) => {
        setCode(value);
    };

    console.log("findQuestion", findQuestion);
    console.log('inputOutputConfig', inputOutputConfig);
    

    const handleRun = async () => {
        const payload = {
            code,
            inputs: findQuestion.examples.map((x) => x.inputText),
            expected_output: findQuestion.examples.map((x) => x.outputText),
            problem_type: findQuestion.id
        };

        console.log();
        
        const res = await fetch("http://localhost:3000/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        console.log("res-", res);
    };

    return (
        <div className={styles["code-editor-container"]}>
            {/* Editor Header */}
            <div className={styles["editor-header"]}>
                <div className={styles["editor-title"]}>
                    <FaCode className={styles.icon} />
                    <span className={styles.language}>TypeScript</span>
                </div>
                <div className={styles["editor-actions"]}>
                    <GrPowerReset className={styles.icon} />
                    <FiMaximize className={styles.icon} />
                    <IoSettingsSharp className={styles.icon} />
                </div>
            </div>

            {/* CodeMirror Editor */}
            <div className={styles["code-mirror-wrapper"]}>
                <CodeMirror
                    value={code}
                    theme={vscodeDark}
                    extensions={[javascript({ typescript: true })]}
                    onChange={(value) => handleCodeChange(value)}
                    height='100%'
                />
            </div>

            {/* Editor Footer */}
            <div className={styles["editor-footer"]}>
                <button className={styles["run-btn"]} onClick={handleRun}>
                    <FaPlay />
                    Run
                </button>
                <button className={styles["submit-btn"]}>
                    <TiCloudStorage />
                    Submit
                </button>
            </div>
        </div>
    );
}
