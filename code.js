const { array } = require("jsverify");

function sum(a) {
    var sum = a[0];
    for(var i = 1; i < a.length; i++) {
        sum += a[i];
    }
    if (a.length == 0) {
        sum = 0;
    }
    console.log("Length",a.length)
    console.log("Array:(",a)
    console.log("Sum:(", sum)
    return sum;
}
