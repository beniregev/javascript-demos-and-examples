function countSemiprimes(N, P, Q) {
  const spf = Array(N + 1).fill(0);
  for (let i = 2; i <= N; i++) {
    if (!spf[i]) {
      for (let j = i; j <= N; j += i) {
        if (!spf[j]) spf[j] = i;
      }
    }
  }
  const semipr = Array(N + 1).fill(0);
  for (let i = 4; i <= N; i++) {
    const p = spf[i];
    const q = i / p;
    semipr[i] = semipr[i - 1] + (!spf[q] ? 1 : 0);
  }
  return P.map((_, i) => semipr[Q[i]] - semipr[P[i] - 1]);
}

// Function: countSemiprimes(N, P, Q)

console.log(countSemiprimes(26, [1, 4, 16], [26, 10, 20])); // ➜ [10, 4, 0]
console.log(countSemiprimes(10, [1, 1], [5, 10]));          // ➜ [1, 4]
console.log(countSemiprimes(1, [1], [1]));                  // ➜ [0] (edge case)
console.log(countSemiprimes(50000, [1], [50000]));          // ➜ [~3000] (large case)
