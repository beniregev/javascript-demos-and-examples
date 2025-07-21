function numberOfDiscIntersections(A) {
  const N = A.length;
  const start = A.map((r, i) => i - r).sort((a, b) => a - b);
  const end = A.map((r, i) => i + r).sort((a, b) => a - b);
  let intersections = 0, open = 0, j = 0;
  for (let i = 0; i < N; i++) {
    while (j < N && start[j] <= end[i]) {
      open++;
      j++;
    }
    open--;
    intersections += open;
    if (intersections > 10_000_000) return -1;
  }
  return intersections;
}

// Function: numberOfDiscIntersections(A)

console.log(numberOfDiscIntersections([1, 5, 2, 1, 4, 0])); // ➜ 11
console.log(numberOfDiscIntersections([1, 1, 1]));          // ➜ 3
console.log(numberOfDiscIntersections([0, 0, 0]));          // ➜ 0
console.log(numberOfDiscIntersections(Array(100000).fill(0))); // ➜ 0 (large edge case)
