'use strict';

function HW09() {

var apple, eat;

apple = prompt ("Ведите сколько яблок было у Чжуан-цзы ", "");
eat = prompt ("Ведите сколько яблок съел Цзэн-Цзы но не больше чем " + apple, "");

alert ("9. Остались ли яблоки у Чжуан-цзы? \n" + Boolean(apple-eat) + " осталось " + (apple-eat) + " яблок" );

}