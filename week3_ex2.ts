/*
Exercise 2 – Video 3 – Classes
Create a class Employee which contains the following properties (variables):
- name
- job_Title
- years_of_service
Create another class EmployeeWages which extends (inherits from) the Employee class. The
EmployeeWages class should contain the following properties (variables):
- hours
- rate
Note that rate represents the amount of money per hour. Include a method named wages in the
EmployeeWages class which has two parameters:
- wages(hours, rate)
This method should return the wages due to an employee (hours * rate). If the employee has more
than 10 years service then add on an extra 100 to the wages.
Create an instance of the EmployeeWages class (hint: use the new keyword), assign values to the
properties (variables) and invoke the wages method from this instance. Print out the values to the
screen, including the wages. For example, if and Employees name is John Smith, he has 11 years
service, gets 20 per hour and worked 40 hours then the output should be as follows:
Note that wages are calculated as (20 * 40) + 100 in this example. Save your code to a file named –
*/

class Employee {
    //properties
    name: string;
    job_Title: string;
    years_of_servise: number;

    constructor() {
        this.name = "John";
        this.job_Title = "Designer";
        this.years_of_servise = 5;
    }

    //methods
    updateEmp(nm: string, jt: string, ys: number): String {
        this.name = nm;
        this.job_Title = jt;
        this.years_of_servise = ys;

        return "Employee updated"
    }
}

class EmployeeWages extends Employee {
    // properties
    hours: number;
    rate: number;
    wagesCalc: number;

    constructor() {
        super();
        this.hours = 0;
        this.rate = 0;
        this.wagesCalc = 0;
    }

    updateWage(h: number, r: number): String {
        this.hours = h;
        this.rate = r;
        this.wagesCalc = this.wages(h, r);
        return "Wage updated"
    }

    //methods
    wages(hs: number, rt: number): number {
        let wCalc = hs * rt;
        if (this.years_of_servise > 10) {
            wCalc = wCalc + 100;
        }
        return wCalc;
    }

}

let EW = new EmployeeWages;

console.log(EW.updateEmp("John Smith", "", 11));
console.log(EW.updateWage(40, 20));

console.log("Employee: " + EW.name);
console.log("Wages: " + EW.wagesCalc);