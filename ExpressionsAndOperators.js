// The combination of operand and operator is Expression. i.e x+y = z.

// Assaignment Operators.
// An assaignment operators assaigns value to its left operand based on the value of its right operand. i.e const a = 9.
const x = 5;
const y = 6;

console.log(`is x and y equals? ${x === y}`);


//Arithmetic Operators example with the user input at terminal console.

// const a = 2;
// const b = 3;

const prompt = require('prompt');

prompt.start();

prompt.get(['input1', 'input2'], function(error, result) {

    if (error) {
        return onError(error);
    };

    console.log("Command Line Input Interface");
    console.log("Enter the first number: " + result.input1);
    console.log("Enter the second number: " + result.input2);

    const num1 = Number(result.input1);
    const num2 = Number(result.input2);

    // var add = Number(result.input1) + Number(result.input2);
    const add = num1 + num2;
    const subtract = num1 - num2;
    const multiply = num1 * num2;
    const divide = num1 / num2;
    const remainder = num1 % num2;

    console.log(`The addition is: ${add} \nThe subtraction is: ${subtract} \nThe multiplication is: ${multiply} \nThe division is: ${divide} \nThe remainder is ${remainder}\n\nEnd of Arithmetic operator example`);

    // return { add, subtract, multiply, divide };

});

function onError(error) {
    console.log(error);
    return 1;
};


// Pre and Post Increment and Decrement Operator.
var number = 10;
console.log(++number);
console.log(number++);
console.log(--number);
console.log(number--);


// Comparison Operators
const number1 = 4;
const number2 = 5;

console.log(number1 === number2);
console.log(number1 >= number2);
console.log(number1 <= number2);


// Logical Operators, logical operators are typically used with boolean values.
// and == &&, or == || , not == !

const a = 30;
const b = 20;

console.log(a >= b && b != 0); // must be both true.
console.log(a >= b || b == 0); //must be one true.
console.log(a != b);


//String Operators . + is the string concatination operator.
const namee = "bishal";
const caste = "Kunwar"
console.log("Hello " + "World");
console.log("My name is " + namee + " " + caste);


// Conditional (ternary) Operator



// extra time
// console.log(3 ** 3); 

// Swap example .

let a = 5;
let b = 10;

console.log(a, b);

let c = b;
b = a;
a = c;

console.log(a, b);

// Swap example without using third variable.
let a = 5;
let b = 15;

console.log(a, b);

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);