function minAbsSumOfTwo(A) {
  A.sort((a, b) => a - b);
  let left = 0, right = A.length - 1;
  let best = Infinity;
  while (left <= right) {
    const sum = A[left] + A[right];
    best = Math.min(best, Math.abs(sum));
    if (sum > 0) right--;
    else left++;
  }
  return best;
}

// Function: minAbsSumOfTwo(A)

console.log(minAbsSumOfTwo([-8, 4, 5, -10, 3]));          // ➜ 1
console.log(minAbsSumOfTwo([1, 4, -3]));                  // ➜ 1
console.log(minAbsSumOfTwo([0, 0, 0]));                   // ➜ 0
console.log(minAbsSumOfTwo([-1000000000, 1000000000]));   // ➜ 0 (extreme)
