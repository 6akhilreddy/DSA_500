// https://leetcode.com/problems/count-and-say/
// notes num - 2

var countAndSay = function (A) {
  if (A === 1) return "1";
  let strNum = countAndSay(A - 1);
  let output = "";
  const strArr = [...strNum];
  for (let i = 0; i < strArr.length; i++) {
    let val = i;
    let c = 0;
    while (i < strArr.length && strArr[i] === strArr[val]) {
      i++;
      c++;
    }
    i--;
    output += c + strArr[val];
  }
  return output;
};
