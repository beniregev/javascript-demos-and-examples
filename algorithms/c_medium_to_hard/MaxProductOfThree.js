function maxProductOfThree(A) {
  A.sort((a, b) => a - b);
  const n = A.length;
  return Math.max(
    A[n - 1] * A[n - 2] * A[n - 3],
    A[0] * A[1] * A[n - 1]
  );
}

console.log(maxProductOfThree([-3, 1, 2, -2, 5, 6])); // 60
