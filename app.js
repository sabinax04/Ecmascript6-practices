// Parameter Defaults

function add( number1, number2=0 ){
    return number1 + number2; // 5 + undefined = NaN
}

console.log(add(5));