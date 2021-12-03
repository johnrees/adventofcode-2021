const input = `
forward 5
down 5
forward 8
up 3
down 8
forward 2
`;

const parse = (data) => {
  const [horizontal, depth] = data
    .split("\n")
    .filter(Boolean)
    .reduce(
      (acc, curr) => {
        const [direction, amount] = curr.split(" ");
        switch (direction) {
          case "forward":
            return [acc[0] + +amount, acc[1]];
          case "up":
            return [acc[0], acc[1] - +amount];
          case "down":
            return [acc[0], acc[1] + +amount];
        }
      },
      [0, 0]
    );
  return horizontal * depth;
};

test("test", () => {
  expect(parse(input)).toEqual(150);
});

const { readFileSync } = require("fs");
const { join } = require("path");
console.log(parse(readFileSync(join(__dirname, "input.txt")).toString()));
