/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0; // accumulator
  for (let i = 1; i <= n; i++) {
    sum += i; // update accumulator
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") return NaN; // guard
  if (n < 0) return undefined; // guard
  if (n === 0) return 1; // special case

  let product = 1; // accumulator
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number") return null; // guard
  if (n <= 0) return []; // guard

  const out = []; // accumulator (array)
  for (let i = 1; i <= n; i++) {
    out.push(i);
  }
  return out;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  // Assume tests give a non-empty array. If empty, this returns "".
  let longest = strings[0] ?? "";

  for (const s of strings) {
    if (s.length > longest.length) {
      longest = s;
    }
  }
  return longest;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let count = 0; // accumulator
  for (const isHere of attendance) {
    if (isHere === true) count += 1;
  }
  return count;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== "string") return null; // guard

  const map = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  let out = "";
  for (const ch of dna) {
    if (!(ch in map)) return null; // safety guard if unexpected character
    out += map[ch];
  }
  return out;
}
