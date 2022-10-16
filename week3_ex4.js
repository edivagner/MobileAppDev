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
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
for (var m in months) {
    console.log(m);
}
var now = new Date();
console.log(now);
console.log(now.toLocaleDateString());
var i = now.getMonth();
console.log("Current month: " + months[i]);
