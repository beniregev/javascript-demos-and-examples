function minAvgTwoSlice(A) {
  let minIndex = 0;
  let minAvg = (A[0] + A[1]) / 2;

  for (let i = 0; i < A.length - 1; i++) {
    const avg2 = (A[i] + A[i + 1]) / 2;
    if (avg2 < minAvg) {
      minAvg = avg2;
      minIndex = i;
    }

    if (i < A.length - 2) {
      const avg3 = (A[i] + A[i + 1] + A[i + 2]) / 3;
      if (avg3 < minAvg) {
        minAvg = avg3;
        minIndex = i;
      }
    }
  }

  return minIndex;
}

console.log(minAvgTwoSlice([4, 2, 2, 5, 1, 5, 8])); // 1
