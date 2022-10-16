// Implement the function in exercise 6 as an arrow function. Save your code to a file name

enum Vnum {
    x = 2,
    y = 3,
    z = 4
}

let arrFunc = (X: number, Y: number, Z: number) => { return X * Y * Z; };

console.log(`${Vnum.x} * ${Vnum.y} * ${Vnum.z} = ${arrFunc(Vnum.x, Vnum.y, Vnum.z)} `);