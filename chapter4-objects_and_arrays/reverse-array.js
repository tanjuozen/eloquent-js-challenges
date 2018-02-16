function reverseArray(arr){
    var reversedArr = [];
    for(var i = 0; i < arr.length; i++){
        reversedArr.unshift(arr[i]);
    }
    return reversedArr;
}