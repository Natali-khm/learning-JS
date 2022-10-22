function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  string = string.toLowerCase();

  for (let el of alphabet) {
    if (!string.includes(el)) return false;
  }
  return true;
}

isPangram("Cwm fjord bank glyphs vext quiz");
