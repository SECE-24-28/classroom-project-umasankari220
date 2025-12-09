//Templates Literals
var name="John"
var age=30
var str ='My name is ${name} and I am ${age} years old'
console.log(str);
console.log( '${ name} age is ${age} ');
console.log(name + ' age is ' + age);

//Map
var arr =[1,2,3,4,5];
var double = arr.map(num=>num*2);
console.log(double);

//Filter
var arr =[1,2,3,4,5,6];
var even = arr.filter(num=>num%2===0);
console.log(even);

//Reduce
var arr =[1,2,3,4,5];
var sum = arr.reduce((acc,num)=>acc+num,0);
console.log(sum);

//promise
const promise = new Promise((resolve,reject)=>{
    var success = true;
    if(success){
        resolve("success");
    }else{
        reject("Failed");
    }
})
promise.then((msg) => console.log(msg))
    .catch((err) => console.log(err))


const getData = ()=> {
    return fetch('https://jsonplaceholder.typicode.com/posts');
}
getData().then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

//async await
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchData();
