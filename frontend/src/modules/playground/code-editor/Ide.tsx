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

type IdeProps = {
    findQuestion: Questions;
};

export default function Ide({ findQuestion }: IdeProps) {
    const [code, setCode] = useState(
        `function twoSum(nums: number[], target: number): number[] {\n  // Write your code here\n}`
    );

    const handleCodeChange = (value: string) => {
        setCode(value);
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
                    height='300px'
                />
            </div>

            {/* Editor Footer */}
            <div className={styles["editor-footer"]}>
                <button className={styles["run-btn"]}>
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
