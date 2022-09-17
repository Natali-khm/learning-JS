function duplicateEncode(word) {
  word = word.toLowerCase();
  let obj = {};
  for (let i of word) {
    if (obj[i]) {
      obj[i]++;
    } else obj[i] = 1;
  }

  return word
    .split("")
    .map((el) => {
      return obj[el] > 1 ? ")" : "(";
    })
    .join("");
}
duplicateEncode("Success");
