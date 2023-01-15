function findUniq(arr) {
    arr.sort((a, b) => b - a);
    return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
  }
  
findUniq([2, 1, 1, 1, 1, 1]);
  