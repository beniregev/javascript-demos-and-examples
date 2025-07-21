function minimizeMaxDivision(K, M, A) {
  function check(maxSum) {
    let used = 1, sum = 0;
    for (const x of A) {
      sum += x;
      if (sum > maxSum) { used++; sum = x; }
      if (used > K) return false;
    }
    return true;
  }

  let left = Math.max(...A), right = A.reduce((a, b) => a + b, 0);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) right = mid - 1;
    else left = mid + 1;
  }
  return left;
}

// Function: minMaxDivision(K, A)

console.log(minMaxDivision(3, [2, 1, 5, 1, 2, 2, 2])); // ➜ 6
console.log(minMaxDivision(1, [1, 1, 1, 1]));          // ➜ 4 (no division possible)
console.log(minMaxDivision(4, [1, 1, 1, 1]));          // ➜ 1
console.log(minMaxDivision(100000, Array(100000).fill(1))); // ➜ 1 (each block size is 1)
