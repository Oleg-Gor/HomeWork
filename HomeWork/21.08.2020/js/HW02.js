'use strict';

function HW02() {
    var x;

    x = prompt("Введите скорость улитки ", '');

    if (x < 0) {
        alert("улитка движется назад т.к. V = " + x);
    } else if (x > 0) {
        alert("улитка движется вперед т.к. V = " + x);
    } else if (x == 0) {
        alert("улитка стоит т.к. V = " + x);
    } else {
        alert("повторите ввод данных т.к. " + x);
    }

}