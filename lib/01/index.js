const { readFileSync } = require("fs");
const { join } = require("path");
const {
  aperture,
  curryN,
  map,
  pipe,
  prop,
  reduce,
  split,
  sum,
  toString,
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
