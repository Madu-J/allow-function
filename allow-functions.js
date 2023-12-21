/** 
 * To  run this file in Gitpod, use the
 * command node allow-functions.js in the terminal
 */

// Vanilla Javascript Function
// function addTwoNumbers(a, b) {
    // Code block
//    return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Allow Function with Parameters
const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// single Line Allow  function wih Parameters
// const addTwoNumbers = (a, b) => (a + b); also Valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there');

const sayHello = () => console.log('Hello');


// Returning Multiple Lines

const returnMultipleLines = () => (
    <p>
        This is multiple string!
    </p>
)
console.log(returnMultipleLines());