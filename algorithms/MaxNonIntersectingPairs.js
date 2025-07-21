function maxPairs(arr) {
    let maxPairs = 0;

    for (let target = 2; target <= 2000; target++) {
        let freq = new Map();
        for (let num of arr) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        let pairs = 0;
        for (let num of arr) {
            let complement = target - num;
            if ((freq.get(num) || 0) > 0 && (freq.get(complement) || 0) > 0) {
                if (num === complement && freq.get(num) >= 2) {
                    freq.set(num, freq.get(num) - 2);
                    pairs++;
                } else if (num !== complement && freq.get(num) > 0 && freq.get(complement) > 0) {
                    freq.set(num, freq.get(num) - 1);
                    freq.set(complement, freq.get(complement) - 1);
                    pairs++;
                }
            }
        }

        maxPairs = Math.max(maxPairs, pairs);
    }

    return maxPairs;
}

// Test cases
console.log(maxPairs([10, 1, 3, 1, 2, 2, 1, 0, 4])); // 3
console.log(maxPairs([9, 9, 9, 9, 9]));              // 2
console.log(maxPairs([1, 5, 3, 3, 4, 2]));           // 3
