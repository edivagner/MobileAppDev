/*
Exercise 7 – Video 7
Implement the DOM example from video 7. Store the html in a file named week2_ex7.html and
optionally if putting the JavaScript in an external file instead of embedding it in the html save it in a
file named week2_ex7.js

*/

class Messages {
    dispaly_message() {
        alert("Hello to you from the browser!!");
    }
    change_text() {
        let el = document.getElementById("p1");
        el.innerHTML = "updated Text";
        el.style.color = "red";
        el.style.fontSize = "14pt";
    }
}

let messages = new Messages();

document.getElementById("b1")?.addEventListener("click", function () {
    messages.change_text();
    messages.dispaly_message();
}
);