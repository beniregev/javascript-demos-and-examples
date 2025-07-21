function binaryGap(N) {
  const bin = N.toString(2);
  let maxGap = 0, current = 0, counting = false;

  for (const c of bin) {
    if (c === '1') {
      if (counting) maxGap = Math.max(maxGap, current);
      counting = true;
      current = 0;
    } else if (counting) {
      current++;
    }
  }

  return maxGap;
}

console.log(binaryGap(529)); // 4
console.log(binaryGap(20));  // 1
console.log(binaryGap(15));  // 0
