/*

Exercise 6 – Video 6
Implement a switch statement to determine the cost to apply for a product id. The product id can be
any number from 1 to 5. Based on the product id, assign a cost to the product id for the matching
case. In your code, create a quantity variable, and output to the screen the total cost, cost for
product id times quantity. Use the following cost values for the product ids:
- Product id 1 cost is 5
- Product id 2 cost is 6
- Product id 3 cost is 7
- Product id 4 cost is 8
- Product id 5 cost is 9
Include a default in your switch statement for an invalid product id. An example output for product
id of 3 with a quantity of 2 is:
Test for each of the product ids and also an invalid product id. Include some different quantities.

*/
function productCost(id) {
    var cost = 0;
    switch (id) {
        case 1:
            cost = 5;
            break;
        case 2:
            cost = 6;
            break;
        case 3:
            cost = 7;
            break;
        case 4:
            cost = 8;
            break;
        case 5:
            cost = 9;
            break;
        default:
            console.log("invalid product id");
            break;
    }
    return cost;
}
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter product id: ', function (prodID) {
    var prodCost = productCost(Number(prodID));
    switch (prodCost) {
        case 0:
            console.log("==> invalid product id <==");
            rl.close();
            break;
        default:
            rl.question('Enter quantity: ', function (qty) {
                var prodQty = Number(qty);
                console.log("========================================");
                console.log("Price of product " + prodID + ": ", prodCost);
                console.log("Quantity of product " + prodID + " ordered: ", prodQty);
                console.log("Total cost: " + prodCost * prodQty);
                rl.close();
            });
            break;
    }
});
// rl.question('Enter quantity: ', (qty) => {
//     let prodQty = Number(qty);
//     if (prodCost == 0) {
//         console.log("==> invalid product id <==");
//     } else {
//         console.log("========================================")
//         console.log("Price of product " + prodID + ": ", prodCost);
//         console.log("Quantity of product " + prodID + " ordered: ", prodQty);
//         console.log("Total cost: " + prodCost * prodQty);
//     }
//     rl.close();
// });
