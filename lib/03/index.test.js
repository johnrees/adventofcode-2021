const {
  filter,
  map,
  pipe,
  split,
  transpose,
  reduce,
  _,
  curry,
  curryN,
} = require("ramda");

const input = `
00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
`;

const one = (input) => {
  const lines = pipe(split("\n"), filter(Boolean))(input);

  const nums = pipe(
    transpose,
    map((nums) => [nums.filter((x) => x === "1").length, nums.length / 2]),
    map(([count, length]) => (count > length ? 1 : 0)),
    reduce((acc, curr) => acc.concat(curr), "")
  )(lines);

  const gamma = parseInt(nums, 2);
  const epsilon = ~gamma & parseInt("1".repeat(lines[0].length), 2);
  return gamma * epsilon;
};

test("one", () => {
  expect(one(input)).toEqual(198);
});
