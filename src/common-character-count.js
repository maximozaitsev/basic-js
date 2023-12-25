const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const count = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  let commonCount = 0;
  for (let i = 0; i < s2.length; i++) {
    if (count[s2.charCodeAt(i) - "a".charCodeAt(0)] > 0) {
      commonCount++;
      count[s2.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
