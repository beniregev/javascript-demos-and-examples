function isProperlyNested(S) {
  const stack = [];
  const pairs = { ')': '(', ']': '[', '}': '{' };

  for (const ch of S) {
    if (pairs[ch]) {
      if (stack.pop() !== pairs[ch]) return false;
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0;
}

console.log(isProperlyNested("{[()]}")); // true
console.log(isProperlyNested("([)()]")); // false
