'use strict';

function HW03() {
var firstName, lastName;

firstName = prompt ('Введите имя', '');
firstName = firstName[0].toUpperCase() + firstName.slice(1);

lastName = prompt ('Введите Фамилию', '' );
lastName = lastName[0].toUpperCase() + lastName.slice(1);

alert ('3. \"What’s up ' + firstName + " "+ lastName +"\"" );

}