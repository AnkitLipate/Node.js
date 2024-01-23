exports.subtract=function(a,b){
    return a-b;
}

exports.addition=function(a,b,...c){
    console.log(a,b);
    console.log(c);
    s=a+b;
    for(var i=0; i<c.length;i++){
        s += c[i];
    }
    return s;
}