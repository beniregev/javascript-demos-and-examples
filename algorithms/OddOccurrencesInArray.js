function oddOccurrences(A) {
  return A.reduce((res, num) => res ^ num, 0);
}

console.log(oddOccurrences([9,3,9,3,9,7,9])); // 7
console.log(oddOccurrences([4]));             // 4
