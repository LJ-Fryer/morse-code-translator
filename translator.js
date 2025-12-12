// A to Z in Morse Code
const morseAlphabet = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};
// # indicates untranslatable character

const form = document.querySelector("#translator-form");
const input = document.querySelector("#translator-input");
const output = document.querySelector("#translator-output");

const morseToEnglish = Object.fromEntries(
  Object.entries(morseAlphabet).map(([letter, morse]) => [morse, letter])
);
// console.log("test");

function translateText(textInput) {
  const morseWords = textInput.split(" ").map((word) => {
    const morseCharacters = word.split("").map((ch) => {
      return morseAlphabet[ch] || "#";
    });
    return morseCharacters.join(" ");
  });
  console.log(morseWords.join(" / "));
  return morseWords.join(" / ");
}

function translateMorse(morseInput) {
  const englishWords = morseInput
    .trim()
    .split(" / ")
    .map((morseWord) => {
      const englishChars = morseWord.split(" ").map((symbol) => {
        return morseToEnglish[symbol] || "#";
      });
      return englishChars.join("");
    });
  return englishWords.join(" ");
}

function handleSubmit(e) {
  e.preventDefault();
  const textInput = input.value.toUpperCase();
  const regex = /^[a-zA-Z]+$/;
  if (regex.test(textInput)) {
    output.textContent = translateText(textInput);
  } else {
    output.textContent = translateMorse(textInput);
  }
}

form.addEventListener("submit", handleSubmit);

module.exports = { translateText, translateMorse };
