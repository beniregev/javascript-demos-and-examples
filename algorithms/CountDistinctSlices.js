function countDistinctSlices(M, A) {
  const seen = Array(M + 1).fill(false);
  const N = A.length;
  let front = 0, back = 0, count = 0;

  while (front < N) {
    if (!seen[A[front]]) {
      seen[A[front]] = true;
      count += front - back + 1;
      if (count >= 1e9) return 1e9;
      front++;
    } else {
      seen[A[back]] = false;
      back++;
    }
  }

  return count;
}

console.log(countDistinctSlices(6, [3,4,5,5,2])); // 9
