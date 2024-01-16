exports.addition=function(a,b){
    return parseInt(a)+parseInt(b);
}

exports.name = "this is name variable";

factorial=function(n){
    var fact = 1;
    for(var i=1; i<=n; i++){
        fact*=i;

    }
    return fact;
}

exports.permutation=function(n,r){
    nf=factorial(n);
    nmr = factorial(n-r);
    return nf/nmr;
}