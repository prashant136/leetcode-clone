import { useState } from "react";
import Tab from "../../../components/Tabs";
import { TbFileDescription } from "react-icons/tb";
import { BsBook } from "react-icons/bs";
import { IoTimerOutline } from "react-icons/io5";
import Description from "./Description";
import Editorial from "./Editorial";
import Submissions from "./Submission";
import { Questions } from "../../../utils/types/questionType";
import styles from "./ProblemInsights.module.scss";

type ProblemInsightsProps = {
    findQuestion: Questions;
};

export default function ProblemInsights({
    findQuestion
}: ProblemInsightsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChange = (newIndex: number) => {
        setCurrentIndex(newIndex);
    };
    return (
        <div className=''>
            <Tab value={currentIndex} onChange={handleChange}>
                <Tab.Heads>
                    <div className={styles["tab-navigation"]}>
                        <Tab.Item index={0}>
                            <div
                                className={`${styles["tab-item"]} ${
                                    currentIndex === 0
                                        ? styles.active
                                        : styles.inactive
                                } ${styles.description}`}
                                onClick={() => setCurrentIndex(0)}
                            >
                                <TbFileDescription className={styles.icon} />
                                Description
                            </div>
                        </Tab.Item>
                        <Tab.Item index={1}>
                            <div
                                className={`${styles["tab-item"]} ${
                                    currentIndex === 1
                                        ? styles.active
                                        : styles.inactive
                                } ${styles.editorial}`}
                                onClick={() => setCurrentIndex(1)}
                            >
                                <BsBook className={styles.icon} />
                                Editorial
                            </div>
                        </Tab.Item>
                        <Tab.Item index={2}>
                            <div
                                className={`${styles["tab-item"]} ${
                                    currentIndex === 2
                                        ? styles.active
                                        : styles.inactive
                                } ${styles.submissions}`}
                                onClick={() => setCurrentIndex(2)}
                            >
                                <IoTimerOutline className={styles.icon} />
                                Submissions
                            </div>
                        </Tab.Item>
                    </div>
                </Tab.Heads>
                <Tab.ContentWrapper>
                    <Tab.Content index={0}>
                        <Description findQuestion={findQuestion} />
                    </Tab.Content>
                    <Tab.Content index={1}>
                        <Editorial />
                    </Tab.Content>
                    <Tab.Content index={2}>
                        <Submissions />
                    </Tab.Content>
                </Tab.ContentWrapper>
            </Tab>
        </div>
    );
}
