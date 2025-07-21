function longestValidBrackets(S) {
  const stack = [-1];
  const pairs = { ')': '(', ']': '[', '}': '{' };
  let maxLen = 0;

  for (let i = 0; i < S.length; i++) {
    const ch = S[i];
    if ('([{'.includes(ch)) stack.push(i);
    else {
      stack.pop();
      if (!stack.length) stack.push(i);
      else if (pairs[ch] === S[stack[stack.length - 1]]) {
        stack.pop();
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
        stack.push(i); // keep index for any other bracket unmatched
      } else stack.push(i);
    }
  }

  return maxLen;
}

// Function: multiBrackets(S)

console.log(multiBrackets("{[()()]}"));  // ➜ 1
console.log(multiBrackets("([)()]"));    // ➜ 0
console.log(multiBrackets(""));          // ➜ 1 (edge: empty string)
console.log(multiBrackets("(((((((((())))))))))")); // ➜ 1 (deeply nested)
