// Array Destructuring 

let user = { name : "Alina", age : 1, job: "student", place: "Azerbaijan" };

//let {name, age} = user;

//const {name , ...others} = user;

//console.log(name);
//console.log(age);
//console.log(others); 

// TODO  ...rest operator ( rest/spread ) 

/*
function showUser({name,age}){
    return `${name} user is ${age}.`;
}  */

let array = [1,2,3,4,5];
let [one,two,three,four,five] = array;

//console.log(one,two,three,four,five);

const [firstElement, ...others] = array;

console.log(others);