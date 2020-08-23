'use strict'


function HW08() {
var x;
const cilobait = 0.001;
const megabait = 1e-6;
const gigabait = 1e-9;

x = prompt ("Введите размер в байтах и узнаете результат в: \n Kbyte  \n Mbyte \n Gbyte", '');

alert ("8. "+ x + " byte — это: \n \n"+ cilobait*x + " Kbyte \n" + (megabait*x) + " Mbyte \n" + gigabait*x + " Gbyte \n" );

}