const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// Example test cases for the Two Sum problem
const testCases = [
    { input: '[2,7,11,15], 9', expected: '[0,1]' },
    { input: '[3,2,4], 6', expected: '[1,2]' },
    { input: '[3,3], 6', expected: '[0,1]' }
];

// Temporary directory for user submissions
const TEMP_DIR = path.join(__dirname, 'submissions');

// Helper function to create a temporary file
const createTempFile = (code) => {
    const filePath = path.join(TEMP_DIR, `submission-${Date.now()}.js`);
    fs.writeFileSync(filePath, code);
    return filePath;
};

// Helper function to execute the submitted code
const executeCode = (filePath, input) => {
    return new Promise((resolve, reject) => {
        exec(`node ${filePath} ${input}`, (error, stdout, stderr) => {
            if (error) {
                reject(stderr || error.message);
            } else {
                resolve(stdout.trim());
            }
        });
    });
};

// Endpoint for code submission
app.post('/submit', async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).send({ error: 'Code is required' });
    }

    try {
        // Create a temporary file with the submitted code
        const filePath = createTempFile(code);

        // Run the code against all test cases
        const results = [];
        for (const { input, expected } of testCases) {
            try {
                const output = await executeCode(filePath, input);
                const passed = output === expected;
                results.push({ input, expected, output, passed });
            } catch (error) {
                results.push({ input, expected, error, passed: false });
            }
        }

        // Clean up the temporary file
        fs.unlinkSync(filePath);

        // Send back the results
        return res.send({ results });
    } catch (error) {
        return res.status(500).send({ error: 'Something went wrong', details: error.message });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Code submission service running on port ${PORT}`);
});
