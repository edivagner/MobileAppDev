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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = "John";
        this.job_Title = "Designer";
        this.years_of_servise = 5;
    }
    //methods
    Employee.prototype.updateEmp = function (nm, jt, ys) {
        this.name = nm;
        this.job_Title = jt;
        this.years_of_servise = ys;
        return "Employee updated";
    };
    return Employee;
}());
var EmployeeWages = /** @class */ (function (_super) {
    __extends(EmployeeWages, _super);
    function EmployeeWages() {
        var _this = _super.call(this) || this;
        _this.hours = 0;
        _this.rate = 0;
        _this.wagesCalc = 0;
        return _this;
    }
    EmployeeWages.prototype.updateWage = function (h, r) {
        this.hours = h;
        this.rate = r;
        this.wagesCalc = this.wages(h, r);
        return "Wage updated";
    };
    //methods
    EmployeeWages.prototype.wages = function (hs, rt) {
        var wCalc = hs * rt;
        if (this.years_of_servise > 10) {
            wCalc = wCalc + 100;
        }
        return wCalc;
    };
    return EmployeeWages;
}(Employee));
var EW = new EmployeeWages;
console.log(EW.updateEmp("John Smith", "", 11));
console.log(EW.updateWage(40, 20));
console.log("Employee: " + EW.name);
console.log("Wages: " + EW.wagesCalc);
