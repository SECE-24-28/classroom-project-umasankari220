const { Profiler } = require("react");

obj = {
    "name": "Sankari",
    "age": 18,
    "city": "Coimbatore"
}
for(i = 0;i<Object.keys(obj).length;i++){
     console.log(i,obj[i]);
     console.log(i,Object.keys(obj)[i]);
}
for(i of Object.entries(obj)){ //keys
    console.log(i," is", obj[i]) 
}
for(array of Object.entries(obj)){ //entries
    console.log(array[0]," is ", array[1])
}

for (i = 0; i < 10; i++) {
    console.log(i);
}
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

//for in loop
var arr = [1,2,3,4,5];
for(i in arr){
    console.log(i);
}

//for of loop
var arr = [1,2,3,4,5];
for(i of arr){
    console.log(i);
}

//for each loop
var arr = [1,2,3,4,5];
arr.forEach(function(i){
    console.log(i);
})

//class and object
class Person{
    name;
    age;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

var person1 = new Person("Uma Sankari",18);
person1.display();

//prime number or not using if else with for loop
num = 29
isPrime = true
for (i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log("Prime")
} else {
    console.log("Not Prime")
}

//palindrome using for loop
var a = 121;

//factorial using for loop
num = 2
factorial = 1
for (i = 1; i <= num; i++) {
    factorial *= i
}
console.log(factorial) 

var a =10;//global scope
if(true){
    var b=20;//let block scope
    console.log(a);
}
console.log(a,b);

//hoisting
var a;//by javascript
console.log(a);
var a=10;

add();
function add(){
    console.log(10+20); 
}

//callback function
var demo = ()=>{
    console.log("Demo function");
}
var main = (callback)=>{
    console.log("Main function");
    callback();
}
main(demo);

var main1=(callback)=>{// callback is not keyword function - any name eg: cb ,call
    console.log("main called")
    callback();

}
main1(()=>{
    console.log("hello world!")
});

//with parameter use callback
var add=(a, b,callback)=>{
    var result=a+b;
    callback(result)
}   
add(10, 20, (res)=>{
    console.log(res)
})


console.log("Start")
var Demo=()=>{
    setTimeout(()=>{
        console.log("processing...")
    }, 2000)
}
Demo()