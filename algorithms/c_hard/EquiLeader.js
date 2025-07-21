function equiLeader(A) {
  // Find leader candidate
  let size = 0, candidate = null;
  for (let v of A) {
    if (size === 0) {
      candidate = v;
      size++;
    } else {
      size += (v === candidate) ? 1 : -1;
    }
  }

  // Verify leader
  let count = 0;
  for (let v of A) {
    if (v === candidate) count++;
  }

  if (count <= A.length / 2) return 0;

  // Count equi leaders
  let equiLeaders = 0, leftCount = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === candidate) leftCount++;
    if (
      leftCount > (i + 1) / 2 &&
      (count - leftCount) > (A.length - i - 1) / 2
    ) {
      equiLeaders++;
    }
  }

  return equiLeaders;
}

console.log(equiLeader([4,3,4,4,4,2])); // 2
