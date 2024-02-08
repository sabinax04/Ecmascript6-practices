// Rest/Spread Operator

//let user = { name : "Sabina", age : 20, city : "Baku" };

//console.log(user);

//user = { ...user, city : "Norway" };

//console.log(user);

//function add(number1, number2, number3){
//    return number1 + number2 + number3;
//}

const numbers = [5,10,15];
const numbers2 = [20,25,30];

let attachArray = [...numbers, ...numbers2]

console.log(attachArray);

let attachArray2 = numbers.concat(numbers2);

console.log(attachArray2);

