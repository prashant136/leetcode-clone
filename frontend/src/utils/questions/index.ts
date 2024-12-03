import { Questions } from "../types/questionType";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linkedlist";
import { search2DMatrix } from "./search-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";

type ProblemMap = {
    [key: string]: Questions;
}

export const problems: ProblemMap = {
    "two-sum": twoSum,
    "reverse-linked-list": reverseLinkedList,
    "jump-game": jumpGame,
    "search-a-2d-matrix": search2DMatrix,
    "valid-parentheses": validParentheses,
};