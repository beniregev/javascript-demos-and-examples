function maximalRectangle(matrix) {
  if (!matrix.length) return 0;
  const cols = matrix[0].length;
  const height = Array(cols).fill(0);
  const stack = [];
  let maxArea = 0;

  function largestArea(h) {
    let area = 0;
    stack.length = 0;
    for (let i = 0; i <= h.length; i++) {
      const cur = i === h.length ? 0 : h[i];
      while (stack.length && cur < h[stack[stack.length - 1]]) {
        const top = stack.pop();
        const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
        area = Math.max(area, h[top] * width);
      }
      stack.push(i);
    }
    return area;
  }

  matrix.forEach(row => {
    for (let i = 0; i < cols; i++) {
      height[i] = row[i] === '1' ? height[i] + 1 : 0;
    }
    maxArea = Math.max(maxArea, largestArea(height));
  });

  return maxArea;
}

// Function: maximalRectangle(matrix)

console.log(maximalRectangle([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
])); // ➜ 6

console.log(maximalRectangle([
  ["0"]
])); // ➜ 0

console.log(maximalRectangle([
  ["1"]
])); // ➜ 1

console.log(maximalRectangle(Array(200).fill(Array(200).fill("1")))); // ➜ 40000 (extreme full matrix)
