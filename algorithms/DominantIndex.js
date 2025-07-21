function dominantIndex(A) {
  let size = 0, value = null;

  for (const num of A) {
    if (size === 0) {
      value = num;
      size = 1;
    } else {
      size += (num === value) ? 1 : -1;
    }
  }

  if (size === 0) return -1;

  let count = 0, idx = -1;
  A.forEach((num, i) => {
    if (num === value) {
      count++;
      idx = i;
    }
  });

  return count > A.length / 2 ? idx : -1;
}

console.log(dominantIndex([3,4,3,2,3,3,3,3])); // any index of 3, e.g., 0
console.log(dominantIndex([1,2,3,4]));         // -1
