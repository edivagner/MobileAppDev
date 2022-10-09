/*
Exercise 7 – Video 7
Implement the DOM example from video 7. Store the html in a file named week2_ex7.html and
optionally if putting the JavaScript in an external file instead of embedding it in the html save it in a
file named week2_ex7.js

*/
var _a;
var Messages = /** @class */ (function () {
    function Messages() {
    }
    Messages.prototype.dispaly_message = function () {
        alert("Hello to you from the browser!!");
    };
    Messages.prototype.change_text = function () {
        var el = document.getElementById("p1");
        el.innerHTML = "updated Text";
        el.style.color = "red";
        el.style.fontSize = "14pt";
    };
    return Messages;
}());
var messages = new Messages();
(_a = document.getElementById("b1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    messages.change_text();
    messages.dispaly_message();
});
