function f1(){
    console.log("in f1");
}
function f2(){
    console.log("in f2");
}
function f3(){
    console.log("in f3");
}
function f4(){
    console.log("in f4");
}
function f5(){
    console.log("in f5");
}
/*//synchronous way of calling
f1();
f2();
f3();
f4();
f5();*/

//Asynchronous way of calling
f1();
f2();
setTimeout(f3, 3000); //asynchronous function
f4();
setTimeout(f1,1000);
f5();