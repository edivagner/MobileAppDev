// Exercise 8 - Video 8 – Promises
function beverage(name, drank) {
    console.log("Consuming " + name);
    var prom = new Promise(function (resolve, reject) {
        if (drank) {
            reject("Finished drinking " + name);
        }
        else {
            resolve("Did not drink all of the " + name);
        }
    });
    prom.then(function (res) {
        console.log(res);
    })["catch"](function (res) {
        console.log(res);
    });
    return prom;
}
beverage("tea", true);
beverage("milk", false);
console.log("finished program");
