/*

Implement a for loop to print out your name to the console screen 7 times. An example output is as
follows if your name is Kevin:

*/
function printName(person, num) {
    for (var i = 0; i < num; i++) {
        console.log(i + 1 + ". " + person);
    }
}
var user = "Edivagner";
var num = 7;
printName(user, num);
