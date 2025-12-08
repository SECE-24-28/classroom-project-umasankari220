var a;//global scope
a=10;
var a=20;

let b;//block scope
b =10;
b=20;

const c = 10;//block scope with constant value

var p =20;//number
var q = "hello";//string
var bool = true;//boolean
var r;//undefined
var n = null;//null
var undef = undefined;//undefined
var big =1067543789463789463789463789n;//bigint
var sym = Symbol("id");//symbol

console.log(typeof p);
console.log(typeof q);
console.log(typeof bool);
console.log(typeof r);
console.log(typeof n);
console.log(typeof undef);
console.log(typeof big);
console.log(typeof sym);

var arr = [1,2,3,4,5];//array
console.log(arr);
console.log(typeof arr);

 arr = [1,2,3,4,5];//array
console.log(arr);

var object = {
    name: "Sankari",
    age: 18,
    city: "Coimbatore"
};//object
console.log(object);
console.log(typeof object);

//arthmetic operators
var x = 10;
var y = 5;
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);

//relational operators
var x = 10;
var y = 5;
console.log("Greater than:", x > y);
console.log("Less than:", x < y);
console.log("Greater than or equal to:", x >= y);
console.log("Less than or equal to:", x <= y);
console.log("Equal to:", x == y);
console.log("Not equal to:", x != y);

//assignment operators
var x = 10;
x += 5;
console.log(x);
x -= 3;
console.log(x);
x *= 2;
console.log(x);
x /= 4;
console.log(x);
x %= 3;
console.log(x);

//logical operators
var x = 10;
var y = 5;
console.log("And:", x > y && x < y); 
console.log("Or:", x > y || x < y); 
console.log("Not:", !(x > y));
