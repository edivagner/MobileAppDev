// Implement the function in exercise 6 as an arrow function. Save your code to a file name
var Vnum;
(function (Vnum) {
    Vnum[Vnum["x"] = 2] = "x";
    Vnum[Vnum["y"] = 3] = "y";
    Vnum[Vnum["z"] = 4] = "z";
})(Vnum || (Vnum = {}));
var arrFunc = function (X, Y, Z) { return X * Y * Z; };
console.log("".concat(Vnum.x, " * ").concat(Vnum.y, " * ").concat(Vnum.z, " = ").concat(arrFunc(Vnum.x, Vnum.y, Vnum.z), " "));
