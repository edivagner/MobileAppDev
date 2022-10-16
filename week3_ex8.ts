// Exercise 8 - Video 8 – Promises

function beverage(name: string, drank: boolean): Promise<any> {
    console.log("Consuming " + name);
    let prom = new Promise(function (resolve, reject) {
        if (drank) {
            reject("Finished drinking " + name);
        } else {
            resolve("Did not drink all of the " + name);
        }
    });
    prom.then((res) => {
        console.log(res);
    }).catch((res) => {
        console.log(res);
    });
    return prom;
}

beverage("tea", true);

beverage("milk", false);


console.log("finished program");

