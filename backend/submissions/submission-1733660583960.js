
            function twoSum(nums, target) {
    const map = new Map(); // Store number and its index
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

            let nums = undefined;
            let target = undefined;
            let response = twoSum(nums, target);
            console.log(JSON.stringify({ result: response, expected: [["[0,1]","[1,2]","[0,1]"]], passed: JSON.stringify(response) === JSON.stringify([["[0,1]","[1,2]","[0,1]"]]) }));
        