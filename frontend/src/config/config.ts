export function inputOutputConfig(problemType: string) {
    const inputOutputConfigObj = {
        'two-sum': {
            input: [
                { nums: [2, 7, 11, 15], target: 9 },
                { nums: [3, 2, 4], target: 6 },
                { nums: [3, 3], target: 6 },
            ],
            output: [[0, 1], [1, 2], [0, 1]],
        },
    };

    if (!inputOutputConfigObj[problemType]) {
        throw new Error(`Unsupported problem type: ${problemType}`);
    }

    return inputOutputConfigObj[problemType];
}
