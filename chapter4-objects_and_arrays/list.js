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

function deepEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (
    first == null ||
    second == null ||
    typeof first != "object" ||
    typeof second != "object"
  ) {
    return false;
  }

  var firstPropCount = 0,
    secondPropCount = 0;

  for (prop in first) {
    firstPropCount += 1;
  }
  for (prop in second) {
    secondPropCount += 1;
    if (!(prop in first) || !deepEqual(first[prop], second[prop])) {
      return false;
    }
  }
  return firstPropCount == secondPropCount;
}
