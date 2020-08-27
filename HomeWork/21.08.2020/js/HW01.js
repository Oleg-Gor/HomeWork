'use strict';

function HW01() {

    var x, y, z, g;

    x = +prompt("Введите Х", '');

    y = +prompt("Введите Y", '');

    z = +prompt("Введите Z", '');

    (x < y) ? (x < z) ? alert("min значение из трех это X = " + x + "\nпри этом X = " + x + ", Y = " + y + ", Z = " + z) : alert("min значение из трех это  Z = " + z + "\nпри этом X = " + x + ", Y = " + y + ", Z = " + z) : (y < z) ? alert("min значение из трех это Y = " + y + "\nпри этом X = " + x + ", Y = " + y + ", Z = " + z) : alert("min значение из трех это  Z = " + z + "\nпри этом X = " + x + ", Y = " + y + ", Z = " + z);

}