function maxProfit(A) {
  if (A.length < 2) return 0;

  let minPrice = A[0];
  let maxProfit = 0;

  for (const price of A) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}

// Function: maxProfit(A)

console.log(maxProfit([23171, 21011, 21123, 21366, 21013, 21367])); // ➜ 356
console.log(maxProfit([5, 4, 3, 2, 1]));                           // ➜ 0 (decline only)
console.log(maxProfit([1]));                                      // ➜ 0 (edge)
console.log(maxProfit(Array.from({length: 100000}, (_, i) => i))); // ➜ 99999
