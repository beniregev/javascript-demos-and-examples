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

console.log(maxProfit([23171,21011,21123,21366,21013,21367])); // 356
