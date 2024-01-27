'use strict'

let operation;
function calc() {
    let result;
    let num1 = Number(document.querySelector(".num1").value);
    let num2 = Number(document.querySelector(".num2").value);
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    document.querySelector('.num1').value = '';
    document.querySelector('.num2').value = '';
    document.querySelector(".result").innerHTML = result;
}

