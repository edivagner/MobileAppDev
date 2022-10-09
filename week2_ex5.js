/*

Implement a for loop to calculate the sum of odd integers from 1 to 15. You will require a total
variable of type number. Within the body of the for loop update the total - e.g. total = total + odd
number. Output this total to the console. Hint: Sum of odd numbers from 1 to 15 is 64

*/
// recognise if the number is odd calc the module, if num % 2 = 1 is odd, if num % 2 = 0 is even
// let num: number = 15;
// console.log(num % 2)
// num = 14;
// console.log(num % 2)
var SumOdd = 0;
var maxNum = 15;
for (var i = 0; i < maxNum + 1; i++) {
    if ((i % 2) == 1) {
        // console.log(i)
        SumOdd = SumOdd + i;
    }
}
console.log("Sum of odd numbers from 1 to " + maxNum + " is " + SumOdd);
