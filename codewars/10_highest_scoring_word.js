/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

function high(x){
    let alphabet = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let checkedWords = x.split(" ");
    
    let scoresOfWords = checkedWords.map((word) => {
      let wordLetters = word.split("");
      let wordScore = wordLetters.map((char) => alphabet.indexOf(char));
      return wordScore.reduce((acc, el) => acc + el);
    });
    let maxScore = Math.max(...scoresOfWords);
    let indexOfMax = scoresOfWords.indexOf(maxScore);
    return checkedWords[indexOfMax];
}

high('d bb');
