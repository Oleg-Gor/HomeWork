'use strict';

function HW04() {

    var age;

    age = prompt("Введите свой возраст ", '');

    age >= 20 && age <= 30 ? alert("Вам выслали повестку т.к. Вам " + age) : alert("Вы или слишком старый или очень молодой, т.к. Вам " + age);



}