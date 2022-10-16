/*
Exercise 6 - Video 7 – Functions
Create a function named product which accepts 3 number parameters. This function should return
the result of multiplying 3 numbers which are passed to this function. Print out the result returned
by this function. For example if the 3 numbers passed to the function are 2, 3, and 4 then print out
something similar as follows to the screen:
*/

function product(numA: number, numB: number, numC: number): number {
    return numA * numB * numC;
}

enum V {
    A = 2,
    B,
    C
}


console.log(V.A + " * " + V.B + " * " + V.C + " = " + product(V.A, V.B, V.C));