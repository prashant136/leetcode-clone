import React, { useState } from "react";
import Tab from "../../../components/Tabs";
import BorderedDiv from "../../../components/BorderedDiv";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { FiMaximize } from "react-icons/fi";
import { Questions } from "../../../utils/types/questionType";
import styles from "./Testcases.module.scss";
import { usePlaygroundContext } from "../playgroudContext";

type TestcasesProps = {
    findQuestion: Questions;
};

export default function Testcases({ findQuestion }: TestcasesProps) {
    const { input, output } = usePlaygroundContext();
    const [currentIndex, setIndex] = useState(0);

    const handleChange = (newIndex: number) => {
        setIndex(newIndex);
    };

    return (
        <div className={styles["testcases-container"]}>
            {/* ----- Test-case Navbar ------- */}
            <div className={styles["testcase-navbar"]}>
                <div className={styles["navbar-left"]}>
                    <BsFillClipboard2CheckFill className={styles.icon} />
                    <span className={styles.title}>Test Cases</span>
                </div>
                <div className={styles["navbar-right"]}>
                    <FiMaximize className={styles.icon} />
                </div>
            </div>

            {/* ----- Test-case Body ------ */}
            <div className={styles["testcase-body"]}>
                <Tab value={currentIndex} onChange={handleChange}>
                    {/* Tab Headers */}
                    <Tab.Heads>
                        <div className={styles["tab-heads"]}>
                            {[0, 1, 2].map((x) => (
                                <Tab.Item index={x} key={x}>
                                    <div
                                        className={`${styles["tab-item"]} ${
                                            currentIndex === x
                                                ? styles.active
                                                : ""
                                        }`}
                                    >
                                        Case {x + 1}
                                    </div>
                                </Tab.Item>
                            ))}
                        </div>
                    </Tab.Heads>

                    {/* Tab Content */}
                    <Tab.ContentWrapper>
                        <Tab.Content index={0}>
                            <BorderedDiv className={styles["bordered-content"]}>
                                Hello Prashant!
                            </BorderedDiv>
                        </Tab.Content>
                        <Tab.Content index={1}>
                            <p>Prashant ✅</p>
                        </Tab.Content>
                        <Tab.Content index={2}>
                            <p>Submissions Section (To be added)</p>
                        </Tab.Content>
                    </Tab.ContentWrapper>
                </Tab>
            </div>
        </div>
    );
}
