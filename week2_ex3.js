/*

Exercise 3 – Video 4
For this exercise you are required to perform the following tasks:
- Define a number variable for a salary and assign a number to it. This number will represent a
gross salary.
- Implement an if else if statement to determine a net salary. Based on the salary, different
tax deductions are applied to the gross salary to give the net salary.
- Following tax rules to apply:
o salary >= 60000 apply 60% tax deduction
o salary >= 40000 apply 40% tax deduction
o salary >= 20000 apply 20% tax deduction
o salary < 20000 apply 10% tax deduction
o Output the gross salary and the resulting net salary to the screen.
For example, if the value assigned to the number salary variable is 70000, then the output on the
screen should be similar to the following:
Test the code to check you get the expected output when assigning a range of different values to the
salary variable – Test using the following values:
- 10000
- 24000
- 44000
- 70000
Save your code to a file named – week2_ex3.ts.

*/
var salary = [10000, 24000, 44000, 70000];
function salaryCalc(valCalc) {
    for (var index = 0; index < valCalc.length; index++) {
        var element = valCalc[index];
        console.log("Gross Salary: " + element);
        if (element >= 60000) {
            console.log("Net Salary: " + (element - (element * 0.6)));
        }
        else if (element >= 40000) {
            console.log("Net Salary: " + (element - (element * 0.4)));
        }
        else if (element >= 20000) {
            console.log("Net Salary: " + (element - (element * 0.2)));
        }
        else if (element < 20000) {
            console.log("Net Salary: " + (element - (element * 0.1)));
        }
        else {
            console.log("Output the gross salary and the resulting net salary to the screen.");
        }
        console.log("____________________________");
    }
}
salaryCalc(salary);
