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

const form = document.querySelector("#translator-form");
const input = document.querySelector("#translator-input");
const output = document.querySelector("#translator-output");
console.log("test");

function handleSubmit(e) {
  e.preventDefault();
  const userInput = input.value;
  const translated = translateText(userInput);
  console.log(
    "event:",
    e.target,
    "userinput:",
    input.value,
    "output:",
    translated
  );

  //   output.value = translated;
}
function translateText(userInput) {
  console.log("translate function working", userInput);
  return userInput;
}

form.addEventListener("submit", handleSubmit);
