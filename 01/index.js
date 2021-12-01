const { join } = require("path");
const { readFileSync } = require("fs");
const {
  aperture,
  curryN,
  pipe,
  prop,
  split,
  reduce,
  toString,
  sum,
  map,
} = require("ramda");

const numbers = pipe(
  (file) => join(__dirname, file),
  curryN(1, readFileSync),
  toString,
  split("\n"),
  map(Number)
)("input.txt");

// ----- begin -----

const one = pipe(
  reduce(
    (acc, curr) => ({
      prev: curr,
      count: curr > acc.prev ? acc.count + 1 : acc.count,
    }),
    { prev: Infinity, count: 0 }
  ),
  prop("count")
);

console.log({ one: one(numbers) });

// prettier-ignore
const two = pipe(
  pipe(
    aperture(3),
    map(sum)
  ),
  one
);

console.log({ two: two(numbers) });
