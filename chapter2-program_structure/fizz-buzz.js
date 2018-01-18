function printFizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if ((i % 3 === 0) && (i % 15 !== 0)) {
            console.log("Fizz");
        }
        else if ((i % 5 === 0) && (i % 15 !== 0)) {
            console.log("Buzz");
        }
        else if ((i % 15 === 0)) {
            console.log("FizzBuzz");
        } else {
            console.log(i);
        }
    }
}

function printFizzBuzz2() {
    for (var i = 1; i <= 100; i++) {
        var str = "";
        if (i % 3 === 0) {
            str += "Fizz";    
        }
        if (i % 5 === 0) {
            str += "Buzz";
        }
        console.log(str || i);
        
    }
}