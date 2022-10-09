/*
Exercise 2
For this exercise you are required to perform the following tasks:
- Define a number variable and assign a number to it.
- Implement an if else statement which checks if the number assigned to the variable is
greater than 0. If it is, then output a message to the console indicating this is the case,
otherwise output a message to the console indicating this is not the case.
For example, if the value assigned to the number variable is 1, then the output on the screen should
be similar to the following:
Test the code to check you get the expected output when assigning a range of different values
(positive and negative) to the variable.
*/
/*
let num: number = 1;

if (num > 0) {
    console.log("value assigned to variable is greater than 0");
} else if (num == 0) {
    console.log("value assignet to variable is equal to 0");
} else {
    console.log("value assigned to variable is less than 0");
}

*/
function testValue(x: number): void {
    if (x > 0)
        return console.log("value assigned to variable is greater than 0");
    else if (x == 0)
        return console.log("value assignet to variable is equal to 0");
    else
        return console.log("value assigned to variable is less than 0");
}
