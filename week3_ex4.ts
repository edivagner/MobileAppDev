/*
Exercise 4 – Video 5 – Enums
Create an Enum which represents months of the year – January, February etc…
Using a for .. in loop print out the values of this Enum to the console.
Use the following line of code to determine the current month:
This method returns a numeric value representing the current month and assigns it to the variable i.
Use this value to access the month it represents in the Enum and print the output to the screen. For
example if it is June, then getMonth method will return 5 (0 if January, 1 if February etc..), and this
should correspond to June in the Enum. An example output from this program is as follows:
*/

enum months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}

for (const m in months) {
    console.log(m);
}


const now = new Date();

console.log(now);

console.log(now.toLocaleDateString());

let i: number = now.getMonth();

console.log("Current month: " + months[i]);