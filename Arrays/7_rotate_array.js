// rotate the array by one
// https://leetcode.com/problems/rotate-array/
function rotate(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < arr.length) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
  }
  return arr;
}

function rotatektimes(arr, k) {
  k = k % arr.length;
  if (k === arr.length) return arr;

  const output = [];
  arr.forEach((val, i) => {
    if (i < k) {
      output.push(arr[arr.length + i - k]);
    } else {
      output.push(arr[i - k]);
    }
  });

  return output;
}

var rotatek = function (nums, k) {
  k = k % nums.length;
  if (k === nums.length) return;

  reverse(nums, 0, nums.length - k - 1);
  reverse(nums, nums.length - k, nums.length - 1);
  reverse(nums, 0, nums.length - 1);
};

var reverse = function (arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

//  const arr = [1,2,3,4,5]
//  rotate(arr)
//  console.log(arr)

const arr = [1, 3, 5, 7, 9];
console.log(rotatektimes(arr, 2));
