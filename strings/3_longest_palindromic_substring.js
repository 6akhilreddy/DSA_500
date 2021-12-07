// https://leetcode.com/problems/longest-palindromic-substring/
// notes num - 3

var longestPalindrome = function (s) {
  let maxLen = 1,
    start = 0,
    end = 0;
  for (let current = 0; current < s.length; current += 0.5) {
    const len = expandCenter(s, current);
    if (len > maxLen) {
      maxLen = len;
      start = current - (len - 1) / 2;
      end = current + len / 2;
    }
  }
  let output = "";
  for (let i = start; i <= end; i++) {
    output += s[i];
  }
  return output;
};

var expandCenter = function (s, current) {
  let i = Math.ceil(current - 1);
  let j = Math.floor(current + 1);
  let len = j - i - 1;
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--;
    j++;
    len += 2;
  }
  return len;
};
