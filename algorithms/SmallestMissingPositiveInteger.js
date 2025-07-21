function smallestMissingPositiveInteger(A) {
  const seen = new Set();
  
  // Add all positive numbers to a Set
  for (const num of A) {
    if (num > 0) {
      seen.add(num);
    }
  }

  // Check from 1 to N+1 to find the smallest missing number
  for (let i = 1; i <= A.length + 1; i++) {
    if (!seen.has(i)) {
      return i;
    }
  }
}

console.log(smallestMissingPositiveInteger([1, 3, 6, 4, 1, 2])); // 5
console.log(smallestMissingPositiveInteger([1, 2, 3]));          // 4
console.log(smallestMissingPositiveInteger([-1, -3]));           // 1
