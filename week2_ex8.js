/*

Exercise 8 – Video 8
Implement a program which creates two number variables and assign values to them. Using a if else
if statement as well as logical operators AND (&&) and OR (||), determine if:
- both numbers are equal to 2, use logical AND (&&)
- one of the numbers is equal to 2, use logical OR (||)
o If one of the numbers is 2, print out which number entered is equal to 2.
- neither of the numbers is equal to 2
Output the result to the screen. If for example the number assigned to the first variable is 2 and the
number assigned to the second variable is 3, then the output should be similar to the following:

Mobile Applications Development – Typescript Exercises Week 2
Test the code assigning several different number values to the variables. Name the program
week2_ex8.ts.

*/
function testNum(num1, num2) {
    var outResult = "";
    if ((num1 == 2) && (num2 == 2)) {
        outResult = "Both numbers are equal to 2";
    }
    else if ((num1 == 2) || (num2 == 2)) {
        if (num1 == 2) {
            outResult = "First numbers is equal to 2";
        }
        else {
            outResult = "Second numbers is equal to 2";
        }
    }
    else {
        outResult = "neither of numbers is equal to 2";
    }
    console.log(outResult);
    return outResult;
}
function evaluateNum() {
    var updateText = "";
    // const input: HTMLInputElement | null
    var input1 = document.getElementById('firstNumber');
    var input2 = document.getElementById('secondNumber');
    if ((input1 || input2) != null) {
        // input has type HTMLInputElement here
        console.log(input1 === null || input1 === void 0 ? void 0 : input1.value); // "Initial value"
        console.log(input2 === null || input2 === void 0 ? void 0 : input2.value); // "Initial value"
        updateText = testNum(Number(input1 === null || input1 === void 0 ? void 0 : input1.value), Number(input2 === null || input2 === void 0 ? void 0 : input2.value));
    }
    var el = document.getElementById("result");
    //  Add text content to element
    if (el != null) {
        el.textContent = updateText;
    }
}
