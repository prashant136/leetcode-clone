import Split from "react-split";
import Ide from "./Ide";
import Testcases from "./Testcases";
import { Problem } from "../../../utils/types/problem";

export default function Playground({ problem }: { problem: Problem }) {
    return (
        <Split
            sizes={[60, 40]} // Initial sizes of the splits (percentages)
            direction='vertical'
        >
            <Ide problem={problem} />
            <Testcases problem={problem} />
        </Split>
    );
}
