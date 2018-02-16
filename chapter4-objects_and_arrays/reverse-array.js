function reverseArray(arr) {
  var reversedArr = [];
  for (var i = 0; i < arr.length; i++) {
    reversedArr.unshift(arr[i]);
  }
  return reversedArr;
}

function reverseArrayInPlace(arr) {
  var tmp;
  // loop over half of the array
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;
    // swap(arr[i], arr[arr.length - 1 - i], tmp);
  }
  return arr;
}
/* function swap(x, y, tmp) {
    tmp = x;
    x = y;
    y = tmp;
} */
