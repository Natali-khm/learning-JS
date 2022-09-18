function span(arr, predicate) {
  let trueArr = [];
  let falseArr = [];
  for (let el of arr) {
    if (predicate(el)) trueArr.push(el);
    else {
      falseArr = arr.slice(arr.indexOf(el));
      break;
    }
  }
  return [trueArr, falseArr];
}

var arr = [2, 4, 6, 1, 8, 10];

function isEven(x) {
  return Math.abs(x) % 2 === 0;
}

span(arr, isEven);
