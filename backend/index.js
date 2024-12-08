const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");
const {
    ensureSubmissionsDir,
    createTempFile,
    executeCode
} = require("./utils");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/submit", async (req, res) => {
    const { code, inputs, expected_output, problem_type } = req.body;
    console.log({code, inputs, expected_output, problem_type});
    

    if (!code || !inputs || !problem_type || !expected_output) {
        return res.status(400).send({ error: "Invalid payload structure" });
    }

    try {
        // Ensure submissions directory exists
        await ensureSubmissionsDir();

        // Create a temporary file for the code
        const filePath = await createTempFile(
            code,
            inputs,
            problem_type,
            expected_output
        );

        // Execute the code and get the output
        let output;
        try {
            output = await executeCode(filePath);
        } catch (executionError) {
            console.error("Execution error:", executionError);
            return res.status(500).send({
                error: "Code execution failed",
                details: executionError
            });
        }

        // Cleanup file after execution
        // await fs.unlink(filePath);

        // Return the output
        res.send({
            problem_type,
            inputs,
            output: JSON.parse(output)
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send({
            error: "Something went wrong",
            details: error.message
        });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Code submission service running on port ${PORT}`);
});
