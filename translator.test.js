const { translateText, translateMorse } = require("./translator");

describe("Test cases for a function that tanslates English to morse code, translateText(English → Morse)", () => {
  test("translates a single word correctly", () => {
    expect(translateText("HELLO")).toBe(".... . .-.. .-.. ---");
  });
  test("translates a multiple words correctly", () => {
    expect(translateText("HELLO WORLD")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
  });
  test("handles lowercase input by converting to uppercase", () => {
    expect(translateText("hello")).toBe(".... . .-.. .-.. ---");
  });
  test("returns # for unsupported characters", () => {
    expect(translateText("HI!")).toBe(".... .. #");
  });

  test("returns an empty string when given empty input", () => {
    expect(translateText("")).toBe("");
  });
});

describe("Test cases for a function that tanslates morse code to English, translateMorse(Morse → English)", () => {
  test("translates a single Morse word correctly", () => {
    expect(translateMorse(".... . .-.. .-.. ---")).toBe("HELLO");
  });

  test("translates multiple Morse words correctly", () => {
    expect(translateMorse(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")).toBe(
      "HELLO WORLD"
    );
  });

  test("returns # for unknown Morse sequences", () => {
    expect(translateMorse(".... .. ..--..")).toBe("HI#");
  });

  test("handles extra spaces gracefully", () => {
    expect(translateMorse(".... / . / .-.")).toBe("H E R"); // depends on your design
  });

  test("returns empty string for empty input", () => {
    expect(translateMorse("")).toBe("");
  });
});
