function solutionNailingPlanks(A, B, C) {
  const M = C.length;
  function canNail(k) {
    const nail = Array(Math.max(...C) + 1).fill(Infinity);
    for (let i = 0; i < k; i++) nail[C[i]] = Math.min(nail[C[i]], i);
    for (let i = 1; i < nail.length; i++) {
      nail[i] = Math.min(nail[i], nail[i - 1]);
    }
    return A.every((a, i) => nail[B[i]] < Infinity && nail[B[i]] >= nail[a]);
  }
  let left = 1, right = M, ans = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canNail(mid)) { ans = mid; right = mid - 1; }
    else left = mid + 1;
  }
  return ans;
}

// Function: nailingPlanks(A, B, C)

console.log(nailingPlanks([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2])); // ➜ 4
console.log(nailingPlanks([1], [1], [1]));                                 // ➜ 1 (edge)
console.log(nailingPlanks([1, 2, 3], [3, 4, 5], [5, 4, 3, 2, 1]));         // ➜ 3
console.log(nailingPlanks([1, 2, 3], [4, 5, 6], Array(100000).fill(3)));   // ➜ -1 (some planks not nailed)
