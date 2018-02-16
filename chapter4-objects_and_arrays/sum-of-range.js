function range(start, end, step) {
    var isDirectionNormal = (start < end) ? true : false;
    var arr = [];
    if(step == null){
        if(start < end){
            step = 1;
        } else {
            step = -1;
        }
    }
    // check how the sequence will be, whether end is smaller than start
   if(step > 0){
        for(var i = start; i <= end; i += step){
            arr.push(i);
        }
   } else {
       for(var i = start; i >= end; i += step){
            arr.push(i);
       }
   }
   return arr;
}

function sum(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}






/* a[0] a[1] a[2] a[3] a[4] a[5] a[5] a[6];

start  start + 1                            end  */