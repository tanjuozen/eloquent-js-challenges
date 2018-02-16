function arrayToList(arr) {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list
    };
  }
  return list;
}

function listToArray(list) {
  var arr = [];
  for (var node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, index) {
  if (!list) {
    return undefined;
  } else if (index == 0) {
    return list.value;
  }
  return nth(list.rest, index - 1);
}
