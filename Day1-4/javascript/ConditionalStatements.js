a=20
if (a % 2 == 0) {
  b=2
} else {
  b=3
}
console.log(b)

a = 150
b = a % 2 == 0 ? 2 : 3
console.log(b)

//even or odd using conditional statements using if statement
a = 110
if (a % 2 == 0) {
 if (marks >= 90) {
  console.log("A")
} if (marks >= 80) {
  console.log("B")
} if (marks >= 70) {
  console.log("C")
} if (marks >= 60) {
  console.log("D")
} else {
  console.log("F")
} console.log("Even")
} else {
  console.log("Odd")
} 
//even or odd using conditional statements using single if statement without else with triple equal to
a = 8
if (a % 2 === 0) 
  console.log("Even")

//USE TERNARY OPERATOR TO CHECK EVEN OR ODD
a = 20
result = (a % 2 === 0) ? "Even" : "Odd"
console.log(result) 

//USE TERNARY OPERATOR FOR GRADE CHECKING
marks = 85
grade = (marks >= 90) ? "A" : (marks >= 80) ? "B" : (marks >= 70) ? "C" : (marks >= 60) ? "D" : "F"
console.log(grade)

//voting eligibility using if else
a = 20
if (a >= 18) {
  console.log("Eligible to vote")
} else {
  console.log("Not eligible to vote")
} 

//switch case
day = 6
switch (day) {
  case 1:
    console.log("SUNDAY")
    break;
  case 2:
    console.log("MONDAY")
    break;
  case 3:
    console.log("TUESDAY")
    break;
  case 4:
    console.log("WEDNESDAY")
    break;
  case 5:
    console.log("THURSDAY")
    break;
  case 6:
    console.log("FRIDAY")
    break;
  case 7:
    console.log("SATURDAY")
    break;
  default:
    console.log("Invalid")  
}

function add(){
    console.log(10+20);
}
add();

function addparam(a,b){
    console.log(a+b);
}
addparam(10,20); //30

//destructuring
var arr = [1,2,3,4,5];
var [a,b,c,d,e] = arr;
console.log(a,b,c,d,e); 

var obj = {
    "name": "Sankari",
    "age": 18,
    "city": "Coimbatore"
}
var {name,age,city} = obj;
console.log(name,age,city); 

