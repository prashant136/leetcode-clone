import { Questions } from "../types/questionType";
import example from "./images/reverseLL.jpg";

const starterCodeReverseLinkedListJS = `
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Do not edit function name
function reverseLinkedList(head) {
  // Write your code here
};`;

export const reverseLinkedList: Questions = {
    id: "reverse-linked-list",
    title: "2. Reverse Linked List",
    problemStatement: `<p class='mt-3'>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>
	`,
    examples: [
        {
            id: 0,
            inputText: "head = [1,2,3,4,5]",
            outputText: "[5,4,3,2,1]",
            img: example,
        },
        {
            id: 1,
            inputText: "head = [1,2,3]",
            outputText: "[3,2,1]",
        },
        {
            id: 2,
            inputText: "head = [1]",
            outputText: "[1]",
        },
    ],
    constraints: `<li class='mt-2'>The number of nodes in the list is the range <code>[0, 5000]</code>.</li>
<li class='mt-2'><code>-5000 <= Node.val <= 5000</code></li>`,
    starterCode: starterCodeReverseLinkedListJS,
    order: 2,
};