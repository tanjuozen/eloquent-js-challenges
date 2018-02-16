function range(start, end) {
    var increment;
    var isDirectionNormal = (start < end) ? true : false;
    var arr = [];
    if (arguments.length === 3) {
        increment = arguments[2];
    } else {
        if(isDirectionNormal){
            increment = 1;
        } else {
            increment = -1;
        }
    }
    var isIncrementNegative = increment < 0 ? true : false;
    // check how the sequence will be, whether end is smaller than start
    if (isDirectionNormal) {
        console.log("start is smaller than end, normal loop");
        if (isIncrementNegative) {
            console.log("increment cannot be negative when the target end is higher than start");
            return null;
        }
        for (var i = start; i <= end; i += increment) {
            arr.push(i);
        }
        return arr;
    } else {
        console.log("start is higher than end, inverse loop");
        if (!isIncrementNegative) {
            console.log("increment cannot be positive when the target end is smaller than start");
            return null;
        }
        for (var i = start; i >= end; i += increment) {
            arr.push(i);
        }
        return arr;
    }
}







/* a[0] a[1] a[2] a[3] a[4] a[5] a[5] a[6];

start  start + 1                            end  */