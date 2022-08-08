function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) return [endNum];
  else {
    let arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
}
