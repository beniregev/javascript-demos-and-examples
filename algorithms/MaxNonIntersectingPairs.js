function maxPairs(arr) {
    const n = arr.length;
    if (n < 2) return 0;
    
    const sumToPairs = new Map();
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const sum = arr[i] + arr[j];
            if (!sumToPairs.has(sum)) {
                sumToPairs.set(sum, []);
            }
            sumToPairs.get(sum).push([i, j, arr[i], arr[j]]);
        }
    }
    
    let maxPairsCount = 0;
    let bestSum = 0;
    let bestPairs = [];
    
    for (const [sum, pairs] of sumToPairs) {
        pairs.sort((a, b) => a[1] - b[1]);
        
        let count = 0;
        let lastUsedIndex = -1;
        let selectedPairs = [];
        
        for (const [start, end, val1, val2] of pairs) {
            if (start > lastUsedIndex) {
                count++;
                lastUsedIndex = end;
                selectedPairs.push([start, end, val1, val2]);
            }
        }
        
        if (count > maxPairsCount) {
            maxPairsCount = count;
            bestSum = sum;
            bestPairs = selectedPairs;
        }
    }
    
    console.log(`Array: [${arr.join(',')}]`);
    console.log(`Best sum: ${bestSum}, Max pairs: ${maxPairsCount}`);
    console.log(`Selected pairs:`, bestPairs.map(p => `(${p[2]},${p[3]})`).join(', '));
    return maxPairsCount;
}

// Test cases
console.log(maxPairs([10,1,3,1,2,2,1,0,4]));    // 3
console.log(maxPairs([5, 3, 1, 3, 2, 3]));      // 1
console.log(maxPairs([9,9,9,9,9]));             // 2
console.log(maxPairs([1,5,3,3,4,2]));           // 3
