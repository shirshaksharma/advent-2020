const fs = require("fs");

// Part 1
const isValid1 = (password) => {
  const split = password.split(" ");
  const character = split[1].slice(0, 1);
  const [min, max] = split[0].split("-");
  const value = split[2];

  const characterCount = value.split(character).length - 1;

  return characterCount >= min && characterCount <= max;
};

// Part 2
const isValid2 = (password) => {
  const split = password.split(" ");
  const character = split[1].slice(0, 1);
  const [firstPosition, secondPosition] = split[0].split("-");
  const value = split[2];

  const firstPositionValid = value[Number(firstPosition) - 1] === character;
  const secondPositionValid = value[Number(secondPosition) - 1] === character;

  return (firstPositionValid ^ secondPositionValid) === 1;
};

fs.readFile("code/two/input.txt", "utf-8", (err, data) => {
  const passwords = data.split("\n");

  const valid = [];
  const invalid = [];

  const result = passwords.reduce(
    (acc, p) => {
      if (isValid1(p)) {
        acc.valid1 = acc.valid1 + 1;
      }
      if (isValid2(p)) {
        acc.valid2 = acc.valid2 + 1;
      }
      return acc;
    },
    {
      valid1: 0,
      valid2: 0,
    }
  );

  console.log("Valid:", result);
});
