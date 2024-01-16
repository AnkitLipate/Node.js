exports.addition=function(a,b){
    return parseInt(a)+parseInt(b);
}

exports.factorial=function(n){
    var fact = 1;
    for(var i=1; i<=n; i++){
        fact*=i;

    }
    return fact;
}

/*f = factorial(5);
console.log("Factorial: "+f);
s = addition(13,15);
console.log("Addition: "+s);*/