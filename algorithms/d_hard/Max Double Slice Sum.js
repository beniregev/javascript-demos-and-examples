function maxDoubleSliceSum(A) {
  const N = A.length;
  const maxEnd = Array(N).fill(0);
  const maxStart = Array(N).fill(0);
  for (let i = 1; i < N; i++) {
    maxEnd[i] = Math.max(0, maxEnd[i - 1] + A[i]);
  }
  for (let i = N - 2; i >= 0; i--) {
    maxStart[i] = Math.max(0, maxStart[i + 1] + A[i]);
  }
  let maxSum = 0;
  for (let i = 1; i < N - 1; i++) {
    maxSum = Math.max(maxSum, maxEnd[i - 1] + maxStart[i + 1]);
  }
  return maxSum;
}

// Function: maxDoubleSliceSum(A)

console.log(maxDoubleSliceSum([3, 2, 6, -1, 4, 5, -1, 2])); // ➜ 17
console.log(maxDoubleSliceSum([5, 17, 0, 3]));              // ➜ 17
console.log(maxDoubleSliceSum([0, 10, -5, -2, 0]));         // ➜ 10
console.log(maxDoubleSliceSum([1, 1, 1]));                  // ➜ 0 (edge case, smallest valid array)
