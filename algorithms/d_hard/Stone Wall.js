function stoneWall(H) {
  const stack = [];
  let blocks = 0;
  for (const h of H) {
    while (stack.length && stack[stack.length - 1] > h) {
      stack.pop();
      blocks++;
    }
    if (!stack.length || stack[stack.length - 1] < h) {
      stack.push(h);
    }
  }
  blocks += stack.length;
  return blocks;
}

// Function: stoneWall(H)

console.log(stoneWall([8, 8, 5, 7, 9, 8, 7, 4, 8])); // ➜ 7
console.log(stoneWall([1, 2, 3, 3, 2, 1]));          // ➜ 3
console.log(stoneWall([1]));                        // ➜ 1 (edge)
console.log(stoneWall(Array(100000).fill(1000000000))); // ➜ 1 (flat wall, performance)
