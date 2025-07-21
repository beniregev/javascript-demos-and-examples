function maxPairs(arr) {
    const freq = new Map();
    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const keys = Array.from(freq.keys());
    const sumToPairs = new Map();

    for (let i = 0; i < keys.length; i++) {
        const a = keys[i];
        const countA = freq.get(a);

        // Pair a with a
        const selfPairs = Math.floor(countA / 2);
        if (selfPairs > 0) {
            const sum = a + a;
            sumToPairs.set(sum, (sumToPairs.get(sum) || 0) + selfPairs);
        }

        // Pair a with b where b > a
        for (let j = i + 1; j < keys.length; j++) {
            const b = keys[j];
            const countB = freq.get(b);
            const sum = a + b;
            const pairCount = Math.min(countA, countB);
            sumToPairs.set(sum, (sumToPairs.get(sum) || 0) + pairCount);
        }
    }

    let maxPairs = 0;
    for (let val of sumToPairs.values()) {
        maxPairs = Math.max(maxPairs, val);
    }

    return maxPairs;
}

// Test cases
console.log(maxPairs([10,1,3,1,2,2,1,0,4])); // 3
console.log(maxPairs([9,9,9,9,9]));          // 2
console.log(maxPairs([1,5,3,3,4,2]));        // 3
