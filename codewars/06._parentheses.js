function validParentheses(parens) {
  let arr = [];
  let popped;
  for (let el of parens) {
    if (el === "(") {
      arr.push(el);
    } else {
      let popped = arr.pop();
      if (!popped) return false;
    }
  }
  return !arr.length;
}

console.log(validParentheses(")()"));
