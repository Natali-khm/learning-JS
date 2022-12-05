function findLongestWordLength(str) {
  return str
    .split(" ")
    .map((str) => str.length)
    .sort((a, b) => (b < a) - (a < b))
    .pop();
}

findLongestWordLength(
  "What if we try a super-long word such as otorhinolaryngology"
);
