import React from "react";
import { Questions } from "../../../utils/types/questionType";
import { FaRegLightbulb, FaBuilding } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import styles from "./Description.module.scss";

type DescriptionProps = {
    findQuestion: Questions;
};

export default function Description({ findQuestion }: DescriptionProps) {
    return (
        <div className={styles.description}>
            {/* ---- Problem Heading ---- */}
            <span className={styles["problem-heading"]}>
                1. {findQuestion.title}
            </span>

            {/* ---- Tags ---- */}
            <div className={styles.tags}>
                <div className={`${styles.tag} ${styles.difficulty}`}>Easy</div>
                <div className={styles.tag}>
                    <FaPen /> Topics
                </div>
                <div className={styles.tag}>
                    <FaBuilding /> Companies
                </div>
                <div className={styles.tag}>
                    <FaRegLightbulb /> Hint
                </div>
            </div>

            {/* ---- Problem Description ---- */}
            <div className={styles["description-content"]}>
                <div
                    className='inner-html'
                    dangerouslySetInnerHTML={{
                        __html: findQuestion.problemStatement
                    }}
                ></div>
            </div>

            {/* ---- Examples ---- */}
            <div className={styles.examples}>
                {findQuestion.examples.map((example, index) => (
                    <div className={styles.example} key={example.id}>
                        <p className={styles["example-title"]}>
                            Example {index + 1}:
                        </p>
                        {example.img && (
                            <img
                                src={example.img}
                                alt={`img-${index}`}
                                className={styles.image}
                            />
                        )}
                        <div className={styles["example-card"]}>
                            <pre>
                                <strong>Input:</strong> {example.inputText}
                                <br />
                                <strong>Output: </strong>
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
            </div>

            {/* ---- Constraints ---- */}
            <div className={styles.constraints}>
                <div className={styles["constraints-title"]}>Constraints:</div>
                <ul>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: findQuestion.constraints
                        }}
                    />
                </ul>
            </div>
        </div>
    );
}
