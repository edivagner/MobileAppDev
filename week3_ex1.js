/*

Exercise 1 – Video 2 – Arrays
There are 3 parts to this exercise:
a. Create an array which stores the days of the week – Monday, Tuesday etc .. and using the
array method forEach, print out the values stored in the array to the screen.
b. Implement the following array:
Using the array method splice, update the array to [2, 4, 6, 8, 10]. Print out the contents of
the updated array to the console. Then using the array splice on the updated array, restore
the array to its original form and print out the content of the array – [2, 4, 6, 8, 9, 10].
c. Create another array which stores the days of the week – Monday, Tuesday etc .. and using
the array method map, determine the number of characters in each day of the week. For
example, Monday contains 6 characters. Use the length property on each of the values in
the array to determine the number of characters for each value. Output the new array which
contains the length of each value to the console. Example out is as follows:

*/
console.log("A-) ");
var daysWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
daysWeek.forEach(function (element) {
    console.log(element);
});
console.log("=================================================");
console.log("B-) ");
var numbers = [2, 4, 6, 8, 10];
console.log("Original " + numbers);
var spliceNumbers = numbers.splice(1, 2);
console.log(numbers);
// console.log(spliceNumbers);
console.log(spliceNumbers[0]);
console.log(spliceNumbers[1]);
// restore the original
numbers.splice(1, 0, spliceNumbers[0], spliceNumbers[1]);
console.log(numbers);
console.log("=================================================");
console.log("C-) ");
var daysWeekC = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var map1 = daysWeekC.map(function (element) { return element.length; });
console.log(map1);
