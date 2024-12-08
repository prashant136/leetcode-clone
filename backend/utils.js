const fs = require("fs").promises;
const path = require("path");
const { exec } = require("child_process");

// Directory for temporary submissions
const TEMP_DIR = path.join(__dirname, "submissions");

// Ensure submissions directory exists
const ensureSubmissionsDir = async () => {
    try {
        await fs.mkdir(TEMP_DIR, { recursive: true });
    } catch (err) {
        console.error("Error ensuring submissions directory:", err);
        throw new Error("Failed to create submissions directory");
    }
};

// Create temporary file for the submitted code
const createTempFile = async (code, inputs, problemType, expectedOutput) => {
    const formattedCode = formatCode(code, inputs, problemType, expectedOutput);
    const filePath = path.join(TEMP_DIR, `submission-${Date.now()}.js`);
    try {
        await fs.writeFile(filePath, formattedCode, "utf8");
        return filePath;
    } catch (error) {
        console.error("Error writing file:", error);
        throw new Error("Failed to create temporary file");
    }
};

// Execute code and return output
const executeCode = (filePath) => {
    return new Promise((resolve, reject) => {
        exec(`node ${filePath}`, (error, stdout, stderr) => {
            if (error) {
                return reject(stderr || error.message);
            }
            resolve(stdout.trim());
        });
    });
};


// Dynamic code formatting for each problem type
const formatCode = (code, inputs, problemType, expectedOutput) => {
    const problemFormatters = {
        "two-sum": ({ nums, target }) => `
            ${code}
            let nums = ${JSON.stringify(nums)};
            let target = ${target};
            let response = twoSum(nums, target);
            console.log(JSON.stringify({ result: response, expected: ${JSON.stringify(expectedOutput)}, passed: JSON.stringify(response) === JSON.stringify(${JSON.stringify(expectedOutput)}) }));
        `,
        "reverse-linked-list": ({ nums }) => `
            class ListNode {
                constructor(value, next = null) {
                    this.value = value;
                    this.next = next;
                }
            }
            function createLinkedList(arr) {
                let dummy = new ListNode(0);
                let current = dummy;
                for (let value of arr) {
                    current.next = new ListNode(value);
                    current = current.next;
                }
                return dummy.next;
            }
            function reverseLinkedList(head) {
                let prev = null;
                let current = head;
                while (current !== null) {
                    let nextNode = current.next;
                    current.next = prev;
                    prev = current;
                    current = nextNode;
                }
                return prev;
            }
            ${code}
            let head = createLinkedList(${JSON.stringify(nums)});
            let reversed = reverseLinkedList(head);
            console.log(JSON.stringify({ result: reversed, expected: ${JSON.stringify(expectedOutput)} }));
        `,
        "valid-parentheses": ({ input }) => `
            ${code}
            let response = isValidParentheses("${input}");
            console.log(JSON.stringify({ result: response, expected: ${JSON.stringify(expectedOutput)}, passed: response === ${JSON.stringify(expectedOutput)} }));
        `,
        // Add more problem types here
    };

    if (!problemFormatters[problemType]) {
        throw new Error(`Unsupported problem type: ${problemType}`);
    }

    return problemFormatters[problemType](inputs);
};

module.exports = {
    ensureSubmissionsDir,
    createTempFile,
    executeCode
};
