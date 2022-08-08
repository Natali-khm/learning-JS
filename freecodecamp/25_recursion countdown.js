function countDown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = [];
    countArray.push(n);

    return countArray.concat(countDown(n - 1));
  }
}
console.log(countDown(5));
