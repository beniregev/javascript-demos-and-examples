function minLargestArea(A, B, K) {
  function possible(maxArea, horizontalCuts) {
    const rects = (horizontalCuts + 1) * Math.ceil((B) / (Math.floor(maxArea / Math.ceil(A/(horizontalCuts+1)))));
    return rects <= K;
  }
  let low = 1, high = A * B;
  let ans = high;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    let found = false;
    for (let hCuts = 0; hCuts < K; hCuts++) {
      if (possible(mid, hCuts)) { found = true; break; }
    }
    if (found) { ans = mid; high = mid - 1; }
    else low = mid + 1;
  }
  return ans;
}

// Function: rectangleCutting(A, B)

console.log(rectangleCutting(6, 4)); // ➜ 5 (4 cuts to make 6×4 into squares)
console.log(rectangleCutting(5, 3)); // ➜ 4
console.log(rectangleCutting(1, 1)); // ➜ 0 (already a square)
console.log(rectangleCutting(1000000, 1)); // ➜ 999999 (extreme edge case)
