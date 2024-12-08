/***
 * 
 * 👉 In React.js or JavaScript in general, the assert statement is typically used for debugging and testing purposes.
 *      It is not specific to React but is a part of the JavaScript language itself. The assert function is used to check
 *      whether a given expression is true or false. If the expression is true, the program continues to execute normally.
 *      However, if the expression is false, an AssertionError is thrown, and the program stops execution.
 */
import { Questions } from "../types/questionType";
import { inputOutputConfig } from "../../config/config";

const starterCodeTwoSum = `function twoSum(nums,target){
  // Write your code here
};`;

export const twoSum: Questions = {
    id: "two-sum",
    title: "1. Two Sum",
    problemStatement: `<p class='mt-3'>
        Given an array of integers <code>nums</code> and an integer <code>target</code>, return
        <em>indices of the two numbers such that they add up to</em> <code>target</code>.
        </p>
        <p class='mt-3'>
        You may assume that each input would have <strong>exactly one solution</strong>, and you
        may not use thesame element twice.
        </p>
        <p class='mt-3'>You can return the answer in any order.</p>`,
    examples: inputOutputConfig("two-sum").input.map((example, index) => ({
        id: index + 1,
        inputText: `nums = ${JSON.stringify(example.nums)}, target = ${example.target}`,
        outputText: `${JSON.stringify(inputOutputConfig("two-sum").output[index])}`,
        explanation: `Because nums[${inputOutputConfig("two-sum").output[index][0]}] + nums[${inputOutputConfig("two-sum").output[index][1]}] == ${example.target}, we return ${JSON.stringify(inputOutputConfig("two-sum").output[index])}.`,
    })),
    constraints: `<li class='mt-2'>
            <code>2 ≤ nums.length ≤ 10</code>
            </li> <li class='mt-2'>
            <code>-10 ≤ nums[i] ≤ 10</code>
            </li> <li class='mt-2'>
            <code>-10 ≤ target ≤ 10</code>
            </li>
            <li class='mt-2 text-sm'>
            <strong>Only one valid answer exists.</strong>
            </li>`,
    starterCode: starterCodeTwoSum,
    order: 1,
};