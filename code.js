function sum(a) {
    var sum = a[0];
    for(var i = 1; i < a.length; i++) {
        sum += a[i];
    }
    if (a.length == 0) {
        sum = 0;
    }
    return sum;
}
