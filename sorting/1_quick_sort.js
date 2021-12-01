function partition(arr, first, last) {
  while (first < last) {
    if (arr[last] > arr[first]) last--;
    else if (arr[first] > arr[first + 1]) {
      [arr[first], arr[first + 1]] = [arr[first + 1], arr[first]];
      first++;
    } else {
      [arr[first + 1], arr[last]] = [arr[last], arr[first + 1]];
    }
  }
  return first;
}

function partitionMiddle(items, left, right) {
  // Your code here
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]];
      i++;
      j--;
    }
  }
  return i;
}

function quicksort(arr, first, last) {
  if (first >= last) return;

  let pIdx = partition(arr, first, last);

  quicksort(arr, first, pIdx - 1);
  quicksort(arr, pIdx + 1, last);
}

const arr = [7, 12, 2, 8, 4, 3, 6, 15, 9];
quicksort(arr, 0, arr.length - 1);
console.log(arr);
